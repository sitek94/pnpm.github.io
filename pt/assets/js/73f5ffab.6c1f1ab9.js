"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2742],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=o,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(k,p(p({ref:t},c),{},{components:a})):n.createElement(k,p({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,p=new Array(r);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var s=2;s<r;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2550:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(2081),o=a(4604),r=(a(9496),a(9613)),p=["components"],l={id:"run",title:"pnpm run"},i=void 0,s={unversionedId:"cli/run",id:"cli/run",title:"pnpm run",description:"Aliases: run-script",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/pt/next/cli/run",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"run",title:"pnpm run"},sidebar:"docs",previous:{title:"pnpm why",permalink:"/pt/next/cli/why"},next:{title:"pnpm test",permalink:"/pt/next/cli/test"}},c={},m=[{value:"Exemplos",id:"exemplos",level:2},{value:"Detalhes",id:"detalhes",level:2},{value:"Diferen\xe7as com <code>npm run</code>",id:"diferen\xe7as-com-npm-run",level:2},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:m};function d(e){var t=e.components,a=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aliases: ",(0,r.kt)("inlineCode",{parentName:"p"},"run-script")),(0,r.kt)("p",null,"Executa um script definido no arquivo de manifesto do pacote."),(0,r.kt)("h2",{id:"exemplos"},"Exemplos"),(0,r.kt)("p",null,"Digamos que voc\xea tenha um script ",(0,r.kt)("inlineCode",{parentName:"p"},"watch")," configurado em seu ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", da seguinte forma:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "webpack --watch"\n}\n')),(0,r.kt)("p",null,"Agora voc\xea pode executar esse script usando ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Simples, certo? Outra coisa a notar para aqueles que gostam de economizar teclas e tempo \xe9 que todos os scripts possuem um alias de comando pnpm, por isso, no fim das contas, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \xe9 apenas uma abrevia\xe7\xe3o para ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," (SOMENTE para scripts que n\xe3o compartilham o mesmo nome de comandos existentes do pnpm)."),(0,r.kt)("h2",{id:"detalhes"},"Detalhes"),(0,r.kt)("p",null,"Al\xe9m do ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),"pr\xe9-existente do shell, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run")," inclui ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," no ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," fornecido para os ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts"),". Isso significa que, desde que voc\xea tenha um pacote instalado, voc\xea pode us\xe1-lo em um script como um comando comum. Por exemplo, se voc\xea tem o ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint")," instalado, voc\xea pode escrever um script assim:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,r.kt)("p",null,"E mesmo que ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint")," n\xe3o esteja instalado globalmente em seu shell, ele ser\xe1 executado."),(0,r.kt)("p",null,"Para workspaces, ",(0,r.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," tamb\xe9m \xe9 adicionado ao ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),", portanto, se uma ferramenta estiver instalada na raiz do workspace, ela poder\xe1 ser chamada em qualquer script ",(0,r.kt)("inlineCode",{parentName:"p"},"de qualquer pacote do workspace"),"."),(0,r.kt)("h2",{id:"diferen\xe7as-com-npm-run"},"Diferen\xe7as com ",(0,r.kt)("inlineCode",{parentName:"h2"},"npm run")),(0,r.kt)("p",null,"Por padr\xe3o, o pnpm n\xe3o executa hooks arbitr\xe1rios ",(0,r.kt)("inlineCode",{parentName:"p"},"pre")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"post")," para scripts definidos pelo usu\xe1rio (como ",(0,r.kt)("inlineCode",{parentName:"p"},"prestart"),"). Esse comportamento, herdado do npm, fazia com que os scripts fossem impl\xedcitos em vez de expl\xedcitos, ofuscando o fluxo de execu\xe7\xe3o. Tamb\xe9m levou a execu\xe7\xf5es surpreendentes com ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm serve")," tamb\xe9m executando ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,r.kt)("p",null,"Se por algum motivo voc\xea precisar do comportamento pr\xe9/p\xf3s scripts do npm, use a op\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts"),"."),(0,r.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,r.kt)("p",null,"Quaisquer op\xe7\xf5es para o comando ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," devem ser listadas antes do nome do script. As op\xe7\xf5es listadas ap\xf3s o nome do script s\xe3o passadas para o script executado."),(0,r.kt)("p",null,"Todos eles executar\xe3o o pnpm CLI com a op\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"--silent"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run --silent watch\npnpm --silent run watch\npnpm --silent watch\n")),(0,r.kt)("p",null,"Quaisquer argumentos ap\xf3s o nome do comando s\xe3o adicionados ao script executado. Portanto, se ",(0,r.kt)("inlineCode",{parentName:"p"},"watch")," executar ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack --watch"),", este comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run watch --no-color\n")),(0,r.kt)("p",null,"ir\xe1 executar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"webpack --watch --no-color\n")),(0,r.kt)("h3",{id:"script-shell"},"script-shell"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Padr\xe3o: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Tipo: ",(0,r.kt)("strong",{parentName:"li"},"caminho"))),(0,r.kt)("p",null,"O shell a ser usado para scripts executados com o comando ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run"),"."),(0,r.kt)("p",null,"Por exemplo, para for\xe7ar o uso do Git Bash no Windows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,r.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Padr\xe3o: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tipo: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Quando ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", o pnpm usar\xe1 uma implementa\xe7\xe3o JavaScript de um shell ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash")," para executar os scripts."),(0,r.kt)("p",null,"Essa op\xe7\xe3o simplifica o uso do script de forma cross-platform. Por exemplo, por padr\xe3o, o pr\xf3ximo script falhar\xe1 em sistemas n\xe3o compat\xedveis com POSIX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,r.kt)("p",null,"Mas se a configura\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"shell-emulator")," estiver definida como ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ela funcionar\xe1 em todas as plataformas."),(0,r.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,r.kt)("p",null,'Isso executa um comando arbitr\xe1rio do objeto "scripts" de cada pacote. Se um pacote n\xe3o tiver o comando, ele ser\xe1 ignorado. Se nenhum dos pacotes tiver o comando, o comando falhar\xe1.'),(0,r.kt)("h3",{id:"--if-present"},"--if-present"),(0,r.kt)("p",null,"Voc\xea pode usar a flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--if-present")," para evitar que um script finalize com um c\xf3digo diferente de zero quando o script estiver indefinido. Isso permite que voc\xea execute scripts potencialmente indefinidos sem interromper a cadeia de execu\xe7\xe3o."),(0,r.kt)("h3",{id:"--parallel"},"--parallel"),(0,r.kt)("p",null,"Ignora completamente a concorr\xeancia e a classifica\xe7\xe3o topol\xf3gica, executando um determinado script imediatamente em todos os pacotes correspondentes com sa\xedda de streaming prefixada. Esta \xe9 a flag preferencial para processos de longa dura\xe7\xe3o em muitos pacotes, por exemplo, um processo de compila\xe7\xe3o muito demorado."),(0,r.kt)("h3",{id:"--stream"},"--stream"),(0,r.kt)("p",null,"Transmite a sa\xedda de processos filho imediatamente, prefixado com o diret\xf3rio do pacote de origem. Isso permite que a sa\xedda de diferentes pacotes seja intercalada."),(0,r.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,r.kt)("p",null,"Uma sa\xedda agregada de processos filhos que s\xe3o executados em paralelo e s\xf3 imprime a sa\xedda quando o processo filho estiver conclu\xeddo. Isso torna a leitura de logs grandes ap\xf3s a execu\xe7\xe3o de ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," com ",(0,r.kt)("inlineCode",{parentName:"p"},"--parallel")," ou com ",(0,r.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," muito mais f\xe1cil (especialmente em CI). Apenas ",(0,r.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," \xe9 suportado."),(0,r.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Padr\xe3o: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tipo: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Quando ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", o pnpm executar\xe1 qualquer script pr\xe9/p\xf3s automaticamente. Portanto, executar ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm foo")," ser\xe1 como executar ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pt/next/filtering"},"Leia mais sobre filtragem.")))}d.isMDXComponent=!0}}]);