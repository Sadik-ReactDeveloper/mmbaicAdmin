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
import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";
import { useHistory } from "react-router-dom";

import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import { CloudLightning } from "react-feather";
import { timers } from "jquery";
const selectItem1 = [];
const selectstate2 = [];

const AllunSelectedCity = [];
const Selectedarray = [];

const CreateAccount = () => {
  // const [Address, setAddress] = useState("");
  const [Viewpermisson, setViewpermisson] = useState(null);
  const [Editpermisson, setEditpermisson] = useState(null);
  const [Createpermisson, setCreatepermisson] = useState(null);
  const [Deletepermisson, setDeletepermisson] = useState(null);
  const [firstname, setFirstname] = useState("");
  // const [GSTIN, setGSTIN] = useState("");
  const [StateList, setStateList] = useState([]);
  const [CityList, setCityList] = useState([]);
  // const [SelectedSCity, setSelectedSCity] = useState([]);
  const [SelectedState, setSelectedState] = useState([]);
  // const [B_City, setB_City] = useState("");
  // const [checkbox, setcheckbox] = useState("");
  const [S_City, setS_City] = useState("");
  const [Mobile_no, setMobile_no] = useState("");
  // const [B_Country, setB_Country] = useState("");
  // const [S_Country, setS_Country] = useState("");
  // const [Phone_no, setPhone_no] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  // const [B_State, setB_State] = useState("");
  // const [S_State, setS_State] = useState("");
  // const [B_Street, setB_Street] = useState("");
  // const [S_Street, setS_Street] = useState("");
  // const [B_PinCode, setB_PinCode] = useState("");
  // const [S_PinCode, setS_PinCode] = useState("");
  const [multiSelect, setmultiSelect] = useState([]);
  const [selectedOptions, setselectedOptions] = useState([]);
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [status, setstatus] = useState("");
  const [AssignRole, setAssignRole] = useState("");
  const [Postalcode, setPostalCode] = useState("");
  // const [Companytype, setCompanytype] = useState("");
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
    // const formdata = new FormData();
    // formdata.append("user_id", pageparmission?.Userinfo?.id);
    // formdata.append("role", pageparmission?.Userinfo?.role);
    // axiosConfig.post("/getrolelistdropdown", formdata).then((response) => {
    //   const propertyNames = Object.values(response.data?.data?.roles);

    //   setproductName(propertyNames);
    // });
    // state List
    axiosConfig
      .get("/getallstates")
      .then((response) => {
        setStateList(response.data?.states);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  console.log(AssignRole);
  const submitHandler = (e) => {
    e.preventDefault();
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    let uniqueChars = [...new Set(selectItem1)];
    let selectedOption = [...new Set(selectedOptions)];

    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("select_role", AssignRole);
    formdata.append("firstname", firstname);
    formdata.append("lastname", Lastname);
    formdata.append("username", UserName);
    formdata.append("password", password);
    formdata.append("mobile", Mobile_no);
    formdata.append("email", email);
    formdata.append("status", status);
    formdata.append("postal_code", Postalcode);
    if (discountPercentage) {
      formdata.append("franchise_percentage", discountPercentage);
    }

    if (selectedOption.length > 0) {
      formdata.append("state_id", multiSelect.toString());
    } else {
      formdata.append("state_id", SelectedState);
    }

    formdata.append("city_id", uniqueChars);

    axiosConfig
      .post("/createuser", formdata)
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

          // navigate.push("/app/freshlist/house/userlist");

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
          setSelectedState([]);

          // selectItem1 = [];
          setpassword("");
        }
        // this.props.history.push("/app/freshlist/order/all");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        let arr = error.response?.data?.data;
        if (arr.length > 0) {
          let Existing = error.response?.data?.data?.map((ele) => ele);
          if (Existing !== undefined) {
            let allExisting = Existing?.flat();
            swal(
              "Error",
              `${allExisting} Existing in DataBase Choose Different `
            );
          }
        }
      });
  };

  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList);

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
              <h1 className="float-left">Add here</h1>
            </Col>
          </Row>
          <div className="container "></div>

          <CardBody>
            <Form className="m-1" onSubmit={submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
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
                </Col>
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
                    <Label>Password</Label>
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
                    <Row></Row>
                    <Label for="cars"> State *</Label>
                    {AssignRole === "supplier" ? (
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
                    ) : (
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
                    )}
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

                {AssignRole == 5 ? (
                  <>
                    <Col lg="6" md="6">
                      <FormGroup>
                        <Label>Commision Percentage</Label>
                        <Input
                          required
                          type="text"
                          placeholder="Enter Discount Percentage"
                          name="DiscoutPercentage"
                          value={discountPercentage}
                          onChange={(e) => {
                            const newValue = e.target.value
                              .replace(/[^0-9]/g, "")
                              .slice(0, 2);
                            setDiscountPercentage(newValue);
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </>
                ) : null}
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>
                      Postal Code
                      <span style={{ color: "red" }}>
                        {" "}
                        (Add Multiple Pincode with comma seprated)
                      </span>
                    </Label>
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
              </Row>
              <hr />
              {/* <Row>
                <Col className="mt-2" lg="6" md="6" sm="12">
                  <h4 className="mt-5 pb-2">Billing Address :</h4>

                  <Col className="" lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label for="cars">Choose Country</Label>
                      <select
                        placeholder="Enter City"
                        name="B_Country"
                        value={B_Country}
                        onChange={(e) => setB_Country(e.target.value)}
                        className="form-control"
                      >
                        <option value="volvo">--Select Country--</option>
                        <option value="India">India</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label for="cars">Choose State</Label>
                      <select
                        name="B_State"
                        value={B_State}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setB_State(e.target.value);
                          const formdata = new FormData();
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
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <FormGroup>
                        <Label for="cars">Choose City</Label>
                        <select
                          placeholder="Enter City"
                          name="B_City"
                          value={B_City}
                          onChange={(e) => setB_City(e.target.value)}
                          className="form-control"
                        >
                          <option value="volvo">--Select City--</option>
                          {CityList &&
                            CityList?.map((value, index) => (
                              <option key={index} value={value?.id}>
                                {value?.name}
                              </option>
                            ))}
                        </select>
                      </FormGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label>Street</Label>
                      <Input
                        required
                        type="text"
                        placeholder="Enter Street"
                        name="B_Street"
                        value={B_Street}
                        onChange={(e) => setB_Street(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label>PinCode</Label>
                      <Input
                        required
                        type="number"
                        onKeyDown={(e) =>
                          ["e", "E", "+", "-"].includes(e.key) &&
                          e.preventDefault()
                        }
                        min={0}
                        placeholder="Enter PinCode"
                        name="B_PinCode"
                        value={B_PinCode}
                        onChange={(e) => setB_PinCode(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Col>
                <Col lg="6" md="6" sm="12">
                  <hr />
                  <Row>
                    <Col className="ml-2" lg="6" md="6" sm="12">
                      <Input
                        name="check"
                        onChange={(e) => {
                          handleMatchaddress(e, e.target.checked);
                        }}
                        style={{
                          height: "15px",
                          width: "20px",
                        }}
                        type="checkbox"
                      />
                    </Col>
                    <Col lg="6" md="6" sm="6" className="ml-3">
                      <h5> Same as Billing Address </h5>
                    </Col>
                  </Row>
                  <h4 className="py-2">Shipping Address :</h4>

                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label for="cars">Choose Country</Label>
                      <select
                        placeholder="Enter City"
                        name="S_Country"
                        disabled={checkbox ? true : false}
                        value={S_Country}
                        onChange={(e) => setS_Country(e.target.value)}
                        className="form-control"
                      >
                        <option value="volvo">--Select Country--</option>
                        <option value="India">India</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label for="cars">Choose State</Label>
                      <select
                        name="S_State"
                        value={S_State}
                        onChange={(e) => {
                          setS_State(e.target.value);
                          const formdata = new FormData();
                          formdata.append("state_id", e.target.value);
                          axiosConfig
                            .post(`/getcity`, formdata)
                            .then((res) => {
                              console.log(res?.data?.cities);
                              setCityList(res?.data?.cities);
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        }}
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
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <Label for="cars">Choose City</Label>

                    <FormGroup>
                      <select
                        placeholder="Enter City"
                        name="S_City"
                        value={S_City}
                        onChange={(e) => setS_City(e.target.value)}
                        className="form-control"
                      >
                        <option value="volvo">--Select City--</option>
                        {CityList &&
                          CityList?.map((value, index) => (
                            <option key={index} value={value?.id}>
                              {value?.name}
                            </option>
                          ))}
                      </select>
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label>Street</Label>
                      <Input
                        required
                        disabled={checkbox ? true : false}
                        type="text"
                        placeholder="Enter Street"
                        name="S_Street"
                        value={S_Street}
                        onChange={(e) => setS_Street(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="12" md="12" sm="12">
                    <FormGroup>
                      <Label>PinCode</Label>
                      <Input
                        required
                        disabled={checkbox ? true : false}
                        type="number"
                        placeholder="Enter PinCode"
                        onKeyDown={(e) =>
                          ["e", "E", "+", "-"].includes(e.key) &&
                          e.preventDefault()
                        }
                        min={0}
                        name="S_PinCode"
                        value={S_PinCode}
                        onChange={(e) => setS_PinCode(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Col>
              </Row> */}

              <Row className="mt-2">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="">
                    <h4>Status</h4>
                  </Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => setstatus(e.target.value)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Deactive"
                    />
                    <span style={{ marginRight: "3px" }}>Deactive</span>
                  </div>
                </Col>
              </Row>
              {Createpermisson && Createpermisson && (
                <Row>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mt-2 mx-2"
                  >
                    Submit
                  </Button.Ripple>
                </Row>
              )}
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default CreateAccount;
