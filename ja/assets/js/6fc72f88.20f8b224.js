"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6761],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),h=p,d=u["".concat(i,".").concat(h)]||u[h]||c[h]||r;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function h(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:p,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(2081),p=n(4604),r=(n(9496),n(9613)),l=["components"],o={title:"2021\u5e74\u306epnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},i=void 0,s={permalink:"/ja/blog/2021/12/29/yearly-update",editUrl:"https://crowdin.com/project/pnpm/ja",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md",title:"2021\u5e74\u306epnpm",description:"\u4eca\u5e74\u306fpnpm\u306b\u3068\u3063\u3066\u826f\u3044\u5e74\u3067\u3057\u305f\u3002\u5e74\u672b\u306a\u306e\u3067\u30011\u5e74\u3092\u632f\u308a\u8fd4\u3063\u3066\u307f\u307e\u3057\u3087\u3046",date:"2021-12-29T00:00:00.000Z",formattedDate:"2021\u5e7412\u670829\u65e5",tags:[],readingTime:4.88,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"2021\u5e74\u306epnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},nextItem:{title:"pnpm \u3067\u306e\u30ce\u30fc\u30c9\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u8a2d\u5b9a",permalink:"/ja/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},m={authorsImageUrls:[void 0]},c=[{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2},{value:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570",id:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570",level:3},{value:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8a2a\u554f\u8005\u6570",id:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8a2a\u554f\u8005\u6570",level:3},{value:"GitHub\u306e\u30b9\u30bf\u30fc\u6570",id:"github\u306e\u30b9\u30bf\u30fc\u6570",level:3},{value:"\u65b0\u898f\u30e6\u30fc\u30b6\u30fc",id:"\u65b0\u898f\u30e6\u30fc\u30b6\u30fc",level:3},{value:"\u6a5f\u80fd\u306e\u30cf\u30a4\u30e9\u30a4\u30c8",id:"\u6a5f\u80fd\u306e\u30cf\u30a4\u30e9\u30a4\u30c8",level:2},{value:"\u65b0\u3057\u3044lockfile\u306e\u5f62\u5f0f(v6.0.0\u304b\u3089)",id:"\u65b0\u3057\u3044lockfile\u306e\u5f62\u5f0fv600\u304b\u3089",level:3},{value:"Node.js\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406 (v6.12.0\u304b\u3089)",id:"nodejs\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406-v6120\u304b\u3089",level:3},{value:"\u30ed\u30fc\u30ab\u30eb\u4f9d\u5b58\u6027\u306e\u6ce8\u5165 (v6.20.0\u304b\u3089)",id:"\u30ed\u30fc\u30ab\u30eb\u4f9d\u5b58\u6027\u306e\u6ce8\u5165-v6200\u304b\u3089",level:3},{value:"peerDependency issue\u306e\u30ec\u30dd\u30fc\u30c8\u6a5f\u80fd\u306e\u6539\u5584 (since v6.24.0)",id:"peerdependency-issue\u306e\u30ec\u30dd\u30fc\u30c8\u6a5f\u80fd\u306e\u6539\u5584-since-v6240",level:3},{value:"\u7af6\u5408\u30c4\u30fc\u30eb\u306e\u52d5\u5411",id:"\u7af6\u5408\u30c4\u30fc\u30eb\u306e\u52d5\u5411",level:2},{value:"Yarn",id:"yarn",level:3},{value:"npm",id:"npm",level:3},{value:"\u305d\u306e\u4ed6",id:"\u305d\u306e\u4ed6",level:3},{value:"\u4eca\u5f8c\u306e\u8a08\u753b",id:"\u4eca\u5f8c\u306e\u8a08\u753b",level:2}],u={toc:c};function h(e){var t=e.components,o=(0,p.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4eca\u5e74\u306fpnpm\u306b\u3068\u3063\u3066\u826f\u3044\u5e74\u3067\u3057\u305f\u3002\u5e74\u672b\u306a\u306e\u3067\u30011\u5e74\u3092\u632f\u308a\u8fd4\u3063\u3066\u307f\u307e\u3057\u3087\u3046"),(0,r.kt)("h2",{id:"\u4f7f\u3044\u65b9"},"\u4f7f\u3044\u65b9"),(0,r.kt)("h3",{id:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570"),(0,r.kt)("p",null,"\u4eca\u5e74\u306e\u76ee\u6a19\u306f\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570\u3067Bower\u306b\u52dd\u3064\u3053\u3068\u3067\u3057\u305f\u3002 ",(0,r.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29"},"11\u6708\u306b"),"\u3053\u306e\u76ee\u6a19\u3092\u9054\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8568).Z,width:"976",height:"389"})),(0,r.kt)("p",null,"pnpm\u306f 2021\u5e74\u306b 2020\u5e74\u306e \u7d04 ",(0,r.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29"},"3\u500d")," \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5314).Z,width:"983",height:"394"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u3053\u306e\u7d71\u8a08\u306f\u3001pnpm\u306e\u5168\u3066\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3092\u6e2c\u5b9a\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pnpm"},"pnpm npm package"),"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570\u306e\u307f\u3092\u6e2c\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002 \u4eca\u5e74\u8ffd\u52a0\u3057\u305fpnpm\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u307f\u30d0\u30a4\u30ca\u30ea\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u5225\u3067\u914d\u5e03\u3055\u308c\u307e\u3059\u3002")),(0,r.kt)("h3",{id:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8a2a\u554f\u8005\u6570"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8a2a\u554f\u8005\u6570"),(0,r.kt)("p",null,"\u79c1\u305f\u3061\u306fGoogle Analytics\u3092\u4f7f\u3063\u3066\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30b5\u30a4\u30c8\u304b\u3089\u500b\u4eba\u3092\u7279\u5b9a\u3067\u304d\u306a\u3044\u7d71\u8a08\u60c5\u5831\u3092\u53ce\u96c6\u3057\u3066\u3044\u307e\u3059\u3002 2021\u5e74\u306b\u306f\u30011\u9031\u9593\u306b2,000\u4eba\u4ee5\u4e0a\u306e\u30e6\u30cb\u30fc\u30af\u30d3\u30b8\u30bf\u30fc\u304c\u8a2a\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4485).Z,width:"665",height:"509"})),(0,r.kt)("p",null,"\u5229\u7528\u8005\u306e\u5927\u534a\u306f\u30a2\u30e1\u30ea\u30ab\u304b\u4e2d\u56fd\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3044\u307e\u3059"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6084).Z,width:"585",height:"498"})),(0,r.kt)("h3",{id:"github\u306e\u30b9\u30bf\u30fc\u6570"},"GitHub\u306e\u30b9\u30bf\u30fc\u6570"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm"},"\u30e1\u30a4\u30f3\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea"),"\u306f\u3001\u4eca\u5e74\u3060\u3051\u30675000\u4ee5\u4e0a\u306e\u30b9\u30bf\u30fc\u3092\u7372\u5f97\u3057\u307e\u3057\u305f"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4294).Z,width:"913",height:"800"})),(0,r.kt)("h3",{id:"\u65b0\u898f\u30e6\u30fc\u30b6\u30fc"},"\u65b0\u898f\u30e6\u30fc\u30b6\u30fc"),(0,r.kt)("p",null,"\u4eca\u5e74\u6700\u5927\u306e\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/pull/89"},"Bytedance")," (TikTok\u904b\u55b6\u5143\u306e\u4f1a\u793e)\u3067\u3059"),(0,r.kt)("p",null,"\u307e\u305f\u3001\u591a\u304f\u306e\u7d20\u6674\u3089\u3057\u3044\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304cpnpm\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002 \b\u30b9\u30a4\u30c3\u30c1\u3057\u305f\u7406\u7531\u3068\u3057\u3066\u3001pnpm\u304c\u30e2\u30ce\u30ec\u30dd\u3092\u5f37\u529b\u306b\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u6319\u3052\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u3042\u308a\u307e\u3059"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vuejs/vue-next"},"Vue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"Vite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pnpm.io/workspaces#usage-examples"},"\u305d\u306e\u4ed6\u591a\u6570"))),(0,r.kt)("p",null,"pnpm\u306e\u52b9\u7387\u3001\u30b9\u30d4\u30fc\u30c9\u3001\u7f8e\u3057\u3055\u304c\u6c17\u306b\u5165\u3063\u3066\u4e57\u308a\u63db\u3048\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3082\u3042\u308a\u307e\u3059"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/Autoprefixer/status/1476226146488692736"},"Autoprefixer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/PostCSS/status/1470438664006258701"},"PostCSS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/Browserslist/status/1468264308308156419"},"Browserslist"))),(0,r.kt)("h2",{id:"\u6a5f\u80fd\u306e\u30cf\u30a4\u30e9\u30a4\u30c8"},"\u6a5f\u80fd\u306e\u30cf\u30a4\u30e9\u30a4\u30c8"),(0,r.kt)("h3",{id:"\u65b0\u3057\u3044lockfile\u306e\u5f62\u5f0fv600\u304b\u3089"},"\u65b0\u3057\u3044lockfile\u306e\u5f62\u5f0f(",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.0.0"},"v6.0.0"),"\u304b\u3089)"),(0,r.kt)("p",null,"\u4eca\u5e74\u6700\u521d\u306e\u3001\u305d\u3057\u3066\u6700\u3082\u91cd\u8981\u306a\u5909\u66f4\u70b9\u306e1\u3064\u306f\u3001\u65b0\u3057\u3044",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"\u5f62\u5f0f\u3067\u3057\u305f\u3002 \u3053\u308c\u306f\u7834\u58ca\u7684\u5909\u66f4\u3060\u3063\u305f\u306e\u3067\u3001v6\u3092\u30ea\u30ea\u30fc\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3057\u305f\u3002 \u3057\u304b\u3057\u3001\u3053\u308c\u306f\u6210\u529f\u3067\u3057\u305f\u3002 \u3044\u307e\u307e\u3067\u306elockfile\u3067\u306f\u3001Git\u306e\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u304c\u983b\u7e41\u306b\u767a\u751f\u3057\u3066\u3044\u307e\u3057\u305f\u3002 \u65b0\u3057\u3044\u5f62\u5f0f\u3092\u5c0e\u5165\u3057\u3066\u4ee5\u6765\u3001Git\u306e\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u306b\u95a2\u3059\u308b\u82e6\u60c5\u306f\u4e00\u5207\u306a\u304f\u306a\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("h3",{id:"nodejs\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406-v6120\u304b\u3089"},"Node.js\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406 (",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.12.0"},"v6.12.0"),"\u304b\u3089)"),(0,r.kt)("p",null,"Node.js\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u7ba1\u7406\u3059\u308b\u30b3\u30de\u30f3\u30c9(",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm env"),")\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002 \u305d\u306e\u305f\u3081\u3001nvm\u3084Volta\u306e\u3088\u3046\u306aNode.js\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u30bd\u30d5\u30c8\u306e\u4ee3\u308f\u308a\u306b\u3001pnpm\u3092\u4f7f\u3048\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305f\u3001pnpm\u306f\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u306e\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u51fa\u8377\u3055\u308c\u307e\u3059\u306e\u3067\u3001Node.js\u304c\u30d7\u30ea\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u30b7\u30b9\u30c6\u30e0\u3067\u3082\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u30ed\u30fc\u30ab\u30eb\u4f9d\u5b58\u6027\u306e\u6ce8\u5165-v6200\u304b\u3089"},"\u30ed\u30fc\u30ab\u30eb\u4f9d\u5b58\u6027\u306e\u6ce8\u5165 (",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.20.0"},"v6.20.0"),"\u304b\u3089)"),(0,r.kt)("p",null,'\u30ed\u30fc\u30ab\u30eb\u4f9d\u5b58\u95a2\u4fc2\u3092 "\u6ce8\u5165" \u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u306a\u4f9d\u5b58\u95a2\u4fc2\u306f ',(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u306b\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3055\u308c\u307e\u3059\u304c\u3001\u3053\u306e\u65b0\u3057\u3044\u6a5f\u80fd\u3067\u306f\u3001\u4ee3\u308f\u308a\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30cf\u30fc\u30c9\u30ea\u30f3\u30af\u3059\u308b\u3088\u3046\u306b pnpm \u306b\u6307\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"peerdependency-issue\u306e\u30ec\u30dd\u30fc\u30c8\u6a5f\u80fd\u306e\u6539\u5584-since-v6240"},"peerDependency issue\u306e\u30ec\u30dd\u30fc\u30c8\u6a5f\u80fd\u306e\u6539\u5584 (since ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.24.0"},"v6.24.0"),")"),(0,r.kt)("p",null,"peerDependencies\u306e\u554f\u984c\u306f\u3001\u4ee5\u524d\u306f\u30d7\u30ec\u30fc\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u51fa\u529b\u3055\u308c\u3001\u7406\u89e3\u3059\u308b\u306e\u304c\u56f0\u96e3\u3067\u3057\u305f\u3002 \u73fe\u5728\u306f\u3001\u3059\u3079\u3066\u30b0\u30eb\u30fc\u30d7\u5316\u3055\u308c\u3001\u7f8e\u3057\u3044\u968e\u5c64\u69cb\u9020\u3067\u51fa\u529b\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u7af6\u5408\u30c4\u30fc\u30eb\u306e\u52d5\u5411"},"\u7af6\u5408\u30c4\u30fc\u30eb\u306e\u52d5\u5411"),(0,r.kt)("h3",{id:"yarn"},"Yarn"),(0,r.kt)("p",null,"Yarn\u306f",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-"},"v3.1"),"\u304b\u3089pnpm\u30ea\u30f3\u30ab\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002 \u305d\u306e\u305f\u3081\u3001Yarn\u306fpnpm\u304c\u4f5c\u6210\u3059\u308b\u3082\u306e\u3068\u540c\u69d8\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020\u3092\u3082\u3064node_modules\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305f\u3001Yarn\u30c1\u30fc\u30e0\u306f\u3001\u30c7\u30a3\u30b9\u30af\u5bb9\u91cf\u3092\u52b9\u7387\u7684\u306b\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u30fb\u30a2\u30c9\u30ec\u30b9\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u5b9f\u88c5\u3059\u308b\u4e88\u5b9a\u3067\u3059\u3002"),(0,r.kt)("h3",{id:"npm"},"npm"),(0,r.kt)("p",null,"npm\u30c1\u30fc\u30e0\u306f\u3001pnpm\u304c\u63a1\u7528\u3057\u3066\u3044\u308b\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u306b\u3088\u308bnode_modules\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020\u3082\u63a1\u7528\u3059\u308b\u3053\u3068\u306b\u6c7a\u5b9a\u3057\u307e\u3057\u305f\u3002(\u95a2\u9023\u3059\u308b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md"},"RFC"),")."),(0,r.kt)("h3",{id:"\u305d\u306e\u4ed6"},"\u305d\u306e\u4ed6"),(0,r.kt)("p",null,"Zig\u3067\u66f8\u304b\u308c\u305f",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/jarredsumner/status/1473416431291174912/photo/1"},"Bun"),"\u3068 Rust\u3067\u66f8\u304b\u308c\u305f",(0,r.kt)("a",{parentName:"p",href:"https://github.com/voltpkg/volt"},"Volt")," \u306e\u3075\u305f\u3064\u306f\u3001npm/Yarn/pnpm \u3088\u308a\u9ad8\u901f\u3068\u4e3b\u5f35\u3057\u3066\u3044\u307e\u3059\u3002 \u79c1\u306f\u3053\u308c\u3089\u306e\u65b0\u3057\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u306f\u307e\u3060\u884c\u3063\u3066\u3044\u307e\u305b\u3093\u3002"),(0,r.kt)("h2",{id:"\u4eca\u5f8c\u306e\u8a08\u753b"},"\u4eca\u5f8c\u306e\u8a08\u753b"),(0,r.kt)("p",null,"\u3088\u308a\u901f\u304f\u3001\u3088\u308a\u826f\u304f\u3001\u30d9\u30b9\u30c8\u3092\u76ee\u6307\u3059"))}h.isMDXComponent=!0},6084:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/countries-2021-8eb9625e1798649ee04451dfb10ac851.png"},5314:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/download-stats-2021-1418562cb03abd558c4a6b4b17155227.png"},4485:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ga-unique-visits-2021-b8bc3649f680565127696c85bdd4b701.png"},8568:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pnpm-vs-bower-stats-6ec69a7308f5fbc1433420b1b2f7457f.png"},4294:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stars-2021-0061c16f424e33ba0db224d82bcb53f3.png"}}]);