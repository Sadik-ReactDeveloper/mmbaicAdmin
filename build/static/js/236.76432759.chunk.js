(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[236],{2469:function(e,t,a){"use strict";a.r(t),a.d(t,"EditCategory",(function(){return E}));var n=a(47),s=a(11),l=a(12),o=a(14),i=a(13),r=a(1),c=a.n(r),d=a(820),u=a(818),m=a(819),p=a(196),f=a(823),g=a(841),h=a(848),b=a(840),v=a(836),y=(a(22),a(188)),O=a(63),N=a(839),j=a.n(N),E=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler1=function(e){l.setState({selectedFile1:e.target.files[0]}),l.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler2=function(e){l.setState({selectedFile2:e.target.files[0]}),l.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler3=function(e){l.setState({selectedFile3:e.target.files[0]}),l.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler4=function(e){l.setState({selectedFile4:e.target.files[0]}),l.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){var t,a;e.preventDefault();var n=l.props.match.params.id,s=JSON.parse(localStorage.getItem("userData")),o=new FormData;o.append("user_id",null===s||void 0===s||null===(t=s.Userinfo)||void 0===t?void 0:t.id),o.append("role",null===s||void 0===s||null===(a=s.Userinfo)||void 0===a?void 0:a.role),o.append("cat_id",n),o.append("category_name",l.state.category_name),o.append("status",l.state.status),o.append("edit_id",n),o.append("action","Edit"),y.a.post("/addcategory",o).then((function(e){(null===e||void 0===e?void 0:e.data.success)&&(j()("Success!","You Data iS been Submitted","success"),l.props.history.push("/app/mmbaic/category/categoryList"))})).catch((function(e){console.log(e)}))},l.state={category_name:"",type:"",feature:"",status:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:""},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e,t,a=this,n=this.props.match.params.id;console.log(n);var s=JSON.parse(localStorage.getItem("userData")),l=new FormData;l.append("user_id",null===s||void 0===s||null===(e=s.Userinfo)||void 0===e?void 0:e.id),l.append("role",null===s||void 0===s||null===(t=s.Userinfo)||void 0===t?void 0:t.role),l.append("cat_id",n),y.a.post("/getcategoryview",l).then((function(e){var t,n,s,l,o,i;console.log(null===(t=e.data.data)||void 0===t?void 0:t.category),a.setState({data:null===(n=e.data.data)||void 0===n?void 0:n.category}),a.setState({category_name:null===(s=e.data.data)||void 0===s||null===(l=s.category)||void 0===l?void 0:l.category,status:null===(o=e.data.data)||void 0===o||null===(i=o.category)||void 0===i?void 0:i.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(m.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit category")),c.a.createElement(m.a,null,c.a.createElement(O.b,{render:function(e){var t=e.history;return c.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/mmbaic/category/categoryList")}},"Back")}}))),c.a.createElement(f.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(h.a,null,c.a.createElement(b.a,null,"Category Name"),c.a.createElement(v.a,{type:"text",placeholder:"Category Name",name:"category_name",value:this.state.category_name,onChange:this.changeHandler}))),c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},c.a.createElement(b.a,{className:"mb-0 mx-1"},"Status"),c.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler1},c.a.createElement("input",{checked:"Active"===this.state.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),c.a.createElement("span",{style:{marginRight:"20px"}},"Active"),c.a.createElement("input",{checked:"Deactive"==this.state.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),c.a.createElement(u.a,null,c.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update"))))))}}]),a}(r.Component);t.default=E},836:function(e,t,a){"use strict";var n=a(6),s=a(8),l=a(18),o=a(19),i=a(1),r=a.n(i),c=a(2),d=a.n(c),u=a(5),m=a.n(u),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,o=e.bsSize,i=e.valid,c=e.invalid,d=e.tag,u=e.addon,g=e.plaintext,h=e.innerRef,b=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(l)>-1,y=new RegExp("\\D","g"),O=d||("select"===l||"textarea"===l?l:"input"),N="form-control";g?(N+="-plaintext",O=d||"input"):"file"===l?N+="-file":"range"===l?N+="-range":v&&(N=u?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=b.size,delete b.size);var j=Object(p.mapToCssModules)(m()(t,c&&"is-invalid",i&&"is-valid",!!o&&"form-control-"+o,N),a);return("input"===O||d&&"function"===typeof d)&&(b.type=l),b.children&&!g&&"select"!==l&&"string"===typeof O&&"select"!==O&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),r.a.createElement(O,Object(n.a)({},b,{ref:h,className:j,"aria-invalid":c}))},t}(r.a.Component);h.propTypes=g,h.defaultProps={type:"text"},t.a=h},840:function(e,t,a){"use strict";var n=a(6),s=a(8),l=a(1),o=a.n(l),i=a(2),r=a.n(i),c=a(5),d=a.n(c),u=a(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=r.a.oneOfType([r.a.number,r.a.string]),f=r.a.oneOfType([r.a.bool,r.a.string,r.a.number,r.a.shape({size:p,order:p,offset:p})]),g={children:r.a.node,hidden:r.a.bool,check:r.a.bool,size:r.a.string,for:r.a.string,tag:u.tagPropType,className:r.a.string,cssModule:r.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:r.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,l=e.hidden,i=e.widths,r=e.tag,c=e.check,p=e.size,f=e.for,g=Object(s.a)(e,m),h=[];i.forEach((function(t,n){var s=e[t];if(delete g[t],s||""===s){var l,o=!n;if(Object(u.isObject)(s)){var i,r=o?"-":"-"+t+"-";l=b(o,t,s.size),h.push(Object(u.mapToCssModules)(d()(((i={})[l]=s.size||""===s.size,i["order"+r+s.order]=s.order||0===s.order,i["offset"+r+s.offset]=s.offset||0===s.offset,i))),a)}else l=b(o,t,s),h.push(l)}}));var v=Object(u.mapToCssModules)(d()(t,!!l&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),a);return o.a.createElement(r,Object(n.a)({htmlFor:f},g,{className:v}))};v.propTypes=g,v.defaultProps=h,t.a=v},841:function(e,t,a){"use strict";var n=a(6),s=a(8),l=a(18),o=a(19),i=a(1),r=a.n(i),c=a(2),d=a.n(c),u=a(5),m=a.n(u),p=a(4),f=["className","cssModule","inline","tag","innerRef"],g={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,o=e.tag,i=e.innerRef,c=Object(s.a)(e,f),d=Object(p.mapToCssModules)(m()(t,!!l&&"form-inline"),a);return r.a.createElement(o,Object(n.a)({},c,{ref:i,className:d}))},t}(i.Component);h.propTypes=g,h.defaultProps={tag:"form"},t.a=h},848:function(e,t,a){"use strict";var n=a(6),s=a(8),l=a(1),o=a.n(l),i=a(2),r=a.n(i),c=a(5),d=a.n(c),u=a(4),m=["className","cssModule","row","disabled","check","inline","tag"],p={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:u.tagPropType,className:r.a.string,cssModule:r.a.object},f=function(e){var t=e.className,a=e.cssModule,l=e.row,i=e.disabled,r=e.check,c=e.inline,p=e.tag,f=Object(s.a)(e,m),g=Object(u.mapToCssModules)(d()(t,!!l&&"row",r?"form-check":"form-group",!(!r||!c)&&"form-check-inline",!(!r||!i)&&"disabled"),a);return"fieldset"===p&&(f.disabled=i),o.a.createElement(p,Object(n.a)({},f,{className:g}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f}}]);
//# sourceMappingURL=236.76432759.chunk.js.map