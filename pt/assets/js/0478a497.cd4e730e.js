"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[943],{9613:(e,o,r)=>{r.d(o,{Zo:()=>u,kt:()=>l});var n=r(9496);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,n,t=function(e,o){if(null==e)return{};var r,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=n.createContext({}),p=function(e){var o=n.useContext(c),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},u=function(e){var o=p(e.components);return n.createElement(c.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),l=t,f=m["".concat(c,".").concat(l)]||m[l]||d[l]||a;return r?n.createElement(f,i(i({ref:o},u),{},{components:r})):n.createElement(f,i({ref:o},u))}));function l(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8645:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(2081),t=r(4604),a=(r(9496),r(9613)),i=["components"],s={id:"production",title:"Produ\xe7\xe3o"},c=void 0,p={unversionedId:"production",id:"version-6.x/production",title:"Produ\xe7\xe3o",description:"Existem duas maneiras de inicializar seu projeto num ambiente de produ\xe7\xe3o com pnpm. Uma delas \xe9 fazer o commit do lockfile. Em seguida, em seu ambiente de produ\xe7\xe3o, execute pnpm install - Isso ir\xe1 construir a \xe1rvore de depend\xeancias usando o lockfile, o que significa que as vers\xf5es de depend\xeancias ser\xe3o consistentes com como elas eram quando o lockfile foi commitado. Essa \xe9 a maneira mais eficaz (e a que recomendamos) de garantir que sua \xe1rvore de depend\xeancias persista nos ambientes.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/production.md",sourceDirName:".",slug:"/production",permalink:"/pt/6.x/production",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"production",title:"Produ\xe7\xe3o"}},u={},d=[],m={toc:d};function l(e){var o=e.components,r=(0,t.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Existem duas maneiras de inicializar seu projeto num ambiente de produ\xe7\xe3o com pnpm. Uma delas \xe9 fazer o commit do lockfile. Em seguida, em seu ambiente de produ\xe7\xe3o, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," - Isso ir\xe1 construir a \xe1rvore de depend\xeancias usando o lockfile, o que significa que as vers\xf5es de depend\xeancias ser\xe3o consistentes com como elas eram quando o lockfile foi commitado. Essa \xe9 a maneira mais eficaz (e a que recomendamos) de garantir que sua \xe1rvore de depend\xeancias persista nos ambientes."),(0,a.kt)("p",null,"Outro m\xe9todo \xe9 fazer o commit do Lockfile e copiar o reposit\xf3rio de pacotes para o seu ambiente de produ\xe7\xe3o (voc\xea pode alterar onde com a op\xe7\xe3o ",(0,a.kt)("a",{parentName:"p",href:"npmrc#store-dir"},"local de armazenamento"),"). Em seguida, voc\xea pode executar ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install --offline")," e o pnpm usar\xe1 os pacotes do armazenamento global, portanto, n\xe3o far\xe1 nenhuma requisi\xe7\xe3o ao registro. Isso \xe9 recomendado ",(0,a.kt)("strong",{parentName:"p"},"SOMENTE")," para ambientes onde o acesso externo ao registro est\xe1 indispon\xedvel por qualquer motivo."))}l.isMDXComponent=!0}}]);