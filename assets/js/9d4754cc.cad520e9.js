"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[8172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,h=u["".concat(i,".").concat(d)]||u[d]||f[d]||l;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const l={},s="secure-https-protocol",a={unversionedId:"analyzer/rules/secure-https-protocol",id:"analyzer/rules/secure-https-protocol",title:"secure-https-protocol",description:"Enforce usage of secure protocol for HTTP server spans.",source:"@site/docs/analyzer/rules/secure-https-protocol.md",sourceDirName:"analyzer/rules",slug:"/analyzer/rules/secure-https-protocol",permalink:"/analyzer/rules/secure-https-protocol",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/analyzer/rules/secure-https-protocol.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/analyzer/plugins/security"},next:{title:"no-api-key-leak",permalink:"/analyzer/rules/no-api-key-leak"}},i={},p=[{value:"Rule Details",id:"rule-details",level:2},{value:"HTTP spans:",id:"http-spans",level:3},{value:"Options",id:"options",level:2},{value:"When Not To Use It",id:"when-not-to-use-it",level:2}],c={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"secure-https-protocol"},"secure-https-protocol"),(0,o.kt)("p",null,"Enforce usage of secure protocol for HTTP server spans."),(0,o.kt)("h2",{id:"rule-details"},"Rule Details"),(0,o.kt)("p",null,"This rule enforces usage of a secure protocol for an HTTP server span. The URI scheme that identifies the used protocol should be ",(0,o.kt)("inlineCode",{parentName:"p"},'"https"'),"."),(0,o.kt)("h3",{id:"http-spans"},"HTTP spans:"),(0,o.kt)("p",null,"If span kind is ",(0,o.kt)("inlineCode",{parentName:"p"},'"server"'),", the following attributes are evaluated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'- http.scheme = "https"\n- http.url = "https"\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"This rule has the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"error"')," requires secure protocol for HTTP server spans"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"disabled"')," disables the secure protocol verification for HTTP server spans"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"warning"')," verifies secure protocol for HTTPS server spans but does not impact the analyzer score")),(0,o.kt)("h2",{id:"when-not-to-use-it"},"When Not To Use It"),(0,o.kt)("p",null,"If you intentionally use non secure protocol for HTTP server spans then you can disable this rule."))}f.isMDXComponent=!0}}]);