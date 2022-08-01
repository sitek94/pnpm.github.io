"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7434],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var a=n(2081),r=n(4604),o=(n(9496),n(9613)),l=["components"],p={title:"pnpm \u3067\u306e\u30ce\u30fc\u30c9\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u8a2d\u5b9a",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},i=void 0,c={permalink:"/ja/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/ja",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"pnpm \u3067\u306e\u30ce\u30fc\u30c9\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u8a2d\u5b9a",description:"nodemodules \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u306f\u591a\u304f\u3042\u308a\u307e\u3059\u3002 \u3086\u308b\u3044 nodemodules \u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u3053\u3053\u3067\u306e\u76ee\u6a19\u306f\u6700\u3082\u53b3\u683c\u306a\u3082\u306e\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3067\u3059\u3002",date:"2020-10-17T00:00:00.000Z",formattedDate:"2020\u5e7410\u670817\u65e5",tags:[],readingTime:3.405,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"pnpm \u3067\u306e\u30ce\u30fc\u30c9\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u8a2d\u5b9a",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"2021\u5e74\u306epnpm",permalink:"/ja/blog/2021/12/29/yearly-update"},nextItem:{title:"\u30d5\u30e9\u30c3\u30c8\u306a node_modules \u304c\u552f\u4e00\u306e\u65b9\u6cd5\u3067\u306f\u3042\u308a\u307e\u305b\u3093",permalink:"/ja/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},u={authorsImageUrls:[void 0]},m=[{value:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u69cb\u7bc9\u65b9\u6cd5",id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u69cb\u7bc9\u65b9\u6cd5",level:2},{value:"\u30d7\u30e9\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30d7\u30ec\u30a4\u3002 \u6700\u3082\u53b3\u683c\u306a\u8a2d\u5b9a",id:"\u30d7\u30e9\u30b0\u30a2\u30f3\u30c9\u30d7\u30ec\u30a4-\u6700\u3082\u53b3\u683c\u306a\u8a2d\u5b9a",level:2},{value:"\u53b3\u683c\u3067\u4f1d\u7d71\u7684\u306a\u30e2\u30b8\u30e5\u30fc\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u69cb\u9020",id:"\u53b3\u683c\u3067\u4f1d\u7d71\u7684\u306a\u30e2\u30b8\u30e5\u30fc\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u69cb\u9020",level:2},{value:"\u6700\u3082\u60aa\u3044\u30b1\u30fc\u30b9 - \u30eb\u30fc\u30c8\u3078\u306e\u5dfb\u304d\u4e0a\u3052",id:"\u6700\u3082\u60aa\u3044\u30b1\u30fc\u30b9---\u30eb\u30fc\u30c8\u3078\u306e\u5dfb\u304d\u4e0a\u3052",level:2}],s={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"node_modules \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u306f\u591a\u304f\u3042\u308a\u307e\u3059\u3002 \u3086\u308b\u3044 node_modules \u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u3053\u3053\u3067\u306e\u76ee\u6a19\u306f\u6700\u3082\u53b3\u683c\u306a\u3082\u306e\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u69cb\u7bc9\u65b9\u6cd5"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u69cb\u7bc9\u65b9\u6cd5"),(0,o.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001pnpm v5 \u306f\u6e96\u53b3\u683c\u306a node_modules \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u6e96\u53b3\u683c\u306a\u5834\u5408\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u306b\u4f9d\u5b58\u3068\u3057\u3066\u8ffd\u52a0\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092 require \u3067\u304d\u307e\u3059\u3002(\u3044\u304f\u3064\u304b\u306e\u4f8b\u5916\u3092\u9664\u304d\u307e\u3059\u3002) \u305f\u3060\u3057\u3001\u4f9d\u5b58\u95a2\u4fc2\u306f\u3069\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3082\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u8a2d\u5b9a\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"; \u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092 node_modules/.pnpm/node_modules \u306b\u5dfb\u304d\u4e0a\u3052\u308b\nhoist-pattern[]=*\n\n; TypeScript \u3067\u3046\u307e\u304f\u6271\u3048\u308b\u3088\u3046\u306b\u3001\u3059\u3079\u3066\u306e\u578b\u5b9a\u7fa9\u3092\u30eb\u30fc\u30c8\u306b\u5dfb\u304d\u4e0a\u3052\u308b\npublic-hoist-pattern[]=*types*\n\n; \u3059\u3079\u3066\u306e ESLint \u306b\u95a2\u4fc2\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30eb\u30fc\u30c8\u306b\u5dfb\u304d\u4e0a\u3052\u308b\npublic-hoist-pattern[]=*eslint*\n")),(0,o.kt)("h2",{id:"\u30d7\u30e9\u30b0\u30a2\u30f3\u30c9\u30d7\u30ec\u30a4-\u6700\u3082\u53b3\u683c\u306a\u8a2d\u5b9a"},"\u30d7\u30e9\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30d7\u30ec\u30a4\u3002 \u6700\u3082\u53b3\u683c\u306a\u8a2d\u5b9a"),(0,o.kt)("p",null,"pnpm \u306f v5.9 \u304b\u3089 ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"Yarn \u306e \u30d7\u30e9\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30d7\u30ec\u30a4")," \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002 \u30d7\u30e9\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30d7\u30ec\u30a4\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3082\u3001\u305d\u306e\u4f9d\u5b58\u3082\u3001\u5ba3\u8a00\u3055\u308c\u305f\u4f9d\u5b58\u306b\u306e\u307f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u308c\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"hoist=false"),"\u306e\u8a2d\u5b9a\u3088\u308a\u3082\u3055\u3089\u306b\u53b3\u5bc6\u3067\u3059\u3002\u306a\u305c\u306a\u3089\u3001\u30e2\u30ce\u30ec\u30dd\u306e\u5185\u90e8\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30eb\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f9d\u5b58\u95a2\u4fc2\u306b\u3059\u3089\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044\u304b\u3089\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u30d7\u30e9\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30d7\u30ec\u30a4\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u8a2d\u5b9a\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"node-linker=pnp\nsymlink=false\n")),(0,o.kt)("h2",{id:"\u53b3\u683c\u3067\u4f1d\u7d71\u7684\u306a\u30e2\u30b8\u30e5\u30fc\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u69cb\u9020"},"\u53b3\u683c\u3067\u4f1d\u7d71\u7684\u306a\u30e2\u30b8\u30e5\u30fc\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u69cb\u9020"),(0,o.kt)("p",null,"\u307e\u3060\u30d7\u30e9\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30d7\u30ec\u30a4\u3092\u4f7f\u7528\u3059\u308b\u6e96\u5099\u304c\u3067\u304d\u3066\u3044\u306a\u3044\u5834\u5408\u3067\u3082\u3001hoist \u3092 false \u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u81ea\u8eab\u306e\u4f9d\u5b58\u306b\u306e\u307f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"hoist=false\n")),(0,o.kt)("p",null,"\u3057\u304b\u3057\u3001\u3044\u304f\u3064\u304b\u306e\u4f9d\u5b58\u304c\u3001\u305d\u306e\u4f9d\u5b58\u306b\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a66\u307f\u3088\u3046\u3068\u3059\u308b\u5834\u5408\u306f\u30012\u3064\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," \u3092\u4f5c\u6210\u3057\u3066\u3001",(0,o.kt)("a",{parentName:"p",href:"/pnpmfile"},"hook")," \u3092\u4f7f\u7528\u3057\u3066\u4e0d\u8db3\u3057\u3066\u3044\u308b\u4f9d\u5b58\u3092\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306b\u52a0\u3048\u308b\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"hoist-pattern")," \u8a2d\u5b9a\u306b\u30d1\u30bf\u30fc\u30f3\u3092\u8ffd\u52a0\u3059\u308b\u3002 \u4f8b\u3048\u3070\u3001\u898b\u3064\u304b\u3089\u306a\u3044\u30e2\u30b8\u30e5\u30fc\u30eb\u304c ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-core")," \u306e\u5834\u5408\u306f\u3001\u6b21\u306e\u8a2d\u5b9a\u3092 ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc")," \u306b\u8ffd\u8a18\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"hoist-pattern[]=babel-core\n")))),(0,o.kt)("h2",{id:"\u6700\u3082\u60aa\u3044\u30b1\u30fc\u30b9---\u30eb\u30fc\u30c8\u3078\u306e\u5dfb\u304d\u4e0a\u3052"},"\u6700\u3082\u60aa\u3044\u30b1\u30fc\u30b9 - \u30eb\u30fc\u30c8\u3078\u306e\u5dfb\u304d\u4e0a\u3052"),(0,o.kt)("p",null,"\u4e00\u90e8\u306e\u30c4\u30fc\u30eb\u306f\u3001\u3059\u3079\u3066\u3092\u4eee\u60f3\u30b9\u30c8\u30a2\u306e\u30eb\u30fc\u30c8\u306b\u3001\u4e00\u90e8\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30eb\u30fc\u30c8\u306b\u5dfb\u304d\u4e0a\u3052\u308b pnpm \u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u3067\u3082\u6a5f\u80fd\u3057\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u4f9d\u5b58\u306e\u3059\u3079\u3066\u3001\u307e\u305f\u306f\u4e00\u90e8\u3092\u30e2\u30b8\u30e5\u30fc\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u30eb\u30fc\u30c8\u306b\u5f15\u304d\u4e0a\u3052\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"node_modules \u306e\u30eb\u30fc\u30c8\u306b\u3059\u3079\u3066\u3092\u5dfb\u304d\u4e0a\u3052\u308b\u5834\u5408:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"shamefully-hoist=true\n")),(0,o.kt)("p",null,"\u30d1\u30bf\u30fc\u30f3\u306b\u30de\u30c3\u30c1\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u5dfb\u304d\u4e0a\u3052\u308b\u5834\u5408:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"public-hoist-pattern[]=babel-*\n")))}d.isMDXComponent=!0}}]);