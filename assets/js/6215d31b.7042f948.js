"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[8680],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),y=o,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},58758:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"telemetry",title:"Telemetry",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces. Learn how to get started with creating tests once you open Tracetest.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1689693872/docs/Blog_Thumbnail_28_ugy2yy.png"},i=void 0,c={unversionedId:"core/configuration/telemetry",id:"core/configuration/telemetry",title:"Telemetry",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces. Learn how to get started with creating tests once you open Tracetest.",source:"@site/docs/core/configuration/telemetry.mdx",sourceDirName:"core/configuration",slug:"/core/configuration/telemetry",permalink:"/core/configuration/telemetry",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/core/configuration/telemetry.mdx",tags:[],version:"current",frontMatter:{id:"telemetry",title:"Telemetry",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces. Learn how to get started with creating tests once you open Tracetest.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1689693872/docs/Blog_Thumbnail_28_ugy2yy.png"},sidebar:"coreSidebar",previous:{title:"Analytics Settings",permalink:"/core/configuration/analytics"},next:{title:"Upgrade Tracetest Version",permalink:"/core/configuration/upgrade"}},s={},l=[{value:"Configuring Tracetest Server Internal Telemetry",id:"configuring-tracetest-server-internal-telemetry",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Tracetest server generates internal observability trace data. You can use this data to track Tracetest test runs over time and gain observability of how the Tracetest server is behaving."),(0,o.kt)("p",null,'The Tracetest team uses an observability-driven development approach in developing the Tracetest server, capturing traces and then running Tracetest tests against it as part of the CI/CD process. You can read more about how we "eat our own dog food" in ',(0,o.kt)("a",{parentName:"p",href:"https://tracetest.io/blog/integrating-tracetest-with-github-actions-in-a-ci-pipeline"},"this blog post")," about the CI/CD configuration where we test Tracetest with Tracetest."),(0,o.kt)("h2",{id:"configuring-tracetest-server-internal-telemetry"},"Configuring Tracetest Server Internal Telemetry"),(0,o.kt)("p",null,"You can configure an exporter to send the trace data to an OpenTelemetry Collector and then store it safely in your trace data store for further historical analysis. View the ",(0,o.kt)("a",{parentName:"p",href:"./overview#supported-trace-data-stores"},"supported trace data stores")," for more guidance on setting them up."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"tracetest-config.yaml")," file, alongside the ",(0,o.kt)("a",{parentName:"p",href:"/core/configuration/server"},"configuration")," of connecting Tracetest to the Postgres instance, you can also define a ",(0,o.kt)("inlineCode",{parentName:"p"},"telemetry")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," section."),(0,o.kt)("p",null,"With these two additional sections, you define an exporter where the Tracetest server's internal telemetry will be routed to. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"telemetry")," section, you define the endpoint of the OpenTelemetry Collector. And, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," section you define which exporter the Tracetest server will use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# tracetest-config.yaml\npostgres:\n# [...]\n\ntelemetry:\n  exporters:\n    collector:\n      serviceName: tracetest\n      sampling: 100 # 100%\n      exporter:\n        type: collector\n        collector:\n          endpoint: otel-collector:4317\n          # Replace with your OpenTelemetry Collector endpoint\n\nserver:\n  telemetry:\n    exporter: collector\n    applicationExporter: collector\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to check what the service endpoint for the OpenTelemetry Collector in your infrastructure is. The example above is using ",(0,o.kt)("inlineCode",{parentName:"p"},"otel-collector")," because that is the service name in Docker Compose. Your infrastructure might differ.")))}d.isMDXComponent=!0}}]);