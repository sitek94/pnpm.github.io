"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5815],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=s(n),m=a,f=k["".concat(p,".").concat(m)]||k[m]||u[m]||r;return n?l.createElement(f,i(i({ref:t},d),{},{components:n})):l.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=n(2081),a=n(4604),r=(n(9496),n(9613)),i=["components"],o={id:"install",title:"pnpm install"},p=void 0,s={unversionedId:"cli/install",id:"version-6.x/cli/install",title:"pnpm install",description:"\u547d\u4ee4\u5225\u540d\uff1ai",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-6.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/zh-TW/6.x/cli/install",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"6.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-6.x/docs",previous:{title:"pnpm add <pkg>",permalink:"/zh-TW/6.x/cli/add"},next:{title:"pnpm update",permalink:"/zh-TW/6.x/cli/update"}},d={},u=[{value:"\u547d\u4ee4\u7c21\u8981",id:"\u547d\u4ee4\u7c21\u8981",level:2},{value:"Options",id:"options",level:2},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--ignore-scripts",id:"--ignore-scripts",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;name&gt;",id:"--reportername",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],k={toc:u};function m(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u547d\u4ee4\u5225\u540d\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"i")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u4f86\u70ba\u5c08\u6848\u5b89\u88dd\u6240\u6709\u76f8\u4f9d\u5957\u4ef6\u3002"),(0,r.kt)("p",null,"\u5728 CI \u74b0\u5883\u4e2d\uff0c\u5982\u679c lockfile \u5b58\u5728\u4f46\u9700\u8981\u66f4\u65b0\u6642\uff0c\u6703\u4f7f\u5b89\u88dd\u5931\u6557\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/6.x/workspaces"},"workspace")," \u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u6703\u5b89\u88dd\u6240\u6709\u5c08\u6848\u7684\u76f8\u4f9d\u5957\u4ef6\u3002 \u5982\u8981\u505c\u7528\u6b64\u884c\u70ba\uff0c\u8acb\u5c07 ",(0,r.kt)("inlineCode",{parentName:"p"},"recursive-install")," \u8a2d\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8927).Z,width:"940",height:"472"})),(0,r.kt)("h2",{id:"\u547d\u4ee4\u7c21\u8981"},"\u547d\u4ee4\u7c21\u8981"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,r.kt)("td",{parentName:"tr",align:null},"\u50c5\u5f9e store \u96e2\u7dda\u5b89\u88dd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,r.kt)("td",{parentName:"tr",align:null},"\u50c5\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml"))))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--offline"},"--offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u6b64\u503c\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u6642\uff0cpnpm \u53ea\u4f7f\u7528 store \u4e2d\u53ef\u7528\u7684\u5957\u4ef6\u3002 \u5982\u679c\u5728\u672c\u6a5f\u7121\u6cd5\u627e\u5230\u5957\u4ef6\uff0c\u5247\u5b89\u88dd\u6703\u5931\u6557\u3002"),(0,r.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,r.kt)("p",null,"Added in: v1.28.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", staleness checks for cached data will be bypassed, but missing data will be requested from the server. To force full offline mode, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline"),"."),(0,r.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Do not execute any scripts defined in the project ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," and its dependencies."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This flag does not prevent the execution of ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/6.x/pnpmfile"},".pnpmfile.cjs"))),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"pnpm will not install any package listed in ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," if the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable is set to production. Use this flag to instruct pnpm to ignore ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," and take its production status from this flag instead."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,"Only ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," are installed regardless of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," are not installed."),(0,r.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,r.kt)("p",null,"Added in: v1.26.0 (initially named ",(0,r.kt)("inlineCode",{parentName:"p"},"shrinkwrap-only"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When used, only updates ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". Nothing gets written to the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," directory."),(0,r.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,r.kt)("p",null,"Added in: v6.15.0"),(0,r.kt)("p",null,"Fix broken lockfile entries automatically."),(0,r.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,r.kt)("p",null,"Added in: v1.37.1 (initially named ",(0,r.kt)("inlineCode",{parentName:"p"},"frozen-shrinkwrap"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For non-CI: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"For CI: ",(0,r.kt)("strong",{parentName:"li"},"true"),", if a lockfile is present"))),(0,r.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm doesn't generate a lockfile and fails to install if the lockfile is out of sync with the manifest / an update is needed or no lockfile is present."),(0,r.kt)("h3",{id:"--reportername"},"--reporter=","<","name",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For TTY stdout: ",(0,r.kt)("strong",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},"For non-TTY stdout: ",(0,r.kt)("strong",{parentName:"li"},"append-only")))),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"default"),", ",(0,r.kt)("strong",{parentName:"li"},"append-only"),", ",(0,r.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,r.kt)("strong",{parentName:"li"},"silent"))),(0,r.kt)("p",null,"Allows you to choose the reporter that will log debug info to the terminal about the installation progress."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"silent")," - no output is logged to the console, except fatal errors"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default")," - the default reporter when the stdout is TTY"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"append-only")," (Added in v1.29.1) - the output is always appended to the end. No cursor manipulations are performed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ndjson")," - the most verbose reporter. Prints all logs in ",(0,r.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," format")),(0,r.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,r.kt)("p",null,"Added in: v1.30.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Starts a store server in the background. The store server will keep running after installation is done. To stop the store server, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm server stop")),(0,r.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u503c\uff1a",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u985e\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Creates a flat ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," structure, similar to that of ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),". ",(0,r.kt)("strong",{parentName:"p"},"WARNING"),": This is highly discouraged."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-TW/6.x/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0},8927:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);