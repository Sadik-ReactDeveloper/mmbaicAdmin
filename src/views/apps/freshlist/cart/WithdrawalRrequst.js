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
import axios from "axios";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown, Eye } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import axiosConfig from "../../../../AxiosnewConfig";

import { Route, Link } from "react-router-dom";
import swal from "sweetalert";
// import { components } from "react-select";

class WithdrawalRrequst extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    Log: [],
    getPageSize: "",
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
        field: "id",
        width: 80,
        filter: true,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params?.data?.id}</span>
            </div>
          );
        },
      },
      {
        headerName: "First Name",
        field: "firstname",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params?.data?.firstname}</span>
            </div>
          );
        },
      },
      {
        headerName: "Last Name",
        field: "lastname",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params?.data?.lastname}</span>
            </div>
          );
        },
      },
      {
        headerName: "State",
        field: "state_title",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params?.data?.state_title}</span>
            </div>
          );
        },
      },
      {
        headerName: "City",
        field: "city_title",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params?.data?.city_title}</span>
            </div>
          );
        },
      },
      {
        headerName: "Amount",
        field: "amt",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params?.data?.amt}</span>
            </div>
          );
        },
      },

      //   {
      //     headerName: "userid",
      //     field: "user_id",
      //     filter: true,
      //     width: 200,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div>
      //           <span>{params?.data?.user_id}</span>
      //         </div>
      //       );
      //     },
      //   },
      // {
      //   headerName: "How Many Orders Placed",
      //   field: "orders",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.orders}</span>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "Update Status",
        field: "remaining",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              {params.data.withdrawal_status == "Pending" ? (
                <CustomInput
                  onChange={(e) => {
                    console.log(e.target.value);
                    const data = new FormData();
                    debugger;
                    if (e.target.value == "Complete") {
                      data.append("wid", params.data?.id);
                      data.append("withdrawal_status", e.target.value);
                      axiosConfig
                        .post("/withDrawchangestatus", data)
                        .then((response) => {
                          debugger;
                          this.componentDidMount();
                          console.log(response?.data?.data);
                        })
                        .catch((err) => {
                          swal("Error", "something Went Wrong");
                        });
                    }
                    // data.append("user_id", pageparmission?.Userinfo?.id);
                  }}
                  type="select"
                >
                  <option value={0}>----select----</option>
                  <option value="Complete">Completed</option>
                </CustomInput>
              ) : (
                <>
                  <div className="badge badge-pill badge-success">
                    {params.data?.withdrawal_status}
                  </div>
                </>
              )}
            </div>
          );
        },
      },

      {
        headerName: "Status",
        field: "status",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.data?.withdrawal_status === "Completed" ? (
            <div className="badge badge-pill badge-success">
              {params.data?.withdrawal_status}
            </div>
          ) : params.data?.withdrawal_status === "Pending" ? (
            <div className="badge badge-pill badge-warning">
              {params.data?.withdrawal_status}
            </div>
          ) : null;
        },
      },
      // {
      //   headerName: "Actions",
      //   field: "sortorder",
      //   field: "transactions",
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="actions cursor-pointer">
      //         <Eye
      //           className="mr-50"
      //           size="25px"
      //           color="green"
      //           onClick={() =>
      //             history.push(
      //               `/app/freshlist/subscriber/viewSubscriber/${params.data._id}`
      //             )
      //           }
      //         />
      //       </div>
      //     );
      //   },
      // },
    ],
  };
  componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    // console.log(pageparmission.role);
    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Withdrawl Request"
    );
    console.log(newparmisson);
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
    data.append("crm_postal_code", pageparmission?.Userinfo?.postal_code);
    axiosConfig
      .post("/getWithdrawalRequest", data)
      .then((response) => {
        this.setState({ rowData: response?.data?.data });
      })
      .catch((err) => {
        // console.log(err);
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
      console.log(rowData),
      (
        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 sm="6" className="float-left">
                    Withdrawl Request list
                  </h1>
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
      )
    );
  }
}
export default WithdrawalRrequst;
