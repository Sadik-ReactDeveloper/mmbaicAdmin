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

export class AddQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: "",
      type: "",
      EditId: "",
      Courseid: "",
      rowData: [],
      CorrectAns: "",
      Question: "",
      AnswerOne: "",
      Answertwo: "",
      Answerthree: "",
      Answerfour: "",
      desc: "",
      status: "",
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
  changeHandlerCorrect = (value) => {
    this.setState({ CorrectAns: value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    let { id, editid } = this.props.match.params;
    this.setState({ EditId: editid });
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    if (id > 0) {
      this.setState({ Courseid: id });
    }
    if (editid > 0) {
      const data = new FormData();
      data.append("user_id", pageparmission?.Userinfo?.id);
      data.append("role", pageparmission?.Userinfo?.role);
      data.append("quiz_id", editid);
      await axiosConfig
        .post("/getEditViewQuiz", data)
        .then((response) => {
          console.log(response?.data.data[0]);
          let Data = response?.data?.data[0];
          // this.setState({AnswerOne:""})
          let Options = Data?.options.split(",");
          this.setState({ AnswerOne: Options[0] });
          this.setState({ Answertwo: Options[1] });
          this.setState({ Answerthree: Options[2] });
          this.setState({ Answerfour: Options[3] });
          this.setState({ Question: Data?.qid });
          this.setState({ CorrectAns: Data?.ans });
          this.setState({ status: Data?.status });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const data = new FormData();
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    await axiosConfig
      .post("/getCourses", data)
      .then((response) => {
        let rowData = response.data.data?.courses;
        if (rowData) {
          this.setState({ rowData });
        }
        // console.log(rowData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  submitHandler = (e) => {
    e.preventDefault();
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    const data = new FormData();
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    data.append("edit_id", this.state.EditId);

    let options = [
      this.state.AnswerOne,
      this.state.Answertwo,
      this.state.Answerthree,
      this.state.Answerfour,
    ];
    data.append("options", options);
    data.append("qid", this.state.Question);
    data.append("course_id", this.state.Courseid);
    data.append("ans", this.state.CorrectAns);
    data.append("status", this.state.status);
    if (this.state.Courseid > 0) {
      axiosConfig
        .post(`/addQuiz`, data)
        .then((response) => {
          if (response?.data.message) {
            swal("Success!", "Your Quiz Submitted", "Success");
            this.props.history.push("/app/mmbaic/category/QuizList");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      swal("Please Choose Course ");
    }
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Quiz
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
            <div className="container">
              <Form onSubmit={this.submitHandler}>
                {/* <div className="d-flex justify-content-center">
                  <h2>Create Quiz</h2>
                </div> */}
                <Row>
                  <Col lg="6" md="6" sm="12">
                    <FormGroup>
                      <Label>Choose Course *</Label>

                      <CustomInput
                        required
                        type="select"
                        onChange={(e) =>
                          this.setState({ Courseid: e.target.value })
                        }
                        className="form-control"
                        name="Select"
                        id="Select"
                      >
                        <option value="volvo">--Select Course--</option>
                        {this.state.rowData &&
                          this.state.rowData?.map((val, i) => (
                            <option
                              selected={this.state.Courseid == val?.id}
                              key={i}
                              value={val?.id}
                            >
                              {val?.course_title}
                            </option>
                          ))}
                      </CustomInput>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col lg="3" md="3" sm="3">
                    <h4 className="mt-1">Enter Question : </h4>
                  </Col>
                  <Col lg="5" md="5" sm="5">
                    <textarea
                      required
                      className="form-control"
                      placeholder="Enter Question here..."
                      name="Question"
                      value={this.state.Question}
                      onChange={this.changeHandler}
                    />
                  </Col>
                </Row>
                <Row className="mt-1">
                  <Col lg="3" md="3" sm="3">
                    <h4>Enter 1st Option : </h4>
                  </Col>
                  <Col lg="5" md="5" sm="5">
                    <div className="d-flex ">
                      <input
                        required
                        className="form-control"
                        placeholder="Enter Answer here..."
                        name="AnswerOne"
                        value={this.state.AnswerOne}
                        onChange={this.changeHandler}
                      />
                      <input
                        checked={this.state.CorrectAns == this.state.AnswerOne}
                        title="Check for correct Answer after Enter Value"
                        name="CorrectAns"
                        value={this.state.CorrectAns}
                        onChange={(e) =>
                          this.changeHandlerCorrect(this.state.AnswerOne)
                        }
                        className="ml-1"
                        type="radio"
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mt-1">
                  <Col lg="3" md="3" sm="3">
                    <h4>Enter 2nd Option : </h4>
                  </Col>
                  <Col lg="5" md="5" sm="5">
                    <div className="d-flex ">
                      <input
                        required
                        className="form-control"
                        name="Answertwo"
                        placeholder="Enter Answer here..."
                        value={this.state.Answertwo}
                        onChange={this.changeHandler}
                      />
                      <input
                        checked={this.state.CorrectAns == this.state.Answertwo}
                        title="Check for correct Answer after Enter Value"
                        name="CorrectAns"
                        value={this.state.CorrectAns}
                        onChange={(e) =>
                          this.changeHandlerCorrect(this.state.Answertwo)
                        }
                        className=" ml-1"
                        type="radio"
                      />{" "}
                    </div>
                  </Col>
                </Row>
                <Row className="mt-1">
                  <Col lg="3" md="3" sm="3">
                    <h4>Enter 3rd Option : </h4>
                  </Col>
                  <Col lg="5" md="5" sm="5">
                    <div className="d-flex ">
                      <input
                        required
                        className="form-control"
                        name="Answerthree"
                        placeholder="Enter Answer here..."
                        value={this.state.Answerthree}
                        onChange={this.changeHandler}
                      />
                      <input
                        checked={
                          this.state.CorrectAns == this.state.Answerthree
                        }
                        title="Check for correct Answer after Enter Value"
                        className=" ml-1"
                        type="radio"
                        name="CorrectAns"
                        value={this.state.CorrectAns}
                        onChange={(e) =>
                          this.changeHandlerCorrect(this.state.Answerthree)
                        }
                      />{" "}
                    </div>
                  </Col>
                </Row>
                <Row className="mt-1">
                  <Col lg="3" md="3" sm="3">
                    <h4>Enter 4th Option : </h4>
                  </Col>
                  <Col lg="5" md="5" sm="5">
                    <div className="d-flex ">
                      <input
                        required
                        className="form-control"
                        name="Answerfour"
                        placeholder="Enter Answer here..."
                        value={this.state.Answerfour}
                        onChange={this.changeHandler}
                      />
                      <input
                        checked={this.state.CorrectAns == this.state.Answerfour}
                        title="Check for correct Answer after Enter Value"
                        className=" ml-1"
                        type="radio"
                        name="CorrectAns"
                        value={this.state.CorrectAns}
                        onChange={(e) =>
                          this.changeHandlerCorrect(this.state.Answerfour)
                        }
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="d-flex justify-content-center mt-2">
                      <Button color="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>

            {/* <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2"> */}
            {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Category Type</Label>
                  <CustomInput
                    type="select"
                    placeholder="Select Type"
                    name="type"
                    value={this.state.type}
                    onChange={this.changeHandler}
                  >
                    <option>---Select---</option>
                    <option value="service">Services</option>
                    <option value="Caourses">Courses</option>
                  </CustomInput>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Category Name</Label>
                    <Input
                      type="text"
                      placeholder="Category Name"
                      name="category_name"
                      value={this.state.category_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Category Image </Label>
                    <CustomInput type="file" onChange={this.onChangeHandler1} />
                  </FormGroup>
                </Col> */}

            {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Thumbnail</Label>
                    <CustomInput type="file" onChange={this.onChangeHandler2} />
                  </FormGroup>
                </Col> */}

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

            {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Description</Label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  />
                </Col> */}

            <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
              <Label className="mb-0">Status</Label>
              <div className="form-label-group" onChange={this.changeHandler1}>
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
            {/* </Row> */}

            {/* <Row>
                <Col>
                  <div className="d-flex justify-content-start">
                    <Button.Ripple color="primary" type="submit" className="">
                      Add Category
                    </Button.Ripple>
                  </div>
                </Col>
              </Row>
            </Form> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddQuiz;
