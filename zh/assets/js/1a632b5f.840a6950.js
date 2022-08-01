"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6014],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=l(t),d=p,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=t.length,i=new Array(a);i[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(2081),p=t(4604),a=(t(9496),t(9613)),i=["components"],o={id:"pnpx-cli",title:"pnpx CLI"},c=void 0,l={unversionedId:"pnpx-cli",id:"version-6.x/pnpx-cli",title:"pnpx CLI",description:"\u6b64\u547d\u4ee4\u5df2\u5f03\u7528\uff01 \u8bf7\u6539\u7528 pnpm exec \u548c pnpm dlx \u547d\u4ee4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/zh/6.x/pnpx-cli",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-6.x/docs",previous:{title:"pnpm CLI",permalink:"/zh/6.x/pnpm-cli"},next:{title:"\u914d\u7f6e",permalink:"/zh/6.x/configuring"}},m={},u=[{value:"\u65b0\u7528\u6237",id:"\u65b0\u7528\u6237",level:2},{value:"npm \u7528\u6237",id:"npm-\u7528\u6237",level:2}],s={toc:u};function d(e){var n=e.components,t=(0,p.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u6b64\u547d\u4ee4\u5df2\u5f03\u7528\uff01 \u8bf7\u6539\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh/6.x/cli/exec"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm exec"))," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/zh/6.x/cli/dlx"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm dlx"))," \u547d\u4ee4\u3002")),(0,a.kt)("h2",{id:"\u65b0\u7528\u6237"},"\u65b0\u7528\u6237"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5b83\u4ece\u6e90\u83b7\u53d6\u5305\u4f46\u5e76\u4e0d\u4f1a\u5c06\u5176\u5b89\u88c5\u4e3a\u4f9d\u8d56\uff0c\u70ed\u52a0\u8f7d\u5e76\u8fd0\u884c\u4efb\u4f55\u5b83\u66b4\u9732\u7684\u9ed8\u8ba4\u4e8c\u8fdb\u5236\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u82e5\u8981\u5728\u4efb\u4f55\u5730\u65b9\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Create-react-app")," \u6765\u521d\u59cb\u5316\u4e00\u4e2a react \u5e94\u7528\uff0c\u800c\u4e0d\u9700\u8981 \u6765\u5728\u53e6\u4e00\u4e2a\u9879\u76ee\u4e0b\u5b89\u88c5\u5b83\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,a.kt)("p",null,"\u8fd9\u5c06\u4ece\u6e90\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u5e76\u4f7f\u7528\u7ed9\u5b9a\u7684\u53c2\u6570\u8fd0\u884c\u5b83\u3002 \u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u5728 npm \u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," \uff0cnpx \u63d0\u4f9b\u4e86\u76f8\u540c\u7684\u63a5\u53e3\uff0c\u4f46\u662f\u5b83\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," \u800c\u4e0d\u662f\u8fd9\u91cc\u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u53ea\u60f3\u8fd0\u884c\u4e00\u4e2a\u9879\u76ee\u4f9d\u8d56\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh/6.x/cli/exec"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm exec")),"\u3002"),(0,a.kt)("h2",{id:"npm-\u7528\u6237"},"npm \u7528\u6237"),(0,a.kt)("p",null,"npm \u6709\u4e00\u4e2a\u5f88\u68d2\u7684\u5305\u8fd0\u884c\u5668\u53eb\u505a ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),"\u3002 pnpm \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," \u547d\u4ee4\u63d0\u4f9b\u76f8\u540c\u7684\u5de5\u5177\u3002 \u552f\u4e00\u7684\u4e0d\u540c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," \u5b89\u88c5\u8f6f\u4ef6\u5305\u3002"))}d.isMDXComponent=!0}}]);