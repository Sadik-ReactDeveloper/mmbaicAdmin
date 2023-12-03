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
      heading: "Add",
      Title: "",
      Amount: 0,
      PageName: "",
      selectedFile: null,
      selectedName: "",
      status: "Active",
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
  // onChangeHandler = (event) => {
  //   this.setState({ selectedFile: event.target.files[0] });
  //   this.setState({ selectedName: event.target.files[0].name });
  //   console.log(event.target.files[0]);
  // };
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
  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    if (id == 0) {
      this.setState({ heading: "Add" });
    } else {
      this.setState({ heading: "Edit" });
      let pageparmission = JSON.parse(localStorage.getItem("userData"));
      const data = new FormData();
      data.append("user_id", pageparmission?.Userinfo?.id);
      data.append("role", pageparmission?.Userinfo?.role);
      data.append("plan_id", id);
      axiosConfig
        .post("/getEditMembershipPlans", data)
        .then((response) => {
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
            banner_title: data?.duration,
            Title: data?.title,
            status: data?.status,
            Amount: data?.plan_amount,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    const {
      banner_title,
      //   Notice,
      Title,
      //   PageName,
      //   selectedFile,
      Amount,
      description,
      status,
      //   TypeOfCms,
    } = this.state;
    const data = new FormData();
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", pageparmission?.Userinfo?.role);
    data.append("edit_id", id);
    data.append("duration", banner_title);
    data.append("status", status);
    data.append("plan_amount", Amount);
    data.append("title", Title);
    data.append("description", description);

    // for (var value of data.values()) {
    //   console.log(value);
    // }
    // for (var key of data.keys()) {
    //   console.log(key);
    // }

    axiosConfig
      .post("/addMembershipPlans", data)
      .then((response) => {
        this.setState({ banner_title: "" });
        this.setState({ Title: "" });
        this.setState({ description: null });
        this.setState({ Amount: null });
        this.setState({ editorState: EditorState.createEmpty() });
        this.props.history.push("/app/mmbaic/plan/MemberPlanList");
        swal("Successful!", "Plan Created Successfully!", "success");
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
      PageName,
      editorState,
      TypeOfCms,
      Amount,
    } = this.state;
    return (
      <div>
        <Card>
          <div className="container mt-1">
            <Row>
              <Col>
                <h2>{this.state.heading} Plans</h2>
              </Col>

              <Col>
                <div className="d-flex float-right">
                  <Route
                    render={({ history }) => (
                      <Button
                        className=" btn btn-success float-right"
                        onClick={() => history.goBack()}
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
                  <Label>Title</Label>
                  <Input
                    required
                    type="text"
                    className="form-control"
                    name="Title"
                    placeholder="Enter Plan Title"
                    value={Title}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Plan Type *</Label>
                  <CustomInput
                    required
                    type="select"
                    name="banner_title"
                    value={banner_title}
                    onChange={this.changeHandler}
                  >
                    <option value="NA">--Select--</option>
                    <option value="1">One Year</option>
                    <option value="2">Two Year</option>
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Amount</Label>
                  <Input
                    required
                    type="text"
                    className="form-control"
                    name="Amount"
                    placeholder="Enter Plan Amount"
                    value={Amount}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Use regular expression to allow only numbers
                      const numericValue = value.replace(/\D/g, "");
                      this.setState({ Amount: numericValue });
                    }}
                    // onChange={this.changeHandler}
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
              </Row>
              <hr />
              <Row></Row>
              {/* {banner_title && banner_title !== "NA" ? ( */}
              <>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      checked={this.state.status == "Active"}
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      checked={this.state.status == "Deactive"}
                      value="Deactive"
                    />
                    <span style={{ marginRight: "3px" }}>Deactive</span>
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
              {/* ) : null} */}
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
