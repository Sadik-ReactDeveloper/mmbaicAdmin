(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[304],{2469:function(e,a,t){"use strict";t.r(a);var l=t(31),n=t(48),r=t(1247),c=t(1),o=t.n(c),u=t(820),i=t(818),s=t(819),m=t(823),d=t(838),p=t(846),v=t(837),E=t(808),g=t(835),b=t(196),f=(t(22),t(188)),h=t(977),O=t.n(h),j=t(63),S=t(840),y=t.n(S),N=(t(955),t(1094),[]);a.default=function(){var e=Object(c.useState)(null),a=Object(n.a)(e,2),t=(a[0],a[1]),h=Object(c.useState)(null),S=Object(n.a)(h,2),w=(S[0],S[1]),x=Object(c.useState)(null),C=Object(n.a)(x,2),_=(C[0],C[1]),D=Object(c.useState)(null),q=Object(n.a)(D,2),R=(q[0],q[1]),F=Object(c.useState)(""),A=Object(n.a)(F,2),P=A[0],k=A[1],U=Object(c.useState)([]),J=Object(n.a)(U,2),I=J[0],L=J[1],M=Object(c.useState)([]),V=Object(n.a)(M,2),Y=V[0],z=V[1],K=Object(c.useState)([]),B=Object(n.a)(K,2),G=B[0],H=B[1],Q=Object(c.useState)(""),T=Object(n.a)(Q,2),W=(T[0],T[1],Object(c.useState)("")),X=Object(n.a)(W,2),Z=X[0],$=X[1],ee=Object(c.useState)(""),ae=Object(n.a)(ee,2),te=ae[0],le=ae[1],ne=Object(c.useState)([]),re=Object(n.a)(ne,2),ce=re[0],oe=re[1],ue=Object(c.useState)([]),ie=Object(n.a)(ue,2),se=ie[0],me=(ie[1],Object(c.useState)("")),de=Object(n.a)(me,2),pe=de[0],ve=de[1],Ee=Object(c.useState)(""),ge=Object(n.a)(Ee,2),be=ge[0],fe=ge[1],he=Object(c.useState)(""),Oe=Object(n.a)(he,2),je=Oe[0],Se=Oe[1],ye=Object(c.useState)(""),Ne=Object(n.a)(ye,2),we=Ne[0],xe=Ne[1],Ce=Object(c.useState)(""),_e=Object(n.a)(Ce,2),De=_e[0],qe=_e[1],Re=Object(c.useState)(""),Fe=Object(n.a)(Re,2),Ae=Fe[0],Pe=Fe[1],ke=Object(c.useState)([]),Ue=Object(n.a)(ke,2),Je=Ue[0],Ie=Ue[1],Le=Object(c.useState)(""),Me=Object(n.a)(Le,2),Ve=(Me[0],Me[1]),Ye=Object(c.useState)(""),ze=Object(n.a)(Ye,2),Ke=ze[0],Be=ze[1],Ge=Object(j.g)();Object(c.useEffect)((function(){var e,a=JSON.parse(localStorage.getItem("userData")),l=null===a||void 0===a||null===(e=a.role)||void 0===e?void 0:e.find((function(e){return"Create Account"===(null===e||void 0===e?void 0:e.pageName)}));t(null===l||void 0===l?void 0:l.permission.includes("View")),_(null===l||void 0===l?void 0:l.permission.includes("Create")),w(null===l||void 0===l?void 0:l.permission.includes("Edit")),R(null===l||void 0===l?void 0:l.permission.includes("Delete"));var n=new FormData;n.append("user_id",null===a||void 0===a?void 0:a.Userinfo.id),n.append("role",null===a||void 0===a?void 0:a.Userinfo.role),f.a.post("/getrolelistdropdown",n).then((function(e){var a;console.log(null===e||void 0===e?void 0:e.data.data),Ie(null===e||void 0===e||null===(a=e.data.data)||void 0===a?void 0:a.roles)})).catch((function(e){console.log(e)})),f.a.get("/getallstates").then((function(e){var a;L(null===(a=e.data)||void 0===a?void 0:a.states)})).catch((function(e){console.log(e.response.data)}))}),[]);return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(i.a,{className:"m-2"},o.a.createElement(s.a,null,o.a.createElement("h1",{className:"float-left"},"Add here"))),o.a.createElement("div",{className:"container "}),o.a.createElement(m.a,null,o.a.createElement(d.a,{className:"m-1",onSubmit:function(e){var a;e.preventDefault();var t=JSON.parse(localStorage.getItem("userData")),n=Object(l.a)(new Set(N)),c=Object(l.a)(new Set(se)),o=new FormData;o.append("user_id",null===t||void 0===t||null===(a=t.Userinfo)||void 0===a?void 0:a.id),o.append("role",we),o.append("firstname",P),o.append("lastname",Ke),o.append("username",Ae),o.append("password",pe),o.append("mobile",Z),o.append("email",be),o.append("status",je),o.append("postal_code",De),c.length>0?o.append("state_id",ce.toString()):o.append("state_id",G),o.append("city_id",n),f.a.post("/createuser",o).then((function(e){var a;(null===(a=e.data)||void 0===a?void 0:a.success)&&(Ge.push("/app/freshlist/house/userlist"),y()("Success!","Submitted SuccessFull!","success"),xe(""),Se(""),k(""),Be(""),fe(""),Ve(""),$(""),Se(""),Pe(""),qe(""),H([]),Object(r.a)("selectItem1"),ve(""))})).catch((function(e){console.log(e),y()("error","error")}))}},o.a.createElement(i.a,{className:"mb-2"},o.a.createElement(s.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(v.a,null," Select Role*"),o.a.createElement(E.a,{required:!0,id:"AssignRole",type:"select",name:"AssignRole",value:we,onChange:function(e){return xe(e.target.value)}},o.a.createElement("option",{value:""},"--Select Role--"),Je&&(null===Je||void 0===Je?void 0:Je.map((function(e,a){return o.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.role)})))))),o.a.createElement(s.a,{lg:"6",md:"6",sm:"12"},o.a.createElement(p.a,null,o.a.createElement(v.a,null,"First Name *"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"firstname",value:P,onChange:function(e){return k(e.target.value)}}))),o.a.createElement(s.a,{lg:"6",md:"6",sm:"12"},o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Last Name *"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"lastname",value:Ke,onChange:function(e){return Be(e.target.value)}}))),o.a.createElement(s.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(v.a,null,"UserName *"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"UserName",value:Ae,onChange:function(e){return Pe(e.target.value)}}))),o.a.createElement(s.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Mobile Number *"),o.a.createElement(g.a,{required:!0,type:"text",maxLength:12,onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},size:10,min:0,placeholder:"+910000000000",name:"Mobile_no",value:Z,onChange:function(e){var a=e.target.value.replace(/\D/g,"");$(a)}}))),o.a.createElement(s.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Email *"),o.a.createElement(g.a,{required:!0,type:"email",placeholder:"abcd@gmail.com...",name:"email",value:be,onChange:function(e){return fe(e.target.value)}}))),o.a.createElement(s.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Password"),o.a.createElement(g.a,{required:!0,type:"password",placeholder:"Enter password",name:"password",value:pe,onChange:function(e){return ve(e.target.value)}}))),o.a.createElement(s.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(i.a,null),o.a.createElement(v.a,{for:"cars"}," State *"),"supplier"===we?o.a.createElement(o.a.Fragment,null,o.a.createElement(O.a,{required:!0,showCheckbox:"true",isObject:"false",options:I,onSelect:function(e,a){if(e.length)for(var t=0;t<e.length;t++)se.push(e[t].id);var n=e.map((function(e){return e.id}));oe(n);var r=Object(l.a)(new Set(se));if(1===r.length){var c=r[0],o=new FormData;o.append("state_id",c),f.a.post("/getcity",o).then((function(e){var a;z(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities)})).catch((function(e){console.log(e)}))}else z([])},onRemove:function(e,a){var t=e.map((function(e){return e.id}));oe(t)},displayValue:"state_title"})):o.a.createElement(o.a.Fragment,null,o.a.createElement("select",{required:!0,name:"SelectedState",value:G,onChange:function(e){var a=new FormData;H(e.target.value),a.append("state_id",e.target.value),f.a.post("/getcity",a).then((function(e){var a;z(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities)})).catch((function(e){console.log(e)}))},className:"form-control"},o.a.createElement("option",{value:"volvo"},"--Select State--"),I&&(null===I||void 0===I?void 0:I.map((function(e,a){return o.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.state_title)}))))))),o.a.createElement(s.a,{lg:"6",md:"6"},o.a.createElement(v.a,null,"City*"),o.a.createElement(O.a,{required:!0,selectionLimit:1,options:Y,onSelect:function(e,a){if(console.log(e),e.length)for(var t=0;t<e.length;t++)N.push(e[t].id)},onRemove:function(e,a){console.log(e),console.log(a)},displayValue:"name"})),"supplier"===we?o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Place of Supply"),o.a.createElement(g.a,{required:!0,type:"text",placeholder:"Enter Place_of_Supply",name:"Place_of_Supply",value:te,onChange:function(e){return le(e.target.value)}})))):null,o.a.createElement(s.a,{lg:"6",md:"6"},o.a.createElement(p.a,null,o.a.createElement(v.a,null,"Postal Code",o.a.createElement("span",{style:{color:"red"}}," ","(Add Multiple Pincode with comma seprated)")),o.a.createElement("textarea",{required:!0,type:"text",className:"form-control",placeholder:"Enter Postal code",name:"postalcode",value:De,onChange:function(e){var a=e.target.value.replace(/[^\d,]/g,"");qe(a)}})))),o.a.createElement("hr",null),o.a.createElement(i.a,{className:"mt-2"},o.a.createElement(s.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,{className:""},o.a.createElement("h4",null,"Status")),o.a.createElement("div",{className:"form-label-group",onChange:function(e){return Se(e.target.value)}},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),o.a.createElement(i.a,null,o.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},955:function(e,a,t){}}]);
//# sourceMappingURL=304.41acc70b.chunk.js.map