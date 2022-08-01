"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9200],{9613:(e,n,o)=>{o.d(n,{Zo:()=>l,kt:()=>u});var a=o(9496);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function t(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function p(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,a,r=function(e,n){if(null==e)return{};var o,a,r={},t=Object.keys(e);for(a=0;a<t.length;a++)o=t[a],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)o=t[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=a.createContext({}),i=function(e){var n=a.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):p(p({},n),e)),o},l=function(e){var n=i(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var o=e.components,r=e.mdxType,t=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=i(o),u=r,f=c["".concat(d,".").concat(u)]||c[u]||m[u]||t;return o?a.createElement(f,p(p({ref:n},l),{},{components:o})):a.createElement(f,p({ref:n},l))}));function u(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=o.length,p=new Array(t);p[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var i=2;i<t;i++)p[i]=o[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},6628:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=o(2081),r=o(4604),t=(o(9496),o(9613)),p=["components"],s={id:"how-peers-are-resolved",title:"Como os pares s\xe3o resolvidos"},d=void 0,i={unversionedId:"how-peers-are-resolved",id:"version-6.x/how-peers-are-resolved",title:"Como os pares s\xe3o resolvidos",description:"Um dos melhores recursos do pnpm \xe9 que em um projeto, uma vers\xe3o espec\xedfica de um pacote sempre ter\xe1 um conjunto de depend\xeancias. H\xe1 uma exce\xe7\xe3o de a esta regra, por\xe9m - pacotes com depend\xeancias de pares.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/how-peers-are-resolved.md",sourceDirName:".",slug:"/how-peers-are-resolved",permalink:"/pt/6.x/how-peers-are-resolved",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"how-peers-are-resolved",title:"Como os pares s\xe3o resolvidos"},sidebar:"version-6.x/docs",previous:{title:"Symlinked `node_modules` structure",permalink:"/pt/6.x/symlinked-node-modules-structure"},next:{title:"Desinstalando o pnpm",permalink:"/pt/6.x/uninstall"}},l={},m=[],c={toc:m};function u(e){var n=e.components,o=(0,r.Z)(e,p);return(0,t.kt)("wrapper",(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Um dos melhores recursos do pnpm \xe9 que em um projeto, uma vers\xe3o espec\xedfica de um pacote sempre ter\xe1 um conjunto de depend\xeancias. H\xe1 uma exce\xe7\xe3o de a esta regra, por\xe9m - pacotes com ",(0,t.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#peerdependencies"},"depend\xeancias de pares"),"."),(0,t.kt)("p",null,"As depend\xeancias de peer s\xe3o resolvidas a partir de depend\xeancias instaladas mais acima no gr\xe1fico de depend\xeancia, pois compartilham a mesma vers\xe3o que seu pai. Isso significa que, se ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," tiver dois pares (",(0,t.kt)("inlineCode",{parentName:"p"},"bar@^1")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"baz@^1"),"), ele poder\xe1 ter v\xe1rios conjuntos diferentes de depend\xeancias no mesmo projeto."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"- foo-parent-1\n  - bar@1.0.0\n  - baz@1.0.0\n  - foo@1.0.0\n- foo-parent-2\n  - bar@1.0.0\n  - baz@1.1.0\n  - foo@1.0.0\n")),(0,t.kt)("p",null,"No exemplo acima, ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," est\xe1 instalado para ",(0,t.kt)("inlineCode",{parentName:"p"},"foo-parent-1")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"foo-parent-2"),". Ambos os pacotes t\xeam ",(0,t.kt)("inlineCode",{parentName:"p"},"bar")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"baz"),"tamb\xe9m, mas dependem de vers\xf5es diferentes de ",(0,t.kt)("inlineCode",{parentName:"p"},"baz"),". Como resultado, ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," tem dois conjuntos diferentes de depend\xeancias: um com ",(0,t.kt)("inlineCode",{parentName:"p"},"baz@1.0.0")," e outro com ",(0,t.kt)("inlineCode",{parentName:"p"},"baz@1.1.0"),". Para dar suporte a esses casos de uso, o pnpm precisa vincular ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," tantas vezes quanto existem diferentes conjuntos de depend\xeancias."),(0,t.kt)("p",null,"Normalmente, se um pacote n\xe3o possui depend\xeancias de pares, ele \xe9 vinculado a uma pasta ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," pr\xf3xima aos links simb\xf3licos de suas depend\xeancias, assim:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),(0,t.kt)("p",null,"No entanto, se ",(0,t.kt)("inlineCode",{parentName:"p"},"foo")," tiver depend\xeancias de pares, pode haver v\xe1rios conjuntos de depend\xeancias para ele, ent\xe3o criamos conjuntos diferentes para diferentes resolu\xe7\xf5es de depend\xeancia de pares:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.0.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.1.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 bar@1.0.0\n    \u251c\u2500\u2500 baz@1.0.0\n    \u251c\u2500\u2500 baz@1.1.0\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),(0,t.kt)("p",null,"Criamos links simb\xf3licos para o ",(0,t.kt)("inlineCode",{parentName:"p"},"foo")," que est\xe1 dentro ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0_bar@1.0.0+baz@1.0.0")," ou para aquele em ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0_bar@1.0.0+baz@1.1.0"),". Como consequ\xeancia, o resolvedor do m\xf3dulo Node.js encontrar\xe1 os pares corretos."),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"Se um pacote n\xe3o tem depend\xeancias de pares, mas tem depend\xeancias com pares que s\xe3o resolvidos mais acima no gr\xe1fico"),", ent\xe3o esse pacote transitivo pode aparecer no projeto com diferentes conjuntos de depend\xeancias. Por exemplo, h\xe1 o pacote ",(0,t.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," com uma \xfanica depend\xeancia ",(0,t.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),". ",(0,t.kt)("inlineCode",{parentName:"p"},"b@1.0.0")," tem uma depend\xeancia de pares ",(0,t.kt)("inlineCode",{parentName:"p"},"c@^1"),". ",(0,t.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," nunca resolver\xe1 os peers de ",(0,t.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),", ent\xe3o torna-se dependente dos peers de ",(0,t.kt)("inlineCode",{parentName:"p"},"b@1.0.0")," tamb\xe9m."),(0,t.kt)("p",null,"Veja como essa estrutura ficar\xe1 em ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules"),". Neste exemplo, ",(0,t.kt)("inlineCode",{parentName:"p"},"a@1.0.0")," precisar\xe3o aparecer duas vezes nos ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," do projeto uma vez com ",(0,t.kt)("inlineCode",{parentName:"p"},"c@1.0.0")," e novamente com ",(0,t.kt)("inlineCode",{parentName:"p"},"c@1.1.0"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 a@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.0.0/node_modules/b\n    \u251c\u2500\u2500 a@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.1.0/node_modules/b\n    \u251c\u2500\u2500 b@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../c@1.0.0/node_modules/c\n    \u251c\u2500\u2500 b@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../c@1.1.0/node_modules/c\n    \u251c\u2500\u2500 c@1.0.0\n    \u251c\u2500\u2500 c@1.1.0\n")))}u.isMDXComponent=!0}}]);