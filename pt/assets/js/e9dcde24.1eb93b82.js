"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[400],{9613:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>u});var t=r(9496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return r?t.createElement(f,p(p({ref:n},c),{},{components:r})):t.createElement(f,p({ref:n},c))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2306:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(2081),o=r(4604),a=(r(9496),r(9613)),p=["components"],i={id:"errors",title:"C\xf3digos de Erro"},s=void 0,l={unversionedId:"errors",id:"errors",title:"C\xf3digos de Erro",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/errors.md",sourceDirName:".",slug:"/errors",permalink:"/pt/next/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"errors",title:"C\xf3digos de Erro"},sidebar:"docs",previous:{title:"Compara\xe7\xe3o de Recursos",permalink:"/pt/next/feature-comparison"},next:{title:"Logos",permalink:"/pt/next/logos"}},c={},d=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2},{value:"ERR_PNPM_OUTDATED_LOCKFILE",id:"err_pnpm_outdated_lockfile",level:2}],m={toc:d};function u(e){var n=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,a.kt)("p",null,"Um diret\xf3rio de m\xf3dulos est\xe1 presente e est\xe1 vinculado a um diret\xf3rio de armazenamento diferente."),(0,a.kt)("p",null,"Se voc\xea alterou o diret\xf3rio de armazenamento intencionalmente, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," e o pnpm reinstalar\xe1 as depend\xeancias usando o novo armazenamento."),(0,a.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,a.kt)("p",null,"Um projeto tem uma depend\xeancia de \xe1rea de trabalho que n\xe3o existe na \xe1rea de trabalho principal."),(0,a.kt)("p",null,"Por exemplo, o pacote ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," tem ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," em ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,a.kt)("p",null,"No entanto, h\xe1 apenas ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," na \xe1rea de trabalho, portanto, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," falhar\xe1."),(0,a.kt)("p",null,"Para corrigir esse erro, todas as depend\xeancias que usam o protocolo ",(0,a.kt)("a",{parentName:"p",href:"/pt/next/workspaces#workspace-protocol-workspace"},"de \xe1rea de trabalho")," devem ser atualizadas para usar as vers\xf5es dos pacotes presentes na \xe1rea de trabalho. Isso pode ser feito manualmente ou usando o comando ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"."),(0,a.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," falhar\xe1 se o projeto tiver depend\xeancias de pares n\xe3o resolvidas ou se as depend\xeancias de pares n\xe3o corresponderem aos intervalos desejados. Para corrigir isso, instale as depend\xeancias de pares ausentes."),(0,a.kt)("p",null,"Voc\xea tamb\xe9m pode ignorar seletivamente esses erros usando os campos ",(0,a.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," e ",(0,a.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," em ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("h2",{id:"err_pnpm_outdated_lockfile"},"ERR_PNPM_OUTDATED_LOCKFILE"),(0,a.kt)("p",null,"This error happens when installation cannot be performed without changes to the lockfile. This might happen in a CI environment if someone has changed a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file in the repository without running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," afterwards. Or someone forgot to commit the changes to the lockfile."),(0,a.kt)("p",null,"To fix this error, just run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," and commit the changes to the lockfile."))}u.isMDXComponent=!0}}]);