/*! For license information please see 318.21a6b0f6.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[318],{2433:function(e,t,a){"use strict";a.r(t),a.d(t,"EditProductType",(function(){return B}));var n=a(80),l=a(31),r=a(46),o=a(10),i=a(11),c=a(13),s=a(12),u=a(1),d=a.n(u),m=a(820),p=a(818),h=a(819),v=a(195),y=a(823),g=a(836),f=a(842),S=a(835),E=a(833),_=a(808),C=a(941),b=a.n(C),w=(a(22),a(186)),N=a(62),x=a(839),L=a.n(x);function k(){k=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},l="function"==typeof Symbol?Symbol:{},r=l.iterator||"@@iterator",o=l.asyncIterator||"@@asyncIterator",i=l.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,a){return e[t]=a}}function s(e,t,a,l){var r=t&&t.prototype instanceof m?t:m,o=Object.create(r.prototype),i=new N(l||[]);return n(o,"_invoke",{value:_(e,a,i)}),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(P){return{type:"throw",arg:P}}}e.wrap=s;var d={};function m(){}function p(){}function h(){}var v={};c(v,r,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(x([])));g&&g!==t&&a.call(g,r)&&(v=g);var f=h.prototype=m.prototype=Object.create(v);function S(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var l;n(this,"_invoke",{value:function(n,r){function o(){return new t((function(l,o){!function n(l,r,o,i){var c=u(e[l],e,r);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,i)}),(function(e){n("throw",e,o,i)})):t.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return n("throw",e,o,i)}))}i(c.arg)}(n,r,l,o)}))}return l=l?l.then(o,o):o()}})}function _(e,t,a){var n="suspendedStart";return function(l,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===l)throw r;return L()}for(a.method=l,a.arg=r;;){var o=a.delegate;if(o){var i=C(o,a);if(i){if(i===d)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=u(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function C(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,C(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var l=u(n,e.iterator,t.arg);if("throw"===l.type)return t.method="throw",t.arg=l.arg,t.delegate=null,d;var r=l.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function x(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=h,n(f,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(f),e},e.awrap=function(e){return{__await:e}},S(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,l,r){void 0===r&&(r=Promise);var o=new E(s(t,a,n,l),r);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},S(f),c(f,i,"Generator"),c(f,r,(function(){return this})),c(f,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var l=this.tryEntries.length-1;l>=0;--l){var r=this.tryEntries[l],o=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var i=a.call(r,"catchLoc"),c=a.call(r,"finallyLoc");if(i&&c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(i){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n];if(l.tryLoc<=this.prev&&a.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var r=l;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=e,o.arg=t,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var l=n.arg;w(a)}return l}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},e}var P=[],B=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handlerStatus=function(e){console.log(e.target.value),n.setState({Status:e.target.value})},n.changeHandler=function(e){n.setState(Object(r.a)({},e.target.name,e.target.value))},n.changeHandlerRole=function(e){console.log(e.target.value),n.setState({Role:e.target.value})},n.changeHandler1=function(e){n.setState({status:e.target.value})},n.submitHandler=function(e){var t=n.props.match.params.id;e.preventDefault();var a=new FormData,r=Object(l.a)(new Set(P));a.append("id",t),a.append("password",n.state.password),a.append("full_name",n.state.fullname),a.append("username",n.state.UserName),a.append("gstin_no",n.state.GSTIN),a.append("city",n.state.B_City),a.append("mobile",n.state.Mobile_no),a.append("email",n.state.email),a.append("status",n.state.status),a.append("role",n.state.AssignRole),a.append("company_name",n.state.CompanyName),a.append("company_type",n.state.Companytype),a.append("place_supply",n.state.Place_of_Supply),a.append("billing_street",n.state.B_Street),a.append("billing_city",n.state.B_City),a.append("billing_state",n.state.B_State),a.append("billing_country",n.state.B_Country),a.append("billing_pincode",n.state.B_PinCode),a.append("shipping_street",n.state.S_Street),a.append("shipping_city",n.state.S_City),a.append("shipping_state",n.state.S_State),a.append("shipping_country",n.state.S_Country),a.append("shipping_pincode",n.state.S_PinCode),a.append("phone_no",n.state.Phone_no),a.append("state_id",n.state.SelectedState),a.append("city_id",r),w.a.post("/usereditsubmit",a).then((function(e){console.log(e.data),L()("Success!","Submitted SuccessFull!","success")})).catch((function(e){console.log(e)}))},n.handleMatchaddress=function(e){n.setState({checkbox:e}),e?(n.setState({S_Country:n.state.B_Country}),n.setState({S_State:n.state.B_State}),n.setState({S_City:n.state.B_City}),n.setState({S_Street:n.state.B_Street}),n.setState({S_PinCode:n.state.B_PinCode})):(n.setState({S_Country:""}),n.setState({S_State:""}),n.setState({S_City:""}),n.setState({S_Street:""}),n.setState({S_PinCode:""}))},n.state={Address:"",fullname:"",GSTIN:"",B_City:"",checkbox:"",SelectedState:"",StateList:[],SelectedSupplierCity:[],SelectedSCity:[],CityList:[],S_City:"",Mobile_no:"",B_Country:"",S_Country:"",Phone_no:"",Place_of_Supply:"",B_State:"",S_State:"",B_Street:"",S_Street:"",B_PinCode:"",S_PinCode:"",setuserList:!1,password:"",email:"",status:"",AssignRole:"",CompanyName:"",Companytype:"",Selectuser:"",UserName:"",UserId:"",City:"",Role:"",viewData:[],rolesList:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(n.a)(k().mark((function e(){var t,a,n,l,r,o,i=this;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.match.params.id,(l=new FormData).append("user_id",n),e.next=5,w.a.post("/usereditview",l).then((function(e){var t,a,n,l;(console.log(e.data.data),null===(t=e.data.data)||void 0===t?void 0:t.city_id)&&(a=null===(l=e.data.data)||void 0===l?void 0:l.city_id.split(","));console.log(a),i.state.B_Street===i.state.S_Street&&i.setState({checkbox:!0});var r=new FormData;r.append("state_id",e.data.data.state_id),w.a.post("/getcity",r).then((function(e){var t,l,r,o;console.log(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.cities),n=null===e||void 0===e||null===(l=e.data)||void 0===l||null===(r=l.cities)||void 0===r?void 0:r.filter((function(e){if(a.includes(null===e||void 0===e?void 0:e.id))return e})),console.log(n),i.setState({SelectedSupplierCity:n}),i.setState({selectedValue:n}),i.setState({CityList:null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.cities})})).catch((function(e){console.log(e)})),r.append("state_id",e.data.data.billing_state),w.a.post("/getcity",r).then((function(e){var t;i.setState({CityList:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.cities})})).catch((function(e){console.log(e)})),r.append("state_id",e.data.data.shipping_state),w.a.post("/getcity",r).then((function(e){var t;i.setState({CityList:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.cities})})).catch((function(e){console.log(e)})),i.setState({SelectedState:e.data.data.state_id,selectedValue:n,B_City:e.data.data.billing_city,GSTIN:e.data.data.gstin_no,B_Country:e.data.data.billing_country,B_PinCode:e.data.data.billing_pincode,B_State:e.data.data.billing_state,B_Street:e.data.data.billing_street,CompanyName:e.data.data.company_name,Companytype:e.data.data.company_type,Role:e.data.data.role,AssignRole:e.data.data.role,email:e.data.data.email,fullname:e.data.data.full_name,Mobile_no:e.data.data.mobile,Phone_no:e.data.data.phone_no,Place_of_Supply:e.data.data.place_supply,S_City:e.data.data.shipping_city,S_Country:e.data.data.shipping_country,S_PinCode:e.data.data.shipping_pincode,S_State:e.data.data.shipping_state,S_Street:e.data.data.shipping_street,UserName:e.data.data.username,password:e.data.data.password,status:e.data.data.status,UserId:e.data.data.id})})).catch((function(e){console.log(e)}));case 5:return e.next=7,w.a.get("/getallstates").then((function(e){var t;i.setState({StateList:null===(t=e.data)||void 0===t?void 0:t.states})})).catch((function(e){console.log(e.response.data)}));case 7:return r=JSON.parse(localStorage.getItem("userData")),(o=new FormData).append("user_id",null===r||void 0===r||null===(t=r.Userinfo)||void 0===t?void 0:t.id),o.append("role",null===r||void 0===r||null===(a=r.Userinfo)||void 0===a?void 0:a.role),e.next=13,w.a.post("/getrolelistdropdown",o).then((function(e){var t,a,n=Object.values(null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.roles);i.setState({productName:n})})).catch((function(e){console.log(e)}));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onSelect",value:function(e,t){if(console.log(e),console.log(e.length),e.length)for(var a=0;a<e.length;a++)P.push(e[a].id)}},{key:"onRemove",value:function(e,t){console.log(e),console.log(P)}},{key:"render",value:function(){var e,t,a,n,l,r,o=this;return d.a.createElement("div",null,d.a.createElement(m.a,null,d.a.createElement(p.a,{className:"m-2"},d.a.createElement(h.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit User")),d.a.createElement(h.a,null,d.a.createElement(N.b,{render:function(e){var t=e.history;return d.a.createElement(v.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/house/userlist")}},"Back")}}))),d.a.createElement(m.a,null,d.a.createElement("div",{className:"container "},d.a.createElement("h4",{className:"py-2"},"Selected User Type :-"," ","Client"===this.state.AssignRole?"Client":"User"),d.a.createElement(p.a,null)),d.a.createElement(y.a,null,d.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(p.a,{className:"mb-2"},d.a.createElement(h.a,{lg:"6",md:"6"},d.a.createElement(f.a,null,d.a.createElement(S.a,null,"Name *"),d.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"fullname",value:this.state.fullname,onChange:this.changeHandler}))),d.a.createElement(h.a,{lg:"6",md:"6"},d.a.createElement(f.a,null,d.a.createElement(S.a,null,"Display Name *"),d.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"UserName",value:this.state.UserName,onChange:this.changeHandler}))),d.a.createElement(h.a,{lg:"6",md:"6"},d.a.createElement(f.a,null,d.a.createElement(S.a,null,"Mobile Number *"),d.a.createElement(E.a,{required:!0,type:"number",onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,maxLength:10,size:10,placeholder:"0123456789",name:"Mobile_no",value:this.state.Mobile_no,onChange:this.changeHandler.bind(this)}))),d.a.createElement(h.a,{lg:"6",md:"6"},d.a.createElement(f.a,null,d.a.createElement(S.a,null,"Phone Number "),d.a.createElement(E.a,{required:!0,type:"number",onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,maxLength:10,size:10,placeholder:"0123456789",name:"Phone_no",value:this.state.Phone_no,onChange:this.changeHandler.bind(this)}))),d.a.createElement(h.a,{lg:"6",md:"6"},d.a.createElement(f.a,null,d.a.createElement(S.a,null,"Email"),d.a.createElement(E.a,{required:!0,disabled:!0,type:"email",placeholder:"abcd@gmail.com...",name:"email",value:this.state.email,onChange:this.changeHandler}))),d.a.createElement(h.a,{lg:"6",md:"6"},d.a.createElement(f.a,null,d.a.createElement(S.a,null,"Company Name"),d.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter CompanyName",name:"CompanyName",value:this.state.CompanyName,onChange:this.changeHandler}))),d.a.createElement(h.a,{lg:"6",md:"6"},d.a.createElement(f.a,null,d.a.createElement(S.a,null,"Company Type"),d.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter Companytype",name:"Companytype",value:this.state.Companytype,onChange:this.changeHandler}))),d.a.createElement(h.a,{lg:"6",md:"6"},d.a.createElement(f.a,null,d.a.createElement(S.a,null,"GSTIN"),d.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter GSTIN No.",name:"GSTIN",value:this.state.GSTIN,onChange:this.changeHandler}))),d.a.createElement(h.a,{lg:"6",md:"6"},d.a.createElement(f.a,null,d.a.createElement(S.a,null,"Place of Supply"),d.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter Place_of_Supply",name:"Place_of_Supply",value:this.state.Place_of_Supply,onChange:this.changeHandler}))),d.a.createElement(h.a,{lg:"6",md:"6"},d.a.createElement(f.a,null,d.a.createElement("label",{for:"cars"},"Choose State"),d.a.createElement("select",{name:"SelectedState",value:this.state.SelectedState,onChange:function(e){console.log(e.target.value);var t=new FormData;o.setState({SelectedState:e.target.value}),t.append("state_id",e.target.value),w.a.post("/getcity",t).then((function(e){var t,a;console.log(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.cities),o.setState({CityList:null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities})})).catch((function(e){console.log(e)}))},className:"form-control"},d.a.createElement("option",{value:"volvo"},"--Select State--"),this.state.StateList&&(null===(e=this.state.StateList)||void 0===e?void 0:e.map((function(e,t){return d.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.state_title)})))))),d.a.createElement(h.a,{lg:"6",md:"6"},d.a.createElement("label",{for:"cars"},"Choose City"),d.a.createElement(b.a,{options:this.state.CityList,selectedValues:this.state.selectedValue||this.state.SelectedSupplierCity,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name"}))),d.a.createElement("hr",null),d.a.createElement(p.a,null,d.a.createElement(h.a,null,d.a.createElement("h4",{className:"mt-4"},"Billing Address :"),d.a.createElement(h.a,{className:"py-2",lg:"12",md:"12",sm:"12"},d.a.createElement(f.a,null,d.a.createElement("label",{for:"cars"},"Choose Country"),d.a.createElement("select",{placeholder:"Enter City",name:"B_Country",value:this.state.B_Country,onChange:this.changeHandler,className:"form-control"},d.a.createElement("option",{value:"volvo"},"--Select Country--"),d.a.createElement("option",{value:"India"},"India")))),d.a.createElement(h.a,{lg:"12",md:"12",sm:"12"},d.a.createElement(f.a,null,d.a.createElement("label",{for:"cars"},"Choose State"),d.a.createElement("select",{name:"B_State",value:this.state.B_State,onChange:function(e){console.log(e.target.value),o.setState({B_State:e.target.value});var t=new FormData;t.append("state_id",e.target.value),w.a.post("/getcity",t).then((function(e){var t;o.setState({CityList:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.cities})})).catch((function(e){console.log(e)}))},className:"form-control"},d.a.createElement("option",{value:"volvo"},"--Select State--"),this.state.StateList&&(null===(t=this.state.StateList)||void 0===t?void 0:t.map((function(e,t){return d.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.state_title)})))))),d.a.createElement(h.a,{lg:"12",md:"12",sm:"12"},d.a.createElement(f.a,null,d.a.createElement(f.a,null,d.a.createElement("label",{for:"cars"},"Choose City"),d.a.createElement("select",{placeholder:"Enter City",name:"B_City",value:this.state.B_City,onChange:this.changeHandler,className:"form-control"},d.a.createElement("option",{value:"volvo"},"--Select City--"),this.state.CityList&&(null===(a=this.state.CityList)||void 0===a?void 0:a.map((function(e,t){return d.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.name)}))))))),d.a.createElement(h.a,{lg:"12",md:"12",sm:"12"},d.a.createElement(f.a,null,d.a.createElement(S.a,null,"Street"),d.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter Street",name:"B_Street",value:this.state.B_Street,onChange:this.changeHandler}))),d.a.createElement(h.a,{lg:"12",md:"12",sm:"12"},d.a.createElement(f.a,null,d.a.createElement(S.a,null,"PinCode"),d.a.createElement(E.a,{required:!0,type:"number",onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,placeholder:"Enter PinCode",name:"B_PinCode",value:this.state.B_PinCode,onChange:this.changeHandler})))),d.a.createElement(h.a,null,d.a.createElement(p.a,null,d.a.createElement(h.a,{lg:"1",md:"1"},d.a.createElement("input",{name:"check",checked:this.state.B_Street===this.state.S_Street,onChange:function(e){o.handleMatchaddress(e.target.checked)},style:{height:"15px",width:"20px"},type:"checkbox"})),d.a.createElement(h.a,null,d.a.createElement("h5",null," Same as Billing Address "))),d.a.createElement("h4",{className:"py-2"},"Shipping Address :"),d.a.createElement(h.a,{lg:"12",md:"12",sm:"12"},d.a.createElement(f.a,null,d.a.createElement("label",{for:"cars"},"Choose Country"),d.a.createElement("select",{placeholder:"Enter City",name:"S_Country",disabled:!!this.state.checkbox,value:this.state.S_Country,onChange:this.changeHandler,className:"form-control"},d.a.createElement("option",{value:"volvo"},"--Select Country--"),d.a.createElement("option",{value:"India"},"India")))),d.a.createElement(h.a,{lg:"12",md:"12",sm:"12"},d.a.createElement(f.a,null,d.a.createElement("label",{for:"cars"},"Choose State"),d.a.createElement("select",{name:"S_State",value:this.state.S_State,onChange:function(e){o.setState({S_State:e.target.value});var t=new FormData;t.append("state_id",e.target.value),w.a.post("/getcity",t).then((function(e){var t,a;console.log(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.cities),o.setState({CityList:null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities})})).catch((function(e){console.log(e)}))},className:"form-control"},d.a.createElement("option",{value:"volvo"},"--Select State--"),this.state.StateList&&(null===(n=this.state.StateList)||void 0===n?void 0:n.map((function(e,t){return d.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.state_title)})))))),d.a.createElement(h.a,{lg:"12",md:"12",sm:"12"},d.a.createElement(f.a,null,d.a.createElement(f.a,null,d.a.createElement("label",{for:"cars"},"Choose City"),d.a.createElement("select",{placeholder:"Enter City",name:"S_City",value:this.state.S_City,onChange:this.changeHandler,className:"form-control"},d.a.createElement("option",{value:"volvo"},"--Select City--"),this.state.CityList&&(null===(l=this.state.CityList)||void 0===l?void 0:l.map((function(e,t){return d.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.name)}))))))),d.a.createElement(h.a,{lg:"12",md:"12",sm:"12"},d.a.createElement(f.a,null,d.a.createElement(S.a,null,"Street"),d.a.createElement(E.a,{required:!0,disabled:!!this.state.checkbox,type:"text",placeholder:"Enter Street",name:"S_Street",value:this.state.S_Street,onChange:this.changeHandler}))),d.a.createElement(h.a,{lg:"12",md:"12",sm:"12"},d.a.createElement(f.a,null,d.a.createElement(S.a,null,"PinCode"),d.a.createElement(E.a,{required:!0,disabled:!!this.state.checkbox,type:"number",onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,placeholder:"Enter PinCode",name:"S_PinCode",value:this.state.S_PinCode,onChange:this.changeHandler}))))),this.state.setuserList&&d.a.createElement(p.a,{className:"mt-2"},d.a.createElement(h.a,{lg:"6",md:"6"},d.a.createElement(S.a,{className:"mt-2  mb-2"}," Select Role"),d.a.createElement(_.a,{type:"select",placeholder:"",name:"AssignRole",value:this.state.AssignRole,onChange:this.changeHandler},d.a.createElement("option",{value:"Admin"},"--Select Role--"),this.state.productName&&(null===(r=this.state.productName)||void 0===r?void 0:r.map((function(e,t){return d.a.createElement("option",{key:t,value:e},e)})))))),d.a.createElement(p.a,null,d.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(S.a,{className:"mb-1 py-2"},d.a.createElement("h4",null,"Status")),d.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler1},d.a.createElement("input",{checked:"Active"===this.state.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),d.a.createElement("span",{style:{marginRight:"20px"}},"Active"),d.a.createElement("input",{style:{marginRight:"3px"},type:"radio",checked:"Deactive"===this.state.status,name:"status",value:"Deactive"}),d.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),d.a.createElement(p.a,null,d.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}}]),a}(u.Component);t.default=B}}]);
//# sourceMappingURL=318.21a6b0f6.chunk.js.map