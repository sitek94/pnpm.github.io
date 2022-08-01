"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8985],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,v=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(v,l(l({ref:t},u),{},{components:r})):n.createElement(v,l({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(2081),i=r(4604),o=(r(9496),r(9613)),l=["components"],a={id:"server",title:"pnpm server"},p=void 0,s={unversionedId:"cli/server",id:"version-7.x/cli/server",title:"pnpm server",description:"Gestisce un server store.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/server.md",sourceDirName:"cli",slug:"/cli/server",permalink:"/it/cli/server",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"server",title:"pnpm server"},sidebar:"version-7.x/docs",previous:{title:"pnpm -r, --recursive",permalink:"/it/cli/recursive"},next:{title:"pnpm store",permalink:"/it/cli/store"}},u={},c=[{value:"Comandi",id:"comandi",level:2},{value:"pnpm server start",id:"pnpm-server-start",level:3},{value:"pnpm server stop",id:"pnpm-server-stop",level:3},{value:"pnpm server status",id:"pnpm-server-status",level:3},{value:"Opzioni",id:"opzioni",level:2},{value:"--background",id:"--background",level:3},{value:"--network-concurrency",id:"--network-concurrency",level:3},{value:"--protocol",id:"--protocol",level:3},{value:"--port",id:"--port",level:3},{value:"--store-dir",id:"--store-dir",level:3},{value:"--no-lock",id:"--no-lock",level:3},{value:"--ignore-stop-requests",id:"--ignore-stop-requests",level:3},{value:"--ignore-upload-requests",id:"--ignore-upload-requests",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gestisce un server store."),(0,o.kt)("h2",{id:"comandi"},"Comandi"),(0,o.kt)("h3",{id:"pnpm-server-start"},"pnpm server start"),(0,o.kt)("p",null,"Avvia un server che esegue interazioni con lo store. Altri comandi invieranno al server qualsiasi attivit\xe0 relativa allo store."),(0,o.kt)("h3",{id:"pnpm-server-stop"},"pnpm server stop"),(0,o.kt)("p",null,"Ferma il server store."),(0,o.kt)("h3",{id:"pnpm-server-status"},"pnpm server status"),(0,o.kt)("p",null,"Mostra informazioni sul server in esecuzione."),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"--background"},"--background"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Booleano"))),(0,o.kt)("p",null,"Esegue il server in background, in modo simile alla demonizzazione sui sistemi UNIX."),(0,o.kt)("h3",{id:"--network-concurrency"},"--network-concurrency"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Numero"))),(0,o.kt)("p",null,"Il numero massimo di richieste di rete da gestire contemporaneamente."),(0,o.kt)("h3",{id:"--protocol"},"--protocol"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"auto"),", ",(0,o.kt)("strong",{parentName:"li"},"tcp"),", ",(0,o.kt)("strong",{parentName:"li"},"pic"))),(0,o.kt)("p",null,"Il protocollo di comunicazione utilizzato dal server. Quando impostato su ",(0,o.kt)("inlineCode",{parentName:"p"},"auto"),", IPC \xe8 usato in tutti i sistemi operativi ad eccezione di Windows, che usa TCP."),(0,o.kt)("h3",{id:"--port"},"--port"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"5813")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"numero porta"))),(0,o.kt)("p",null,"Il numero della porta da utilizzare quando il protocollo TCP \xe8 utilizzato per la comunicazione. Se viene specificata una porta e il protocollo \xe8 impostato su ",(0,o.kt)("inlineCode",{parentName:"p"},"auto"),", indipendentemente dal tipo di sistema operativo, il protocollo \xe8 automaticamente impostato a TCP."),(0,o.kt)("h3",{id:"--store-dir"},"--store-dir"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"<","home",">","/.pnpm-store")),(0,o.kt)("li",{parentName:"ul"},"Tipo:",(0,o.kt)("strong",{parentName:"li"},"Percorso"))),(0,o.kt)("p",null,"La cartella da utilizzare per l'archivio indirizzabile del contenuto."),(0,o.kt)("h3",{id:"--no-lock"},"--","[no-]","lock"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Booleano"))),(0,o.kt)("p",null,"Imposta se rendere l'archivio dei pacchetti immutabile a processi esterni quando il server \xe8 in esecuzione."),(0,o.kt)("h3",{id:"--ignore-stop-requests"},"--ignore-stop-requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Booleano"))),(0,o.kt)("p",null,"Impedisce l'arresto del server con ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm server stop"),"."),(0,o.kt)("h3",{id:"--ignore-upload-requests"},"--ignore-upload-requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Booleano"))),(0,o.kt)("p",null,"Impedisce la creazione di una nuova cache indesiderata durante l'installazione."))}d.isMDXComponent=!0}}]);