"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[8737],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67666:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={id:"server",title:"Configuring the Tracetest Server",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces. Learn how to get started with creating tests once you open Tracetest.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1689693872/docs/Blog_Thumbnail_28_ugy2yy.png"},i=void 0,s={unversionedId:"core/configuration/server",id:"core/configuration/server",title:"Configuring the Tracetest Server",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces. Learn how to get started with creating tests once you open Tracetest.",source:"@site/docs/core/configuration/server.mdx",sourceDirName:"core/configuration",slug:"/core/configuration/server",permalink:"/core/configuration/server",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/core/configuration/server.mdx",tags:[],version:"current",frontMatter:{id:"server",title:"Configuring the Tracetest Server",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces. Learn how to get started with creating tests once you open Tracetest.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1689693872/docs/Blog_Thumbnail_28_ugy2yy.png"},sidebar:"coreSidebar",previous:{title:"Configuration",permalink:"/core/configuration/overview"},next:{title:"Provisioning a Tracetest Server",permalink:"/core/configuration/provisioning"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tracetest requires a very minimal configuration to be launched, needing just the connection information to connect with the PostgreSQL database which is installed as part of the server install. There are a couple of ways to provide this database connection information."),(0,o.kt)("p",null,"For Docker-based installs, the server configuration file is placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./tracetest/tracetest.yaml")," file by default when you run the ",(0,o.kt)("inlineCode",{parentName:"p"},"tracetest server install")," command and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Using Docker Compose")," option. The configuration file is mounted to ",(0,o.kt)("inlineCode",{parentName:"p"},"/app/config.yaml")," within the Tracetest Docker container. When Tracetest is run with a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose -f tracetest/docker-compose.yaml  up -d")," command, the server will use the contents of this file to connect to the Postgres database. All other configuration data is stored in the Postgres instance."),(0,o.kt)("p",null,"This is an example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"tracetest.yaml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"postgres:\n  host: postgres\n  user: postgres\n  password: postgres\n  port: 5432\n  dbname: postgres\n  params: sslmode=disable\n\ntelemetry:\n  exporters:\n    collector:\n      serviceName: tracetest\n      sampling: 100 # 100%\n      exporter:\n        type: collector\n        collector:\n          endpoint: otel-collector:4317\n\nserver:\n  httpPort: 11633\n  pathPrefix: /\n  telemetry:\n    exporter: collector\n    applicationExporter: collector\n")),(0,o.kt)("p",null,"Alternatively, we support setting a series of environment variables which can contain the connection information for the Postgres instance. If these environment variables are set, they will be used by the Tracetest server to connect to the database."),(0,o.kt)("p",null,"The list of environment variables and example values is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'TRACETEST_POSTGRES_HOST: "postgres"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'TRACETEST_POSTGRES_PORT: "5432"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'TRACETEST_POSTGRES_DBNAME: "postgres"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'TRACETEST_POSTGRES_USER: "postgres"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'TRACETEST_POSTGRES_PASSWORD: "postgres"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'TRACETEST_POSTGRES_PARAMS: ""'))),(0,o.kt)("p",null,"You can also change the defaults for the Tracetest server, altering the port and path you access the dashboard from. For a Docker-based install done locally, this URL is typically ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:11633/"),". You can alter it by setting either of the environment variables or using the ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," object in the server configuration file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TRACETEST_SERVER_HTTPPORT=11633")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'TRACETEST_SERVER_PATHPREFIX="/"'))),(0,o.kt)("p",null,"You can also initialize the server with a number of resources the first time it is launched by using ",(0,o.kt)("a",{parentName:"p",href:"./provisioning"},"provisioning"),"."))}d.isMDXComponent=!0}}]);