"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[1342],{18679:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),o=a(72957),s=a(16550),i=a(75238),c=a(33609),p=a(92560);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,c]=h({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=i??u;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),k(e)}),[c,k,l]),tabValues:l}}var g=a(51048);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==s&&(u(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function T(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(T,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(f,(0,n.Z)({key:String(t)},e))}},91017:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(73992),l=a(18679),o=a(92053);function s(){function e(e){let{event:t,installationPlatform:a}=e;window.dataLayer=window.dataLayer||[],window.dataLayer.push({installationPlatform:a,event:"installationPlatform"})}return n.createElement(r.Z,{groupId:"operating-systems"},n.createElement(l.Z,{value:"mac",label:"MAC",default:!0},n.createElement("div",{onClick:()=>e({installationPlatform:"MacOS"})},n.createElement(o.Z,{language:"bash",title:"Terminal"},"brew install kubeshop/tracetest/tracetest"))),n.createElement(l.Z,{value:"linux",label:"LINUX"},n.createElement("div",{onClick:()=>e({installationPlatform:"Linux"})},n.createElement(o.Z,{language:"bash",title:"Terminal"},"curl -L https://raw.githubusercontent.com/kubeshop/tracetest/main/install-cli.sh | bash"))),n.createElement(l.Z,{value:"win",label:"WINDOWS"},n.createElement("div",{onClick:()=>e({installationPlatform:"Windows"})},n.createElement(o.Z,{language:"bash",title:"Terminal"},"choco source add --name=kubeshop_repo --source=https://chocolatey.kubeshop.io/chocolatey ; choco install tracetest"))))}},84087:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(73992),o=a(18679),s=a(92053),i=a(91017);const c={id:"installation",title:"Installing Tracetest Core",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1689693872/docs/Blog_Thumbnail_28_ugy2yy.png"},p=void 0,u={unversionedId:"core/getting-started/installation",id:"core/getting-started/installation",title:"Installing Tracetest Core",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces.",source:"@site/docs/core/getting-started/installation.mdx",sourceDirName:"core/getting-started",slug:"/core/getting-started/installation",permalink:"/core/getting-started/installation",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/core/getting-started/installation.mdx",tags:[],version:"current",frontMatter:{id:"installation",title:"Installing Tracetest Core",description:"Tracetest allows you to quickly build integration and end-to-end tests, powered by your OpenTelemetry traces.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1689693872/docs/Blog_Thumbnail_28_ugy2yy.png"},sidebar:"coreSidebar",previous:{title:"Getting Started with Tracetest Core",permalink:"/core/getting-started/overview"},next:{title:"Opening Tracetest Core",permalink:"/core/getting-started/open"}},m={},d=[{value:"Install the Tracetest CLI",id:"install-the-tracetest-cli",level:2},{value:"Install the Tracetest Server",id:"install-the-tracetest-server",level:2}],h={toc:d},k="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page showcases getting started with Tracetest Core by using the Tracetest CLI, Docker, or Kubernetes."),(0,r.kt)("p",null,"This simple installation includes a demo app called ",(0,r.kt)("a",{parentName:"p",href:"/live-examples/pokeshop/overview"},"Pokeshop")," that will be installed alongside Tracetest Core. It shows how to configure OpenTelemetry and Tracetest Core and the architecture of the Pokeshop sample app."),(0,r.kt)("h2",{id:"install-the-tracetest-cli"},"Install the Tracetest CLI"),(0,r.kt)(i.Z,{mdxType:"GtagInstallCliTabs"}),(0,r.kt)("admonition",{title:"Want more info?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Read the CLI installation reference ",(0,r.kt)("a",{parentName:"p",href:"/cli/cli-installation-reference"},"here"),".")),(0,r.kt)("h2",{id:"install-the-tracetest-server"},"Install the Tracetest Server"),(0,r.kt)("p",null,"Tracetest Core runs as a standalone container. It runs a Server and exposes a Web UI on port ",(0,r.kt)("inlineCode",{parentName:"p"},"11633"),"."),(0,r.kt)("p",null,"You have three options to install Tracetest Server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the Tracetest CLI to guide your installation in Docker and Kubernetes."),(0,r.kt)("li",{parentName:"ul"},"Using the official ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/helm-charts/tree/main/charts/tracetest"},"Helm chart"),"."),(0,r.kt)("li",{parentName:"ul"},"Using the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/tracetest/tree/main/examples/quick-start-pokeshop"},"Docker Compose Quick Start with the Pokeshop Sample App"),".")),(0,r.kt)(l.Z,{groupId:"installation",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"cli",label:"Tracetest CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"tracetest server install\n")),(0,r.kt)(l.Z,{groupId:"container-orchestrators",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"docker-compose",label:"Docker Compose",default:!0,mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"text",title:"Terminal",mdxType:"CodeBlock"},"How do you want to run Tracetest? [type to search]:\n> Using Docker Compose\n  Using Kubernetes"),(0,r.kt)("p",null,"Choose to install Tracetest with the OpenTelemetry Collector and the ",(0,r.kt)("a",{parentName:"p",href:"/live-examples/pokeshop/overview"},"Pokeshop")," sample app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"Do you have OpenTelemetry based tracing already set up, or would you like us to install a demo tracing environment and app? [type to search]: \n  I have a tracing environment already. - Just install Tracetest.\n> Just learning tracing! Install Tracetest, OpenTelemetry Collector and the sample app.\n")),(0,r.kt)("p",null,"Choosing any option, this installer will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"tracetest")," directory in the current directory and add a ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file to it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you choose the first option, the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yaml")," will have only Tracetest Core and its dependencies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"By choosing the second option, a sample app called ",(0,r.kt)("a",{parentName:"strong",href:"/live-examples/pokeshop/overview"},"Pokeshop")," will be installed with Tracetest Core, allowing you to create sample tests right away!"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Click to view Pokeshop Sample App Architecture")),(0,r.kt)("p",null,"Here's the Architecture of the Pokeshop Sample App:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("strong",{parentName:"li"},"API")," that serves client requests,"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("strong",{parentName:"li"},"Worker")," who deals with background processes.")),(0,r.kt)("p",null,"The communication between the API and Worker is made using a ",(0,r.kt)("inlineCode",{parentName:"p"},"RabbitMQ")," queue, and both services emit telemetry data to OpenTelemetry Collector and communicate with a Postgres database."),(0,r.kt)("p",null,"Tracetest triggers tests against the Node.js API."),(0,r.kt)("mermaid",{value:"flowchart TD\n    A[(Redis)]\n    B[(Postgres)]\n    C(Node.js API)\n    D(RabbitMQ)\n    E(Worker)\n    F(OpenTelemetry Collector)\n    G(Tracetest)\n\n    G --\x3e C\n    F --\x3e G\n    C --\x3e A\n    C --\x3e B\n    C --\x3e D\n    D --\x3e E\n    E --\x3e B\n    C --\x3e F\n    E --\x3e F\n    \n    "})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Start Docker Compose from the directory where you ran ",(0,r.kt)("inlineCode",{parentName:"strong"},"tracetest server install"),".")),(0,r.kt)(s.Z,{language:"bash",title:"Terminal",mdxType:"CodeBlock"},"docker compose -f tracetest/docker-compose.yaml up -d"),(0,r.kt)("p",null,"This will start the Tracetest Server and expose the Web UI on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:11633"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:11633")),".")),(0,r.kt)(o.Z,{value:"kubernetes",label:"Kubernetes",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"text",title:"Terminal",mdxType:"CodeBlock"},"How do you want to run TraceTest? [type to search]:\n  Using Docker Compose\n> Using Kubernetes"),(0,r.kt)("p",null,"Choose to install Tracetest Core with the OpenTelemetry Collector and the ",(0,r.kt)("a",{parentName:"p",href:"/live-examples/pokeshop/overview"},"Pokeshop")," sample app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"Do you have OpenTelemetry based tracing already set up, or would you like us to install a demo tracing environment and app? [type to search]: \n  I have a tracing environment already - Just install Tracetest.\n> Just learning tracing! Install Tracetest, OpenTelemetry Collector and the sample app.\n")),(0,r.kt)("p",null,"Choosing any option, this installer will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"tracetest")," namespace in the Kubernetes context you choose and create deployments for Tracetest Core and its dependencies."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you choose the first option, the ",(0,r.kt)("inlineCode",{parentName:"li"},"tracetest")," namespace will only contain Tracetest Core and its dependencies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"By choosing the second option, a sample app called ",(0,r.kt)("a",{parentName:"strong",href:"/live-examples/pokeshop/overview"},"Pokeshop")," will be installed in a ",(0,r.kt)("inlineCode",{parentName:"strong"},"demo")," namespace alongside Tracetest Core, allowing you to create sample tests right away!"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Click to view Pokeshop Sample App Architecture")),(0,r.kt)("p",null,"Here's the Architecture of the Pokeshop Sample App:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("strong",{parentName:"li"},"API")," that serves client requests,"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("strong",{parentName:"li"},"Worker")," who deals with background processes.")),(0,r.kt)("p",null,"The communication between the API and Worker is made using a ",(0,r.kt)("inlineCode",{parentName:"p"},"RabbitMQ")," queue, and both services emit telemetry data to OpenTelemetry Collector and communicate with a Postgres database."),(0,r.kt)("p",null,"Tracetest triggers tests against the Node.js API."),(0,r.kt)("mermaid",{value:"flowchart TD\n    A[(Redis)]\n    B[(Postgres)]\n    C(Node.js API)\n    D(RabbitMQ)\n    E(Worker)\n    F(OpenTelemetry Collector)\n    G(Tracetest)\n\n    G --\x3e C\n    F --\x3e G\n    C --\x3e A\n    C --\x3e B\n    C --\x3e D\n    D --\x3e E\n    E --\x3e B\n    C --\x3e F\n    E --\x3e F\n    \n    "})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Access the Tracetest Server by port forwarding to the Tracetest ",(0,r.kt)("inlineCode",{parentName:"strong"},"service"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},'export POD_NAME=$(kubectl get pods --namespace demo -l "app.kubernetes.io/name=pokemon-api,app.kubernetes.io/instance=demo" -o jsonpath="{.items[0].metadata.name}")\nexport CONTAINER_PORT=$(kubectl get pod --namespace demo $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")\nkubectl --namespace demo port-forward $POD_NAME 8080:$CONTAINER_PORT\necho "Open http://127.0.0.1:8080 to view the Pokeshop demo app"\n\nkubectl --kubeconfig <path-to-your-home>/.kube/config --context <your-cluster-context> --namespace tracetest port-forward svc/tracetest 11633\necho "Open http://127.0.0.1:11633 to view the Tracetest Web UI"\n')),(0,r.kt)("p",null,"Access the Tracetest Web UI on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:11633"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:11633")),".")))),(0,r.kt)(o.Z,{value:"helm",label:"Helm Chart",mdxType:"TabItem"},(0,r.kt)("p",null,"First, be sure that you have ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," installed in your machine."),(0,r.kt)("p",null,"The Tracetest Helm charts are located ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts/tree/main/charts/tracetest"},"here"),"."),(0,r.kt)("p",null,"You can install them locally on your machine with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"helm repo add kubeshop https://kubeshop.github.io/helm-charts\nhelm repo update\n")),(0,r.kt)("p",null,"After that, you can install Tracetest with ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"helm install tracetest kubeshop/tracetest --namespace=tracetest --create-namespace\n")),(0,r.kt)("p",null,"Or, generate a manifest file and apply it manually in your Kubernetes cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"helm template tracetest kubeshop/tracetest > tracetest-kubernetes-manifests.yaml\nkubectl apply -f ./tracetest-kubernetes-manifests.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Access the Tracetest Server by port forwarding to the Tracetest ",(0,r.kt)("inlineCode",{parentName:"strong"},"service"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"kubectl --kubeconfig <path-to-your-home>/.kube/config --context <your-cluster-context> --namespace tracetest port-forward svc/tracetest 11633\n")),(0,r.kt)("p",null,"Access the Tracetest Web UI on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:11633"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:11633")),".")),(0,r.kt)(o.Z,{value:"docker-compose",label:"Docker Compose",mdxType:"TabItem"},(0,r.kt)("p",null,"First, be sure that you have ",(0,r.kt)("a",{parentName:"p",href:"https://docker.com/"},"Docker")," installed in your machine."),(0,r.kt)("p",null,"The Quick Start with the Pokeshop Sample App is located ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples/quick-start-pokeshop"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/kubeshop/tracetest/blob/main/examples/quick-start-pokeshop/docker-compose.yml"},(0,r.kt)("inlineCode",{parentName:"a"},"docker-compose.yaml"))," contains Tracetest Core, the OpenTelemetry Collector, and a sample app called ",(0,r.kt)("a",{parentName:"strong",href:"/live-examples/pokeshop/overview"},"Pokeshop"),". This allows you to create sample tests right away!")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Click to view Pokeshop Sample App Architecture")),(0,r.kt)("p",null,"Here's the Architecture of the Pokeshop Sample App:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("strong",{parentName:"li"},"API")," that serves client requests,"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("strong",{parentName:"li"},"Worker")," who deals with background processes.")),(0,r.kt)("p",null,"The communication between the API and Worker is made using a ",(0,r.kt)("inlineCode",{parentName:"p"},"RabbitMQ")," queue, and both services emit telemetry data to OpenTelemetry Collector and communicate with a Postgres database."),(0,r.kt)("p",null,"Tracetest triggers tests against the Node.js API."),(0,r.kt)("mermaid",{value:"flowchart TD\n    A[(Redis)]\n    B[(Postgres)]\n    C(Node.js API)\n    D(RabbitMQ)\n    E(Worker)\n    F(OpenTelemetry Collector)\n    G(Tracetest)\n\n    G --\x3e C\n    F --\x3e G\n    C --\x3e A\n    C --\x3e B\n    C --\x3e D\n    D --\x3e E\n    E --\x3e B\n    C --\x3e F\n    E --\x3e F\n    \n    "})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Start Docker Compose.")),(0,r.kt)(s.Z,{language:"bash",title:"Terminal",mdxType:"CodeBlock"},"docker compose -f docker-compose.yaml up -d"),(0,r.kt)("p",null,"This will start the Tracetest Server and expose the Web UI on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:11633"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:11633")),"."))),(0,r.kt)("admonition",{title:"Don't have OpenTelemetry installed?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Tracetest requires that you have ",(0,r.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/instrumentation/"},"OpenTelemetry instrumentation")," added in your code, and configured ",(0,r.kt)("a",{parentName:"p",href:"/configuration/connecting-to-data-stores/jaeger"},"sending traces to a trace data store"),", or ",(0,r.kt)("a",{parentName:"p",href:"/configuration/connecting-to-data-stores/opentelemetry-collector"},"Tracetest directly"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/getting-started/no-otel"},"Follow these instructions to install OpenTelemetry in 5 minutes without any code changes!"))))}g.isMDXComponent=!0}}]);