webpackJsonp([9],{eowj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-toolbar",{attrs:{color:"pink",dark:""}},[n("v-toolbar-title",[t._v("Vuex学习心得")]),t._v(" "),n("v-spacer")],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-alert",{attrs:{type:"info",value:!0}},[t._v("\n\t      Vuex概念： Vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。\n\t    ")])],1),t._v(" "),n("v-flex",{attrs:{xs12:"","offset-xs1":""}},[n("v-card",[n("v-toolbar",{attrs:{color:"teal",dark:""}},[n("v-toolbar-title",{staticClass:"text-xs-center"},[t._v("什么是状态管理模式？")])],1),t._v(" "),n("v-list",{attrs:{subheader:""}},t._l(t.items,function(e,o){return n("v-list-tile",{key:e.title,attrs:{avatar:""},on:{click:function(t){}}},[n("v-list-tile-content",{staticClass:"pl-4"},[n("v-list-tile-title",[t._v(t._s(o+1)+". "+t._s(e.title))])],1)],1)})),t._v(" "),n("v-divider"),t._v(" "),n("v-subheader",[t._v("以下是一个表示 “单向数据流“理念的极简示意图")])],1)],1),t._v(" "),n("v-flex",{staticClass:"mt-1",attrs:{xs12:"",sm6:"","offset-xs1":""}},[n("v-card",[n("v-card-media",{attrs:{src:"https://vuex.vuejs.org/zh-cn/images/flow.png",height:"400px"}})],1)],1),t._v(" "),n("v-flex",{staticClass:"mt-1",attrs:{xs12:"","offset-xs1":""}},[n("v-alert",{attrs:{type:"warning",value:!0}},[t._v("\n\t\t      注意： 但是，当我们的应用遇到多个组件共享状态时,单项数据流的简洁性很容易破坏：\n\t\t    ")]),t._v(" "),n("v-list",{attrs:{subheader:""}},[n("v-list-tile",{attrs:{avatar:""},on:{click:function(t){}}},[n("v-list-tile-content",{staticClass:"pl-4"},[n("v-list-tile-title",[t._v("问题1:多个视图依赖于同一状态。")])],1)],1),t._v(" "),n("v-list-tile",{attrs:{avatar:""},on:{click:function(t){}}},[n("v-list-tile-content",{staticClass:"pl-4"},[n("v-list-tile-title",[t._v(" 问题2:来自不同视图的行为需要变更同一状态。")])],1)],1)],1),t._v(" "),n("v-alert",{attrs:{type:"info",value:!0}},[t._v("\n\t     因此我们需要把组件的共享状态抽取出来，以一个全局单例模式管理，在这种模式下，我们组件树构成了一个巨大的”视图“，不管在树的哪个位置，任何组件都能获取状态或者触发行为！\n\t    ")]),t._v(" "),n("v-alert",{attrs:{type:"info",value:!0}},[t._v("\n\t    通过定义和隔离状态管理中的各种概念并强制遵守一定的规则，我们的代码将会变得更结构化且易维护。这就是 Vuex 背后的基本思想，借鉴了 Flux、Redux、和 The Elm Architecture。与其他模式不同的是，Vuex 是专门为 Vue.js 设计的状态管理库，以利用 Vue.js 的细粒度数据响应机制来进行高效的状态更新。\n\t  ")]),t._v(" "),n("v-card",[n("v-card-media",{attrs:{src:"https://vuex.vuejs.org/zh-cn/images/vuex.png",height:"700px"}})],1),t._v(" "),n("v-toolbar",{attrs:{color:"teal",dark:""}},[n("v-toolbar-title",{staticClass:"text-xs-center"},[t._v("什么情况下我应该使用 Vuex？")])],1),t._v(" "),n("v-alert",{attrs:{type:"success",value:!0}},[t._v("\n        如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 global event bus 就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。\n      ")]),t._v(" "),n("v-toolbar",{attrs:{color:"teal",dark:""}},[n("v-toolbar-title",{staticClass:"text-xs-center"},[t._v("安装Vuex")])],1),t._v(" "),n("v-list",{attrs:{"two-line":""}},[[n("v-subheader",[n("code",{staticClass:"mr-2"},[t._v("npm install vuex --save ")]),t._v(" "),n("code",[t._v("yarn add vuex")])])],t._v(" "),n("v-alert",{attrs:{type:"info",value:!0}},[t._v("在store/index.js文件中引用vuex文件 并且使用use使用vuex")]),t._v(" "),[n("v-subheader",[n("code",{staticClass:"mr-2"},[t._v("import Vue from 'vue'")]),t._v(" "),n("code",{staticClass:"mr-2"},[t._v("import Vuex from 'vuex'")]),t._v(" "),n("code",[t._v("Vue.use(Vuex)")])])]],2),t._v(" "),n("v-toolbar",{attrs:{color:"teal",dark:""}},[n("v-toolbar-title",{staticClass:"text-xs-center"},[t._v("Vuex核心概念")])],1),t._v(" "),n("v-list",[n("v-list-tile",[n("v-btn",{attrs:{color:"info"}},[t._v("State")]),t._v(" "),n("v-btn",{attrs:{color:"info"}},[t._v("Getter")]),t._v(" "),n("v-btn",{attrs:{color:"info"}},[t._v("Mutation")]),t._v(" "),n("v-btn",{attrs:{color:"info"}},[t._v("Action")]),t._v(" "),n("v-btn",{attrs:{color:"info"}},[t._v("Module")])],1)],1)],1),t._v(" "),n("v-container",{attrs:{fluid:"","grid-list-sm":"","offset-sm-1":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.codeDatas,function(e,o){return n("v-flex",{key:o,attrs:{"d-flex":"",xs12:""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{"d-flex":""}},[n("v-card",{attrs:{color:"blue-grey",dark:"",tile:"",flat:""}},[n("v-card-text",[n("v-alert",{attrs:{type:"info",value:!0}},[n("v-btn",{attrs:{color:"indigo"}},[t._v(t._s(e.word))]),t._v(t._s(e.title)+"\n    \t \t\t\t\t")],1),t._v(" "),t._l(e.codes,function(o,s){return n("div",[n("p",[t._v(t._s(o.subtitle))]),t._v(" "),o.code?n("codemirror",{attrs:{value:o.code}}):t._e(),t._v(" "),e.supplement?n("v-alert",{attrs:{type:"warning",value:!0}},[t._v("\n    \t \t\t\t\t\t\t"+t._s(e.supplement)+"\n    \t \t\t\t\t")]):t._e()],1)}),t._v(" "),t._l(e.subWord,function(e,o){return n("div",{key:o},[n("v-alert",{attrs:{type:"info",value:!0}},[e.title?n("v-btn",{attrs:{color:"indigo"}},[t._v(t._s(e.title))]):t._e(),t._v(t._s(e.subtitle)+"\n    \t \t\t\t\t")],1),t._v(" "),e.subcode?n("codemirror",{attrs:{value:e.subcode}}):t._e(),t._v(" "),e.supplement?n("v-alert",{attrs:{type:"warning",value:!0}},[t._v("\n    \t \t\t\t\t\t\t"+t._s(e.supplement)+"\n    \t \t\t\t\t")]):t._e()],1)})],2)],1)],1)],1)],1)}))],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-toolbar",{attrs:{color:"teal",dark:""}},[n("v-toolbar-title",{staticClass:"text-xs-center"},[t._v("项目结构")])],1),t._v(" "),n("v-list",{attrs:{subheader:""}},t._l(t.vuexRules,function(e,o){return n("v-list-tile",{key:e.title,attrs:{avatar:""},on:{click:function(t){}}},[n("v-list-tile-content",{staticClass:"pl-4"},[n("v-list-tile-title",[t._v(t._s(o+1)+". "+t._s(e.title))])],1)],1)})),t._v(" "),n("v-divider")],1),t._v(" "),n("v-card",{attrs:{color:"blue-grey",dark:"",tile:"",flat:""}},[n("v-card-text",[n("v-alert",{attrs:{type:"info",value:!0}},[t._v("\n\n    \t \t\t\t\t\t只要你遵守以上规则，如何组织代码随你便。如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。\n    \t \t\t\t\t")]),t._v(" "),n("v-alert",{attrs:{type:"warning",value:!0}},[t._v("\n    \t \t\t\t\t对于大型应用，我们会希望把 Vuex 相关代码分割到模块中。下面是项目结构示例：\n    \t \t\t\t")]),t._v(" "),n("codemirror",{attrs:{value:t.ruleCode}})],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-toolbar",{attrs:{color:"teal",dark:""}},[n("v-toolbar-title",{staticClass:"text-xs-center"},[t._v("路由懒加载")])],1),t._v(" "),n("v-card-text",[n("v-alert",{attrs:{type:"info",value:!0}},[t._v("\n\n    \t \t\t\t\t\t当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。\n    \t \t\t\t\t")]),t._v(" "),n("v-alert",{attrs:{type:"warning",value:!0}},[t._v("\n    \t \t\t\t\t结合 Vue 的异步组件和 Webpack 的代码分割功能，轻松实现路由组件的懒加载。\n    \t \t\t\t")]),t._v(" "),n("codemirror",{attrs:{value:"const Foo = () => Promise.resolve({ /* 组件定义对象 */ })"}}),t._v(" "),n("v-alert",{attrs:{type:"info",value:!0}},[t._v("\n      \t\t\t\t\t\t\t第二，在 Webpack 2 中，我们可以使用动态 import语法来定义代码分块点 (split point)：\n      \t\t\t\t\t")]),t._v(" "),n("codemirror",{attrs:{value:"import('./Foo.vue') // 返回 Promise"}}),t._v(" "),n("v-alert",{attrs:{type:"warning",value:!0}},[t._v("\n    \t \t\t\t\t注意：如果您使用的是 Babel，你将需要添加 syntax-dynamic-import 插件，才能使 Babel 可以正确地解析语法。合 Vue 的异步组件和 Webpack 的代码分割功能，轻松实现路由组件的懒加载。\n    \t \t\t\t")]),t._v(" "),n("v-alert",{attrs:{type:"info",value:!0}},[t._v("\n    \t \t\t\t\t结合这两者，这就是如何定义一个能够被 Webpack 自动代码分割的异步组件。\n    \t \t\t\t")]),t._v(" "),n("codemirror",{attrs:{value:"const Foo = () => import('./Foo.vue')"}}),t._v(" "),n("v-alert",{attrs:{type:"info",value:!0}},[t._v("\n    \t \t\t\t\t在路由配置中什么都不需要改变，只需要像往常一样使用 Foo：\n    \t \t\t\t")]),t._v(" "),n("codemirror",{attrs:{value:"const router = new VueRouter({\n\t\t\t\t  routes: [\n\t\t\t\t    { path: '/foo', component: Foo }\n\t\t\t\t  ]\n\t\t\t\t})"}})],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-toolbar",{attrs:{color:"teal",dark:""}},[n("v-toolbar-title",{staticClass:"text-xs-center"},[t._v("把组件按组分块")])],1),t._v(" "),n("v-card-text",[n("v-alert",{attrs:{type:"info",value:!0}},[t._v("\n\n    \t \t\t\t\t\t有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。\n    \t \t\t\t\t")]),t._v(" "),n("codemirror",{attrs:{value:"const Foo = () => import(/* webpackChunkName: 'group-foo' */ './Foo.vue')\n\t\t\t\tconst Bar = () => import(/* webpackChunkName: 'group-foo' */ './Bar.vue')\n\t\t\t\tconst Baz = () => import(/* webpackChunkName: 'group-foo' */ './Baz.vue')\n\t\t\t"}}),t._v(" "),n("v-alert",{attrs:{type:"warning",value:!0}},[t._v("\n    \t \t\t\t\tWebpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。\n    \t \t\t\t")])],1)],1)],1)],1)},staticRenderFns:[]},s=n("VU/8")({data:function(){return{items:[{active:!0,title:"state,驱动应用的数据源"},{active:!0,title:"view,以声明方式将state映射到视图"},{title:"actions,响应式在view上的用户输入导致的状态变化"}],vuexRules:[{active:!0,title:"应用层级的状态应该集中到单个 store 对象中。"},{active:!0,title:"提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。"},{title:"异步逻辑都应该封装到 action 里面。"}],ruleCode:"\n\t\t\t\t├── index.html\n\t\t\t\t├── main.js\n\t\t\t\t├── api\n\t\t\t\t│   └── ... # 抽取出API请求\n\t\t\t\t├── components\n\t\t\t\t│   ├── App.vue\n\t\t\t\t│   └── ...\n\t\t\t\t└── store\n\t\t\t\t    ├── index.js          # 我们组装模块并导出 store 的地方\n\t\t\t\t    ├── actions.js        # 根级别的 action\n\t\t\t\t    ├── mutations.js      # 根级别的 mutation\n\t\t\t\t    └── modules\n\t\t\t\t        ├── cart.js       # 购物车模块\n\t\t\t\t        └── products.js   # 产品模块\n\t\t\t\t\t",codeDatas:[{word:"State",title:"单一状态树，即Vuex中的基本数据。用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。\n",codes:[{subtitle:"我们可以通过Vue的computed获得Vuex的state，如下：",code:"const store = new Vuex.Store({\n\t\t\t\t\t\t\t\t\t\t    state: {\n\t\t\t\t\t\t\t\t\t\t        count:0\n\t\t\t\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t\tconst app = new Vue({\n\t\t\t\t\t\t\t\t\t\t    //..\n\t\t\t\t\t\t\t\t\t\t    store,\n\t\t\t\t\t\t\t\t\t\t    computed: {\n\t\t\t\t\t\t\t\t\t\t        count: function(){\n\t\t\t\t\t\t\t\t\t\t            return this.$store.state.count\n\t\t\t\t\t\t\t\t\t\t        }\n\t\t\t\t\t\t\t\t\t\t    },\n\t\t\t\t\t\t\t\t\t\t    //..\n\t\t\t\t\t\t\t\t\t\t})"}],subWord:[{title:"mapState辅助函数",subtitle:"当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键。",subcode:"// 在单独构建的版本中辅助函数为 Vuex.mapState\n\t\t\t\t\timport { mapState } from 'vuex'\n\n\t\t\t\t\texport default {\n\t\t\t\t\t  // ...\n\t\t\t\t\t  computed: mapState({\n\t\t\t\t\t    // 箭头函数可使代码更简练\n\t\t\t\t\t    count: state => state.count,\n\n\t\t\t\t\t    // 传字符串参数 'count' 等同于 'state => state.count'\n\t\t\t\t\t    countAlias: 'count',\n\n\t\t\t\t\t    // 为了能够使用 'this' 获取局部状态，必须使用常规函数\n\t\t\t\t\t    countPlusLocalState (state) {\n\t\t\t\t\t      return state.count + this.localCount\n\t\t\t\t\t    }\n\t\t\t\t\t  })\n\t\t\t\t\t}\n\t\t\t\t"}],supplement:"每当 store.state.count 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。"},{word:"Getters",title:"即从store的state中派生出的状态。",codes:[{subtitle:"getters接收state作为其第一个参数，接受其他 getters 作为第二个参数，如不需要，第二个参数可以省略如下例子：",code:"const store = new Vuex.Store({\n\t\t\t\t\t\t\t    state: {\n\t\t\t\t\t\t\t        count:0\n\t\t\t\t\t\t\t    }，\n\t\t\t\t\t\t\t    getters: {\n\t\t\t\t\t\t\t        // 单个参数\n\t\t\t\t\t\t\t        countDouble: function(state){\n\t\t\t\t\t\t\t            return state.count * 2\n\t\t\t\t\t\t\t        },\n\t\t\t\t\t\t\t        // 两个参数\n\t\t\t\t\t\t\t        countDoubleAndDouble: function(state, getters) {\n\t\t\t\t\t\t\t            return getters.countDouble * 2\n\t\t\t\t\t\t\t        }\n\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t"},{subtitle:"与state一样，我们也可以通过Vue的Computed获得Vuex的getters。",code:"const app = new Vue({\n\t\t\t\t\t    //..\n\t\t\t\t\t    store,\n\t\t\t\t\t    computed: {\n\t\t\t\t\t        count: function(){\n\t\t\t\t\t            return this.$store.state.count\n\t\t\t\t\t        },\n\t\t\t\t\t        countDouble: function(){\n\t\t\t\t\t            return this.$store.getters.countDouble\n\t\t\t\t\t        },\n\t\t\t\t\t        countDoubleAndDouble: function(){\n\t\t\t\t\t            return this.$store.getters.countDoubleAndDouble\n\t\t\t\t\t        }\n\t\t\t\t\t    },\n\t\t\t\t\t    //..\n\t\t\t\t\t})"}],subWord:[{title:"mapGetters 辅助函数",subtitle:"mapGetters 辅助函数仅仅是将 store 中的 getters 映射到局部计算属性，与state类似",subcode:"import { mapGetters } from 'vuex'\n\t\t\t\t\t\t\t\t\texport default {\n\t\t\t\t\t\t\t\t\t  // ...\n\t\t\t\t\t\t\t\t\t  computed: {\n\t\t\t\t\t\t\t\t\t  // 使用对象展开运算符将 getters 混入 computed 对象中\n\t\t\t\t\t\t\t\t\t    ...mapGetters([\n\t\t\t\t\t\t\t\t\t      'countDouble',\n\t\t\t\t\t\t\t\t\t      'CountDoubleAndDouble',\n\t\t\t\t\t\t\t\t\t      //..\n\t\t\t\t\t\t\t\t\t    ])\n\t\t\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t"},{subtitle:"如果你想将一个 getter 属性另取一个名字，使用对象形式：",subcode:"mapGetters({\n\t\t\t\t\t  // 映射 this.double 为 store.getters.countDouble\n\t\t\t\t\t  double: 'countDouble'\n\t\t\t\t\t})\n\t\t\t\t\t\t\t\t"}]},{word:"Mutations",title:"提交mutation是更改Vuex中的store中的状态的唯一方法。",codes:[{subtitle:"更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数,提交载荷作为第二个参数。（提交荷载在大多数情况下应该是一个对象）,提交荷载也可以省略的。",code:"const store = new Vuex.Store({\n\t\t\t\t\t\t\t\t\t\t\t\t  state: {\n\t\t\t\t\t\t\t\t\t\t\t\t    count: 1\n\t\t\t\t\t\t\t\t\t\t\t\t  },\n\t\t\t\t\t\t\t\t\t\t\t\t  mutations: {\n\t\t\t\t\t\t\t\t\t\t\t\t    //无提交荷载\n\t\t\t\t\t\t\t\t\t\t\t\t    increment(state) {\n\t\t\t\t\t\t\t\t\t\t\t\t        state.count++\n\t\t\t\t\t\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t\t\t\t\t\t    //提交荷载\n\t\t\t\t\t\t\t\t\t\t\t\t    increment(state, obj) {\n\t\t\t\t\t\t\t\t\t\t\t\t      state.count += obj.n\n\t\t\t\t\t\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t\t\t\t\t\t\t})"},{subtitle:"你不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。”要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法：",code:"//无提交荷载\n\t\t\t\t\t\t\t\t\t\t\tstore.commit('increment')\n\t\t\t\t\t\t\t\t\t\t\t//提交荷载\n\t\t\t\t\t\t\t\t\t\t\tstore.commit('increment', {\n\t\t\t\t\t\t\t\t\t\t\t    n: 100\n\t\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t\t"},{subtitle:"在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读：",code:"// ...\n\t\t\t\t\t\t\t\t\t\tstore.commit({\n\t\t\t\t\t\t\t\t\t\t  type: 'increment',\n\t\t\t\t\t\t\t\t\t\t  n: 10\n\t\t\t\t\t\t\t\t\t\t})"},{subtitle:"当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数，因此 handler 保持不变：",code:"mutations: {\n\t\t\t\t\t\t\t\t\t\t  increment (state, payload) {\n\t\t\t\t\t\t\t\t\t\t    state.count += payload.amount\n\t\t\t\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t\t\t\t\t}"},{subtitle:"使用常量替代 Mutation 事件类型--使用常量替代 mutation 事件类型在各种 Flux 实现中是很常见的模式。这样可以使 linter 之类的工具发挥作用，同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然：",code:"// mutation-types.js\n\t\t\t\t\texport const SOME_MUTATION = 'SOME_MUTATION'\n\t\t\t\t\t// store.js\n\t\t\t\t\timport Vuex from 'vuex'\n\t\t\t\t\timport { SOME_MUTATION } from './mutation-types'\n\n\t\t\t\t\tconst store = new Vuex.Store({\n\t\t\t\t\t  state: { ... },\n\t\t\t\t\t  mutations: {\n\t\t\t\t\t    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名\n\t\t\t\t\t    [SOME_MUTATION] (state) {\n\t\t\t\t\t      // mutate state\n\t\t\t\t\t    }\n\t\t\t\t\t  }\n\t\t\t\t\t})\n\t\t\t\t"}],subWord:[{title:"在组件中提交 Mutation",subtitle:"你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。\n\n",subcode:"import { mapMutations } from 'vuex'\n\n\t\t\t\t\texport default {\n\t\t\t\t\t  // ...\n\t\t\t\t\t  methods: {\n\t\t\t\t\t    ...mapMutations([\n\t\t\t\t\t      'increment', // 将 'this.increment()' 映射为 'this.$store.commit('increment')'\n\n\t\t\t\t\t      // 'mapMutations' 也支持载荷：\n\t\t\t\t\t      'incrementBy' // 将 'this.incrementBy(amount)' 映射为 'this.$store.commit('incrementBy', amount)'\n\t\t\t\t\t    ]),\n\t\t\t\t\t    ...mapMutations({\n\t\t\t\t\t      add: 'increment' // 将 'this.add()' 映射为 'this.$store.commit('increment')'\n\t\t\t\t\t    })\n\t\t\t\t\t  }\n\t\t\t\t\t}"}]},{word:"Action",title:"Action 类似于 mutation，不同在于：",codes:[{subtitle:"Action 提交的是 mutation，而不是直接变更状态。\n\t\t\t\t\t\t\t\t\t\t\t\t\tAction 可以包含任意异步操作。让我们来注册一个简单的 action：",code:"const store = new Vuex.Store({\n\t\t\t\t\t\t\t\t\t\t\t\t\t  state: {\n\t\t\t\t\t\t\t\t\t\t\t\t\t    count: 0\n\t\t\t\t\t\t\t\t\t\t\t\t\t  },\n\t\t\t\t\t\t\t\t\t\t\t\t\t  mutations: {\n\t\t\t\t\t\t\t\t\t\t\t\t\t    increment (state) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t      state.count++\n\t\t\t\t\t\t\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t\t\t\t\t\t\t  },\n\t\t\t\t\t\t\t\t\t\t\t\t\t  actions: {\n\t\t\t\t\t\t\t\t\t\t\t\t\t    increment (context) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t      context.commit('increment')\n\t\t\t\t\t\t\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t\t\t\t"},{subtitle:"Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了。"},{subtitle:"分发actions Action 通过 store.dispatch 方法触发：",code:"store.dispatch('increment')"}],subWord:[{title:"其他与mutations类似的地方",subtitle:"Actions 支持同样的载荷方式和对象方式进行分发：",subcode:"// 以载荷形式分发\n\t\t\t\t\t\t\t\t\t\tstore.dispatch('increment', {\n\t\t\t\t\t\t\t\t\t\t  n: 10\n\t\t\t\t\t\t\t\t\t\t})\n\n\t\t\t\t\t\t\t\t\t\t// 以对象形式分发\n\t\t\t\t\t\t\t\t\t\tstore.dispatch({\n\t\t\t\t\t\t\t\t\t\t  type: 'increment',\n\t\t\t\t\t\t\t\t\t\t  n: 10\n\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t"},{subtitle:"来看一个更加实际的购物车示例，涉及到调用异步 API 和分发多重 mutation：",subcode:"actions: {\n\t\t\t\t\t  checkout ({ commit, state }, products) {\n\t\t\t\t\t    // 把当前购物车的物品备份起来\n\t\t\t\t\t    const savedCartItems = [...state.cart.added]\n\t\t\t\t\t    // 发出结账请求，然后乐观地清空购物车\n\t\t\t\t\t    commit(types.CHECKOUT_REQUEST)\n\t\t\t\t\t    // 购物 API 接受一个成功回调和一个失败回调\n\t\t\t\t\t    shop.buyProducts(\n\t\t\t\t\t      products,\n\t\t\t\t\t      // 成功操作\n\t\t\t\t\t      () => commit(types.CHECKOUT_SUCCESS),\n\t\t\t\t\t      // 失败操作\n\t\t\t\t\t      () => commit(types.CHECKOUT_FAILURE, savedCartItems)\n\t\t\t\t\t    )\n\t\t\t\t\t  }\n\t\t\t\t\t}\n\t\t\t\t",supplement:"注意我们正在进行一系列的异步操作，并且通过提交 mutation 来记录 action 产生的副作用（即状态变更）。"},{title:"在组件中分发 Action",subtitle:"你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：",subcode:"import { mapActions } from 'vuex'\n\n\t\t\t\t\texport default {\n\t\t\t\t\t  // ...\n\t\t\t\t\t  methods: {\n\t\t\t\t\t    ...mapActions([\n\t\t\t\t\t      'increment', // 将 'this.increment()' 映射为 'this.$store.dispatch('increment')'\n\n\t\t\t\t\t      // 'mapActions' 也支持载荷：\n\t\t\t\t\t      'incrementBy' // 将 'this.incrementBy(amount)' 映射为 'this.$store.dispatch('incrementBy', amount)'\n\t\t\t\t\t    ]),\n\t\t\t\t\t    ...mapActions({\n\t\t\t\t\t      add: 'increment' // 将 'this.add()' 映射为 'this.$store.dispatch('increment')'\n\t\t\t\t\t    })\n\t\t\t\t\t  }\n\t\t\t\t\t}\n\t\t\t\t"},{title:"组合 Action",subtitle:"Action 通常是异步的，那么如何知道 action 什么时候结束呢？更重要的是，我们如何才能组合多个 action，以处理更加复杂的异步流程？\n          \t\t\t首先，你需要明白 store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise：",subcode:"actions: {\n\t\t\t\t\t\t\t\t\t  actionA ({ commit }) {\n\t\t\t\t\t\t\t\t\t    return new Promise((resolve, reject) => {\n\t\t\t\t\t\t\t\t\t      setTimeout(() => {\n\t\t\t\t\t\t\t\t\t        commit('someMutation')\n\t\t\t\t\t\t\t\t\t        resolve()\n\t\t\t\t\t\t\t\t\t      }, 1000)\n\t\t\t\t\t\t\t\t\t    })\n\t\t\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t\t\t\t}"},{subtitle:"现在你可以：",subcode:"store.dispatch('actionA').then(() => {\n\t\t\t\t\t\t\t\t\t\t\t  // ...\n\t\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t\t"},{subtitle:"在另外一个 action 中也可以：",subcode:"actions: {\n\t\t\t\t\t  // ...\n\t\t\t\t\t  actionB ({ dispatch, commit }) {\n\t\t\t\t\t    return dispatch('actionA').then(() => {\n\t\t\t\t\t      commit('someOtherMutation')\n\t\t\t\t\t    })\n\t\t\t\t\t  }\n\t\t\t\t\t}\t\t"},{subtitle:"最后，如果我们利用 async / await，我们可以如下组合 action：",subcode:"// 假设 getData() 和 getOtherData() 返回的是 Promise\n\n\t\t\t\t\tactions: {\n\t\t\t\t\t  async actionA ({ commit }) {\n\t\t\t\t\t    commit('gotData', await getData())\n\t\t\t\t\t  },\n\t\t\t\t\t  async actionB ({ dispatch, commit }) {\n\t\t\t\t\t    await dispatch('actionA') // 等待 actionA 完成\n\t\t\t\t\t    commit('gotOtherData', await getOtherData())\n\t\t\t\t\t  }\n\t\t\t\t\t}\n\t\t\t\t",supplement:"一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。"}]},{word:"Module",title:"由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。",codes:[{subtitle:"为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：",code:"const moduleA = {\n\t\t\t\t\t\t\t\t\t\t  state: { ... },\n\t\t\t\t\t\t\t\t\t\t  mutations: { ... },\n\t\t\t\t\t\t\t\t\t\t  actions: { ... },\n\t\t\t\t\t\t\t\t\t\t  getters: { ... }\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\tconst moduleB = {\n\t\t\t\t\t\t\t\t\t\t  state: { ... },\n\t\t\t\t\t\t\t\t\t\t  mutations: { ... },\n\t\t\t\t\t\t\t\t\t\t  actions: { ... }\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\tconst store = new Vuex.Store({\n\t\t\t\t\t\t\t\t\t\t  modules: {\n\t\t\t\t\t\t\t\t\t\t    a: moduleA,\n\t\t\t\t\t\t\t\t\t\t    b: moduleB\n\t\t\t\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t\t\t\t\t})\n\n\t\t\t\t\t\t\t\t\t\tstore.state.a // -> moduleA 的状态\n\t\t\t\t\t\t\t\t\t\tstore.state.b // -> moduleB 的状态"}],subWord:[{title:"模块的局部状态",subtitle:"对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。",subcode:"const moduleA = {\n\t\t\t\t\t  state: { count: 0 },\n\t\t\t\t\t  mutations: {\n\t\t\t\t\t    increment (state) {\n\t\t\t\t\t      // 这里的 'state' 对象是模块的局部状态\n\t\t\t\t\t      state.count++\n\t\t\t\t\t    }\n\t\t\t\t\t  },\n\n\t\t\t\t\t  getters: {\n\t\t\t\t\t    doubleCount (state) {\n\t\t\t\t\t      return state.count * 2\n\t\t\t\t\t    }\n\t\t\t\t\t  }\n\t\t\t\t\t}"},{subtitle:"同样，对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：",subcode:"const moduleA = {\n\t\t\t\t\t\t\t\t\t  // ...\n\t\t\t\t\t\t\t\t\t  actions: {\n\t\t\t\t\t\t\t\t\t    incrementIfOddOnRootSum ({ state, commit, rootState }) {\n\t\t\t\t\t\t\t\t\t      if ((state.count + rootState.count) % 2 === 1) {\n\t\t\t\t\t\t\t\t\t        commit('increment')\n\t\t\t\t\t\t\t\t\t      }\n\t\t\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t"},{subtitle:"对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：",subcode:"const moduleA = {\n\t\t\t\t\t\t\t\t  // ...\n\t\t\t\t\t\t\t\t  getters: {\n\t\t\t\t\t\t\t\t    sumWithRootCount (state, getters, rootState) {\n\t\t\t\t\t\t\t\t      return state.count + rootState.count\n\t\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t"}]}]}}},o,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=9.e22004e9313dd99c0bd7.js.map