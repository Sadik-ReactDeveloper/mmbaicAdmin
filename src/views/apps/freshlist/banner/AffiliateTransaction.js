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
  Modal,
  ModalHeader,
  ModalBody,
  DropdownToggle,
  CustomInput,
  Badge,
} from "reactstrap";
import { Route } from "react-router-dom";
import InvoicGenerator from "../subcategory/PaymentInvoice";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown, Download } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import HtmlParser from "react-html-parser";
import ReceiverProfile from "../../chat/receiverProfile";
class AffiliateTransaction extends React.Component {
  state = {
    rowData: [],
    CurrectReceipt: {},
    Viewpermisson: null,
    Editpermisson: null,
    Createpermisson: null,
    Deletepermisson: null,
    modal: false,
    paginationPageSize: 8,
    currenPageSize: "",
    getPageSize: "",
    searchvalue: "",
    defaultColDef: {
      sortable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 120,
      },
      //   {
      //     headerName: "Actions",
      //     field: "sortorder",
      //     width: 150,
      //     cellRendererFramework: (params) => {
      //       return (
      //         <div className="actions cursor-pointer">
      //           {/* <Route
      //             render={({ history }) => (
      //               <Eye
      //                 className="mr-50"
      //                 size="25px"
      //                 color="green"
      //                 onClick={() =>
      //                   history.push(
      //                     `/app/freshlist/banner/viewBanner/${params.data._id}`
      //                   )
      //                 }
      //               />
      //             )}
      //           /> */}

      //           {/* <Route
      //             render={({ history }) => (
      //               <Edit
      //                 className="mr-50"
      //                 size="25px"
      //                 color="blue"
      //                 onClick={() => {
      //                   localStorage.setItem(
      //                     "SelectedCmsdata",
      //                     JSON.stringify(params.data?.data)
      //                   );
      //                   history.push(
      //                     `/app/mmbaic/Add/AddmemberPlan/${params.data?.id}`
      //                   );
      //                 }}
      //               />
      //             )}
      //           /> */}
      //           {/* <Route
      //             render={({ history }) => (
      //               <Trash2
      //                 className="mr-50"
      //                 size="25px"
      //                 color="red"
      //                 onClick={() => {
      //                   let selectedData = this.gridApi.getSelectedRows();
      //                   this.runthisfunction(params.data.id);
      //                   this.gridApi.updateRowData({ remove: selectedData });
      //                 }}
      //               />
      //             )}
      //           /> */}
      //           {/* {this.state.Viewpermisson && (
      //             <Route
      //               render={({ history }) => (
      //                 <Download
      //                   className="mr-50"
      //                   size="25px"
      //                   color="blue"
      //                   onClick={() => {
      //                     this.HandleShowReceipt(params?.data);
      //                   }}
      //                 />
      //               )}
      //             />
      //           )} */}
      //         </div>
      //       );
      //     },
      //   },
      {
        headerName: "orderId",
        field: "order_id",
        filter: true,
        width: 160,
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
              <span>{params.data?.order_id}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "wallet Amt",
      //   field: "wallet_amt",
      //   filter: true,
      //   width: 200,
      //   filterParams: {
      //     textCustomComparator: (filter, value, filterText) => {
      //       return value.toLowerCase().includes(filterText.toLowerCase());
      //     },
      //   },
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <Badge color="primary">{params.data?.wallet_amt}</Badge>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "Transaction Id",
        field: "transaction_id",
        filter: true,
        width: 180,
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
              <span>{params.data?.transaction_id}</span>
            </div>
          );
        },
      },

      {
        headerName: "Plan Title",
        field: "title",
        filter: true,
        width: 200,
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.title}</span>
            </div>
          );
        },
      },
      {
        headerName: "Plan amount",
        field: "plan_amount",
        filter: true,
        width: 200,

        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.plan_amount}</span>
            </div>
          );
        },
      },

      {
        headerName: "Duration",
        field: "duration",
        filter: true,
        width: 200,
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.duration} year</span>
            </div>
          );
        },
      },
      {
        headerName: "username",
        field: "username",
        filter: true,
        width: 200,
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{HtmlParser(params.data?.username)}</span>
            </div>
          );
        },
      },
      {
        headerName: "Email",
        field: "email",
        filter: true,
        width: 200,
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{HtmlParser(params.data?.email)}</span>
            </div>
          );
        },
      },
      {
        headerName: "firstname",
        field: "firstname",
        filter: true,
        width: 200,
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{HtmlParser(params.data?.firstname)}</span>
            </div>
          );
        },
      },
      {
        headerName: "lastname",
        field: "lastname",
        filter: true,
        width: 200,
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{HtmlParser(params.data?.lastname)}</span>
            </div>
          );
        },
      },
      {
        headerName: "Payment Status",
        field: "pay_status",
        filter: true,
        width: 200,
        filterParams: {
          textCustomComparator: (filter, value, filterText) => {
            return value.toLowerCase().includes(filterText.toLowerCase());
          },
        },
        cellRendererFramework: (params) => {
          return params.data?.pay_status == "Completed" ? (
            <div className="badge badge-pill badge-success">
              {params.data?.pay_status}
            </div>
          ) : params.data?.pay_status == "Deactive" ? (
            <div className="badge badge-pill badge-warning">
              {params.data?.pay_status}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Purchase Date",
        field: "purchase_date",
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
              <span>{HtmlParser(params.data?.purchase_date)}</span>
            </div>
          );
        },
      },
    ],
  };
  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  HandleShowReceipt = (Receiptdata) => {
    console.log(Receiptdata);
    this.setState({ CurrectReceipt: Receiptdata });
    this.toggleModal();
  };
  toggleModalclose = () => {
    this.setState({ modal: false });
    window.location.reload();
  };
  async componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Payment Transaction"
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
    data.append("type", "affiliate");
    await axiosConfig.post("/getAllTransactions", data).then((response) => {
      const rowData = response?.data?.data;
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
                  Affiliated User Payment List
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
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggleModal}
            // className={this.props.className}
            style={{ maxWidth: "1050px" }}
          >
            <ModalHeader toggle={this.toggleModalclose}>
              Download Invoice
            </ModalHeader>
            <ModalBody>
              <div style={{ width: "100%" }} className="">
                <InvoicGenerator CurrectReceipt={this.state.CurrectReceipt} />
              </div>
            </ModalBody>
          </Modal>
        </Col>
      </Row>
    );
  }
}
export default AffiliateTransaction;
