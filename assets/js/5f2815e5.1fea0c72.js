"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[7063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},i="Tempo",p={unversionedId:"configuration/connecting-to-data-stores/tempo",id:"configuration/connecting-to-data-stores/tempo",title:"Tempo",description:"Tracetest fetches traces from Tempo on the default gRPC port 9095, or default HTTP port 80.",source:"@site/docs/configuration/connecting-to-data-stores/tempo.md",sourceDirName:"configuration/connecting-to-data-stores",slug:"/configuration/connecting-to-data-stores/tempo",permalink:"/configuration/connecting-to-data-stores/tempo",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/configuration/connecting-to-data-stores/tempo.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Elastic APM",permalink:"/configuration/connecting-to-data-stores/elasticapm"},next:{title:"Honeycomb",permalink:"/configuration/connecting-to-data-stores/honeycomb"}},c={},l=[{value:"Configure Tempo",id:"configure-tempo",level:2},{value:"Configure Tracetest to Use Tempo as a Trace Data Store",id:"configure-tracetest-to-use-tempo-as-a-trace-data-store",level:2},{value:"Connect Tracetest to Tempo with the Web UI",id:"connect-tracetest-to-tempo-with-the-web-ui",level:2},{value:"Connect Tracetest to Tempo with the CLI",id:"connect-tracetest-to-tempo-with-the-cli",level:2}],s={toc:l},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tempo"},"Tempo"),(0,r.kt)("p",null,"Tracetest fetches traces from ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/tempo/latest/configuration/#server"},"Tempo on the default gRPC port")," ",(0,r.kt)("inlineCode",{parentName:"p"},"9095"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/tempo/latest/configuration/#server"},"default HTTP port")," ",(0,r.kt)("inlineCode",{parentName:"p"},"80"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Examples of configuring Tracetest can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples"},(0,r.kt)("inlineCode",{parentName:"a"},"examples")," folder of the Tracetest GitHub repo"),".")),(0,r.kt)("h2",{id:"configure-tempo"},"Configure Tempo"),(0,r.kt)("p",null,"Tempo uses port ",(0,r.kt)("inlineCode",{parentName:"p"},"9095")," as the default ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc_listen_port"),". The default ",(0,r.kt)("inlineCode",{parentName:"p"},"http_listen_port")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"80"),". Here is a full example of a config file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# tempo.config.yaml\n\nauth_enabled: false\nserver:\n  http_listen_port: 80\n  grpc_listen_port: 9095\ndistributor:\n  receivers: # This configuration will listen on all ports and protocols that Tempo is capable of.\n    jaeger: # the receives all come from the OpenTelemetry collector.  more configuration information can\n      protocols: # be found here: https://github.com/open-telemetry/opentelemetry-collector/tree/master/receiver.\n        thrift_http: #\n        grpc: # For a production deployment you should only enable the receivers you need!\n        thrift_binary:\n        thrift_compact:\n    zipkin:\n    otlp:\n      protocols:\n        http:\n        grpc:\n    opencensus:\ningester:\n  trace_idle_period: 10s # The length of time after a trace has not received spans to consider it complete and flush it.\n  max_block_bytes: 1_000_000 # Cut the head block when it hits this size or ...\n  #traces_per_block: 1_000_000\n  max_block_duration: 5m #   this much time passes.\ncompactor:\n  compaction:\n    compaction_window: 1h # Blocks in this time window will be compacted together.\n    max_compaction_objects: 1000000 # Maximum size of compacted blocks.\n    block_retention: 1h\n    compacted_block_retention: 10m\nstorage:\n  trace:\n    backend: local # Backend configuration to use.\n    wal:\n      path: /tmp/tempo/wal # Where to store the the wal locally.\n      #bloom_filter_false_positive: .05 # Bloom filter false positive rate.  Lower values create larger filters but fewer false positives.\n      #index_downsample: 10             # Number of traces per index record.\n    local:\n      path: /tmp/tempo/blocks\n    pool:\n      max_workers: 100 # The worker pool mainly drives querying, but is also used for polling the blocklist.\n      queue_depth: 10000\n")),(0,r.kt)("h2",{id:"configure-tracetest-to-use-tempo-as-a-trace-data-store"},"Configure Tracetest to Use Tempo as a Trace Data Store"),(0,r.kt)("p",null,"Configure Tracetest to be aware that it has to fetch trace data from Tempo."),(0,r.kt)("p",null,"Tracetest uses ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/tempo/latest/configuration/#server"},"Tempo's gRPC endpoint")," on port ",(0,r.kt)("inlineCode",{parentName:"p"},"9095")," to fetch trace data. Alternatively, you can use Tempo's HTTP endpoint and default port ",(0,r.kt)("inlineCode",{parentName:"p"},"80"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Need help configuring the OpenTelemetry Collector so send trace data from your application to Jaeger? Read more in ",(0,r.kt)("a",{parentName:"p",href:"../opentelemetry-collector-configuration-file-reference"},"the reference page here"),").")),(0,r.kt)("h2",{id:"connect-tracetest-to-tempo-with-the-web-ui"},"Connect Tracetest to Tempo with the Web UI"),(0,r.kt)("p",null,"IIn the Web UI, (1) open Settings, and, on the (2) Configure Data Store tab, (3) select Tempo. Then, select either ",(0,r.kt)("inlineCode",{parentName:"p"},"gRPC")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),"."),(0,r.kt)("p",null,"If you are using Docker and the ",(0,r.kt)("inlineCode",{parentName:"p"},"gRPC")," endpoint like in the screenshot below, use the service name as the hostname with port ",(0,r.kt)("inlineCode",{parentName:"p"},"9095")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tempo:9095\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tempo",src:n(99015).Z,width:"2254",height:"1422"})),(0,r.kt)("p",null,"If you are using Docker and the ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP")," URL like in the screenshot below, use the service name as the hostname with port ",(0,r.kt)("inlineCode",{parentName:"p"},"80")," or no specified port like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://tempo\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tempo",src:n(99015).Z,width:"2254",height:"1422"})),(0,r.kt)("h2",{id:"connect-tracetest-to-tempo-with-the-cli"},"Connect Tracetest to Tempo with the CLI"),(0,r.kt)("p",null,"Or, if you prefer using the CLI, you can use this file config."),(0,r.kt)("p",null,"For gRPC:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: DataStore\nspec:\n  name: Grafana Tempo\n  type: tempo\n  default: true\n  tempo:\n    type: grpc\n    grpc:\n      endpoint: tempo:9095\n      tls:\n        insecure: true\n")),(0,r.kt)("p",null,"For HTTP:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: DataStore\nspec:\n  name: Grafana Tempo\n  type: tempo\n  default: true\n  tempo:\n    type: http\n    http:\n      url: http://tempo\n      tls:\n        insecure: true\n")),(0,r.kt)("p",null,"Proceed to run this command in the terminal, and specify the file above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tracetest apply datastore -f my/data-store/file/location.yaml\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To learn more, ",(0,r.kt)("a",{parentName:"p",href:"/examples-tutorials/recipes/running-tracetest-with-tempo"},"read the recipe on running a sample app with Tempo and Tracetest"),".")))}u.isMDXComponent=!0},99015:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Tempo-settings-5694016647d4bc7b0e8c34cd68e833c1.png"}}]);