(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[221],{2455:function(e,t,a){"use strict";a.r(t),a.d(t,"AddCategory",(function(){return C}));var n=a(47),s=a(11),l=a(12),r=a(14),c=a(13),o=a(1),i=a.n(o),u=a(820),d=a(818),m=a(819),p=a(196),f=a(823),g=a(842),h=a(840),b=a(808),y=a(848),v=a(835),E=(a(22),a(188)),N=a(63),O=a(839),j=a.n(O),C=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler1=function(e){l.setState({selectedFile1:e.target.files[0]}),l.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler2=function(e){l.setState({selectedFile2:e.target.files[0]}),l.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler3=function(e){l.setState({selectedFile3:e.target.files[0]}),l.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler4=function(e){l.setState({selectedFile4:e.target.files[0]}),l.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){var t;e.preventDefault();var a=JSON.parse(localStorage.getItem("userData")),n=new FormData;n.append("user_id",null===a||void 0===a||null===(t=a.Userinfo)||void 0===t?void 0:t.id),n.append("type",l.state.type),n.append("category",l.state.category_name),n.append("parent_id",0),n.append("status",l.state.status),E.a.post("/addcategory",n).then((function(e){console.log(e),(null===e||void 0===e?void 0:e.data.success)&&(j()("Success!","You Data Submitted","Success"),l.setState({category_name:""}),l.props.history.push("/app/mmbaic/category/categoryList"))})).catch((function(e){console.log(e)}))},l.state={category_name:"",type:"",desc:"",status:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:""},l}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Category")),i.a.createElement(m.a,null,i.a.createElement(N.b,{render:function(e){var t=e.history;return i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.goBack()}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,{className:"mb-2"},i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(h.a,null,"Category Type"),i.a.createElement(b.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.type,onChange:this.changeHandler},i.a.createElement("option",null,"---Select---"),i.a.createElement("option",{value:"service"},"Services"),i.a.createElement("option",{value:"Caourses"},"Courses"))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(y.a,null,i.a.createElement(h.a,null,"Category Name"),i.a.createElement(v.a,{type:"text",placeholder:"Category Name",name:"category_name",value:this.state.category_name,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(y.a,null,i.a.createElement(h.a,null,"Category Image "),i.a.createElement(b.a,{type:"file",onChange:this.onChangeHandler1}))),i.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(h.a,{className:"mb-0"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler1},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),i.a.createElement(d.a,null,i.a.createElement(m.a,null,i.a.createElement("div",{className:"d-flex justify-content-start"},i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:""},"Add Category"))))))))}}]),a}(o.Component);t.default=C},835:function(e,t,a){"use strict";var n=a(6),s=a(8),l=a(18),r=a(19),c=a(1),o=a.n(c),i=a(2),u=a.n(i),d=a(5),m=a.n(d),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,r=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,g=e.plaintext,h=e.innerRef,b=Object(s.a)(e,f),y=["radio","checkbox"].indexOf(l)>-1,v=new RegExp("\\D","g"),E=u||("select"===l||"textarea"===l?l:"input"),N="form-control";g?(N+="-plaintext",E=u||"input"):"file"===l?N+="-file":"range"===l?N+="-range":y&&(N=d?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var O=Object(p.mapToCssModules)(m()(t,i&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,N),a);return("input"===E||u&&"function"===typeof u)&&(b.type=l),b.children&&!g&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(E,Object(n.a)({},b,{ref:h,className:O,"aria-invalid":i}))},t}(o.a.Component);h.propTypes=g,h.defaultProps={type:"text"},t.a=h},840:function(e,t,a){"use strict";var n=a(6),s=a(8),l=a(1),r=a.n(l),c=a(2),o=a.n(c),i=a(5),u=a.n(i),d=a(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),g={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,l=e.hidden,c=e.widths,o=e.tag,i=e.check,p=e.size,f=e.for,g=Object(s.a)(e,m),h=[];c.forEach((function(t,n){var s=e[t];if(delete g[t],s||""===s){var l,r=!n;if(Object(d.isObject)(s)){var c,o=r?"-":"-"+t+"-";l=b(r,t,s.size),h.push(Object(d.mapToCssModules)(u()(((c={})[l]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c))),a)}else l=b(r,t,s),h.push(l)}}));var y=Object(d.mapToCssModules)(u()(t,!!l&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),a);return r.a.createElement(o,Object(n.a)({htmlFor:f},g,{className:y}))};y.propTypes=g,y.defaultProps=h,t.a=y},842:function(e,t,a){"use strict";var n=a(6),s=a(8),l=a(18),r=a(19),c=a(1),o=a.n(c),i=a(2),u=a.n(i),d=a(5),m=a.n(d),p=a(4),f=["className","cssModule","inline","tag","innerRef"],g={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,r=e.tag,c=e.innerRef,i=Object(s.a)(e,f),u=Object(p.mapToCssModules)(m()(t,!!l&&"form-inline"),a);return o.a.createElement(r,Object(n.a)({},i,{ref:c,className:u}))},t}(c.Component);h.propTypes=g,h.defaultProps={tag:"form"},t.a=h},848:function(e,t,a){"use strict";var n=a(6),s=a(8),l=a(1),r=a.n(l),c=a(2),o=a.n(c),i=a(5),u=a.n(i),d=a(4),m=["className","cssModule","row","disabled","check","inline","tag"],p={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},f=function(e){var t=e.className,a=e.cssModule,l=e.row,c=e.disabled,o=e.check,i=e.inline,p=e.tag,f=Object(s.a)(e,m),g=Object(d.mapToCssModules)(u()(t,!!l&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),a);return"fieldset"===p&&(f.disabled=c),r.a.createElement(p,Object(n.a)({},f,{className:g}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f}}]);
//# sourceMappingURL=221.875d00f8.chunk.js.map