(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[199],{1250:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var a=[{title:"Dashboard",TabName:[{title:"Dashboard",permission:["View"]}]},{title:"Program CRM",TabName:[{title:"Program CRM List",permission:["View","Create","Edit","Delete"]}]},{title:"Affiliated CRM",TabName:[{title:"Affiliated CRM List",permission:["View","Create","Edit","Delete"]}]},{title:"Sales CRM",TabName:[{title:"Sales CRM List",permission:["View","Create","Edit","Delete"]}]},{title:"Accounts",TabName:[{title:"Create Account",permission:["View","Create","Edit","Delete"]},{title:"User List",permission:["View","Create","Edit","Delete"]},{title:"Create Role",permission:["View","Create","Edit","Delete"]},{title:"Role List",permission:["View","Create","Edit","Delete"]}]},{title:"Memberships",TabName:[{title:"Member list",permission:["View","Create","Edit","Delete"]},{title:"Affiliated Member List",permission:["View","Create","Edit","Delete"]},{title:"Franchisee List",permission:["View","Create","Edit","Delete"]}]},{title:"Franchisee",TabName:[{title:"ALL MEMBERSHIP",permission:["View","Create","Edit","Delete"]},{title:"Affiliated list",permission:["View","Create","Edit","Delete"]},{title:"Billings",permission:["View","Create","Edit","Delete"]},{title:"Reports",permission:["View","Create","Edit","Delete"]},{title:"Logs",permission:["View","Create","Edit","Delete"]}]},{title:"Products",TabName:[{title:"Add Category",permission:["View","Create","Edit","Delete"]},{title:"Add Product",permission:["View","Create","Edit","Delete"]},{title:"Product List",permission:["View","Create","Edit","Delete"]},{title:"Assign Product List",permission:["View","Create","Edit","Delete"]},{title:"Deleted Product List",permission:["View","Create","Edit","Delete"]}]},{title:"Operations",TabName:[{title:"Operation Product List",permission:["View","Create","Edit","Delete"]},{title:"Sold Product List",permission:["View","Create","Edit","Delete"]},{title:"Order Dispatch",permission:["View","Create","Edit","Delete"]},{title:"Inventory",permission:["View","Create","Edit","Delete"]}]},{title:"Billing",TabName:[{title:"All Membership List",permission:["View","Create","Edit","Delete"]},{title:"Paid Membership List",permission:["View","Create","Edit","Delete"]},{title:"Membership Receipt List",permission:["View","Create","Edit","Delete"]},{title:"Refferal Payment List",permission:["View","Create","Edit","Delete"]},{title:"Affiliated Payment List",permission:["View","Create","Edit","Delete"]},{title:"All Transaction",permission:["View","Create","Edit","Delete"]}]},{title:"REFERRAL USER",TabName:[{title:"All Referral List",permission:["View","Create","Edit","Delete"]},{title:"Wallet",permission:["View","Create","Edit","Delete"]},{title:"Total Balance",permission:["View","Create","Edit","Delete"]},{title:"Payment Transaction",permission:["View","Create","Edit","Delete"]}]},{title:"Affiliated",TabName:[{title:"All Affiliated List",permission:["View","Create","Edit","Delete"]},{title:"Affiliated Wallet",permission:["View","Create","Edit","Delete"]},{title:"Total Balance",permission:["View","Create","Edit","Delete"]},{title:"Commsion Request",permission:["View","Create","Edit","Delete"]},{title:"Payment Transaction",permission:["View","Create","Edit","Delete"]}]},{title:"Certification",TabName:[{title:"Membership Cerfiticate",permission:["View","Create","Edit","Delete"]},{title:"Course Certificate",permission:["View","Create","Edit","Delete"]},{title:"Progaram Certificate",permission:["View","Create","Edit","Delete"]},{title:"Business Coordinator certificate",permission:["View","Create","Edit","Delete"]}]},{title:"CMS Management",TabName:[{title:"CMS Management",permission:["View","Create","Edit","Delete"]},{title:"Category List",permission:["View","Create","Edit","Delete"]},{title:"Category",permission:["View","Create","Edit","Delete"]},{title:"MemberPlan list",permission:["View","Create","Edit","Delete"]},{title:"Services",permission:["View","Create","Edit","Delete"]},{title:"Courses",permission:["View","Create","Edit","Delete"]},{title:"Promotional List",permission:["View","Create","Edit","Delete"]}]},{title:"All Reports",TabName:[{title:"Filtering Tab",permission:["View","Create","Edit","Delete"]},{title:"Date Wise",permission:["View","Create","Edit","Delete"]},{title:"Branch Wise",permission:["View","Create","Edit","Delete"]},{title:"Franchisee Wise",permission:["View","Create","Edit","Delete"]},{title:"State Wise",permission:["View","Create","Edit","Delete"]},{title:"City Wise",permission:["View","Create","Edit","Delete"]},{title:"Pincode Wise",permission:["View","Create","Edit","Delete"]},{title:"Affiliated Wise",permission:["View","Create","Edit","Delete"]}]},{title:"Notification",TabName:[{title:"Notification List",permission:["View","Create","Edit","Delete"]}]},{title:"Explore",TabName:[{title:"Grades",permission:["View","Create","Edit","Delete"]},{title:"Not A MemberList",permission:["View","Create","Edit","Delete"]},{title:"Quiz",permission:["View","Create","Edit","Delete"]},{title:"Emails",permission:["View","Create","Edit","Delete"]},{title:"Search User",permission:["View","Create","Edit","Delete"]}]},{title:"Logs",TabName:[{title:"Logs",permission:["View","Create","Edit","Delete"]}]}]},2652:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return C}));var a=i(1),n=i.n(a),l=i(862),r=i(48),s=i(818),o=i(819),c=i(820),m=i(842),d=i(841),u=i(836),p=i(196),f=i(1250),E=(i(40),i(188)),b=i(840),v=i.n(b);function g(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),i=t[0],b=t[1],g=Object(a.useState)(""),C=Object(r.a)(g,2),h=C[0],w=C[1],D=Object(a.useState)([]),y=Object(r.a)(D,2),V=y[0],N=y[1],O=Object(a.useState)(""),j=Object(r.a)(O,2),R=j[0],x=j[1],T=Object(a.useState)(!1),M=Object(r.a)(T,2),S=M[0],L=M[1],P=Object(a.useState)({}),A=Object(r.a)(P,2),k=(A[0],A[1]),z=function(e,t,i,a,n){if(t){V.map((function(e,t){if((null===e||void 0===e?void 0:e.pagename)===a){if(V[t].permission.includes(i));else V[t].permission.push(i)}else{var n=V.find((function(e,t){return e.pagename===a}));if(!1===((null===n||void 0===n?void 0:n.pagename)===a)){var l=V.concat({pagename:a,permission:[i]});N(l)}}}));if(V.length<1){var l=V.concat({pagename:a,permission:[i]});N(l)}}else null===V||void 0===V||V.map((function(e,t){var n=null===e||void 0===e?void 0:e.pagename;a===n&&(null===e||void 0===e||e.permission.splice(null===e||void 0===e?void 0:e.permission.indexOf(i),1)),0===(null===e||void 0===e?void 0:e.permission.length)&&V.splice(t,1)}))};Object(a.useEffect)((function(){var e=function(e){var t,i;console.log(e);var a=JSON.parse(localStorage.getItem("userData")),n=null===a||void 0===a||null===(t=a.rolename)||void 0===t||null===(i=t.rolePermission)||void 0===i?void 0:i.find((function(t){return(null===t||void 0===t?void 0:t.pagename)===e}));return{View:null===n||void 0===n?void 0:n.permission.includes("View"),Create:null===n||void 0===n?void 0:n.permission.includes("Create"),Edit:null===n||void 0===n?void 0:n.permission.includes("Edit"),Delete:null===n||void 0===n?void 0:n.permission.includes("Delete")}}("Create Role");k(e),console.log(V)}),[V]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{className:""},n.a.createElement(o.a,{xl:12},n.a.createElement(c.a,null,n.a.createElement("div",{className:"container"}),n.a.createElement(m.a,{onSubmit:function(e){var t;e.preventDefault();var a=JSON.parse(localStorage.getItem("userData")),n=new FormData;n.append("user_id",null===a||void 0===a||null===(t=a.Userinfo)||void 0===t?void 0:t.id),n.set("role_name",h),n.set("description",i),n.set("selectedarray",JSON.stringify(V)),E.a.post("/addroles",n).then((function(e){console.log(e),v()("Success","Role Created"),N(""),b(""),w("");var t,i=document.getElementsByName("check"),a=Object(l.a)(i);try{for(a.s();!(t=a.n()).done;){t.value.checked=!1}}catch(n){a.e(n)}finally{a.f()}})).catch((function(e){console.log(e)}))}},n.a.createElement("div",{className:"container mt-5"},n.a.createElement(s.a,{className:"mb-3 container"},n.a.createElement(o.a,null,n.a.createElement(d.a,null,"Enter Role *"),n.a.createElement(u.a,{required:!0,value:h,onChange:function(e){return w(e.target.value)},type:"text",placeholder:"Enter Role",className:"form-control"})),n.a.createElement(o.a,null,n.a.createElement(d.a,null,"Enter Role Description * "),n.a.createElement(u.a,{required:!0,value:i,onChange:function(e){return b(e.target.value)},type:"text",placeholder:"Enter Role Desc.."})))),n.a.createElement("section",{className:"mt-5 container"},n.a.createElement(s.a,{className:"gy-0 container"},f.a&&(null===f.a||void 0===f.a?void 0:f.a.map((function(e,t){var i;return n.a.createElement(o.a,{key:t,style:{borderRadius:"12px",height:"".concat(S&&R===t?"340px":"40px")},className:"customcol gy-0 mb-2 ",lg:"12",md:"12",sm:"12"},n.a.createElement(s.a,{style:{lineHeight:"44px",borderRadius:"6px",background:"#f7f7f8"},className:"roleheading"},n.a.createElement(o.a,{className:"gy-2",lg:"4",sm:"4",md:"4"},n.a.createElement("div",{className:"align-item-center"},n.a.createElement("input",{className:"mt-1",name:"check",id:"head_".concat(null===e||void 0===e?void 0:e.title),onClick:function(i){!function(e,t){L(e),x(t)}(i.target.checked,t),z(i.target.value,i.target.checked,"parentPermit",null===e||void 0===e?void 0:e.title)},style:{height:"19px",width:"26px"},type:"checkbox"}),n.a.createElement("span",{className:"mx-3 gy-0"},null===e||void 0===e?void 0:e.title))),n.a.createElement(o.a,{className:"gy-2"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("span",{className:"mx-3"}," View"))),n.a.createElement(o.a,{className:"gy-2"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("span",{className:"mx-3"}," Create"))),n.a.createElement(o.a,{className:"gy-2"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("span",{className:"mx-3"}," Edit"))),n.a.createElement(o.a,{className:"gy-2"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("span",{className:"mx-3"}," Delete")))),S&&R===t?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"gy-2 mt-2"},null===e||void 0===e||null===(i=e.TabName)||void 0===i?void 0:i.map((function(e,t){var i;return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{key:t,className:""},n.a.createElement(o.a,{lg:"4",sm:"4",md:"4"},n.a.createElement("h6",{className:"mt-1"}," ",null===e||void 0===e?void 0:e.title)),null===e||void 0===e||null===(i=e.permission)||void 0===i?void 0:i.map((function(t,i){return n.a.createElement(o.a,{key:i,lg:"2",md:"2",sm:"2"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("input",{name:"check",id:"item_".concat(t),onClick:function(i){z(i.target.value,i.target.checked,t,e.title)},style:{height:"19px",width:"26px"},type:"checkbox"})))}))))}))))):null)})))),n.a.createElement(s.a,null,n.a.createElement(o.a,null,n.a.createElement("div",{className:"d-flex justify-content-center mb-2"},n.a.createElement(p.a,{type:"submit",style:{cursor:"pointer"},color:"primary"},"Submit"))))))))))}function C(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",null,n.a.createElement(g,null)))}},836:function(e,t,i){"use strict";var a=i(6),n=i(8),l=i(18),r=i(19),s=i(1),o=i.n(s),c=i(2),m=i.n(c),d=i(5),u=i.n(d),p=i(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],E={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function t(t){var i;return(i=e.call(this,t)||this).getRef=i.getRef.bind(Object(l.a)(i)),i.focus=i.focus.bind(Object(l.a)(i)),i}Object(r.a)(t,e);var i=t.prototype;return i.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},i.focus=function(){this.ref&&this.ref.focus()},i.render=function(){var e=this.props,t=e.className,i=e.cssModule,l=e.type,r=e.bsSize,s=e.valid,c=e.invalid,m=e.tag,d=e.addon,E=e.plaintext,b=e.innerRef,v=Object(n.a)(e,f),g=["radio","checkbox"].indexOf(l)>-1,C=new RegExp("\\D","g"),h=m||("select"===l||"textarea"===l?l:"input"),w="form-control";E?(w+="-plaintext",h=m||"input"):"file"===l?w+="-file":"range"===l?w+="-range":g&&(w=d?null:"form-check-input"),v.size&&C.test(v.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=v.size,delete v.size);var D=Object(p.mapToCssModules)(u()(t,c&&"is-invalid",s&&"is-valid",!!r&&"form-control-"+r,w),i);return("input"===h||m&&"function"===typeof m)&&(v.type=l),v.children&&!E&&"select"!==l&&"string"===typeof h&&"select"!==h&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),o.a.createElement(h,Object(a.a)({},v,{ref:b,className:D,"aria-invalid":c}))},t}(o.a.Component);b.propTypes=E,b.defaultProps={type:"text"},t.a=b},841:function(e,t,i){"use strict";var a=i(6),n=i(8),l=i(1),r=i.n(l),s=i(2),o=i.n(s),c=i(5),m=i.n(c),d=i(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),E={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,t,i){return!0===i||""===i?e?"col":"col-"+t:"auto"===i?e?"col-auto":"col-"+t+"-auto":e?"col-"+i:"col-"+t+"-"+i},g=function(e){var t=e.className,i=e.cssModule,l=e.hidden,s=e.widths,o=e.tag,c=e.check,p=e.size,f=e.for,E=Object(n.a)(e,u),b=[];s.forEach((function(t,a){var n=e[t];if(delete E[t],n||""===n){var l,r=!a;if(Object(d.isObject)(n)){var s,o=r?"-":"-"+t+"-";l=v(r,t,n.size),b.push(Object(d.mapToCssModules)(m()(((s={})[l]=n.size||""===n.size,s["order"+o+n.order]=n.order||0===n.order,s["offset"+o+n.offset]=n.offset||0===n.offset,s))),i)}else l=v(r,t,n),b.push(l)}}));var g=Object(d.mapToCssModules)(m()(t,!!l&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),i);return r.a.createElement(o,Object(a.a)({htmlFor:f},E,{className:g}))};g.propTypes=E,g.defaultProps=b,t.a=g},842:function(e,t,i){"use strict";var a=i(6),n=i(8),l=i(18),r=i(19),s=i(1),o=i.n(s),c=i(2),m=i.n(c),d=i(5),u=i.n(d),p=i(4),f=["className","cssModule","inline","tag","innerRef"],E={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function t(t){var i;return(i=e.call(this,t)||this).getRef=i.getRef.bind(Object(l.a)(i)),i.submit=i.submit.bind(Object(l.a)(i)),i}Object(r.a)(t,e);var i=t.prototype;return i.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},i.submit=function(){this.ref&&this.ref.submit()},i.render=function(){var e=this.props,t=e.className,i=e.cssModule,l=e.inline,r=e.tag,s=e.innerRef,c=Object(n.a)(e,f),m=Object(p.mapToCssModules)(u()(t,!!l&&"form-inline"),i);return o.a.createElement(r,Object(a.a)({},c,{ref:s,className:m}))},t}(s.Component);b.propTypes=E,b.defaultProps={tag:"form"},t.a=b},862:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var a=i(106);function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l,r=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){s=!0,l=e},f:function(){try{r||null==n.return||n.return()}finally{if(s)throw l}}}}}}]);
//# sourceMappingURL=199.667ff279.chunk.js.map