"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4869],{9613:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(9496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?t.createElement(h,a(a({ref:n},c),{},{components:r})):t.createElement(h,a({ref:n},c))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9048:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var t=r(2081),o=r(4604),i=(r(9496),r(9613)),a=["components"],p={id:"errors",title:"Error Codes"},s=void 0,l={unversionedId:"errors",id:"version-7.x/errors",title:"Error Codes",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/versioned_docs/version-7.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/errors",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/errors.md",tags:[],version:"7.x",frontMatter:{id:"errors",title:"Error Codes"},sidebar:"version-7.x/docs",previous:{title:"Working with Git",permalink:"/git"},next:{title:"Logos",permalink:"/logos"}},c={},d=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2},{value:"ERR_PNPM_OUTDATED_LOCKFILE",id:"err_pnpm_outdated_lockfile",level:2}],u={toc:d};function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,i.kt)("p",null,"A modules directory is present and is linked to a different store directory."),(0,i.kt)("p",null,"If you changed the store directory intentionally, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," and pnpm will reinstall the dependencies using the new store."),(0,i.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,i.kt)("p",null,"A project has a workspace dependency that does not exist in the workspace."),(0,i.kt)("p",null,"For instance, package ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," has ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,i.kt)("p",null,"However, there is only ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," in the workspace, so ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," will fail."),(0,i.kt)("p",null,"To fix this error, all dependencies that use the ",(0,i.kt)("a",{parentName:"p",href:"/workspaces#workspace-protocol-workspace"},"workspace protocol")," should be updated to use versions of packages that are present in the workspace. This can be done either manually or using the ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r update")," command."),(0,i.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," will fail if the project has unresolved peer dependencies or the peer dependencies are not matching the wanted ranges. To fix this, install the missing peer dependencies."),(0,i.kt)("p",null,"You may also selectively ignore these errors using the ",(0,i.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," and ",(0,i.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," fields in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("h2",{id:"err_pnpm_outdated_lockfile"},"ERR_PNPM_OUTDATED_LOCKFILE"),(0,i.kt)("p",null,"This error happens when installation cannot be performed without changes to the lockfile. This might happen in a CI environment if someone has changed a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file in the repository without running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," afterwards. Or someone forgot to commit the changes to the lockfile."),(0,i.kt)("p",null,"To fix this error, just run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," and commit the changes to the lockfile."))}m.isMDXComponent=!0}}]);