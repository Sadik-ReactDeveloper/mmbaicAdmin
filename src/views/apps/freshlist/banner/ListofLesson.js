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
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";

import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import "moment-timezone";
import { Route } from "react-router-dom";

class ListofLesson extends React.Component {
  state = {
    rowData: [],
    LessonList: [],
    SelectedRow: {},
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    modal: false,
    ShowList: false,

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
      },

      {
        headerName: "Image",
        field: "Image",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                {params?.data?.image && params?.data?.image ? (
                  <>
                    <img
                      style={{ borderRadius: "8px" }}
                      src={params?.data?.image}
                      height={40}
                      width={50}
                      alt="image"
                    />
                  </>
                ) : (
                  "NA"
                )}
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Category",
        field: "category",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.category)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Duration",
        field: "lesson_duration",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.lesson_duration)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Title",
        field: "title",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.title)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "  Lesson URL",
        field: "lesson_url",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.lesson_url)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Description",
        field: "description",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.description)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Status",
        field: "status",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return params.data.status === "Active" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.data.status === "Inactive" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.status}
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
          console.log(params.data);
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
                        // `/app/mmbaic/services/editService/${params.data.id}/`
                        `/app/mmbaic/AddInsidecourse/${params.data?.id}`
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
                    onClick={() =>
                      history.push(
                        `/app/mmbaic/EditInsideCourses/${params.data?.id}/${params?.data?.course_id}`
                        // `/app/mmbaic/services/editService/${params.data.id}`
                      )
                    }
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
    ],
  };

  async componentDidMount() {
    let value = this.props;
    const data = new FormData();
    data.append("course_id", value?.SelectedRow?.id);
    await axiosConfig
      .post("/getLessons", data)
      .then((response) => {
        let rowData = response.data.data;
        this.setState({ rowData });
        console.log(rowData);
      })
      .catch((err) => {
        swal("something Went Wrong");

        console.log(err);
      });
  }

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
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              {/* <Col>
                <h1 col-sm-6 className="float-left">
                  Lesson List
                </h1>
              </Col>
              <Col>
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
              </Col>
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className="btn btn-success float-right"
                      onClick={() => history.push("/app/mmbaic/addcourse/0")}
                    >
                      Add Course
                    </Button>
                  )}
                />
              </Col> */}
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
      </Row>
    );
  }
}
export default ListofLesson;
