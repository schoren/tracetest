"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[9395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||c;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const c={},i="CLI Reference",a={unversionedId:"cli/reference/tracetest_configure",id:"cli/reference/tracetest_configure",title:"CLI Reference",description:"tracetest configure",source:"@site/docs/cli/reference/tracetest_configure.md",sourceDirName:"cli/reference",slug:"/cli/reference/tracetest_configure",permalink:"/cli/reference/tracetest_configure",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/cli/reference/tracetest_configure.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI Reference",permalink:"/cli/reference/tracetest_completion_zsh"},next:{title:"CLI Reference",permalink:"/cli/reference/tracetest_dashboard"}},l={},s=[{value:"tracetest configure",id:"tracetest-configure",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 12-Oct-2023",id:"auto-generated-by-spf13cobra-on-12-oct-2023",level:6}],u={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli-reference"},"CLI Reference"),(0,o.kt)("h2",{id:"tracetest-configure"},"tracetest configure"),(0,o.kt)("p",null,"Configure your tracetest CLI"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Configure your tracetest CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tracetest configure [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --ci                if cloud is used, don't ask for authentication\n  -e, --endpoint string   set the value for the endpoint, so the CLI won't ask for this value\n  -g, --global            configuration will be saved in your home dir\n  -h, --help              help for configure\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --config string       config file will be used by the CLI (default "config.yml")\n  -o, --output string       output format [pretty|json|yaml]\n  -s, --server-url string   server url\n  -v, --verbose             display debug information\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli/reference/tracetest"},"tracetest"),"\t - CLI to configure, install and execute tests on a Tracetest server")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-12-oct-2023"},"Auto generated by spf13/cobra on 12-Oct-2023"))}f.isMDXComponent=!0}}]);