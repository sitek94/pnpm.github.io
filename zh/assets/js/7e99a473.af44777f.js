"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3350],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),s=l,k=d["".concat(o,".").concat(s)]||d[s]||m[s]||p;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,a=new Array(p);a[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<p;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(2081),l=n(4604),p=(n(9496),n(9613)),a=["components"],i={id:"exec",title:"pnpm exec"},o=void 0,c={unversionedId:"cli/exec",id:"version-6.x/cli/exec",title:"pnpm exec",description:"\u5728\u9879\u76ee\u8303\u56f4\u5185\u6267\u884c shell \u547d\u4ee4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/zh/6.x/cli/exec",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-6.x/docs",previous:{title:"pnpm test",permalink:"/zh/6.x/cli/test"},next:{title:"pnpm dlx",permalink:"/zh/6.x/cli/dlx"}},u={},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:m};function s(e){var t=e.components,n=(0,l.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u5728\u9879\u76ee\u8303\u56f4\u5185\u6267\u884c shell \u547d\u4ee4\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \u6dfb\u52a0\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),"\uff0c\u56e0\u6b64 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm exec")," \u5141\u8bb8\u6267\u884c\u4f9d\u8d56\u9879\u7684\u547d\u4ee4\u3002"),(0,p.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u5c06 Jest \u4f5c\u4e3a\u9879\u76ee\u7684\u4f9d\u8d56\u9879\uff0c\u5219\u65e0\u9700\u5168\u5c40\u5b89\u88c5 Jest\uff0c\u53ea\u9700\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm exec"),"\u8fd0\u884c\u5b83\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,p.kt)("p",null,"\u5f53\u547d\u4ee4\u4e0e\u5185\u7f6e pnpm \u547d\u4ee4\u4e0d\u51b2\u7a81\u65f6\uff0c ",(0,p.kt)("inlineCode",{parentName:"p"},"exec")," \u90e8\u5206\u5b9e\u9645\u4e0a\u662f\u53ef\u9009\u7684\uff0c\u56e0\u6b64\u60a8\u4e5f\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,p.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"exec")," \u547d\u4ee4\u7684\u4efb\u4f55\u9009\u9879\u90fd\u5e94\u8be5\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"exec")," \u5173\u952e\u5b57\u4e4b\u524d\u5217\u51fa\u3002 \u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"exec")," \u5173\u952e\u5b57\u4e4b\u540e\u5217\u51fa\u7684\u9009\u9879\u90fd\u5c06\u88ab\u4f20\u9012\u7ed9\u88ab\u6267\u884c\u7684\u547d\u4ee4\u3002"),(0,p.kt)("p",null,"\u597d\u7684\u505a\u6cd5\u3002 pnpm \u5c06\u4ee5\u9012\u5f52\u7684\u65b9\u5f0f\u8fd0\u884c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,p.kt)("p",null,"\u7cdf\u7cd5\u7684\u505a\u6cd5\uff0cpnpm \u5c06\u4e0d\u4f1a\u4ee5\u9012\u5f52\u65b9\u5f0f\u8fd0\u884c\uff0c\u4f46 ",(0,p.kt)("inlineCode",{parentName:"p"},"jest")," \u5c06\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"-r")," \u9009\u9879\u6267\u884c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.9.0"),(0,p.kt)("p",null,"\u5728\u5de5\u4f5c\u533a\u7684\u6bcf\u4e2a\u9879\u76ee\u4e2d\u6267\u884c shell \u547d\u4ee4\u3002"),(0,p.kt)("p",null,"\u5f53\u524d\u8f6f\u4ef6\u5305\u7684\u540d\u79f0\u53ef\u901a\u8fc7\u73af\u5883\u53d8\u91cf ",(0,p.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (\u7531 pnpm v2.22.0 \u63d0\u4f9b\u652f\u6301)\u3002"),(0,p.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,p.kt)("p",null,"\u4e3a\u6240\u6709\u7684\u8f6f\u4ef6\u5305\u6e05\u7406 ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \u5b89\u88c5\u4fe1\u606f\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,p.kt)("p",null,"\u67e5\u770b\u6240\u6709\u5305\u7684\u5305\u4fe1\u606f\u3002 \u8fd9\u5e94\u8be5\u4e0e ",(0,p.kt)("inlineCode",{parentName:"p"},"--shell-mode"),"\uff08\u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"-c"),"\uff09\u9009\u9879\u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u4f7f\u73af\u5883\u53d8\u91cf\u8d77\u4f5c\u7528\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,p.kt)("h3",{id:"--parallel"},"--parallel"),(0,p.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.1.0"),(0,p.kt)("p",null,"\u5b8c\u5168\u5ffd\u7565\u5e76\u53d1\u548c\u62d3\u6251\u6392\u5e8f\uff0c\u5728\u6240\u6709\u5339\u914d\u7684\u5305\u4e2d\u7acb\u5373\u8fd0\u884c\u7ed9\u5b9a\u7684\u811a\u672c \u5e76\u8f93\u51fa\u524d\u7f00\u6d41\u3002 \u8fd9\u662f\u4e2a\u63a8\u8350\u7684\u6807\u5fd7\uff0c\u7528\u4e8e\u5728\u8bb8\u591a",(0,p.kt)("inlineCode",{parentName:"p"}," packages"),"\u4e0a\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u4f8b\u5982\u5197\u957f\u7684\u6784\u5efa\u8fdb\u7a0b\u3002"),(0,p.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,p.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av6.31.0"),(0,p.kt)("p",null,"\u5728 shell \u4e2d\u8fd0\u884c\u8be5\u547d\u4ee4\u3002 \u5728 UNIX \u7cfb\u7edf\u4e2d\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"/bin/sh"),"\uff0c\u5728 Windows \u7cfb\u7edf\u4e2d\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"\\cmd.exe"),"\u3002"),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/zh/6.x/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}s.isMDXComponent=!0}}]);