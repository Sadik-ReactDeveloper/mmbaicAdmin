(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[334],{2321:function(e,t,a){"use strict";a.r(t);var l=a(10),n=a(11),s=a(13),c=a(12),m=a(1),o=a.n(m),i=a(818),d=a(819),r=a(820),b=a(195),h=a(823),v=a(2281),u=(a(186),a(22),a(62)),E=a(39),g=a.n(E),f=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:{}},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log("vendor id ",t),g.a.get("http://3.6.37.16:8000/app/vender_getviewone/".concat(t)).then((function(t){console.log(t.data.data),e.setState({data:t.data.data})})).catch((function(e){console.log(e.response.data)}))}},{key:"render",value:function(){var e,t,a,l,n,s,c,m,E,g,f,N,y,p,x,k,w,_,W,j,C,S,I;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement(d.a,{sm:"12"},o.a.createElement(r.a,null,o.a.createElement(i.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h3",{"col-sm-6":!0,className:"float-left"},"View")),o.a.createElement(d.a,null,o.a.createElement(u.b,{render:function(e){var t=e.history;return o.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/vendor/vendorList")}},"Back")}}))),o.a.createElement(h.a,null,o.a.createElement(v.f,{className:"py-0 h-100"},o.a.createElement(v.g,{className:"justify-content-center align-items-center h-100"},o.a.createElement(v.e,{lg:"12",xl:"12"},o.a.createElement(v.a,null,o.a.createElement("div",{className:"rounded-top text-white d-flex flex-row",style:{backgroundColor:"#000",height:"200px"}},o.a.createElement("div",{className:"ms-4 mt-5 d-flex flex-column",style:{width:"150px"}},o.a.createElement(v.c,{src:null===(e=this.state.data)||void 0===e?void 0:e.vendoor_img,alt:"Generic placeholder image",className:"mt-4 mb-2 img-thumbnail",style:{width:"200px",zIndex:"1"}})),o.a.createElement("div",{className:"ml-2 ms-3",style:{marginTop:"130px"}},o.a.createElement(v.h,{tag:"h5",style:{color:"#FFF"}},null===(t=this.state.data)||void 0===t?void 0:t.name),o.a.createElement(v.d,null,null===(a=this.state.data)||void 0===a?void 0:a.city))),o.a.createElement(v.b,{className:"text-black p-4"},o.a.createElement("div",{className:"mb-5 mt-2"},o.a.createElement("div",{className:"p-4",style:{backgroundColor:"#f8f9fa"}},o.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2 mt-4"},o.a.createElement(v.d,{className:"lead fw-normal mb-0"},"Personal Information")),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Email : ",null===(l=this.state.data)||void 0===l?void 0:l.email),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Mobile No. : ",null===(n=this.state.data)||void 0===n?void 0:n.mobile),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Door No. : ",null===(s=this.state.data)||void 0===s?void 0:s.door_number),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Street : ",null===(c=this.state.data)||void 0===c?void 0:c.street),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Location : ",null===(m=this.state.data)||void 0===m?void 0:m.location),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Pin Code : ",null===(E=this.state.data)||void 0===E?void 0:E.pincode),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2 mt-4"},o.a.createElement(v.d,{className:"lead fw-normal mb-0"},"Service Information")),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Service Location :"," ",null===(g=this.state.data)||void 0===g?void 0:g.service_location),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Service City : ",null===(f=this.state.data)||void 0===f?void 0:f.service_city),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Service PinCode :"," ",null===(N=this.state.data)||void 0===N?void 0:N.service_pincode),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2 mt-4"},o.a.createElement(v.d,{className:"lead fw-normal mb-0"},"Account Information")),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Aadhar Number : ",null===(y=this.state.data)||void 0===y?void 0:y.adhar_no),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"PanCard Number : ",null===(p=this.state.data)||void 0===p?void 0:p.pancard_no),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Account Name : ",null===(x=this.state.data)||void 0===x?void 0:x.cus_name),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Account Number : ",null===(k=this.state.data)||void 0===k?void 0:k.account_no),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"Branch Name : ",null===(w=this.state.data)||void 0===w?void 0:w.branch),o.a.createElement(v.d,{className:"text-black mb-1",style:{fontWeight:"bold"}},"IFSC Number : ",null===(_=this.state.data)||void 0===_?void 0:_.ifsc_code))),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-4"},o.a.createElement(v.d,{className:"lead fw-normal mb-0"},"Document Photos")),o.a.createElement(v.g,null,o.a.createElement(v.e,{className:"mb-2"},o.a.createElement(v.c,{src:null===(W=this.state.data)||void 0===W?void 0:W.adhar_img_front,alt:"No Image",className:"w-100 h-80 rounded-3",style:{height:"50vh"}})),o.a.createElement(v.e,{className:"mb-2"},o.a.createElement(v.c,{src:null===(j=this.state.data)||void 0===j?void 0:j.adhar_img_back,alt:"image 1",className:"w-100 h-80 rounded-3",style:{height:"50vh"}}))),o.a.createElement(v.g,{className:"g-2"},o.a.createElement(v.e,{className:"mb-2"},o.a.createElement(v.c,{src:null===(C=this.state.data)||void 0===C?void 0:C.pancard_img_front,alt:"image 1",className:"w-100 rounded-3",style:{height:"50vh"}})),o.a.createElement(v.e,{className:"mb-2"},o.a.createElement(v.c,{src:null===(S=this.state.data)||void 0===S?void 0:S.pancard_img_back,alt:"image 1",className:"w-100 rounded-3",style:{height:"50vh"}}))),o.a.createElement(v.g,{className:"g-2"},o.a.createElement(v.e,{className:"mb-2"},o.a.createElement(v.c,{src:null===(I=this.state.data)||void 0===I?void 0:I.passbook_img,alt:"image 1",className:"w-100 rounded-3",style:{height:"50vh"}})))))))))))))}}]),a}(o.a.Component);t.default=f}}]);
//# sourceMappingURL=334.4c0864ff.chunk.js.map