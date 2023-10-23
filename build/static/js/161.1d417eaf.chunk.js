(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[161],{1139:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var i=[{title:"Dashboard",TabName:[{title:"Dashboard",permission:["View"]}]},{title:"Accounts",TabName:[{title:"Create Account",permission:["View","Create","Edit","Delete"]},{title:"User List",permission:["View","Create","Edit","Delete"]},{title:"Create Role",permission:["View","Create","Edit","Delete"]},{title:"Role List",permission:["View","Create","Edit","Delete"]}]},{title:"Product",TabName:[{title:"Product List",permission:["View","Create","Edit","Delete"]},{title:"Add Product",permission:["View","Create","Edit","Delete"]},{title:"Type",permission:["View","Create","Edit","Delete"]},{title:"Assign To Client",permission:["View","Create","Edit","Delete"]},{title:"Assigned List",permission:["View","Create","Edit","Delete"]},{title:"Rate Master",permission:["View","Create","Edit","Delete"]},{title:"Inventory",permission:["View","Create","Edit","Delete"]}]},{title:"Brand",TabName:[{title:"Brand List",permission:["View","Create","Edit","Delete"]},{title:"Category List",permission:["View","Create","Edit","Delete"]}]},{title:"Transaction",TabName:[{title:"Place Order",permission:["View","Create","Edit","Delete"]},{title:"Order Raise List",permission:["View","Create","Edit","Delete"]},{title:"Order Received List",permission:["View","Create","Edit","Delete"]},{title:"Completed Order List",permission:["View","Create","Edit","Delete"]}]},{title:"BILLINGS",TabName:[{title:"Purchase Order",permission:["View","Create","Edit","Delete"]},{title:"Bills",permission:["View","Create","Edit","Delete"]},{title:"invoice Generator",permission:["View","Create","Edit","Delete"]},{title:"invoice Re-Generator",permission:["View","Create","Edit","Delete"]},{title:"Payment Status",permission:["View","Create","Edit","Delete"]},{title:"Payment completed",permission:["View","Create","Edit","Delete"]}]},{title:"Budget",TabName:[{title:"Budget List",permission:["View","Create","Edit","Delete"]},{title:"Budget Assignment",permission:["View","Create","Edit","Delete"]}]},{title:"Reports",TabName:[{title:"Date Wise",permission:["View","Create","Edit","Delete"]},{title:"Client Wise",permission:["View","Create","Edit","Delete"]},{title:"Branch Wise",permission:["View","Create","Edit","Delete"]},{title:"Product Wise",permission:["View","Create","Edit","Delete"]}]},{title:"Unique Code",TabName:[{title:"Unique Code",permission:["View","Create","Edit","Delete"]}]},{title:"Logs",TabName:[{title:"Logs",permission:["View","Create","Edit","Delete"]}]}]},1369:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var i=[{pagename:"Dashboard",permission:["parentPermit","View"]},{pagename:"Accounts",permission:["parentPermit"]},{pagename:"Create Account",permission:["View","Create","Edit"]},{pagename:"User List",permission:["View","Edit"]},{pagename:"Client Account",permission:["View","Create","Delete"]},{pagename:"Accountant Account",permission:["View","Create"]},{pagename:"Create Role",permission:["View","Create"]},{pagename:"Role List",permission:["View"]},{pagename:"Product",permission:["parentPermit"]},{pagename:"Product List",permission:["View","Create"]},{pagename:"Add Product",permission:["View","Create"]},{pagename:"Type",permission:["View","Create"]},{pagename:"Assign To Client",permission:["View"]},{pagename:"Rate Master",permission:["View"]}]},2410:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var i=a(3),n=a(31),l=a(40),s=a(1),r=a.n(s),o=a(818),c=a(819),m=a(820),d=a(195),u=a(836),p=a(835),f=a(833),v=a(1139),g=(a(39),a(186)),b=a(839),E=a.n(b),h=a(1369),y=a(62);function N(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],b=t[1],N=Object(s.useState)(""),C=Object(l.a)(N,2),w=C[0],O=C[1],j=Object(s.useState)([]),V=Object(l.a)(j,2),x=V[0],D=V[1],R=Object(s.useState)(""),T=Object(l.a)(R,2),P=(T[0],T[1]),k=Object(s.useState)(!1),L=Object(l.a)(k,2),z=(L[0],L[1]),S=Object(s.useState)({}),M=Object(l.a)(S,2),A=(M[0],M[1]),B=Object(s.useState)(Object(n.a)(h.a)),F=Object(l.a)(B,2),U=F[0],I=F[1],_=Object(y.h)(),J=Object(y.g)();Object(s.useEffect)((function(){var e=new FormData;e.append("role_name",_.id),g.a.post("/editroleview",e).then((function(e){var t,a,i,n,l,s,r,o,c,m,d;D(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.permissioninfo),console.log("origional permission",null===e||void 0===e||null===(i=e.data)||void 0===i||null===(n=i.data)||void 0===n?void 0:n.permissioninfo),O(null===e||void 0===e||null===(l=e.data)||void 0===l||null===(s=l.data)||void 0===s||null===(r=s.roleinfo)||void 0===r?void 0:r.role_name),b(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(c=o.data)||void 0===c||null===(m=c.roleinfo)||void 0===m?void 0:m.description),A(null===e||void 0===e||null===(d=e.data)||void 0===d?void 0:d.data)})).catch((function(e){console.log(e)}))}),[]);var W=function(e,t,a,l,s){var r=Object(n.a)(x),o=r.findIndex((function(e){return e.pagename===l}));t?-1!==o?r[o].permission.includes(a)||r[o].permission.push(a):r.push({pagename:l,permission:[a]}):-1!==o&&(r[o].permission=r[o].permission.filter((function(e){return e!==a})),0===r[o].permission.length&&r.splice(o,1)),D(r);var c=U.map((function(e){return e.pagename===l?Object(i.a)(Object(i.a)({},e),{},{permission:r.filter((function(e){return e.pagename===l})).flatMap((function(e){return e.permission}))}):e}));I(c)};return r.a.createElement(r.a.Fragment,null,x&&x.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{className:""},r.a.createElement(c.a,{xl:12},r.a.createElement(m.a,null,r.a.createElement(o.a,null,r.a.createElement(c.a,{className:"m-1"},r.a.createElement("h3",{className:"py-2"},"Update Role")),r.a.createElement(c.a,{className:"m-1"},r.a.createElement(d.a,{className:" btn btn-danger float-right ",onClick:function(){return J.push("/app/Trupee/account/RoleList")}},"Back"))),r.a.createElement("div",{className:"container"}),r.a.createElement(u.a,{onSubmit:function(e){var t,i;e.preventDefault();var n=JSON.parse(localStorage.getItem("userData"));console.log(null===n||void 0===n||null===(t=n.Userinfo)||void 0===t?void 0:t.id);var l=new FormData;l.set("user_id",null===n||void 0===n||null===(i=n.Userinfo)||void 0===i?void 0:i.id),l.set("role_name",w),l.set("description",a),l.set("selectedarray",JSON.stringify(x)),g.a.post("/editrolesubmit",l).then((function(e){console.log(e),E()("Success","Role Updated");document.getElementsByName("check")})).catch((function(e){console.log(e)}))}},r.a.createElement("div",{className:"container mt-2"},r.a.createElement(o.a,{className:"mb-3 container"},r.a.createElement(c.a,null,r.a.createElement(p.a,null,"Existing Role *"),r.a.createElement(f.a,{disabled:!0,value:w,onChange:function(e){return O(e.target.value)},type:"text",placeholder:"Enter Role",className:"form-control"})),r.a.createElement(c.a,null,r.a.createElement(p.a,null,"Existing Role Description * "),r.a.createElement(f.a,{value:a,onChange:function(e){return b(e.target.value)},type:"text",placeholder:"Enter Role Desc.."})))),r.a.createElement("section",{className:"mt-5 container"},r.a.createElement(o.a,{className:"gy-0 container"},v.a&&(null===v.a||void 0===v.a?void 0:v.a.map((function(e,t){var a;return r.a.createElement(c.a,{key:t,style:{borderRadius:"12px",height:"".concat((null===x||void 0===x?void 0:x.some((function(t){return(null===t||void 0===t?void 0:t.pagename)===(null===e||void 0===e?void 0:e.title)&&(null===t||void 0===t?void 0:t.permission.includes("parentPermit"))})))?"340px":"40px")},className:"customcol gy-0 mb-2 ",lg:"12",md:"12",sm:"12"},r.a.createElement(o.a,{style:{lineHeight:"44px",borderRadius:"6px",background:"#f7f7f8"},className:"roleheading"},r.a.createElement(c.a,{className:"gy-2",lg:"4",sm:"4",md:"4"},r.a.createElement("div",{className:"align-item-center"},r.a.createElement("input",{checked:null===x||void 0===x?void 0:x.some((function(t){var a;return(null===t||void 0===t?void 0:t.pagename)===(null===e||void 0===e?void 0:e.title)&&(null===t||void 0===t||null===(a=t.permission)||void 0===a?void 0:a.includes("parentPermit"))})),className:"mt-1",name:"check",id:"head_".concat(null===e||void 0===e?void 0:e.title),onClick:function(a){!function(e,t){z(e),P(t)}(a.target.checked,t),W(a.target.value,a.target.checked,"parentPermit",null===e||void 0===e?void 0:e.title)},style:{height:"19px",width:"26px"},type:"checkbox"}),r.a.createElement("span",{className:"mx-3 gy-0"},null===e||void 0===e?void 0:e.title))),r.a.createElement(c.a,{className:"gy-2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("span",{className:"mx-3"}," View"))),r.a.createElement(c.a,{className:"gy-2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("span",{className:"mx-3"}," Create"))),r.a.createElement(c.a,{className:"gy-2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("span",{className:"mx-3"}," Edit"))),r.a.createElement(c.a,{className:"gy-2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("span",{className:"mx-3"}," Delete")))),(null===x||void 0===x?void 0:x.some((function(t){return t.pagename===(null===e||void 0===e?void 0:e.title)&&t.permission.includes("parentPermit")})))?r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"gy-2 mt-2"},null===e||void 0===e||null===(a=e.TabName)||void 0===a?void 0:a.map((function(e,t){var a;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{key:t,className:""},r.a.createElement(c.a,{lg:"4",sm:"4",md:"4"},r.a.createElement("h6",{className:"mt-1"}," ",null===e||void 0===e?void 0:e.title)),null===e||void 0===e||null===(a=e.permission)||void 0===a?void 0:a.map((function(t,a){var i=null===x||void 0===x?void 0:x.some((function(a){return a.pagename===e.title&&a.permission.includes(t)}));return r.a.createElement(c.a,{key:a,lg:"2",md:"2",sm:"2"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("input",{checked:i,name:"check",id:"item_".concat(t),onClick:function(a){W(a.target.value,a.target.checked,t,e.title)},style:{height:"19px",width:"26px"},type:"checkbox"})))}))))})))))):null)})))),r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"d-flex justify-content-center mb-2"},r.a.createElement(d.a,{type:"submit",style:{cursor:"pointer"},color:"primary"},"Update Permission")))))))))):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"d-flex justify-content-center align-item-center mt-5"},r.a.createElement("h2",null,"Loading..."))))))}},833:function(e,t,a){"use strict";var i=a(6),n=a(7),l=a(17),s=a(19),r=a(1),o=a.n(r),c=a(2),m=a.n(c),d=a(5),u=a.n(d),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],v={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,s=e.bsSize,r=e.valid,c=e.invalid,m=e.tag,d=e.addon,v=e.plaintext,g=e.innerRef,b=Object(n.a)(e,f),E=["radio","checkbox"].indexOf(l)>-1,h=new RegExp("\\D","g"),y=m||("select"===l||"textarea"===l?l:"input"),N="form-control";v?(N+="-plaintext",y=m||"input"):"file"===l?N+="-file":"range"===l?N+="-range":E&&(N=d?null:"form-check-input"),b.size&&h.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=b.size,delete b.size);var C=Object(p.mapToCssModules)(u()(t,c&&"is-invalid",r&&"is-valid",!!s&&"form-control-"+s,N),a);return("input"===y||m&&"function"===typeof m)&&(b.type=l),b.children&&!v&&"select"!==l&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(y,Object(i.a)({},b,{ref:g,className:C,"aria-invalid":c}))},t}(o.a.Component);g.propTypes=v,g.defaultProps={type:"text"},t.a=g},835:function(e,t,a){"use strict";var i=a(6),n=a(7),l=a(1),s=a.n(l),r=a(2),o=a.n(r),c=a(5),m=a.n(c),d=a(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),v={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,l=e.hidden,r=e.widths,o=e.tag,c=e.check,p=e.size,f=e.for,v=Object(n.a)(e,u),g=[];r.forEach((function(t,i){var n=e[t];if(delete v[t],n||""===n){var l,s=!i;if(Object(d.isObject)(n)){var r,o=s?"-":"-"+t+"-";l=b(s,t,n.size),g.push(Object(d.mapToCssModules)(m()(((r={})[l]=n.size||""===n.size,r["order"+o+n.order]=n.order||0===n.order,r["offset"+o+n.offset]=n.offset||0===n.offset,r))),a)}else l=b(s,t,n),g.push(l)}}));var E=Object(d.mapToCssModules)(m()(t,!!l&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),a);return s.a.createElement(o,Object(i.a)({htmlFor:f},v,{className:E}))};E.propTypes=v,E.defaultProps=g,t.a=E},836:function(e,t,a){"use strict";var i=a(6),n=a(7),l=a(17),s=a(19),r=a(1),o=a.n(r),c=a(2),m=a.n(c),d=a(5),u=a.n(d),p=a(4),f=["className","cssModule","inline","tag","innerRef"],v={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,s=e.tag,r=e.innerRef,c=Object(n.a)(e,f),m=Object(p.mapToCssModules)(u()(t,!!l&&"form-inline"),a);return o.a.createElement(s,Object(i.a)({},c,{ref:r,className:m}))},t}(r.Component);g.propTypes=v,g.defaultProps={tag:"form"},t.a=g}}]);
//# sourceMappingURL=161.1d417eaf.chunk.js.map