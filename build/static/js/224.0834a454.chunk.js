(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[224],{1058:function(e,a,t){},2479:function(e,a,t){"use strict";t.r(a);var n=t(11),l=t(12),c=t(14),r=t(13),m=t(1),s=t.n(m),i=t(818),u=t(819),o=t(820),d=t(196),E=t(823),h=(t(22),t(1058),t(832),t(188)),v=t(63),b=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;h.a.get("/admin/viewone_brand/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e,a,t,n;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(i.a,null,s.a.createElement(u.a,{sm:"12"})),s.a.createElement(o.a,{className:"overflow-hidden app-ecommerce-details"},s.a.createElement(i.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View")),s.a.createElement(u.a,null,s.a.createElement(v.b,{render:function(e){var a=e.history;return s.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/brand/brandList")}},"Back")}}))),s.a.createElement(E.a,{className:"pb-0"},s.a.createElement(i.a,{className:"m-2"},s.a.createElement(u.a,{sm:"12",className:"my-1"},s.a.createElement(i.a,{className:"m-3"},s.a.createElement(u.a,{sm:"4"},s.a.createElement("img",{src:null===(e=this.state.data)||void 0===e?void 0:e.image,alt:"aaa",width:"200",height:"200"})),s.a.createElement(u.a,{sm:"8"},s.a.createElement(i.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h6",null,"Brand Name")),s.a.createElement(u.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(a=this.state.data)||void 0===a?void 0:a.brand_name)))),s.a.createElement(i.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h6",null,"Description")),s.a.createElement(u.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(t=this.state.data)||void 0===t?void 0:t.desc)))),s.a.createElement(i.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h6",null,"Status")),s.a.createElement(u.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(n=this.state.data)||void 0===n?void 0:n.status))))))))))))}}]),t}(s.a.Component);a.default=b},832:function(e,a,t){}}]);
//# sourceMappingURL=224.0834a454.chunk.js.map