"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[5106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(h,c(c({ref:t},p),{},{components:n})):o.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},c="Honeycomb",i={unversionedId:"configuration/connecting-to-data-stores/honeycomb",id:"configuration/connecting-to-data-stores/honeycomb",title:"Honeycomb",description:"If you want to use Honeycomb as the trace data store, you'll configure the OpenTelemetry Collector to receive traces from your system and then send them to both Tracetest and Honeycomb. And, you don't have to change your existing pipelines to do so.",source:"@site/docs/configuration/connecting-to-data-stores/honeycomb.md",sourceDirName:"configuration/connecting-to-data-stores",slug:"/configuration/connecting-to-data-stores/honeycomb",permalink:"/configuration/connecting-to-data-stores/honeycomb",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/configuration/connecting-to-data-stores/honeycomb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tempo",permalink:"/configuration/connecting-to-data-stores/tempo"},next:{title:"Jaeger",permalink:"/configuration/connecting-to-data-stores/jaeger"}},s={},l=[{value:"Configuring OpenTelemetry Collector to Send Traces to both Honeycomb and Tracetest",id:"configuring-opentelemetry-collector-to-send-traces-to-both-honeycomb-and-tracetest",level:2},{value:"Configure Tracetest to Use Honeycomb as a Trace Data Store",id:"configure-tracetest-to-use-honeycomb-as-a-trace-data-store",level:2},{value:"Connect Tracetest to Honeycomb with the Web UI",id:"connect-tracetest-to-honeycomb-with-the-web-ui",level:2},{value:"Connect Tracetest to Honeycomb with the CLI",id:"connect-tracetest-to-honeycomb-with-the-cli",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"honeycomb"},"Honeycomb"),(0,r.kt)("p",null,"If you want to use ",(0,r.kt)("a",{parentName:"p",href:"https://honeycomb.io/"},"Honeycomb")," as the trace data store, you'll configure the OpenTelemetry Collector to receive traces from your system and then send them to both Tracetest and Honeycomb. And, you don't have to change your existing pipelines to do so."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Examples of configuring Tracetest with Honeycomb can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples"},(0,r.kt)("inlineCode",{parentName:"a"},"examples")," folder of the Tracetest GitHub repo"),".")),(0,r.kt)("h2",{id:"configuring-opentelemetry-collector-to-send-traces-to-both-honeycomb-and-tracetest"},"Configuring OpenTelemetry Collector to Send Traces to both Honeycomb and Tracetest"),(0,r.kt)("p",null,"In your OpenTelemetry Collector config file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"exporter")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"otlp/tracetest")),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"endpoint")," to your Tracetest instance on port ",(0,r.kt)("inlineCode",{parentName:"li"},"4317"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are running Tracetest with Docker, and Tracetest's service name is ",(0,r.kt)("inlineCode",{parentName:"p"},"tracetest"),", then the endpoint might look like this ",(0,r.kt)("inlineCode",{parentName:"p"},"http://tracetest:4317"))),(0,r.kt)("p",null,"Additionally, add another config:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"exporter")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"otlp/honeycomb")),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"endpoint")," pointing to the Honeycomb API and using Honeycomb API KEY")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# collector.config.yaml\n\n# If you already have receivers declared, you can just ignore\n# this one and still use yours instead.\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nprocessors:\n  batch:\n    timeout: 100ms\n\nexporters:\n  logging:\n    logLevel: debug\n  # OTLP for Tracetest\n  otlp/tracetest:\n    endpoint: tracetest:4317 # Send traces to Tracetest. Read more in docs here:  https://docs.tracetest.io/configuration/connecting-to-data-stores/opentelemetry-collector\n    tls:\n      insecure: true\n  # OTLP for Honeycomb\n  otlp/honeycomb:\n    endpoint: "api.honeycomb.io:443"\n    headers:\n      "x-honeycomb-team": "YOUR_API_KEY"\n      # Read more in docs here: https://docs.honeycomb.io/getting-data-in/otel-collector/\n\nservice:\n  pipelines:\n    traces/tracetest:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp/tracetest]\n    traces/honeycomb:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [logging, otlp/honeycomb]\n')),(0,r.kt)("h2",{id:"configure-tracetest-to-use-honeycomb-as-a-trace-data-store"},"Configure Tracetest to Use Honeycomb as a Trace Data Store"),(0,r.kt)("p",null,"Configure your Tracetest instance to expose an ",(0,r.kt)("inlineCode",{parentName:"p"},"otlp")," endpoint to make it aware it will receive traces from the OpenTelemetry Collector. This will expose Tracetest's trace receiver on port ",(0,r.kt)("inlineCode",{parentName:"p"},"4317"),"."),(0,r.kt)("h2",{id:"connect-tracetest-to-honeycomb-with-the-web-ui"},"Connect Tracetest to Honeycomb with the Web UI"),(0,r.kt)("p",null,"In the Web UI, (1) open Settings, and, on the (2) Configure Data Store tab, select (3) Honeycomb."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Honeycomb",src:n(59312).Z,width:"2400",height:"1792"})),(0,r.kt)("h2",{id:"connect-tracetest-to-honeycomb-with-the-cli"},"Connect Tracetest to Honeycomb with the CLI"),(0,r.kt)("p",null,"Or, if you prefer using the CLI, you can use this file config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: DataStore\nspec:\n  name: Honeycomb pipeline\n  type: honeycomb\n  default: true\n")),(0,r.kt)("p",null,"Proceed to run this command in the terminal and specify the file above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tracetest apply datastore -f my/data-store/file/location.yaml\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To learn more, ",(0,r.kt)("a",{parentName:"p",href:"/examples-tutorials/recipes/running-tracetest-with-honeycomb"},"read the recipe on running a sample app with Honeycomb and Tracetest"),".")))}u.isMDXComponent=!0},59312:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/honeycomb-settings-80b7a4a085d4815a178da6f8029be9c1.png"}}]);