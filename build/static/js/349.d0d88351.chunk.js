(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[349],{2446:function(e,t,a){"use strict";a.r(t);var n=a(11),o=a(12),r=a(14),s=a(13),i=a(1),l=a.n(i),c=a(820),d=a(818),m=a(819),u=a(196),p=a(823),b=a(841),h=(a(1003),a(872)),f=a(865),E=a(868),C=a.n(E),N=(a(874),a(859),a(188)),S=(a(22),a(839)),y=a.n(S),g=a(63),k=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).onEditorStateChange=function(e){o.setState({editorState:e,description:C()(Object(h.convertToRaw)(e.getCurrentContent()))})},o.submitHandler=function(e){e.preventDefault(),N.a.post("/addTermscondition",o.state).then((function(e){console.log(e),o.props.history.push("/app/termsAndCondition/tAndCList"),y()("Good job!","You clicked the button!","success")})).catch((function(e){console.log(e)}))},o.state={description:"",editorState:h.EditorState.createEmpty()},o}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(c.a,null,l.a.createElement(d.a,{className:"m-2"},l.a.createElement(m.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Term And Condition")),l.a.createElement(m.a,null,l.a.createElement(g.b,{render:function(e){var t=e.history;return l.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/termsAndCondition/TAndCList")}},"Back")}}))),l.a.createElement(p.a,null,l.a.createElement(b.a,{onSubmit:this.submitHandler},l.a.createElement(f.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),l.a.createElement("br",null),l.a.createElement(u.a,{color:"primary"},"Add New T&C"))))}}]),a}(l.a.Component);t.default=k},859:function(e,t,a){}}]);
//# sourceMappingURL=349.d0d88351.chunk.js.map