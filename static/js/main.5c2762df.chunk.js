(window["webpackJsonpgoatworld-client"]=window["webpackJsonpgoatworld-client"]||[]).push([[0],{27:function(e,t,a){e.exports=a(44)},32:function(e,t,a){},33:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),c=(a(32),a(33),a(14)),u=a(3),i=a(22),s=(a(34),a(36),{apiKey:"AIzaSyAqfueFkaSmJpkREl55-mOuGtyWi7fihk0",authDomain:"goatw0rld.firebaseapp.com",databaseURL:"https://goatw0rld.firebaseio.com",projectId:"goatw0rld",storageBucket:"",messagingSenderId:"336826211186",appId:"1:336826211186:web:058fecadb50821877d9beb"}),m=i.initializeApp(s),p=a(26),d=r.a.createContext(),f=function(e){var t=e.children,a=Object(n.useState)(null),o=Object(p.a)(a,2),l=o[0],c=o[1];return Object(n.useEffect)((function(){m.auth().onAuthStateChanged((function(e){e?m.database().ref("goats/"+e.uid).on("value",(function(t){console.log("new user ".concat(e.uid)),console.log("got user data ".concat(t.val()));var a=t.val();c({user:e,data:a})})):c(null)}))}),[]),r.a.createElement(d.Provider,{value:{currentUser:l}},t)},b=["poopy","flufy","farty","scratchy","happy","goaty","grumpy","slapy","burpy","rainbow","naked"],h=["butt butt","goat","poop","mcgoatyface","mcgoatington","mario","moonshine","underwear","supergoat","guys"];var g=function(){var e=b[Math.floor(Math.random()*b.length)],t=h[Math.floor(Math.random()*h.length)];return"".concat(e," ").concat(t)},E=Object(u.f)((function(){var e=Object(n.useContext)(d).currentUser;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Your goat name is ",e.data.name)," ",r.a.createElement("button",{onClick:function(){m.database().ref("goats/"+e.user.uid).set({name:g()})}}," Rename "),r.a.createElement("button",{onClick:function(){m.auth().signOut()}}," Sign out "))})),v=a(8),w=a.n(v),y=a(10),k=Object(u.f)((function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(y.a)(w.a.mark((function e(a){var n,r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,o=n.password,e.prev=2,e.next=5,m.auth().signInWithEmailAndPassword(r.value,o.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.useContext)(d).currentUser?r.a.createElement(u.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Log in"),r.a.createElement("form",{onSubmit:a},r.a.createElement("label",null,"Email",r.a.createElement("input",{name:"email",type:"email",placeholder:"Email"})),r.a.createElement("label",null,"Password",r.a.createElement("input",{name:"password",type:"password",placeholder:"Password"})),r.a.createElement("button",{type:"submit"},"Log in")))})),O=Object(u.f)((function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(y.a)(w.a.mark((function e(a){var n,r,o,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,o=n.password,e.prev=2,e.next=5,m.auth().createUserWithEmailAndPassword(r.value,o.value);case 5:l=e.sent,console.log(l),m.database().ref("goats/"+l.user.uid).set({name:g()}),t.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign up"),r.a.createElement("form",{onSubmit:a},r.a.createElement("label",null,"Email",r.a.createElement("input",{name:"email",type:"email",placeholder:"Email"})),r.a.createElement("label",null,"Password",r.a.createElement("input",{name:"password",type:"password",placeholder:"Password"})),r.a.createElement("button",{type:"submit"},"Sign Up")))})),j=a(25),x=function(e){var t=e.component,a=Object(j.a)(e,["component"]),o=Object(n.useContext)(d).currentUser;return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return o?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/login"})}}))},S=function(){return r.a.createElement(f,null,r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(x,{exact:!0,path:"/",component:E}),r.a.createElement(u.b,{exact:!0,path:"/login",component:k}),r.a.createElement(u.b,{exact:!0,path:"/signup",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.5c2762df.chunk.js.map