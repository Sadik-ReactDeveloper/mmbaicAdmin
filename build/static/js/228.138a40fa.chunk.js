(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[228],{2387:function(e,a,t){"use strict";t.r(a),t.d(a,"EditDriver",(function(){return j}));var n=t(847),l=t(47),s=t(11),r=t(12),i=t(14),c=t(13),o=t(1),d=t.n(o),m=t(819),u=t(820),p=t(818),f=t(196),h=t(823),g=t(842),b=t(840),y=t(835),E=t(808),v=(t(22),t(188)),N=t(63),C=t(839),O=t.n(C),j=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler1=function(e){r.setState({selectedFile1:e.target.files[0]}),r.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler2=function(e){r.setState({selectedFile2:e.target.files[0]}),r.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler3=function(e){r.setState({selectedFile3:e.target.files[0]}),r.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler4=function(e){r.setState({selectedFile4:e.target.files[0]}),r.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler5=function(e){r.setState({selectedFile5:e.target.files[0]}),r.setState({selectedName5:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler6=function(e){r.setState({selectedFile6:e.target.files[0]}),r.setState({selectedName6:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("firstname",r.state.firstname),a.append("lastname",r.state.lastname),a.append("identity_type",r.state.identity_type),a.append("phone_no",r.state.phone_no),a.append("address",r.state.address),a.append("email",r.state.email),a.append("password",r.state.password),null!==r.state.selectedFile1&&a.append("adhar_card_img",r.state.selectedFile1,r.state.selectedName1),null!==r.state.selectedFile2&&a.append("driver_img",r.state.selectedFile2,r.state.selectedName2),null!==r.state.selectedFile3&&a.append("identity_img",r.state.selectedFile3,r.state.selectedName3),null!==r.state.selectedFile4&&a.append("regis_cardImg",r.state.selectedFile4,r.state.selectedName4),null!==r.state.selectedFile5&&a.append("insuranceImg",r.state.selectedFile5,r.state.selectedName5),null!==r.state.selectedFile6&&a.append("licenseImg",r.state.selectedFile6,r.state.selectedName6);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var s=t.value;console.log(s)}}catch(c){l.e(c)}finally{l.f()}var i=r.props.match.params.id;v.a.post("/admin/edit_drive/".concat(i),a).then((function(e){console.log(e.data.data),"success"==e.data.msg&&(O()("Success!","Submitted Successfully","success"),r.props.history.push("/app/freshlist/driver/driverList"))})).catch((function(e){console.log(e.response.data)}))},r.state={data:{},firstname:"",lastname:"",identity_type:"",phone_no:"",address:"",email:"",password:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:"",selectedFile5:null,selectedName5:"",selectedFile6:null,selectedName6:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/admin/viewone_drive/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data,firstname:a.data.data.firstname,lastname:a.data.data.lastname,identity_type:a.data.data.identity_type,phone_no:a.data.data.phone_no,address:a.data.data.address,email:a.data.data.email,password:a.data.data.password})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(m.a,{sm:"12"},d.a.createElement(m.a,null,d.a.createElement("div",null,d.a.createElement(u.a,null,d.a.createElement(p.a,{className:"m-1"},d.a.createElement(m.a,null,d.a.createElement("h1",null,"Edit")),d.a.createElement(m.a,null,d.a.createElement(N.b,{render:function(e){var a=e.history;return d.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/driver/driverList")}},"Back")}}))),d.a.createElement(h.a,null,d.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(p.a,{className:"mb-2"},d.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(b.a,null,"First Name"),d.a.createElement(y.a,{type:"text",name:"firstname",placeholder:"First Name",value:this.state.firstname,onChange:this.changeHandler})),d.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Last Name"),d.a.createElement(y.a,{type:"text",name:"lastname",placeholder:"Last Name",value:this.state.lastname,onChange:this.changeHandler})),d.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Identity Type"),d.a.createElement(y.a,{type:"select",name:"identity_type",placeholder:"Enter Identity Type",value:this.state.identity_type,onChange:this.changeHandler},d.a.createElement("option",null,"Select ID"),d.a.createElement("option",{value:"Driving License"},"Driving License"),d.a.createElement("option",{value:"PanCard"},"Pan Card"),d.a.createElement("option",{value:"PassPort"},"Passport"))),d.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Identity Type Image"),d.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler3})),d.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Phone No."),d.a.createElement(y.a,{type:"tel",maxLength:"10",name:"phone_no",placeholder:"Phone No",value:this.state.phone_no,onChange:this.changeHandler})),d.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Address"),d.a.createElement(y.a,{type:"text",name:"address",placeholder:"Address",value:this.state.address,onChange:this.changeHandler})),d.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Aadhar Card Image"),d.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler1})),d.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Driver Image"),d.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler2}))),d.a.createElement(p.a,{className:"mt-2 mb-1"},d.a.createElement(m.a,null,"Account Information")),d.a.createElement(p.a,{className:"mb-2"},d.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(b.a,null,"Email"),d.a.createElement(y.a,{type:"text",name:"email",placeholder:" Email",value:this.state.email,onChange:this.changeHandler})),d.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Password"),d.a.createElement(y.a,{type:"password",name:"password",placeholder:" Password",value:this.state.password,onChange:this.changeHandler}))),d.a.createElement(p.a,{className:"mt-2 mb-1"},d.a.createElement(m.a,null,"Vehicle Information")),d.a.createElement(p.a,{className:"mb-2"},d.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Registration Card Image"),d.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler4})),d.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"Insurance Policy Image"),d.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler5})),d.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(b.a,null,"License Image"),d.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler6}))),d.a.createElement(p.a,{style:{float:"right"}},d.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Submit")))))))))}}]),t}(o.Component);a.default=j},835:function(e,a,t){"use strict";var n=t(6),l=t(8),s=t(18),r=t(19),i=t(1),c=t.n(i),o=t(2),d=t.n(o),m=t(5),u=t.n(m),p=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,r=e.bsSize,i=e.valid,o=e.invalid,d=e.tag,m=e.addon,h=e.plaintext,g=e.innerRef,b=Object(l.a)(e,f),y=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),v=d||("select"===s||"textarea"===s?s:"input"),N="form-control";h?(N+="-plaintext",v=d||"input"):"file"===s?N+="-file":"range"===s?N+="-range":y&&(N=m?null:"form-check-input"),b.size&&E.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var C=Object(p.mapToCssModules)(u()(a,o&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,N),t);return("input"===v||d&&"function"===typeof d)&&(b.type=s),b.children&&!h&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(v,Object(n.a)({},b,{ref:g,className:C,"aria-invalid":o}))},a}(c.a.Component);g.propTypes=h,g.defaultProps={type:"text"},a.a=g},840:function(e,a,t){"use strict";var n=t(6),l=t(8),s=t(1),r=t.n(s),i=t(2),c=t.n(i),o=t(5),d=t.n(o),m=t(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,s=e.hidden,i=e.widths,c=e.tag,o=e.check,p=e.size,f=e.for,h=Object(l.a)(e,u),g=[];i.forEach((function(a,n){var l=e[a];if(delete h[a],l||""===l){var s,r=!n;if(Object(m.isObject)(l)){var i,c=r?"-":"-"+a+"-";s=b(r,a,l.size),g.push(Object(m.mapToCssModules)(d()(((i={})[s]=l.size||""===l.size,i["order"+c+l.order]=l.order||0===l.order,i["offset"+c+l.offset]=l.offset||0===l.offset,i))),t)}else s=b(r,a,l),g.push(s)}}));var y=Object(m.mapToCssModules)(d()(a,!!s&&"sr-only",!!o&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),t);return r.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:y}))};y.propTypes=h,y.defaultProps=g,a.a=y},842:function(e,a,t){"use strict";var n=t(6),l=t(8),s=t(18),r=t(19),i=t(1),c=t.n(i),o=t(2),d=t.n(o),m=t(5),u=t.n(m),p=t(4),f=["className","cssModule","inline","tag","innerRef"],h={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,r=e.tag,i=e.innerRef,o=Object(l.a)(e,f),d=Object(p.mapToCssModules)(u()(a,!!s&&"form-inline"),t);return c.a.createElement(r,Object(n.a)({},o,{ref:i,className:d}))},a}(i.Component);g.propTypes=h,g.defaultProps={tag:"form"},a.a=g},847:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(106);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s,r=!0,i=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return r=e.done,e},e:function(e){i=!0,s=e},f:function(){try{r||null==l.return||l.return()}finally{if(i)throw s}}}}}}]);
//# sourceMappingURL=228.138a40fa.chunk.js.map