(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[105,223],{1369:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),l=a(14),o=a(13),s=a(1),i=a.n(s),c=a(855),m=a(818),u=a(819),d=a(820),p=a(821),h=a(822),f=a(823),g=a(901),E=a(873),v=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={editorState:g.EditorState.createEmpty()},e.onEditorStateChange=function(t){e.setState({editorState:t})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.editorState;return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(h.a,null,"Controlled")),i.a.createElement(f.a,null,i.a.createElement(E.Editor,{editorState:e,wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange})))}}]),a}(i.a.Component),b=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).addStar=function(){var t=e.props,a=t.editorState,n=t.onChange,r=g.Modifier.replaceText(a.getCurrentContent(),a.getSelection(),"\u2b50",a.getCurrentInlineStyle());n(g.EditorState.push(a,r,"insert-characters"))},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"custom-tool"},i.a.createElement("span",{"aria-label":"star",role:"img",onClick:this.addStar},"\u2b50"))}}]),a}(i.a.Component),y=function(){return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(h.a,null,"Custom Toolbar Option - Insert Star")),i.a.createElement(f.a,null,i.a.createElement(E.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",toolbarCustomButtons:[i.a.createElement(b,null)]})))},N=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).uploadImageCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);t(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(h.a,null,"Image Upload & Preview")),i.a.createElement(f.a,null,i.a.createElement(E.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}})))}}]),a}(i.a.Component),O=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={editorState:g.EditorState.createEmpty()},e.onEditorStateChange=function(t){e.setState({editorState:t})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.editorState;return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(h.a,null,"Inline Editor Only Visible When Focused")),i.a.createElement(f.a,null,i.a.createElement(E.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",defaultEditorState:e,toolbarOnFocus:!0,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})))}}]),a}(i.a.Component),C=(a(874),a(858),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:"Wysiwyg Editor",subTitle:"A Wysiwyg editor is build on top of ReactJS and DraftJS",link:"https://github.com/jpuri/react-draft-wysiwyg"}),i.a.createElement(m.a,null,i.a.createElement(u.a,{sm:"12"},i.a.createElement(v,null)),i.a.createElement(u.a,{sm:"12"},i.a.createElement(y,null)),i.a.createElement(u.a,{sm:"12"},i.a.createElement(N,null)),i.a.createElement(u.a,{sm:"12"},i.a.createElement(O,null))))}}]),a}(i.a.Component));t.default=C},2350:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(47),r=a(11),l=a(12),o=a(14),s=a(13),i=a(1),c=a.n(i),m=a(820),u=a(818),d=a(819),p=a(196),h=a(821),f=a(823),g=a(838),E=a(837),v=a(835),b=a(188),y=a(841),N=a.n(y),O=a(901),C=a(873),S=a(903),T=a.n(S),R=(a(1369),a(874),a(858),a(63)),w=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).onEditorStateChange=function(e){l.setState({editorState:e,description:T()(Object(O.convertToRaw)(e.getCurrentContent()))})},l.onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){var t,a,n,r;e.preventDefault();var o=(null===(t=l.props)||void 0===t||null===(a=t.match)||void 0===a?void 0:a.params).id,s=JSON.parse(localStorage.getItem("userData")),i=l.state,c=i.banner_title,m=i.Notice,u=i.Title,d=i.PageName,p=i.selectedFile,h=i.description,f=i.status,g=new FormData;g.append("user_id",null===s||void 0===s||null===(n=s.Userinfo)||void 0===n?void 0:n.id),g.append("role",null===s||void 0===s||null===(r=s.Userinfo)||void 0===r?void 0:r.role),g.append("edit_id",o),g.append("action","edit"),l.state.cmstype&&g.append("cms_type",l.state.cmstype),c&&g.append("type",c),g.append("IsActive",f),m&&g.append("notice",m),u&&g.append("title",u),d&&g.append("pagename",d),h&&g.append("description",h),null!==p&&g.append("images",p),b.a.post("/createcms",g).then((function(e){console.log(e),l.setState({Notice:""}),l.setState({banner_title:""}),l.setState({Title:""}),l.setState({PageName:""}),l.setState({selectedFile:null}),l.setState({description:null}),l.setState({editorState:O.EditorState.createEmpty()}),N()("Successful!","Content Updated Successfully!","success")})).catch((function(e){console.log(e),N()("Something went Wrong Try again")}))},l.state={banner_title:"",Notice:"",Title:"",PageName:"",cmstype:"",image:"",selectedFile:null,selectedName:"",status:"",description:"",editorState:O.EditorState.createEmpty()},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){(null===(e=this.props)||void 0===e||null===(t=e.match)||void 0===t?void 0:t.params).id;var e,t,a=JSON.parse(localStorage.getItem("SelectedCmsdata"));if(console.log(null===a||void 0===a?void 0:a.image),(null===a||void 0===a?void 0:a.image)&&this.setState({image:null===a||void 0===a?void 0:a.image}),this.setState({status:null===a||void 0===a?void 0:a.IsActive}),(null===a||void 0===a?void 0:a.cms_type)&&this.setState({cmstype:null===a||void 0===a?void 0:a.cms_type}),this.setState({banner_title:null===a||void 0===a?void 0:a.type}),null===a||void 0===a?void 0:a.description){var n=O.ContentState.createFromBlockArray(Object(O.convertFromHTML)(null===a||void 0===a?void 0:a.description)),r=O.EditorState.createWithContent(n);this.setState({description:null===a||void 0===a?void 0:a.description,editorState:r})}(null===a||void 0===a?void 0:a.title)&&this.setState({Title:null===a||void 0===a?void 0:a.title}),(null===a||void 0===a?void 0:a.notice)&&this.setState({Notice:null===a||void 0===a?void 0:a.notice}),(null===a||void 0===a?void 0:a.pagename)&&this.setState({PageName:null===a||void 0===a?void 0:a.pagename})}},{key:"render",value:function(){var e=this,t=this.state,a=t.banner_title,n=t.Notice,r=t.Title,l=t.PageName,o=t.editorState,s=t.status,i=t.cmstype;return c.a.createElement("div",null,c.a.createElement(m.a,null,c.a.createElement("div",{className:"container mt-1"},c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement("h2",null,"edit Your CMS")),c.a.createElement(d.a,null,c.a.createElement("div",{className:"d-flex float-right"},c.a.createElement(R.b,{render:function(e){var t=e.history;return c.a.createElement(p.a,{className:" btn btn-success float-right",onClick:function(){return t.push("/app/mmbaic/banner/headerCMS")}},"Back")}}))))),c.a.createElement(h.a,null),c.a.createElement(f.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(u.a,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Selected CMS Page :- ",c.a.createElement("strong",null,a),c.a.createElement("div",null,"Selected CMS Type :- ",c.a.createElement("strong",null,i))))),c.a.createElement("hr",null),c.a.createElement(u.a,null,a&&"Headernotice"==a?c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Notice"),c.a.createElement("textarea",{required:!0,className:"form-control",name:"Notice",placeholder:"Enter Notice",value:n,onChange:this.changeHandler}))):null,a&&"Header"==a||"Footer"==a?c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Title"),c.a.createElement(v.a,{required:!0,type:"text",className:"form-control",name:"Title",placeholder:"Enter Header Title",value:r,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Page Name"),c.a.createElement(v.a,{required:!0,type:"text",className:"form-control",name:"PageName",placeholder:"Enter PageName",value:l,onChange:this.changeHandler}))):null,a&&"Slider"==a?c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Title"),c.a.createElement(v.a,{required:!0,type:"text",className:"form-control",name:"Title",placeholder:"Enter Header Title",value:r,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Image"),c.a.createElement(v.a,{required:!0,type:"file",className:"form-control",onChange:this.onChangeHandler})),this.state.image&&c.a.createElement("img",{className:"mb-1",style:{borderRadius:"8px"},width:"180px",height:"160px",src:this.state.image}),c.a.createElement(d.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},c.a.createElement(E.a,null,"Enter Details"),c.a.createElement(C.Editor,{toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",editorState:o,onEditorStateChange:this.onEditorStateChange}))):null,a&&"Testimonials"==a||"Blogs"==a?c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Title"),c.a.createElement(v.a,{required:!0,type:"text",className:"form-control",name:"Title",placeholder:"Enter Title",value:r,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Image"),c.a.createElement(v.a,{required:!0,type:"file",className:"form-control",onChange:this.onChangeHandler})),this.state.image&&c.a.createElement("img",{className:"mb-1",style:{borderRadius:"8px"},width:"180px",height:"160px",src:this.state.image}),c.a.createElement(d.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},c.a.createElement(E.a,null,"Editor"),c.a.createElement(C.Editor,{toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",editorState:o,onEditorStateChange:this.onEditorStateChange}))):null,a&&"ContactUS"==a||a&&"HowItWorks"==a||a&&"Membership"==a||a&&"Opportunity"==a?c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Title"),c.a.createElement(v.a,{required:!0,type:"text",className:"form-control",name:"Title",placeholder:"Enter Header Title",value:r,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},c.a.createElement(E.a,null,"Editor"),c.a.createElement(C.Editor,{toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",editorState:o,onEditorStateChange:this.onEditorStateChange}))):null,a&&"Aboutus"==a?c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Title"),c.a.createElement(v.a,{required:!0,type:"text",className:"form-control",name:"Title",placeholder:"Enter Title",value:r,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Image"),c.a.createElement(v.a,{required:!0,type:"file",className:"form-control",onChange:this.onChangeHandler})),this.state.image&&c.a.createElement("img",{className:"mb-1",style:{borderRadius:"8px"},width:"180px",height:"160px",src:this.state.image}),c.a.createElement(d.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},c.a.createElement(E.a,null,"Editor"),c.a.createElement(C.Editor,{toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",editorState:o,onEditorStateChange:this.onEditorStateChange}))):null),a&&""!==a?c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,{className:"mb-1"},"Status"),c.a.createElement("div",{onChange:function(t){return e.changeHandler1(t)},className:"form-label-group"},c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",checked:"Active"==s,value:"Active"}),c.a.createElement("span",{style:{marginRight:"20px"}},"Active"),c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",checked:"Inactive"==s,value:"Inactive"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),c.a.createElement(u.a,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))):null))))}}]),a}(i.Component)},835:function(e,t,a){"use strict";var n=a(6),r=a(7),l=a(18),o=a(19),s=a(1),i=a.n(s),c=a(2),m=a.n(c),u=a(5),d=a.n(u),p=a(4),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,o=e.bsSize,s=e.valid,c=e.invalid,m=e.tag,u=e.addon,f=e.plaintext,g=e.innerRef,E=Object(r.a)(e,h),v=["radio","checkbox"].indexOf(l)>-1,b=new RegExp("\\D","g"),y=m||("select"===l||"textarea"===l?l:"input"),N="form-control";f?(N+="-plaintext",y=m||"input"):"file"===l?N+="-file":"range"===l?N+="-range":v&&(N=u?null:"form-check-input"),E.size&&b.test(E.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=E.size,delete E.size);var O=Object(p.mapToCssModules)(d()(t,c&&"is-invalid",s&&"is-valid",!!o&&"form-control-"+o,N),a);return("input"===y||m&&"function"===typeof m)&&(E.type=l),E.children&&!f&&"select"!==l&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete E.children),i.a.createElement(y,Object(n.a)({},E,{ref:g,className:O,"aria-invalid":c}))},t}(i.a.Component);g.propTypes=f,g.defaultProps={type:"text"},t.a=g},837:function(e,t,a){"use strict";var n=a(6),r=a(7),l=a(1),o=a.n(l),s=a(2),i=a.n(s),c=a(5),m=a.n(c),u=a(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=i.a.oneOfType([i.a.number,i.a.string]),h=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),f={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:i.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},E=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,l=e.hidden,s=e.widths,i=e.tag,c=e.check,p=e.size,h=e.for,f=Object(r.a)(e,d),g=[];s.forEach((function(t,n){var r=e[t];if(delete f[t],r||""===r){var l,o=!n;if(Object(u.isObject)(r)){var s,i=o?"-":"-"+t+"-";l=E(o,t,r.size),g.push(Object(u.mapToCssModules)(m()(((s={})[l]=r.size||""===r.size,s["order"+i+r.order]=r.order||0===r.order,s["offset"+i+r.offset]=r.offset||0===r.offset,s))),a)}else l=E(o,t,r),g.push(l)}}));var v=Object(u.mapToCssModules)(m()(t,!!l&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),a);return o.a.createElement(i,Object(n.a)({htmlFor:h},f,{className:v}))};v.propTypes=f,v.defaultProps=g,t.a=v},838:function(e,t,a){"use strict";var n=a(6),r=a(7),l=a(18),o=a(19),s=a(1),i=a.n(s),c=a(2),m=a.n(c),u=a(5),d=a.n(u),p=a(4),h=["className","cssModule","inline","tag","innerRef"],f={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,o=e.tag,s=e.innerRef,c=Object(r.a)(e,h),m=Object(p.mapToCssModules)(d()(t,!!l&&"form-inline"),a);return i.a.createElement(o,Object(n.a)({},c,{ref:s,className:m}))},t}(s.Component);g.propTypes=f,g.defaultProps={tag:"form"},t.a=g},855:function(e,t,a){"use strict";var n=a(11),r=a(12),l=a(14),o=a(13),s=a(1),i=a.n(s),c=a(818),m=a(819),u=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(c.a,{className:"mb-2"},i.a.createElement(m.a,{sm:"12",className:"ml-50"},i.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?i.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):i.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(i.a.Component);t.a=u},858:function(e,t,a){},903:function(e,t,a){e.exports=function(){"use strict";function e(e,t){if(e)for(var a in e)({}).hasOwnProperty.call(e,a)&&t(a,e[a])}var t={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function a(e){return e&&t[e]}function n(t){var a="";return e(t,(function(e,t){t&&(a+="".concat(e,":").concat(t,";"))})),a}function r(e,t){var a={};return e.COLOR[t]&&(a.COLOR=e.COLOR[t]),e.BGCOLOR[t]&&(a.BGCOLOR=e.BGCOLOR[t]),e.FONTSIZE[t]&&(a.FONTSIZE=e.FONTSIZE[t]),e.FONTFAMILY[t]&&(a.FONTFAMILY=e.FONTFAMILY[t]),e.UNDERLINE[t]&&(a.UNDERLINE=!0),e.ITALIC[t]&&(a.ITALIC=!0),e.BOLD[t]&&(a.BOLD=!0),e.STRIKETHROUGH[t]&&(a.STRIKETHROUGH=!0),e.CODE[t]&&(a.CODE=!0),e.SUBSCRIPT[t]&&(a.SUBSCRIPT=!0),e.SUPERSCRIPT[t]&&(a.SUPERSCRIPT=!0),a}function l(e,t,a){var n=!0;return a>0&&a<e.length?t.forEach((function(t){n=n&&e[t][a]===e[t][a-1]})):n=!1,n}function o(e,t,a,n){var r=e[t];if("function"===typeof n){var l=n(r,a);if(l)return l}if("MENTION"===r.type)return'<a href="'.concat(r.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(r.data.value,'">').concat(a,"</a>");if("LINK"===r.type){var o=r.data.targetOption||"_self";return'<a href="'.concat(r.data.url,'" target="').concat(o,'">').concat(a,"</a>")}if("IMAGE"===r.type){var s=r.data.alignment;return s&&s.length?'<div style="text-align:'.concat(s,';"><img src="').concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/></div>'):'<img src="'.concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/>')}return"EMBEDDED_LINK"===r.type?'<iframe width="'.concat(r.data.width,'" height="').concat(r.data.height,'" src="').concat(r.data.src,'" frameBorder="0"></iframe>'):a}function s(e,t,a,n){var o=[],s=Array.from(e.text);if(s.length>0)for(var i,c=function(e){var t=e.text,a=e.inlineStyleRanges,n={BOLD:new Array(t.length),ITALIC:new Array(t.length),UNDERLINE:new Array(t.length),STRIKETHROUGH:new Array(t.length),CODE:new Array(t.length),SUPERSCRIPT:new Array(t.length),SUBSCRIPT:new Array(t.length),COLOR:new Array(t.length),BGCOLOR:new Array(t.length),FONTSIZE:new Array(t.length),FONTFAMILY:new Array(t.length),length:t.length};return a&&a.length>0&&a.forEach((function(e){for(var t=e.offset,a=t+e.length,r=t;r<a;r+=1)0===e.style.indexOf("color-")?n.COLOR[r]=e.style.substring(6):0===e.style.indexOf("bgcolor-")?n.BGCOLOR[r]=e.style.substring(8):0===e.style.indexOf("fontsize-")?n.FONTSIZE[r]=e.style.substring(9):0===e.style.indexOf("fontfamily-")?n.FONTFAMILY[r]=e.style.substring(11):n[e.style]&&(n[e.style][r]=!0)})),n}(e),m=a;m<n;m+=1)m!==a&&l(c,t,m)?(i.text.push(s[m]),i.end=m+1):(i={styles:r(c,m),text:[s[m]],start:m,end:m+1},o.push(i));return o}function i(t,a){var n=s(t,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],a.start,a.end),r="";return n.forEach((function(t){r+=function(t){var a=t.styles,n=function(e){return e&&e.length>0?e.map((function(e){switch(e){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return e}})).join(""):""}(t.text);return e(a,(function(e,t){n=function(e,t){return"BOLD"===e?"<strong>".concat(t,"</strong>"):"ITALIC"===e?"<em>".concat(t,"</em>"):"UNDERLINE"===e?"<ins>".concat(t,"</ins>"):"STRIKETHROUGH"===e?"<del>".concat(t,"</del>"):"CODE"===e?"<code>".concat(t,"</code>"):"SUPERSCRIPT"===e?"<sup>".concat(t,"</sup>"):"SUBSCRIPT"===e?"<sub>".concat(t,"</sub>"):t}(e,n)})),n}(t)})),r=function(e,t){if(e&&(e.COLOR||e.BGCOLOR||e.FONTSIZE||e.FONTFAMILY)){var a='style="';return e.COLOR&&(a+="color: ".concat(e.COLOR,";")),e.BGCOLOR&&(a+="background-color: ".concat(e.BGCOLOR,";")),e.FONTSIZE&&(a+="font-size: ".concat(e.FONTSIZE).concat(/^\d+$/.test(e.FONTSIZE)?"px":"",";")),e.FONTFAMILY&&(a+="font-family: ".concat(e.FONTFAMILY,";")),"<span ".concat(a+='"',">").concat(t,"</span>")}return t}(a.styles,r)}function c(e,t,a,n){var r=[],l=function(e,t){var a=[],n=0,r=e.entityRanges.map((function(e){return{offset:e.offset,length:e.length,key:e.key,type:"ENTITY"}}));return(r=(r=r.concat(function(e,t){var a=[];if(t)for(var n=0,r=0,l=e,o=t.trigger||"#",s=t.separator||" ";l.length>0&&r>=0;)if(l[0]===o?(r=0,n=0,l=l.substr(o.length)):(r=l.indexOf(s+o))>=0&&(l=l.substr(r+(s+o).length),n+=r+s.length),r>=0){var i=l.indexOf(s)>=0?l.indexOf(s):l.length,c=l.substr(0,i);c&&c.length>0&&a.push({offset:n,length:c.length+o.length,type:"HASHTAG"}),n+=o.length}return a}(e.text,t))).sort((function(e,t){return e.offset-t.offset}))).forEach((function(e){e.offset>n&&a.push({start:n,end:e.offset}),a.push({start:e.offset,end:e.offset+e.length,entityKey:e.key,type:e.type}),n=e.offset+e.length})),n<e.text.length&&a.push({start:n,end:e.text.length}),a}(e,a);return l.forEach((function(a,c){var m=function(e,t,a,n){var r=[];s(e,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],a.start,a.end).forEach((function(t){r.push(i(e,t))}));var l=r.join("");return"ENTITY"===a.type?void 0!==a.entityKey&&null!==a.entityKey&&(l=o(t,a.entityKey,l,n)):"HASHTAG"===a.type&&(l='<a href="'.concat(l,'" class="wysiwyg-hashtag">').concat(l,"</a>")),l}(e,t,a,n);0===c&&(m=function(e){if(e){for(var t=e,a=0;a<t.length&&" "===e[a];a+=1)t=t.replace(" ","&nbsp;");return t}return e}(m)),c===l.length-1&&(m=function(e){if(e){for(var t=e,a=t.length-1;a>=0&&" "===t[a];a-=1)t="".concat(t.substring(0,a),"&nbsp;").concat(t.substring(a+1));return t}return e}(m)),r.push(m)})),r.join("")}function m(e,t,r,l,o){var s,i=[],u=[];return e.forEach((function(e){var d=!1;if(s?s.type!==e.type?(i.push("</".concat(a(s.type),">\n")),i.push("<".concat(a(e.type),">\n"))):s.depth===e.depth?u&&u.length>0&&(i.push(m(u,t,r,l,o)),u=[]):(d=!0,u.push(e)):i.push("<".concat(a(e.type),">\n")),!d){i.push("<li");var p=n(e.data);p&&i.push(' style="'.concat(p,'"')),l&&i.push(' dir = "auto"'),i.push(">"),i.push(c(e,t,r,o)),i.push("</li>\n"),s=e}})),u&&u.length>0&&i.push(m(u,t,r,l,o)),i.push("</".concat(a(s.type),">\n")),i.join("")}return function(e,t,r,l){var s=[];if(e){var i=e.blocks,u=e.entityMap;if(i&&i.length>0){var d=[];if(i.forEach((function(e){if("unordered-list-item"===(h=e.type)||"ordered-list-item"===h)d.push(e);else{if(d.length>0){var i=m(d,u,t,l);s.push(i),d=[]}var p=function(e,t,r,l,s){var i=[];if(function(e){return e.entityRanges.length>0&&(void 0===(t=e.text)||null===t||0===t.length||0===t.trim().length||"atomic"===e.type);var t}(e))i.push(o(t,e.entityRanges[0].key,void 0,s));else{var m=a(e.type);if(m){i.push("<".concat(m));var u=n(e.data);u&&i.push(' style="'.concat(u,'"')),l&&i.push(' dir = "auto"'),i.push(">"),i.push(c(e,t,r,s)),i.push("</".concat(m,">"))}}return i.push("\n"),i.join("")}(e,u,t,r,l);s.push(p)}var h})),d.length>0){var p=m(d,u,t,r,l);s.push(p),d=[]}}}return s.join("")}}()}}]);
//# sourceMappingURL=105.dd1d8b4f.chunk.js.map