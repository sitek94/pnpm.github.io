"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5163],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,v=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?o.createElement(v,r(r({ref:t},d),{},{components:n})):o.createElement(v,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var c=2;c<l;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(2081),i=n(4604),l=(n(9496),n(9613)),r=["components"],a={id:"outdated",title:"pnpm outdated"},p=void 0,c={unversionedId:"cli/outdated",id:"version-7.x/cli/outdated",title:"pnpm outdated",description:"Verifica la presenza di pacchetti obsoleti. Il controllo pu\xf2 essere limitato a un sottoinsieme dei pacchetti installati fornendo argomenti (i modelli sono supportati).",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/outdated.md",sourceDirName:"cli",slug:"/cli/outdated",permalink:"/it/cli/outdated",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"outdated",title:"pnpm outdated"},sidebar:"version-7.x/docs",previous:{title:"pnpm list",permalink:"/it/cli/list"},next:{title:"pnpm why",permalink:"/it/cli/why"}},d={},s=[{value:"Opzioni",id:"opzioni",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3},{value:"--global",id:"--global",level:3},{value:"--long",id:"--long",level:3},{value:"--no-table",id:"--no-table",level:3},{value:"--compatible",id:"--compatible",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3}],u={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Verifica la presenza di pacchetti obsoleti. Il controllo pu\xf2 essere limitato a un sottoinsieme dei pacchetti installati fornendo argomenti (i modelli sono supportati)."),(0,l.kt)("p",null,"Esempi:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm outdated\npnpm outdated "*gulp-*" @babel/core\n')),(0,l.kt)("h2",{id:"opzioni"},"Opzioni"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Controlla le dipendenze obsolete in ogni pacchetto trovato nelle sottocartelle o in ogni pacchetto all'interno dello spazio di lavoro, se eseguito in uno spazio di lavoro."),(0,l.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/it/filtering"},"Ulteriori informazioni sui filtri.")),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Elenca i pacchetti globali obsoleti."),(0,l.kt)("h3",{id:"--long"},"--long"),(0,l.kt)("p",null,"Stampa i dettagli."),(0,l.kt)("h3",{id:"--no-table"},"--no-table"),(0,l.kt)("p",null,"Stampa le dipendenze obsolete in un formato elenco anzich\xe9 nella tabella predefinita. Ottimo per console piccole."),(0,l.kt)("h3",{id:"--compatible"},"--compatible"),(0,l.kt)("p",null,"Stampa solo le versioni che soddisfano le specifiche in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Controlla solo le dipendenze di sviluppo (",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),")."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Controlla solo le dipendenze (",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),") e le dipendenze opzionali (",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Non controlla le dipendenze opzionali (",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."))}m.isMDXComponent=!0}}]);