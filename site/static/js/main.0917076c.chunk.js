(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/001.0fb3d867.jpg"},33:function(e,t,a){e.exports=a(59)},38:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),s=a.n(o);a(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(62),l=a(61),c=(a(39),a(40),a(43),a(60)),u=r.a.createContext(null),m=a(3),d=a(4),p=a(6),h=a(5),f=a(7),E=r.a.createContext(null),g=function(e){return function(t){return r.a.createElement(E.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},b=E,v=a(14),O=a.n(v),S=(a(48),a(50),{apiKey:"AIzaSyCfcqEtePmv6RcULmQeEtt82mhGOMupdqU",authDomain:"farmersaleplatfo-1561457656175.firebaseapp.com",databaseURL:"https://farmersaleplatfo-1561457656175.firebaseio.com",projectId:"farmersaleplatfo-1561457656175",storageBucket:"",messagingSenderId:"798114275164",appId:"1:798114275164:web:c5df9369173d7887"}),j=function e(){var t=this;Object(m.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignInWithTwitter=function(){return t.auth.signInWithPopup(t.twitterProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:Object({NODE_ENV:"production",PUBLIC_URL:"./site"}).REACT_APP_CONFIRMATION_EMAIL_REDIRECT})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,a){return t.auth.onAuthStateChanged(function(n){n?t.user(n.uid).once("value").then(function(a){console.log(t.user);var r=a.val();console.log(r),console.log(n),e(n)}):a()})},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.message=function(e){return t.db.ref("messages/".concat(e))},this.messages=function(){return t.db.ref("messages")},O.a.initializeApp(S),this.serverValue=O.a.database.ServerValue,this.emailAuthProvider=O.a.auth.EmailAuthProvider,this.auth=O.a.auth(),this.db=O.a.database(),this.googleProvider=new O.a.auth.GoogleAuthProvider,this.facebookProvider=new O.a.auth.FacebookAuthProvider,this.twitterProvider=new O.a.auth.TwitterAuthProvider},y=function(e){var t=function(t){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(f.a)(a,t),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener(function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})},function(){localStorage.removeItem("authUser"),e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(u.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),a}(r.a.Component);return g(t)},w=a(64),k=a(10),C="/home",N=function(e){return function(t){var a=function(a){function n(){return Object(m.a)(this,n),Object(p.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(f.a)(n,a),Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener(function(a){e(a)||t.props.history.push("/signin")},function(){return t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(u.Consumer,null,function(n){return e(n)?r.a.createElement(t,a.props):null})}}]),n}(r.a.Component);return Object(k.a)(w.a,g)(a)}},M=function(e){var t=function(t){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).onSendEmailVerification=function(){t.props.firebase.doSendEmailVerification().then(function(){return t.setState({isSent:!0})})},t.state={isSent:!1},t}return Object(f.a)(a,t),Object(d.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(u.Consumer,null,function(a){return function(e){return e&&!e.emailVerified&&e.providerData.map(function(e){return e.providerId}).includes("password")}(a)?r.a.createElement("div",null,t.state.isSent?r.a.createElement("p",null,"E-Mail confirmation sent: Check your E-Mails (Spam folder included) for a confirmation E-Mail. Refresh this page once you confirmed your E-Mail."):r.a.createElement("p",null,"Verify your E-Mail: Check your E-Mails (Spam folder included) for a confirmation E-Mail or send another confirmation E-Mail."),r.a.createElement("button",{type:"button",onClick:t.onSendEmailVerification,disabled:t.state.isSent},"Send confirmation E-Mail")):r.a.createElement(e,t.props)})}}]),a}(r.a.Component);return g(t)},P=g(function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")}),I="ADMIN",U=function(e){e.authUser;return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.a,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(c.a,{to:C},"Home")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/account"},"Account")),r.a.createElement("li",null,r.a.createElement(P,null)))},x=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/",onClick:function(e){return e.preventDefault()}},"Farmer Market"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(c.a,{className:"nav-link",to:"/"},"Landing")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.a,{className:"nav-link",to:"/signin"},"Sign In")))))},A=function(){return r.a.createElement(u.Consumer,null,function(e){return e?r.a.createElement(U,{authUser:e}):r.a.createElement(x,null)})},T=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Landing"))},L=a(12),D=a(8),R=(a(57),a(28)),W={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},F="auth/email-already-in-use",V="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n",_=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,r=t.email,o=t.passwordOne,s=t.isAdmin,i={};s&&(i[I]=I),a.props.firebase.doCreateUserWithEmailAndPassword(r,o).then(function(e){return a.props.firebase.user(e.user.uid).set({username:n,email:r,roles:i})}).then(function(){return a.props.firebase.doSendEmailVerification()}).then(function(){a.setState(Object(D.a)({},W)),a.props.history.push(C)}).catch(function(e){e.code===F&&(e.message=V),a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a.onChangeCheckbox=function(e){a.setState(Object(L.a)({},e.target.name,e.target.checked))},a.state=Object(D.a)({},W),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,o=e.passwordTwo,s=e.isAdmin,i=e.error,l=n!==o||""===n||""===a||""===t;return r.a.createElement("div",{className:"container",style:{backgroundImage:"url(".concat(R,")")}},r.a.createElement("div",{className:"d-flex justify-content-center h-100"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Sign Up")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{name:"username",className:"form-control",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"})),r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-envelope"}))),r.a.createElement("input",{name:"email",className:"form-control",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address"})),r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-key"}))),r.a.createElement("input",{name:"passwordOne",className:"form-control",value:n,onChange:this.onChange,type:"password",placeholder:"Password"})),r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-key"}))),r.a.createElement("input",{name:"passwordTwo",className:"form-control",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn float-right login_btn",disabled:l,type:"submit"}," Sign Up ")),i&&r.a.createElement("p",null,i.message)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("label",null," Admin: ",r.a.createElement("input",{name:"isAdmin",type:"checkbox",checked:s,onChange:this.onChangeCheckbox})," "))))))}}]),t}(n.Component),q=function(){return r.a.createElement("div",{className:"d-flex justify-content-center links"},"Don't have an account?",r.a.createElement(c.a,{to:"/signup"},"Sign Up"))},B=Object(k.a)(w.a,g)(_),G=function(){return r.a.createElement("div",null,r.a.createElement(B,null))},J=(a(58),{email:"",error:null}),H=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;a.props.firebase.doPasswordReset(t).then(function(){a.setState(Object(D.a)({},J))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a.state=Object(D.a)({},J),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(n.Component),z=function(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(c.a,{to:"/pw-forget"},"Forgot Password?"))},K=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(Q,null))},Q=g(H),$=a(28),X={email:"",password:"",error:null},Y="auth/account-exists-with-different-credential",Z="\n  An account with an E-Mail address to\n  this social account already exists. Try to login from\n  this account instead and associate your social accounts on\n  your personal account page.\n",ee=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,r=t.password;a.props.firebase.doSignInWithEmailAndPassword(n,r).then(function(){a.setState(Object(D.a)({},X)),a.props.history.push(C)}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a.state=Object(D.a)({},X),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,o=""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("input",{name:"email",className:"form-control",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"})),r.a.createElement("div",{className:"input-group form-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-key"}))),r.a.createElement("input",{name:"password",className:"form-control",value:a,onChange:this.onChange,type:"password",placeholder:"Password"})),r.a.createElement("div",{className:"row align-items-center remember"},r.a.createElement("input",{type:"checkbox"}),"Remember Me"),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{disabled:o,type:"submit",className:"btn float-right login_btn"},"Sign In")),n&&r.a.createElement("p",null,n.message))}}]),t}(n.Component),te=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){a.props.firebase.doSignInWithGoogle().then(function(e){return a.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email,roles:{}})}).then(function(){a.setState({error:null}),a.props.history.push(C)}).catch(function(e){e.code===Y&&(e.message=Z),a.setState({error:e})}),e.preventDefault()},a.state={error:null},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:this.onSubmit},r.a.createElement("i",{className:"fab fa-google-plus-square"})),e&&r.a.createElement("p",null,e.message))}}]),t}(n.Component),ae=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){a.props.firebase.doSignInWithFacebook().then(function(e){return a.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:{}})}).then(function(){a.setState({error:null}),a.props.history.push(C)}).catch(function(e){e.code===Y&&(e.message=Z),a.setState({error:e})}),e.preventDefault()},a.state={error:null},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:this.onSubmit},r.a.createElement("i",{className:"fab fa-facebook-square"})),e&&r.a.createElement("p",null,e.message))}}]),t}(n.Component),ne=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){a.props.firebase.doSignInWithTwitter().then(function(e){return a.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:{}})}).then(function(){a.setState({error:null}),a.props.history.push(C)}).catch(function(e){e.code===Y&&(e.message=Z),a.setState({error:e})}),e.preventDefault()},a.state={error:null},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:this.onSubmit},r.a.createElement("i",{className:"fab fa-twitter-square"})),e&&r.a.createElement("p",null,e.message))}}]),t}(n.Component),re=Object(k.a)(w.a,g)(ee),oe=Object(k.a)(w.a,g)(te),se=Object(k.a)(w.a,g)(ae),ie=Object(k.a)(w.a,g)(ne),le=function(){return r.a.createElement("div",{className:"container",style:{backgroundImage:"url(".concat($,")")}},r.a.createElement("div",{className:"d-flex justify-content-center h-100"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Sign In"),r.a.createElement("div",{className:"d-flex justify-content-end social_icon"},r.a.createElement(se,null),r.a.createElement(oe,null),r.a.createElement(ie,null))),r.a.createElement("div",{className:"card-body"},r.a.createElement(re,null)),r.a.createElement("div",{className:"card-footer"},r.a.createElement(q,null),r.a.createElement(z,null)))))},ce=a(32),ue=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onToggleEditMode=function(){a.setState(function(e){return{editMode:!e.editMode,editText:a.props.message.text}})},a.onChangeEditText=function(e){a.setState({editText:e.target.value})},a.onSaveEditText=function(){a.props.onEditMessage(a.props.message,a.state.editText),a.setState({editMode:!1})},a.state={editMode:!1,editText:a.props.message.text},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authUser,a=e.message,n=e.onRemoveMessage,o=this.state,s=o.editMode,i=o.editText;return r.a.createElement("li",null,s?r.a.createElement("input",{type:"text",value:i,onChange:this.onChangeEditText}):r.a.createElement("span",null,r.a.createElement("strong",null,a.userId)," ",a.text,a.editedAt&&r.a.createElement("span",null,"(Edited)")),t.uid===a.userId&&r.a.createElement("span",null,s?r.a.createElement("span",null,r.a.createElement("button",{onClick:this.onSaveEditText},"Save"),r.a.createElement("button",{onClick:this.onToggleEditMode},"Reset")):r.a.createElement("button",{onClick:this.onToggleEditMode},"Edit"),!s&&r.a.createElement("button",{type:"button",onClick:function(){return n(a.uid)}},"Delete")))}}]),t}(n.Component),me=function(e){var t=e.authUser,a=e.messages,n=e.onEditMessage,o=e.onRemoveMessage;return r.a.createElement("ul",null,a.map(function(e){return r.a.createElement(ue,{authUser:t,key:e.uid,message:e,onEditMessage:n,onRemoveMessage:o})}))},de=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onListenForMessages=function(){a.setState({loading:!0}),a.props.firebase.messages().orderByChild("createdAt").limitToLast(a.state.limit).on("value",function(e){var t=e.val();if(t){var n=Object.keys(t).map(function(e){return Object(D.a)({},t[e],{uid:e})});a.setState({messages:n,loading:!1})}else a.setState({messages:null,loading:!1})})},a.onChangeText=function(e){a.setState({text:e.target.value})},a.onCreateMessage=function(e,t){a.props.firebase.messages().push({text:a.state.text,userId:t.uid,createdAt:a.props.firebase.serverValue.TIMESTAMP}),a.setState({text:""}),e.preventDefault()},a.onEditMessage=function(e,t){e.uid;var n=Object(ce.a)(e,["uid"]);a.props.firebase.message(e.uid).set(Object(D.a)({},n,{text:t,editedAt:a.props.firebase.serverValue.TIMESTAMP}))},a.onRemoveMessage=function(e){a.props.firebase.message(e).remove()},a.onNextPage=function(){a.setState(function(e){return{limit:e.limit+5}},a.onListenForMessages)},a.state={text:"",loading:!1,messages:[],limit:5},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.onListenForMessages()}},{key:"componentWillUnmount",value:function(){this.props.firebase.messages().off()}},{key:"render",value:function(){var e=this,t=this.state,a=t.text,n=t.messages,o=t.loading;return r.a.createElement(u.Consumer,null,function(t){return r.a.createElement("div",null,!o&&n&&r.a.createElement("button",{type:"button",onClick:e.onNextPage},"More"),o&&r.a.createElement("div",null,"Loading ..."),n&&r.a.createElement(me,{authUser:t,messages:n,onEditMessage:e.onEditMessage,onRemoveMessage:e.onRemoveMessage}),!n&&r.a.createElement("div",null,"There are no messages ..."),r.a.createElement("form",{onSubmit:function(a){return e.onCreateMessage(a,t)}},r.a.createElement("input",{type:"text",value:a,onChange:e.onChangeText}),r.a.createElement("button",{type:"submit"},"Send")))})}}]),t}(n.Component),pe=g(de),he=Object(k.a)(M,N(function(e){return!!e}))(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"),r.a.createElement("p",null,"The Home Page is accessible by every signed in user."),r.a.createElement(pe,null))}),fe={passwordOne:"",passwordTwo:"",error:null},Ee=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.passwordOne;a.props.firebase.doPasswordUpdate(t).then(function(){a.setState(Object(D.a)({},fe))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a.state=Object(D.a)({},fe),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=e.error,o=t!==a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(n.Component),ge=g(Ee),be=[{id:"password",provider:null},{id:"google.com",provider:"googleProvider"},{id:"facebook.com",provider:"facebookProvider"},{id:"twitter.com",provider:"twitterProvider"}],ve=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).fetchSignInMethods=function(){a.props.firebase.auth.fetchSignInMethodsForEmail(a.props.authUser.email).then(function(e){return a.setState({activeSignInMethods:e,error:null})}).catch(function(e){return a.setState({error:e})})},a.onSocialLoginLink=function(e){a.props.firebase.auth.currentUser.linkWithPopup(a.props.firebase[e]).then(a.fetchSignInMethods).catch(function(e){return a.setState({error:e})})},a.onDefaultLoginLink=function(e){var t=a.props.firebase.emailAuthProvider.credential(a.props.authUser.email,e);a.props.firebase.auth.currentUser.linkAndRetrieveDataWithCredential(t).then(a.fetchSignInMethods).catch(function(e){return a.setState({error:e})})},a.onUnlink=function(e){a.props.firebase.auth.currentUser.unlink(e).then(a.fetchSignInMethods).catch(function(e){return a.setState({error:e})})},a.state={activeSignInMethods:[],error:null},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchSignInMethods()}},{key:"render",value:function(){var e=this,t=this.state,a=t.activeSignInMethods,n=t.error;return r.a.createElement("div",null,"Sign In Methods:",r.a.createElement("ul",null,be.map(function(t){var n=1===a.length,o=a.includes(t.id);return r.a.createElement("li",{key:t.id},"password"===t.id?r.a.createElement(Se,{onlyOneLeft:n,isEnabled:o,signInMethod:t,onLink:e.onDefaultLoginLink,onUnlink:e.onUnlink}):r.a.createElement(Oe,{onlyOneLeft:n,isEnabled:o,signInMethod:t,onLink:e.onSocialLoginLink,onUnlink:e.onUnlink}))})),n&&n.message)}}]),t}(n.Component),Oe=function(e){var t=e.onlyOneLeft,a=e.isEnabled,n=e.signInMethod,o=e.onLink,s=e.onUnlink;return a?r.a.createElement("button",{type:"button",onClick:function(){return s(n.id)},disabled:t},"Deactivate ",n.id):r.a.createElement("button",{type:"button",onClick:function(){return o(n.provider)}},"Link ",n.id)},Se=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),a.props.onLink(a.state.passwordOne),a.setState({passwordOne:"",passwordTwo:""})},a.onChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a.state={passwordOne:"",passwordTwo:""},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onlyOneLeft,a=e.isEnabled,n=e.signInMethod,o=e.onUnlink,s=this.state,i=s.passwordOne,l=s.passwordTwo,c=i!==l||""===i;return a?r.a.createElement("button",{type:"button",onClick:function(){return o(n.id)},disabled:t},"Deactivate ",n.id):r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:i,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:c,type:"submit"},"Link ",n.id))}}]),t}(n.Component),je=g(ve),ye=Object(k.a)(M,N(function(e){return!!e}))(function(){return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(Q,null),r.a.createElement(ge,null),r.a.createElement(je,{authUser:e}))})}),we=a(63),ke=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={loading:!1,users:[]},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var a=t.val(),n=Object.keys(a).map(function(e){return Object(D.a)({},a[e],{uid:e})});e.setState({users:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),a&&r.a.createElement("div",null,"Loading ..."),r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username),r.a.createElement("span",null,r.a.createElement(c.a,{to:{pathname:"".concat("/admin","/").concat(e.uid),state:{user:e}}},"Details")))})))}}]),t}(n.Component),Ce=g(ke),Ne=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSendPasswordResetEmail=function(){a.props.firebase.doPasswordReset(a.state.user.email)},a.state=Object(D.a)({loading:!1,user:null},e.location.state),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.user||(this.setState({loading:!0}),this.props.firebase.user(this.props.match.params.id).on("value",function(t){e.setState({user:t.val(),loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.user(this.props.match.params.id).off()}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"User (",this.props.match.params.id,")"),a&&r.a.createElement("div",null,"Loading ..."),t&&r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",t.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",t.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",t.username),r.a.createElement("span",null,r.a.createElement("button",{type:"button",onClick:this.onSendPasswordResetEmail},"Send Password Reset"))))}}]),t}(n.Component),Me=g(Ne),Pe=Object(k.a)(M,N(function(e){return e&&!!e.roles[I]}))(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement("p",null,"The Admin Page is accessible by every signed in admin user."),r.a.createElement(we.a,null,r.a.createElement(l.a,{exact:!0,path:"/admin/:id",component:Me}),r.a.createElement(l.a,{exact:!0,path:"/admin",component:Ce})))}),Ie=y(function(){return r.a.createElement(i.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(l.a,{exact:!0,path:"/",component:T}),r.a.createElement(l.a,{path:"/signup",component:G}),r.a.createElement(l.a,{path:"/signin",component:le}),r.a.createElement(l.a,{path:"/pw-forget",component:K}),r.a.createElement(l.a,{path:C,component:he}),r.a.createElement(l.a,{path:"/account",component:ye}),r.a.createElement(l.a,{path:"/admin",component:Pe})))});s.a.render(r.a.createElement(b.Provider,{value:new j},r.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.0917076c.chunk.js.map