"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8857],{7806:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2021/12/29/yearly-update","metadata":{"permalink":"/ru/blog/2021/12/29/yearly-update","editUrl":"https://crowdin.com/project/pnpm/ru","source":"@site/i18n/ru/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md","title":"2021 \u0433\u043e\u0434 \u0434\u043b\u044f pnpm","description":"\u0423\u0436\u0435 \u043a\u043e\u043d\u0435\u0446 \u0433\u043e\u0434\u0430, \u0438 \u043e\u043d \u0431\u044b\u043b \u0445\u043e\u0440\u043e\u0448\u0438\u043c \u0434\u043b\u044f pnpm, \u0442\u0430\u043a \u0447\u0442\u043e \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043a\u0430\u043a\u0438\u043c \u043e\u043d \u0431\u044b\u043b.","date":"2021-12-29T00:00:00.000Z","formattedDate":"29 \u0434\u0435\u043a\u0430\u0431\u0440\u044f 2021 \u0433.","tags":[],"readingTime":2.45,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"2021 \u0433\u043e\u0434 \u0434\u043b\u044f pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"nextItem":{"title":"Node-Modules configuration options with pnpm","permalink":"/ru/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"\u0423\u0436\u0435 \u043a\u043e\u043d\u0435\u0446 \u0433\u043e\u0434\u0430, \u0438 \u043e\u043d \u0431\u044b\u043b \u0445\u043e\u0440\u043e\u0448\u0438\u043c \u0434\u043b\u044f pnpm, \u0442\u0430\u043a \u0447\u0442\u043e \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043a\u0430\u043a\u0438\u043c \u043e\u043d \u0431\u044b\u043b.\\n\\n\x3c!--truncate--\x3e\\n\\n## \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\\n\\n### \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0439\\n\\n\u041c\u043e\u0435\u0439 \u0446\u0435\u043b\u044c\u044e \u043d\u0430 \u044d\u0442\u043e\u0442 \u0433\u043e\u0434 \u0431\u044b\u043b\u043e \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u044c Bower \u043f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0439. \u0418 \u043c\u044b \u0434\u043e\u0441\u0442\u0438\u0433\u043b\u0438 \u044d\u0442\u043e\u0439 \u0446\u0435\u043b\u0438 \u0432 [\u043d\u043e\u044f\u0431\u0440\u0435](https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29):\\n\\n![](/img/blog/pnpm-vs-bower-stats.png)\\n\\npnpm \u0431\u044b\u043b \u0441\u043a\u0430\u0447\u0430\u043d \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e [ \u0432 3 \u0440\u0430\u0437\u0430 \u0431\u043e\u043b\u044c\u0448\u0435](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29) \u0432 2021, \u0447\u0435\u043c \u0432 2020:\\n\\n![](/img/blog/download-stats-2021.png)\\n\\n:::note\\n\\n\u042d\u0442\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0434\u0430\u0436\u0435 \u043d\u0435 \u0438\u0437\u043c\u0435\u0440\u044f\u0435\u0442 \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 pnpm! \u041e\u043d\u0430 \u0438\u0437\u043c\u0435\u0440\u044f\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043e\u043a [npm \u043f\u0430\u043a\u0435\u0442\u0430 pnpm](https://www.npmjs.com/package/pnpm). \u0412 \u044d\u0442\u043e\u043c \u0433\u043e\u0434\u0443 \u043c\u044b \u0442\u0430\u043a-\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b pmpm, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0438\u043d\u0430\u0447\u0435.\\n\\n:::\\n\\n### \u041f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438\\n\\n\u041c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043e\u0431\u0435\u0437\u043b\u0438\u0447\u0435\u043d\u043d\u0443\u044e \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u0438\u0437 \u043d\u0430\u0448\u0435\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Google Analytics. \u0412 2021 \u0433\u043e\u0434\u0443, \u0438\u043d\u043e\u0433\u0434\u0430 \u0443 \u043d\u0430\u0441 \u0431\u044b\u043b\u043e \u0431\u043e\u043b\u0435\u0435 2000 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0435\u0439 \u0432 \u043d\u0435\u0434\u0435\u043b\u044e.\\n\\n![](/img/blog/ga-unique-visits-2021.png)\\n\\n\u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043d\u0430\u0448\u0438\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438\u0437 \u0421\u0428\u0410 \u0438 \u041a\u0438\u0442\u0430\u044f.\\n\\n![](/img/blog/countries-2021.png)\\n\\n### \u0417\u0432\u0435\u0437\u0434\u044b \u043d\u0430 GitHub\\n\\n\u041d\u0430\u0448 [\u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u043d\u0430 GitHub](https://github.com/pnpm/pnpm) \u043f\u043e\u043b\u0443\u0447\u0438\u043b +5000 \u0437\u0432\u0435\u0437\u0434 \u0432 \u044d\u0442\u043e\u043c \u0433\u043e\u0434\u0443.\\n\\n![](/img/blog/stars-2021.png)\\n\\n### \u041d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438\\n\\n\u041d\u0430\u0448 \u0441\u0430\u043c\u044b\u0439 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0432 \u044d\u0442\u043e\u043c \u0433\u043e\u0434\u0443 - [Bytedance](https://github.com/pnpm/pnpm.github.io/pull/89) (\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f, \u0441\u0442\u043e\u044f\u0449\u0430\u044f \u0437\u0430 TikTok).\\n\\n\u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043c\u043d\u043e\u0433\u0438\u0435 \u0437\u0430\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c \u043d\u0430\u0447\u0430\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c pnpm. \u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0435\u0440\u0435\u0448\u043b\u0438 \u043d\u0430 pnpm \u0438\u0437-\u0437\u0430 \u0445\u043e\u0440\u043e\u0448\u0435\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432:\\n\\n* [Vue](https://github.com/vuejs/vue-next)\\n* [Vite](https://github.com/vitejs/vite)\\n* \u0438 [\u0434\u0440\u0443\u0433\u0438\u0435](https://pnpm.io/workspaces#usage-examples)\\n\\n\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u043b\u0438\u0441\u044c, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0438\u043c \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439, \u0431\u044b\u0441\u0442\u0440\u044b\u0439 \u0438 \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 pnpm:\\n\\n* [Autoprefixer](https://twitter.com/Autoprefixer/status/1476226146488692736)\\n* [PostCSS](https://twitter.com/PostCSS/status/1470438664006258701)\\n* [Browserslist](https://twitter.com/Browserslist/status/1468264308308156419)\\n\\n## Feature Highlights\\n\\n### New lockfile format (since [v6.0.0](https://github.com/pnpm/pnpm/releases/tag/v6.0.0))\\n\\nOne of the first and most important changes this year was the new `pnpm-lock.yaml` format. This was a breaking change, so we had to release v6. But it was a success. The old lockfile was causing Git conflicts frequently. Since the new format was introduced, we did not receive any complaints about Git conflicts.\\n\\n### Managing Node.js versions (since [v6.12.0](https://github.com/pnpm/pnpm/releases/tag/v6.12.0))\\n\\nWe shipped a new command (`pnpm env`) that allows to manage Node.js versions. So you may use pnpm instead of Node.js version managers like nvm or Volta.\\n\\nAlso, pnpm is shipped as a standalone executable, so you can run it even with no Node.js preinstalled on the system.\\n\\n### Injecting local dependencies (since [v6.20.0](https://github.com/pnpm/pnpm/releases/tag/v6.20.0))\\n\\nYou may \\"inject\\" a local dependency. By default, local dependencies are symlinked to `node_modules` but with this new feature you may instruct pnpm to hard link the files of the package instead.\\n\\n### Improved reporting of peer dependency issues (since [v6.24.0](https://github.com/pnpm/pnpm/releases/tag/v6.24.0))\\n\\nPeer dependency issues used to be printed as plain text and it was hard to understand them. They are now all grouped and printed in a nice hierarchy structure.\\n\\n## \u041a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0446\u0438\u044f\\n\\n### Yarn\\n\\nYarn added a pnpm linker in [v3.1](https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-). So Yarn can create a similar node-modules directory structure to the one that pnpm creates.\\n\\nAlso, the Yarn team plans to implement a content-addressable storage to be more disk space efficient.\\n\\n### npm\\n\\nThe npm team decided to also adopt the symlinked node-modules directory structure that pnpm uses (related [RFC](https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md)).\\n\\n### \u0414\u0440\u0443\u0433\u0438\u0435\\n\\n\u041e\u0431\u0430 [Bun](https://twitter.com/jarredsumner/status/1473416431291174912/photo/1), \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 Zig, \u0438 [Volt](https://github.com/voltpkg/volt), \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 Rust, \u0433\u043e\u0432\u043e\u0440\u044f\u0442\u044c \u0447\u0442\u043e \u043e\u043d\u0438 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0447\u0435\u043c npm/Yarn/pnpm. \u042f \u0435\u0449\u0435 \u043d\u0435 \u0437\u0430\u043c\u0435\u0440\u044f\u043b \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u044d\u0442\u0438\u0445 \u043f\u0430\u043a\u0435\u0442\u043d\u044b\u0445 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u0432.\\n\\n## \u041f\u043b\u0430\u043d\u044b \u043d\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0435\\n\\n\u0411\u044b\u0441\u0442\u0440\u0435\u0435, \u043b\u0443\u0447\u0448\u0435, \u043b\u0443\u0447\u0448\u0438\u0439."},{"id":"/2020/10/17/node-modules-configuration-options-with-pnpm","metadata":{"permalink":"/ru/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://crowdin.com/project/pnpm/ru","source":"@site/i18n/ru/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"Node-Modules configuration options with pnpm","description":"There are many ways to create a nodemodules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose nodemodules as well.","date":"2020-10-17T00:00:00.000Z","formattedDate":"17 \u043e\u043a\u0442\u044f\u0431\u0440\u044f 2020 \u0433.","tags":[],"readingTime":1.855,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"Node-Modules configuration options with pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"2021 \u0433\u043e\u0434 \u0434\u043b\u044f pnpm","permalink":"/ru/blog/2021/12/29/yearly-update"},"nextItem":{"title":"\u041f\u043b\u043e\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 node_modules \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c","permalink":"/ru/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"There are many ways to create a node_modules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose node_modules as well.\\n\\n\x3c!--truncate--\x3e\\n\\n## The default setup\\n\\nBy default, pnpm v5 will create a semi-strict node_modules. Semi-strict means that your application will only be able to require packages that are added as dependencies to `package.json` (with a few exceptions). However, your dependencies will be able to access any packages.\\n\\nThe default configuration looks like this:\\n\\n```ini\\n; All packages are hoisted to node_modules/.pnpm/node_modules\\nhoist-pattern[]=*\\n\\n; All types are hoisted to the root in order to make TypeScript happy\\npublic-hoist-pattern[]=*types*\\n\\n; All ESLint-related packages are hoisted to the root as well\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## Plug\'n\'Play. The strictest configuration\\n\\npnpm supports [Yarn\'s Plug\'n\'Play](https://yarnpkg.com/features/pnp) since v5.9. With PnP, both your application and the dependencies of your application will have access only to their declared dependencies. This is even stricter then setting `hoist=false` because inside a monorepo, your application will not be able to access even the dependencies of the root project.\\n\\nTo use Plug\'n\'Play, set these settings:\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## A strict, traditional modules directory\\n\\nIf you are not ready to use PnP yet, you can still be strict and only allow packages to access their own dependencies by setting the hoist configuration to false:\\n\\n```ini\\nhoist=false\\n```\\n\\nHowever, if some of your dependencies are trying to access packages that they don\'t have in dependencies, you have two options:\\n\\n1. Create a `pnpmfile.js` and use a [hook](/pnpmfile) to add the missing dependency to the package\'s manifest.\\n\\n2. Add a pattern to the `hoist-pattern` setting. For instance, if the not found module is `babel-core`, add the following setting to `.npmrc`:\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## The worst case - hoisting to the root\\n\\nSome tools might not work even with the default configuration of pnpm, which hoists everything to the root of the virtual store and some packages to the root. In this case, you can hoist either everything or a subset of dependencies to the root of the modules directory.\\n\\nHoisting everything to the root of node_modules:\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\nHoisting only packages that match a pattern:\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"/2020/05/27/flat-node-modules-is-not-the-only-way","metadata":{"permalink":"/ru/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://crowdin.com/project/pnpm/ru","source":"@site/i18n/ru/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"\u041f\u043b\u043e\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 node_modules \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c","description":"\u041d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 pnpm \u0447\u0430\u0441\u0442\u043e \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043c\u0435\u043d\u044f \u043e \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 node_modules \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0435\u0442 pnpm. \u041f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0430 \u043d\u0435 \u043f\u043b\u043e\u0441\u043a\u0430\u044f? \u0413\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u0441\u0435 \u043f\u043e\u0434-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438?","date":"2020-05-27T00:00:00.000Z","formattedDate":"27 \u043c\u0430\u044f 2020 \u0433.","tags":[],"readingTime":2.69,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"\u041f\u043b\u043e\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 node_modules \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"Node-Modules configuration options with pnpm","permalink":"/ru/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"\u041d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 pnpm \u0447\u0430\u0441\u0442\u043e \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043c\u0435\u043d\u044f \u043e \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 `node_modules` \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0435\u0442 pnpm. \u041f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0430 \u043d\u0435 \u043f\u043b\u043e\u0441\u043a\u0430\u044f? \u0413\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u0441\u0435 \u043f\u043e\u0434-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438?\\n\\n\x3c!--truncate--\x3e\\n\\n> \u042f \u043f\u0440\u0438\u043d\u044f\u043b \u0441\u0447\u0438\u0442\u0430\u0442\u044c, \u0447\u0442\u043e \u0447\u0438\u0442\u0430\u0442\u0435\u043b\u0438 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0438 \u0443\u0436\u0435 \u0445\u043e\u0440\u043e\u0448\u043e \u0437\u043d\u0430\u043a\u043e\u043c\u044b \u0441 \u043f\u043b\u043e\u0441\u043a\u043e\u0439 \u043f\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u043f\u0430\u043f\u043a\u043e\u0439 `node_modules`, \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0439 npm \u0438 Yarn. If you don\'t understand why npm 3 had to start using flat `node_modules` in v3, you can find some prehistory in [Why should we use pnpm?](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html).\\n\\nSo why is pnpm\'s `node_modules` unusual? Let\'s create two directories and run `npm add express` in one of them and `pnpm add express` in the other one. Here\'s the top of what you get in the first directory\'s `node_modules`:\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\nYou can see the whole directory [here](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules).\\n\\nAnd this is what you get in the `node_modules` created by pnpm:\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\nYou can check it [here](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules).\\n\\nSo where are all the dependencies? There is only one folder in the `node_modules` called `.pnpm` and a symlink called `express`. Well, we installed only `express`, so that is the only package that your application has to have access to\\n\\n> Read more about why pnpm\'s strictness is a good thing [here](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)\\n\\nLet\'s see what is inside `express`:\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n  .modules.yaml\\n```\\n\\n`express` has no `node_modules`? Where are all the dependencies of `express`?\\n\\nThe trick is that `express` is just a symlink. When Node.js resolves dependencies, it uses their real locations, so it does not preserve symlinks. But where is the real location of `express`, you might ask?\\n\\nHere: [node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express).\\n\\nOK, so now we know the purpose of the `.pnpm/` folder. `.pnpm/` stores all the packages in a flat folder structure, so every package can be found in a folder named by this pattern:\\n\\n```text\\n.pnpm/<name>@<version>/node_modules/<name>\\n```\\n\\nWe call it the virtual store directory.\\n\\nThis flat structure avoids the long path issues that were caused by the nested `node_modules` created by npm v2 but keeps packages isolated unlike the flat `node_modules` created by npm v3,4,5,6 or Yarn v1.\\n\\nNow let\'s look into the real location of `express`:\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\nIs it a scam? It still lacks `node_modules`! The second trick of pnpm\'s `node_modules` structure is that the dependencies of packages are on the same directory level on which the real location of the dependent package. So dependencies of `express` are not in `.pnpm/express@4.17.1/node_modules/express/node_modules/` but in [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules):\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\nAll the dependencies of `express` are symlinks to appropriate directories in `node_modules/.pnpm/`. Placing dependencies of `express` one level up allows avoiding circular symlinks.\\n\\nSo as you can see, even though pnpm\'s `node_modules` structure seems unusual at first:\\n\\n1. it is completely Node.js compatible\\n2. packages are nicely grouped with their dependencies\\n\\nThe structure is a little bit [more complex](/how-peers-are-resolved) for packages with peer dependencies but the idea is the same: using symlinks to create a nesting with a flat directory structure."}]}')}}]);