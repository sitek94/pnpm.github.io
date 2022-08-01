"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6092],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=l(t),d=i,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return t?r.createElement(f,p(p({ref:n},u),{},{components:t})):r.createElement(f,p({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,p=new Array(a);p[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var l=2;l<a;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=t(2081),i=t(4604),a=(t(9496),t(9613)),p=["components"],o={id:"pnpx-cli",title:"pnpx CLI"},c=void 0,l={unversionedId:"pnpx-cli",id:"version-6.x/pnpx-cli",title:"pnpx CLI",description:"Questo comando \xe8 obsoleto! Utilizza invece pnpm exec e pnpm dlx.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/it/6.x/pnpx-cli",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-6.x/docs",previous:{title:"CLI di pnpm",permalink:"/it/6.x/pnpm-cli"},next:{title:"Configurazione",permalink:"/it/6.x/configuring"}},u={},m=[{value:"Per i nuovi utenti",id:"per-i-nuovi-utenti",level:2},{value:"Per gli utenti npm",id:"per-gli-utenti-npm",level:2}],s={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Questo comando \xe8 obsoleto! Utilizza invece ",(0,a.kt)("a",{parentName:"p",href:"/it/6.x/cli/exec"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm exec"))," e ",(0,a.kt)("a",{parentName:"p",href:"/it/6.x/cli/dlx"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm dlx")),".")),(0,a.kt)("h2",{id:"per-i-nuovi-utenti"},"Per i nuovi utenti"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) \xe8 uno strumento da riga di comando che recupera un pacchetto dal registro senza installarlo come dipendenza, lo carica a caldo ed esegue qualsiasi comando binario predefinito che espone."),(0,a.kt)("p",null,"Ad esempio, per utilizzare ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," ovunque per avviare un'app react senza che debba installarla in un altro progetto, puoi eseguire:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,a.kt)("p",null,"Questo recuperer\xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," dal registro e lo eseguir\xe0 con gli argomenti forniti. Per ulteriori informazioni, potresti voler guardare ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," di npm, in quanto offre la stessa interfaccia, tranne che usa ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," invece di ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," sotto il cofano."),(0,a.kt)("p",null,"Se vuoi solo eseguire un binario della dipendenza di un progetto, vedi ",(0,a.kt)("a",{parentName:"p",href:"/it/6.x/cli/exec"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm exec")),"."),(0,a.kt)("h2",{id:"per-gli-utenti-npm"},"Per gli utenti npm"),(0,a.kt)("p",null,"npm ha un ottimo programma di esecuzione dei pacchetti chiamato ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offre lo stesso strumento tramite il comando ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx"),". L'unica differenza \xe8 che ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," usa ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," per installare i pacchetti."))}d.isMDXComponent=!0}}]);