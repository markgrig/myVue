(function(e){function t(t){for(var o,u,a=t[0],i=t[1],b=t[2],s=0,l=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&l.push(r[u][0]),r[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,b||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var b=0;b<a.length;b++)t(a[b]);var f=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"223c":function(e,t,n){},"33b0":function(e,t,n){},5631:function(e,t,n){"use strict";n("638d")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r=n("6605");function c(e,t,n,r,c,u){return Object(o["o"])(),Object(o["c"])("button")}var u={name:"blueButton"},a=n("6b0d"),i=n.n(a);const b=i()(u,[["render",c]]);var f=b;const s=[f],l={class:"home-router"};function p(e,t,n,r,c,u){const a=Object(o["u"])("router-link"),i=Object(o["u"])("router-view");return Object(o["o"])(),Object(o["c"])("div",l,[Object(o["f"])(a,{to:"/"},{default:Object(o["z"])(()=>[Object(o["e"])("Go to Home ")]),_:1}),Object(o["f"])(a,{to:"/home1"},{default:Object(o["z"])(()=>[Object(o["e"])("Go to Home1")]),_:1}),Object(o["f"])(a,{to:"/home2"},{default:Object(o["z"])(()=>[Object(o["e"])("Go to Home2")]),_:1}),Object(o["d"])("main",null,[Object(o["f"])(i)])])}var d={name:"App"};n("7660");const O=i()(d,[["render",p]]);var j=O,m=n("da00"),v=n.n(m);const h={id:"home"},g=Object(o["d"])("img",{src:v.a},null,-1);function y(e,t,n,r,c,u){const a=Object(o["u"])("Novigation");return Object(o["o"])(),Object(o["c"])("div",h,[Object(o["f"])(a,{title:"Web-shop"}),g])}const w={class:"novigatorPannel"};function P(e,t,n,r,c,u){return Object(o["o"])(),Object(o["c"])("div",w,[Object(o["d"])("h1",null,Object(o["w"])(n.title),1)])}var _={name:"NovigationPannel",props:{title:String}};n("5631");const H=i()(_,[["render",P],["__scopeId","data-v-1bc0908a"]]);var x=H,S={name:"HomePage",components:{Novigation:x}};n("eb5d");const k=i()(S,[["render",y]]);var M=k;function z(e,t,n,r,c,u){return Object(o["o"])(),Object(o["c"])("h1",null," Home 1")}var G={name:"HomePage1"};n("9409");const N=i()(G,[["render",z]]);var J=N;function T(e,t,n,r,c,u){return Object(o["o"])(),Object(o["c"])("h1",null," Home 2")}var A={name:"HomePage2"};n("a699");const B=i()(A,[["render",T]]);var E=B;const I=[{path:"/",name:"home",component:M},{path:"/home1",name:"home1",component:J},{path:"/home2",name:"home2",component:E}],W=Object(r["a"])({history:Object(r["b"])("/"),routes:I}),q=Object(o["b"])(j);s.forEach(e=>{q.component(e.name,e)}),q.use(W),q.mount("#app")},"638d":function(e,t,n){},7660:function(e,t,n){"use strict";n("33b0")},9409:function(e,t,n){"use strict";n("223c")},a699:function(e,t,n){"use strict";n("f9f5")},cb7c:function(e,t,n){},da00:function(e,t,n){e.exports=n.p+"img/shop.260b9382.jpg"},eb5d:function(e,t,n){"use strict";n("cb7c")},f9f5:function(e,t,n){}});
//# sourceMappingURL=app.9f5f512d.js.map