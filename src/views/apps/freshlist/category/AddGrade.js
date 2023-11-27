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
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";

export class AddGrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: "",
      type: "",
      Courseid: "",
      CorrectAns: "",
      Question: "",
      GradeAPercent: "",
      GradeBPercent: "",
      GradeCPercent: "",
      editorState: EditorState.createEmpty(),
      rowData: [],
      Answerthree: "",
      Answerfour: "",
      desc: "",
      status: "",
      description: "",
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
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
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
    let { id } = this.props.match.params;
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    if (id > 0) {
      const data = new FormData();
      data.append("user_id", pageparmission?.Userinfo?.id);
      data.append("role", pageparmission?.Userinfo?.role);
      await axiosConfig
        .post("/getEditViewGrade", data)
        .then((response) => {
          let rowData = response?.data?.data[0];
          this.setState({
            GradeAPercent: rowData?.grade_A.split(".")[0],
            GradeBPercent: rowData?.grade_B.split(".")[0],
            GradeCPercent: rowData?.grade_C.split(".")[0],
          });
          if (rowData?.description) {
            const newContent = rowData?.description;
            const blocksFromHTML = convertFromHTML(newContent);
            const newContentState = ContentState.createFromBlockArray(
              blocksFromHTML.contentBlocks,
              blocksFromHTML.entityMap
            );
            const newEditorState =
              EditorState.createWithContent(newContentState);
            console.log(newEditorState);
            this.setState({
              description: rowData?.description,
              editorState: newEditorState,
            });
          }
          // data.append("grade_A", this.state.GradeAPercent);
          // data.append("grade_B", this.state.GradeBPercent);
          // data.append("grade_C", this.state.GradeCPercent);
          // data.append("description", this.state.description);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // const data = new FormData();
    // data.append("user_id", pageparmission?.Userinfo?.id);
    // data.append("role", pageparmission?.Userinfo?.role);
    // await axiosConfig
    //   .post("/getCourses", data)
    //   .then((response) => {
    //     let rowData = response.data.data?.courses;
    //     if (rowData) {
    //       this.setState({ rowData });
    //     }
    //     console.log(rowData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  submitHandler = (e) => {
    e.preventDefault();
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    const data = new FormData();

    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    data.append("grade_A", this.state.GradeAPercent);
    data.append("grade_B", this.state.GradeBPercent);
    data.append("grade_C", this.state.GradeCPercent);
    data.append("description", this.state.description);
    // data.append("Courseid", this.state.Courseid);
    data.append("edit_id", 1);
    // data.append("status", this.state.status);
    axiosConfig
      .post(`/addGrade`, data)
      .then((response) => {
        console.log(response);
        if (response?.data.success) {
          swal("Success!", "Your grade Added Successfully", "Success");
          // this.props.history.push("/app/mmbaic/category/GradeList");
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
                Add/Update Grades
              </h1>
            </Col>
            {/* <Col>
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
            </Col> */}
          </Row>
          <CardBody>
            <div className="container">
              <Form onSubmit={this.submitHandler}>
                {/* <div className="d-flex justify-content-center">
                  <h2>Create Quiz</h2>
                </div> */}
                {/* <Row>
                  <Col lg="6" md="6" sm="12">
                    <FormGroup>
                      <Label> Choose Course *</Label>

                      <CustomInput
                        required
                        onChange={(e) =>
                          this.setState({ Courseid: e.target.value })
                        }
                        type="select"
                        className="form-control"
                        name="Select"
                        id="Select"
                      >
                        <option value="volvo">--Select Course--</option>
                        {this.state.rowData &&
                          this.state.rowData?.map((val, i) => (
                            <option key={i} value={val?.id}>
                              {val?.course_title}
                            </option>
                          ))}
                      </CustomInput>
                    </FormGroup>
                  </Col>
                </Row> */}
                {/* <Row>
                  <Col lg="5" md="5" sm="5">
                    <h4 className="mt-1">Enter Question : </h4>
                  </Col>
                  <Col lg="5" md="5" sm="5">
                    <textarea
                      required
                      className="form-control"
                      placeholder="Enter Question here"
                      name="Question"
                      value={this.state.Question}
                      onChange={this.changeHandler}
                    />
                  </Col>
                </Row> */}
                <Row className="mt-1">
                  <Col lg="5" md="5" sm="5">
                    <h4>Enter Grade A minimum % : </h4>
                  </Col>
                  <Col lg="5" md="5" sm="5">
                    <div className="d-flex ">
                      <input
                        required
                        className="form-control"
                        placeholder="Enter Grade A In %"
                        name="GradeAPercent"
                        value={this.state.GradeAPercent}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value?.length < 3) {
                            const numericValue = value.replace(/\D/g, "");

                            this.setState({ GradeAPercent: numericValue });
                          }
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mt-1">
                  <Col lg="5" md="5" sm="5">
                    <h4>Enter Grade B minimum % : </h4>
                  </Col>
                  <Col lg="5" md="5" sm="5">
                    <div className="d-flex ">
                      <input
                        required
                        className="form-control"
                        placeholder="Enter Grade B In %"
                        name="GradeBPercent"
                        value={this.state.GradeBPercent}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value?.length < 3) {
                            const numericValue = value.replace(/\D/g, "");

                            this.setState({ GradeBPercent: numericValue });
                          }
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mt-1">
                  <Col lg="5" md="5" sm="5">
                    <h4>Enter Grade C minimum % : </h4>
                  </Col>
                  <Col lg="5" md="5" sm="5">
                    <div className="d-flex ">
                      <input
                        required
                        className="form-control"
                        placeholder="Enter Grade C In %"
                        name="GradeCPercent"
                        value={this.state.GradeCPercent}
                        onChange={(e) => {
                          const value = e.target.value;

                          if (value?.length < 3) {
                            const numericValue = value.replace(/\D/g, "");

                            this.setState({ GradeCPercent: numericValue });
                          }
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" md="12" sm="12" className="p-2">
                    <Label>Enter Details</Label>
                    <Editor
                      toolbarClassName="demo-toolbar-absolute"
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      editorState={this.state.editorState}
                      onEditorStateChange={this.onEditorStateChange}
                    />
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

            {/* <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <Label className="mb-0">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={this.changeHandler1}
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
                </Col> */}
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
export default AddGrade;
