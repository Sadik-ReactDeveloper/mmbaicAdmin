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
  Badge,
  CustomInput,
} from "reactstrap";
import axiosConfig from "../../../../AxiosnewConfig";

import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown, Eye } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import { Route, Link } from "react-router-dom";
import swal from "sweetalert";

class SearchUserByPincode extends React.Component {
  state = {
    rowData: [],
    Viewpermisson: null,
    Editpermisson: null,
    Createpermisson: null,
    Deletepermisson: null,
    paginationPageSize: 20,
    currenPageSize: "",
    EditId: "0",
    type: "",
    Email: "",
    EditId: 0,
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      // editable: true,
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
      //   {
      //     headerName: "Role",
      //     field: "role_name",
      //     filter: "agSetColumnFilter",
      //     width: 120,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <div className="">
      //             <span>{params?.data?.role_name}</span>
      //           </div>
      //         </div>
      //       );
      //     },
      //   },
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
        headerName: "created by",
        field: "create_date",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          // console.log(params?.data);
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.create_date}</span>
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
        field: "mobile",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.mobile}</span>
              </div>
            </div>
          );
        },
      },

      {
        headerName: "Status",
        field: "status",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.status}</span>
              </div>
            </div>
          );
        },
      },
    ],
  };

  async componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Search User"
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
    // data.append("edit_id", this.state.EditId);
    // await axiosConfig
    //   .post("/getAllEmails", data)
    //   .then((response) => {
    //     let rowData = response.data?.data;
    //     if (rowData?.length) {
    //       this.setState({ rowData });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  async runthisfunction(id) {
    console.log(id);
    let selectedData = this.gridApi.getSelectedRows();

    swal("Warning", "Sure You Want to Delete it", {
      buttons: {
        cancel: "Cancel",
        catch: { text: "Delete ", value: "delete" },
      },
    }).then((value) => {
      switch (value) {
        case "delete":
          let data = new FormData();
          let pageparmission = JSON.parse(localStorage.getItem("userData"));
          data.append("user_id", pageparmission?.Userinfo?.id);
          data.append("role", pageparmission?.Userinfo?.role);
          data.append("tablename", "category");
          data.append("delete_id", id);
          axiosConfig
            .post("/deleterecord", data)
            .then((resp) => {
              console.log(resp?.data.message);
              if (resp?.data.success) {
                swal("Success", "Category Deleted Successfully");
                this.gridApi.updateRowData({ remove: selectedData });
              }
              if (!resp?.data?.success) {
                console.log("object");
                swal("Error", `${resp?.data.message}`);
              }
            })
            .catch((err) => {
              console.log(err);
              // swal("Somethig Went Wrong");
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
      // console.log(rowData),
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 sm="6" className="float-left">
                  Search User
                </h1>
              </Col>
              {/* {this.state.AddEmail && (
                <Col lg="2" md="2">
                  <CustomInput
                    placeholder="Enter Emails with comma Seprated"
                    value={this.state.type}
                    onChange={(e) => this.setState({ type: e.target.value })}
                    type="select"
                  >
                    <option>--select--</option>
                    <option value="Become A Member">Become A Member</option>
                    <option value="Franchisee">Franchisee</option>
                  </CustomInput>
                </Col>
              )} */}

              <Col lg="4" md="4" sm="6">
                {this.state.AddEmail && (
                  <Input
                    value={this.state.Email}
                    placeholder="Search By Pincode..."
                    onChange={(e) => this.setState({ Email: e.target.value })}
                    type="text"
                    className="form-control"
                  />
                )}
              </Col>
              <Col>
                {this.state.AddEmail && (
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      let pageparmission = JSON.parse(
                        localStorage.getItem("userData")
                      );

                      const data = new FormData();
                      //   data.append("user_id", pageparmission?.Userinfo?.id);
                      //   data.append("role", pageparmission?.Userinfo?.role);
                      //   data.append("edit_id", this.state.EditId);
                      //   data.append("type", this.state.type);
                      data.append("user_pincode", this.state.Email);

                      if (this.state.Email) {
                        axiosConfig
                          .post("/searchuserbypincode", data)
                          .then((response) => {
                            let rowData = response.data?.data;
                            if (rowData?.length) {
                              this.setState({ rowData });
                            }
                            swal("Submitted Succesfully");
                            this.setState({ AddEmail: false });
                            // this.componentDidMount();
                          })
                          .catch((err) => {
                            this.setState({ AddEmail: false });
                            swal("Record Not found");

                            console.log(err);
                          });
                      } else {
                        swal("Enter Pincode To Search");
                      }
                    }}
                    color="primary"
                  >
                    Submit
                  </Button>
                )}
              </Col>
              <Col>
                {" "}
                {!this.state.AddEmail && (
                  <div className="d-flex justify-content-end">
                    <Route
                      render={({ history }) => (
                        <Button
                          className="btn btn-success float-right"
                          onClick={() => this.setState({ AddEmail: true })}
                        >
                          Search
                        </Button>
                      )}
                    />
                  </div>
                )}
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
      </Row>
    );
  }
}
export default SearchUserByPincode;
