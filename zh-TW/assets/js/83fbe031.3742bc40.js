"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6913],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=l,k=d["".concat(i,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var m=2;m<r;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var a=n(2962),l=n(2742),r=(n(9496),n(9613)),p=["components"],o={id:"installation",title:"\u5b89\u88dd"},i=void 0,m={unversionedId:"installation",id:"installation",title:"\u5b89\u88dd",description:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh-TW/next/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"installation",title:"\u5b89\u88dd"},sidebar:"docs",previous:{title:"\u52d5\u6a5f",permalink:"/zh-TW/next/motivation"},next:{title:"pnpm CLI",permalink:"/zh-TW/next/pnpm-cli"}},s={},u=[{value:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd",id:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd",level:2},{value:"Windows",id:"windows",level:3},{value:"POSIX \u7cfb\u7d71",id:"posix-\u7cfb\u7d71",level:3},{value:"Alpine Linux",id:"alpine-linux",level:3},{value:"\u5fc5\u8981\u689d\u4ef6",id:"\u5fc5\u8981\u689d\u4ef6",level:3},{value:"\u5b89\u88dd\u7279\u5b9a\u7248\u672c",id:"\u5b89\u88dd\u7279\u5b9a\u7248\u672c",level:3},{value:"\u4f7f\u7528 Corepack \u5b89\u88dd",id:"\u4f7f\u7528-corepack-\u5b89\u88dd",level:2},{value:"\u4f7f\u7528 npm",id:"\u4f7f\u7528-npm",level:2},{value:"\u4f7f\u7528 Homebrew",id:"\u4f7f\u7528-homebrew",level:2},{value:"\u4f7f\u7528 Scoop",id:"\u4f7f\u7528-scoop",level:2},{value:"\u76f8\u5bb9\u6027",id:"\u76f8\u5bb9\u6027",level:2},{value:"\u7591\u96e3\u6392\u89e3",id:"\u7591\u96e3\u6392\u89e3",level:2},{value:"\u4f7f\u7528\u8f03\u77ed\u7684\u5225\u540d",id:"\u4f7f\u7528\u8f03\u77ed\u7684\u5225\u540d",level:2},{value:"\u5728 POSIX \u7cfb\u7d71\u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d",id:"\u5728-posix-\u7cfb\u7d71\u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d",level:4},{value:"\u5728 Powershell \u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d (Windows)\uff1a",id:"\u5728-powershell-\u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d-windows",level:4},{value:"\u89e3\u9664\u5b89\u88dd pnpm",id:"\u89e3\u9664\u5b89\u88dd-pnpm",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd"},"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd"),(0,r.kt)("p",null,"\u5373\u4f7f\u6c92\u6709\u5b89\u88dd Node.js\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\u4f86\u5b89\u88dd pnpm\u3002"),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("p",null,"\u4f7f\u7528 PowerShell\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("h3",{id:"posix-\u7cfb\u7d71"},"POSIX \u7cfb\u7d71"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u7684\u7cfb\u7d71\u4e2d\u6c92\u6709\u5b89\u88dd curl\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 wget\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("h3",{id:"alpine-linux"},"Alpine Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;\n')),(0,r.kt)("h3",{id:"\u5fc5\u8981\u689d\u4ef6"},"\u5fc5\u8981\u689d\u4ef6"),(0,r.kt)("p",null,"\u82e5\u4e0d\u60f3\u4f7f\u7528\u6307\u4ee4\u78bc\u4f86\u5b89\u88dd pnpm\uff0c\u60a8\u7684\u7cfb\u7d71\u9700\u6709 Node.js\uff08\u6700\u4f4e v14 \u7248\uff09\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88dd\u7279\u5b9a\u7248\u672c"},"\u5b89\u88dd\u7279\u5b9a\u7248\u672c"),(0,r.kt)("p",null,"\u5728\u57f7\u884c\u5b89\u88dd\u6307\u4ee4\u78bc\u4e4b\u524d\uff0c\u60a8\u53ef\u4ee5\u8a2d\u5b9a shell \u8b8a\u6578 ",(0,r.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," \u4ee5\u5b89\u88dd\u7279\u5b9a\u7248\u672c\u7684 pnpm\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u63a5\u4e0b\u4f86\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/next/cli/env"},"pnpm env")," \u547d\u4ee4\u4f86\u5b89\u88dd Node.js\u4e86\u3002")),(0,r.kt)("h2",{id:"\u4f7f\u7528-corepack-\u5b89\u88dd"},"\u4f7f\u7528 Corepack \u5b89\u88dd"),(0,r.kt)("p",null,"\u5f9e v16.13 \u958b\u59cb\uff0cNode.js \u767c\u5e03\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," \u7528\u4ee5\u7ba1\u7406\u5957\u4ef6\u7ba1\u7406\u5668\u3002 \u9019\u662f\u4e00\u9805\u5be6\u9a57\u6027\u529f\u80fd\uff0c\u6240\u4ee5\u60a8\u9700\u8981\u5148\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4\u4f86\u555f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"If you installed Node.js using Homebrew, you'll need to install corepack separately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install corepack\n")),(0,r.kt)("p",null,"This will automatically install pnpm on your system. However, it probably won't be the latest version of pnpm. To upgrade it, check what is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"latest pnpm version")," and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,r.kt)("p",null,"With Node.js v16.17 or newer, you may install the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," version of pnpm by just specifying the tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-npm"},"\u4f7f\u7528 npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-homebrew"},"\u4f7f\u7528 Homebrew"),(0,r.kt)("p",null,"If you have the package manager installed, you can install pnpm using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-scoop"},"\u4f7f\u7528 Scoop"),(0,r.kt)("p",null,"If you have Scoop installed, you can install pnpm using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Do you wanna use pnpm on CI servers? See: ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/next/continuous-integration"},"Continuous Integration"),".")),(0,r.kt)("h2",{id:"\u76f8\u5bb9\u6027"},"\u76f8\u5bb9\u6027"),(0,r.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"\u7591\u96e3\u6392\u89e3"},"\u7591\u96e3\u6392\u89e3"),(0,r.kt)("p",null,"If pnpm is broken and you cannot fix it by reinstalling, you might need to remove it manually from the PATH."),(0,r.kt)("p",null,"Let's assume you have the following error when running ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"First, try to find the location of pnpm by running: ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),". If you're on Windows, run this command in Git Bash. You'll get the location of the pnpm command, for instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"Now that you know where the pnpm CLI is, open that directory and remove any pnpm-related files (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). \u5b8c\u6210\u5f8c\u518d\u91cd\u65b0\u5b89\u88dd pnpm\uff0c\u61c9\u8a72\u5c31\u6062\u5fa9\u6b63\u5e38\u4e86\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u8f03\u77ed\u7684\u5225\u540d"},"\u4f7f\u7528\u8f03\u77ed\u7684\u5225\u540d"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,r.kt)("inlineCode",{parentName:"p"},"pn")," instead."),(0,r.kt)("h4",{id:"\u5728-posix-\u7cfb\u7d71\u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d"},"\u5728 POSIX \u7cfb\u7d71\u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d"),(0,r.kt)("p",null,"Just put the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,r.kt)("h4",{id:"\u5728-powershell-\u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d-windows"},"\u5728 Powershell \u4e2d\u52a0\u5165\u6c38\u4e45\u5225\u540d (Windows)\uff1a"),(0,r.kt)("p",null,"In a Powershell window with admin rights, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile.ps1")," file that opens, put:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,r.kt)("p",null,"Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect."),(0,r.kt)("h2",{id:"\u89e3\u9664\u5b89\u88dd-pnpm"},"\u89e3\u9664\u5b89\u88dd pnpm"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u5f9e\u7cfb\u7d71\u53ca\u5176\u5beb\u5165\u78c1\u789f\u4e2d\u7684\u4efb\u4f55\u6a94\u6848\u4e2d\u79fb\u9664 pnpm CLI\uff0c\u8acb\u53c3\u95b1\u3008",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/next/uninstall"},"\u89e3\u9664\u5b89\u88dd pnpm"),"\u3009\u3002"))}c.isMDXComponent=!0}}]);