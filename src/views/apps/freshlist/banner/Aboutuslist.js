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
    Loader: false,
    Addheading: false,
    heading: "",
    currenPageSize: "",
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

      {
        headerName: "Image",
        field: "Image",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                {/* <span>{ReactHtmlParser(params.data?.category)}</span> */}
                {params?.data?.image && (
                  <>
                    <img
                      style={{ borderRadius: "8px" }}
                      src={params?.data?.image}
                      height={40}
                      width={50}
                      alt="image"
                    />
                  </>
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
        headerName: "Price",
        field: "price",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.price)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Duration",
        field: "course_duration",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.course_duration)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Course Title",
        field: "course_title",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.course_title)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "URL",
        field: "course_url",

        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.course_url)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "DesCription",
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
          return params.data?.status === "Active" ? (
            <div className="badge badge-pill badge-success">
              {params.data?.status}
            </div>
          ) : params.data?.status === "Inactive" ? (
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
                  <Badge
                    style={{ cursor: "pointer" }}
                    title="Add more data "
                    className="px-1 mr-1"
                    onClick={() =>
                      history.push(
                        // `/app/mmbaic/services/editService/${params.data.id}/`
                        `/app/mmbaic/AddInsidecourse/${params.data?.id}`
                      )
                    }
                    color="primary"
                  >
                    + Add
                  </Badge>
                )}
              />
              <Route
                render={({ history }) => (
                  <Eye
                    className="mr-50"
                    size="25px"
                    color="green"
                    onClick={(e) => {
                      this.handleListlession(e, params.data);
                      this.setState({ Addheading: false });
                    }}
                  />
                )}
              />
              <Route
                render={({ history }) => (
                  <Badge
                    className="mr-50"
                    size="25px"
                    color="primary"
                    onClick={(e) => {
                      this.handleListlession(e, params.data);
                      this.setState({ Addheading: true });
                    }}
                  >
                    + heading
                  </Badge>
                )}
              />
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(
                        `/app/mmbaic/addcourse/${params.data?.id}`
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
  async componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    const data = new FormData();

    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    await axiosConfig
      .post("/getCourses", data)
      .then((response) => {
        let rowData = response.data.data?.courses;
        if (rowData) {
          this.setState({ rowData });
        }
        console.log(rowData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/deltermcondition/${id}`).then((response) => {
      console.log(response);
    });
  }
  handleAddHeading = async (e) => {
    e.preventDefault();
    // console.log(this.state.heading);
    // console.log(this.state.SelectedRow?.id);
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    const data = new FormData();

    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    data.append("headings", this.state.heading);
    data.append("course_id", this.state.SelectedRow?.id);
    await axiosConfig
      .post("/addCoursesHeadings", data)
      .then((res) => {
        console.log(res);
        swal("Heading Added Successfully");
        this.setState({ heading: "" });
      })
      .catch((err) => {
        console.log(err);
        swal("Something went wrong");
      });
  };
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
    const { rowData, columnDefs, defaultColDef, LessonList, SelectedRow } =
      this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  Courses List
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
          <ModalHeader toggle={this.toggleModal}>Lessons</ModalHeader>
          <ModalBody>
            <>
              {this.state.Addheading ? (
                <>
                  <div className="">
                    <h2 className="mx-2">Add Heading</h2>
                  </div>

                  <div className="p-2">
                    <Form onSubmit={this.handleAddHeading}>
                      <Row>
                        <Col lg="4" md="4" sm="4" xs="12">
                          <input
                            required
                            className="form-control"
                            type="text"
                            name="heading"
                            value={this.state.heading}
                            onChange={(e) =>
                              this.setState({ heading: e.target.value })
                            }
                          />
                        </Col>
                        <Col lg="4" md="4" sm="4" xs="12">
                          <Button color="primary" type="submit">
                            Submit
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h2>Lesson List</h2>
                    <div>
                      <Route
                        render={({ history }) => (
                          <Badge
                            style={{ cursor: "pointer" }}
                            title="Add more data "
                            className="px-1 mr-1"
                            onClick={() =>
                              history.push(
                                `/app/mmbaic/AddInsidecourse/${this.state.SelectedRow?.id}`
                              )
                            }
                            color="primary"
                          >
                            + Add
                          </Badge>
                        )}
                      />
                    </div>
                  </div>
                  <div className="">
                    <ListofLesson
                      SelectedRow={SelectedRow}
                      LessonList={LessonList}
                    />
                  </div>
                </>
              )}
            </>

            {/* <div className="p-1">
              <Table hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>image</th>

                   
                    <th>Title</th>
                    <th>Lesson URL</th>
             
                    <th>description</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.LessonList &&
                    this.state.LessonList?.map((ele, i) => {
                     
                      return (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <th>
                            {ele?.image && ele?.image ? (
                              <>
                                <img
                                  src={ele?.image}
                                  height={50}
                                  width={50}
                                  alt="image"
                                />
                              </>
                            ) : (
                              "NA"
                            )}
                          </th>
                       
                          <th>{ele?.title}</th>
                          <th>{ele?.lesson_url}</th>
                          <th>
                            {ReactHtmlParser(ele?.description)?.slice(0, 30)}
                          </th>

                          <th>
                            {" "}
                            {ele.status === "Active" ? (
                              <div className="badge badge-pill badge-success">
                                {ele.status}
                              </div>
                            ) : ele.status === "Inactive" ? (
                              <div className="badge badge-pill badge-warning">
                                {ele.status}
                              </div>
                            ) : null}
                            <Trash2
                              className="mr-50"
                              size="25px"
                              color="red"
                              onClick={() => {
                                let selectedData =
                                  this.gridApi.getSelectedRows();
                                this.runthisfunction(ele?._id);
                                this.gridApi.updateRowData({
                                  remove: selectedData,
                                });
                              }}
                            />
                          </th>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </div> */}
          </ModalBody>
        </Modal>
      </Row>
    );
  }
}
export default TAndCList;
