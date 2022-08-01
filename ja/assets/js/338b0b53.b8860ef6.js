"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6545],{9613:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(9496);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){p(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,p=function(e,n){if(null==e)return{};var r,t,p={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(p[r]=e[r]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=p,_=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?t.createElement(_,a(a({ref:n},c),{},{components:r})):t.createElement(_,a({ref:n},c))}));function d(e,n){var r=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7740:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=r(2081),p=r(4604),o=(r(9496),r(9613)),a=["components"],i={id:"errors",title:"\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9"},l=void 0,s={unversionedId:"errors",id:"errors",title:"\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/errors.md",sourceDirName:".",slug:"/errors",permalink:"/ja/next/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"errors",title:"\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9"},sidebar:"docs",previous:{title:"\u6a5f\u80fd\u306e\u6bd4\u8f03",permalink:"/ja/next/feature-comparison"},next:{title:"\u30ed\u30b4",permalink:"/ja/next/logos"}},c={},u=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2},{value:"ERR_PNPM_OUTDATED_LOCKFILE",id:"err_pnpm_outdated_lockfile",level:2}],m={toc:u};function d(e){var n=e.components,r=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,o.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u5b58\u5728\u3057\u3001\u5225\u306e\u30b9\u30c8\u30a2\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30ea\u30f3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30b9\u30c8\u30a2\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u610f\u56f3\u7684\u306b\u5909\u66f4\u3057\u305f\u3044\u5834\u5408\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u3092\u5b9f\u884c\u3059\u308b\u3068\u3001pnpm\u306f\u65b0\u3057\u3044\u30b9\u30c8\u30a2\u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u3092\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,o.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u5b58\u5728\u3057\u306a\u3044\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u4f9d\u5b58\u95a2\u4fc2\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u30d1\u30c3\u30b1\u30fc\u30b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," \u306e\u4f9d\u5b58\u95a2\u4fc2\u306b ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," \u304c\u3042\u308b\u3068\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"\u3057\u304b\u3057\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u4f9d\u5b58\u95a2\u4fc2\u306b\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"bar@2.0.0"),"\u3057\u304b\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\u306f\u5931\u6557\u3059\u308b\u3067\u3057\u3087\u3046\u3002"),(0,o.kt)("p",null,"\u3053\u306e\u30a8\u30e9\u30fc\u3092\u4fee\u6b63\u3059\u308b\u306b\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"/ja/next/workspaces#workspace-protocol-workspace"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d7\u30ed\u30c8\u30b3\u30eb"),"\u3092\u4f7f\u7528\u3059\u308b\u5168\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u304c\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u5b58\u5728\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002 \u624b\u52d5\u3067\u4fee\u6b63\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3057\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"\u30b3\u30de\u30f3\u30c9\u3067\u4fee\u6b63\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u672a\u89e3\u6c7a\u306e peer dependencies \u304c\u3042\u308b\u5834\u5408\u3001\u307e\u305f\u306f peer dependencies \u304c\u8981\u6c42\u3055\u308c\u305f\u7bc4\u56f2\u306b\u4e00\u81f4\u3057\u306a\u3044\u5834\u5408\u3001\u5931\u6557\u3057\u307e\u3059\u3002 \u3053\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u306b\u306f\u3001\u4e0d\u8db3\u3057\u3066\u3044\u308b peer dependencies \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u307e\u305f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\u306e ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," \u3068 ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," \u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001\u3053\u308c\u3089\u306e\u30a8\u30e9\u30fc\u3092\u9078\u629e\u7684\u306b\u7121\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"err_pnpm_outdated_lockfile"},"ERR_PNPM_OUTDATED_LOCKFILE"),(0,o.kt)("p",null,"This error happens when installation cannot be performed without changes to the lockfile. This might happen in a CI environment if someone has changed a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file in the repository without running ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," afterwards. Or someone forgot to commit the changes to the lockfile."),(0,o.kt)("p",null,"To fix this error, just run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," and commit the changes to the lockfile."))}d.isMDXComponent=!0}}]);