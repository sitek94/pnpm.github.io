"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6124],{9613:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=s(a),u=r,c=k["".concat(o,".").concat(u)]||k[u]||d[u]||l;return a?n.createElement(c,p(p({ref:e},m),{},{components:a})):n.createElement(c,p({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2643:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(2081),r=a(4604),l=(a(9496),a(9613)),p=["components"],i={id:"workspaces",title:"\u5de5\u4f5c\u7a7a\u95f4\uff08Workspace\uff09"},o=void 0,s={unversionedId:"workspaces",id:"workspaces",title:"\u5de5\u4f5c\u7a7a\u95f4\uff08Workspace\uff09",description:"pnpm \u5185\u7f6e\u4e86\u5bf9\u5355\u4e00\u5b58\u50a8\u5e93\uff08\u4e5f\u79f0\u4e3a\u591a\u5305\u5b58\u50a8\u5e93\u3001\u591a\u9879\u76ee\u5b58\u50a8\u5e93\u6216\u5355\u4f53\u5b58\u50a8\u5e93\uff09\u7684\u652f\u6301\uff0c \u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a workspace \u4ee5\u5c06\u591a\u4e2a\u9879\u76ee\u5408\u5e76\u5230\u4e00\u4e2a\u4ed3\u5e93\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/zh/next/workspaces",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"workspaces",title:"\u5de5\u4f5c\u7a7a\u95f4\uff08Workspace\uff09"},sidebar:"docs",previous:{title:".pnpmfile.cjs",permalink:"/zh/next/pnpmfile"},next:{title:"\u522b\u540d\uff08Aliases\uff09",permalink:"/zh/next/aliases"}},m={},d=[{value:"Workspace \u534f\u8bae (workspace:)",id:"workspace-\u534f\u8bae-workspace",level:2},{value:"\u901a\u8fc7\u522b\u540d\u5f15\u7528 workspace \u5305",id:"\u901a\u8fc7\u522b\u540d\u5f15\u7528-workspace-\u5305",level:3},{value:"\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u5f15\u7528 workspace \u5305",id:"\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u5f15\u7528-workspace-\u5305",level:3},{value:"\u53d1\u5e03 workspace \u5305",id:"\u53d1\u5e03-workspace-\u5305",level:3},{value:"\u53d1\u5e03\u5de5\u4f5c\u6d41",id:"\u53d1\u5e03\u5de5\u4f5c\u6d41",level:2},{value:"\u6545\u969c\u6392\u67e5",id:"\u6545\u969c\u6392\u67e5",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}],k={toc:d};function u(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"pnpm \u5185\u7f6e\u4e86\u5bf9\u5355\u4e00\u5b58\u50a8\u5e93\uff08\u4e5f\u79f0\u4e3a\u591a\u5305\u5b58\u50a8\u5e93\u3001\u591a\u9879\u76ee\u5b58\u50a8\u5e93\u6216\u5355\u4f53\u5b58\u50a8\u5e93\uff09\u7684\u652f\u6301\uff0c \u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a workspace \u4ee5\u5c06\u591a\u4e2a\u9879\u76ee\u5408\u5e76\u5230\u4e00\u4e2a\u4ed3\u5e93\u4e2d\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a workspace \u7684\u6839\u76ee\u5f55\u4e0b\u5fc5\u987b\u6709 ",(0,l.kt)("a",{parentName:"p",href:"/zh/next/pnpm-workspace_yaml"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," \u6587\u4ef6\uff0c \u4e5f\u53ef\u80fd\u4f1a\u6709 ",(0,l.kt)("a",{parentName:"p",href:"/zh/next/npmrc"},(0,l.kt)("inlineCode",{parentName:"a"},".npmrc"))," \u6587\u4ef6\u3002"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you are looking into monorepo management, you might also want to look into ",(0,l.kt)("a",{parentName:"p",href:"https://bit.dev/?utm_source=pnpm&utm_medium=workspace_page"},"Bit"),". Bit uses pnpm under the hood but automates a lot of the things that are currently done manually in a traditional workspace managed by pnpm/npm/Yarn. There's an article about ",(0,l.kt)("inlineCode",{parentName:"p"},"bit install")," that talks about it: ",(0,l.kt)("a",{parentName:"p",href:"https://bit.cloud/blog/painless-monorepo-dependency-management-with-bit-l4f9fzyw?utm_source=pnpm&utm_medium=workspace_page"},"Painless Monorepo Dependency Management with Bit"),".")),(0,l.kt)("h2",{id:"workspace-\u534f\u8bae-workspace"},"Workspace \u534f\u8bae (workspace:)"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u53ef\u7528\u7684 packages \u4e0e\u5df2\u58f0\u660e\u7684\u53ef\u7528\u8303\u56f4\u76f8\u5339\u914d\uff0cpnpm \u5c06\u4ece\u5de5\u4f5c\u533a\u94fe\u63a5\u8fd9\u4e9b packages\u3002 \u4f8b\u5982\uff0c\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," \u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo"\uff1a"^1.0.0"')," \u7684\u8fd9\u4e2a\u4f9d\u8d56\u9879\uff0c\u5219 ",(0,l.kt)("inlineCode",{parentName:"p"}," foo@1.0.0")," \u94fe\u63a5\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),"\u3002 \u4f46\u662f\uff0c\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," \u7684\u4f9d\u8d56\u9879\u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"'),"\uff0c\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," \u5728\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u5e76\u4e0d\u5b58\u5728\uff0c\u5219\u5c06\u4ece npm registry \u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," \u3002 \u8fd9\u79cd\u884c\u4e3a\u5e26\u6765\u4e86\u4e00\u4e9b\u4e0d\u786e\u5b9a\u6027\u3002"),(0,l.kt)("p",null,"\u5e78\u8fd0\u7684\u662f\uff0cpnpm \u652f\u6301 workspace \u534f\u8bae ",(0,l.kt)("inlineCode",{parentName:"p"}," workspace:")," \u3002 \u5f53\u4f7f\u7528\u6b64\u534f\u8bae\u65f6\uff0cpnpm \u5c06\u62d2\u7edd\u89e3\u6790\u9664\u672c\u5730 workspace \u5305\u542b\u7684 package \u4e4b\u5916\u7684\u4efb\u4f55\u5185\u5bb9\u3002 \u56e0\u6b64\uff0c\u5982\u679c\u60a8\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"')," \u65f6\uff0c\u5b89\u88c5\u5c06\u4f1a\u5931\u8d25\uff0c\u56e0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," \u4e0d\u5b58\u5728\u4e8e\u6b64 workspace \u4e2d\u3002"),(0,l.kt)("p",null,"This protocol is especially useful when the ",(0,l.kt)("a",{parentName:"p",href:"/zh/next/npmrc#link-workspace-packages"},"link-workspace-packages")," option is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),". \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4ec5\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," \u534f\u8bae\u58f0\u660e\u4f9d\u8d56\uff0cpnpm \u624d\u4f1a\u4ece\u6b64 workspace \u94fe\u63a5\u6240\u9700\u7684\u5305\u3002"),(0,l.kt)("h3",{id:"\u901a\u8fc7\u522b\u540d\u5f15\u7528-workspace-\u5305"},"\u901a\u8fc7\u522b\u540d\u5f15\u7528 workspace \u5305"),(0,l.kt)("p",null,"\u5047\u8bbe\u4f60\u5728 workspace \u4e2d\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," \u7684\u5305\uff0c \u901a\u5e38\u4f60\u4f1a\u50cf\u8fd9\u6837\u5f15\u7528\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u7528\u5176\u4ed6\u522b\u540d\uff0c\u90a3\u4e48\u4ee5\u4e0b\u8bed\u6cd5\u4e5f\u5c06\u8d77\u4f5c\u7528: ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"\u3002"),(0,l.kt)("p",null,"\u5728\u53d1\u5e03\u4e4b\u524d\uff0c\u522b\u540d\u88ab\u8f6c\u6362\u4e3a\u5e38\u89c4\u540d\u79f0\u3002 \u4e0a\u9762\u7684\u793a\u4f8b\u5c06\u53d8\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"\u3002"),(0,l.kt)("h3",{id:"\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u5f15\u7528-workspace-\u5305"},"\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u5f15\u7528 workspace \u5305"),(0,l.kt)("p",null,"\u5047\u5982 workspace \u4e2d\u6709\u4e24\u4e2a\u5305\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bar")," \u4e2d\u53ef\u80fd\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," \u7684\u4f9d\u8d56\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),"\uff0c \u5728\u53d1\u5e03\u4e4b\u524d\uff0c\u8fd9\u4e9b\u5c06\u8f6c\u6362\u4e3a\u6240\u6709\u5305\u7ba1\u7406\u5668\u652f\u6301\u7684\u5e38\u89c4\u7248\u672c\u89c4\u8303\u3002"),(0,l.kt)("h3",{id:"\u53d1\u5e03-workspace-\u5305"},"\u53d1\u5e03 workspace \u5305"),(0,l.kt)("p",null,"\u5f53 workspace \u5305\u6253\u5305\u5230\u5f52\u6863\uff08\u65e0\u8bba\u5b83\u662f\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm pack")," \uff0c\u8fd8\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish")," \u4e4b\u7c7b\u7684\u53d1\u5e03\u547d\u4ee4\uff09\u65f6\uff0c\u6211\u4eec\u5c06\u52a8\u6001\u66ff\u6362\u8fd9\u4e9b ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," \u4f9d\u8d56\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76ee\u6807 workspace \u4e2d\u7684\u5bf9\u5e94\u7248\u672c\uff08\u5982\u679c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:~"),", or ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:^"),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u5173\u7684 semver \u8303\u56f4\uff08\u5bf9\u4e8e\u4efb\u4f55\u5176\u4ed6\u8303\u56f4\u7c7b\u578b\uff09")),(0,l.kt)("p",null,"\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5047\u8bbe\u6211\u4eec\u7684 workspace \u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"qar"),"\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"zoo")," \u5e76\u4e14\u5b83\u4eec\u7684\u7248\u672c\u90fd\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5.0"),"\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"\u5c06\u4f1a\u88ab\u8f6c\u5316\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u5141\u8bb8\u4f60\u53d1\u5e03\u8f6c\u5316\u4e4b\u540e\u7684\u5305\u5230\u8fdc\u7aef\uff0c\u5e76\u4e14\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u672c\u5730 workspace \u4e2d\u7684 packages\uff0c\u800c\u4e0d\u9700\u8981\u5176\u5b83\u4e2d\u95f4\u6b65\u9aa4\u3002\u5305\u7684\u4f7f\u7528\u8005\u4e5f\u53ef\u4ee5\u50cf\u5e38\u89c4\u7684\u5305\u90a3\u6837\u6b63\u5e38\u4f7f\u7528\uff0c\u4e14\u4ecd\u7136\u53ef\u4ee5\u53d7\u76ca\u4e8e\u8bed\u4e49\u5316\u7248\u672c\u3002"),(0,l.kt)("h2",{id:"\u53d1\u5e03\u5de5\u4f5c\u6d41"},"\u53d1\u5e03\u5de5\u4f5c\u6d41"),(0,l.kt)("p",null,"workspace \u4e2d\u7684\u5305\u7248\u672c\u7ba1\u7406\u662f\u4e00\u4e2a\u590d\u6742\u7684\u4efb\u52a1\uff0cpnpm \u76ee\u524d\u4e5f\u5e76\u672a\u63d0\u4f9b\u5185\u7f6e\u7684\u89e3\u51b3\u65b9\u6848\u3002 \u4e0d\u8fc7\uff0c\u6709\u4e24\u4e2a\u4e0d\u9519\u4e14\u652f\u6301 pnpm \u7684\u7248\u672c\u63a7\u5236\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,l.kt)("p",null,"For how to set up a repository using Rush, read ",(0,l.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),(0,l.kt)("p",null,"For using Changesets with pnpm, read ",(0,l.kt)("a",{parentName:"p",href:"/zh/next/using-changesets"},"this guide"),"."),(0,l.kt)("h2",{id:"\u6545\u969c\u6392\u67e5"},"\u6545\u969c\u6392\u67e5"),(0,l.kt)("p",null,"\u5982\u679c\u5de5\u4f5c\u7a7a\u95f4\u4f9d\u8d56\u9879\u4e4b\u95f4\u5b58\u5728\u5faa\u73af\uff0c\u5219 pnpm \u65e0\u6cd5\u4fdd\u8bc1\u811a\u672c\u5c06\u6309\u62d3\u6251\u987a\u5e8f\u8fd0\u884c\u3002 \u5982\u679c pnpm \u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u68c0\u6d4b\u5230\u5faa\u73af\u4f9d\u8d56\uff0c\u5219\u4f1a\u63d0\u4f9b\u4e00\u4e2a warning \u8b66\u544a\u3002 \u5982\u679c pnpm \u80fd\u591f\u627e\u51fa\u5bfc\u81f4\u5faa\u73af\u7684\u4f9d\u8d56\u9879\uff0c\u4e5f\u4f1a\u5c06\u5176\u5c55\u793a\u51fa\u6765\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u770b\u5230\u6b64\u6d88\u606f ",(0,l.kt)("inlineCode",{parentName:"p"},"There are cyclic workspace dependencies")," \uff0c\u8bf7\u68c0\u67e5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\u58f0\u660e\u7684\u5de5\u4f5c\u7a7a\u95f4\u4f9d\u8d56\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u51e0\u4e2a\u4f7f\u7528\u4e86 pnpm \u5de5\u4f5c\u7a7a\u95f4\u529f\u80fd\u7684\u6700\u53d7\u6b22\u8fce\u7684\u5f00\u6e90\u9879\u76ee\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Stars"),(0,l.kt)("th",{parentName:"tr",align:null},"Migration date"),(0,l.kt)("th",{parentName:"tr",align:null},"Migration commit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/next.js"},"Next.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/next.js",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f7b81316aea4fc9962e5e54981a6d559004231aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitejs/vite"},"Vite")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitejs/vite",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vuejs/vue-next"},"Vue 3.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vuejs/vue-next",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-10-09"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"61c5fbd3e35152f5f32e95bf04d3ee083414cecb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/prisma/prisma"},"Prisma")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/prisma/prisma",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/slidevjs/slidev"},"Slidev")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/slidevjs/slidev",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-04-12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/element-plus/element-plus"},"Element Plus")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/element-plus/element-plus",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-23"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f9e192535ff74d1443f1d9e0c5394fad10428629"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/verdaccio/verdaccio",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/withastro/astro"},"Astro")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/withastro/astro",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03-08"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"240d88aefe66c7d73b9c713c5da42ae789c011ce"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/cyclejs/cyclejs",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f2187ab6688368edb904b649bd371a658f6a8637"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vueuse/vueuse"},"VueUse")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vueuse/vueuse",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nextauthjs/next-auth"},"NextAuth.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nextauthjs/next-auth",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-03"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4f29d39521451e859dbdb83179756b372e3dd7aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/sveltejs/kit"},"SvelteKit")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/sveltejs/kit",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/Saul-Mirone/milkdown",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitest-dev/vitest"},"Vitest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitest-dev/vitest",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-13"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6ff0ccb819716713f5eab5c046861f4d8e4f988"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nhost/nhost"},"Nhost")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nhost/nhost",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-02-07"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10a1799a1fef2f558f737de3bb6cadda2b50e58f"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rollup/plugins"},"Rollup plugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/rollup/plugins",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"53fb18c0c2852598200c547a0b1d745d15b5b487"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bytedance/bytemd"},"ByteMD")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/bytedance/bytemd",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-18"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ice-lab/icestark"},"icestark")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/ice-lab/icestark",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4862326a8de53d02f617e7b1986774fd7540fccd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vuepress/vuepress-next"},"VuePress 2.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vuepress/vuepress-next",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-04-23"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b85b1c3b39e80a8de92a7469381061f75ef33623"))))))}u.isMDXComponent=!0}}]);