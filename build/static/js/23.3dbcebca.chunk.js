(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[23],{1589:function(e,t,a){"use strict";var n=a(46),l=a(10),r=a(11),c=a(13),s=a(12),m=a(1),u=a.n(m),i=a(820),o=a(823),d=a(836),p=a(818),h=a(819),E=a(835),g=a(833),v=a(842),b=(a(949),a(950)),y=(a(890),a(884),a(940),a(22),a(186)),f=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",r.state.name),t.append("sortorder",r.state.sortorder),t.append("desc",r.state.desc),t.append("status",r.state.status),null!==r.state.selectedFile&&t.append("brand_img",r.state.selectedFile,r.state.selectedName),y.a.post("/addbrand",t).then((function(e){console.log(e),r.props.history.push("/app/freshlist/house/HouseProductList")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",status:""},r}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(i.a,null,u.a.createElement(o.a,null,u.a.createElement(d.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(p.a,{className:"mb-2"},u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null," Product Name"),u.a.createElement(g.a,{type:"text",placeholder:"Product Name",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement(h.a,{lg:"12",md:"12"},u.a.createElement(v.a,null,u.a.createElement(E.a,null,"Description"),u.a.createElement(b.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!1,mandatory:!1},uploadEnabled:!0,inputAccept:"image/gif,image/jpeg,image/jpg,image/png,image/svg"}}}))),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null," Meta Tag Title"),u.a.createElement(g.a,{type:"text",placeholder:"Meta Tag",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-1"},u.a.createElement(E.a,null,"MetaData"),u.a.createElement("textarea",{type:"text",rows:4,className:"form-control",placeholder:"MetaData",name:"type",value:this.state.sortorder,onChange:this.changeHandler})),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-1"},u.a.createElement(E.a,null,"Meta Tag Keywords"),u.a.createElement("textarea",{type:"text",rows:4,className:"form-control",placeholder:"Meta Tag Keywords",name:"type",value:this.state.sortorder,onChange:this.changeHandler})),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null," Product Tag"),u.a.createElement(g.a,{type:"text",placeholder:"Product Tag",name:"name",value:this.state.name,onChange:this.changeHandler})))))))}}]),a}(m.Component);t.a=f},1590:function(e,t,a){"use strict";var n=a(46),l=a(10),r=a(11),c=a(13),s=a(12),m=a(1),u=a.n(m),i=a(820),o=a(823),d=a(836),p=a(818),h=a(819),E=a(835),g=a(833),v=a(808),b=(a(949),a(950),a(890),a(884),a(940),a(22),a(186)),y=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",r.state.name),t.append("sortorder",r.state.sortorder),t.append("desc",r.state.desc),t.append("status",r.state.status),null!==r.state.selectedFile&&t.append("brand_img",r.state.selectedFile,r.state.selectedName),b.a.post("/addbrand",t).then((function(e){console.log(e),r.props.history.push("/app/freshlist/house/HouseProductList")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",status:""},r}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(i.a,null,u.a.createElement(o.a,null,u.a.createElement(d.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(p.a,{className:"mb-2"},u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null," Model"),u.a.createElement(g.a,{type:"text",placeholder:"Model",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null," SKU"),u.a.createElement(g.a,{type:"text",placeholder:"SKU",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null,"Price"),u.a.createElement(g.a,{type:"number",placeholder:"Price",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null,"Tax Class"),u.a.createElement(v.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.name,onChange:this.changeHandler},u.a.createElement("option",{value:"1"},"1"),u.a.createElement("option",{value:"2"},"2"),u.a.createElement("option",{value:"3"},"3"))),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null,"Quantity"),u.a.createElement(g.a,{type:"number",placeholder:"Quantity",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null,"Minimum Quantity"),u.a.createElement(g.a,{type:"number",placeholder:"Minimum Quantity",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null,"Maximum Quantity"),u.a.createElement(g.a,{type:"number",placeholder:"Maximum Quantity",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null,"Preorder Limit"),u.a.createElement(g.a,{type:"number",placeholder:"Preorder Limit",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null,"Subtract Stock"),u.a.createElement(v.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.name,onChange:this.changeHandler},u.a.createElement("option",{value:"Yes"},"Yes"),u.a.createElement("option",{value:"No"},"No"))),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null,"Out Of Stock Status"),u.a.createElement(v.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.name,onChange:this.changeHandler},u.a.createElement("option",{value:"Yes"},"Notify Me"),u.a.createElement("option",{value:"No"},"No"))),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null,"Status"),u.a.createElement(v.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.name,onChange:this.changeHandler},u.a.createElement("option",{value:"Kilogram"},"Enabled"),u.a.createElement("option",{value:"Gram"},"Disabled"))),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null,"Sort Order"),u.a.createElement(g.a,{type:"number",placeholder:"Sort Order",name:"name",value:"29",onChange:this.changeHandler})),u.a.createElement("hr",null))))))}}]),a}(m.Component);t.a=y},1591:function(e,t,a){"use strict";var n=a(46),l=a(10),r=a(11),c=a(13),s=a(12),m=a(1),u=a.n(m),i=a(820),o=a(823),d=a(836),p=a(818),h=a(819),E=a(835),g=a(833),v=a(808),b=a(842),y=(a(949),a(950),a(890),a(884),a(940),a(22),a(186)),f=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",r.state.name),t.append("sortorder",r.state.sortorder),t.append("desc",r.state.desc),t.append("status",r.state.status),null!==r.state.selectedFile&&t.append("brand_img",r.state.selectedFile,r.state.selectedName),y.a.post("/addbrand",t).then((function(e){console.log(e),r.props.history.push("/app/freshlist/house/HouseProductList")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",status:""},r}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(i.a,null,u.a.createElement(o.a,null,u.a.createElement(d.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(p.a,{className:"mb-2"},u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null," Manufactures"),u.a.createElement(g.a,{type:"text",placeholder:"Manufactures",name:"name",value:"Britannia",onChange:this.changeHandler})),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null,"Category"),u.a.createElement(v.a,{type:"select",placeholder:"Category",name:"type",value:this.state.name,onChange:this.changeHandler},u.a.createElement("option",null,"Category"),u.a.createElement("option",{value:"1"},"1"),u.a.createElement("option",{value:"2"},"2"),u.a.createElement("option",{value:"3"},"3"))),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"12",md:"12",className:"mb-2"},u.a.createElement(E.a,null,"Related Products"),u.a.createElement(v.a,{type:"select",placeholder:"Related Products",name:"type",value:this.state.name,onChange:this.changeHandler},u.a.createElement("option",null,"Related Products"),u.a.createElement("option",{value:"1"},"Bottle Gourd"),u.a.createElement("option",{value:"2"},"Fennel/Saunf -Big "),u.a.createElement("option",{value:"3"},"Kelloggs Oats Raw 450g"),u.a.createElement("option",{value:"3"},"Weikfield Custard Powder Mango"))),u.a.createElement("hr",null),u.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(b.a,{tag:"fieldset",className:"d-flex "},u.a.createElement(E.a,null,"Show Bundle always(Bundle pop up will be shown irrespective of cart count):"),u.a.createElement("div",{className:"d-flex ml-1"},u.a.createElement(b.a,{check:!0},u.a.createElement(g.a,{value:"bundleyes",name:"radio1",type:"radio",checked:!0}),u.a.createElement(E.a,{check:!0,className:"mr-2"},"Yes")),u.a.createElement(b.a,{check:!0},u.a.createElement(g.a,{value:"bundleNO",name:"radio1",type:"radio"}),u.a.createElement(E.a,{check:!0},"No"))))),u.a.createElement("hr",null))))))}}]),a}(m.Component);t.a=f},1592:function(e,t,a){"use strict";var n=a(31),l=a(46),r=a(10),c=a(11),s=a(13),m=a(12),u=a(1),i=a.n(u),o=a(820),d=a(823),p=a(836),h=a(818),E=a(819),g=a(835),v=a(808),b=a(899),y=a(833),f=a(195),C=(a(949),a(950),a(890),a(884),a(940),a(22),a(186),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.handleremove=function(e){var t=Object(n.a)(c.state.inputlist);t.splice(e,1),c.setState({inputlist:t})},c.handleClick=function(){c.setState({inputlist:[].concat(Object(n.a)(c.state.inputlist),[{selected:c.state.myvalue,attribute:"",quantity:""}])})},c.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",c.state.name),t.append("sortorder",c.state.sortorder),t.append("quantity",c.state.quantity),t.append("size",c.state.size),t.append("required",c.state.required),t.append("desc",c.state.desc),t.append("quant",c.state.quant),t.append("optValue",c.state.optValue),t.append("opValue",c.state.opValue),t.append("status",c.state.status),null!==c.state.selectedFile&&t.append("brand_img",c.state.selectedFile,c.state.selectedName)},c.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",quantity:"",size:"",required:"",quant:"",optValue:"",opValue:"",status:"",inputlist:[{selected:"",attribute:"",quantity:""}]},c}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(h.a,{className:"mb-2"},i.a.createElement(E.a,{lg:"12",md:"12",className:"mb-2"},i.a.createElement(g.a,null,"Required"),i.a.createElement(v.a,{type:"select",placeholder:"Required",name:"type",value:this.state.required,onChange:this.changeHandler},i.a.createElement("option",{value:"Yes"},"Yes"),i.a.createElement("option",{value:"No"},"No"))),i.a.createElement("hr",null)),i.a.createElement(h.a,null,i.a.createElement(E.a,{lg:"12",md:"12"},i.a.createElement(b.a,{responsive:!0,bordered:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Option Value"),i.a.createElement("th",null,"Quantity"),i.a.createElement("th",null,"Subtract Stock"),i.a.createElement("th",null,"Price"),i.a.createElement("th",null," Special Price"),i.a.createElement("th",null,"Points"),i.a.createElement("th",null,"Weight"),i.a.createElement("th",null))),i.a.createElement("tbody",null,this.state.inputlist.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",{key:a},i.a.createElement("td",{className:"p-0"},i.a.createElement(v.a,{type:"select",placeholder:"option value",name:"type",value:e.state.name,onChange:e.changeHandler},i.a.createElement("option",{value:"Yes"},"Large"),i.a.createElement("option",{value:"No"},"Small"))),i.a.createElement("td",null,i.a.createElement(y.a,{type:"text",placeholder:"Quantity",name:"name",value:e.state.name,onChange:e.changeHandler})),i.a.createElement("td",null,i.a.createElement(v.a,{type:"select",placeholder:"option value",name:"type",value:e.state.name,onChange:e.changeHandler},i.a.createElement("option",{value:"Yes"},"+"),i.a.createElement("option",{value:"No"},"-"))),i.a.createElement("td",null,i.a.createElement(v.a,{type:"select",placeholder:"option value",name:"type",value:e.state.name,onChange:e.changeHandler},i.a.createElement("option",{value:"Yes"},"+"),i.a.createElement("option",{value:"No"},"-")),i.a.createElement(y.a,{type:"text",placeholder:"Quantity",name:"quantity",value:e.state.quantity,onChange:e.changeHandler})),i.a.createElement("td",null,i.a.createElement(v.a,{type:"select",placeholder:"option value",name:"type",value:e.state.name,onChange:e.changeHandler},i.a.createElement("option",{value:"Yes"},"+"),i.a.createElement("option",{value:"No"},"-")),i.a.createElement(y.a,{type:"text",placeholder:"Quantity",name:"name",value:e.state.name,onChange:e.changeHandler})),i.a.createElement("td",null,i.a.createElement(v.a,{type:"select",placeholder:"option value",name:"type",value:e.state.name,onChange:e.changeHandler},i.a.createElement("option",{value:"Yes"},"+"),i.a.createElement("option",{value:"No"},"-")),i.a.createElement(y.a,{type:"text",placeholder:"Quantity",name:"name",value:e.state.name,onChange:e.changeHandler})),i.a.createElement("td",null,i.a.createElement(v.a,{type:"select",placeholder:"option value",name:"type",value:e.state.name,onChange:e.changeHandler},i.a.createElement("option",{value:"Yes"},"+"),i.a.createElement("option",{value:"No"},"-")),i.a.createElement(y.a,{type:"text",placeholder:"Quantity",name:"name",value:e.state.name,onChange:e.changeHandler})),i.a.createElement("td",null,1!==e.state.inputlist.length&&i.a.createElement(f.a,{color:"primary",className:"mr-1 mt-2",style:{height:"40px"},onClick:function(){return e.handleremove(a)}},"-"))),i.a.createElement("tr",null,i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null,e.state.inputlist.length-1===a&&i.a.createElement(f.a,{color:"primary",style:{padding:"5px 8px"},onClick:e.handleClick},"+")),i.a.createElement("td",null)))}))))))))))}}]),a}(u.Component));t.a=C},1593:function(e,t,a){"use strict";var n=a(31),l=a(46),r=a(10),c=a(11),s=a(13),m=a(12),u=a(1),i=a.n(u),o=a(820),d=a(823),p=a(836),h=a(818),E=a(819),g=a(899),v=a(808),b=a(833),y=a(195),f=(a(949),a(950),a(890),a(884),a(940),a(22),a(186),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.handleremove=function(e){var t=Object(n.a)(c.state.inputlist);t.splice(e,1),c.setState({inputlist:t})},c.handleClick=function(){c.setState({inputlist:[].concat(Object(n.a)(c.state.inputlist),[{selected:c.state.myvalue,attribute:"",quantity:""}])})},c.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",c.state.name),t.append("sortorder",c.state.sortorder),t.append("desc",c.state.desc),t.append("status",c.state.status),null!==c.state.selectedFile&&t.append("brand_img",c.state.selectedFile,c.state.selectedName)},c.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",status:"",inputlist:[{selected:"",attribute:"",quantity:""}]},c}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement("hr",null),i.a.createElement(h.a,null,i.a.createElement(E.a,{lg:"12",md:"12"},i.a.createElement(g.a,{responsive:!0,bordered:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Customer Group"),i.a.createElement("th",null,"Quantity"),i.a.createElement("th",null,"Priority"),i.a.createElement("th",null,"Price"),i.a.createElement("th",null,"Date Start"),i.a.createElement("th",null,"Date End"),i.a.createElement("th",null))),i.a.createElement("tbody",null,this.state.inputlist.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",{key:a},i.a.createElement("td",{className:"p-0"},i.a.createElement(v.a,{type:"select",placeholder:"option value",name:"type",value:e.state.name,onChange:e.changeHandler},i.a.createElement("option",{value:"Default"},"Default"),i.a.createElement("option",{value:"Large"},"Large"),i.a.createElement("option",{value:"Small"},"Small"))),i.a.createElement("td",null,i.a.createElement(b.a,{type:"text",placeholder:"Quantity",name:"name",value:e.state.name,onChange:e.changeHandler})),i.a.createElement("td",null,i.a.createElement(b.a,{type:"text",placeholder:"Priority",name:"name",value:e.state.name,onChange:e.changeHandler})),i.a.createElement("td",null,i.a.createElement(b.a,{type:"text",placeholder:"Price",name:"name",value:e.state.name,onChange:e.changeHandler})),i.a.createElement("td",null,i.a.createElement(b.a,{type:"date",placeholder:"Date Start",name:"name",value:e.state.name,onChange:e.changeHandler})),i.a.createElement("td",null,i.a.createElement(b.a,{type:"date",placeholder:"Date End",name:"name",value:e.state.name,onChange:e.changeHandler})),i.a.createElement("td",null,1!==e.state.inputlist.length&&i.a.createElement(y.a,{color:"primary",className:"mr-1",style:{height:"40px"},onClick:function(){return e.handleremove(a)}},"-"))))})),this.state.inputlist.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",{key:a},i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null,e.state.inputlist.length-1===a&&i.a.createElement(y.a,{color:"primary",style:{padding:"5px 8px"},onClick:e.handleClick},"+")),i.a.createElement("td",null)))}))))))))))}}]),a}(u.Component));t.a=f},1594:function(e,t,a){"use strict";var n=a(46),l=a(10),r=a(11),c=a(13),s=a(12),m=a(1),u=a.n(m),i=a(820),o=a(823),d=a(836),p=a(818),h=a(819),E=a(899),g=a(808),v=a(833),b=a(195),y=(a(949),a(950),a(890),a(884),a(940),a(22),a(186)),f=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",r.state.name),t.append("sortorder",r.state.sortorder),t.append("desc",r.state.desc),t.append("status",r.state.status),null!==r.state.selectedFile&&t.append("brand_img",r.state.selectedFile,r.state.selectedName),y.a.post("/addbrand",t).then((function(e){console.log(e),r.props.history.push("/app/freshlist/house/HouseProductList")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",status:""},r}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(i.a,null,u.a.createElement(o.a,null,u.a.createElement(d.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement("hr",null),u.a.createElement(p.a,null,u.a.createElement(h.a,{lg:"12",md:"12"},u.a.createElement(E.a,{responsive:!0,bordered:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Customer Group"),u.a.createElement("th",null,"Priority"),u.a.createElement("th",null,"Price"),u.a.createElement("th",null,"Date Start"),u.a.createElement("th",null,"Date End"),u.a.createElement("th",null))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",{className:"p-0"},u.a.createElement(g.a,{type:"select",placeholder:"option value",name:"type",value:this.state.name,onChange:this.changeHandler},u.a.createElement("option",{value:"Default"},"Default"),u.a.createElement("option",{value:"Large"},"Large"),u.a.createElement("option",{value:"Small"},"Small"))),u.a.createElement("td",null,u.a.createElement(v.a,{type:"text",placeholder:"Priority",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement("td",null,u.a.createElement(v.a,{type:"text",placeholder:"Price",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement("td",null,u.a.createElement(v.a,{type:"date",placeholder:"Date Start",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement("td",null,u.a.createElement(v.a,{type:"date",placeholder:"Date End",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement("td",null,u.a.createElement(b.a,{className:" btn btn-danger",style:{padding:"5px 8px"}},"-"))),u.a.createElement("tr",null,u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null,u.a.createElement(b.a,{className:" btn btn-primary",color:"blue",style:{padding:"5px 8px"}},"+")),u.a.createElement("td",null))))))))))}}]),a}(m.Component);t.a=f},1595:function(e,t,a){"use strict";var n=a(46),l=a(10),r=a(11),c=a(13),s=a(12),m=a(1),u=a.n(m),i=a(820),o=a(823),d=a(818),p=(a(949),a(950),a(890),a(884),a(940),a(22),a(186),function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",r.state.name),t.append("sortorder",r.state.sortorder),t.append("desc",r.state.desc),t.append("status",r.state.status),null!==r.state.selectedFile&&t.append("brand_img",r.state.selectedFile,r.state.selectedName)},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",status:""},r}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(i.a,null,u.a.createElement(o.a,null,u.a.createElement(d.a,{style:{border:"1px solid gray"}},"Banner"),u.a.createElement(d.a,{style:{border:"1px solid gray"}},u.a.createElement("img",{width:"200px",alt:"Card cap",src:"https://picsum.photos/318/180"})),u.a.createElement(d.a,{style:{border:"1px solid gray"}},"Image"),u.a.createElement(d.a,{style:{border:"1px solid gray"}},u.a.createElement("img",{alt:"Card cap",src:"https://picsum.photos/318/180",width:"200px"})),u.a.createElement(d.a,{style:{border:"1px solid gray"}},"Additional Images"),u.a.createElement(d.a,{style:{border:"1px solid gray"}},u.a.createElement("img",{alt:"Card cap",src:"https://picsum.photos/318/180",width:"200px"})))))}}]),a}(m.Component));t.a=p},1596:function(e,t,a){"use strict";var n=a(31),l=a(46),r=a(10),c=a(11),s=a(13),m=a(12),u=a(1),i=a.n(u),o=a(820),d=a(823),p=a(836),h=a(818),E=a(819),g=a(899),v=a(833),b=a(808),y=a(195),f=(a(890),a(884),a(22),a(186),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.handleremove=function(e){var t=Object(n.a)(c.state.inputlist);t.splice(e,1),c.setState({inputlist:t})},c.handleClick=function(){c.setState({inputlist:[].concat(Object(n.a)(c.state.inputlist),[{selected:c.state.myvalue,attribute:"",quantity:""}])})},c.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",c.state.name),t.append("title",c.state.title),t.append("product",c.state.product),t.append("main",c.state.main),t.append("link",c.state.link),t.append("sortorder",c.state.sortorder),null!==c.state.selectedFile&&t.append("brand_img",c.state.selectedFile,c.state.selectedName)},c.state={name:"",title:"",product:"",main:"",link:"",selectedFile:null,selectedName:"",sortorder:"",brand_img:"",inputlist:[{selected:"",attribute:"",quantity:""}]},c}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement("hr",null),i.a.createElement(h.a,null,i.a.createElement(E.a,{lg:"12",md:"12"},i.a.createElement(g.a,{responsive:!0,bordered:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Title"),i.a.createElement("th",null,"Type:Product/Quantity"),i.a.createElement("th",null,"Type:Main/Inner"),i.a.createElement("th",null,"Link(Auto Complete)"),i.a.createElement("th",null,"Image"),i.a.createElement("th",null))),i.a.createElement("tbody",null,this.state.inputlist.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",{key:a},i.a.createElement("td",{className:"p-0"},i.a.createElement(v.a,{type:"text",placeholder:"Quantity",name:"name",value:e.state.name,onChange:e.changeHandler})),i.a.createElement("td",null,i.a.createElement(b.a,{type:"select",placeholder:"option value",name:"type",value:e.state.name,onChange:e.changeHandler},i.a.createElement("option",{value:"Product"},"Product"),i.a.createElement("option",{value:"Product2"},"Product2"),i.a.createElement("option",{value:"Product3"},"Product3"))),i.a.createElement("td",null,i.a.createElement(b.a,{type:"select",placeholder:"option value",name:"type",value:e.state.name,onChange:e.changeHandler},i.a.createElement("option",{value:"Banner"},"Banner"),i.a.createElement("option",{value:"Banner1"},"Banner1"),i.a.createElement("option",{value:"Banner2"},"Banner2"))),i.a.createElement("td",null,i.a.createElement(v.a,{type:"text",placeholder:"Price",name:"name",value:e.state.name,onChange:e.changeHandler})),i.a.createElement("td",null,i.a.createElement("img",{width:"150px",alt:"Card cap",src:"https://picsum.photos/318/180"})),i.a.createElement("td",null,1!==e.state.inputlist.length&&i.a.createElement(y.a,{color:"primary",className:"mr-1",style:{height:"40px"},onClick:function(){return e.handleremove(a)}},"-"))))})),this.state.inputlist.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null,e.state.inputlist.length-1===a&&i.a.createElement(y.a,{color:"primary",style:{padding:"5px 8px"},onClick:e.handleClick},"+")),i.a.createElement("td",null)))}))))))))))}}]),a}(u.Component));t.a=f},1597:function(e,t,a){"use strict";var n=a(31),l=a(46),r=a(10),c=a(11),s=a(13),m=a(12),u=a(1),i=a.n(u),o=a(820),d=a(823),p=a(836),h=a(818),E=a(819),g=a(899),v=a(833),b=a(195),y=(a(890),a(884),a(22),a(186),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.handleremove=function(e){var t=Object(n.a)(c.state.inputlist);t.splice(e,1),c.setState({inputlist:t})},c.handleClick=function(){c.setState({inputlist:[].concat(Object(n.a)(c.state.inputlist),[{selected:c.state.myvalue,attribute:"",quantity:""}])})},c.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",c.state.name),t.append("title",c.state.title),t.append("product",c.state.product),t.append("main",c.state.main),t.append("link",c.state.link),t.append("sortorder",c.state.sortorder),null!==c.state.selectedFile&&t.append("brand_img",c.state.selectedFile,c.state.selectedName)},c.state={name:"",title:"",product:"",main:"",link:"",selectedFile:null,selectedName:"",sortorder:"",brand_img:"",inputlist:[{selected:"",attribute:"",quantity:""}]},c}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement("hr",null),i.a.createElement(h.a,null,i.a.createElement(E.a,{lg:"12",md:"12"},i.a.createElement(g.a,{responsive:!0,bordered:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null),i.a.createElement("th",null,"sort order"),i.a.createElement("th",null))),i.a.createElement("tbody",null,this.state.inputlist.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",{key:a},i.a.createElement("td",{className:"p-0"},i.a.createElement(v.a,{type:"text",placeholder:"Link",name:"name",value:e.state.link,onChange:e.changeHandler})),i.a.createElement("td",null,i.a.createElement(v.a,{type:"text",name:"name",value:"0",onChange:e.changeHandler})),i.a.createElement("td",null,1!==e.state.inputlist.length&&i.a.createElement(b.a,{color:"primary",className:"mr-1",style:{height:"40px"},onClick:function(){return e.handleremove(a)}},"-"))))})),this.state.inputlist.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null,e.state.inputlist.length-1===a&&i.a.createElement(b.a,{color:"primary",style:{padding:"5px 8px"},onClick:e.handleClick},"+")),i.a.createElement("td",null)))}))))))))))}}]),a}(u.Component));t.a=y},1598:function(e,t,a){"use strict";var n=a(31),l=a(46),r=a(10),c=a(11),s=a(13),m=a(12),u=a(1),i=a.n(u),o=a(820),d=a(823),p=a(836),h=a(818),E=a(819),g=a(899),v=a(833),b=a(195),y=(a(22),a(186),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.handleremove=function(e){var t=Object(n.a)(c.state.inputlist);t.splice(e,1),c.setState({inputlist:t})},c.handleClick=function(){c.setState({inputlist:[].concat(Object(n.a)(c.state.inputlist),[{selected:c.state.myvalue,attribute:"",quantity:""}])})},c.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",c.state.name),t.append("title",c.state.title),t.append("product",c.state.product),t.append("main",c.state.main),t.append("link",c.state.link),t.append("sortorder",c.state.sortorder),null!==c.state.selectedFile&&t.append("brand_img",c.state.selectedFile,c.state.selectedName)},c.state={name:"",title:"",product:"",main:"",link:"",selectedFile:null,selectedName:"",sortorder:"",brand_img:"",inputlist:[{selected:"",attribute:"",quantity:""}]},c}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement("hr",null),i.a.createElement(h.a,null,i.a.createElement(E.a,{lg:"12",md:"12"},i.a.createElement(g.a,{responsive:!0,bordered:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Customer Group"),i.a.createElement("th",null,"Reward Points"))),i.a.createElement("tbody",null,this.state.inputlist.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",{key:a},i.a.createElement("td",{className:"p-0"},"Default"),i.a.createElement("td",null,i.a.createElement(v.a,{type:"text",name:"name",value:e.state.name,onChange:e.changeHandler}))))})),this.state.inputlist.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null,e.state.inputlist.length-1===a&&i.a.createElement(b.a,{color:"primary",style:{padding:"5px 8px"},onClick:e.handleClick},"+")),i.a.createElement("td",null)))}))))))))))}}]),a}(u.Component));t.a=y},1599:function(e,t,a){"use strict";var n=a(31),l=a(46),r=a(10),c=a(11),s=a(13),m=a(12),u=a(1),i=a.n(u),o=a(820),d=a(823),p=a(836),h=a(818),E=a(819),g=a(899),v=a(833),b=a(195),y=(a(890),a(884),a(22),a(186),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.handleremove=function(e){var t=Object(n.a)(c.state.inputlist);t.splice(e,1),c.setState({inputlist:t})},c.handleClick=function(){c.setState({inputlist:[].concat(Object(n.a)(c.state.inputlist),[{selected:c.state.myvalue,attribute:"",quantity:""}])})},c.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",c.state.name),t.append("title",c.state.title),t.append("product",c.state.product),t.append("main",c.state.main),t.append("link",c.state.link),t.append("sortorder",c.state.sortorder),null!==c.state.selectedFile&&t.append("brand_img",c.state.selectedFile,c.state.selectedName)},c.state={name:"",title:"",product:"",main:"",link:"",selectedFile:null,selectedName:"",sortorder:"",brand_img:"",inputlist:[{selected:"",attribute:"",quantity:""}]},c}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement("hr",null),i.a.createElement(h.a,null,i.a.createElement(E.a,{lg:"12",md:"12"},i.a.createElement(g.a,{responsive:!0,bordered:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Stores"),i.a.createElement("th",null,"Keyword"))),i.a.createElement("tbody",null,this.state.inputlist.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",{key:a},i.a.createElement("td",{className:"p-0"},"Default"),i.a.createElement("td",null,i.a.createElement(v.a,{type:"text",name:"name",value:"Britannia-toastea-premium-bake-rusk",onChange:e.changeHandler})),i.a.createElement("td",null,1!==e.state.inputlist.length&&i.a.createElement(b.a,{color:"primary",className:"mr-1",style:{height:"40px"},onClick:function(){return e.handleremove(a)}},"-"))))})),this.state.inputlist.map((function(t,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null,e.state.inputlist.length-1===a&&i.a.createElement(b.a,{color:"primary",style:{padding:"5px 8px"},onClick:e.handleClick},"+")),i.a.createElement("td",null)))}))))))))))}}]),a}(u.Component));t.a=y},884:function(e,t,a){}}]);
//# sourceMappingURL=23.3dbcebca.chunk.js.map