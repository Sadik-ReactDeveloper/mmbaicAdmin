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

export default class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner_title: "",
      rowData: [],
      Category: "",
      Notice: "",
      Title: "",
      PageName: "",
      selectedFile: undefined,
      selectedName: "",
      status: "",
      description: "",
      editorState: EditorState.createEmpty(),
    };
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  async componentDidMount() {
    let { id } = this.props?.match?.params;
    console.log(id);
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    const formdata = new FormData();

    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("service_id", id);
    await axiosConfig
      .post("/editServiceView", formdata)
      .then((response) => {
        let rowData = response.data?.data;
        console.log(rowData);
        this.setState({
          Category: rowData.cat_id,
          Title: rowData?.title,
          status: rowData?.status,
        });
        const newContent = rowData?.description;
        const blocksFromHTML = convertFromHTML(newContent);
        const newContentState = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap
        );
        const newEditorState = EditorState.createWithContent(newContentState);
        console.log(newEditorState);
        this.setState({
          description: rowData?.description,
          editorState: newEditorState,
        });
        // if (rowData) {
        //   // this.setState({ rowData });
        // }
      })
      .catch((err) => {
        console.log(err);
      });
    const data = new FormData();

    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    await axiosConfig
      .post("/getcategoryList", data)
      .then((response) => {
        let rowData = response.data?.data.category;
        // console.log(rowData);
        if (rowData) {
          this.setState({ rowData });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files });
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
    let { id } = this.props?.match?.params;
    console.log(id);
    const data = new FormData();
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    // debugger;
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("cat_id", this.state.Category);
    data.append("title", this.state.Title);
    data.append("status", this.state.status);
    data.append("description", this.state.description);
    data.append("edit_id", id);
    // for (const file of this.state.selectedFile) {
    // if (this.state.selectedFile !== null) {
    //   data.append("banner_img", file);
    // }
    // }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    axiosConfig
      .post("/addServices", data)
      .then((response) => {
        console.log(response);
        swal("Successful!", "Details Added Successfully", "success");
        this.props.history.push("/app/mmbaic/services/List");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { banner_title, Notice, Title, PageName, editorState, Category } =
      this.state;
    return (
      <div>
        <Card>
          <div className="container mt-1">
            <Row>
              <Col>
                <h2>Edit Services</h2>
              </Col>

              <Col>
                <div className="d-flex float-right">
                  <Route
                    render={({ history }) => (
                      <Button
                        className=" btn btn-danger float-right"
                        onClick={() =>
                          history.push("/app/mmbaic/services/List")
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
                  <Label> Select Category</Label>
                  <CustomInput
                    required
                    type="select"
                    className="form-control"
                    name="Category"
                    placeholder="Enter Header Category"
                    value={Category}
                    onChange={this.changeHandler}
                  >
                    <option>--Select--</option>
                    {this.state.rowData &&
                      this.state.rowData?.map((ele, i) => {
                        return (
                          <option value={ele?.id} key={i}>
                            {ele?.category}
                          </option>
                        );
                      })}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label> Service Title</Label>
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

                {/* <Col lg="6" md="6" sm="6" className="mb-2">
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
                </Col> */}
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
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label className="mb-1">Status</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
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
                    checked={this.state.status == "Inactive"}
                    style={{ marginRight: "3px" }}
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
                    Add
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
