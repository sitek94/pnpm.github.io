"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1518],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(v,a(a({ref:t},s),{},{components:n})):r.createElement(v,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var r=n(2081),o=n(4604),l=(n(9496),n(9613)),a=["components"],p={id:"env",title:"pnpm env <cmd>"},c=void 0,i={unversionedId:"cli/env",id:"cli/env",title:"pnpm env <cmd>",description:"Gerencia o ambiente Node.js.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/pt/next/cli/env",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/pt/next/cli/start"},next:{title:"pnpm publish",permalink:"/pt/next/cli/publish"}},s={},u=[{value:"Comandos",id:"comandos",level:2},{value:"use",id:"use",level:3},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--global, -g",id:"--global--g",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Gerencia o ambiente Node.js."),(0,l.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/84-MzN_0Cng",title:"A demonstra\xe7\xe3o do comando de patch do pnpm",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,l.kt)("h2",{id:"comandos"},"Comandos"),(0,l.kt)("h3",{id:"use"},"use"),(0,l.kt)("p",null,"Instala uma vers\xe3o espec\xedfica do Node.js"),(0,l.kt)("p",null,"Instala a vers\xe3o LTS do Node.js:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,l.kt)("p",null,"Instala o Node.js v16:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,l.kt)("p",null,"Instala as vers\xf5es betas do Node.js:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,l.kt)("p",null,"Instala a \xfaltima vers\xe3o do Node.js:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,l.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"As mudan\xe7as s\xe3o aplicadas globalmente."))}m.isMDXComponent=!0}}]);