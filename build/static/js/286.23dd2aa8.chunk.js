(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[286],{2352:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a(842),r=a(47),l=a(11),s=a(12),c=a(14),o=a(13),i=a(1),m=a.n(i),u=a(820),d=a(818),p=a(819),h=a(196),g=a(821),E=a(823),b=a(838),f=a(837),v=a(835),N=a(188),y=a(841),C=a.n(y),S=a(901),H=a(873),D=a(903),x=a.n(D),j=(a(874),a(858),a(63)),O=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onEditorStateChange=function(e){s.setState({editorState:e,description:x()(Object(S.convertToRaw)(e.getCurrentContent()))})},s.onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler=function(e){s.setState({selectedFile:e.target.files}),s.setState({selectedName:e.target.files.name}),console.log(e.target.files)},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(r.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("banner_title",s.state.banner_title),t.append("bannertype",s.state.bannertype),t.append("status",s.state.status);var a,r=Object(n.a)(s.state.selectedFile);try{for(r.s();!(a=r.n()).done;){var l=a.value;null!==s.state.selectedFile&&t.append("banner_img",l,l.name)}}catch(p){r.e(p)}finally{r.f()}var c,o=Object(n.a)(t.values());try{for(o.s();!(c=o.n()).done;){var i=c.value;console.log(i)}}catch(p){o.e(p)}finally{o.f()}var m,u=Object(n.a)(t.keys());try{for(u.s();!(m=u.n()).done;){var d=m.value;console.log(d)}}catch(p){u.e(p)}finally{u.f()}N.a.post("/addbanner",t).then((function(e){console.log(e),C()("Successful!","You clicked the button!","success"),s.props.history.push("/app/freshlist/banner/bannerList")})).catch((function(e){console.log(e)}))},s.state={banner_title:"",Notice:"",Title:"",shortDescription:"",CourseDescription:"",PageName:"",selectedFile:void 0,selectedName:"",status:"",description:"",editorState:S.EditorState.createEmpty()},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=(t.banner_title,t.Notice,t.Title),n=(t.PageName,t.editorState),r=t.shortDescription,l=t.CourseDescription;return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement("div",{className:"container mt-1"},m.a.createElement(d.a,null,m.a.createElement(p.a,null,m.a.createElement("h2",null,"Add Courses")),m.a.createElement(p.a,null,m.a.createElement("div",{className:"d-flex float-right"},m.a.createElement(j.b,{render:function(e){var t=e.history;return m.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/mmbaic/courseslist")}},"Back")}}))))),m.a.createElement(g.a,null),m.a.createElement(E.a,null,m.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(d.a,null,m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(f.a,null,"Course Title*"),m.a.createElement("textarea",{required:!0,type:"text",className:"form-control",name:"Title",placeholder:"Enter Header Title",value:a,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(f.a,null,"Short Description*"),m.a.createElement("textarea",{required:!0,type:"text",className:"form-control",name:"shortDescription",placeholder:"Enter Header short Description",value:r,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(f.a,null,"Course Description*"),m.a.createElement(v.a,{required:!0,type:"text",className:"form-control",name:"CourseDescription",placeholder:"Enter Header short Description",value:l,onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(f.a,null,"Image"),m.a.createElement(v.a,{required:!0,type:"file",className:"form-control",onChange:this.onChangeHandler})),m.a.createElement(p.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},m.a.createElement(f.a,null,"Enter Details"),m.a.createElement(H.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:n,onEditorStateChange:this.onEditorStateChange}))),m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(f.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),m.a.createElement(d.a,null,m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(i.Component)},858:function(e,t,a){}}]);
//# sourceMappingURL=286.23dd2aa8.chunk.js.map