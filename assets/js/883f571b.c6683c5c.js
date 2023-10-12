"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[3005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="Running Tracetest on AWS Fargate with Terraform",s={unversionedId:"examples-tutorials/recipes/running-tracetest-with-aws-terraform",id:"examples-tutorials/recipes/running-tracetest-with-aws-terraform",title:"Running Tracetest on AWS Fargate with Terraform",description:"Check out the source code on GitHub here.",source:"@site/docs/examples-tutorials/recipes/running-tracetest-with-aws-terraform.md",sourceDirName:"examples-tutorials/recipes",slug:"/examples-tutorials/recipes/running-tracetest-with-aws-terraform",permalink:"/examples-tutorials/recipes/running-tracetest-with-aws-terraform",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/examples-tutorials/recipes/running-tracetest-with-aws-terraform.md",tags:[],version:"current",frontMatter:{},sidebar:"examplesTutorialsSidebar",previous:{title:"Running Tracetest with Jaeger",permalink:"/examples-tutorials/recipes/running-tracetest-with-jaeger"},next:{title:"Running Tracetest with OpenSearch",permalink:"/examples-tutorials/recipes/running-tracetest-with-opensearch"}},l={},c=[{value:"Sample Node.js Serverless API with Jaeger, OpenTelemetry, AWS Fargate and Tracetest",id:"sample-nodejs-serverless-api-with-jaeger-opentelemetry-aws-fargate-and-tracetest",level:2},{value:"Services Architecture",id:"services-architecture",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"1. Node.js Serverless API",id:"1-nodejs-serverless-api",level:3},{value:"2. Tracetest",id:"2-tracetest",level:3},{value:"3. Jaeger",id:"3-jaeger",level:3},{value:"AWS Network",id:"aws-network",level:3},{value:"Node.js Serverless API",id:"nodejs-serverless-api",level:2},{value:"Tracetest",id:"tracetest",level:2},{value:"Configuring the Tracetest Container",id:"configuring-the-tracetest-container",level:3},{value:"Jaeger",id:"jaeger",level:2},{value:"Jaeger OTLP Endpoints",id:"jaeger-otlp-endpoints",level:3},{value:"Jaeger GRPC API Endpoint",id:"jaeger-grpc-api-endpoint",level:3},{value:"How Does Tracetest Reach Jaeger?",id:"how-does-tracetest-reach-jaeger",level:2},{value:"How Do Traces Reach Jaeger?",id:"how-do-traces-reach-jaeger",level:2},{value:"Running the Example",id:"running-the-example",level:2},{value:"Running Trace-based Tests",id:"running-trace-based-tests",level:2},{value:"Learn More",id:"learn-more",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-tracetest-on-aws-fargate-with-terraform"},"Running Tracetest on AWS Fargate with Terraform"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples/tracetest-aws-terraform-serverless"},"Check out the source code on GitHub here.")," ")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tracetest.io/"},"Tracetest")," is a testing tool based on ",(0,a.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," that allows you to test your distributed application. It allows you to use data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior defined by your test definitions."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger")," is an open-source, end-to-end distributed tracing solution. It allows you to monitor and troubleshoot transactions in complex distributed systems. It was developed and open sourced by Uber Technologies. Jaeger provides a distributed tracing solution to enable transactions across multiple heterogeneous systems or microservices to be tracked and displayed as a cascading series of spans."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," is an infrastructure as code tool that lets you define both cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share. You can then use a consistent workflow to provision and manage all of your infrastructure throughout its lifecycle."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/fargate/"},"AWS Fargate")," is a serverless, pay-as-you-go compute engine that lets you focus on building applications without managing servers. AWS Fargate is compatible with both Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS)."),(0,a.kt)("h2",{id:"sample-nodejs-serverless-api-with-jaeger-opentelemetry-aws-fargate-and-tracetest"},"Sample Node.js Serverless API with Jaeger, OpenTelemetry, AWS Fargate and Tracetest"),(0,a.kt)("p",null,"This is a simple quick start guide on how to deploy a Node.js Serverless API to use OpenTelemetry instrumentation with traces and Tracetest for enhancing your E2E and integration tests with trace-based testing. The infrastructure will use Jaeger as the trace data store, and OpenTelemetry Collector to receive traces from the Node.js app and Terraform to provision the required AWS services to run Tracetest in the cloud."),(0,a.kt)("h2",{id:"services-architecture"},"Services Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Terraform Serverless Diagram",src:n(64175).Z,width:"1570",height:"1220"})),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You will need ",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform"),", a configured instance of the ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cli/"},"AWS CLI")," installed on your machine to run this quick start Serverless API!"),(0,a.kt)("h2",{id:"project-structure"},"Project Structure"),(0,a.kt)("p",null,"The project is built with Terraform. It contains multiple ",(0,a.kt)("inlineCode",{parentName:"p"},".tf")," files where each part of the infra is divided."),(0,a.kt)("h3",{id:"1-nodejs-serverless-api"},"1. Node.js Serverless API"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder is the root directory that contains the Node.js files for both the API and the OpenTelemetry instrumentation.\nThe infrastructure required to run the serverless API can be found as part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"api.tf")," file."),(0,a.kt)("h3",{id:"2-tracetest"},"2. Tracetest"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest.tf")," file contains the different services and dependencies to run the Tracetest server using AWS Fargate."),(0,a.kt)("h3",{id:"3-jaeger"},"3. Jaeger"),(0,a.kt)("p",null,"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"jaeger.tf")," file you'll find the required services to run them all in one instance using AWS Fargate."),(0,a.kt)("h3",{id:"aws-network"},"AWS Network"),(0,a.kt)("p",null,"To connect all of the services, the example generates a VPC network which includes private and public subnets. Internal services like the Postgres RDS instance are protected behind the VPC and only accessible through a node within the internal network."),(0,a.kt)("p",null,"There are two ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/elasticloadbalancing/application-load-balancer/"},"Application Load Balancers"),", a public balancer which provides access to the Tracetest task instance through port ",(0,a.kt)("inlineCode",{parentName:"p"},"11633")," and to the Jaeger UI from ",(0,a.kt)("inlineCode",{parentName:"p"},"16686"),"."),(0,a.kt)("p",null,"The second is an internal load balancer that allows the instrumented Node.js Lambda functions connect to the Jaeger OTLP endpoint using a DNS instead of an IP."),(0,a.kt)("h2",{id:"nodejs-serverless-api"},"Node.js Serverless API"),(0,a.kt)("p",null,"The Node.js Serverless API is a simple Lambda function, contained in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/hello.js")," file."),(0,a.kt)("p",null,"The OpenTelemetry tracing is contained in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/tracing.js")," file.\nTraces will be sent to the Jaeger OpenTelemetry Collector Endpoint."),(0,a.kt)("p",null,"Here's the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracing.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const { Resource } = require("@opentelemetry/resources");\nconst api = require("@opentelemetry/api");\nconst { BatchSpanProcessor } = require("@opentelemetry/sdk-trace-base");\nconst { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-http");\nconst { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");\nconst { registerInstrumentations } = require("@opentelemetry/instrumentation");\nconst { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");\nconst { SemanticResourceAttributes } = require("@opentelemetry/semantic-conventions");\n\nconst provider = new NodeTracerProvider({\n  resource: new Resource({\n    [SemanticResourceAttributes.SERVICE_NAME]: "tracetest",\n  }),\n});\nconst spanProcessor = new BatchSpanProcessor(new OTLPTraceExporter());\n\nprovider.addSpanProcessor(spanProcessor);\nprovider.register();\n\nregisterInstrumentations({\n  instrumentations: [\n    getNodeAutoInstrumentations({\n      "@opentelemetry/instrumentation-aws-lambda": {\n        disableAwsContextPropagation: true,\n        eventContextExtractor: (event) => {\n          event.headers.traceparent = event.headers.Traceparent;\n          const eventContext = api.propagation.extract(api.context.active(), event.headers);\n\n          return eventContext;\n        },\n      },\n    }),\n  ],\n});\n')),(0,a.kt)("p",null,"The hostname for the Jaeger OTLP Endpoint will be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://<internal_load_balancer_dns_name>:4318"))),(0,a.kt)("p",null,"Enabling the tracer is done by adding an environment variable to the lambda function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'NODE_OPTIONS="--require tracing.js"\n')),(0,a.kt)("h2",{id:"tracetest"},"Tracetest"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest.tf")," file contains the required services for the Tracetest server which include."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Postgres RDS")," - Postgres is a prerequisite for Tracetest to work. It stores the trace-based tests you create, information about prior test runs and other data that Tracetest needs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tracetest Task Definition")," - The information on how to configure and provision Tracetest using ECS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html"},(0,a.kt)("strong",{parentName:"a"},"ECS Service"))," - The server provisioning metadata to run the Tracetest Task Definition."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Networking")," - Security groups, target groups and load balancer listeners required to have Tracetest connected to the rest of the AWS infrastructure.")),(0,a.kt)("h3",{id:"configuring-the-tracetest-container"},"Configuring the Tracetest Container"),(0,a.kt)("p",null,"The Tracetest Docker image supports environment variables as the entry point for the bootstrap configuration, in this case, the task definition includes the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "environment" : [\n    // POSTGRES CONNECTION\n    {\n      "name" : "TRACETEST_POSTGRES_HOST",\n      "value" : "${module.db.db_instance_address}"\n    },\n    {\n      "name" : "TRACETEST_POSTGRES_PORT",\n      "value" : "${tostring(module.db.db_instance_port)}"\n    },\n    {\n      "name" : "TRACETEST_POSTGRES_DBNAME",\n      "value" : "${module.db.db_instance_name}"\n    },\n    {\n      "name" : "TRACETEST_POSTGRES_USER",\n      "value" : "${module.db.db_instance_username}"\n    },\n    {\n      "name" : "TRACETEST_POSTGRES_PASSWORD",\n      "value" : "${module.db.db_instance_password}"\n    },\n    // DATA STORE PROVISIONING\n    {\n      "name" : "TRACETEST_PROVISIONING",\n      "value" : base64encode(local.provisioning)\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"jaeger"},"Jaeger"),(0,a.kt)("p",null,"Similar to the Tracetest setup, there is a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"jaeger.tf")," which contains a basic setup to run the all-in-one Jaeger image using AWS Fargate. In this case, it includes networking rules for the internal and external load balancers, so we can provide a way for both the Node.js Lambdas and Tracetest to have access to the API endpoints from within the VPC while providing public access to the UI."),(0,a.kt)("h3",{id:"jaeger-otlp-endpoints"},"Jaeger OTLP Endpoints"),(0,a.kt)("p",null,"The latest version of Jaeger supports enabling OpenTelemetry endpoints by including the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"environment" : [{\n  "name" : "COLLECTOR_OTLP_ENABLED",\n  "value" : "true"\n}],\n')),(0,a.kt)("h3",{id:"jaeger-grpc-api-endpoint"},"Jaeger GRPC API Endpoint"),(0,a.kt)("p",null,"As Tracetest uses GRPC to interact with the Jaeger API and load balancers only support the HTTPS protocol for this type of endpoints, we need to include a certificate to the load balancer listener to go around this requirement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tf"},'resource "aws_lb_listener" "tracetest-jaeger-api-alb-listener" {\n  load_balancer_arn = aws_lb.internal_tracetest_alb.arn\n  port              = "16685"\n  protocol          = "HTTPS"\n  certificate_arn   = aws_acm_certificate.cert.arn\n\n  default_action {\n    type             = "forward"\n    target_group_arn = aws_lb_target_group.tracetest-jaeger-api-tg.arn\n  }\n}\n\nresource "tls_private_key" "tracetest_private_key" {\n  algorithm = "RSA"\n}\n\nresource "tls_self_signed_cert" "tracetest_self_signed_cert" {\n  private_key_pem = tls_private_key.tracetest_private_key.private_key_pem\n\n  subject {\n    common_name  = "tracetest.com"\n    organization = "Tracetest"\n  }\n\n  validity_period_hours = 720\n\n  allowed_uses = [\n    "key_encipherment",\n    "digital_signature",\n    "server_auth",\n  ]\n}\n\nresource "aws_acm_certificate" "cert" {\n  private_key      = tls_private_key.tracetest_private_key.private_key_pem\n  certificate_body = tls_self_signed_cert.tracetest_self_signed_cert.cert_pem\n}\n')),(0,a.kt)("h2",{id:"how-does-tracetest-reach-jaeger"},"How Does Tracetest Reach Jaeger?"),(0,a.kt)("p",null,"The provisioning configuration for Tracetest can be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"variables.tf")," file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"locals")," configuration which uses the internal load balancer DNS endpoint to build the data store entry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tf"},"provisioning = <<EOF\n---\ntype: PollingProfile\nspec:\n  name: default\n  strategy: periodic\n  default: true\n  periodic:\n    retryDelay: 5s\n    timeout: 10m\n\n---\ntype: DataStore\nspec:\n  name: jaeger\n  type: jaeger\n  jaeger:\n    endpoint: ${aws_lb.internal_tracetest_alb.dns_name}:16685\n    tls:\n      insecure_skip_verify: true\n  EOF\n\n  tags = {\n    Name    = local.name\n    Example = local.name\n  }\n}\n\n  EOF\n")),(0,a.kt)("h2",{id:"how-do-traces-reach-jaeger"},"How Do Traces Reach Jaeger?"),(0,a.kt)("p",null,"Similar to the Tracetest provisioning configuration, you can find the environment entry in the ",(0,a.kt)("inlineCode",{parentName:"p"},"api.tf")," file that uses the internal load balancer DNS endpoint for the ",(0,a.kt)("inlineCode",{parentName:"p"},"OTEL_EXPORTER_OTLP_ENDPOINT")," entry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tf"},'environment {\n    variables = {\n      NODE_OPTIONS                = "--require tracing.js"\n      OTEL_EXPORTER_OTLP_ENDPOINT = "http://${aws_lb.internal_tracetest_alb.dns_name}:4318"\n    }\n  }\n')),(0,a.kt)("h2",{id:"running-the-example"},"Running the Example"),(0,a.kt)("p",null,"To create the AWS infrastructure using Terraform you can simply run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"terraform init \\\nterraform apply\n")),(0,a.kt)("p",null,"After accepting the changes after running the ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform apply")," command and finalizing the infra creation you can find the set of output with the required endpoints to continue with some tests.\nThe final output from the Terraform command should be a list of endpoints that is similar to the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Terraform Outputs",src:n(70572).Z,width:"991",height:"220"})),(0,a.kt)("h2",{id:"running-trace-based-tests"},"Running Trace-based Tests"),(0,a.kt)("p",null,"Now that all of the required services and infra have been created, you can start running some Trace-based testing by doing the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the Terraform output you can copy the ",(0,a.kt)("inlineCode",{parentName:"li"},"api_endpoint")," and replace the ",(0,a.kt)("inlineCode",{parentName:"li"},"<your_api_endpoint>")," placeholder from the ",(0,a.kt)("inlineCode",{parentName:"li"},"tests/test.yaml")," file."),(0,a.kt)("li",{parentName:"ol"},"Configure the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.tracetest.io/cli/configuring-your-cli"},"Tracetest CLI")," to point to the public load balancer endpoint with ",(0,a.kt)("inlineCode",{parentName:"li"},"tracetest configure --endpoint <tracetest_url>"),"."),(0,a.kt)("li",{parentName:"ol"},"Run the test YAML file using the CLI ",(0,a.kt)("inlineCode",{parentName:"li"},"tracetest run test -f tests/test.yaml"),"."),(0,a.kt)("li",{parentName:"ol"},"Follow the link to find the results.")),(0,a.kt)("h2",{id:"learn-more"},"Learn More"),(0,a.kt)("p",null,"Check out our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples"},"examples on GitHub")," and join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/8MtcMrQNbX"},"Discord Community")," for more info!"))}d.isMDXComponent=!0},70572:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/terraform-output-028a487ecef4f57cbe2a47b172dc87d4.png"},64175:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/terraform-serverless-diagram-b26eedc20b44f4e41fc9d6df6aabbb1d.png"}}]);