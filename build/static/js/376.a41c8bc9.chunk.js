/*! For license information please see 376.a41c8bc9.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[376],{2664:function(e,t,a){"use strict";a.r(t),a.d(t,"EditProductType",(function(){return D}));var n=a(81),r=a(31),o=a(47),i=a(11),l=a(12),c=a(14),s=a(13),u=a(1),d=a.n(u),m=a(820),h=a(818),p=a(819),v=a(196),f=a(823),g=a(842),y=a(866),S=a(841),E=a(836),b=a(808),_=a(975),w=a.n(_),C=(a(22),a(188)),N=a(63),x=a(840),L=a.n(x),O=a(48),j=function(e){var t=e.city,a=e.selected,n=e.SelectedSupplierCity,r=e.sendDataToParent,o=Object(u.useState)(""),i=Object(O.a)(o,2),l=(i[0],i[1]);return d.a.createElement("div",null,d.a.createElement(w.a,{options:t,selectedValues:a||n,onSelect:function(e){console.log(e),l(e),r(e)},onRemove:function(e){console.log(e),l(e),r(e)},displayValue:"name"}))};function P(){P=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),l=new N(r||[]);return n(i,"_invoke",{value:b(e,a,l)}),i}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(O){return{type:"throw",arg:O}}}e.wrap=s;var d={};function m(){}function h(){}function p(){}var v={};c(v,o,(function(){return this}));var f=Object.getPrototypeOf,g=f&&f(f(x([])));g&&g!==t&&a.call(g,o)&&(v=g);var y=p.prototype=m.prototype=Object.create(v);function S(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(r,i){!function n(r,o,i,l){var c=u(e[r],e,o);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}})}function b(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return L()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var l=_(i,a);if(l){if(l===d)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=u(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function _(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},S(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new E(s(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(y),c(y,l,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),C(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;C(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},e}var k=[],D=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n,l;return Object(i.a)(this,a),(l=t.call(this,e)).handlerStatus=function(e){console.log(e.target.value),l.setState({Status:e.target.value})},l.changeHandler=function(e){l.setState(Object(o.a)({},e.target.name,e.target.value))},l.changeHandlerRole=function(e){console.log(e.target.value),l.setState({Role:e.target.value})},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.receiveDataFromChild=function(e){console.log(e),l.setState({SelectedSupplierCity:e})},l.submitHandler=function(e){var t,a=l.props.match.params.id;e.preventDefault();var n=new FormData,o=(Object(r.a)(new Set(k)),JSON.parse(localStorage.getItem("userData")));n.append("user_id",null===o||void 0===o||null===(t=o.Userinfo)||void 0===t?void 0:t.id),n.append("email",l.state.email),n.append("firstname",l.state.FirstName),n.append("lastname",l.state.Lastname),n.append("username",l.state.UserName),n.append("mobile",l.state.Mobile_no),n.append("postal_code",l.state.postalCode),n.append("status",l.state.status),n.append("state_id",l.state.SelectedState),n.append("edit_id",a),n.append("city_id",l.state.SelectedSupplierCity[0].id),l.state.CommisionPercentage&&n.append("franchise_percentage",l.state.CommisionPercentage),C.a.post("/usereditsubmit",n).then((function(e){console.log(e.data),L()("Success!","Submitted SuccessFull!","success")})).catch((function(e){console.log(e)}))},l.handleMatchaddress=function(e){l.setState({checkbox:e}),e?(l.setState({S_Country:l.state.B_Country}),l.setState({S_State:l.state.B_State}),l.setState({S_City:l.state.B_City}),l.setState({S_Street:l.state.B_Street}),l.setState({S_PinCode:l.state.B_PinCode})):(l.setState({S_Country:""}),l.setState({S_State:""}),l.setState({S_City:""}),l.setState({S_Street:""}),l.setState({S_PinCode:""}))},l.state=(n={Address:"",FirstName:"",Lastname:"",postalCode:"",UserName:"",Mobile_no:"",email:"",SelectedState:"",SelectedSupplierCity:[],SelectedSCity:[],CommisionPercentage:"",GSTIN:"",B_City:"",checkbox:"",StateList:[],CityList:[],S_City:"",B_Country:"",S_Country:"",Phone_no:"",Place_of_Supply:"",B_State:"",S_State:"",B_Street:"",S_Street:"",B_PinCode:"",S_PinCode:"",setuserList:!1,Show:!1,password:""},Object(o.a)(n,"CommisionPercentage",""),Object(o.a)(n,"status",""),Object(o.a)(n,"AssignRole",""),Object(o.a)(n,"CompanyName",""),Object(o.a)(n,"Companytype",""),Object(o.a)(n,"Selectuser",""),Object(o.a)(n,"UserId",""),Object(o.a)(n,"City",""),Object(o.a)(n,"Role",""),Object(o.a)(n,"viewData",[]),Object(o.a)(n,"rolesList",[]),n),l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(n.a)(P().mark((function e(){var t,a,n,r,o,i,l=this;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.match.params.id,(r=new FormData).append("user_id",n),e.next=5,C.a.post("/usereditview",r).then((function(e){var t,a,n,r,o,i,c,s;(console.log(e.data.data),5==(null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.role)&&l.setState({Show:!0}),null===(n=e.data.data)||void 0===n?void 0:n.city_id)&&(i=null===(s=e.data.data)||void 0===s?void 0:s.city_id.split(","));var u=new FormData;u.append("state_id",null===(r=e.data.data)||void 0===r?void 0:r.state_id),C.a.post("/getcity",u).then((function(e){var t,a,n,r;console.log(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.cities),c=null===e||void 0===e||null===(a=e.data)||void 0===a||null===(n=a.cities)||void 0===n?void 0:n.filter((function(e){if(i.includes(null===e||void 0===e?void 0:e.id))return e})),console.log(c),l.setState({SelectedSupplierCity:c}),l.setState({selectedValue:c}),l.setState({CityList:null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.cities})})).catch((function(e){console.log(e)})),l.setState({SelectedState:e.data.data.state_id,email:e.data.data.email,CommisionPercentage:null===(o=e.data.data)||void 0===o?void 0:o.franchise_percentage,FirstName:e.data.data.firstname,Lastname:e.data.data.lastname,UserName:e.data.data.username,Mobile_no:e.data.data.mobile,selectedValue:c,postalCode:e.data.data.postal_code,status:e.data.data.status,UserId:e.data.data.id})})).catch((function(e){console.log(e)}));case 5:return e.next=7,C.a.get("/getallstates").then((function(e){var t;l.setState({StateList:null===(t=e.data)||void 0===t?void 0:t.states})})).catch((function(e){console.log(e.response.data)}));case 7:return o=JSON.parse(localStorage.getItem("userData")),(i=new FormData).append("user_id",null===o||void 0===o||null===(t=o.Userinfo)||void 0===t?void 0:t.id),i.append("role",null===o||void 0===o||null===(a=o.Userinfo)||void 0===a?void 0:a.role),e.next=13,C.a.post("/getrolelistdropdown",i).then((function(e){var t,a,n=Object.values(null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.roles);l.setState({productName:n})})).catch((function(e){console.log(e)}));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onSelect",value:function(e,t){if(console.log(e),console.log(e.length),e.length)for(var a=0;a<e.length;a++)k.push(e[a].id)}},{key:"onRemove",value:function(e,t){console.log(e),console.log(k)}},{key:"render",value:function(){var e,t,a=this;return d.a.createElement("div",null,d.a.createElement(m.a,null,d.a.createElement(h.a,{className:"m-2"},d.a.createElement(p.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit User")),d.a.createElement(p.a,null,d.a.createElement(N.b,{render:function(e){var t=e.history;return d.a.createElement(v.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/mmbaic/house/userlist")}},"Back")}}))),d.a.createElement(m.a,null,d.a.createElement("div",{className:"container "},d.a.createElement("h4",{className:"py-2"},"Selected User Type :-"," ","Client"===this.state.AssignRole?"Client":"User")),d.a.createElement(f.a,null,d.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(h.a,{className:"mb-2"},d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(S.a,null,"First Name*"),d.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"FirstName",value:this.state.FirstName,onChange:this.changeHandler}))),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(S.a,null,"Last Name *"),d.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"Lastname",value:this.state.Lastname,onChange:this.changeHandler}))),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(S.a,null,"User Name *"),d.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"UserName",value:this.state.UserName,onChange:this.changeHandler}))),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(S.a,null,"Mobile Number *"),d.a.createElement(E.a,{required:!0,type:"text",onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,maxLength:10,size:10,placeholder:"0123456789",name:"Mobile_no",value:this.state.Mobile_no,onChange:function(e){var t=e.target.value.replace(/\D/g,"");a.setState({Mobile_no:t})}}))),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(S.a,null,"Email"),d.a.createElement(E.a,{required:!0,disabled:!0,type:"email",placeholder:"abcd@gmail.com...",name:"email",value:this.state.email,onChange:this.changeHandler}))),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement("label",{for:"cars"},"Choose State"),d.a.createElement("select",{name:"SelectedState",value:this.state.SelectedState,onChange:function(e){console.log(e.target.value);var t=new FormData;a.setState({SelectedState:e.target.value}),t.append("state_id",e.target.value),C.a.post("/getcity",t).then((function(e){var t,n;console.log(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.cities),a.setState({CityList:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.cities})})).catch((function(e){console.log(e)}))},className:"form-control"},d.a.createElement("option",{value:"volvo"},"--Select State--"),this.state.StateList&&(null===(e=this.state.StateList)||void 0===e?void 0:e.map((function(e,t){return d.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.state_title)})))))),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement("label",{for:"cars"},"Choose City"),d.a.createElement(j,{city:this.state.CityList,selected:this.state.selectedValue,SelectedSupplierCity:this.state.SelectedSupplierCity,sendDataToParent:this.receiveDataFromChild})),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(S.a,null,"Postal Code"," ",d.a.createElement("span",{style:{color:"red"}}," ","(Add Multiple Pincode with comma seprated)")),d.a.createElement("textarea",{required:!0,onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,type:"text",placeholder:"452001",className:"form-control",name:"postalCode",value:this.state.postalCode,onChange:function(e){var t=e.target.value.replace(/[^\d,]/g,"");a.setState({postalCode:t})}}))),this.state.Show&&this.state.Show&&d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(S.a,null,"Commision percentage "),d.a.createElement(E.a,{required:!0,onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,type:"text",placeholder:"05",className:"form-control",name:"CommisionPercentage",value:this.state.CommisionPercentage,onChange:function(e){var t=e.target.value.replace(/[^0-9]/g,"").slice(0,2);a.setState({CommisionPercentage:t})}})))),d.a.createElement("hr",null),this.state.setuserList&&d.a.createElement(h.a,{className:"mt-2"},d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(S.a,{className:"mt-2  mb-2"}," Select Role"),d.a.createElement(b.a,{type:"select",placeholder:"",name:"AssignRole",value:this.state.AssignRole,onChange:this.changeHandler},d.a.createElement("option",{value:"Admin"},"--Select Role--"),this.state.productName&&(null===(t=this.state.productName)||void 0===t?void 0:t.map((function(e,t){return d.a.createElement("option",{key:t,value:e},e)})))))),d.a.createElement(h.a,null,d.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(S.a,{className:"mb-1 py-2"},d.a.createElement("h4",null,"Status")),d.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler1},d.a.createElement("input",{checked:"Active"===this.state.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),d.a.createElement("span",{style:{marginRight:"20px"}},"Active"),d.a.createElement("input",{style:{marginRight:"3px"},type:"radio",checked:"Deactive"===this.state.status,name:"status",value:"Deactive"}),d.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),d.a.createElement(h.a,null,d.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}}]),a}(u.Component);t.default=D}}]);
//# sourceMappingURL=376.a41c8bc9.chunk.js.map