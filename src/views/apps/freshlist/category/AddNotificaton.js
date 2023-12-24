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

export class AddNotificaton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: "",
      type: "",
      desc: "",
      DeviceType: "",
      EditId: "",
      status: "",
      image: "",
      selectedFile1: null,
      selectedName1: "",
      selectedFile2: null,
      selectedName2: "",
      selectedFile3: null,
      selectedName3: "",
      selectedFile4: null,
      selectedName4: "",
    };
  }
  async componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    this.setState({ EditId: id });
    if (id > 0) {
      this.setState({ EditId: id });
      let pageparmission = JSON.parse(localStorage.getItem("userData"));
      let formdata = new FormData();
      formdata.append("user_id", pageparmission?.Userinfo?.id);
      formdata.append("edit_id", id);
      axiosConfig
        .post(`/editviewNotification`, formdata)
        .then((response) => {
          let value = response?.data?.data[0];
          this.setState({
            type: value?.title,
            DeviceType: value?.devicetype,
            category_name: value?.notificationtype,
            desc: value?.description,
            status: value?.status,
            image: value?.images,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  onChangeHandler1 = (event) => {
    this.setState({ selectedFile1: event.target.files[0] });
    this.setState({ selectedName1: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler2 = (event) => {
    this.setState({ selectedFile2: event.target.files[0] });
    this.setState({ selectedName2: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler3 = (event) => {
    this.setState({ selectedFile3: event.target.files[0] });
    this.setState({ selectedName3: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler4 = (event) => {
    this.setState({ selectedFile4: event.target.files[0] });
    this.setState({ selectedName4: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    const data = new FormData();
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    data.append("title", this.state.type);
    data.append("edit_id", this.state.EditId);
    data.append("devicetype", this.state.DeviceType);
    data.append("notificationtype", this.state.category_name);
    data.append("description", this.state.desc);
    // data.append("parent_id", 0);
    data.append("status", this.state.status);
    if (this.state.selectedFile1) {
      data.append("images", this.state.selectedFile1);
    }
    axiosConfig
      .post(`/addnotification`, data)
      .then((response) => {
        console.log(response);
        if (response?.data.success) {
          swal("Success!", "Your Data Submitted", "Success");
          this.props.history.push("/app/mmbaic/category/NotificationList");
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
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Notification
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={
                      () => history.goBack()
                      // history.push("/app/mmbaic/category/categoryList")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="4" md="4" className="mb-2">
                  <Label>Device Type</Label>
                  <CustomInput
                    required
                    type="select"
                    placeholder="Select Type"
                    name="DeviceType"
                    value={this.state.DeviceType}
                    onChange={this.changeHandler}
                  >
                    <option>---Select---</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Website">Website</option>
                  </CustomInput>
                </Col>
                <Col lg="4" md="4" className="mb-2">
                  <Label>Notification Type</Label>
                  <CustomInput
                    required
                    type="select"
                    placeholder="Select Type"
                    name="type"
                    value={this.state.type}
                    onChange={this.changeHandler}
                  >
                    <option>---Select---</option>
                    <option value="General">General</option>
                    <option value="Festival">Festival</option>
                    <option value="Newofer">New Offer</option>
                    <option value="Startofthemonth">Star of the Month</option>
                    <option value="New_opening">New Opening</option>
                    <option value="update">New Update</option>
                  </CustomInput>
                </Col>
                <Col lg="4" md="4">
                  <FormGroup>
                    <Label>Title</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Notification Title"
                      name="category_name"
                      value={this.state.category_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="4" md="4">
                  <FormGroup>
                    <Label>Image </Label>
                    <CustomInput type="file" onChange={this.onChangeHandler1} />
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" className="mb-2">
                  <Label>Description</Label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  />
                </Col>
                {this.state.image && this.state.image && (
                  <Col lg="6" md="6">
                    <FormGroup>
                      <img
                        style={{ borderRadius: "8px" }}
                        src={this.state.image && this.state.image}
                        height={190}
                        width={250}
                        alt="image"
                      />
                    </FormGroup>
                  </Col>
                )}

                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Web Banner </Label>
                    <CustomInput type="file" onChange={this.onChangeHandler3} />
                  </FormGroup>
                </Col> */}
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>App Banner</Label>
                    <CustomInput type="file" onChange={this.onChangeHandler4} />
                  </FormGroup>
                </Col> */}
              </Row>
              <Row>
                <Col lg="12" md="12" sm="12" className="mb-2 mt-1">
                  <Label className="mb-0">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={this.changeHandler1}
                  >
                    <input
                      checked={this.state.status == "Active"}
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      checked={this.state.status == "Deactive"}
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Deactive"
                    />
                    <span style={{ marginRight: "3px" }}>Deactive</span>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="d-flex justify-content-start">
                    <Button.Ripple color="primary" type="submit" className="">
                      Add
                    </Button.Ripple>
                  </div>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddNotificaton;
