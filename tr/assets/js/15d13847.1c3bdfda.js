"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1660],{9613:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>u});var l=n(9496);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=l.createContext({}),k=function(e){var a=l.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},m=function(e){var a=k(e.components);return l.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},s=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=k(n),u=t,c=s["".concat(o,".").concat(u)]||s[u]||d[u]||r;return n?l.createElement(c,i(i({ref:a},m),{},{components:n})):l.createElement(c,i({ref:a},m))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:t,i[1]=p;for(var k=2;k<r;k++)i[k]=n[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4175:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>k,toc:()=>d});var l=n(2081),t=n(4604),r=(n(9496),n(9613)),i=["components"],p={id:"install",title:"pnpm install"},o=void 0,k={unversionedId:"cli/install",id:"version-6.x/cli/install",title:"pnpm install",description:"Ayr\u0131ca: i",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/tr/6.x/cli/install",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-6.x/docs",previous:{title:"pnpm add <paket-ad\u0131>",permalink:"/tr/6.x/cli/add"},next:{title:"pnpm update",permalink:"/tr/6.x/cli/update"}},m={},d=[{value:"K\u0131saca;",id:"k\u0131saca",level:2},{value:"Parametreler",id:"parametreler",level:2},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--ignore-scripts",id:"--ignore-scripts",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;de\u011fer&gt;",id:"--reporterde\u011fer",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",level:3}],s={toc:d};function u(e){var a=e.components,p=(0,t.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},s,p,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ayr\u0131ca: ",(0,r.kt)("inlineCode",{parentName:"p"},"i")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," ile projede tan\u0131ml\u0131 olan t\xfcm k\xfct\xfcphaneleri y\xfckleyebilirsin."),(0,r.kt)("p",null,"Fakat y\xfckleme komutu, g\xfcncel olmayan bir ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," dosyas\u0131yla CI ortam\u0131nda \xe7al\u0131\u015ft\u0131r\u0131ld\u0131\u011f\u0131 zaman, hata verir."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," komutu, workspace (\xe7al\u0131\u015fma ortam\u0131) i\xe7erisinde \xe7al\u0131\u015ft\u0131r\u0131ld\u0131\u011f\u0131 zaman ise, workspace i\xe7erisindeki t\xfcm projelere tan\u0131ml\u0131 olan t\xfcm k\xfct\xfcphaneleri y\xfckler. Her hangi bir sebepten dolay\u0131 bu \xf6zelli\u011fi devre d\u0131\u015f\u0131 b\u0131rakmak istersen, ",(0,r.kt)("inlineCode",{parentName:"p"},"recursive-install")," ayar\u0131n\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," olarak ayarlayabilirsin."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8927).Z,width:"940",height:"472"})),(0,r.kt)("h2",{id:"k\u0131saca"},"K\u0131saca;"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Komut"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0130\u015flevi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,r.kt)("td",{parentName:"tr",align:null},"\xc7evrimd\u0131\u015f\u0131 \u015fekilde, ortak alandan y\xfckleme yapar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},"Sadece ",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," odakl\u0131 y\xfckleme yapar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," dosyas\u0131n\u0131 g\xfcnceller")))),(0,r.kt)("h2",{id:"parametreler"},"Parametreler"),(0,r.kt)("h3",{id:"--offline"},"--offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"E\u011fer ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ise, pnpm yaln\u0131zca ma\u011fazada(store) zaten mevcut olan paketleri kullan\u0131r. E\u011fer paket depolama alan\u0131nda bulunmazsa, y\xfckleme i\u015flemi hata verecektir."),(0,r.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.28.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"E\u011fer ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ise, \xf6nbelle\u011fe al\u0131nm\u0131\u015f veriler i\xe7in eskime denetimleri atlan\u0131r, ancak eksik data sunucudan istenir. E\u011fer tam anlam\u0131yla \xe7evrimd\u0131\u015f\u0131 \xe7al\u0131\u015fmas\u0131 gerekirse, ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline")," parametresini kullanabilirsin."),(0,r.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," i\xe7erisinde tan\u0131ml\u0131 olan t\xfcm komutlar\u0131 (scripts) g\xf6z ard\u0131 ederek i\u015flem yapar, yani hi\xe7 birini \xe7al\u0131\u015ft\u0131rmaz/tetiklemez."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/tr/6.x/pnpmfile"},".pnpmfile.cjs")," dosyas\u0131n\u0131n \xe7al\u0131\u015fmas\u0131nda ve \xe7al\u0131\u015ft\u0131r\u0131lmas\u0131nda etkisi yoktur")),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," de\u011fi\u015fkeni ",(0,r.kt)("inlineCode",{parentName:"p"},"production")," olarak ayarland\u0131\u011f\u0131nda pnpm, ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," k\u0131sm\u0131nda belirtilen t\xfcm k\xfct\xfcphaneleri g\xf6z ard\u0131 ederek y\xfckleme yapar. Parametrenin kullan\u0131lmas\u0131 durumunda, \xf6n tan\u0131ml\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," de\u011fi\u015fkenindeki de\u011feri g\xf6z ard\u0131 ederek, ",(0,r.kt)("inlineCode",{parentName:"p"},"production")," seviyesinde y\xfckleme yapar."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," de\u011feri ne olursa olsun, sadece ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," k\u0131sm\u0131ndaki k\xfct\xfcphaneleri y\xfckler."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131sm\u0131ndaki k\xfct\xfcphaneleri g\xf6z ard\u0131 ederek y\xfckleme yapar."),(0,r.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.26.0 ve sonras\u0131nda ge\xe7erli (eski ad\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"shrinkwrap-only")," idi)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Kullan\u0131ld\u0131\u011f\u0131nda, yaln\u0131zca ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," ve ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," dosyalar\u0131n\u0131 g\xfcnceller. ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," dizinine hi\xe7bir \u015fey yaz\u0131lmaz."),(0,r.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,r.kt)("p",null,"S\xfcr\xfcm 6.15.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("p",null,"Bozuk lockfile giri\u015flerini otomatik olarak d\xfczelt."),(0,r.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.37.1 ve sonras\u0131nda ge\xe7erli (eski ad\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"frozen-shrinkwrap")," idi)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Normalde: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"CI ortam\u0131nda: ",(0,r.kt)("strong",{parentName:"li"},"true"),", tabi ",(0,r.kt)("inlineCode",{parentName:"li"},"lock")," dosyas\u0131 varsa e\u011fer"))),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Kullan\u0131ld\u0131\u011f\u0131nda veya ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," olarak belirtildi\u011finde pnpm, sadece ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," dosyas\u0131n\u0131 baz alarak ve ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," dosyas\u0131nda hi\xe7 bir de\u011fi\u015fiklik yapmadan y\xfckleme yapar. E\u011fer ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," dosyas\u0131 g\xfcncel de\u011filse veya hi\xe7 olu\u015fturulmam\u0131\u015fsa, i\u015flem hata verecektir."),(0,r.kt)("h3",{id:"--reporterde\u011fer"},"--reporter=","<","de\u011fer",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TTY ak\u0131\u015fl\u0131 ortamda: ",(0,r.kt)("strong",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},"TTY ak\u0131\u015f\u0131 olmayan ortamda: ",(0,r.kt)("strong",{parentName:"li"},"append-only")))),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"default"),", ",(0,r.kt)("strong",{parentName:"li"},"append-only"),", ",(0,r.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,r.kt)("strong",{parentName:"li"},"silent"))),(0,r.kt)("p",null,"Y\xfckleme i\u015flemiyle alakal\u0131 ay\u0131klama (debug) bilgilerinin, konsolda hangi ve ne \u015fekilde g\xf6sterilece\u011fini belirlemek i\xe7in kullanabilirsin."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"silent")," - sessiz mod. \xd6nemli hatalar haricindeki her \u015feyi gizler"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default")," - varsay\u0131lan mod. TTY ak\u0131\u015fa sahip ortamda kullan\u0131l\u0131r"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"append-only")," (S\xfcr\xfcm 1.29.1 ve sonras\u0131nda ge\xe7erli) - ay\u0131klama bilgilerini, d\xfcz bi\xe7imde son sat\u0131ra ekleyerek g\xf6sterir. \u0130mle\xe7 hareketleri vs. kullan\u0131lamaz"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ndjson")," - detayl\u0131 veri \xe7\u0131k\u0131\u015f\u0131 i\xe7in kullan\u0131l\u0131r. \xc7\u0131kt\u0131lar\u0131n tamam\u0131n\u0131, ",(0,r.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," bi\xe7iminde g\xf6sterir")),(0,r.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.30.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Arka planda \xe7al\u0131\u015fan bir depolama sunucusu olu\u015fturur. Y\xfckleme i\u015flemi tamamlansa dahi, depolama sunucusu arka planda \xe7al\u0131\u015fmaya devam eder. Durdurmak i\xe7in, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm server stop")," komutunu kullanabilirsin"),(0,r.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm")," ve ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn'\u0131n")," kulland\u0131\u011f\u0131na benzeyen d\xfcz, klasik bir ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," dizin yap\u0131s\u0131 olu\u015fturur. ",(0,r.kt)("strong",{parentName:"p"},"UYARI"),": A\xe7\u0131k\xe7as\u0131 bu parametrenin kullan\u0131m\u0131n\u0131 \xf6nermiyoruz."),(0,r.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/tr/6.x/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}u.isMDXComponent=!0},8927:(e,a,n)=>{n.d(a,{Z:()=>l});const l=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);