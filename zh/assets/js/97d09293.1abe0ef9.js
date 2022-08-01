"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3100],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(2081),o=n(4604),i=(n(9496),n(9613)),l=["components"],a={id:"git",title:"\u4f7f\u7528 Git"},p=void 0,c={unversionedId:"git",id:"version-6.x/git",title:"\u4f7f\u7528 Git",description:"Lockfile",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/git.md",sourceDirName:".",slug:"/git",permalink:"/zh/6.x/git",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"git",title:"\u4f7f\u7528 Git"},sidebar:"version-6.x/docs",previous:{title:"\u6301\u7eed\u96c6\u6210",permalink:"/zh/6.x/continuous-integration"},next:{title:"\u529f\u80fd\u6bd4\u8f83",permalink:"/zh/6.x/feature-comparison"}},u={},s=[{value:"Lockfile",id:"lockfile",level:2},{value:"\u5408\u5e76\u51b2\u7a81",id:"\u5408\u5e76\u51b2\u7a81",level:3}],f={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lockfile"},"Lockfile"),(0,i.kt)("p",null,"\u60a8\u5e94\u8be5\u59cb\u7ec8\u63d0\u4ea4Lockfile\uff08pnpm\u751f\u6210\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"\u6587\u4ef6\uff09\u3002 \u8fd9\u662f\u51fa\u4e8e\u591a\u79cd\u539f\u56e0\uff0c\u4e3b\u8981\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 CI \u548c\u751f\u4ea7\u73af\u5883\u4e2d\u80fd\u591f\u66f4\u5feb\u5730\u5b8c\u6210\u5b89\u88c5\uff0c\u56e0\u4e3a\u89e3\u6790\u4f9d\u8d56\u7684\u8fc7\u7a0b\u53ef\u4ee5\u88ab\u8df3\u8fc7\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u53d1\uff0c\u6d4b\u8bd5\u548c\u751f\u4ea7\u73af\u5883\u4e4b\u95f4\u5f3a\u5236\u6267\u884c\u4e00\u81f4\u7684\u5b89\u88c5\u548c\u89e3\u6790\u65b9\u6848\uff0c\u8fd9\u610f\u5473\u7740\u6d4b\u8bd5\u548c\u751f\u4ea7\u4e2d\u4f7f\u7528\u7684\u5305\u5c06\u4e0e\u60a8\u5f00\u53d1\u9879\u76ee\u65f6\u5b8c\u5168\u76f8\u540c")),(0,i.kt)("h3",{id:"\u5408\u5e76\u51b2\u7a81"},"\u5408\u5e76\u51b2\u7a81"),(0,i.kt)("p",null,"pnpm \u53ef\u4ee5\u81ea\u52a8\u89e3\u51b3 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," \u7684\u5408\u5e76\u51b2\u7a81\u3002 \u5982\u679c\u6709\u51b2\u7a81\uff0c\u53ea\u9700\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u5e76\u63d0\u4ea4\u66f4\u6539\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\uff0c\u8bf7\u6ce8\u610f\u3002 \u5efa\u8bae\u60a8\u63d0\u4ea4\u4e4b\u524d\u67e5\u770b\u66f4\u6539\uff0c\u56e0\u4e3a\u6211\u4eec\u65e0\u6cd5\u4fdd\u8bc1 pnpm \u4f1a\u9009\u62e9\u6b63\u786e\u7684\u5934\uff08head\uff09 - \u5b83\u4f1a\u6784\u5efa\u5927\u90e8\u5206\u66f4\u65b0\u7684\u9501\u6587\u4ef6\uff0c\u8fd9\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u662f\u7406\u60f3\u7684\u3002"))}m.isMDXComponent=!0}}]);