/*! For license information please see 240.1bb17541.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[240],{2495:function(e,t,n){"use strict";n.r(t),n.d(t,"EditInventory",(function(){return S}));var r=n(31),a=n(81),o=n(47),i=n(11),s=n(12),c=n(74),l=n(14),u=n(13),f=n(1),d=n.n(f),h=n(820),p=n(818),m=n(819),v=n(196),g=n(823),y=n(842),b=n(849),w=n(841),O=n(836),E=(n(22),n(188)),j=n(63),x=n(839),k=n.n(x);function N(){N=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(T){c=function(e,t,n){return e[t]=n}}function l(e,t,n,a){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),s=new k(a||[]);return r(i,"_invoke",{value:O(e,n,s)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=l;var f={};function d(){}function h(){}function p(){}var m={};c(m,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==t&&n.call(g,o)&&(m=g);var y=p.prototype=d.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,s){var c=u(e[a],e,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function O(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=E(i,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function E(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,s,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),c(y,s,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onChangeHandler3=function(e){var t=Array.from(e.target.files);console.log(t),r.setState({selectedFile3:t})},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(o.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){var t,n;e.preventDefault();var a=(null===(t=r.props)||void 0===t?void 0:t.match.params).id,o=JSON.parse(localStorage.getItem("userData")),i=new FormData;console.log(a),i.append("user_id",null===o||void 0===o||null===(n=o.Userinfo)||void 0===n?void 0:n.id),i.append("quantity",r.state.stock),i.append("HSN_SAC",r.state.Inventory),i.append("product_id",a),E.a.post("/updateinventory",i).then((function(e){console.log(e),e.data.success&&(k()("Success!","You Inventory has been Updated","success"),r.props.history.goBack())})).catch((function(e){console.log(e),k()("Some thing went wrong please try again after some time")}))},r.state={category_name:"",ViewoneProduct:{},P_Title:"",Price:"",Inventory:"",stock:"",formValues:[{PName:"",price:""}],DiscountPrice:"",Addmore:!1,rowData:[],description:"",variety:"",shipmentfee:"",Tags:"",taxrate:"",status:"",selectedFile3:[],selectedName3:""},r.handleSubmit=r.handleSubmit.bind(Object(c.a)(r)),r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(a.a)(N().mark((function e(){var t,n,r,a,o,i,s,c,l,u,f;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=null===(t=this.props)||void 0===t?void 0:t.match.params,f=u.id,console.log(f),console.log(null===(n=this.props)||void 0===n||null===(r=n.location)||void 0===r?void 0:r.state),this.setState({Inventory:null===(a=this.props)||void 0===a||null===(o=a.location)||void 0===o||null===(i=o.state)||void 0===i?void 0:i.HSN_SAC}),this.setState({stock:null===(s=this.props)||void 0===s||null===(c=s.location)||void 0===c||null===(l=c.state)||void 0===l?void 0:l.quantity});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){var n=this.state.formValues;n[e][t.target.name]=t.target.value,this.setState({formValues:n})}},{key:"addFormFields",value:function(){this.setState({formValues:[].concat(Object(r.a)(this.state.formValues),[{PName:"",price:""}])}),this.handleSubmit()}},{key:"removeFormFields",value:function(e){var t=this.state.formValues;t.splice(e,1),this.setState({formValues:t})}},{key:"handleSubmit",value:function(){console.log(this.state.formValues)}},{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement(h.a,null,d.a.createElement("h1",{className:"p-2 "}," Update Inventory"),d.a.createElement(p.a,{className:"m-2"},d.a.createElement(m.a,null,d.a.createElement("h2",null,"Existing Information")),d.a.createElement(m.a,null,d.a.createElement(j.b,{render:function(e){var t=e.history;return d.a.createElement(v.a,{className:" float-right",color:"danger",onClick:function(){return t.goBack()}},"Back")}}))),d.a.createElement(g.a,null,d.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(p.a,null,d.a.createElement(m.a,{lg:"6",md:"6"},d.a.createElement(b.a,null,d.a.createElement(w.a,null," Quantity"),d.a.createElement(O.a,{type:"text",placeholder:"Quantity In Number",name:"stock",value:this.state.stock,onChange:function(t){var n=t.target.value.replace(/\D/g,"");e.setState({stock:n})}}))),d.a.createElement(m.a,{lg:"6",md:"6"},d.a.createElement(b.a,null,d.a.createElement(w.a,null," HSN / SAC "),d.a.createElement(O.a,{type:"text",placeholder:"Enter here",name:"Inventory",value:this.state.Inventory,onChange:this.changeHandler})))),d.a.createElement(p.a,null,d.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Inventory"))))))}}]),n}(f.Component);t.default=S},836:function(e,t,n){"use strict";var r=n(6),a=n(8),o=n(18),i=n(19),s=n(1),c=n.n(s),l=n(2),u=n.n(l),f=n(5),d=n.n(f),h=n(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:h.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.focus=n.focus.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,i=e.bsSize,s=e.valid,l=e.invalid,u=e.tag,f=e.addon,m=e.plaintext,v=e.innerRef,g=Object(a.a)(e,p),y=["radio","checkbox"].indexOf(o)>-1,b=new RegExp("\\D","g"),w=u||("select"===o||"textarea"===o?o:"input"),O="form-control";m?(O+="-plaintext",w=u||"input"):"file"===o?O+="-file":"range"===o?O+="-range":y&&(O=f?null:"form-check-input"),g.size&&b.test(g.size)&&(Object(h.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var E=Object(h.mapToCssModules)(d()(t,l&&"is-invalid",s&&"is-valid",!!i&&"form-control-"+i,O),n);return("input"===w||u&&"function"===typeof u)&&(g.type=o),g.children&&!m&&"select"!==o&&"string"===typeof w&&"select"!==w&&(Object(h.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(w,Object(r.a)({},g,{ref:v,className:E,"aria-invalid":l}))},t}(c.a.Component);v.propTypes=m,v.defaultProps={type:"text"},t.a=v},841:function(e,t,n){"use strict";var r=n(6),a=n(8),o=n(1),i=n.n(o),s=n(2),c=n.n(s),l=n(5),u=n.n(l),f=n(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],h=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:h,order:h,offset:h})]),m={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:f.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},v={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},y=function(e){var t=e.className,n=e.cssModule,o=e.hidden,s=e.widths,c=e.tag,l=e.check,h=e.size,p=e.for,m=Object(a.a)(e,d),v=[];s.forEach((function(t,r){var a=e[t];if(delete m[t],a||""===a){var o,i=!r;if(Object(f.isObject)(a)){var s,c=i?"-":"-"+t+"-";o=g(i,t,a.size),v.push(Object(f.mapToCssModules)(u()(((s={})[o]=a.size||""===a.size,s["order"+c+a.order]=a.order||0===a.order,s["offset"+c+a.offset]=a.offset||0===a.offset,s))),n)}else o=g(i,t,a),v.push(o)}}));var y=Object(f.mapToCssModules)(u()(t,!!o&&"sr-only",!!l&&"form-check-label",!!h&&"col-form-label-"+h,v,!!v.length&&"col-form-label"),n);return i.a.createElement(c,Object(r.a)({htmlFor:p},m,{className:y}))};y.propTypes=m,y.defaultProps=v,t.a=y},842:function(e,t,n){"use strict";var r=n(6),a=n(8),o=n(18),i=n(19),s=n(1),c=n.n(s),l=n(2),u=n.n(l),f=n(5),d=n.n(f),h=n(4),p=["className","cssModule","inline","tag","innerRef"],m={children:u.a.node,inline:u.a.bool,tag:h.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.submit=n.submit.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.inline,i=e.tag,s=e.innerRef,l=Object(a.a)(e,p),u=Object(h.mapToCssModules)(d()(t,!!o&&"form-inline"),n);return c.a.createElement(i,Object(r.a)({},l,{ref:s,className:u}))},t}(s.Component);v.propTypes=m,v.defaultProps={tag:"form"},t.a=v},849:function(e,t,n){"use strict";var r=n(6),a=n(8),o=n(1),i=n.n(o),s=n(2),c=n.n(s),l=n(5),u=n.n(l),f=n(4),d=["className","cssModule","row","disabled","check","inline","tag"],h={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:f.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.row,s=e.disabled,c=e.check,l=e.inline,h=e.tag,p=Object(a.a)(e,d),m=Object(f.mapToCssModules)(u()(t,!!o&&"row",c?"form-check":"form-group",!(!c||!l)&&"form-check-inline",!(!c||!s)&&"disabled"),n);return"fieldset"===h&&(p.disabled=s),i.a.createElement(h,Object(r.a)({},p,{className:m}))};p.propTypes=h,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=240.1bb17541.chunk.js.map