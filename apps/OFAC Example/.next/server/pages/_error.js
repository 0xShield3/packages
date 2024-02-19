(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4258:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>f,getServerSideProps:()=>m,getStaticPaths:()=>h,getStaticProps:()=>p,reportWebVitals:()=>y,routeModule:()=>_,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>x});var o=r(7093),i=r(5244),a=r(1323),l=r(5388),s=r.n(l),u=r(1940),d=r(8435),c=e([u]);u=(c.then?(await c)():c)[0];let f=(0,a.l)(d,"default"),p=(0,a.l)(d,"getStaticProps"),h=(0,a.l)(d,"getStaticPaths"),m=(0,a.l)(d,"getServerSideProps"),g=(0,a.l)(d,"config"),y=(0,a.l)(d,"reportWebVitals"),x=(0,a.l)(d,"unstable_getStaticProps"),b=(0,a.l)(d,"unstable_getStaticPaths"),v=(0,a.l)(d,"unstable_getStaticParams"),P=(0,a.l)(d,"unstable_getServerProps"),S=(0,a.l)(d,"unstable_getServerSideProps"),_=new o.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:u.default,Document:s()},userland:d});n()}catch(e){n(e)}})},8435:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(167),o=n._(r(6689)),i=n._(r(4764)),a={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let s={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class u extends o.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||a[e]||"An unexpected error has occurred";return o.default.createElement("div",{style:s.error},o.default.createElement(i.default,null,o.default.createElement("title",null,e?e+": "+r:"Application error: a client-side exception has occurred")),o.default.createElement("div",{style:s.desc},o.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?o.default.createElement("h1",{className:"next-error-h1",style:s.h1},e):null,o.default.createElement("div",{style:s.wrap},o.default.createElement("h2",{style:s.h2},this.props.title||e?r:o.default.createElement(o.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}u.displayName="ErrorPage",u.getInitialProps=l,u.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1815:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},4764:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return u},default:function(){return p}});let n=r(167),o=r(8760)._(r(6689)),i=n._(r(210)),a=r(8039),l=r(1988),s=r(1815);function u(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(9982);let c=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){let t=c[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let p=function(e){let{children:t}=e,r=(0,o.useContext)(a.AmpStateContext),n=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},210:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(6689),o=()=>{},i=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function l(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),l(),o(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),o(()=>(r&&(r._pendingUpdate=l),()=>{r&&(r._pendingUpdate=l)})),i(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},9982:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},1940:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>p});var o=r(997);r(6764);var i=r(968),a=r.n(i),l=r(5935),s=r(1163),u=r(3590);r(8819);var d=r(9001),c=r.n(d),f=e([u]);u=(f.then?(await f)():f)[0];let p=function({Component:e,pageProps:t}){let r=(0,s.useRouter)(),n=c()("gJ1PfGSTyV16NipZNhOn68C2mtGYC53B4XJF9Rlv",{embeddedWallets:{createOnLogin:"users-without-wallets",noPromptOnSignature:!1},loginMethods:["email","google","twitter","discord","apple"]});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a(),{children:[o.jsx("link",{rel:"preload",href:"/fonts/AdelleSans-Regular.woff",as:"font",crossOrigin:""}),o.jsx("link",{rel:"preload",href:"/fonts/AdelleSans-Regular.woff2",as:"font",crossOrigin:""}),o.jsx("link",{rel:"preload",href:"/fonts/AdelleSans-Semibold.woff",as:"font",crossOrigin:""}),o.jsx("link",{rel:"preload",href:"/fonts/AdelleSans-Semibold.woff2",as:"font",crossOrigin:""}),o.jsx("link",{rel:"icon",href:"/favicons/favicon.ico",sizes:"any"}),o.jsx("link",{rel:"icon",href:"/favicons/icon.svg",type:"image/svg+xml"}),o.jsx("link",{rel:"apple-touch-icon",href:"/favicons/apple-touch-icon.png"}),o.jsx("link",{rel:"manifest",href:"/favicons/manifest.json"}),o.jsx("title",{children:"Privy x Shield3"}),o.jsx("meta",{name:"description",content:"Privy x Shield3"})]}),(0,o.jsxs)(l.PrivyProvider,{appId:"clmz8d2vn093wjs0fminy7b8g",onSuccess:()=>r.push("/dashboard"),config:n,children:[o.jsx(u.ToastContainer,{position:"top-right"}),o.jsx(e,{...t})]})]})};n()}catch(e){n(e)}})},6764:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},9001:e=>{"use strict";e.exports=require("@0xshield3/privy")},5935:e=>{"use strict";e.exports=require("@privy-io/react-auth")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},3590:e=>{"use strict";e.exports=import("react-toastify")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[491,544,388],()=>r(4258));module.exports=n})();