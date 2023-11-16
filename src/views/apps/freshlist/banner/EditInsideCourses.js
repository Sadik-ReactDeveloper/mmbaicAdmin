import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
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
import { Route } from "react-router-dom";
import { CloudLightning } from "react-feather";

export default class AddInsidecourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      heading: "",
      shortDescription: "",
      CategoyList: [],
      CourseURL: "",
      CourserCategory: "",
      iamgeurl: "",
      CourseDescription: "",
      selectedFile: undefined,
      selectedName: "",
      status: "",
      description: "",
      editorState: EditorState.createEmpty(),
    };
  }
  async componentDidMount() {
    let { id, courseid } = this.props.match.params;
    console.log(id);
    console.log(courseid);
    if (id == 0) {
      this.setState({ heading: "Add" });
    } else {
      this.setState({ heading: "Edit" });
      const data = new FormData();
      let pageparmission = JSON.parse(localStorage.getItem("userData"));
      data.append("user_id", pageparmission?.Userinfo?.id);
      data.append("role", pageparmission?.Userinfo?.role);
      data.append("course_id", courseid);
      data.append("lesson_id", id);
      await axiosConfig
        .post("/editviewLesson", data)
        .then((response) => {
          console.log(response?.data.data[0]);
          let data = response?.data.data[0];
          const newContent = data?.description;
          const blocksFromHTML = convertFromHTML(newContent);
          const newContentState = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
          );
          const newEditorState = EditorState.createWithContent(newContentState);
          console.log(newEditorState);
          this.setState({
            description: data?.description,
            editorState: newEditorState,
          });
          this.setState({
            CourserCategory: data?.cat_id,
            Title: data?.title,
            CourseURL: data?.lesson_url,
            status: data?.status,
            iamgeurl: data?.image,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    // console.log(event.target.files[0]);
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    let { id, courseid } = this.props.match.params;
    e.preventDefault();
    const data = new FormData();
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("cat_id", this.state.CourserCategory);
    data.append("course_id", courseid);
    data.append("title", this.state.Title);
    data.append("lesson_url", this.state.CourseURL);
    data.append("description", this.state.description);
    data.append("edit_id", id);
    data.append("status", this.state.status);
    // for (const file of this.state.selectedFile) {
    if (this.state.selectedFile !== null) {
      data.append("images", this.state.selectedFile);
    }
    // }
    // for (var value of data.values()) {
    //   console.log(value);
    // }
    // for (var key of data.keys()) {
    //   console.log(key);
    // }
    axiosConfig
      .post("/addLesson", data)
      .then((response) => {
        console.log(response);
        swal("Successful!", "Your Lesson has been Added", "success");
        this.props.history.push("/app/mmbaic/courseslist");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const {
      banner_title,
      Notice,
      Title,
      CategoyList,
      // PageName,
      editorState,
      shortDescription,
      // CourseDescription,
      CourserCategory,
      CourseURL,
      heading,
    } = this.state;
    return (
      <div>
        <Card>
          <div className="container mt-1">
            <Row>
              <Col>
                <h2>{heading} Lessons</h2>
              </Col>

              <Col>
                <div className="d-flex float-right">
                  <Route
                    render={({ history }) => (
                      <Button
                        className=" btn btn-danger float-right"
                        onClick={() => history.push("/app/mmbaic/courseslist")}
                      >
                        Back
                      </Button>
                    )}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <CardHeader></CardHeader>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Title*</Label>

                  <Input
                    required
                    type="text"
                    className="form-control"
                    name="Title"
                    placeholder="Enter Course Title"
                    value={Title}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Course URL *</Label>
                  <Input
                    // required
                    type="text"
                    className="form-control"
                    name="CourseURL"
                    placeholder="Enter URL"
                    value={CourseURL}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Image</Label>
                  <Input
                    type="file"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                </Col>
                {this.state.iamgeurl && this.state.iamgeurl ? (
                  <>
                    <img
                      src={this.state.iamgeurl}
                      style={{ borderRadius: "8px" }}
                      height={200}
                      width={250}
                    />
                  </>
                ) : null}
                <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>Enter Details</Label>
                  <Editor
                    toolbarClassName="demo-toolbar-absolute"
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}
                  />
                </Col>
              </Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label className="mb-1">Status</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    checked={this.state.status == "Active"}
                    type="radio"
                    name="status"
                    value="Active"
                  />
                  <span style={{ marginRight: "20px" }}>Active</span>
                  <input
                    style={{ marginRight: "3px" }}
                    checked={this.state.status == "Inactive"}
                    type="radio"
                    name="status"
                    value="Inactive"
                  />
                  <span style={{ marginRight: "3px" }}>Inactive</span>
                </div>
              </Col>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Submit
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
