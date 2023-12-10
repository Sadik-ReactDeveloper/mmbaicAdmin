import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  Form,
  Label,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";

//import classnames from "classnames";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
// import Moment from "react-moment";
import "moment-timezone";
import { Route } from "react-router-dom";
import ListofLesson from "./ListofLesson";
import swal from "sweetalert";
import { FaHeading } from "react-icons/fa";

class TAndCList extends React.Component {
  state = {
    rowData: [],
    LessonList: [],
    SelectedRow: {},
    paginationPageSize: 20,
    Promocode: "",
    Discount: "",
    startdate: "",
    Enddate: "",
    Status: "Active",
    Loader: false,
    Addheading: false,
    heading: "",
    currenPageSize: "",
    EditId: "",
    getPageSize: "",
    modal: false,

    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 150,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },

      //   {
      //     headerName: "Image",
      //     field: "Image",

      //     filter: "agSetColumnFilter",
      //     width: 200,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <div className="">
      //             {/* <span>{ReactHtmlParser(params.data?.category)}</span> */}
      //             {params?.data?.image && (
      //               <>
      //                 <img
      //                   style={{ borderRadius: "8px" }}
      //                   src={params?.data?.image}
      //                   height={40}
      //                   width={50}
      //                   alt="image"
      //                 />
      //               </>
      //             )}
      //           </div>
      //         </div>
      //       );
      //     },
      //   },
      {
        headerName: "Promocode",
        field: "promocode",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.promocode)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Discount",
        field: "discount",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.discount)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "startdate",
        field: "startdate",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.startdate)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Enddate",
        field: "enddate",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.enddate)}</span>
              </div>
            </div>
          );
        },
      },
      //   {
      //     headerName: "URL",
      //     field: "course_url",

      //     filter: "agSetColumnFilter",
      //     width: 200,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <div className="">
      //             <span>{ReactHtmlParser(params.data?.course_url)}</span>
      //           </div>
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     headerName: "DesCription",
      //     field: "description",

      //     filter: "agSetColumnFilter",
      //     width: 200,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <div className="">
      //             <span>{ReactHtmlParser(params.data?.description)}</span>
      //           </div>
      //         </div>
      //       );
      //     },
      //   },
      {
        headerName: "Status",
        field: "status",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return params.data?.status === "Active" ? (
            <div className="badge badge-pill badge-success">
              {params.data?.status}
            </div>
          ) : params.data?.status === "Deactive" ? (
            <div className="badge badge-pill badge-warning">
              {params.data?.status}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Actions",
        field: "sortorder",
        field: "transactions",
        width: 400,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() => {
                      this.toggleModal();
                      this.setState({ EditId: params.data?.id });
                      this.setState({ Promocode: params.data?.promocode });
                      this.setState({ Discount: params.data?.discount });
                      this.setState({ startdate: params.data?.startdate });
                      this.setState({ Enddate: params.data?.enddate });
                      this.setState({ Status: params.data?.status });
                    }}
                  />
                )}
              />
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
            </div>
          );
        },
      },
      // {
      //   headerName: "Actions",
      //   field: "transactions",
      //   width: 400,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="actions cursor-pointer">
      //         <Trash2
      //           className="mr-50"
      //           size="25px"
      //           color="Red"
      //           onClick={() => {
      //             let selectedData = this.gridApi.getSelectedRows();
      //             this.runthisfunction(params.data._id);
      //             this.gridApi.updateRowData({ remove: selectedData });
      //           }}
      //         />

      //       </div>
      //     );
      //   },
      // },
    ],
  };
  handleListlession = (e, value) => {
    console.log(value);
    e.preventDefault();
    this.toggleModal();
    // this.setState({ Loader: true });

    this.setState({ SelectedRow: value });

    // getLessons
  };
  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  handleAddDetails = (e, data) => {
    console.log(e);
    console.log(data);
  };
  HandleGetAllpromo = async () => {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    const data = new FormData();

    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    await axiosConfig
      .post("/getPromocodeList", data)
      .then((response) => {
        let rowData = response.data.data;
        if (rowData) {
          this.setState({ rowData });
        }
        console.log(rowData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  async componentDidMount() {
    await this.HandleGetAllpromo();
  }
  handleSubmitPromocode = async (e) => {
    e.preventDefault();

    debugger;
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    const data = new FormData();
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    data.append("edit_id", this.state.EditId);
    data.append("promocode", this.state.Promocode);
    data.append("discount", this.state.Discount);
    data.append("startdate", this.state.startdate);
    data.append("enddate", this.state.Enddate);
    data.append("status", this.state.Status);
    await axiosConfig
      .post("/addpromocode", data)
      .then((response) => {
        let rowData = response.data;
        this.HandleGetAllpromo();
        this.toggleModal();

        swal(
          `Promo code ${
            this.state.EditId == 0 ? "Added" : "Updated"
          } Successfully`
        );
        console.log(rowData);
      })
      .catch((err) => {
        console.log(err);
        swal("error", "Something went Wrong Please Try again later");
      });
  };
  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/deltermcondition/${id}`).then((response) => {
      console.log(response);
    });
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
    const {
      rowData,
      columnDefs,
      defaultColDef,
      LessonList,
      SelectedRow,
      Promocode,
      Discount,
      startdate,
      Enddate,
      Status,
    } = this.state;

    return (
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  Promotional List
                </h1>
              </Col>
              {/* <Col>
                {" "}
                <div className="d-flex justify-content-end">
                  <Route
                    render={({ history }) => (
                      <Button
                        className="btn btn-success float-right"
                        onClick={() =>
                          history.push("/app/mmbaic/category/addCategory")
                        }
                      >
                        + Category
                      </Button>
                    )}
                  />
                </div>
              </Col> */}
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className="btn btn-success float-right"
                      onClick={(e) => {
                        this.toggleModal();
                        this.setState({ EditId: 0 });
                      }}
                    >
                      + Add
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
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                          of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
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
                        gridOptions={{}}
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
        <Modal
          className="modal-dialog modal-lg"
          size="lg"
          // size="lg"
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          // className={this.props.className}
          // style={{ maxWidth: "1050px" }}
        >
          <ModalHeader toggle={this.toggleModal}>Add PromoCode</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmitPromocode}>
              <Row>
                <Col className="mb-1" lg="6" md="6" sm="12">
                  <Label>Promo code</Label>
                  <Input
                    required
                    type="text"
                    name="targetEndDate"
                    placeholder="Enter Promotion Code"
                    value={Promocode}
                    onChange={(e) => {
                      this.setState({
                        Promocode: e.target.value.toUpperCase(),
                      });
                    }}
                  />
                </Col>
                <Col className="mb-1" lg="6" md="6" sm="12">
                  <Label>Discount in Percentage</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Enter Amount"
                    value={Discount}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Use regular expression to allow only numbers
                      const numericValue = value.replace(/\D/g, "");
                      if (numericValue.length < 3) {
                        this.setState({
                          Discount: numericValue,
                        });
                      }
                    }}
                  />
                </Col>
                <Col className="mb-1" lg="6" md="6" sm="12">
                  <div className="">
                    <Label>Start Date</Label>
                    <Input
                      required
                      type="date"
                      name="DiscountinPercentage"
                      value={startdate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => {
                        this.setState({
                          startdate: e.target.value,
                        });
                      }}
                      onWheel={(e) => e.preventDefault()}
                    />
                  </div>
                </Col>
                <Col className="mb-1" lg="6" md="6" sm="12">
                  <div className="">
                    <Label>End Date</Label>
                    <Input
                      required
                      type="date"
                      name="DiscountinPercentage"
                      value={Enddate}
                      onChange={(e) =>
                        this.setState({
                          Enddate: e.target.value,
                        })
                      }
                      onWheel={(e) => e.preventDefault()}
                    />
                  </div>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <Label className="mb-0">Status</Label>
                  <div
                    className="form-label-group mt-1"
                    onChange={(e) => {
                      this.setState({
                        Status: e.target.value,
                      });
                    }}
                  >
                    <input
                      checked={Status == "Active"}
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      // checked={status == "Inactive"}
                      checked={Status == "Deactive"}
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Deactive"
                    />
                    <span style={{ marginRight: "3px" }}>Deactive</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex justify-content-center">
                    <Button.Ripple
                      color="primary"
                      type="submit"
                      className="mt-2"
                    >
                      Submit
                    </Button.Ripple>
                  </div>
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
      </Row>
    );
  }
}
export default TAndCList;
