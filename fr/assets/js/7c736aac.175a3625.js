"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6912],{9613:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(9496);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),s=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(o.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||p;return n?t.createElement(f,i(i({ref:r},u),{},{components:n})):t.createElement(f,i({ref:r},u))}));function d(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var p=n.length,i=new Array(p);i[0]=c;var a={};for(var o in r)hasOwnProperty.call(r,o)&&(a[o]=r[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var s=2;s<p;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2482:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var t=n(2081),l=n(4604),p=(n(9496),n(9613)),i=["components"],a={id:"uninstall",title:"D\xe9sinstaller pnpm"},o=void 0,s={unversionedId:"uninstall",id:"version-6.x/uninstall",title:"D\xe9sinstaller pnpm",description:"Supprimer globalement les paquets install\xe9s",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/fr/6.x/uninstall",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"uninstall",title:"D\xe9sinstaller pnpm"},sidebar:"version-6.x/docs",previous:{title:"How peers are resolved",permalink:"/fr/6.x/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/fr/6.x/pnpm-vs-npm"}},u={},m=[{value:"Supprimer globalement les paquets install\xe9s",id:"supprimer-globalement-les-paquets-install\xe9s",level:2},{value:"Supprimer l&#39;interface de commande de pnpm",id:"supprimer-linterface-de-commande-de-pnpm",level:2},{value:"Supprimer la m\xe9moire d&#39;adressage globale",id:"supprimer-la-m\xe9moire-dadressage-globale",level:2},{value:"Supprimer le fichier d&#39;\xe9tat",id:"supprimer-le-fichier-d\xe9tat",level:2}],c={toc:m};function d(e){var r=e.components,n=(0,l.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"supprimer-globalement-les-paquets-install\xe9s"},"Supprimer globalement les paquets install\xe9s"),(0,p.kt)("p",null,"Before removing the pnpm CLI, it might make sense to remove all global packages that were installed by pnpm."),(0,p.kt)("p",null,"Pour r\xe9pertorier tous les packages globaux, ex\xe9cutez ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Il existe deux mani\xe8res de supprimer les packages globaux\xa0:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," avec chaque package global r\xe9pertori\xe9."),(0,p.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," pour trouver l'emplacement du r\xe9pertoire global et supprimez-le manuellement.")),(0,p.kt)("h2",{id:"supprimer-linterface-de-commande-de-pnpm"},"Supprimer l'interface de commande de pnpm"),(0,p.kt)("p",null,"Si vous avez utilis\xe9 le script autonome pour installer pnpm (ou npx), vous devriez pouvoir d\xe9sinstaller la CLI pnpm en utilisant\xa0:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm rm -g pnpm\n")),(0,p.kt)("p",null,"You might also want to clean the ",(0,p.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," env variable in your shell configuration file (",(0,p.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")."),(0,p.kt)("p",null,"Si vous avez utilis\xe9 npm pour installer pnpm, vous devez utiliser npm pour d\xe9sinstaller pnpm\xa0:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,p.kt)("h2",{id:"supprimer-la-m\xe9moire-dadressage-globale"},"Supprimer la m\xe9moire d'adressage globale"),(0,p.kt)("p",null,"Si vous avez utilis\xe9 pnpm uniquement sur le disque principal, vous disposerez d'un magasin global dans le r\xe9pertoire de base. Alors supprimez-le simplement via:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"rm -rf ~/.pnpm-store\n")),(0,p.kt)("p",null,"Si vous avez utilis\xe9 pnpm sur des disques non principaux, le magasin se trouve \xe0 la racine de ce disque. Par exemple, si vous avez utilis\xe9 pnpm sur le disque ",(0,p.kt)("inlineCode",{parentName:"p"},"D:")," sous Windows, supprimez le magasin de ",(0,p.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),(0,p.kt)("h2",{id:"supprimer-le-fichier-d\xe9tat"},"Supprimer le fichier d'\xe9tat"),(0,p.kt)("p",null,"pnpm sauvegarde quelques \xe9tats dans ",(0,p.kt)("inlineCode",{parentName:"p"},"~/.pnpm-state.json"),". Vous devez supprimer ce fichier."))}d.isMDXComponent=!0}}]);