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
  CardTitle,
  CardText,
  Label,
  CustomInput,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Trash2, ChevronDown, Edit } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import Moment from "react-moment";

import "moment-timezone";
import { Route } from "react-router-dom";
import swal from "sweetalert";

class ProgramCRm extends React.Component {
  state = {
    rowData: [],
    Viewpermisson: null,
    Editpermisson: null,
    Createpermisson: null,
    Deletepermisson: null,
    paginationPageSize: 20,
    currenPageSize: "",
    Leadtype: "All",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "UID",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        // checkboxSelection: true,
        width: 100,
        filter: true,
      },
      {
        headerName: "firstname",
        field: "firstname",
        filter: "agSetColumnFilter",
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.firstname}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Last Name",
        field: "lastname",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.lastname}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Postal code",
        field: "postal_code",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.postal_code}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Phone number",
        field: "phone",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.phone}</span>
              </div>
            </div>
          );
        },
      },

      {
        headerName: "Email",
        field: "email",
        filter: "agSetColumnFilter",
        width: 230,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.email}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Device",
        field: "device",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.device}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "State",
        field: "state_title",
        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.state_title}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "City",
        field: "city_title",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.city_title}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Seminar Status",
        field: "attend_seminar",
        filter: "agSetColumnFilter",
        width: 200,
        cellRendererFramework: (params) => {
          return params.data?.attend_seminar == "Yes" ? (
            <div className="badge badge-pill badge-success">
              {params.data?.attend_seminar}
            </div>
          ) : params.data?.attend_seminar == "No" ? (
            <div className="badge badge-pill badge-warning">
              {params.data?.attend_seminar}
            </div>
          ) : null;
        },
      },
      {
        headerName: " Update Seminar Status",
        field: "attend_seminar",
        filter: "agSetColumnFilter",
        width: 260,
        cellRendererFramework: (params) => {
          // console.log(object);
          return params.data?.attend_seminar == "Yes" ? (
            <div className="badge badge-pill badge-success">
              {params.data?.attend_seminar}
            </div>
          ) : params.data?.attend_seminar == "No" ? (
            <div className="">
              {params.data?.crm_status == "Accepted" ? (
                <CustomInput
                  type="select"
                  name="changestatus"
                  onChange={(e) => {
                    let pageparmission = JSON.parse(
                      localStorage.getItem("userData")
                    );
                    const formdata = new FormData();
                    formdata.append("program_id", params?.data?.id);
                    formdata.append("attend_seminar", e.target.value);
                    // formdata.append(
                    //   "program_crm_id",
                    //   pageparmission?.Userinfo?.id
                    // );

                    axiosConfig
                      .post("/changeSeminarStatus", formdata)
                      .then((response) => {
                        let rowData = response?.data;
                        // console.log(rowData);
                        this.Alllist();
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  <option>--Select--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </CustomInput>
              ) : (
                <div className="badge badge-pill badge-warning">
                  Not Accepted
                </div>
              )}
            </div>
          ) : null;
        },
      },
      {
        headerName: "status",
        field: "crm_status",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return params.data?.crm_status == "Active" ? (
            <div className="badge badge-pill badge-success">
              {params.data?.crm_status}
            </div>
          ) : params.data?.crm_status === "Closed" ? (
            <div className="badge badge-pill badge-success">
              {params.data?.crm_status}
            </div>
          ) : params.data?.crm_status === "Hold" ? (
            <div className="badge badge-pill badge-danger">
              {params.data?.crm_status}
            </div>
          ) : params.data?.crm_status === "Accepted" ? (
            <div className="badge badge-pill badge-success">
              {params.data?.crm_status}
            </div>
          ) : params.data?.crm_status === "Pending" ? (
            <div className="badge badge-pill badge-warning">
              {params.data?.crm_status}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Change Status",
        field: "Change Status",
        filter: "agSetColumnFilter",
        width: 190,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                {params.data?.crm_status == "Accepted" ||
                params.data?.crm_status == "Rejected" ? (
                  <>{params.data?.crm_status}</>
                ) : (
                  <>
                    <CustomInput
                      type="select"
                      name="changestatus"
                      onChange={(e) => {
                        let pageparmission = JSON.parse(
                          localStorage.getItem("userData")
                        );
                        const formdata = new FormData();
                        formdata.append("program_id", params?.data?.id);
                        formdata.append("crm_status", e.target.value);
                        formdata.append(
                          "program_crm_id",
                          pageparmission?.Userinfo?.id
                        );

                        axiosConfig
                          .post("/changeProgramStatus", formdata)
                          .then((response) => {
                            let rowData = response?.data;
                            console.log(rowData);
                            this.Alllist();
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      <option>--Select--</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                    </CustomInput>
                  </>
                )}
              </div>
            </div>
          );
        },
      },
      // {
      //   headerName: "companyname.",
      //   field: "company_name",
      //   filter: "agSetColumnFilter",
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div className="">
      //           <span>{params?.data?.company_name}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "companytype.",
      //   field: "company_type",
      //   filter: "agSetColumnFilter",
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div className="">
      //           <span>{params?.data?.company_type}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "GSTIN",
      //   field: "company_type",
      //   filter: "agSetColumnFilter",
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div className="">
      //           <span>{params?.data?.gstin_no}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "place of supply.",
      //   field: "place_supply",
      //   filter: "agSetColumnFilter",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div className="">
      //           <span>{params?.data?.place_supply}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "billing Address.",
      //   field: "billing_city",
      //   filter: "agSetColumnFilter",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         {/* {this.state.billing_street && ( */}
      //         <div className="">
      //           <span>{params?.data?.billing_street} </span>
      //           <span>{params?.data?.billing_city},</span>
      //           <span>{params?.data?.billing_state},</span>
      //           <span>{params?.data?.billing_country}, </span>
      //           <span>{params?.data?.billing_pincode}</span>
      //         </div>
      //         {/* )} */}
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "Shipping Address.",
      //   field: "billing_city",
      //   filter: "agSetColumnFilter",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div className="">
      //           {/* {this.state.shipping_city && ( */}
      //           <div>
      //             <span>{params?.data?.shipping_street},</span>
      //             <span>{params?.data?.shipping_state},</span>
      //             <span>{params?.data?.shipping_city},</span>
      //             <span>{params?.data?.shipping_country},</span>
      //             <span>{params?.data?.shipping_pincode}</span>
      //           </div>
      //           {/* )} */}
      //         </div>
      //       </div>
      //     );
      //   },
      // },

      //   {
      //     headerName: "Status",
      //     field: "status",
      //     filter: "agSetColumnFilter",
      //     width: 150,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <div className="">
      //             <span>{params?.data?.status}</span>
      //           </div>
      //         </div>
      //       );
      //     },
      //   },
      // {
      //   headerName: "ORDER",
      //   field: "pisces",

      //   filter: "agSetColumnFilter",
      //   width: 120,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div className="">
      //           <span>vfdsvsd</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "SALES",
      //   field: "pisces",

      //   filter: "agSetColumnFilter",
      //   width: 120,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div className="">
      //           <span>vfdsvds</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "Actions",
        field: "transactions",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {this.state.Deletepermisson && (
                <Trash2
                  className="mr-50"
                  size="25px"
                  color="Red"
                  onClick={() => {
                    this.runthisfunction(params?.data?.id);
                  }}
                />
              )}

              {/* {this.state.Editpermisson && (
                <Route
                  render={({ history }) => (
                    <Edit
                      className="mr-50"
                      size="25px"
                      color="green"
                      onClick={() =>
                        history.push(
                          `/app/freshlist/house/editProductType/${params?.data?.id}`
                        )
                      }
                    />
                  )}
                />
              )} */}

              {/* {this.state.Createpermisson && (
                <Route
                  render={({ history }) => (
                    <FaLock
                      className="mr-50"
                      size="25px"
                      color="blue"
                      onClick={() =>
                        history.push(
                          `/app/freshlist/account/UpdateExistingRole/${params?.data?.role}`
                        )
                      }
                    />
                  )}
                />
              )} */}
            </div>
          );
        },
      },
    ],
  };

  async componentDidMount() {
    await this.Alllist();

    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Program CRM List"
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
  }

  Alllist = async () => {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("role", pageparmission?.Userinfo?.role);
    formdata.append("crm_postal_code", pageparmission?.Userinfo?.postal_code);
    let Role = pageparmission?.Userinfo?.role;
    let URL = "";
    Role == "17" ? (URL = "getProgramMember") : (URL = "getProgramCRMLeadlist");

    await axiosConfig.post(URL, formdata).then((response) => {
      console.log(response?.data?.data);
      let rowData = response?.data?.data;
      if (rowData) {
        this.setState({ rowData });
      }
    });
  };

  runthisfunction(id) {
    swal("Warning", "Sure You Want to Delete it", {
      buttons: {
        cancel: "cancel",
        catch: { text: "Delete ", value: "delete" },
      },
    }).then((value) => {
      switch (value) {
        case "delete":
          const formData = new FormData();
          formData.append("user_id", id);
          axiosConfig.post(`/userdelete`, formData).then((response) => {});
          break;
        default:
      }
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
      <>
        {/* <Row>
          <Col lg="4" md="12">
            <Card
              className="bg-secondary  py-3 "
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle
                className="fntweight"
                tag="h3"
                style={{ color: "black", fontSize: "16px" }}
              >
                <FaBoxOpen style={{ color: "orange" }} />
                &nbsp;&nbsp; Total Products
              </CardTitle>
              <CardText
                className="wt-text"
                tag="span"
                style={{ color: "black", marginLeft: "4px" }}
              >
                {this.state.product}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg-secondary  py-3"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle
                className="fntweight"
                tag="h3"
                style={{ color: "black", fontSize: "16px" }}
              >
                <FaBoxOpen style={{ color: "orange" }} />
                &nbsp;&nbsp; Total Categories
              </CardTitle>
              <CardText
                className="wt-text"
                tag="span"
                style={{ color: "black", marginLeft: "4px" }}
              >
                {this.state.product}
              </CardText>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card
              className="bg-secondary  py-3"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle
                className="fntweight"
                tag="h3"
                style={{ color: "black", fontSize: "16px" }}
              >
                <FaBoxOpen style={{ color: "orange" }} />
                &nbsp;&nbsp; Total Barnds
              </CardTitle>
              <CardText
                className="wt-text"
                tag="span"
                style={{ color: "black", marginLeft: "4px" }}
              >
                {this.state.product}
              </CardText>
            </Card>
          </Col>
        </Row> */}
        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              {/* <Row className="pt-1 mx-1">
                <Col lg="3" md="3" className="mb-1 ">
                  <Label>SHOW BY</Label>
                  <Input
                    required
                    type="select"
                    name="weight"
                    placeholder="Enter Iden Type"
                    // value={this.state.weight}
                    // onChange={this.changeHandler}
                  >
                    <option value="12ROW">12 ROW</option>
                    <option value="24ROW">24 ROW</option>
                    <option value="36ROW">36 ROW</option>
                  </Input>
                </Col>
                <Col lg="3" md="3" className="mb-1">
                  <Label>RATING BY</Label>
                  <Input
                    required
                    type="select"
                    name="weight"
                    placeholder="Enter Iden Type"
                    // value={this.state.weight}
                    // onChange={this.changeHandler}
                  >
                    <option value="1Star">1 Star</option>
                    <option value="2Star">2 Star</option>
                    <option value="3Star">3 Star</option>
                    <option value="4Star">4 Star</option>
                    <option value="5Star">5 Star</option>
                  </Input>
                </Col>
                <Col lg="3" md="3" className="mb-1">
                  <Label>CATEGORY BY</Label>
                  <Input
                    required
                    type="select"
                    name="weight"
                    placeholder="Enter Iden Type"
                    // value={this.state.weight}
                    // onChange={this.changeHandler}
                  >
                    <option value="Mans">Mans</option>
                    <option value="Womans">Womans</option>
                    <option value="Kids">Kids</option>
                    <option value="Accessory">Accessory</option>
                  </Input>
                </Col>
                <Col lg="3" md="3" className="mb-1">
                  <Label>BRAND BY</Label>
                  <Input
                    required
                    type="select"
                    name="weight"
                    placeholder="Enter Iden Type"
                    // value={this.state.weight}
                    // onChange={this.changeHandler}
                  >
                    <option value="Ecstasy">Ecstasy</option>
                    <option value="Freeland">Freeland</option>
                    <option value="Rongdhonu">Rongdhonu</option>
                  </Input>
                </Col>
              </Row> */}
              <Row className="m-2">
                <Col lg="7" sm="7" md="7">
                  <h1 className="float-left">Program CRM Lead List</h1>
                </Col>
                <Col lg="3" md="3" sm="3" className="mb-1 ">
                  <Label className="">Choose Type</Label>
                  <Input
                    className="float-right"
                    required
                    type="select"
                    name="Leadtype"
                    placeholder="select Type"
                    value={this.state.Leadtype}
                    onChange={(e) =>
                      this.setState({ Leadtype: e.target.value })
                    }
                  >
                    <option value={null}>--Select All--</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                  </Input>
                </Col>
                <Col lg="2" md="2" sm="2" className="mb-1 ">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      this.Alllist();
                    }}
                    className="float-right mt-2"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Col>
                {/* <Col>
                  <Route
                    render={({ history }) => (
                      <Button
                        className="float-right"
                        color="primary"
                        onClick={() =>
                          history.push("/app/freshlist/options/ProductType")
                        }
                      >
                        Add Type
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
                              this.state.currenPageSize *
                                this.state.getPageSize >
                            0
                              ? this.state.currenPageSize *
                                this.state.getPageSize
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
                      {(context) => {
                        {
                          /* console.log(context); */
                        }
                        return (
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
                        );
                      }}
                    </ContextLayout.Consumer>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
export default ProgramCRm;
