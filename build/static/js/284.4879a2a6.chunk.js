(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[284],{2453:function(e,a,t){"use strict";t.r(a);var n=t(31),l=t(48),c=t(1401),r=t(1),u=t.n(r),o=t(820),i=t(818),m=t(819),s=t(823),d=t(838),p=t(844),v=t(837),E=t(808),g=t(835),b=t(196),f=(t(22),t(188)),h=t(1033),O=t.n(h),j=t(841),S=t.n(j),y=(t(918),t(1104),[]);a.default=function(){var e=Object(r.useState)(null),a=Object(l.a)(e,2),t=(a[0],a[1]),h=Object(r.useState)(null),j=Object(l.a)(h,2),N=(j[0],j[1]),w=Object(r.useState)(null),C=Object(l.a)(w,2),x=(C[0],C[1]),_=Object(r.useState)(null),q=Object(l.a)(_,2),D=(q[0],q[1]),R=Object(r.useState)(""),F=Object(l.a)(R,2),k=F[0],A=F[1],P=Object(r.useState)([]),J=Object(l.a)(P,2),I=J[0],U=J[1],V=Object(r.useState)([]),Y=Object(l.a)(V,2),L=Y[0],M=Y[1],z=Object(r.useState)([]),K=Object(l.a)(z,2),B=K[0],G=K[1],H=Object(r.useState)(""),Q=Object(l.a)(H,2),T=(Q[0],Q[1],Object(r.useState)("")),W=Object(l.a)(T,2),X=W[0],Z=W[1],$=Object(r.useState)(""),ee=Object(l.a)($,2),ae=ee[0],te=ee[1],ne=Object(r.useState)([]),le=Object(l.a)(ne,2),ce=le[0],re=le[1],ue=Object(r.useState)([]),oe=Object(l.a)(ue,2),ie=oe[0],me=(oe[1],Object(r.useState)("")),se=Object(l.a)(me,2),de=se[0],pe=se[1],ve=Object(r.useState)(""),Ee=Object(l.a)(ve,2),ge=Ee[0],be=Ee[1],fe=Object(r.useState)(""),he=Object(l.a)(fe,2),Oe=he[0],je=he[1],Se=Object(r.useState)(""),ye=Object(l.a)(Se,2),Ne=ye[0],we=ye[1],Ce=Object(r.useState)(""),xe=Object(l.a)(Ce,2),_e=xe[0],qe=xe[1],De=Object(r.useState)(""),Re=Object(l.a)(De,2),Fe=Re[0],ke=Re[1],Ae=Object(r.useState)([]),Pe=Object(l.a)(Ae,2),Je=Pe[0],Ie=Pe[1],Ue=Object(r.useState)(""),Ve=Object(l.a)(Ue,2),Ye=(Ve[0],Ve[1]),Le=Object(r.useState)(""),Me=Object(l.a)(Le,2),ze=Me[0],Ke=Me[1];Object(r.useEffect)((function(){var e,a=JSON.parse(localStorage.getItem("userData")),n=null===a||void 0===a||null===(e=a.role)||void 0===e?void 0:e.find((function(e){return"Create Account"===(null===e||void 0===e?void 0:e.pageName)}));t(null===n||void 0===n?void 0:n.permission.includes("View")),x(null===n||void 0===n?void 0:n.permission.includes("Create")),N(null===n||void 0===n?void 0:n.permission.includes("Edit")),D(null===n||void 0===n?void 0:n.permission.includes("Delete")),f.a.get("/getroleNamelist").then((function(e){console.log(null===e||void 0===e?void 0:e.data.data),Ie(null===e||void 0===e?void 0:e.data.data)})).catch((function(e){console.log(e)})),f.a.get("/getallstates").then((function(e){var a;U(null===(a=e.data)||void 0===a?void 0:a.states)})).catch((function(e){console.log(e.response.data)}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(o.a,null,u.a.createElement(i.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{className:"float-left"},"Add here"))),u.a.createElement("div",{className:"container "}),u.a.createElement(s.a,null,u.a.createElement(d.a,{className:"m-1",onSubmit:function(e){var a;e.preventDefault();var t=JSON.parse(localStorage.getItem("userData")),l=Object(n.a)(new Set(y)),r=Object(n.a)(new Set(ie)),u=new FormData;u.append("created_by",null===t||void 0===t||null===(a=t.Userinfo)||void 0===a?void 0:a.id),u.append("role",Ne),u.append("firstname",k),u.append("lastname",ze),u.append("username",Fe),u.append("password",de),u.append("mobile",X),u.append("email",ge),u.append("status",Oe),u.append("postal_code",_e),r.length>0?u.append("state_id",ce.toString()):u.append("state_id",B),u.append("city_id",l),f.a.post("/createuser",u).then((function(e){var a;(null===(a=e.data)||void 0===a?void 0:a.success)&&(S()("Success!","Submitted SuccessFull!","success"),we(""),je(""),A(""),Ke(""),be(""),Ye(""),Z(""),je(""),ke(""),qe(""),G([]),Object(c.a)("selectItem1"),pe(""))})).catch((function(e){console.log(e)}))}},u.a.createElement(i.a,{className:"mb-2"},u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(p.a,null,u.a.createElement(v.a,null," Select Role*"),u.a.createElement(E.a,{required:!0,id:"AssignRole",type:"select",name:"AssignRole",value:Ne,onChange:function(e){return we(e.target.value)}},u.a.createElement("option",{value:""},"--Select Role--"),Je&&(null===Je||void 0===Je?void 0:Je.map((function(e,a){return u.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.role)})))))),u.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(v.a,null,"First Name *"),u.a.createElement(g.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"firstname",value:k,onChange:function(e){return A(e.target.value)}}))),u.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},u.a.createElement(p.a,null,u.a.createElement(v.a,null,"Last Name *"),u.a.createElement(g.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"lastname",value:ze,onChange:function(e){return Ke(e.target.value)}}))),u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(p.a,null,u.a.createElement(v.a,null,"UserName *"),u.a.createElement(g.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"UserName",value:Fe,onChange:function(e){return ke(e.target.value)}}))),u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(p.a,null,u.a.createElement(v.a,null,"Mobile Number *"),u.a.createElement(g.a,{required:!0,type:"number",maxLength:12,onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},size:10,min:0,placeholder:"0123456789",name:"Mobile_no",value:X,onChange:function(e){return Z(e.target.value)}}))),u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(p.a,null,u.a.createElement(v.a,null,"Email *"),u.a.createElement(g.a,{required:!0,type:"email",placeholder:"abcd@gmail.com...",name:"email",value:ge,onChange:function(e){return be(e.target.value)}}))),u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(p.a,null,u.a.createElement(v.a,null,"Password"),u.a.createElement(g.a,{required:!0,type:"password",placeholder:"Enter password",name:"password",value:de,onChange:function(e){return pe(e.target.value)}}))),u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(p.a,null,u.a.createElement(i.a,null),u.a.createElement(v.a,{for:"cars"}," State *"),"supplier"===Ne?u.a.createElement(u.a.Fragment,null,u.a.createElement(O.a,{required:!0,showCheckbox:"true",isObject:"false",options:I,onSelect:function(e,a){if(e.length)for(var t=0;t<e.length;t++)ie.push(e[t].id);var l=e.map((function(e){return e.id}));re(l);var c=Object(n.a)(new Set(ie));if(1===c.length){var r=c[0],u=new FormData;u.append("state_id",r),f.a.post("/getcity",u).then((function(e){var a;M(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities)})).catch((function(e){console.log(e)}))}else M([])},onRemove:function(e,a){var t=e.map((function(e){return e.id}));re(t)},displayValue:"state_title"})):u.a.createElement(u.a.Fragment,null,u.a.createElement("select",{required:!0,name:"SelectedState",value:B,onChange:function(e){var a=new FormData;G(e.target.value),a.append("state_id",e.target.value),f.a.post("/getcity",a).then((function(e){var a;M(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities)})).catch((function(e){console.log(e)}))},className:"form-control"},u.a.createElement("option",{value:"volvo"},"--Select State--"),I&&(null===I||void 0===I?void 0:I.map((function(e,a){return u.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.state_title)}))))))),u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(v.a,{for:"cars"},"City * "),u.a.createElement(O.a,{required:!0,singleSelect:!0,options:L,onSelect:function(e,a){if(console.log(e),e.length)for(var t=0;t<e.length;t++)y.push(e[t].id)},onRemove:function(e,a){console.log(e),console.log(a)},displayValue:"name"})),"supplier"===Ne?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(p.a,null,u.a.createElement(v.a,null,"Place of Supply"),u.a.createElement(g.a,{required:!0,type:"text",placeholder:"Enter Place_of_Supply",name:"Place_of_Supply",value:ae,onChange:function(e){return te(e.target.value)}})))):null,u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(p.a,null,u.a.createElement(v.a,null,"Postal Code"),u.a.createElement(g.a,{required:!0,type:"text",placeholder:"Enter Postal code",name:"postalcode",value:_e,onChange:function(e){return qe(e.target.value)}})))),u.a.createElement("hr",null),u.a.createElement(i.a,{className:"mt-2"},u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,{className:""},u.a.createElement("h4",null,"Status")),u.a.createElement("div",{className:"form-label-group",onChange:function(e){return je(e.target.value)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),u.a.createElement(i.a,null,u.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},918:function(e,a,t){}}]);
//# sourceMappingURL=284.4879a2a6.chunk.js.map