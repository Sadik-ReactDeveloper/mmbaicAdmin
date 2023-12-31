import React, { Component } from "react";
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
import { Route } from "react-router-dom";
import swal from "sweetalert";
import { CloudLightning } from "react-feather";
import { ResponsiveContainer } from "recharts";

export class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: "",
      Brand: "",
      P_Title: "",
      Type: "",
      Price: "",
      stock: "",
      Regularprice: "",
      formValues: [{ PName: "", price: "" }],
      DiscountPrice: "",
      Addmore: false,
      rowData: [],
      TypeList: [],
      description: "",
      variety: "",
      shipmentfee: "",
      Tags: "",
      taxrate: "",
      status: "",
      // selectedFile1: null,
      // selectedName1: "",
      // selectedFile2: null,
      // selectedName2: "",
      selectedFile3: [],
      selectedName3: "",
      // selectedFile4: null,
      // selectedName4: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const data = new FormData();
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    await axiosConfig.post("/getcategory", data).then((response) => {
      let rowData = response.data.data?.category;
      console.log(rowData);
      if (rowData) {
        this.setState({ rowData });
      }
    });
    const type = new FormData();
    // let pageparmission = JSON.parse(localStorage.getItem("userData"));
    type.append("user_id", pageparmission?.Userinfo?.id);
    type.append("role", pageparmission?.Userinfo?.role);

    const brand = new FormData();
    // let pageparmission = JSON.parse(localStorage.getItem("userData"));
    brand.append("user_id", pageparmission?.Userinfo?.id);
    brand.append("role", pageparmission?.Userinfo?.role);
    await axiosConfig.post("/getbrand", brand).then((response) => {
      let Brandlist = response.data.data?.brands;
      console.log(response);
      if (Brandlist) {
        this.setState({ Brandlist });
      }
    });
    await axiosConfig.post("/producttypelistview", type).then((response) => {
      let TypeList = response.data.data;
      console.log(TypeList);
      if (TypeList) {
        this.setState({ TypeList });
      }
    });
  }

  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState({
      formValues: [...this.state.formValues, { PName: "", price: "" }],
    });
    this.handleSubmit();
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  handleSubmit() {
    console.log(this.state.formValues);
  }

  // onChangeHandler1 = (event) => {
  //   this.setState({ selectedFile1: event.target.files[0] });
  //   this.setState({ selectedName1: event.target.files[0].name });
  //   console.log(event.target.files[0]);
  // };
  // onChangeHandler2 = (event) => {
  //   this.setState({ selectedFile2: event.target.files[0] });
  //   this.setState({ selectedName2: event.target.files[0].name });
  //   console.log(event.target.files[0]);
  // };
  onChangeHandler3 = (event) => {
    let selectedName = Array.from(event.target.files);
    console.log(selectedName);
    this.setState({ selectedFile3: selectedName });

    // this.setState({ selectedFile3: event.target.files });
    // this.setState({ selectedName3: event.target.files[0].name });
    // console.log(event.target.files);
  };
  // onChangeHandler4 = (event) => {
  //   this.setState({ selectedFile4: event.target.files[0] });
  //   this.setState({ selectedName4: event.target.files[0].name });
  //   console.log(event.target.files[0]);
  // };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    // console.log(pageparmission?.Userinfo?.id);
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("brand_id", this.state.Brand);
    data.append("product_type_id", this.state.Type);
    data.append("title", this.state.P_Title);
    if (this.state.formValues.length > 0) {
      data.append("veriety", JSON.stringify(this.state.formValues));
    }
    data.append("category_id", this.state.category_name);
    // data.append("stock", this.state.stock);
    data.append("price", this.state.Price);
    data.append("discountprice", this.state.DiscountPrice);
    data.append("description", this.state.description);
    data.append("shipping_fee", this.state.shipmentfee);
    data.append("tax_rate", this.state.taxrate);
    data.append("tags", this.state.Tags);
    data.append("status", "Active");
    // this.state.selectedFile3.forEach((image, index) => {
    //   data.append(`image`, image);
    // });
    // debugger;
    for (let i = 0; i < this.state.selectedFile3?.length; i++) {
      data.append("images[]", this.state.selectedFile3[i]);
    }
    // for (const file of this.state.selectedFile3) {
    //   if (this.state.selectedFile3 !== null) {
    //     data.append("image_name", file);
    //   }
    // }

    axiosConfig
      .post(`/addproduct`, data, {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          swal("Success!", "You Data is been Submitted", "success");
          // this.props.history.push("/app/mmbaic/category/categoryList");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <h1 className="p-2 ">Product Upload</h1>
          <Row className="m-2">
            <Col>
              <h2>Basic Information</h2>
            </Col>
            {/* <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/mmbaic/category/categoryList")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col> */}
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label> Choose Category *</Label>

                    <select
                      onChange={(e) =>
                        this.setState({ category_name: e.target.value })
                      }
                      className="form-control"
                      name="Select"
                      id="Select"
                    >
                      <option value="volvo">--Select Category--</option>
                      {this.state.rowData &&
                        this.state.rowData?.map((val, i) => (
                          <option key={i} value={val?.id}>
                            {val?.category_name}
                          </option>
                        ))}
                    </select>
                    {/* <Input
                      type="text"
                      placeholder="Title"
                      name="category_name"
                      bsSize="lg"
                      value={this.state.category_name}
                      onChange={this.changeHandler}
                    /> */}
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label> Choose Type *</Label>

                    <select
                      onChange={(e) => this.setState({ Type: e.target.value })}
                      className="form-control"
                      name="Select"
                      id="Select"
                    >
                      <option value="volvo">--Select Type--</option>
                      {this.state.TypeList &&
                        this.state.TypeList?.map((val, i) => (
                          <option key={i} value={val?.id}>
                            {val?.product_type}
                          </option>
                        ))}
                    </select>
                    {/* <Input
                      type="text"
                      placeholder="Title"
                      name="category_name"
                      bsSize="lg"
                      value={this.state.category_name}
                      onChange={this.changeHandler}
                    /> */}
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label> Choose Brand *</Label>

                    <select
                      required
                      onChange={(e) => this.setState({ Brand: e.target.value })}
                      className="form-control"
                      name="Select"
                      id="Select"
                    >
                      <option value="volvo">--Select Brand--</option>
                      {this.state.Brandlist &&
                        this.state.Brandlist?.map((val, i) => (
                          <option key={i} value={val?.id}>
                            {val?.brand_name}
                          </option>
                        ))}
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Title</Label>
                    <Input
                      type="text"
                      placeholder="Title"
                      name="P_Title"
                      bsSize="lg"
                      value={this.state.P_Title}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="12" md="12">
                  <FormGroup>
                    <Label>Description</Label>
                    <textarea
                      type="text"
                      rows={5}
                      className="form-control"
                      placeholder="Description ..."
                      name="description"
                      bsSize="lg"
                      value={this.state.description}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label> PRICE (₹)</Label>
                    <Input
                      onKeyDown={(e) =>
                        ["e", "E", "+", "-"].includes(e.key) &&
                        e.preventDefault()
                      }
                      min={0}
                      type="number"
                      placeholder="Amount In Number"
                      name="Price"
                      bsSize="lg"
                      value={this.state.Price}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <Row>
                    <Col lg="2" sm="2" md="2">
                      <div>
                        <h5 className="mt-2"> OR</h5>
                      </div>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Button
                          style={{ width: "100%" }}
                          color="primary"
                          className="button add mt-2"
                          type="button"
                          // onClick={() => this.addFormFields()}
                          onClick={() => this.setState({ Addmore: true })}
                        >
                          Add
                        </Button>

                        {/* <Label>Variety</Label>
                        <Input
                          type="text"
                          placeholder="Variety..."
                          name="variety"
                          bsSize="lg"
                          value={this.state.variety}
                          onChange={this.changeHandler}
                        /> */}
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>{" "}
              </Row>
              {this.state.Addmore ? (
                <>
                  <Row>
                    <Col lg="12">
                      {this.state.formValues.map((element, index) => (
                        <div className="" key={index}>
                          <Row className="py-1">
                            <Col lg="4" sm="4">
                              <label>Product Name</label>
                              <input
                                className="form-control"
                                type="text"
                                name="PName"
                                value={element.PName || ""}
                                onChange={(e) => this.handleChange(index, e)}
                              />
                            </Col>
                            <Col lg="4" sm="4">
                              <label>Price</label>
                              <input
                                onKeyDown={(e) =>
                                  ["e", "E", "+", "-"].includes(e.key) &&
                                  e.preventDefault()
                                }
                                min={0}
                                className="form-control"
                                type="number"
                                name="price"
                                value={element.price || ""}
                                onChange={(e) => this.handleChange(index, e)}
                              />
                            </Col>
                            <Col>
                              {index ? (
                                <Button
                                  color="primary"
                                  type="button"
                                  className="button remove mt-2"
                                  onClick={() => this.removeFormFields(index)}
                                >
                                  Remove
                                </Button>
                              ) : null}
                              <Button
                                color="primary"
                                className="button add mt-2  mx-3"
                                type="button"
                                onClick={() => this.addFormFields()}
                              >
                                Add
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      ))}
                    </Col>
                  </Row>
                </>
              ) : null}

              <Row>
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label> Quantity </Label>
                    <Input
                      type="number"
                      placeholder="in Number"
                      name="stock"
                      bsSize="lg"
                      value={this.state.stock}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col> */}
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Discount Price</Label>
                    <Input
                      onKeyDown={(e) =>
                        ["e", "E", "+", "-"].includes(e.key) &&
                        e.preventDefault()
                      }
                      min={0}
                      type="number"
                      placeholder="Discount Price"
                      name="DiscountPrice"
                      bsSize="lg"
                      value={this.state.DiscountPrice}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>SHIPPING FEE(₹)</Label>
                    <Input
                      onKeyDown={(e) =>
                        ["e", "E", "+", "-"].includes(e.key) &&
                        e.preventDefault()
                      }
                      min={0}
                      type="number"
                      placeholder="Number..."
                      name="shipmentfee"
                      bsSize="lg"
                      value={this.state.shipmentfee}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>TAX RATE (%)</Label>
                    <Input
                      onKeyDown={(e) =>
                        ["e", "E", "+", "-"].includes(e.key) &&
                        e.preventDefault()
                      }
                      min={0}
                      type="number"
                      placeholder="Tax in Percentage"
                      name="taxrate"
                      bsSize="lg"
                      value={this.state.taxrate}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>TAGS</Label>
                    <Input
                      type="text"
                      placeholder="Type here..."
                      name="Tags"
                      bsSize="lg"
                      value={this.state.Tags}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="6" sm="6">
                  <FormGroup>
                    <Label>Media & Published (Select multiple files)</Label>
                    <CustomInput
                      multiple
                      style={{ cursor: "pointer" }}
                      accept="image/png,image/jpeg,image/jpg"
                      name="image[]"
                      type="file"
                      onChange={this.onChangeHandler3}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add Product
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddProduct;
