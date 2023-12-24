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
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Trash2, ChevronDown, Edit } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";

import "moment-timezone";
import { Route } from "react-router-dom";
import swal from "sweetalert";

class FranciseeAffiliatedInsiderMembers extends React.Component {
  state = {
    rowData: [],
    Viewpermisson: null,
    Editpermisson: null,
    Createpermisson: null,
    Deletepermisson: null,
    paginationPageSize: 20,
    currenPageSize: "",
    SelectedName: "",
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
        width: 100,
        filter: true,
      },

      {
        headerName: "First Name",
        field: "firstname",
        filter: "agSetColumnFilter",
        width: 150,
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
        headerName: "User Name",
        field: "username",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.username}</span>
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
        headerName: "Postal Code",
        field: "postal_code",
        filter: "agSetColumnFilter",
        width: 200,
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
        headerName: "Mobile No.",
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
        headerName: "Status",
        field: "member_status",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return params.data.member_status === "1" ? (
            <div className="badge badge-pill badge-success">Active</div>
          ) : params.data.member_status === "0" ? (
            <div className="badge badge-pill badge-warning">InActive</div>
          ) : null;
        },
      },

      //   {
      //     headerName: "SALES",
      //     field: "pisces",

      //     filter: "agSetColumnFilter",
      //     width: 120,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <div className="">
      //             <span>vfdsvds</span>
      //           </div>
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     headerName: "Actions",
      //     field: "transactions",
      //     width: 150,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="actions cursor-pointer">
      //           {this.state.Deletepermisson && (
      //             <Trash2
      //               className="mr-50"
      //               size="25px"
      //               color="Red"
      //               onClick={() => {
      //                 this.runthisfunction(params?.data?.id);
      //               }}
      //             />
      //           )}

      //           {this.state.Editpermisson && (
      //             <Route
      //               render={({ history }) => (
      //                 <Edit
      //                   className="mr-50"
      //                   size="25px"
      //                   color="green"
      //                   onClick={() =>
      //                     history.push(
      //                       `/app/freshlist/house/editProductType/${params?.data?.id}`
      //                     )
      //                   }
      //                 />
      //               )}
      //             />
      //           )}

      //           {this.state.Createpermisson && (
      //             <Route
      //               render={({ history }) => (
      //                 <FaLock
      //                   className="mr-50"
      //                   size="25px"
      //                   color="blue"
      //                   onClick={() =>
      //                     history.push(
      //                       `/app/freshlist/account/UpdateExistingRole/${params?.data?.role}`
      //                     )
      //                   }
      //                 />
      //               )}
      //             />
      //           )}
      //         </div>
      //       );
      //     },
      //   },
    ],
  };

  async componentDidMount() {
    let { Name, id } = this.props.match.params;
    this.setState({ SelectedName: Name });
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Affiliated list"
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

    const formdata = new FormData();
    formdata.append("aff_id", id);
    // formdata.append("role", pageparmission?.Userinfo?.role);
    await axiosConfig
      .post("/getParticaluarAffiliatedMembers", formdata)
      .then((response) => {
        let rowData = response?.data?.data[0];
        this.setState({ rowData });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // getUserList = async () => {
  //   const formdata = new FormData();
  //   formdata.append("user_id", pageparmission?.Userinfo?.id);
  //   formdata.append("role", pageparmission?.Userinfo?.role);
  //   await axiosConfig.post("/getuserlist", formdata).then((response) => {
  //     console.log(response);
  //     let rowData = response?.data?.data?.users;
  //     this.setState({ rowData });
  //   });
  // };
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
          axiosConfig.post(`/userdelete`, formData).then((response) => {
            // this.getUserList();
          });
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
        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h3 col-sm-6 className="float-left">
                    {`${
                      this.state.SelectedName &&
                      this.state.SelectedName?.split("_")[0]
                    } ${this.state.SelectedName?.split("_")[1]}`}{" "}
                    Members List
                  </h3>
                </Col>
                <Col>
                  <Route
                    render={({ history }) => (
                      <Button
                        className="float-right"
                        color="primary"
                        onClick={() => history.goBack()}
                      >
                        Back
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
export default FranciseeAffiliatedInsiderMembers;
