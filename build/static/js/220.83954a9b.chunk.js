/*! For license information please see 220.83954a9b.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[220],{2356:function(e,t,a){"use strict";a.r(t);var r=a(81),n=a(11),i=a(12),o=a(14),l=a(13),c=a(1),s=a.n(c),u=a(818),d=a(819),f=a(820),p=a(196),m=a(823),v=a(816),h=a(827),g=a(814),y=a(813),w=a(808),E=a(836),b=a(63),S=a(188),C=a(103),x=a(838),N=a(318),L=a(453),P=a(274),z=(a(22),a(835),a(832),a(848)),k=a.n(z);function O(){O=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(z){c=function(e,t,a){return e[t]=a}}function s(e,t,a,n){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),l=new N(n||[]);return r(o,"_invoke",{value:b(e,a,l)}),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(z){return{type:"throw",arg:z}}}e.wrap=s;var d={};function f(){}function p(){}function m(){}var v={};c(v,i,(function(){return this}));var h=Object.getPrototypeOf,g=h&&h(h(L([])));g&&g!==t&&a.call(g,i)&&(v=g);var y=m.prototype=f.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;r(this,"_invoke",{value:function(r,i){function o(){return new t((function(n,o){!function r(n,i,o,l){var c=u(e[n],e,i);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,o,l)}),(function(e){r("throw",e,o,l)})):t.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return r("throw",e,o,l)}))}l(c.arg)}(r,i,n,o)}))}return n=n?n.then(o,o):o()}})}function b(e,t,a){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return P()}for(a.method=n,a.arg=i;;){var o=a.delegate;if(o){var l=S(o,a);if(l){if(l===d)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=u(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}function S(e,t){var a=t.method,r=e.iterator[a];if(void 0===r)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:p,configurable:!0}),p.displayName=c(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,r,n,i){void 0===i&&(i=Promise);var o=new E(s(t,a,r,n),i);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),c(y,l,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},e}var j=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={rowData:[],Viewpermisson:null,Editpermisson:null,Createpermisson:null,Deletepermisson:null,paginationPageSize:8,currenPageSize:"",getPageSize:"",searchvalue:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150},{headerName:"Actions",field:"sortorder",width:150,cellRendererFramework:function(t){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(b.b,{render:function(e){var a=e.history;return s.a.createElement(N.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){var e;localStorage.setItem("SelectedCmsdata",JSON.stringify(t.data)),a.push("/app/mmbaic/slider/EditCMS/".concat(null===(e=t.data)||void 0===e?void 0:e.id))}})}}),s.a.createElement(b.b,{render:function(a){a.history;return s.a.createElement(L.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}})}}))}},{headerName:"Type",field:"data.type",filter:!0,width:200,filterParams:{textCustomComparator:function(e,t,a){return t.toLowerCase().includes(a.toLowerCase())}},cellRendererFramework:function(e){var t,a;return s.a.createElement("div",null,s.a.createElement("span",null,null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.type))}},{headerName:"Title",field:"data.title",filter:!0,width:200,filterParams:{textCustomComparator:function(e,t,a){return t.toLowerCase().includes(a.toLowerCase())}},cellRendererFramework:function(e){var t,a;return s.a.createElement("div",null,s.a.createElement("span",null,null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.title))}},{headerName:"Image",field:"data.image",filter:!1,width:200,setColumnVisible:!1,filterParams:{textCustomComparator:function(e,t,a){return t.toLowerCase().includes(a.toLowerCase())}},cellRendererFramework:function(e){var t,a,r,n;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},(null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.image)&&s.a.createElement("img",{className:" rounded-circle  mr-3",src:null===(r=e.data)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.image,alt:"user avatar",height:"40",width:"40"}))}},{headerName:"Page Name",field:"data.pagename",filter:!0,width:200,filterParams:{textCustomComparator:function(e,t,a){return t.toLowerCase().includes(a.toLowerCase())}},cellRendererFramework:function(e){var t,a;return s.a.createElement("div",null,s.a.createElement("span",null,null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.pagename))}},{headerName:"Notice",field:"data.notice",filter:!0,width:200,filterParams:{textCustomComparator:function(e,t,a){return t.toLowerCase().includes(a.toLowerCase())}},cellRendererFramework:function(e){var t,a;return s.a.createElement("div",null,s.a.createElement("span",null,null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.notice))}},{headerName:"Text",field:"data.description",filterParams:{textCustomComparator:function(e,t,a){return t.toLowerCase().includes(a.toLowerCase())}},filter:!0,width:200,cellRendererFramework:function(e){var t,a;return s.a.createElement("div",null,s.a.createElement("span",null,k()(null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.description)))}},{headerName:"Status",field:"data.IsActive",filter:!0,width:150,filterParams:{textCustomComparator:function(e,t,a){return t.toLowerCase().includes(a.toLowerCase())}},cellRendererFramework:function(e){var t,a,r,n,i,o,l,c;return"Active"==(null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.IsActive)?s.a.createElement("div",{className:"badge badge-pill badge-success"},null===(r=e.data)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.IsActive):"Inactive"==(null===(i=e.data)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.IsActive)?s.a.createElement("div",{className:"badge badge-pill badge-warning"},null===(l=e.data)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.IsActive):null}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(O().mark((function e(){var t,a,r,n,i,o,l=this;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.getItem("userData")),i=null===n||void 0===n||null===(t=n.role)||void 0===t?void 0:t.find((function(e){return"CMS Management"===(null===e||void 0===e?void 0:e.pageName)})),this.setState({Viewpermisson:null===i||void 0===i?void 0:i.permission.includes("View")}),this.setState({Createpermisson:null===i||void 0===i?void 0:i.permission.includes("Create")}),this.setState({Editpermisson:null===i||void 0===i?void 0:i.permission.includes("Edit")}),this.setState({Deletepermisson:null===i||void 0===i?void 0:i.permission.includes("Delete")}),(o=new FormData).append("user_id",null===n||void 0===n||null===(a=n.Userinfo)||void 0===a?void 0:a.id),o.append("role",null===n||void 0===n||null===(r=n.Userinfo)||void 0===r?void 0:r.role),e.next=11,S.a.post("/getCmsList",o).then((function(e){var t,a,r=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.content;r&&l.setState({rowData:r})}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(e){S.a.delete("/admin/del_banner/".concat(e)).then((function(e){console.log(e)}),(function(e){console.log(e)}))}},{key:"render",value:function(){var e,t,a,r=this,n=this.state,i=n.rowData,o=n.columnDefs,l=n.defaultColDef;return s.a.createElement(u.a,{className:"app-user-list"},s.a.createElement(d.a,{sm:"12"},s.a.createElement(f.a,null,s.a.createElement(u.a,{className:"m-2"},s.a.createElement(d.a,null,s.a.createElement("h1",{sm:"6",className:"float-left"},"CMS List")),s.a.createElement(d.a,null,s.a.createElement(b.b,{render:function(e){var t=e.history;return s.a.createElement(p.a,{className:"btn btn-success float-right",color:"primary",onClick:function(){return t.push("/app/mmbaic/slider/addSlider")}},"Add CMS")}}))),s.a.createElement(m.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(v.a,{className:"p-1 ag-dropdown"},s.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",(null===(e=this.state.rowData)||void 0===e?void 0:e.length)-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:null===(t=this.state.rowData)||void 0===t?void 0:t.length," ","of ",null===(a=this.state.rowData)||void 0===a?void 0:a.length,s.a.createElement(P.a,{className:"ml-50",size:15})),s.a.createElement(g.a,{right:!0},s.a.createElement(y.a,{tag:"div",onClick:function(){return r.filterSize(10)}},"10"),s.a.createElement(y.a,{tag:"div",onClick:function(){return r.filterSize(20)}},"20"),s.a.createElement(y.a,{tag:"div",onClick:function(){return r.filterSize(50)}},"50"),s.a.createElement(y.a,{tag:"div",onClick:function(){return r.filterSize(100)}},"100"),s.a.createElement(y.a,{tag:"div",onClick:function(){return r.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(w.a,{type:"select",className:"form-control",onChange:function(e){r.setState({searchvalue:e.target.value}),r.updateSearchQuery(e.target.value)},value:this.state.searchvalue},s.a.createElement("option",{value:""},"--Select--"),s.a.createElement("option",{value:"Headernotice"},"Top Header"),s.a.createElement("option",{value:"Header"},"Header"),s.a.createElement("option",{value:"Slider"},"Slider"),s.a.createElement("option",{value:"Aboutus"},"About Us"),s.a.createElement("option",{value:"Membership"},"Membership"),s.a.createElement("option",{value:"Opportunity"},"Opportunity"),s.a.createElement("option",{value:"Testimonials"},"Testimonials"),s.a.createElement("option",{value:"ContactUS"},"ContactUS"),s.a.createElement("option",{value:"HowItWorks"},"How It Works"),s.a.createElement("option",{value:"Blogs"},"Blogs"),s.a.createElement("option",{value:"Footer"},"Footer"))),s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(E.a,{placeholder:"search...",onChange:function(e){return r.updateSearchQuery(e.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return r.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(C.a.Consumer,null,(function(e){return s.a.createElement(x.AgGridReact,{gridOptions:{quickFilter:!0},rowSelection:"multiple",defaultColDef:l,columnDefs:o,rowData:i,onGridReady:r.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:r.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===e.state.direction})})))))))}}]),a}(s.a.Component);t.default=j},832:function(e,t,a){},836:function(e,t,a){"use strict";var r=a(6),n=a(8),i=a(18),o=a(19),l=a(1),c=a.n(l),s=a(2),u=a.n(s),d=a(5),f=a.n(d),p=a(4),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],v={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,o=e.bsSize,l=e.valid,s=e.invalid,u=e.tag,d=e.addon,v=e.plaintext,h=e.innerRef,g=Object(n.a)(e,m),y=["radio","checkbox"].indexOf(i)>-1,w=new RegExp("\\D","g"),E=u||("select"===i||"textarea"===i?i:"input"),b="form-control";v?(b+="-plaintext",E=u||"input"):"file"===i?b+="-file":"range"===i?b+="-range":y&&(b=d?null:"form-check-input"),g.size&&w.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var S=Object(p.mapToCssModules)(f()(t,s&&"is-invalid",l&&"is-valid",!!o&&"form-control-"+o,b),a);return("input"===E||u&&"function"===typeof u)&&(g.type=i),g.children&&!v&&"select"!==i&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(r.a)({},g,{ref:h,className:S,"aria-invalid":s}))},t}(c.a.Component);h.propTypes=v,h.defaultProps={type:"text"},t.a=h},850:function(e,t){}}]);
//# sourceMappingURL=220.83954a9b.chunk.js.map