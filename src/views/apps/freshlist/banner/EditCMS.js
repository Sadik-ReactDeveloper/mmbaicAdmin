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
import EmailEditor from "./EmailEditor";
import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";

import "draft-js/dist/Draft.css";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import MyEditor from "../../../../extensions/editor/Editor";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import { Route } from "react-router-dom";

export default class AddBanner extends Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
    this.state = {
      banner_title: "",
      Notice: "",
      Title: "",
      formValues: [{ Title: "", Description: "" }],
      Welcome: "",
      Heading: "",
      HeadingOne: "",
      Headingtwo: "",
      Footer: "",
      PageName: "",
      cmstype: "",
      image: "",
      selectedFile: null,
      selectedName: "",
      status: "",
      description: "",
      editorState: EditorState.createEmpty(),
    };
  }

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
  log = () => {
    if (this.editorRef.current) {
      console.log(this.editorRef.current.getContent());
    }
  };
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  componentDidMount() {
    let { id } = this.props?.match?.params;
    // console.log(id);
    let type = JSON.parse(localStorage.getItem("SelectedCmsdata"));
    let types = JSON.parse(localStorage.getItem("SelectedCmsdata"))?.data;
    // console.log(types?.image);
    debugger;
    if (types?.image) {
      this.setState({ image: types?.image });
    }

    this.setState({ status: types?.IsActive });
    if (types?.cms_type) {
      this.setState({ cmstype: types?.cms_type });
    }
    if (type?.more_cms_content) {
      this.setState({ formValues: type?.more_cms_content });
    }
    if (type?.more_cms_content) {
      let value = type?.more_cms_content;
      this.setState({ Welcome: value?.Welcome });
      this.setState({ Heading: value?.Heading });
      this.setState({ HeadingOne: value?.HeadingOne });
      this.setState({ Headingtwo: value?.Headingtwo });
      this.setState({ Footer: value?.Footer });
    }
    this.setState({ banner_title: types?.type });
    if (types?.description) {
      const newContent = types?.description;
      const blocksFromHTML = convertFromHTML(newContent);
      const newContentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      const newEditorState = EditorState.createWithContent(newContentState);
      console.log(newEditorState);
      this.setState({
        description: types?.description,
        editorState: newEditorState,
      });
      //   const contentState = ContentState.createFromBlockArray(
      //     convertFromHTML(types?.description)
      //   );
      //   // Create EditorState with ContentState
      //   const editorState = EditorState.createWithContent(contentState);
      //   this.setState({
      //     description: types?.description,
      //     editorState: editorState,
      //   });
    }

    // if (types?.description) {
    //   const contentState = ContentState.createFromBlockArray(
    //     convertFromHTML(types?.description)
    //   );
    //   // Create EditorState with ContentState
    //   const editorState = EditorState.createWithContent(contentState);
    //   this.setState({
    //     description: types?.description,
    //     editorState: editorState,
    //   });
    // }
    if (types?.title) {
      this.setState({ Title: types?.title });
    }

    if (types?.notice) {
      this.setState({ Notice: types?.notice });
    }
    if (types?.pagename) {
      this.setState({ PageName: types?.pagename });
    }
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  // onChangeHandler = (event) => {
  //   this.setState({ selectedFile: event.target.files });
  //   this.setState({ selectedName: event.target.files.name });
  //   console.log(event.target.files);
  // };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props?.match?.params;
    // console.log(id);
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    const {
      banner_title,
      Notice,
      Title,
      PageName,
      selectedFile,
      description,
      status,
    } = this.state;
    const data = new FormData();
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    data.append("edit_id", id);
    data.append("action", "edit");
    debugger;
    if (this.state.cmstype) {
      data.append("cms_type", this.state.cmstype);
    }
    if (this.state.formValues) {
      data.append("more_cms_content", JSON.stringify(this.state.formValues));
    }
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
    // for (const file of selectedFile) {
    if (selectedFile !== null) {
      data.append("images", selectedFile);
    } else {
      if (this.state.image) {
        data.append("imagename", this.state.image);
      }
    }
    if (
      this.state.Heading ||
      this.state.Welcome ||
      this.state.HeadingOne ||
      this.state.Footer
    ) {
      let Content = {
        Welcome: this.state.Welcome,
        Heading: this.state.Heading,
        HeadingOne: this.state.HeadingOne,
        Footer: this.state.Footer,
      };
      data.append("more_cms_contents", JSON.stringify(Content));
    }
    // }
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
        swal("Something went Wrong Try again");
      });
  };
  render() {
    const {
      banner_title,
      Notice,
      Title,
      PageName,
      editorState,
      status,
      cmstype,
    } = this.state;
    // console.log(status);
    return (
      <div>
        <Card>
          <div className="container mt-1">
            <Row>
              <Col>
                <h2>edit Your CMS</h2>
              </Col>
              <Row>
                <Col>{/* <EmailEditor /> */}</Col>
              </Row>
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
                  <Label>
                    Selected CMS Page :- <strong>{banner_title}</strong>
                    <div>
                      Selected CMS Type :- <strong>{cmstype && cmstype}</strong>
                    </div>
                  </Label>
                  {/* <CustomInput
                    disabled
                    type="select"
                    name="banner_title"
                    placeholder="Enter Banner URL"
                    value={banner_title}
                    onChange={this.changeHandler}
                  >
                    <option value="">--Select--</option>
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
                    <option value="Footer">Footer</option>
                  </CustomInput> */}
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
                        type="file"
                        className="form-control"
                        // name="PageName"
                        // placeholder="Enter PageName"
                        // value={this.state.PageName}
                        onChange={this.onChangeHandler}
                      />
                    </Col>
                    {this.state.image && (
                      <Col lg="6" md="6" sm="6" className="mb-2">
                        <img
                          className="mb-1"
                          style={{ borderRadius: "8px" }}
                          width="180px"
                          height="160px"
                          src={this.state.image}
                        />
                      </Col>
                    )}
                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Welcome Title</Label>
                      <Input
                        type="text"
                        className="form-control"
                        name="Welcome"
                        placeholder="Enter Welcome Title"
                        value={this.state.Welcome}
                        onChange={this.changeHandler}
                      />
                    </Col>
                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Heading</Label>
                      <Input
                        type="text"
                        className="form-control"
                        name="Heading"
                        placeholder="Enter Heading here"
                        value={this.state.Heading}
                        onChange={this.changeHandler}
                      />
                    </Col>
                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Heading Next</Label>
                      <Input
                        type="text"
                        className="form-control"
                        name="HeadingOne"
                        placeholder="Enter Heading here"
                        value={this.state.HeadingOne}
                        onChange={this.changeHandler}
                      />
                    </Col>
                    {/* <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Heading two</Label>
                      <Input
                        required
                        type="text"
                        className="form-control"
                        name="HeadingOne"
                        placeholder="Enter Heading here"
                        value={this.state.HeadingOne}
                        onChange={this.changeHandler}
                      />
                    </Col> */}
                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Footer</Label>
                      <Input
                        type="text"
                        className="form-control"
                        name="Footer"
                        placeholder="Enter Heading here"
                        value={this.state.Footer}
                        onChange={this.changeHandler}
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
                        type="file"
                        className="form-control"
                        // value={this.state.PageName}
                        onChange={this.onChangeHandler}
                      />
                    </Col>
                    {this.state.image && (
                      <img
                        className="mb-1"
                        style={{ borderRadius: "8px" }}
                        width="180px"
                        height="160px"
                        src={this.state.image}
                      />
                    )}

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
                {banner_title == "Aboutus" ||
                banner_title == "RefundPolicy" ||
                banner_title == "FAQ" ||
                banner_title == "PrivacyPolicy" ||
                banner_title == "CookieNotice" ||
                banner_title == "SiteMap" ? (
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
                        type="file"
                        className="form-control"
                        // value={this.state.PageName}
                        onChange={this.onChangeHandler}
                      />
                    </Col>
                    {this.state.image && (
                      <img
                        className="mb-1"
                        style={{ borderRadius: "8px" }}
                        width="180px"
                        height="160px"
                        src={this.state.image}
                      />
                    )}

                    <Col lg="12" md="12" sm="12" className="mb-2">
                      <Label>Editor</Label>
                      {/* <Editor
                        apiKey="4yu3dnnfomwho205whqgeq81g1t83w368xnb1sjmlua6646n"
                        // onInit={(evt, editor) => editorRef.current = editor}
                        onInit={(evt, editor) =>
                          (this.editorRef.current = editor)
                        }
                        initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                          height: 500,
                          menubar: false,
                          plugins: [
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                          ],
                          toolbar:
                            "undo redo | blocks | " +
                            "bold italic forecolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | help",
                          content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                      /> */}
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
              </Row>
              {banner_title == "Aboutus" ||
              banner_title == "Opportunity" ||
              banner_title == "FAQ" ||
              banner_title == "RefundPolicy" ||
              banner_title == "PrivacyPolicy" ||
              banner_title == "CookieNotice" ||
              banner_title == "SiteMap" ? (
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
              {banner_title && banner_title !== "" ? (
                <>
                  <Col lg="6" md="6" sm="6" className="mb-2">
                    <Label className="mb-1">Status</Label>
                    <div
                      onChange={(e) => this.changeHandler1(e)}
                      className="form-label-group"
                    >
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        checked={status == "Active"}
                        value="Active"
                      />
                      <span style={{ marginRight: "20px" }}>Active</span>
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        checked={status == "Inactive"}
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
