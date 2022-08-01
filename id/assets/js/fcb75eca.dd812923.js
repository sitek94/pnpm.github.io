"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[674],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(2081),r=n(4604),i=(n(9496),n(9613)),o=["components"],l={id:"git",title:"Bekerja dengan Git"},c=void 0,s={unversionedId:"git",id:"git",title:"Bekerja dengan Git",description:"Lockfiles",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/git.md",sourceDirName:".",slug:"/git",permalink:"/id/next/git",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"git",title:"Bekerja dengan Git"},sidebar:"docs",previous:{title:"Integrasi Berkelanjutan (CI)",permalink:"/id/next/continuous-integration"},next:{title:"Feature Comparison",permalink:"/id/next/feature-comparison"}},p={},u=[{value:"Lockfiles",id:"lockfiles",level:2},{value:"Merge conflicts",id:"merge-conflicts",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lockfiles"},"Lockfiles"),(0,i.kt)("p",null,"Anda harus selalu mengikutsertakan lockfile (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),") kedalam git. sebagian besar kasus penggunaan lockfile, terutama :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"memungkinkan instalasi lebih cepat untuk CI dan lingkungan produksi, karena mampu melewati resolusi paket"),(0,i.kt)("li",{parentName:"ul"},"membuat instalasi dan resolusi yang konsisten antara lingkungan pengembangan, pengujian , dan produksi, yang berarti paket yang digunakan dalam pengujian dan produksi akan sama persis seperti ketika Anda mengembangkan proyek Anda")),(0,i.kt)("h3",{id:"merge-conflicts"},"Merge conflicts"),(0,i.kt)("p",null,"pnpm dapat secara otomatis menyelesaikan merge conflict di ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". Jika Anda menemui konflik dalam git, jalankan saja ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," lalu komit perubahan tersebut."),(0,i.kt)("p",null,"Namun, berhati-hatilah. It is advised that you review the changes prior to staging a commit, because we cannot guarantee that pnpm will choose the correct head - it instead builds with the most updated of lockfiles, which is ideal in most cases."))}d.isMDXComponent=!0}}]);