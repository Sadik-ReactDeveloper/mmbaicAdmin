(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[317],{1104:function(e,t,a){"use strict";var n=a(6),i=a(8),s=a(1),r=a.n(s),o=a(2),l=a.n(o),c=a(5),u=a.n(c),p=a(4),f=["className","cssModule","fluid","tag"],d={tag:p.tagPropType,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.fluid,o=e.tag,l=Object(i.a)(e,f),c="container";!0===s?c="container-fluid":s&&(c="container-"+s);var d=Object(p.mapToCssModules)(u()(t,c),a);return r.a.createElement(o,Object(n.a)({},l,{className:d}))};m.propTypes=d,m.defaultProps={tag:"div"},t.a=m},2542:function(e,t,a){"use strict";a.r(t);var n=a(11),i=a(12),s=a(14),r=a(13),o=a(1),l=a.n(o),c=a(1104),u=a(818),p=a(842),f=a(835),d=a(196),m=a(142),b=a(25),g=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e.handleLogin=function(t){t.preventDefault(),e.props.loginWithJWT(e.state)},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(c.a,null,l.a.createElement(u.a,{className:"m-0 justify-content-center"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-6 col-md-offset-3"},l.a.createElement("hgroup",null,"Subscribe for",l.a.createElement("select",{id:""},l.a.createElement("option",{value:"option"},"Option"),l.a.createElement("option",{value:"0"},"daily"),l.a.createElement("option",{value:"1",selected:!0},"weekly"),l.a.createElement("option",{value:"2"},"monthly")),"gominSeller"),l.a.createElement("div",{class:"well"},l.a.createElement(p.a,{action:"/",onSubmit:this.handleLogin},l.a.createElement("div",{class:"input-group"},l.a.createElement(f.a,{class:"btn btn-lg",name:"email",id:"email",type:"email",placeholder:"Your Email",required:!0}),l.a.createElement(d.a,{class:"btn btn-info btn-lg",type:"submit"},"Submit")))),l.a.createElement("small",{class:"promise"},l.a.createElement("em",null,"We won't send spam.")))))))}}]),a}(l.a.Component);t.default=Object(b.b)((function(e){return{values:e.auth.login}}),{loginWithJWT:m.e})(g)},835:function(e,t,a){"use strict";var n=a(6),i=a(8),s=a(18),r=a(19),o=a(1),l=a.n(o),c=a(2),u=a.n(c),p=a(5),f=a.n(p),d=a(4),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,r=e.bsSize,o=e.valid,c=e.invalid,u=e.tag,p=e.addon,b=e.plaintext,g=e.innerRef,h=Object(i.a)(e,m),v=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),O=u||("select"===s||"textarea"===s?s:"input"),j="form-control";b?(j+="-plaintext",O=u||"input"):"file"===s?j+="-file":"range"===s?j+="-range":v&&(j=p?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=h.size,delete h.size);var E=Object(d.mapToCssModules)(f()(t,c&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,j),a);return("input"===O||u&&"function"===typeof u)&&(h.type=s),h.children&&!b&&"select"!==s&&"string"===typeof O&&"select"!==O&&(Object(d.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(O,Object(n.a)({},h,{ref:g,className:E,"aria-invalid":c}))},t}(l.a.Component);g.propTypes=b,g.defaultProps={type:"text"},t.a=g},842:function(e,t,a){"use strict";var n=a(6),i=a(8),s=a(18),r=a(19),o=a(1),l=a.n(o),c=a(2),u=a.n(c),p=a(5),f=a.n(p),d=a(4),m=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,r=e.tag,o=e.innerRef,c=Object(i.a)(e,m),u=Object(d.mapToCssModules)(f()(t,!!s&&"form-inline"),a);return l.a.createElement(r,Object(n.a)({},c,{ref:o,className:u}))},t}(o.Component);g.propTypes=b,g.defaultProps={tag:"form"},t.a=g}}]);
//# sourceMappingURL=317.313f3800.chunk.js.map