"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5130],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(2081),o=n(4604),a=(n(9496),n(9613)),p=["components"],l={id:"completion",title:"\u547d\u4ee4\u5217 Tab \u9375\u81ea\u52d5\u5b8c\u6210"},c=void 0,i={unversionedId:"completion",id:"completion",title:"\u547d\u4ee4\u5217 Tab \u9375\u81ea\u52d5\u5b8c\u6210",description:"\u4e0d\u540c\u65bc\u5176\u4ed6\u9808\u4f7f\u7528\u5916\u639b\u7a0b\u5f0f\u7684\u5957\u4ef6\u7ba1\u7406\u7cfb\u7d71\uff0cpnpm \u652f\u63f4\u4e86 Bash\u3001Zsh\u3001Fish\u3001\u53ca\u985e\u4f3c shell \u4e0a\u7684 Tab \u9375\u81ea\u52d5\u5b8c\u6210\u529f\u80fd\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/completion.md",sourceDirName:".",slug:"/completion",permalink:"/zh-TW/next/completion",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"completion",title:"\u547d\u4ee4\u5217 Tab \u9375\u81ea\u52d5\u5b8c\u6210"},sidebar:"docs",previous:{title:"Aliases",permalink:"/zh-TW/next/aliases"},next:{title:"Using Changesets with pnpm",permalink:"/zh-TW/next/using-changesets"}},s={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0d\u540c\u65bc\u5176\u4ed6\u9808\u4f7f\u7528\u5916\u639b\u7a0b\u5f0f\u7684\u5957\u4ef6\u7ba1\u7406\u7cfb\u7d71\uff0cpnpm \u652f\u63f4\u4e86 Bash\u3001Zsh\u3001Fish\u3001\u53ca\u985e\u4f3c shell \u4e0a\u7684 Tab \u9375\u81ea\u52d5\u5b8c\u6210\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u57f7\u884c\u6b64\u547d\u4ee4\u4f86\u5b89\u88dd\u81ea\u52d5\u5b8c\u6210\u529f\u80fd\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,a.kt)("p",null,"CLI \u5c07\u6703\u8a62\u554f\u8981\u4f7f\u7528\u4f55\u7a2e shell\uff0c\u4ee5\u751f\u6210\u81ea\u52d5\u5b8c\u6210\u529f\u80fd\u7684\u6307\u4ee4\u78bc\u3002 \u6216\u8005\uff0c\u4e5f\u53ef\u4ee5\u5728\u547d\u4ee4\u5217\u4e2d\u6307\u5b9a\u8981\u4f7f\u7528\u7684 shell\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,a.kt)("p",null,"\u95dc\u65bc\u81ea\u52d5\u5b8c\u6210\u529f\u80fd\u7684\u4f7f\u7528\u7bc4\u4f8b\uff0c\u8acb\u53c3\u95b1 ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"\u6b64\u6587\u7ae0"),"\u3002"))}f.isMDXComponent=!0}}]);