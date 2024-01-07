import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  CustomInput,
} from "reactstrap";
import { Route } from "react-router-dom";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import HtmlParser from "react-html-parser";
class BannerList extends React.Component {
  state = {
    rowData: [],
    Viewpermisson: null,
    Editpermisson: null,
    Createpermisson: null,
    Deletepermisson: null,
    paginationPageSize: 8,
    currenPageSize: "",
    getPageSize: "",
    searchvalue: "",
    defaultColDef: {
      sortable: true,
      // editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 150,
      },
      {
        headerName: "Actions",
        field: "sortorder",
        width: 150,
        cellRendererFramework: (params) => {
          // console.log(params);
          return (
            <div className="actions cursor-pointer">
              {/* <Route
                render={({ history }) => (
                  <Eye
                    className="mr-50"
                    size="25px"
                    color="green"
                    onClick={() =>
                      history.push(
                        `/app/freshlist/banner/viewBanner/${params.data._id}`
                      )
                    }
                  />
                )}
              /> */}

              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() => {
                      localStorage.setItem(
                        "SelectedCmsdata",
                        JSON.stringify(params.data)
                      );
                      history.push(
                        `/app/mmbaic/slider/EditCMS/${params.data?.id}`
                      );
                    }}
                  />
                )}
              />
              <Route
                render={({ history }) => (
                  <Trash2
                    className="mr-50"
                    size="25px"
                    color="red"
                    onClick={() => {
                      let selectedData = this.gridApi.getSelectedRows();
                      this.runthisfunction(params.data._id);
                      this.gridApi.updateRowData({ remove: selectedData });
                    }}
                  />
                )}
              />
            </div>
          );
        },
      },
      {
        headerName: "Type",
        field: "data.type",
        filter: true,
        width: 200,
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            // Implement your custom filter logic here
            // For example, use case-insensitive search
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.data?.type}</span>
            </div>
          );
        },
      },
      {
        headerName: "Title",
        field: "data.title",
        filter: true,
        width: 200,
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            // Implement your custom filter logic here
            // For example, use case-insensitive search
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.data?.title}</span>
            </div>
          );
        },
      },
      {
        headerName: "Image",
        field: "data.image",
        filter: false,
        width: 200,
        setColumnVisible: false,
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            // Implement your custom filter logic here
            // For example, use case-insensitive search
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              {params.data?.data?.image && (
                <img
                  className=" rounded-circle  mr-3"
                  src={params.data?.data?.image}
                  alt="user avatar"
                  height="40"
                  width="40"
                />
              )}
            </div>
          );
        },
      },
      {
        headerName: "Page Name",
        field: "data.pagename",
        filter: true,
        width: 200,
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            // Implement your custom filter logic here
            // For example, use case-insensitive search
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.data?.pagename}</span>
            </div>
          );
        },
      },
      {
        headerName: "Notice",
        field: "data.notice",
        filter: true,
        width: 200,
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            // Implement your custom filter logic here
            // For example, use case-insensitive search
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.data?.notice}</span>
            </div>
          );
        },
      },
      {
        headerName: "Text",
        field: "data.description",
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            // Implement your custom filter logic here
            // For example, use case-insensitive search
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{HtmlParser(params.data?.data?.description)}</span>
            </div>
          );
        },
      },
      {
        headerName: "Status",
        field: "data.IsActive",
        filter: true,
        width: 150,
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            // Implement your custom filter logic here
            // For example, use case-insensitive search
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        cellRendererFramework: (params) => {
          return params.data?.data?.IsActive == "Active" ? (
            <div className="badge badge-pill badge-success">
              {params.data?.data?.IsActive}
            </div>
          ) : params.data?.data?.IsActive == "Inactive" ? (
            <div className="badge badge-pill badge-warning">
              {params.data?.data?.IsActive}
            </div>
          ) : null;
        },
      },
    ],
  };

  async componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "CMS Management"
    );
    this.setState({ Viewpermisson: newparmisson?.permission.includes("View") });
    this.setState({
      Createpermisson: newparmisson?.permission.includes("Create"),
    });
    this.setState({
      Editpermisson: newparmisson?.permission.includes("Edit"),
    });
    this.setState({
      Deletepermisson: newparmisson?.permission.includes("Delete"),
    });
    const data = new FormData();
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    await axiosConfig.post("/getCmsList", data).then((response) => {
      const rowData = response?.data?.data?.content;
      // console.log(rowData);
      if (rowData) {
        this.setState({ rowData });
      }
    });
  }

  runthisfunction(id) {
    axiosConfig.delete(`/admin/del_banner/${id}`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };
  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };
  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      // console.log(rowData),
      <Row className="app-user-list">
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 sm="6" className="float-left">
                  CMS List
                </h1>
              </Col>
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className="btn btn-success float-right"
                      color="primary"
                      onClick={() =>
                        history.push("/app/mmbaic/slider/addSlider")
                      }
                    >
                      Add CMS
                    </Button>
                  )}
                />
              </Col>
            </Row>
            <CardBody>
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-2 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                              (this.state.getPageSize - 1)}{" "}
                          -{" "}
                          {this.state.rowData?.length -
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData?.length}{" "}
                          of {this.state.rowData?.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(10)}
                          >
                            10
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}
                          >
                            134
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <CustomInput
                          type="select"
                          className="form-control"
                          onChange={(e) => {
                            this.setState({ searchvalue: e.target.value });
                            this.updateSearchQuery(e.target.value);
                          }}
                          value={this.state.searchvalue}
                        >
                          <option value="">--Select--</option>
                          <option value="Headernotice">Top Header</option>
                          <option value="Header">Header</option>
                          <option value="Slider">Slider</option>
                          <option value="Aboutus">About Us</option>
                          <option value="Membership">Membership</option>
                          <option value="Opportunity">Opportunity</option>
                          <option value="Testimonials">Testimonials</option>
                          <option value="ContactUS">ContactUS</option>
                          <option value="HowItWorks">How It Works</option>
                          <option value="Blogs">Blogs</option>
                          <option value="Footer">Footer</option>
                        </CustomInput>
                      </div>
                      <div className="table-input mr-1">
                        <Input
                          placeholder="search..."
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="export-btn">
                        <Button.Ripple
                          color="primary"
                          onClick={() => this.gridApi.exportDataAsCsv()}
                        >
                          Export as CSV
                        </Button.Ripple>
                      </div>
                    </div>
                  </div>
                  <ContextLayout.Consumer>
                    {(context) => (
                      <AgGridReact
                        gridOptions={{ quickFilter: true }}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={false}
                        pagination={true}
                        paginationPageSize={this.state.paginationPageSize}
                        pivotPanelShow="always"
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default BannerList;
