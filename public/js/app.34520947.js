(function(e){function t(t){for(var o,u,c=t[0],i=t[1],l=t[2],s=0,p=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e2344e4b"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},a=Object(o["e"])("Home"),u=Object(o["e"])(" | "),c=Object(o["e"])("About");function i(e,t,n,i,l,s){var f=Object(o["s"])("router-link"),p=Object(o["s"])("router-view");return Object(o["o"])(),Object(o["d"])(o["a"],null,[Object(o["f"])("div",r,[Object(o["f"])(f,{to:"/"},{default:Object(o["z"])((function(){return[a]})),_:1}),u,Object(o["f"])(f,{to:"/about"},{default:Object(o["z"])((function(){return[c]})),_:1}),Object(o["f"])("button",{onClick:t[1]||(t[1]=function(){return e.cerrarSesion.apply(e,arguments)})},"Cerrar Sesion")]),Object(o["f"])(p)],64)}var l=n("5530"),s=n("5502"),f={methods:Object(l["a"])({},Object(s["b"])(["obtenerToken","cerrarSesion"])),created:function(){this.obtenerToken()}};f.render=i;var p=f,b=(n("45fc"),n("d3b7"),n("6c02")),d=n("cf05"),m=n.n(d),j={class:"home"},O=Object(o["f"])("img",{alt:"Vue logo",src:m.a},null,-1),h=Object(o["f"])("button",{type:"submit"},"Acceder",-1);function g(e,t,n,r,a,u){return Object(o["o"])(),Object(o["d"])("div",j,[O,Object(o["f"])("form",{onSubmit:t[3]||(t[3]=Object(o["B"])((function(t){return e.login(a.usuario)}),["prevent"]))},[Object(o["A"])(Object(o["f"])("input",{type:"text",placeholder:"Ingrese email","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.usuario.email=e})},null,512),[[o["w"],a.usuario.email]]),Object(o["A"])(Object(o["f"])("input",{type:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.usuario.password=e})},null,512),[[o["w"],a.usuario.password]]),h],32),Object(o["e"])(" "+Object(o["u"])(a.usuario),1)])}var v={data:function(){return{usuario:{email:"toma1@wprueba.com",password:"789630"}}},methods:Object(l["a"])({},Object(s["b"])(["login"]))};v.render=g;var k=v,y=(n("96cf"),n("1da1")),w=Object(s["a"])({state:{token:null},mutations:{setToken:function(e,t){e.token=t}},actions:{login:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var o,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,console.log(t.email),console.log(t.password),n.prev=3,n.next=6,fetch("http://localhost:3001/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 6:return r=n.sent,n.next=9,r.json();case 9:a=n.sent,console.log(a.data),console.log(a.token.token),o("setToken",a.token.token),localStorage.setItem("token",a.token.token),n.next=19;break;case 16:n.prev=16,n.t0=n["catch"](3),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[3,16]])})))()},obtenerToken:function(e){var t=e.commit;localStorage.getItem("token")?t("setToken",localStorage.getItem("token")):t("setToken",null)},cerrarSesion:function(e){var t=e.commit;t("setToken",null),localStorage.removeItem("token")}},modules:{}}),S=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{requireAuth:!0}}],T=Object(b["a"])({history:Object(b["b"])("/"),routes:S});T.beforeEach((function(e,t,n){var o=e.matched.some((function(e){return e.meta.requireAuth}));o&&null===w.state.token?n({name:"Home"}):(console.log("no es protegida"),n())}));var x=T;Object(o["c"])(p).use(w).use(x).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.34520947.js.map