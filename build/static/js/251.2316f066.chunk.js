(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[251],{2446:function(e,t,a){"use strict";a.r(t),a.d(t,"CreateAttribute",(function(){return O}));var n=a(862),r=a(47),l=a(11),s=a(12),o=a(14),i=a(13),c=a(1),u=a.n(c),m=a(820),d=a(818),f=a(819),p=a(196),b=a(823),h=a(842),g=a(841),v=a(836),y=a(22),E=a(188),O=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(r.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("category_name",s.state.category_name),t.append("desc",s.state.desc),t.append("status",s.state.status),null!==s.state.selectedFile&&t.append("image",s.state.selectedFile,s.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var l=a.value;console.log(l)}}catch(o){r.e(o)}finally{r.f()}E.a.post("/admin/addcategory",t).then((function(e){console.log(e),s.props.history.push("/app/mmbaic/category/categoryList")})).catch((function(e){console.log(e)}))},s.state={category_name:"",selectedFile:null,selectedName:"",desc:"",image:"",status:""},s}return Object(s.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"CreateAttribute")),u.a.createElement(f.a,null,u.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/app/freshlist/options/AttributeList")}},"Back"))),u.a.createElement(b.a,null,u.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(d.a,{className:"mb-2"},u.a.createElement(f.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(g.a,null,"Weight"),u.a.createElement(v.a,{required:!0,type:"select",name:"weight",placeholder:"Enter Iden Type",value:this.state.weight,onChange:this.changeHandler},u.a.createElement("option",{value:"select"},"--Select--"),u.a.createElement("option",{value:"1KG"},"1KG"),u.a.createElement("option",{value:"2KG"},"2KG"),u.a.createElement("option",{value:"3KG"},"3KG"),u.a.createElement("option",{value:"5KG"},"5KG"))),u.a.createElement(f.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(g.a,null,"Volume"),u.a.createElement(v.a,{required:!0,type:"select",name:"volume",placeholder:"Enter Iden Type",value:this.state.volume,onChange:this.changeHandler},u.a.createElement("option",{value:"select"},"--Select--"),u.a.createElement("option",{value:"1L"},"1L"),u.a.createElement("option",{value:"2L"},"2L"),u.a.createElement("option",{value:"3L"},"3L"),u.a.createElement("option",{value:"5L"},"5L"))),u.a.createElement(f.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(g.a,null,"Pisces"),u.a.createElement(v.a,{required:!0,type:"select",name:"pisces",placeholder:"Enter Iden Type",value:this.state.pisces,onChange:this.changeHandler},u.a.createElement("option",{value:"select"},"--Select--"),u.a.createElement("option",{value:"1"},"1"),u.a.createElement("option",{value:"2"},"2"),u.a.createElement("option",{value:"3"},"3")))),u.a.createElement(d.a,null,u.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit"))))))}}]),a}(c.Component);t.default=O},836:function(e,t,a){"use strict";var n=a(6),r=a(8),l=a(18),s=a(19),o=a(1),i=a.n(o),c=a(2),u=a.n(c),m=a(5),d=a.n(m),f=a(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,s=e.bsSize,o=e.valid,c=e.invalid,u=e.tag,m=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,p),v=["radio","checkbox"].indexOf(l)>-1,y=new RegExp("\\D","g"),E=u||("select"===l||"textarea"===l?l:"input"),O="form-control";b?(O+="-plaintext",E=u||"input"):"file"===l?O+="-file":"range"===l?O+="-range":v&&(O=m?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var j=Object(f.mapToCssModules)(d()(t,c&&"is-invalid",o&&"is-valid",!!s&&"form-control-"+s,O),a);return("input"===E||u&&"function"===typeof u)&&(g.type=l),g.children&&!b&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(f.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(E,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":c}))},t}(i.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},841:function(e,t,a){"use strict";var n=a(6),r=a(8),l=a(1),s=a.n(l),o=a(2),i=a.n(o),c=a(5),u=a.n(c),m=a(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],f=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:f,order:f,offset:f})]),b={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,l=e.hidden,o=e.widths,i=e.tag,c=e.check,f=e.size,p=e.for,b=Object(r.a)(e,d),h=[];o.forEach((function(t,n){var r=e[t];if(delete b[t],r||""===r){var l,s=!n;if(Object(m.isObject)(r)){var o,i=s?"-":"-"+t+"-";l=g(s,t,r.size),h.push(Object(m.mapToCssModules)(u()(((o={})[l]=r.size||""===r.size,o["order"+i+r.order]=r.order||0===r.order,o["offset"+i+r.offset]=r.offset||0===r.offset,o))),a)}else l=g(s,t,r),h.push(l)}}));var v=Object(m.mapToCssModules)(u()(t,!!l&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),a);return s.a.createElement(i,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=h,t.a=v},842:function(e,t,a){"use strict";var n=a(6),r=a(8),l=a(18),s=a(19),o=a(1),i=a.n(o),c=a(2),u=a.n(c),m=a(5),d=a.n(m),f=a(4),p=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,s=e.tag,o=e.innerRef,c=Object(r.a)(e,p),u=Object(f.mapToCssModules)(d()(t,!!l&&"form-inline"),a);return i.a.createElement(s,Object(n.a)({},c,{ref:o,className:u}))},t}(o.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h},862:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(106);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l,s=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,l=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw l}}}}}}]);
//# sourceMappingURL=251.2316f066.chunk.js.map