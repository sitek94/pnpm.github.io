"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5300],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,v=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(2081),a=n(4604),l=(n(9496),n(9613)),o=["components"],i={id:"outdated",title:"pnpm outdated"},p=void 0,d={unversionedId:"cli/outdated",id:"version-6.x/cli/outdated",title:"pnpm outdated",description:"Checks for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported).",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/outdated.md",sourceDirName:"cli",slug:"/cli/outdated",permalink:"/tr/6.x/cli/outdated",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"outdated",title:"pnpm outdated"},sidebar:"version-6.x/docs",previous:{title:"pnpm list",permalink:"/tr/6.x/cli/list"},next:{title:"pnpm why",permalink:"/tr/6.x/cli/why"}},c={},s=[{value:"Parametreler",id:"parametreler",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",level:3},{value:"--global",id:"--global",level:3},{value:"--long",id:"--long",level:3},{value:"--no-table",id:"--no-table",level:3},{value:"--compatible",id:"--compatible",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Checks for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported)."),(0,l.kt)("p",null,"\u015eu \u015fekilde:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm outdated\npnpm outdated "*gulp-*" @babel/core\n')),(0,l.kt)("h2",{id:"parametreler"},"Parametreler"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Check for outdated dependencies in every package found in subdirectories, or in every workspace package when executed inside a workspace."),(0,l.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/tr/6.x/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"List outdated global packages."),(0,l.kt)("h3",{id:"--long"},"--long"),(0,l.kt)("p",null,"S\xfcr\xfcm 4.0.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,"Print details."),(0,l.kt)("h3",{id:"--no-table"},"--no-table"),(0,l.kt)("p",null,"S\xfcr\xfcm 4.0.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,"Prints the outdated dependencies in a list format instead of the default table. Good for small consoles."),(0,l.kt)("h3",{id:"--compatible"},"--compatible"),(0,l.kt)("p",null,"S\xfcr\xfcm 4.7.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,"Prints only versions that satisfy specifications in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"S\xfcr\xfcm 4.7.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,"Checks only ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"S\xfcr\xfcm 4.7.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,"Checks only ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"S\xfcr\xfcm 4.7.0 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,"Doesn't check ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}m.isMDXComponent=!0}}]);