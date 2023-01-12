"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2568],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(9496);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=p,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function m(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8300:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=a(2962),p=a(2742),r=(a(9496),a(9613)),l=["components"],i={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"cli/update",title:"pnpm update",description:"Aliases: up, upgrade",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/pt/next/cli/update",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"update",title:"pnpm update"},sidebar:"docs",previous:{title:"pnpm install",permalink:"/pt/next/cli/install"},next:{title:"pnpm remove",permalink:"/pt/next/cli/remove"}},s={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Selecting dependencies with patterns",id:"selecting-dependencies-with-patterns",level:2},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:c};function m(e){var t=e.components,a=(0,p.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aliases: ",(0,r.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm update")," atualiza os pacotes para suas \xfaltimas vers\xf5es baseando-se no intervalo do vers\xf5es especificado."),(0,r.kt)("p",null,"Quando utilizado sem argumentos, atualiza todas as depend\xeancias."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,r.kt)("td",{parentName:"tr",align:null},"Atualiza todas as depend\xeancias, conforme o intervalo especificado no ",(0,r.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,r.kt)("td",{parentName:"tr",align:null},"Atualiza todas as depend\xeancias, ignorando o intervalo especificado no ",(0,r.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,r.kt)("td",{parentName:"tr",align:null},"Atualiza ",(0,r.kt)("inlineCode",{parentName:"td"},"foo")," para a \xfaltima vers\xe3o em v2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,r.kt)("td",{parentName:"tr",align:null},"Atualiza todas as depend\xeancias do scope ",(0,r.kt)("inlineCode",{parentName:"td"},"@babel"))))),(0,r.kt)("h2",{id:"selecting-dependencies-with-patterns"},"Selecting dependencies with patterns"),(0,r.kt)("p",null,"You can use patterns to update specific dependencies."),(0,r.kt)("p",null,"Update all ",(0,r.kt)("inlineCode",{parentName:"p"},"babel")," packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update @babel/*\n")),(0,r.kt)("p",null,"Update all dependencies, except ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update !webpack\n")),(0,r.kt)("p",null,"Patterns may also be combined, so the next command will update all ",(0,r.kt)("inlineCode",{parentName:"p"},"babel")," packages, except ",(0,r.kt)("inlineCode",{parentName:"p"},"core"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update @babel/* !@babel/core\n")),(0,r.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,r.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,r.kt)("p",null,"Executa simultaneamente a atualiza\xe7\xe3o em todos os subdiret\xf3rios com ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," (excluindo node_modules)."),(0,r.kt)("p",null,"Exemplos de uso:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# updates all packages up to 100 subdirectories in depth\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),(0,r.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,r.kt)("p",null,"Ignores the version range specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". Instead, the version specified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," tag will be used (potentially upgrading the packages across major versions)."),(0,r.kt)("h3",{id:"--global--g"},"--global, -g"),(0,r.kt)("p",null,"Update global packages."),(0,r.kt)("h3",{id:"--workspace"},"--workspace"),(0,r.kt)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace."),(0,r.kt)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies are not found inside the workspace. For instance, the following command fails if ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm up -r --workspace express\n")),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"Atualiza apenas pacotes em ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,"Atualize apenas pacotes em ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,"N\xe3o atualiza pacotes em ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,r.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,r.kt)("p",null,"Exibe depend\xeancias desatualizadas e seleciona quais atualizar."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pt/next/filtering"},"Leia mais sobre filtragem.")))}m.isMDXComponent=!0}}]);