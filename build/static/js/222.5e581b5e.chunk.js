/*! For license information please see 222.5e581b5e.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[222],{2478:function(e,t,n){"use strict";n.r(t),n.d(t,"AddProduct",(function(){return N}));var a=n(31),r=n(81),o=n(47),i=n(11),l=n(12),s=n(74),c=n(14),u=n(13),d=n(1),f=n.n(d),p=n(820),h=n(818),m=n(819),v=n(823),g=n(841),y=n(848),b=n(839),w=n(835),E=n(808),O=n(196),j=(n(22),n(188)),x=n(840),P=n.n(x);n(1140);function S(){S=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(k){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),l=new P(r||[]);return a(i,"_invoke",{value:E(e,n,l)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=c;var d={};function f(){}function p(){}function h(){}var m={};s(m,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(N([])));g&&g!==t&&n.call(g,o)&&(m=g);var y=h.prototype=f.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t((function(r,i){!function a(r,o,i,l){var s=u(e[r],e,o);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,i,l)}),(function(e){a("throw",e,i,l)})):t.resolve(d).then((function(e){c.value=e,i(c)}),(function(e){return a("throw",e,i,l)}))}l(s.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function E(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return T()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var l=O(i,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var s=u(e,t,n);if("normal"===s.type){if(a=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a="completed",n.method="throw",n.arg=s.arg)}}}function O(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=h,a(y,"constructor",{value:h,configurable:!0}),a(h,"constructor",{value:p,configurable:!0}),p.displayName=s(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,s(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),s(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new w(c(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),s(y,l,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=N,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var N=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onChangeHandler3=function(e){a.setState({selectedFile3:e.target.files[0]})},a.changeHandler1=function(e){a.setState({status:e.target.value})},a.changeHandler=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value))},a.submitHandler=function(e){var t;e.preventDefault();var n=new FormData,r=(a.props.match.params.id,JSON.parse(localStorage.getItem("userData")));n.append("user_id",null===r||void 0===r||null===(t=r.Userinfo)||void 0===t?void 0:t.id),n.append("category_id",a.state.category_name),n.append("title",a.state.P_Title),n.append("description",a.state.description),n.append("price",a.state.Price),n.append("discountprice",a.state.DiscountPrice),n.append("images",a.state.selectedFile3),n.append("status","Active"),j.a.post("/addproduct",n,{headers:{"Content-Type":"multipart/form-data; "}}).then((function(e){console.log(e),e.data.success&&(P()("Success!","You Data has been Submitted","success"),a.props.history.push("/app/freshlist/house/houseProductList"))})).catch((function(e){console.log(e)}))},a.state={category_name:"",Brand:"",P_Title:"",Type:"",heading:"Add",Price:"",stock:"",Regularprice:"",formValues:[{PName:"",price:""}],DiscountPrice:"",Addmore:!1,rowData:[],TypeList:[],description:"",variety:"",shipmentfee:"",Tags:"",taxrate:"",status:"",selectedFile3:[],selectedName3:""},a.handleSubmit=a.handleSubmit.bind(Object(s.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(S().mark((function e(){var t,n,a,r,o,i,l,s,c,u,d,f=this;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=this.props.match.params.id,console.log(l),0==l?this.setState({heading:"Add"}):this.setState({heading:"Edit"}),s=new FormData,c=JSON.parse(localStorage.getItem("userData")),s.append("user_id",null===c||void 0===c||null===(t=c.Userinfo)||void 0===t?void 0:t.id),s.append("role",null===c||void 0===c||null===(n=c.Userinfo)||void 0===n?void 0:n.role),e.next=9,j.a.post("/getcategoryList",s).then((function(e){var t,n=null===(t=e.data.data)||void 0===t?void 0:t.category;console.log(n),n&&f.setState({rowData:n})}));case 9:return(u=new FormData).append("user_id",null===c||void 0===c||null===(a=c.Userinfo)||void 0===a?void 0:a.id),u.append("role",null===c||void 0===c||null===(r=c.Userinfo)||void 0===r?void 0:r.role),(d=new FormData).append("user_id",null===c||void 0===c||null===(o=c.Userinfo)||void 0===o?void 0:o.id),d.append("role",null===c||void 0===c||null===(i=c.Userinfo)||void 0===i?void 0:i.role),e.next=17,j.a.post("/getbrand",d).then((function(e){var t,n=null===(t=e.data.data)||void 0===t?void 0:t.brands;console.log(e),n&&f.setState({Brandlist:n})}));case 17:return e.next=19,j.a.post("/producttypelistview",u).then((function(e){var t=e.data.data;console.log(t),t&&f.setState({TypeList:t})}));case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){var n=this.state.formValues;n[e][t.target.name]=t.target.value,this.setState({formValues:n})}},{key:"addFormFields",value:function(){this.setState({formValues:[].concat(Object(a.a)(this.state.formValues),[{PName:"",price:""}])}),this.handleSubmit()}},{key:"removeFormFields",value:function(e){var t=this.state.formValues;t.splice(e,1),this.setState({formValues:t})}},{key:"handleSubmit",value:function(){console.log(this.state.formValues)}},{key:"render",value:function(){var e,t=this;return f.a.createElement("div",null,f.a.createElement(p.a,null,f.a.createElement("h1",{className:"p-2 "},this.state.heading," Product"),f.a.createElement(h.a,{className:"m-2"},f.a.createElement(m.a,null,f.a.createElement("h2",null,this.state.heading," Product Information"))),f.a.createElement(v.a,null,f.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},f.a.createElement(h.a,{className:"mb-2"},f.a.createElement(m.a,{lg:"6",md:"6"},f.a.createElement(y.a,null,f.a.createElement(b.a,null," Choose Category *"),f.a.createElement("select",{onChange:function(e){return t.setState({category_name:e.target.value})},className:"form-control",name:"Select",id:"Select"},f.a.createElement("option",{value:"volvo"},"--Select Category--"),this.state.rowData&&(null===(e=this.state.rowData)||void 0===e?void 0:e.map((function(e,t){return f.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.category)})))))),f.a.createElement(m.a,{lg:"6",md:"6"},f.a.createElement(y.a,null,f.a.createElement(b.a,null,"Product Title"),f.a.createElement(w.a,{required:!0,type:"text",placeholder:"Title",name:"P_Title",bsSize:"lg",value:this.state.P_Title,onChange:this.changeHandler}))),f.a.createElement(m.a,{lg:"6",md:"6"},f.a.createElement(y.a,null,f.a.createElement(b.a,null," PRICE (\u20b9)"),f.a.createElement(w.a,{required:!0,onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,type:"text",placeholder:"Amount In Number",name:"Price",bsSize:"lg",value:this.state.Price,onChange:function(e){var n=e.target.value.replace(/\D/g,"");t.setState({Price:n})}}))),f.a.createElement(m.a,{lg:"6",md:"6"},f.a.createElement(y.a,null,f.a.createElement(b.a,null,"Discount Price"),f.a.createElement(w.a,{onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,type:"text",placeholder:"Discount Price",name:"DiscountPrice",bsSize:"lg",value:this.state.DiscountPrice,onChange:function(e){var n=e.target.value.replace(/\D/g,"");t.setState({DiscountPrice:n})}})))),f.a.createElement(h.a,null,f.a.createElement(m.a,{lg:"6",sm:"6"},f.a.createElement(y.a,null,f.a.createElement(b.a,null,"Product Image"),f.a.createElement(E.a,{multiple:!0,style:{cursor:"pointer"},accept:"image/png,image/jpeg,image/jpg",name:"images",type:"file",onChange:this.onChangeHandler3}))),f.a.createElement(m.a,{lg:"6",md:"6"},f.a.createElement(y.a,null,f.a.createElement(b.a,null,"Description"),f.a.createElement("textarea",{type:"text",rows:5,className:"form-control",placeholder:"Description ...",name:"description",bsSize:"lg",value:this.state.description,onChange:this.changeHandler})))),f.a.createElement(h.a,null,f.a.createElement("div",{className:"d-flex justify-content-center"},f.a.createElement(O.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Product")))))))}}]),n}(d.Component);t.default=N},835:function(e,t,n){"use strict";var a=n(6),r=n(8),o=n(18),i=n(19),l=n(1),s=n.n(l),c=n(2),u=n.n(c),d=n(5),f=n.n(d),p=n(4),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.focus=n.focus.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,i=e.bsSize,l=e.valid,c=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,v=e.innerRef,g=Object(r.a)(e,h),y=["radio","checkbox"].indexOf(o)>-1,b=new RegExp("\\D","g"),w=u||("select"===o||"textarea"===o?o:"input"),E="form-control";m?(E+="-plaintext",w=u||"input"):"file"===o?E+="-file":"range"===o?E+="-range":y&&(E=d?null:"form-check-input"),g.size&&b.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var O=Object(p.mapToCssModules)(f()(t,c&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,E),n);return("input"===w||u&&"function"===typeof u)&&(g.type=o),g.children&&!m&&"select"!==o&&"string"===typeof w&&"select"!==w&&(Object(p.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),s.a.createElement(w,Object(a.a)({},g,{ref:v,className:O,"aria-invalid":c}))},t}(s.a.Component);v.propTypes=m,v.defaultProps={type:"text"},t.a=v},839:function(e,t,n){"use strict";var a=n(6),r=n(8),o=n(1),i=n.n(o),l=n(2),s=n.n(l),c=n(5),u=n.n(c),d=n(4),f=["className","cssModule","hidden","widths","tag","check","size","for"],p=s.a.oneOfType([s.a.number,s.a.string]),h=s.a.oneOfType([s.a.bool,s.a.string,s.a.number,s.a.shape({size:p,order:p,offset:p})]),m={children:s.a.node,hidden:s.a.bool,check:s.a.bool,size:s.a.string,for:s.a.string,tag:d.tagPropType,className:s.a.string,cssModule:s.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:s.a.array},v={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},y=function(e){var t=e.className,n=e.cssModule,o=e.hidden,l=e.widths,s=e.tag,c=e.check,p=e.size,h=e.for,m=Object(r.a)(e,f),v=[];l.forEach((function(t,a){var r=e[t];if(delete m[t],r||""===r){var o,i=!a;if(Object(d.isObject)(r)){var l,s=i?"-":"-"+t+"-";o=g(i,t,r.size),v.push(Object(d.mapToCssModules)(u()(((l={})[o]=r.size||""===r.size,l["order"+s+r.order]=r.order||0===r.order,l["offset"+s+r.offset]=r.offset||0===r.offset,l))),n)}else o=g(i,t,r),v.push(o)}}));var y=Object(d.mapToCssModules)(u()(t,!!o&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,v,!!v.length&&"col-form-label"),n);return i.a.createElement(s,Object(a.a)({htmlFor:h},m,{className:y}))};y.propTypes=m,y.defaultProps=v,t.a=y},841:function(e,t,n){"use strict";var a=n(6),r=n(8),o=n(18),i=n(19),l=n(1),s=n.n(l),c=n(2),u=n.n(c),d=n(5),f=n.n(d),p=n(4),h=["className","cssModule","inline","tag","innerRef"],m={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.submit=n.submit.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.inline,i=e.tag,l=e.innerRef,c=Object(r.a)(e,h),u=Object(p.mapToCssModules)(f()(t,!!o&&"form-inline"),n);return s.a.createElement(i,Object(a.a)({},c,{ref:l,className:u}))},t}(l.Component);v.propTypes=m,v.defaultProps={tag:"form"},t.a=v},848:function(e,t,n){"use strict";var a=n(6),r=n(8),o=n(1),i=n.n(o),l=n(2),s=n.n(l),c=n(5),u=n.n(c),d=n(4),f=["className","cssModule","row","disabled","check","inline","tag"],p={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:d.tagPropType,className:s.a.string,cssModule:s.a.object},h=function(e){var t=e.className,n=e.cssModule,o=e.row,l=e.disabled,s=e.check,c=e.inline,p=e.tag,h=Object(r.a)(e,f),m=Object(d.mapToCssModules)(u()(t,!!o&&"row",s?"form-check":"form-group",!(!s||!c)&&"form-check-inline",!(!s||!l)&&"disabled"),n);return"fieldset"===p&&(h.disabled=l),i.a.createElement(p,Object(a.a)({},h,{className:m}))};h.propTypes=p,h.defaultProps={tag:"div"},t.a=h}}]);
//# sourceMappingURL=222.5e581b5e.chunk.js.map