/*! For license information please see 135.63129542.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[135],{2354:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var r=n(81),a=n(47),o=n(11),i=n(12),s=n(14),c=n(13),l=n(1),u=n.n(l),f=n(820),h=n(818),d=n(819),p=n(196),g=n(821),m=n(823),v=n(838),y=n(837),b=n(835),O=n(188),E=n(840),w=n.n(E),L=n(889),C=n(884),R=n(885),N=n.n(R),T=(n(886),n(855),n(63));function S(){S=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(x){c=function(t,e,n){return t[e]=n}}function l(t,e,n,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),s=new R(a||[]);return r(i,"_invoke",{value:E(t,n,s)}),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(x){return{type:"throw",arg:x}}}t.wrap=l;var f={};function h(){}function d(){}function p(){}var g={};c(g,o,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(N([])));v&&v!==e&&n.call(v,o)&&(g=v);var y=p.prototype=h.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e((function(a,i){!function r(a,o,i,s){var c=u(t[a],t,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function E(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return T()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=w(i,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function w(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=u(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:d,configurable:!0}),d.displayName=c(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(O.prototype),c(O.prototype,i,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new O(l(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),c(y,s,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=N,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;C(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}var x=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).onEditorStateChange=function(t){r.setState({editorState:t,description:N()(Object(L.convertToRaw)(t.getCurrentContent()))})},r.onChangeHandler=function(t){r.setState({selectedFile:t.target.files[0]}),r.setState({selectedName:t.target.files[0].name})},r.changeHandler1=function(t){r.setState({status:t.target.value})},r.changeHandler=function(t){r.setState(Object(a.a)({},t.target.name,t.target.value)),console.log(r.state)},r.submitHandler=function(t){var e,n=r.props.match.params.id;console.log(n),t.preventDefault();var a=new FormData,o=JSON.parse(localStorage.getItem("userData"));a.append("user_id",null===o||void 0===o||null===(e=o.Userinfo)||void 0===e?void 0:e.id),a.append("cat_id",r.state.CourserCategory),a.append("course_id",n),a.append("title",r.state.Title),a.append("lesson_url",r.state.CourseURL),a.append("description",r.state.description),a.append("status",r.state.status),null!==r.state.selectedFile&&a.append("images",r.state.selectedFile),O.a.post("/addLesson",a).then((function(t){console.log(t),w()("Successful!","Your Lesson has been Added","success"),r.props.history.push("/app/mmbaic/courseslist")})).catch((function(t){console.log(t)}))},r.state={Title:"",heading:"",shortDescription:"",CategoyList:[],CourseURL:"",CourserCategory:"",iamgeurl:"",CourseDescription:"",selectedFile:void 0,selectedName:"",status:"",description:"",editorState:L.EditorState.createEmpty()},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(r.a)(S().mark((function t(){var e,n,r,a,o=this;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props.match.params.id,console.log(e),0!=e){t.next=6;break}this.setState({heading:"Add"}),t.next=13;break;case 6:return this.setState({heading:"Add More"}),r=new FormData,a=JSON.parse(localStorage.getItem("userData")),r.append("user_id",null===a||void 0===a||null===(n=a.Userinfo)||void 0===n?void 0:n.id),r.append("edit_id",e),t.next=13,O.a.post("/editviewCourse",r).then((function(t){console.log(null===t||void 0===t?void 0:t.data.data[0]);var e=null===t||void 0===t?void 0:t.data.data[0],n=null===e||void 0===e?void 0:e.description,r=Object(L.convertFromHTML)(n),a=L.ContentState.createFromBlockArray(r.contentBlocks,r.entityMap),i=L.EditorState.createWithContent(a);console.log(i),o.setState({CourserCategory:null===e||void 0===e?void 0:e.cat_id})})).catch((function(t){console.log(t)}));case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,n=(e.banner_title,e.Notice,e.Title),r=(e.CategoyList,e.editorState),a=(e.shortDescription,e.CourserCategory,e.CourseURL),o=e.heading;return u.a.createElement("div",null,u.a.createElement(f.a,null,u.a.createElement("div",{className:"container mt-1"},u.a.createElement(h.a,null,u.a.createElement(d.a,null,u.a.createElement("h2",null,o," Lessons")),u.a.createElement(d.a,null,u.a.createElement("div",{className:"d-flex float-right"},u.a.createElement(T.b,{render:function(t){var e=t.history;return u.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return e.push("/app/mmbaic/courseslist")}},"Back")}}))))),u.a.createElement(g.a,null),u.a.createElement(m.a,null,u.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(h.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Title*"),u.a.createElement(b.a,{required:!0,type:"text",className:"form-control",name:"Title",placeholder:"Enter Course Title",value:n,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Course URL *"),u.a.createElement(b.a,{type:"text",className:"form-control",name:"CourseURL",placeholder:"Enter URL",value:a,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Image"),u.a.createElement(b.a,{type:"file",className:"form-control",onChange:this.onChangeHandler})),u.a.createElement(d.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},u.a.createElement(y.a,null,"Enter Details"),u.a.createElement(C.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:r,onEditorStateChange:this.onEditorStateChange}))),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(e){return t.changeHandler1(e)}},u.a.createElement("input",{style:{marginRight:"3px"},checked:"Active"==this.state.status,type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},checked:"Inactive"==this.state.status,type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),u.a.createElement(h.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Course")))))))}}]),n}(l.Component)},835:function(t,e,n){"use strict";var r=n(6),a=n(7),o=n(18),i=n(19),s=n(1),c=n.n(s),l=n(2),u=n.n(l),f=n(5),h=n.n(f),d=n(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(t){function e(e){var n;return(n=t.call(this,e)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.focus=n.focus.bind(Object(o.a)(n)),n}Object(i.a)(e,t);var n=e.prototype;return n.getRef=function(t){this.props.innerRef&&this.props.innerRef(t),this.ref=t},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var t=this.props,e=t.className,n=t.cssModule,o=t.type,i=t.bsSize,s=t.valid,l=t.invalid,u=t.tag,f=t.addon,g=t.plaintext,m=t.innerRef,v=Object(a.a)(t,p),y=["radio","checkbox"].indexOf(o)>-1,b=new RegExp("\\D","g"),O=u||("select"===o||"textarea"===o?o:"input"),E="form-control";g?(E+="-plaintext",O=u||"input"):"file"===o?E+="-file":"range"===o?E+="-range":y&&(E=f?null:"form-check-input"),v.size&&b.test(v.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=v.size,delete v.size);var w=Object(d.mapToCssModules)(h()(e,l&&"is-invalid",s&&"is-valid",!!i&&"form-control-"+i,E),n);return("input"===O||u&&"function"===typeof u)&&(v.type=o),v.children&&!g&&"select"!==o&&"string"===typeof O&&"select"!==O&&(Object(d.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),c.a.createElement(O,Object(r.a)({},v,{ref:m,className:w,"aria-invalid":l}))},e}(c.a.Component);m.propTypes=g,m.defaultProps={type:"text"},e.a=m},837:function(t,e,n){"use strict";var r=n(6),a=n(7),o=n(1),i=n.n(o),s=n(2),c=n.n(s),l=n(5),u=n.n(l),f=n(4),h=["className","cssModule","hidden","widths","tag","check","size","for"],d=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:d,order:d,offset:d})]),g={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:f.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},m={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(t,e,n){return!0===n||""===n?t?"col":"col-"+e:"auto"===n?t?"col-auto":"col-"+e+"-auto":t?"col-"+n:"col-"+e+"-"+n},y=function(t){var e=t.className,n=t.cssModule,o=t.hidden,s=t.widths,c=t.tag,l=t.check,d=t.size,p=t.for,g=Object(a.a)(t,h),m=[];s.forEach((function(e,r){var a=t[e];if(delete g[e],a||""===a){var o,i=!r;if(Object(f.isObject)(a)){var s,c=i?"-":"-"+e+"-";o=v(i,e,a.size),m.push(Object(f.mapToCssModules)(u()(((s={})[o]=a.size||""===a.size,s["order"+c+a.order]=a.order||0===a.order,s["offset"+c+a.offset]=a.offset||0===a.offset,s))),n)}else o=v(i,e,a),m.push(o)}}));var y=Object(f.mapToCssModules)(u()(e,!!o&&"sr-only",!!l&&"form-check-label",!!d&&"col-form-label-"+d,m,!!m.length&&"col-form-label"),n);return i.a.createElement(c,Object(r.a)({htmlFor:p},g,{className:y}))};y.propTypes=g,y.defaultProps=m,e.a=y},838:function(t,e,n){"use strict";var r=n(6),a=n(7),o=n(18),i=n(19),s=n(1),c=n.n(s),l=n(2),u=n.n(l),f=n(5),h=n.n(f),d=n(4),p=["className","cssModule","inline","tag","innerRef"],g={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},m=function(t){function e(e){var n;return(n=t.call(this,e)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.submit=n.submit.bind(Object(o.a)(n)),n}Object(i.a)(e,t);var n=e.prototype;return n.getRef=function(t){this.props.innerRef&&this.props.innerRef(t),this.ref=t},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var t=this.props,e=t.className,n=t.cssModule,o=t.inline,i=t.tag,s=t.innerRef,l=Object(a.a)(t,p),u=Object(d.mapToCssModules)(h()(e,!!o&&"form-inline"),n);return c.a.createElement(i,Object(r.a)({},l,{ref:s,className:u}))},e}(s.Component);m.propTypes=g,m.defaultProps={tag:"form"},e.a=m},855:function(t,e,n){},885:function(t,e,n){t.exports=function(){"use strict";function t(t,e){if(t)for(var n in t)({}).hasOwnProperty.call(t,n)&&e(n,t[n])}var e={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function n(t){return t&&e[t]}function r(e){var n="";return t(e,(function(t,e){e&&(n+="".concat(t,":").concat(e,";"))})),n}function a(t,e){var n={};return t.COLOR[e]&&(n.COLOR=t.COLOR[e]),t.BGCOLOR[e]&&(n.BGCOLOR=t.BGCOLOR[e]),t.FONTSIZE[e]&&(n.FONTSIZE=t.FONTSIZE[e]),t.FONTFAMILY[e]&&(n.FONTFAMILY=t.FONTFAMILY[e]),t.UNDERLINE[e]&&(n.UNDERLINE=!0),t.ITALIC[e]&&(n.ITALIC=!0),t.BOLD[e]&&(n.BOLD=!0),t.STRIKETHROUGH[e]&&(n.STRIKETHROUGH=!0),t.CODE[e]&&(n.CODE=!0),t.SUBSCRIPT[e]&&(n.SUBSCRIPT=!0),t.SUPERSCRIPT[e]&&(n.SUPERSCRIPT=!0),n}function o(t,e,n){var r=!0;return n>0&&n<t.length?e.forEach((function(e){r=r&&t[e][n]===t[e][n-1]})):r=!1,r}function i(t,e,n,r){var a=t[e];if("function"===typeof r){var o=r(a,n);if(o)return o}if("MENTION"===a.type)return'<a href="'.concat(a.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(a.data.value,'">').concat(n,"</a>");if("LINK"===a.type){var i=a.data.targetOption||"_self";return'<a href="'.concat(a.data.url,'" target="').concat(i,'">').concat(n,"</a>")}if("IMAGE"===a.type){var s=a.data.alignment;return s&&s.length?'<div style="text-align:'.concat(s,';"><img src="').concat(a.data.src,'" alt="').concat(a.data.alt,'" style="height: ').concat(a.data.height,";width: ").concat(a.data.width,'"/></div>'):'<img src="'.concat(a.data.src,'" alt="').concat(a.data.alt,'" style="height: ').concat(a.data.height,";width: ").concat(a.data.width,'"/>')}return"EMBEDDED_LINK"===a.type?'<iframe width="'.concat(a.data.width,'" height="').concat(a.data.height,'" src="').concat(a.data.src,'" frameBorder="0"></iframe>'):n}function s(t,e,n,r){var i=[],s=Array.from(t.text);if(s.length>0)for(var c,l=function(t){var e=t.text,n=t.inlineStyleRanges,r={BOLD:new Array(e.length),ITALIC:new Array(e.length),UNDERLINE:new Array(e.length),STRIKETHROUGH:new Array(e.length),CODE:new Array(e.length),SUPERSCRIPT:new Array(e.length),SUBSCRIPT:new Array(e.length),COLOR:new Array(e.length),BGCOLOR:new Array(e.length),FONTSIZE:new Array(e.length),FONTFAMILY:new Array(e.length),length:e.length};return n&&n.length>0&&n.forEach((function(t){for(var e=t.offset,n=e+t.length,a=e;a<n;a+=1)0===t.style.indexOf("color-")?r.COLOR[a]=t.style.substring(6):0===t.style.indexOf("bgcolor-")?r.BGCOLOR[a]=t.style.substring(8):0===t.style.indexOf("fontsize-")?r.FONTSIZE[a]=t.style.substring(9):0===t.style.indexOf("fontfamily-")?r.FONTFAMILY[a]=t.style.substring(11):r[t.style]&&(r[t.style][a]=!0)})),r}(t),u=n;u<r;u+=1)u!==n&&o(l,e,u)?(c.text.push(s[u]),c.end=u+1):(c={styles:a(l,u),text:[s[u]],start:u,end:u+1},i.push(c));return i}function c(e,n){var r=s(e,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],n.start,n.end),a="";return r.forEach((function(e){a+=function(e){var n=e.styles,r=function(t){return t&&t.length>0?t.map((function(t){switch(t){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return t}})).join(""):""}(e.text);return t(n,(function(t,e){r=function(t,e){return"BOLD"===t?"<strong>".concat(e,"</strong>"):"ITALIC"===t?"<em>".concat(e,"</em>"):"UNDERLINE"===t?"<ins>".concat(e,"</ins>"):"STRIKETHROUGH"===t?"<del>".concat(e,"</del>"):"CODE"===t?"<code>".concat(e,"</code>"):"SUPERSCRIPT"===t?"<sup>".concat(e,"</sup>"):"SUBSCRIPT"===t?"<sub>".concat(e,"</sub>"):e}(t,r)})),r}(e)})),a=function(t,e){if(t&&(t.COLOR||t.BGCOLOR||t.FONTSIZE||t.FONTFAMILY)){var n='style="';return t.COLOR&&(n+="color: ".concat(t.COLOR,";")),t.BGCOLOR&&(n+="background-color: ".concat(t.BGCOLOR,";")),t.FONTSIZE&&(n+="font-size: ".concat(t.FONTSIZE).concat(/^\d+$/.test(t.FONTSIZE)?"px":"",";")),t.FONTFAMILY&&(n+="font-family: ".concat(t.FONTFAMILY,";")),"<span ".concat(n+='"',">").concat(e,"</span>")}return e}(n.styles,a)}function l(t,e,n,r){var a=[],o=function(t,e){var n=[],r=0,a=t.entityRanges.map((function(t){return{offset:t.offset,length:t.length,key:t.key,type:"ENTITY"}}));return(a=(a=a.concat(function(t,e){var n=[];if(e)for(var r=0,a=0,o=t,i=e.trigger||"#",s=e.separator||" ";o.length>0&&a>=0;)if(o[0]===i?(a=0,r=0,o=o.substr(i.length)):(a=o.indexOf(s+i))>=0&&(o=o.substr(a+(s+i).length),r+=a+s.length),a>=0){var c=o.indexOf(s)>=0?o.indexOf(s):o.length,l=o.substr(0,c);l&&l.length>0&&n.push({offset:r,length:l.length+i.length,type:"HASHTAG"}),r+=i.length}return n}(t.text,e))).sort((function(t,e){return t.offset-e.offset}))).forEach((function(t){t.offset>r&&n.push({start:r,end:t.offset}),n.push({start:t.offset,end:t.offset+t.length,entityKey:t.key,type:t.type}),r=t.offset+t.length})),r<t.text.length&&n.push({start:r,end:t.text.length}),n}(t,n);return o.forEach((function(n,l){var u=function(t,e,n,r){var a=[];s(t,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],n.start,n.end).forEach((function(e){a.push(c(t,e))}));var o=a.join("");return"ENTITY"===n.type?void 0!==n.entityKey&&null!==n.entityKey&&(o=i(e,n.entityKey,o,r)):"HASHTAG"===n.type&&(o='<a href="'.concat(o,'" class="wysiwyg-hashtag">').concat(o,"</a>")),o}(t,e,n,r);0===l&&(u=function(t){if(t){for(var e=t,n=0;n<e.length&&" "===t[n];n+=1)e=e.replace(" ","&nbsp;");return e}return t}(u)),l===o.length-1&&(u=function(t){if(t){for(var e=t,n=e.length-1;n>=0&&" "===e[n];n-=1)e="".concat(e.substring(0,n),"&nbsp;").concat(e.substring(n+1));return e}return t}(u)),a.push(u)})),a.join("")}function u(t,e,a,o,i){var s,c=[],f=[];return t.forEach((function(t){var h=!1;if(s?s.type!==t.type?(c.push("</".concat(n(s.type),">\n")),c.push("<".concat(n(t.type),">\n"))):s.depth===t.depth?f&&f.length>0&&(c.push(u(f,e,a,o,i)),f=[]):(h=!0,f.push(t)):c.push("<".concat(n(t.type),">\n")),!h){c.push("<li");var d=r(t.data);d&&c.push(' style="'.concat(d,'"')),o&&c.push(' dir = "auto"'),c.push(">"),c.push(l(t,e,a,i)),c.push("</li>\n"),s=t}})),f&&f.length>0&&c.push(u(f,e,a,o,i)),c.push("</".concat(n(s.type),">\n")),c.join("")}return function(t,e,a,o){var s=[];if(t){var c=t.blocks,f=t.entityMap;if(c&&c.length>0){var h=[];if(c.forEach((function(t){if("unordered-list-item"===(p=t.type)||"ordered-list-item"===p)h.push(t);else{if(h.length>0){var c=u(h,f,e,o);s.push(c),h=[]}var d=function(t,e,a,o,s){var c=[];if(function(t){return t.entityRanges.length>0&&(void 0===(e=t.text)||null===e||0===e.length||0===e.trim().length||"atomic"===t.type);var e}(t))c.push(i(e,t.entityRanges[0].key,void 0,s));else{var u=n(t.type);if(u){c.push("<".concat(u));var f=r(t.data);f&&c.push(' style="'.concat(f,'"')),o&&c.push(' dir = "auto"'),c.push(">"),c.push(l(t,e,a,s)),c.push("</".concat(u,">"))}}return c.push("\n"),c.join("")}(t,f,e,a,o);s.push(d)}var p})),h.length>0){var d=u(h,f,e,a,o);s.push(d),h=[]}}}return s.join("")}}()}}]);
//# sourceMappingURL=135.63129542.chunk.js.map