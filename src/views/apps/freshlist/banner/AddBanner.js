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
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import MyEditor from "../../../../extensions/editor/Editor";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import { Route } from "react-router-dom";

export default class AddBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner_title: "",
      Notice: "",
      Title: "",
      PageName: "",
      formValues: [{ Title: "", Description: "" }],
      selectedFile: null,
      selectedName: "",
      status: "Active",
      description: "",
      editorState: EditorState.createEmpty(),
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  // onChangeHandler = (event) => {
  //   this.setState({ selectedFile: event.target.files[0] });
  //   this.setState({ selectedName: event.target.files[0].name });
  //   console.log(event.target.files[0]);
  // };

  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState({
      formValues: [...this.state.formValues, { Title: "", Description: "" }],
    });
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files.name });
    console.log(event.target.files);
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.formValues);
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    const {
      banner_title,
      Notice,
      Title,
      PageName,
      selectedFile,
      description,
      status,
      TypeOfCms,
    } = this.state;
    const data = new FormData();
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    data.append("cms_type", TypeOfCms);
    data.append("action", "submit");
    if (banner_title) {
      data.append("type", banner_title);
    }
    data.append("IsActive", status);
    if (Notice) {
      data.append("notice", Notice);
    }
    if (Title) {
      data.append("title", Title);
    }
    if (PageName) {
      data.append("pagename", PageName);
    }
    if (description) {
      data.append("description", description);
    }
    if (this.state.formValues) {
      data.append("more_cms_content", JSON.stringify(this.state.formValues));
    }
    // for (const file of selectedFile) {
    // }
    if (selectedFile !== null) {
      data.append("images", selectedFile);
    }

    // for (var value of data.values()) {
    //   console.log(value);
    // }
    // for (var key of data.keys()) {
    //   console.log(key);
    // }

    axiosConfig
      .post("/createcms", data)
      .then((response) => {
        console.log(response);
        this.setState({ Notice: "" });
        this.setState({ banner_title: "" });
        this.setState({ Title: "" });
        this.setState({ PageName: "" });
        this.setState({ selectedFile: null });
        this.setState({ description: null });
        this.setState({ editorState: EditorState.createEmpty() });
        swal("Successful!", "Content Updated Successfully!", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { banner_title, Notice, Title, PageName, editorState, TypeOfCms } =
      this.state;
    return (
      <div>
        <Card>
          <div className="container mt-1">
            <Row>
              <Col>
                <h2>Add Your CMS</h2>
              </Col>

              <Col>
                <div className="d-flex float-right">
                  <Route
                    render={({ history }) => (
                      <Button
                        className=" btn btn-success float-right"
                        onClick={() =>
                          history.push("/app/mmbaic/banner/headerCMS")
                        }
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
                  <Label>CMS Type *</Label>
                  <CustomInput
                    required
                    type="select"
                    name="TypeOfCms"
                    value={TypeOfCms}
                    onChange={this.changeHandler}
                  >
                    <option value="NA">--Select--</option>
                    <option value="Mobileapp">Mobile App</option>
                    <option value="Website">Website</option>
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Select CMS Type *</Label>
                  <CustomInput
                    required
                    type="select"
                    name="banner_title"
                    placeholder="Enter Banner URL"
                    value={banner_title}
                    onChange={this.changeHandler}
                  >
                    <option value="NA">--Select--</option>
                    <option value="Headernotice">Top Header</option>
                    <option value="Header">Header</option>
                    <option value="Slider">Slider</option>
                    <option value="Aboutus">About Us</option>
                    <option value="Membership">Membership</option>
                    <option value="Opportunity">Opportunity</option>
                    <option value="Testimonials">Testimonials</option>
                    <option value="ContactUS">ContactUS</option>
                    <option value="HowItWorks">How It Works</option>
                    <option value="Blogs">Blogs</option>
                    {/* <option value="overview">ABOUT US–OVERVIEW</option>
                    <option value="who_we_are">Who we are</option>
                    <option value="what_we_do">What we do</option>
                    <option value="Vision_and_Misson">
                      Vision and Mission
                    </option>
                    <option value="leadership">leaderShip</option> */}

                    <option value="Footer">Footer</option>
                  </CustomInput>
                </Col>
              </Row>
              <hr />
              <Row>
                {banner_title && banner_title == "Headernotice" ? (
                  <>
                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Notice</Label>
                      <textarea
                        required
                        // type="textarea"
                        className="form-control"
                        name="Notice"
                        placeholder="Enter Notice"
                        value={Notice}
                        onChange={this.changeHandler}
                      />
                    </Col>
                  </>
                ) : null}
                {(banner_title && banner_title == "Header") ||
                banner_title == "Footer" ? (
                  <>
                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Title</Label>
                      <Input
                        required
                        type="text"
                        className="form-control"
                        name="Title"
                        placeholder="Enter Header Title"
                        value={Title}
                        onChange={this.changeHandler}
                      />
                    </Col>
                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Page Name</Label>
                      <Input
                        required
                        type="text"
                        className="form-control"
                        name="PageName"
                        placeholder="Enter PageName"
                        value={PageName}
                        onChange={this.changeHandler}
                      />
                    </Col>
                  </>
                ) : null}
                {banner_title && banner_title == "Slider" ? (
                  <>
                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Title</Label>
                      <Input
                        required
                        type="text"
                        className="form-control"
                        name="Title"
                        placeholder="Enter Header Title"
                        value={Title}
                        onChange={this.changeHandler}
                      />
                    </Col>

                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Image</Label>
                      <Input
                        required
                        type="file"
                        className="form-control"
                        // name="PageName"
                        // placeholder="Enter PageName"
                        // value={this.state.PageName}
                        onChange={this.onChangeHandler}
                      />
                    </Col>
                    <Col lg="12" md="12" sm="12" className="mb-2">
                      <Label>Enter Details</Label>
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                      />
                    </Col>
                  </>
                ) : null}
                {(banner_title && banner_title == "Testimonials") ||
                banner_title == "Blogs" ? (
                  <>
                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Title</Label>
                      <Input
                        required
                        type="text"
                        className="form-control"
                        name="Title"
                        placeholder="Enter Title"
                        value={Title}
                        onChange={this.changeHandler}
                      />
                    </Col>

                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Image</Label>
                      <Input
                        required
                        type="file"
                        className="form-control"
                        // value={this.state.PageName}
                        onChange={this.onChangeHandler}
                      />
                    </Col>
                    <Col lg="12" md="12" sm="12" className="mb-2">
                      <Label>Editor</Label>
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                      />
                    </Col>
                  </>
                ) : null}
                {(banner_title && banner_title == "ContactUS") ||
                (banner_title && banner_title == "HowItWorks") ||
                (banner_title && banner_title == "Membership") ||
                (banner_title && banner_title == "Opportunity") ? (
                  <>
                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label> {banner_title} Title</Label>
                      <Input
                        required
                        type="text"
                        className="form-control"
                        name="Title"
                        placeholder="Enter Header Title"
                        value={Title}
                        onChange={this.changeHandler}
                      />
                    </Col>

                    <Col lg="12" md="12" sm="12" className="mb-2">
                      <Label>Editor</Label>
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                      />
                    </Col>
                  </>
                ) : null}
                {banner_title && banner_title == "Aboutus" ? (
                  <>
                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Title</Label>
                      <Input
                        required
                        type="text"
                        className="form-control"
                        name="Title"
                        placeholder="Enter Title"
                        value={Title}
                        onChange={this.changeHandler}
                      />
                    </Col>
                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Image</Label>
                      <Input
                        required
                        type="file"
                        className="form-control"
                        onChange={this.onChangeHandler}
                      />
                    </Col>

                    <Col lg="12" md="12" sm="12" className="mb-2">
                      <Label>Editor</Label>
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                      />
                    </Col>
                  </>
                ) : null}

                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Banner Title</Label>
                  <Input
                    required
                    type="text"
                    name="banner_title"
                    placeholder="Enter Banner Title"
                    value={this.state.banner_title}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Banner image</Label>
                  <CustomInput
                    type="file"
                    multiple
                    onChange={this.onChangeHandler}
                  />
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Banner Type</Label>
                  <CustomInput
                    required
                    type="select"
                    name="bannertype"
                    placeholder="Enter Banner Type"
                    value={this.state.bannertype}
                    onChange={this.changeHandler}
                  >
                    <option value="select">--Select--</option>
                    <option value="AB">AB</option>
                    <option value="PV">PV</option>
                  </CustomInput>
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Banner URL</Label>
                  <Editor
                    toolbarClassName="demo-toolbar-absolute"
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                      options: [
                        "inline",
                        "blockType",
                        "fontSize",
                        "fontFamily",
                      ],
                      inline: {
                        options: [
                          "bold",
                          "italic",
                          "underline",
                          "strikethrough",
                          "monospace",
                        ],
                        bold: { className: "bordered-option-classname" },
                        italic: { className: "bordered-option-classname" },
                        underline: { className: "bordered-option-classname" },
                        strikethrough: {
                          className: "bordered-option-classname",
                        },
                        code: { className: "bordered-option-classname" },
                      },
                      blockType: {
                        className: "bordered-option-classname",
                      },
                      fontSize: {
                        className: "bordered-option-classname",
                      },
                      fontFamily: {
                        className: "bordered-option-classname",
                      },
                    }}
                  />
                </Col> */}
              </Row>
              {banner_title == "Aboutus" || banner_title == "Opportunity" ? (
                <Form>
                  {this.state.formValues?.map((element, index) => (
                    <>
                      <Row key={index}>
                        <Col lg="4" md="4" sm="6">
                          <Label>Title</Label>

                          <Input
                            className="form-control"
                            type="text"
                            placeholder="enter Title"
                            name="Title"
                            value={element.Title || ""}
                            onChange={(e) => this.handleChange(index, e)}
                          />
                        </Col>
                        <Col lg="6" md="6" sm="6">
                          <Label>Description</Label>
                          <textarea
                            rows={15}
                            className="form-control"
                            type="text"
                            placeholder="enter Description"
                            name="Description"
                            value={element.Description || ""}
                            onChange={(e) => this.handleChange(index, e)}
                          />
                        </Col>
                        <Col>
                          <Button
                            color="primary"
                            className="button add mr-1 mt-1"
                            type="button"
                            onClick={() => this.addFormFields()}
                          >
                            +
                          </Button>

                          {index ? (
                            <Button
                              color="warning"
                              type="button"
                              className="button remove ml-1 mt-1"
                              onClick={() => this.removeFormFields(index)}
                            >
                              -
                            </Button>
                          ) : null}
                        </Col>
                      </Row>
                    </>
                  ))}
                </Form>
              ) : null}
              {banner_title && banner_title !== "NA" ? (
                <>
                  <Col lg="6" md="6" sm="6" className="mb-2">
                    <Label className="mb-1">Status</Label>
                    <div
                      className="form-label-group"
                      onChange={(e) => this.changeHandler1(e)}
                    >
                      <input
                        checked
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        // checked={
                        //   `${this.state.status == "Active"}` ? true : false
                        // }
                        value="Active"
                      />
                      <span style={{ marginRight: "20px" }}>Active</span>
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        // checked={
                        //   `${this.state.status == "Inactive"}` ? true : false
                        // }
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
                        Add
                      </Button.Ripple>
                    </Col>
                  </Row>
                </>
              ) : null}
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
