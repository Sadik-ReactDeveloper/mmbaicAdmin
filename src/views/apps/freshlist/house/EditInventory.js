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

export class EditInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: "",
      ViewoneProduct: {},
      P_Title: "",
      Price: "",
      Inventory: "",
      stock: "",
      // Regularprice: "",
      formValues: [{ PName: "", price: "" }],
      DiscountPrice: "",
      Addmore: false,
      rowData: [],
      description: "",
      variety: "",
      shipmentfee: "",
      Tags: "",
      taxrate: "",
      status: "",

      selectedFile3: [],
      selectedName3: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    let { id } = this.props?.match.params;
    console.log(id);

    console.log(this.props?.location?.state);

    this.setState({ Inventory: this.props?.location?.state?.HSN_SAC });
    this.setState({ stock: this.props?.location?.state?.quantity });
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

  onChangeHandler3 = (event) => {
    let selectedName = Array.from(event.target.files);
    console.log(selectedName);
    this.setState({ selectedFile3: selectedName });
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props?.match.params;
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    const data = new FormData();
    console.log(id);
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("quantity", this.state.stock);
    data.append("HSN_SAC", this.state.Inventory);
    data.append("product_id", id);

    axiosConfig
      .post(`/updateinventory`, data)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          swal("Success!", "You Inventory has been Updated", "success");
          this.props.history.push("/app/freshlist/house/inventory");
        }
      })
      .catch((error) => {
        console.log(error);
        swal("Some thing went wrong please try again after some time");
      });
    // } else {
    //   swal("Enter Value in field");
    // }
  };
  render() {
    return (
      <div>
        <Card>
          <h1 className="p-2 "> Update Inventory</h1>
          <Row className="m-2">
            <Col>
              <h2>Existing Information</h2>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" float-right"
                    color="danger"
                    onClick={() => history.goBack()}
                  >
                    Back
                  </Button>
                )}
              />
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
              <Row>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label> Quantity</Label>
                    <Input
                      type="text"
                      placeholder="Quantity In Number"
                      name="stock"
                      value={this.state.stock}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Use regular expression to allow only numbers
                        const numericValue = value.replace(/\D/g, "");
                        this.setState({ stock: numericValue });
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label> HSN / SAC </Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      name="Inventory"
                      value={this.state.Inventory}
                      onChange={this.changeHandler}
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
                  Update Inventory
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EditInventory;
