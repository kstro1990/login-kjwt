(function(e){function t(t){for(var o,c,u=t[0],l=t[1],s=t[2],i=0,f=[];i<u.length;i++)c=u[i],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);b&&b(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c26d44aa"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var s=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(i);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var i=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var b=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"navbar  navbar-dark bg-dark navbar-expand-lg navbar-light bg-light"},a={class:"collapse navbar-collapse",id:"nav"},c={class:"navbar-nav mr-auto"},u={class:"nav-item active"},l=Object(o["e"])("Home"),s={class:"nav-item"},i=Object(o["e"])("About"),b={class:"navbar-text"};function f(e,t,n,f,p,d){var m=Object(o["s"])("router-link"),v=Object(o["s"])("router-view");return Object(o["o"])(),Object(o["d"])(o["a"],null,[Object(o["f"])("nav",r,[Object(o["f"])("div",a,[Object(o["f"])("ul",c,[Object(o["f"])("li",u,[Object(o["f"])(m,{to:"/",class:"nav-link"},{default:Object(o["z"])((function(){return[l]})),_:1})]),Object(o["f"])("li",s,[Object(o["f"])(m,{class:"nav-link",to:"/about"},{default:Object(o["z"])((function(){return[i]})),_:1})])]),Object(o["f"])("span",b,[Object(o["f"])("button",{onClick:t[1]||(t[1]=function(){return e.cerrarSesion.apply(e,arguments)}),class:"btn btn-link"},"Cerrar Sesion")])])]),Object(o["f"])(v)],64)}var p=n("5530"),d=n("5502"),m={methods:Object(p["a"])({},Object(d["b"])(["obtenerToken","cerrarSesion"])),created:function(){this.obtenerToken()}};m.render=f;var v=m,j=(n("45fc"),n("d3b7"),n("6c02")),O={class:"container"},h={class:"row"},g={class:"card",style:{width:"18rem"}},k={class:"card-body"},y=Object(o["f"])("h5",{class:"card-title"},"Card title",-1),w={class:"form-group"},x=Object(o["f"])("label",{for:"exampleInputEmail1"},"Email address",-1),S=Object(o["f"])("small",{id:"emailHelp",class:"form-text text-muted"},"We'll never share your email with anyone else.",-1),T={class:"form-group"},P=Object(o["f"])("label",{for:"exampleInputPassword1"},"Password",-1),A=Object(o["f"])("button",{type:"submit",class:"btn btn-primary"},"Acceder",-1);function I(e,t,n,r,a,c){return Object(o["o"])(),Object(o["d"])("div",O,[Object(o["f"])("div",h,[Object(o["f"])("div",g,[Object(o["f"])("div",k,[y,Object(o["f"])("form",{onSubmit:t[3]||(t[3]=Object(o["B"])((function(t){return e.login(a.usuario)}),["prevent"]))},[Object(o["f"])("div",w,[x,Object(o["A"])(Object(o["f"])("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.usuario.email=e})},null,512),[[o["w"],a.usuario.email]]),S]),Object(o["f"])("div",T,[P,Object(o["A"])(Object(o["f"])("input",{type:"password",class:"form-control",id:"exampleInputPassword1","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.usuario.password=e})},null,512),[[o["w"],a.usuario.password]])]),A],32),Object(o["e"])(" "+Object(o["u"])(a.usuario),1)])])])])}var _={data:function(){return{usuario:{email:"toma1@wprueba.com",password:"789630"}}},methods:Object(p["a"])({},Object(d["b"])(["login"]))};_.render=I;var E=_,C=(n("96cf"),n("1da1")),H=Object(d["a"])({state:{token:null},mutations:{setToken:function(e,t){e.token=t}},actions:{login:function(e,t){return Object(C["a"])(regeneratorRuntime.mark((function n(){var o,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,console.log(t.email),console.log(t.password),n.prev=3,n.next=6,fetch("https://lucho-login.herokuapp.com/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 6:return r=n.sent,n.next=9,r.json();case 9:a=n.sent,console.log(a.data),console.log(a.token.token),o("setToken",a.token.token),localStorage.setItem("token",a.token.token),n.next=19;break;case 16:n.prev=16,n.t0=n["catch"](3),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[3,16]])})))()},obtenerToken:function(e){var t=e.commit;localStorage.getItem("token")?t("setToken",localStorage.getItem("token")):t("setToken",null)},cerrarSesion:function(e){var t=e.commit;t("setToken",null),localStorage.removeItem("token")}},modules:{}}),M=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{requireAuth:!0}}],q=Object(j["a"])({history:Object(j["b"])("/"),routes:M});q.beforeEach((function(e,t,n){var o=e.matched.some((function(e){return e.meta.requireAuth}));o&&null===H.state.token?n({name:"Home"}):(console.log("no es protegida"),n())}));var J=q;Object(o["c"])(v).use(H).use(J).mount("#app")}});
//# sourceMappingURL=app.2dc24059.js.map