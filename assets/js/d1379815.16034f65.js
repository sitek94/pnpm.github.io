"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8569],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),c=r,k=u["".concat(l,".").concat(c)]||u[c]||m[c]||a;return t?o.createElement(k,i(i({ref:n},p),{},{components:t})):o.createElement(k,i({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var o=t(2081),r=t(4604),a=(t(9496),t(9613)),i=["components"],s={id:"symlinked-node-modules-structure",title:"Symlinked `node_modules` structure"},l=void 0,d={unversionedId:"symlinked-node-modules-structure",id:"version-7.x/symlinked-node-modules-structure",title:"Symlinked `node_modules` structure",description:"This article only describes how pnpm's node_modules are structured when",source:"@site/versioned_docs/version-7.x/symlinked-node-modules-structure.md",sourceDirName:".",slug:"/symlinked-node-modules-structure",permalink:"/symlinked-node-modules-structure",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/symlinked-node-modules-structure.md",tags:[],version:"7.x",frontMatter:{id:"symlinked-node-modules-structure",title:"Symlinked `node_modules` structure"},sidebar:"version-7.x/docs",previous:{title:"Limitations",permalink:"/limitations"},next:{title:"How peers are resolved",permalink:"/how-peers-are-resolved"}},p={},m=[],u={toc:m};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This article only describes how pnpm's ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," are structured when\nthere are no packages with peer dependencies. For the more complex scenario of\ndependencies with peers, see ",(0,a.kt)("a",{parentName:"p",href:"/how-peers-are-resolved"},"how peers are resolved"),".")),(0,a.kt)("p",null,"pnpm's ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," layout uses symbolic links to create a nested structure of\ndependencies."),(0,a.kt)("p",null,"Every file of every package inside ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," is a hard link to the\ncontent-addressable store. Let's say you install ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," that depends on\n",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),". pnpm will hard link both packages to ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2502           \u251c\u2500\u2500 index.js\n    \u2502           \u2514\u2500\u2500 package.json\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u2514\u2500\u2500 foo -> <store>/foo\n                \u251c\u2500\u2500 index.js\n                \u2514\u2500\u2500 package.json\n")),(0,a.kt)("p",null,'These are the only "real" files in ',(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),". Once all the packages are\nhard linked to ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),", symbolic links are created to build the nested\ndependency graph structure."),(0,a.kt)("p",null,"As you might have noticed, both packages are hard linked into a subfolder inside\na ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder (",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/foo"),"). This is needed to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"allow packages to import themselves.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"foo")," should be able to\n",(0,a.kt)("inlineCode",{parentName:"li"},"require('foo/package.json')")," or ",(0,a.kt)("inlineCode",{parentName:"li"},'import * as package from "foo/package.json"'),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"avoid circular symlinks.")," Dependencies of packages are placed in the same\nfolder in which the dependent packages are. For Node.js it doesn't make a\ndifference whether dependencies are inside the package's ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," or in\nany other ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," in the parent directories.")),(0,a.kt)("p",null,"The next stage of installation is symlinking dependencies. ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," is going to be\nsymlinked to the ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u251c\u2500\u2500 foo -> <store>/foo\n            \u2514\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n")),(0,a.kt)("p",null,"Next, direct dependencies are handled. ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," is going to be symlinked into the\nroot ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder because ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," is a dependency of the project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u251c\u2500\u2500 foo -> ./.pnpm/foo@1.0.0/node_modules/foo\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u251c\u2500\u2500 foo -> <store>/foo\n            \u2514\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n")),(0,a.kt)("p",null,"This is a very simple example. However, the layout will maintain this structure\nregardless of the number of dependencies and the depth of the dependency graph."),(0,a.kt)("p",null,"Let's add ",(0,a.kt)("inlineCode",{parentName:"p"},"qar@2.0.0")," as a dependency of ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),". This is how the new\nstructure will look:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u251c\u2500\u2500 foo -> ./.pnpm/foo@1.0.0/node_modules/foo\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 bar -> <store>/bar\n    \u2502       \u2514\u2500\u2500 qar -> ../../qar@2.0.0/node_modules/qar\n    \u251c\u2500\u2500 foo@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo -> <store>/foo\n    \u2502       \u251c\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u2514\u2500\u2500 qar -> ../../qar@2.0.0/node_modules/qar\n    \u2514\u2500\u2500 qar@2.0.0\n        \u2514\u2500\u2500 node_modules\n            \u2514\u2500\u2500 qar -> <store>/qar\n")),(0,a.kt)("p",null,"As you may see, even though the graph is deeper now (",(0,a.kt)("inlineCode",{parentName:"p"},"foo > bar > qar"),"), the\ndirectory depth in the file system is still the same."),(0,a.kt)("p",null,"This layout might look weird at first glance, but it is completely compatible\nwith Node's module resolution algorithm! When resolving modules, Node ignores\nsymlinks, so when ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," is required from ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/foo/index.js"),",\nNode does not use ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," at ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/bar"),", but instead, ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," is\nresolved to its real location (",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0/node_modules/bar"),"). As a consequence,\n",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," can also resolve its dependencies which are in ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0/node_modules"),"."),(0,a.kt)("p",null,"A great bonus of this layout is that only packages that are really in the\ndependencies are accessible. With a flattened ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),' structure, all\nhoisted packages are accessible. To read more about why this is an advantage,\nsee "',(0,a.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"pnpm's strictness helps to avoid silly bugs"),'"'))}c.isMDXComponent=!0}}]);