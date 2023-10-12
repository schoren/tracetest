"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[1625],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),g=a,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},32084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"upgrade",title:"Upgrade Tracetest Version",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces. Learn how to get started with creating tests once you open Tracetest.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1689693872/docs/Blog_Thumbnail_28_ugy2yy.png"},s=void 0,i={unversionedId:"core/configuration/upgrade",id:"core/configuration/upgrade",title:"Upgrade Tracetest Version",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces. Learn how to get started with creating tests once you open Tracetest.",source:"@site/docs/core/configuration/upgrade.mdx",sourceDirName:"core/configuration",slug:"/core/configuration/upgrade",permalink:"/core/configuration/upgrade",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/core/configuration/upgrade.mdx",tags:[],version:"current",frontMatter:{id:"upgrade",title:"Upgrade Tracetest Version",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces. Learn how to get started with creating tests once you open Tracetest.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1689693872/docs/Blog_Thumbnail_28_ugy2yy.png"},sidebar:"coreSidebar",previous:{title:"Telemetry",permalink:"/core/configuration/telemetry"},next:{title:"Deployment",permalink:"/core/deployment/overview"}},c={},l=[{value:"Upgrade Tracetest CLI Version",id:"upgrade-tracetest-cli-version",level:2},{value:"Linux/MacOS",id:"linuxmacos",level:3},{value:"Homebrew",id:"homebrew",level:3},{value:"APT",id:"apt",level:3},{value:"YUM",id:"yum",level:3},{value:"Windows",id:"windows",level:3},{value:"Upgrade Tracetest Server Version",id:"upgrade-tracetest-server-version",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page explains how to upgrade the version of your Tracetest Server and CLI."),(0,a.kt)("p",null,"If you've ever seen this error, you've come to the right page:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u2716\ufe0f Error: Version Mismatch\nThe CLI version and the server version are not compatible. To fix this, you'll need to make sure that both your CLI and server are using compatible versions.\nWe recommend upgrading both of them to the latest available version. Check out our documentation https://docs.tracetest.io/configuration/upgrade for simple instructions on how to upgrade.\nThank you for using Tracetest! We apologize for any inconvenience caused.\n")),(0,a.kt)("p",null,"This means your Tracetest CLI and Server versions must be the same."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tracetest version\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Expected output"',title:'"Expected','output"':!0},"CLI: v0.11.9\nServer: v0.11.9\n\u2714\ufe0f Version match\n")),(0,a.kt)("h2",{id:"upgrade-tracetest-cli-version"},"Upgrade Tracetest CLI Version"),(0,a.kt)("h3",{id:"linuxmacos"},"Linux/MacOS"),(0,a.kt)("p",null,"Run the Tracetest CLI install script to upgrade to the latest version of the CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -L https://raw.githubusercontent.com/kubeshop/tracetest/main/install-cli.sh | bash\n")),(0,a.kt)("h3",{id:"homebrew"},"Homebrew"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew upgrade\nbrew update\nbrew install kubeshop/tracetest/tracetest\n")),(0,a.kt)("h3",{id:"apt"},"APT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\nsudo apt-get install tracetest\n")),(0,a.kt)("h3",{id:"yum"},"YUM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum update\nsudo yum install tracetest --refresh\n")),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"choco source add --name=kubeshop_repo --source=https://chocolatey.kubeshop.io/chocolatey ; choco upgrade tracetest\n")),(0,a.kt)("h2",{id:"upgrade-tracetest-server-version"},"Upgrade Tracetest Server Version"),(0,a.kt)("p",null,"Make sure to match the CLI version you have installed to the Server version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubeshop/tracetest:vX.X.X\n")),(0,a.kt)("p",null,"If you are using version ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.11.9")," of the CLI, make sure to use the same version of the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"image: kubeshop/tracetest:v0.11.9\n")))}d.isMDXComponent=!0}}]);