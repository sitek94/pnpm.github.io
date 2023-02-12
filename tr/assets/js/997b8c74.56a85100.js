"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2468],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=l,c=m["".concat(p,".").concat(u)]||m[u]||k[u]||r;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>k});var n=a(2962),l=a(2742),r=(a(9496),a(9613)),i=["components"],o={id:"install",title:"pnpm install"},p=void 0,s={unversionedId:"cli/install",id:"version-7.x/cli/install",title:"pnpm install",description:"Ayr\u0131ca: i",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/tr/cli/install",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-7.x/docs",previous:{title:"pnpm add <paket-ad\u0131>",permalink:"/tr/cli/add"},next:{title:"pnpm update",permalink:"/tr/cli/update"}},d={},k=[{value:"K\u0131saca;",id:"k\u0131saca",level:2},{value:"Parametreler",id:"parametreler",level:2},{value:"--force",id:"--force",level:3},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;de\u011fer&gt;",id:"--reporterde\u011fer",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--ignore-scripts",id:"--ignore-scripts",level:3},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",level:3}],m={toc:k};function u(e){var t=e.components,o=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ayr\u0131ca: ",(0,r.kt)("inlineCode",{parentName:"p"},"i")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," ile projede tan\u0131ml\u0131 olan t\xfcm k\xfct\xfcphaneleri y\xfckleyebilirsin."),(0,r.kt)("p",null,"Fakat y\xfckleme komutu, g\xfcncel olmayan bir ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," dosyas\u0131yla CI ortam\u0131nda \xe7al\u0131\u015ft\u0131r\u0131ld\u0131\u011f\u0131 zaman, hata verir."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," komutu, workspace (\xe7al\u0131\u015fma ortam\u0131) i\xe7erisinde \xe7al\u0131\u015ft\u0131r\u0131ld\u0131\u011f\u0131 zaman ise, workspace i\xe7erisindeki t\xfcm projelere tan\u0131ml\u0131 olan t\xfcm k\xfct\xfcphaneleri y\xfckler. Her hangi bir sebepten dolay\u0131 bu \xf6zelli\u011fi devre d\u0131\u015f\u0131 b\u0131rakmak istersen, ",(0,r.kt)("inlineCode",{parentName:"p"},"recursive-install")," ayar\u0131n\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," olarak ayarlayabilirsin."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3345).Z,width:"940",height:"472"})),(0,r.kt)("h2",{id:"k\u0131saca"},"K\u0131saca;"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Komut"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0130\u015flevi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,r.kt)("td",{parentName:"tr",align:null},"\xc7evrimd\u0131\u015f\u0131 \u015fekilde, ortak alandan y\xfckleme yapar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},"Sadece ",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," odakl\u0131 y\xfckleme yapar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," dosyas\u0131n\u0131 g\xfcnceller")))),(0,r.kt)("h2",{id:"parametreler"},"Parametreler"),(0,r.kt)("h3",{id:"--force"},"--force"),(0,r.kt)("p",null,"Force reinstall dependencies: refetch packages modified in store, recreate a lockfile and/or modules directory created by a non-compatible version of pnpm. Install all optionalDependencies even they don't satisfy the current environment(cpu, os, arch)."),(0,r.kt)("h3",{id:"--offline"},"--offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use only packages already available in the store. If a package won't be found locally, the installation will fail."),(0,r.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"E\u011fer ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ise, \xf6nbelle\u011fe al\u0131nm\u0131\u015f veriler i\xe7in eskime denetimleri atlan\u0131r, ancak eksik data sunucudan istenir. E\u011fer tam anlam\u0131yla \xe7evrimd\u0131\u015f\u0131 \xe7al\u0131\u015fmas\u0131 gerekirse, ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline")," parametresini kullanabilirsin."),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"pnpm will not install any package listed in ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," and will remove those insofar they were already installed, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable is set to production. Use this flag to instruct pnpm to ignore ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," and take its production status from this flag instead."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,"Only ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," are installed and ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," are removed insofar they were already installed, regardless of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131sm\u0131ndaki k\xfct\xfcphaneleri g\xf6z ard\u0131 ederek y\xfckleme yapar."),(0,r.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Kullan\u0131ld\u0131\u011f\u0131nda, yaln\u0131zca ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," ve ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," dosyalar\u0131n\u0131 g\xfcnceller. ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," dizinine hi\xe7bir \u015fey yaz\u0131lmaz."),(0,r.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,r.kt)("p",null,"Bozuk lockfile giri\u015flerini otomatik olarak d\xfczelt."),(0,r.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Normalde: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"CI ortam\u0131nda: ",(0,r.kt)("strong",{parentName:"li"},"true"),", tabi ",(0,r.kt)("inlineCode",{parentName:"li"},"lock")," dosyas\u0131 varsa e\u011fer"))),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Kullan\u0131ld\u0131\u011f\u0131nda veya ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," olarak belirtildi\u011finde pnpm, sadece ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," dosyas\u0131n\u0131 baz alarak ve ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," dosyas\u0131nda hi\xe7 bir de\u011fi\u015fiklik yapmadan y\xfckleme yapar. E\u011fer ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," dosyas\u0131 g\xfcncel de\u011filse veya hi\xe7 olu\u015fturulmam\u0131\u015fsa, i\u015flem hata verecektir."),(0,r.kt)("p",null,"This setting is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," by default in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/watson/ci-info#supported-ci-tools"},"CI environments"),". The following code is used to detect CI environments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"',title:'"https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"'},"exports.isCI = !!(\n  env.CI || // Travis CI, CircleCI, Cirrus CI, GitLab CI, Appveyor, CodeShip, dsari\n  env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI\n  env.BUILD_NUMBER || // Jenkins, TeamCity\n  env.RUN_ID || // TaskCluster, dsari\n  exports.name ||\n  false\n)\n")),(0,r.kt)("h3",{id:"--reporterde\u011fer"},"--reporter=","<","de\u011fer",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TTY ak\u0131\u015fl\u0131 ortamda: ",(0,r.kt)("strong",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},"TTY ak\u0131\u015f\u0131 olmayan ortamda: ",(0,r.kt)("strong",{parentName:"li"},"append-only")))),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"default"),", ",(0,r.kt)("strong",{parentName:"li"},"append-only"),", ",(0,r.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,r.kt)("strong",{parentName:"li"},"silent"))),(0,r.kt)("p",null,"Y\xfckleme i\u015flemiyle alakal\u0131 ay\u0131klama (debug) bilgilerinin, konsolda hangi ve ne \u015fekilde g\xf6sterilece\u011fini belirlemek i\xe7in kullanabilirsin."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"silent")," - no output is logged to the console, not even fatal errors"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default")," - varsay\u0131lan mod. TTY ak\u0131\u015fa sahip ortamda kullan\u0131l\u0131r"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"append-only")," - the output is always appended to the end. \u0130mle\xe7 hareketleri vs. kullan\u0131lamaz"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ndjson")," - detayl\u0131 veri \xe7\u0131k\u0131\u015f\u0131 i\xe7in kullan\u0131l\u0131r. \xc7\u0131kt\u0131lar\u0131n tamam\u0131n\u0131, ",(0,r.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," bi\xe7iminde g\xf6sterir")),(0,r.kt)("p",null,"If you want to change what type of information is printed, use the ",(0,r.kt)("a",{parentName:"p",href:"/tr/npmrc#loglevel"},"loglevel")," setting."),(0,r.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Arka planda \xe7al\u0131\u015fan bir depolama sunucusu olu\u015fturur. Y\xfckleme i\u015flemi tamamlansa dahi, depolama sunucusu arka planda \xe7al\u0131\u015fmaya devam eder. Durdurmak i\xe7in, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm server stop")," komutunu kullanabilirsin"),(0,r.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm")," ve ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn'\u0131n")," kulland\u0131\u011f\u0131na benzeyen d\xfcz, klasik bir ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," dizin yap\u0131s\u0131 olu\u015fturur. ",(0,r.kt)("strong",{parentName:"p"},"UYARI"),": A\xe7\u0131k\xe7as\u0131 bu parametrenin kullan\u0131m\u0131n\u0131 \xf6nermiyoruz."),(0,r.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," i\xe7erisinde tan\u0131ml\u0131 olan t\xfcm komutlar\u0131 (scripts) g\xf6z ard\u0131 ederek i\u015flem yapar, yani hi\xe7 birini \xe7al\u0131\u015ft\u0131rmaz/tetiklemez."),(0,r.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/tr/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}u.isMDXComponent=!0},3345:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);