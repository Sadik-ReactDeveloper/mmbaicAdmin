(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[239],{2350:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(47),l=t(11),s=t(12),r=t(14),i=t(13),o=t(1),c=t.n(o),m=t(818),u=t(819),d=t(595),p=t(100),f=t(820),h=t(196),b=t(823),g=t(842),v=t(848),E=t(840),y=t(835),O=t(188),j=(t(22),t(63)),N=(t(839),function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=s.props.match.params.id;console.log(a),O.a.post("/admin/edit_order/".concat(a),s.state).then((function(e){console.log(e),s.props.history.push("/app/freshlist/order/all")})).catch((function(e){console.log(e.response.data)}))},s.state={name:"",email:"",mobile:"",delivery_zone:"",status:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;O.a.get("/user/getviewone/".concat(a)).then((function(a){console.log("getviewone",a.data.data),e.setState({name:a.data.data.name,email:a.data.data.email,mobile:a.data.data.mobile,delivery_zone:a.data.data.delivery_zone,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(m.a,null,c.a.createElement(u.a,{sm:"12"},c.a.createElement("div",null,c.a.createElement(d.a,{listTag:"div"},c.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),c.a.createElement(p.a,{href:"/app/freshlist/hubs/hubList",tag:"a"},"Customer List"),c.a.createElement(p.a,{active:!0},"Edit Customer List"))))),c.a.createElement(f.a,null,c.a.createElement(m.a,{className:"m-2"},c.a.createElement(u.a,null,c.a.createElement("h1",{className:"float-left"},"Edit Resource List")),c.a.createElement(u.a,null,c.a.createElement(j.b,{render:function(e){var a=e.history;return c.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/hubs/hubList")}},"Back")}}))),c.a.createElement(b.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(m.a,null,c.a.createElement(u.a,{lg:"5",md:"5",className:"ml-2"},c.a.createElement(v.a,null,c.a.createElement(E.a,null,"Hub Name"),c.a.createElement(y.a,{type:"text",placeholder:"Hub Name",name:"username",value:this.state.username,onChange:this.changeHandler}))),c.a.createElement(u.a,{lg:"5",md:"5",className:"ml-2"},c.a.createElement(v.a,null,c.a.createElement(E.a,null,"Email"),c.a.createElement(y.a,{type:"email",placeholder:"Enter Email",name:"email",value:this.state.email,onChange:this.changeHandler}))),c.a.createElement(u.a,{lg:"5",md:"5",className:"ml-2"},c.a.createElement(v.a,null,c.a.createElement(E.a,null,"Mobile"),c.a.createElement(y.a,{type:"number",placeholder:"Enter Mobile",name:"mobile",value:this.state.mobile,onChange:this.changeHandler}))),c.a.createElement(u.a,{lg:"5",md:"5",className:"ml-2"},c.a.createElement(v.a,null,c.a.createElement(E.a,null,"Delivery Zone"),c.a.createElement(y.a,{type:"text",placeholder:"Delivery Zone",name:"delivery_zone",value:this.state.delivery_zone,onChange:this.changeHandler}))),c.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},c.a.createElement(E.a,{className:"mb-1"},c.a.createElement("h4",null,"Status")),c.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler1},c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"true"}),c.a.createElement("span",{style:{marginRight:"20px"}},"Active"),c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"false"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),c.a.createElement(m.a,null,c.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-2 mb-1"},"Update")))))))}}]),t}(o.Component))},835:function(e,a,t){"use strict";var n=t(6),l=t(8),s=t(18),r=t(19),i=t(1),o=t.n(i),c=t(2),m=t.n(c),u=t(5),d=t.n(u),p=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,r=e.bsSize,i=e.valid,c=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,b=e.innerRef,g=Object(l.a)(e,f),v=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),y=m||("select"===s||"textarea"===s?s:"input"),O="form-control";h?(O+="-plaintext",y=m||"input"):"file"===s?O+="-file":"range"===s?O+="-range":v&&(O=u?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var j=Object(p.mapToCssModules)(d()(a,c&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,O),t);return("input"===y||m&&"function"===typeof m)&&(g.type=s),g.children&&!h&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(y,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":c}))},a}(o.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},840:function(e,a,t){"use strict";var n=t(6),l=t(8),s=t(1),r=t.n(s),i=t(2),o=t.n(i),c=t(5),m=t.n(c),u=t(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),h={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,s=e.hidden,i=e.widths,o=e.tag,c=e.check,p=e.size,f=e.for,h=Object(l.a)(e,d),b=[];i.forEach((function(a,n){var l=e[a];if(delete h[a],l||""===l){var s,r=!n;if(Object(u.isObject)(l)){var i,o=r?"-":"-"+a+"-";s=g(r,a,l.size),b.push(Object(u.mapToCssModules)(m()(((i={})[s]=l.size||""===l.size,i["order"+o+l.order]=l.order||0===l.order,i["offset"+o+l.offset]=l.offset||0===l.offset,i))),t)}else s=g(r,a,l),b.push(s)}}));var v=Object(u.mapToCssModules)(m()(a,!!s&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return r.a.createElement(o,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=b,a.a=v},842:function(e,a,t){"use strict";var n=t(6),l=t(8),s=t(18),r=t(19),i=t(1),o=t.n(i),c=t(2),m=t.n(c),u=t(5),d=t.n(u),p=t(4),f=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,r=e.tag,i=e.innerRef,c=Object(l.a)(e,f),m=Object(p.mapToCssModules)(d()(a,!!s&&"form-inline"),t);return o.a.createElement(r,Object(n.a)({},c,{ref:i,className:m}))},a}(i.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b},848:function(e,a,t){"use strict";var n=t(6),l=t(8),s=t(1),r=t.n(s),i=t(2),o=t.n(i),c=t(5),m=t.n(c),u=t(4),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.row,i=e.disabled,o=e.check,c=e.inline,p=e.tag,f=Object(l.a)(e,d),h=Object(u.mapToCssModules)(m()(a,!!s&&"row",o?"form-check":"form-group",!(!o||!c)&&"form-check-inline",!(!o||!i)&&"disabled"),t);return"fieldset"===p&&(f.disabled=i),r.a.createElement(p,Object(n.a)({},f,{className:h}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f}}]);
//# sourceMappingURL=239.e7d9f986.chunk.js.map