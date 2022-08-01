"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4942],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,s=d["".concat(o,".").concat(c)]||d[c]||k[c]||l;return n?a.createElement(s,i(i({ref:t},u),{},{components:n})):a.createElement(s,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var a=n(2081),r=n(4604),l=(n(9496),n(9613)),i=["components"],p={id:"pnpm-cli",title:"pnpm CLI"},o=void 0,m={unversionedId:"pnpm-cli",id:"pnpm-cli",title:"pnpm CLI",description:"npm ve aradaki farklar",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/tr/next/pnpm-cli",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"current",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"docs",previous:{title:"Kurulum",permalink:"/tr/next/installation"},next:{title:"Yap\u0131land\u0131rma",permalink:"/tr/next/configuring"}},u={},k=[{value:"npm ve aradaki farklar",id:"npm-ve-aradaki-farklar",level:2},{value:"Parametreler",id:"parametreler",level:2},{value:"-C &lt;yol&gt;, --dir &lt;yol&gt;",id:"-c-yol---dir-yol",level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",level:3},{value:"Komutlar",id:"komutlar",level:2}],d={toc:k};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"npm-ve-aradaki-farklar"},"npm ve aradaki farklar"),(0,l.kt)("p",null,"npm'e k\u0131yasen pnpm, t\xfcm parametreleri g\xf6zden ge\xe7irir, do\u011frular. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install --target_arch x64")," will fail as ",(0,l.kt)("inlineCode",{parentName:"p"},"--target_arch")," is not a valid option for ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,l.kt)("p",null,"Ancak, baz\u0131 k\xfct\xfcphaneler ",(0,l.kt)("inlineCode",{parentName:"p"},"npm_config_")," ile ba\u015flayan ortam de\u011fi\u015fkeninin belirtilmesine ihtiya\xe7 duyabilir. Bu durumda \u015fu \u015fekilde \xe7\xf6z\xfcmler kullanabilirsin:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"explicitly set the env variable: ",(0,l.kt)("inlineCode",{parentName:"li"},"npm_config_target_arch=x64 pnpm install")),(0,l.kt)("li",{parentName:"ol"},"force the unknown option with ",(0,l.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm install --config.target_arch=x64"))),(0,l.kt)("h2",{id:"parametreler"},"Parametreler"),(0,l.kt)("h3",{id:"-c-yol---dir-yol"},"-C ","<","yol",">",", --dir ","<","yol",">"),(0,l.kt)("p",null,"pnpm'i, belirtilen ",(0,l.kt)("inlineCode",{parentName:"p"},"<yol>")," konumunu taban olarak ele al\u0131p, komut sat\u0131r\u0131n\u0131n taban konumunu de\u011fi\u015ftirmeden o konum i\xe7erisindeymi\u015f gibi \xe7al\u0131\u015ft\u0131rma. Bir nevi ",(0,l.kt)("inlineCode",{parentName:"p"},"cd ./yol")," komutuna bir alternatifmi\u015f gibi bak\u0131labilir."),(0,l.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,l.kt)("p",null,"Run as if pnpm was started in the root of the ",(0,l.kt)("a",{parentName:"p",href:"https://pnpm.io/workspaces"},"workspace")," instead of the current working directory."),(0,l.kt)("h2",{id:"komutlar"},"Komutlar"),(0,l.kt)("p",null,"Daha fazla bilgi almak i\xe7in, ili\u015fkili komutun d\xf6k\xfcman\u0131n\u0131 inceleyebilirsin. \u0130\u015fine yarayacak ve en yayg\u0131n kullan\u0131lan komutlar ise:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"npm komutu"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm kar\u015f\u0131l\u0131\u011f\u0131"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm install")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/tr/next/cli/install"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm i <k\xfct\xfcphane>")),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add <k\xfct\xfcphane>"),"]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"npm run <komut>")),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("inlineCode",{parentName:"td"},"pnpm <komut>"),"]")))),(0,l.kt)("p",null,"pnpm, bilinmeyen bir parametre ile \xe7al\u0131\u015ft\u0131r\u0131ld\u0131\u011f\u0131nda, ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," i\xe7erisindeki komutlar (scripts) aras\u0131nda o komutu bulup, \xe7al\u0131\u015ft\u0131r\u0131r. Yani ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm lint")," komutunu \xe7al\u0131\u015ft\u0131rmak, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," komutunu \xe7al\u0131\u015ft\u0131rmak ile ayn\u0131 anlama gelir. L\xe2kin komutlar aras\u0131nda belirtilen komut bulunmazsa e\u011fer, pnpm bu sefer o komutu, uygulama veya komut sat\u0131r\u0131 dosyas\u0131ym\u0131\u015f gibi \xe7al\u0131\u015ft\u0131rmaya \xe7al\u0131\u015f\u0131r ve bu da ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," gibi komutlar\u0131 kullanmaya imkan sa\u011flar. (bkz. ",(0,l.kt)("a",{parentName:"p",href:"/tr/next/cli/exec"},"pnpm exec"),")"))}c.isMDXComponent=!0}}]);