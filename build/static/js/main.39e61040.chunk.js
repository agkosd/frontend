(this.webpackJsonpiborrow=this.webpackJsonpiborrow||[]).push([[0],{124:function(e,t,a){e.exports=a(272)},271:function(e,t,a){},272:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),c=a.n(i),o=a(8),s=a(9),l=a(11),u=a(10),m=a(14),p=a(5),d=a(4),h=a(16),v=a.n(h),f=a(12),E=a(30),g=a(18),b=Object(g.a)(),y=a(31),N=a.n(y),O=function(e){return{type:"SET_LOCATION",payload:e}},I=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.get("https://mighty-harbor-82441.herokuapp.com/".concat(e));case 3:n=t.sent,a({type:"GET_PRODUCT",payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.delete("https://mighty-harbor-82441.herokuapp.com/products/".concat(e));case 2:a({type:"DELETE_STREAM",payload:e}),b.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onSignInClick=function(){e.auth.signIn().then((function(t){e.googeUserInfo(t.getBasicProfile())}))},e.onSignOutClick=function(){e.auth.signOut()},e.onAuthChange=function(t){t?e.props.signIn(e.auth.currentUser.get().getId()):(e.props.userLogout(),e.props.signOut())},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"470335105512-20s79ta58s8nr2c6ideqfbnncg9neaql.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance();var t=e.auth.currentUser.get().getBasicProfile();t&&e.googeUserInfo(t),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"authButton",value:function(){var e=this;return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:function(){e.onSignOutClick()},className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out"):r.a.createElement("button",{onClick:function(){e.onSignInClick()},className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign In")}},{key:"googeUserInfo",value:function(e){if(e){var t={userId:e.getId(),name:e.getName(),image:e.getImageUrl(),email:e.getEmail()};this.props.userLogin(t)}}},{key:"render",value:function(){return r.a.createElement("h1",null,this.authButton())}}]),a}(r.a.Component),k=Object(d.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}},userLogin:function(e){return{type:"USER_INFO",payload:e}},userLogout:function(){return{type:"USER_INFO_CLEAR"}}})(C),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"renderFunc",value:function(){if(this.props.auth.isSignedIn)return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{to:"/item/new",className:"item"},r.a.createElement("h3",null,"List Item")),r.a.createElement(p.a,{to:"/item/search",className:"item"},r.a.createElement("h3",null,"Search Item")))}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(p.a,{to:"/",className:"item"},r.a.createElement("h2",null,"Iborrow App")),r.a.createElement("div",{className:"right menu"},this.renderFunc(),r.a.createElement(k,null)))}}]),a}(r.a.Component),w=Object(d.b)((function(e){return{auth:e.auth}}),{})(S),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return this.props.auth?r.a.createElement("div",null,r.a.createElement("h1",null,"WELCOME TO I BORROW APP"),r.a.createElement("h6",null,"Click on List Item/ Search Item to start using the app")):r.a.createElement("div",null,r.a.createElement("h1",null,"WELCOME TO I BORROW APP"),r.a.createElement("h6",null,"TO START USING THE FUNCTIONALITY SIGN IN WITH GOOGLE"))}}]),a}(r.a.Component),P=Object(d.b)((function(e){return{auth:e.auth.isSignedIn}}))(D),T=a(274),A=a(273),L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).renderInput=function(t){var a=t.input,n=t.label,i=t.type,c=t.meta,o="field ".concat(c.touched&&c.error?"error":"");return r.a.createElement("div",{className:o},r.a.createElement("h3",null,n),r.a.createElement("input",Object.assign({},a,{type:i,autoComplete:"off"})),e.renderError(c))},e.onSubmit=function(t){e.props.addProduct(t)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition((function(t){e.props.setLocation(t.coords)}),(function(e){console.log(e)}))}},{key:"renderError",value:function(e){if(e.touched&&e.error)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},e.error))}},{key:"render",value:function(){return r.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement(T.a,{name:"name",label:"Item Name",component:this.renderInput,type:"text"}),r.a.createElement(T.a,{name:"price",label:"Price",component:this.renderInput,type:"number"}),r.a.createElement(T.a,{name:"url",label:"Image URL",component:this.renderInput,type:"text"}),r.a.createElement(T.a,{name:"from",label:"Available From",component:this.renderInput,type:"date"}),r.a.createElement(T.a,{name:"till",label:"Available To",component:this.renderInput,type:"date"}),r.a.createElement(T.a,{name:"description",label:"Item Description",component:this.renderInput,type:"text"}),r.a.createElement("h3",null,"Your Location:"),r.a.createElement("h4",null,"Latitude: ",this.props.loc.lat),r.a.createElement("h4",null,"Longitude: ",this.props.loc.long),r.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),a}(r.a.Component),x=Object(A.a)({form:"listItem",validate:function(e){var t=new Date(e.from),a=new Date(e.till),n={};return e.name||(n.name="Please Enter The Name Of The Item"),a<t&&(n.from="Please Enter Valid Dates",n.till="Please Enter Valid Dates"),e.price||(n.price="This Field Cannot Be Left Blank"),e.price<0&&(n.price="Price Should Be Greater Than Zero"),e.description||(n.description="This Field Cannot Be Left Blank"),n}})(L),_=Object(d.b)((function(e){return{loc:e.loc}}),{setLocation:O,addProduct:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a,n){var r,i,c,o,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n(),i=r.auth,c=r.loc,o=i.userId,t.next=4,N.a.post("https://mighty-harbor-82441.herokuapp.com/",Object(f.a)(Object(f.a)({},e),{},{loc:c,userId:o}));case 4:s=t.sent,a({type:"ADD_PRODUCT",payload:s.data}),b.push("/");case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}})(x),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).renderInput=function(e){var t=e.input,a=e.label;return r.a.createElement("div",null,r.a.createElement("h4",null,a),r.a.createElement("input",Object.assign({},t,{type:"text"})))},n.onSubmit=function(e){e.preventDefault(),n.props.getProducts()},n.state={value:"",term:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getProducts()}},{key:"renderSup",value:function(e){if(e.userId===this.props.currentUserId)return r.a.createElement("div",{className:"right floated content"},r.a.createElement(p.a,{to:"/item/edit/".concat(e.id),className:"ui button primary"},"Edit"),r.a.createElement(p.a,{to:"/item/delete/".concat(e.id),className:"ui button negative"},"Delete"))}},{key:"renderedList",value:function(){var e=this;return this.state.term?this.props.products.map((function(t){return t.name===e.state.term?r.a.createElement("div",{className:"item",key:t.id},e.renderSup(t),r.a.createElement("i",{className:"large middle aligned icon",src:t.url}),r.a.createElement("div",{className:"content"},r.a.createElement(p.a,{to:"/item/".concat(t.id),className:"header"},t.name),r.a.createElement("div",{className:"description"},t.description))):""})):this.props.products.map((function(t){return r.a.createElement("div",{className:"item",key:t.id},e.renderSup(t),r.a.createElement("i",{className:"large middle aligned icon",src:t.url}),r.a.createElement("div",{className:"content"},r.a.createElement(p.a,{to:"/item/".concat(t.id),className:"header"},t.name),r.a.createElement("div",{className:"description"},t.description)))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"ui form",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",onChange:function(t){e.setState({term:t.target.value})},value:this.state.term}),r.a.createElement("button",{className:"ui button primary"},"Search"),r.a.createElement("div",{className:"ui relaxed divided list"},this.renderedList()))}}]),a}(r.a.Component),U=Object(d.b)((function(e){return{products:Object.values(e.prod),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}}),{getProducts:function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://mighty-harbor-82441.herokuapp.com/products");case 2:a=e.sent,t({type:"GET_PRODUCTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(M),q=function(e){return r.a.createElement("div",{className:"ui container"},r.a.createElement("h1",null,"TERMS AND CONDITIONS"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Malesuada pellentesque elit eget gravida cum. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Turpis cursus in hac habitasse. Nec feugiat nisl pretium fusce id velit ut tortor. Amet venenatis urna cursus eget nunc scelerisque. Sollicitudin nibh sit amet commodo nulla. Tempor orci eu lobortis elementum nibh. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Amet consectetur adipiscing elit duis tristique. Aliquam purus sit amet luctus venenatis lectus. Ut diam quam nulla porttitor massa id neque. Vehicula ipsum a arcu cursus vitae congue. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Adipiscing elit pellentesque habitant morbi. Duis ultricies lacus sed turpis tincidunt id aliquet. Arcu bibendum at varius vel pharetra. Amet tellus cras adipiscing enim eu. Rhoncus urna neque viverra justo nec. Ullamcorper sit amet risus nullam eget. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Arcu vitae elementum curabitur vitae nunc sed velit. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus."),r.a.createElement("p",null,"Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Velit euismod in pellentesque massa placerat duis ultricies. Fermentum dui faucibus in ornare quam viverra orci. Nunc sed augue lacus viverra vitae congue eu consequat. Eget arcu dictum varius duis. Sit amet venenatis urna cursus eget nunc. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Habitant morbi tristique senectus et netus et malesuada fames ac. Turpis egestas maecenas pharetra convallis posuere morbi leo. At varius vel pharetra vel turpis. Augue lacus viverra vitae congue eu consequat ac felis donec. Ultrices vitae auctor eu augue ut lectus arcu. At volutpat diam ut venenatis tellus in."),r.a.createElement(p.a,{to:"/item/book/".concat(e.match.params.id),className:"ui green button"},"Book Slot"),r.a.createElement(p.a,{to:"/item/search",className:"ui negative button"},"Browse Other Items"))},R=a(64),B=a(122),F=(a(254),a(255),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProduct(e)}},{key:"renderMap",value:function(){return this.props.loc?r.a.createElement(R.Map,{google:this.props.google,zoom:8,style:{width:"100%",height:"500px"},initialCenter:{lat:this.props.loc.lat,lng:this.props.loc.long}},r.a.createElement(R.Marker,{position:{lat:this.props.loc.lat,lng:this.props.loc.long}})):r.a.createElement("h1",null,"Loading....")}},{key:"calValues",value:function(){if(this.props.from){new Date(this.props.from),new Date(this.props.till);return{startDate:new Date(this.props.from),endDate:new Date(this.props.till)}}return{startDate:new Date,endDate:new Date,key:"selection"}}},{key:"renderDates",value:function(){if(this.props.from)return this.calValues(),r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Availability"),r.a.createElement(B.DateRangePicker,{ranges:[this.calValues()],onChange:function(){return console.log("hello")}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui grid form"},r.a.createElement("div",{className:"eight wide column"},this.renderDates()),r.a.createElement("div",{className:"eight wide column"},this.renderMap()),r.a.createElement(p.a,{to:"/item/payments/".concat(this.props.match.params.id),className:"ui green button"},"Buy Now"),r.a.createElement(p.a,{to:"/item/search",className:"ui negative button"},"Browse Other Items"))}}]),a}(r.a.Component)),G=Object(d.b)((function(e,t){return e.prod[t.match.params.id]?{loc:e.prod[t.match.params.id].loc,from:e.prod[t.match.params.id].from,till:e.prod[t.match.params.id].till}:{}}),{getProduct:I})(F),V=Object(R.GoogleApiWrapper)({apiKey:"AIzaSyAXQub7NBM6wMnGtScgXngxdNx1VqPhpiw"})(G),W=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProduct(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui relaxed divided list"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"right floated content"},r.a.createElement(p.a,{to:"/item/paymentConfirmation/".concat(this.props.match.params.id),className:"ui button green"},"Pay Now")),r.a.createElement("i",{className:"large credit card middle aligned icon "}),r.a.createElement("div",{className:"content"},r.a.createElement("h4",{className:"header"},"Credit Card"),r.a.createElement("div",{className:"description"},"Pay Using Credit Card"))),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"right floated content"},r.a.createElement(p.a,{to:"/item/paymentConfirmation/".concat(this.props.match.params.id),className:"ui button green"},"Pay Now")),r.a.createElement("i",{className:"large money middle aligned icon "}),r.a.createElement("div",{className:"content"},r.a.createElement("h4",{className:"header"},"Cash"),r.a.createElement("div",{className:"description"},"Pay Using Cash"))),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"right floated content"},r.a.createElement(p.a,{to:"/item/paymentConfirmation/".concat(this.props.match.params.id),className:"ui button green"},"Pay Now")),r.a.createElement("i",{className:"large paypal middle aligned icon "}),r.a.createElement("div",{className:"content"},r.a.createElement("h4",{className:"header"},"Paypal"),r.a.createElement("div",{className:"description"},"Pay Using Paypal"))),r.a.createElement(p.a,{to:"/item/search",className:"ui button negative"},"Cancel"))}}]),a}(r.a.Component),X=Object(d.b)((function(e,t){return{item:e.prod[t.match.params.id]}}),{getProduct:I,deleteProduct:j})(W),H=a(62),Y=a.n(H),z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).renderInput=function(e){var t=e.input,a=e.label,i=e.type,c=e.meta,o="field ".concat(c.touched&&c.error?"error":"");return r.a.createElement("div",{className:o},r.a.createElement("h3",null,a),r.a.createElement("input",Object.assign({},t,{type:i,autoComplete:"off"})),n.renderError(c))},n.onSubmit=function(e){n.props.onSubmit(e)},n.state={value:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition((function(t){e.props.setLocation(t.coords)}),(function(e){console.log(e)}))}},{key:"renderError",value:function(e){if(e.touched&&e.error)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},e.error))}},{key:"render",value:function(){return r.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement(T.a,{name:"name",label:"Item Name",component:this.renderInput,type:"text",value:this.state.value}),r.a.createElement(T.a,{name:"price",label:"Price",component:this.renderInput,type:"number"}),r.a.createElement(T.a,{name:"url",label:"Image URL",component:this.renderInput,type:"text"}),r.a.createElement(T.a,{name:"from",label:"Available From",component:this.renderInput,type:"date"}),r.a.createElement(T.a,{name:"till",label:"Available To",component:this.renderInput,type:"date"}),r.a.createElement(T.a,{name:"description",label:"Item Description",component:this.renderInput,type:"text"}),r.a.createElement("h3",null,"Your Location:"),r.a.createElement("h4",null,"Latitude: ",this.props.loc.lat),r.a.createElement("h4",null,"Longitude: ",this.props.loc.long),r.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),a}(r.a.Component),J=Object(A.a)({form:"productForm",validate:function(e){var t=new Date(e.from),a=new Date(e.till),n={};return e.name||(n.name="Please Enter The Name Of The Item"),a<t&&(n.from="Please Enter Valid Dates",n.till="Please Enter Valid Dates"),e.price||(n.price="This Field Cannot Be Left Blank"),e.price<0&&(n.price="Price Should Be Greater Than Zero"),e.description||(n.description="This Field Cannot Be Left Blank"),n}})(z),K=Object(d.b)((function(e){return{loc:e.loc}}),{setLocation:O})(J),Z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.editProduct(e.props.match.params.id,t)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getProduct(this.props.match.params.id)}},{key:"render",value:function(){return this.props.info?r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Product"),r.a.createElement(K,{initialValues:this.props.info,onSubmit:this.onSubmit})):r.a.createElement("div",null,"Loading....")}}]),a}(r.a.Component),Q=Object(d.b)((function(e,t){return{info:e.prod[t.match.params.id]}}),{getProduct:I,editProduct:function(e,t){return function(){var a=Object(E.a)(v.a.mark((function a(n){var r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,N.a.patch("https://mighty-harbor-82441.herokuapp.com/products/".concat(e),t);case 2:r=a.sent,n({type:"EDIT_STREAM",payload:r.data}),b.push("/");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(Z),$=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProduct(e),this.props.getComment(e)}},{key:"renderSup",value:function(){var e=this.props.prod,t=this.props.auth;return console.log(t),e.userId===t.userId&&t.isSignedIn?r.a.createElement("div",{className:"right floated content"},r.a.createElement(p.a,{to:"/item/edit/".concat(e.id),className:"ui button primary"},"Edit"),r.a.createElement(p.a,{to:"/item/delete/".concat(e.id),className:"ui button negative"},"Delete")):r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{to:"/item/insurance/".concat(e.id),className:"ui button green"},"Check Insurance"))}},{key:"renderComment",value:function(){var e=this,t=this.props.comment;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"comment-list"},t&&t.length>0&&t.map((function(e,t){return r.a.createElement("div",{className:"row comment-item",key:t},r.a.createElement("div",{className:"col-1 item-heade"},r.a.createElement("div",{className:"image-head",style:{backgroundImage:"url('".concat(e.image,"')")}})),r.a.createElement("div",{className:"col-7 "},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"item-name"},e.name),r.a.createElement("div",{className:"item-create-time"},e.create_time)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"item-content"},e.content))))}))),r.a.createElement("div",{className:"addComment"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1 text-right"},"Comment"),r.a.createElement("div",{className:"col-7"},r.a.createElement("textarea",{className:"text",placeholder:"Please enter comment content",value:this.state.content,onChange:function(t){e.setState({content:t.target.value})}}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1"}),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"ui button primary",onClick:this.handleAddComment.bind(this)},"Add")))))}},{key:"handleAddComment",value:function(){var e=this;if(this.state.content.trim()){var t=this.props.userInfo,a=this.props.match.params.id,n=Object(f.a)(Object(f.a)({detail_id:a},t),{},{content:this.state.content,create_time:new Date});this.props.addComment(n).then((function(){e.setState({content:""})}))}}},{key:"render",value:function(){if(!this.props.prod)return r.a.createElement("div",null,r.a.createElement("h1",null,"Loading....."));if(this.props.prod){var e=this.props.prod;return r.a.createElement("div",{className:"ui items"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"ui medium image"},r.a.createElement("img",{src:"".concat(e.url)})),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,e.name),r.a.createElement("div",{className:"meta"},r.a.createElement("span",{className:"price"},r.a.createElement("span",null,"Price:"),"\xa0$",e.price,"\xa0"),r.a.createElement("span",{className:"stay"},r.a.createElement("span",null,"Availability:"),"\xa0",Math.abs(new Date(e.till)-new Date(e.from))/864e5,"\xa0days")),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,e.description)))),this.renderSup(),r.a.createElement("div",{className:"comment"},this.renderComment()))}}}]),a}(r.a.Component),ee=Object(d.b)((function(e,t){return console.log("ownprops",t),{prod:e.prod[t.match.params.id],auth:e.auth,userInfo:e.userInfo,comment:e.comment}}),{getProduct:I,addComment:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.post("https://mighty-harbor-82441.herokuapp.com/comments/",e);case 2:return n=t.sent,r=n.data,a({type:"COMMENT_ADD",payload:r||e}),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getComment:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("https://mighty-harbor-82441.herokuapp.com/comments/?detail_id=".concat(e));case 2:return n=t.sent,r=n.data,a(r?{type:"COMMENT_LIST",payload:Array.isArray(r)?r:[r]}:{type:"COMMENT_LIST",payload:[]}),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})($),te=function(e){return c.a.createPortal(r.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},ae=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProduct(e)}},{key:"renderContent",value:function(){return this.props.item?"Are you sure you want to delete this Product:".concat(this.props.item.name,"?"):"Are you sure you want to delete this Product?"}},{key:"renderActions",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){e.props.deleteProduct(e.props.match.params.id)},className:"ui negative button"},"Delete"),r.a.createElement(p.a,{to:"/item/search/",className:"ui button"},"Cancel"))}},{key:"render",value:function(){return r.a.createElement(te,{title:"Delete",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){b.push("/item/search/")}})}}]),a}(r.a.Component),ne=Object(d.b)((function(e,t){return{item:e.prod[t.match.params.id]}}),{getProduct:I,deleteProduct:j})(ae),re=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProduct(e)}},{key:"renderContent",value:function(){return this.props.item?"Are you sure you want to purchase this Product:".concat(this.props.item.name,"?"):"Are you sure you want to purchase this Product?"}},{key:"renderActions",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){alert("Payment Successful Check Email For More Details!"),e.props.deleteProduct(e.props.match.params.id)},className:"ui green button"},"Buy"),r.a.createElement(p.a,{to:"/item/search/",className:"ui button"},"Cancel"))}},{key:"render",value:function(){var e=this;return r.a.createElement(te,{title:"Delete",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){b.push("/item/payments/".concat(e.props.match.params.id))}})}}]),a}(r.a.Component),ie=Object(d.b)((function(e,t){return{item:e.prod[t.match.params.id]}}),{getProduct:I,deleteProduct:j})(re),ce=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(m.b,{history:b},r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:P}),r.a.createElement(m.a,{path:"/item/new",exact:!0,component:_}),r.a.createElement(m.a,{path:"/item/search",exact:!0,component:U}),r.a.createElement(m.a,{path:"/item/insurance/:id",exact:!0,component:q}),r.a.createElement(m.a,{path:"/item/book/:id",exact:!0,component:V}),r.a.createElement(m.a,{path:"/item/payments/:id",exact:!0,component:X}),r.a.createElement(m.a,{path:"/item/edit/:id",exact:!0,component:Q}),r.a.createElement(m.a,{path:"/item/:id",exact:!0,component:ee}),r.a.createElement(m.a,{path:"/item/delete/:id",exact:!0,component:ne}),r.a.createElement(m.a,{path:"/item/paymentConfirmation/:id",exact:!0,component:ie})))))}}]),a}(r.a.Component),oe=a(13),se=a(275),le={isSignedIn:null,userId:null},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(f.a)(Object(f.a)({},e),{},{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(f.a)(Object(f.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lat:"",long:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOCATION":return{lat:t.payload.latitude,long:t.payload.longitude};default:return e}},pe=a(41),de=Object(oe.c)({auth:ue,form:se.a,loc:me,prod:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return Object(f.a)(Object(f.a)({},e),Y.a.mapKeys(t.payload,"id"));case"ADD_PRODUCT":case"GET_PRODUCT":case"EDIT_PRODUCT":return Object(f.a)(Object(f.a)({},e),{},Object(pe.a)({},t.payload.id,t.payload));case"DELETE_STREAM":return Y.a.omit(e,t.payload);default:return e}},userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_INFO":return Object(f.a)(Object(f.a)({},e),t.payload);case"USER_INFO_CLEAR":return{};default:return e}},comment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMMENT_ADD":return e.push(t.payload),e;case"COMMENT_LIST":return e=t.payload||[];default:return e}}}),he=a(123),ve=(a(271),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.d);c.a.render(r.a.createElement(d.a,{store:Object(oe.e)(de,ve(Object(oe.a)(he.a)))},r.a.createElement(ce,null)),document.querySelector("#root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.39e61040.chunk.js.map