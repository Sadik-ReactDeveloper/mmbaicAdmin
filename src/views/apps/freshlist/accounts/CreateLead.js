// import React, { Component, useDebugValue } from "react";
import React, { useEffect, useState } from "react";
import HtmlParser from "react-html-parser";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
} from "reactstrap";
import { history } from "../../../../history";

import axiosConfig from "../../../../axiosConfig";
import axiosConfig1 from "../../../../AxiosnewConfig";

import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";
import { useHistory } from "react-router-dom";

import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import { CloudLightning } from "react-feather";
import { timers } from "jquery";
let selectItem1 = [];

const CreateLead = () => {
  const [Viewpermisson, setViewpermisson] = useState(null);
  const [Editpermisson, setEditpermisson] = useState(null);
  const [Createpermisson, setCreatepermisson] = useState(null);
  const [Deletepermisson, setDeletepermisson] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [Paymentmode, setPaymentmode] = useState("");
  const [Paymentdetails, setPaymentdetails] = useState("");
  const [StateList, setStateList] = useState([]);
  const [CityList, setCityList] = useState([]);
  const [SelectedState, setSelectedState] = useState("");

  const [S_City, setS_City] = useState("");
  const [Mobile_no, setMobile_no] = useState("");

  const [discountPercentage, setDiscountPercentage] = useState(0);

  const [multiSelect, setmultiSelect] = useState([]);
  const [selectedOptions, setselectedOptions] = useState([]);
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [status, setstatus] = useState("");
  const [AssignRole, setAssignRole] = useState("");
  const [Postalcode, setPostalCode] = useState("");
  const [UserName, setUserName] = useState("");
  const [productName, setproductName] = useState([]);
  const [City, setCity] = useState("");
  const [Lastname, setLastname] = useState("");
  const navigate = useHistory();

  useEffect(() => {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Create Account"
    );
    setViewpermisson(newparmisson?.permission.includes("View"));
    setCreatepermisson(newparmisson?.permission.includes("Create"));
    setEditpermisson(newparmisson?.permission.includes("Edit"));
    setDeletepermisson(newparmisson?.permission.includes("Delete"));
    let formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo.id);
    formdata.append("role", pageparmission?.Userinfo.role);
    axiosConfig
      .post("/getrolelistdropdown", formdata)
      // .get("/getroleNamelist")
      .then((res) => {
        console.log(res?.data.data);
        setproductName(res?.data.data?.roles);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosConfig
      .get("/getallstates")
      .then((response) => {
        setStateList(response.data?.states);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("role", pageparmission?.Userinfo?.role);
    formdata.append("firstname", firstname);
    formdata.append("lastname", Lastname);
    formdata.append("username", UserName);
    formdata.append("password", password);
    formdata.append("phone", Mobile_no);
    formdata.append("state_id", SelectedState);
    formdata.append("city_id", selectItem1[0]);
    formdata.append("email", email);
    formdata.append("postal_code", Postalcode);
    formdata.append("payment_mode", Paymentmode);
    formdata.append("payment_detail", Paymentdetails);

    axiosConfig1
      .post("/addcrmlead", formdata)
      .then((response) => {
        console.log(response);
        if (!response?.data.status) {
          swal(
            "error",
            `The Username and Email field must contain a unique value`
          );
        }
        if (response.data?.success) {
          // this.props.history.push("/app/freshlist/house/userlist");

          navigate.goBack();

          swal("Success!", "Submitted SuccessFull!", "success");
          setAssignRole("");
          // setstatus("");
          setFirstname("");
          setLastname("");
          setemail("");
          // setCity("");
          setMobile_no("");
          setstatus("");
          setUserName("");
          setPostalCode("");
          setSelectedState("");

          setpassword("");
        }
      })
      .catch((error) => {
        console.log(error);
        // console.log(error.response);
        // let arr = error.response?.data?.data;
        // if (arr.length > 0) {
        //   let Existing = error.response?.data?.data?.map((ele) => ele);
        //   if (Existing !== undefined) {
        //     let allExisting = Existing?.flat();
        //     swal(
        //       "Error",
        //       `${allExisting} Existing in DataBase Choose Different `
        //     );
        //   }
        // }
      });
  };

  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList);
    selectItem1 = [];
    if (selectedList.length) {
      for (var i = 0; i < selectedList.length; i++) {
        selectItem1.push(selectedList[i].id);
      }
    }
  };
  const onSelect1 = (selectedList, selectedItem) => {
    if (selectedList.length) {
      for (var i = 0; i < selectedList.length; i++) {
        selectedOptions.push(selectedList[i].id);
      }
    }

    let arr = selectedList.map((ele) => ele.id);
    setmultiSelect(arr);
    // console.log(multiSelect);

    let uniqueChars = [...new Set(selectedOptions)];

    if (uniqueChars.length === 1) {
      let value = uniqueChars[0];
      const formdata = new FormData();
      formdata.append("state_id", value);
      axiosConfig
        .post(`/getcity`, formdata)
        .then((res) => {
          setCityList(res?.data?.cities);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setCityList([]);
    }
  };
  const onRemove1 = (selectedList, removedItem) => {
    // debugger;
    // setselectedOptions("");
    // console.log(selectedList);
    // setmultiSelect(selectedList);

    let arr = selectedList.map((ele) => ele.id);
    // console.log(arr);
    setmultiSelect(arr);
    // console.log(multiSelect);
    // if (selectedList.length) {
    //   for (var i = 0; i < selectedList.length; i++) {
    //     selectedOptions.push(selectedList[i].id);
    //   }
    // }
    // let uniqueChars = [...new Set(selectedOptions)];
    // console.log(uniqueChars);
  };

  const onRemove = (selectedList, removedItem) => {
    console.log(selectedList);
    console.log(removedItem);
  };

  return (
    <div>
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Add Lead</h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className="float-right mt-2"
                    color="warning"
                    onClick={() => history.goBack()}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <div className="container "></div>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label> Select Role*</Label>
                    <CustomInput
                      required
                      id="AssignRole"
                      type="select"
                      name="AssignRole"
                      value={AssignRole}
                      // onChange={changeHandler}
                      onChange={(e) => setAssignRole(e.target.value)}
                    >
                      <option value="">--Select Role--</option>

                      {productName &&
                        productName?.map((value, index) => (
                          <option key={index} value={value?.id}>
                            {value?.role}
                          </option>
                        ))}
                    </CustomInput>
                  </FormGroup>
                </Col> */}
                <Col lg="6" md="6" sm="12">
                  <FormGroup>
                    <Label>First Name *</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Enter Your Name"
                      name="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="12">
                  <FormGroup>
                    <Label>Last Name *</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Enter Your Name"
                      name="lastname"
                      value={Lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>UserName *</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Enter Your Name"
                      name="UserName"
                      value={UserName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Mobile Number *</Label>
                    <Input
                      required
                      type="text"
                      maxLength={12}
                      onKeyDown={(e) =>
                        ["e", "E", "+", "-"].includes(e.key) &&
                        e.preventDefault()
                      }
                      size={10}
                      min={0}
                      placeholder="+910000000000"
                      name="Mobile_no"
                      value={Mobile_no}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Use regular expression to allow only numbers
                        const numericValue = value.replace(/\D/g, "");

                        setMobile_no(numericValue);
                      }}
                      // onChange={(e) => setMobile_no(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Email *</Label>
                    <Input
                      required
                      type="email"
                      placeholder="abcd@gmail.com..."
                      name="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Password *</Label>
                    <Input
                      required
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label for="cars"> State *</Label>
                    {/* {AssignRole === "supplier" ? (
                      <>
                        <Multiselect
                          required
                          showCheckbox="true"
                          isObject="false"
                          options={StateList} // Options to display in the dropdown
                          // selectedValues={selectedValue}   // Preselected value to persist in dropdown
                          onSelect={onSelect1} // Function will trigger on select event
                          onRemove={onRemove1} // Function will trigger on remove event
                          displayValue="state_title" // Property name to display in the dropdown options
                        />
                      </>
                    ) : ( */}
                    <>
                      <select
                        required
                        name="SelectedState"
                        value={SelectedState}
                        onChange={(e) => {
                          const formdata = new FormData();
                          setSelectedState(e.target.value);
                          formdata.append("state_id", e.target.value);
                          axiosConfig
                            .post(`/getcity`, formdata)
                            .then((res) => {
                              setCityList(res?.data?.cities);
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        }}
                        // onChange={this.changeHandler}
                        className="form-control"
                      >
                        <option value="volvo">--Select State--</option>
                        {StateList &&
                          StateList?.map((ele, i) => (
                            <option key={i} value={ele?.id}>
                              {ele?.state_title}
                            </option>
                          ))}
                      </select>
                    </>
                    {/* )} */}
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <Label>City*</Label>
                  <Multiselect
                    required
                    // singleSelect
                    selectionLimit={1}
                    options={CityList} // Options to display in the dropdown
                    // selectedValues={selectedValue} // Preselected value to persist in dropdown
                    onSelect={onSelect} // Function will trigger on select event
                    onRemove={onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                  />
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Postal Code</Label>
                    <textarea
                      required
                      type="text"
                      className="form-control"
                      placeholder="Enter Postal code"
                      name="postalcode"
                      value={Postalcode}
                      onChange={(e) => {
                        // const value = e.target.value;
                        var currentValue = e.target.value;

                        // Remove spaces from the current value
                        // var newValue = currentValue.replace(/\s/g, "");
                        const newValue = currentValue.replace(/[^\d,]/g, "");
                        setPostalCode(newValue);
                      }}
                      // onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label> Payment Mode*</Label>
                    <CustomInput
                      required
                      id="Paymentmode"
                      type="select"
                      name="Paymentmode"
                      value={Paymentmode}
                      // onChange={changeHandler}
                      onChange={(e) => setPaymentmode(e.target.value)}
                    >
                      <option value="">--Select Role--</option>

                      <option value="Cash">Cash</option>
                      <option value="Cheque">Cheque</option>
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Details</Label>
                    <textarea
                      className="form-control"
                      required
                      type="text"
                      placeholder="Enter Details"
                      name="Paymentdetails"
                      value={Paymentdetails}
                      onChange={(e) => setPaymentdetails(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <hr />

              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mt-2 mx-2"
                >
                  Submit
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default CreateLead;
