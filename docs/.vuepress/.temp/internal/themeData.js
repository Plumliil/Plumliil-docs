export const themeData = JSON.parse("{\"logo\":\"https://s2.loli.net/2022/04/05/qa4sCStuDX5gyBb.png\",\"repo\":\"https://github.com/Plumliil/Plumliil-docs\",\"repoLabel\":\"GitHub\",\"navbar\":[{\"text\":\"首 页\",\"link\":\"/\"},{\"text\":\"指 南\",\"link\":\"/guide/\"},{\"text\":\"笔记文档\",\"children\":[{\"text\":\"基础\",\"children\":[{\"text\":\"JavaScript\",\"link\":\"/notes/JavaScript/\"},{\"text\":\"TypeScript\",\"link\":\"/notes/TypeScript/\"}]},{\"text\":\"框架\",\"children\":[{\"text\":\"React\",\"link\":\"/notes/React/\"},{\"text\":\"Vue\",\"link\":\"/notes/Vue/\"}]}]},{\"text\":\"生态系统\",\"children\":[{\"text\":\"Vue3.x\",\"link\":\"https://v3.cn.vuejs.org/\"},{\"text\":\"Vuepress\",\"link\":\"https://vuepress.vuejs.org/zh/\"}]},{\"text\":\"Blog\",\"link\":\"https://www.plumliil.eu.org\"}],\"sidebar\":{\"/notes/JavaScript/\":[{\"title\":\"JavaScript\",\"collapsable\":true,\"children\":[]},{\"collapsable\":true,\"children\":[\"/notes/JavaScript/basics\"]},{\"collapsable\":true,\"children\":[\"/notes/JavaScript/advance\"]}],\"/notes/TypeScript/\":[{\"title\":\"TypeScript\",\"collapsable\":true,\"children\":[]},{\"collapsable\":true,\"children\":[\"/notes/TypeScript/basics\"]},{\"collapsable\":true,\"children\":[\"/notes/TypeScript/advance\"]}],\"/notes/React/\":[{\"title\":\"React\",\"collapsable\":true,\"children\":[]},{\"collapsable\":true,\"children\":[\"/notes/React/basics\"]},{\"collapsable\":true,\"children\":[\"/notes/React/advance\"]}],\"/notes/Vue/\":[{\"title\":\"Vue\",\"collapsable\":true,\"children\":[]},{\"collapsable\":true,\"children\":[\"/notes/Vue/basics\"]},{\"collapsable\":true,\"children\":[\"/notes/Vue/advance\"]},{\"collapsable\":true,\"children\":[\"/notes/Vue/Vuex\"]},{\"collapsable\":true,\"children\":[\"/notes/Vue/VueRouter\"]}],\"/notes/Webpack/\":[{\"title\":\"Webpack\",\"collapsable\":true,\"children\":[]},{\"collapsable\":true,\"children\":[\"/notes/Webpack/basics\"]},{\"collapsable\":true,\"children\":[\"/notes/Webpack/advance\"]}],\"/notes/Linux/\":[{\"title\":\"Linux\",\"collapsable\":true,\"children\":[]},{\"collapsable\":true,\"children\":[\"/notes/Linux/basics\"]},{\"collapsable\":true,\"children\":[\"/notes/Linux/advance\"]}],\"/reference/components/\":[{\"title\":\"组件\",\"collapsable\":true,\"children\":[]},{\"children\":[\"/reference/components/button\"]},{\"collapsable\":true,\"children\":[\"/reference/components/input\"]},{\"collapsable\":true,\"children\":[\"/reference/components/space\"]},{\"collapsable\":true,\"children\":[\"/reference/components/textarea\"]},{\"collapsable\":true,\"children\":[\"/reference/components/select\"]},{\"collapsable\":true,\"children\":[\"/reference/components/radio\"]},{\"collapsable\":true,\"children\":[\"/reference/components/badge\"]}],\"/reference/plugins/\":[{\"title\":\"插件\",\"collapsable\":true,\"children\":[\"/reference/plugins/v_copy\",\"/reference/plugins/v_lazy_img\",\"/reference/plugins/v_replace_img\"]}],\"/reference/directives/\":[{\"title\":\"指令\",\"collapsable\":true},{\"children\":[\"/reference/directives/v_focus\"]},{\"children\":[\"/reference/directives/v_copy\"]},{\"children\":[\"/reference/directives/v_lazy_img\"]},{\"children\":[\"/reference/directives/v_replace_img\"]}]},\"editLink\":true,\"editLinkText\":\"更好想法?\",\"editLinkPattern\":\"https://github.com/Plumliil/Plumliil-docs/issues\",\"sidebarDepth\":2,\"lastUpdated\":true,\"lastUpdatedText\":\"更新时间\",\"contributors\":false,\"displayAllHeaders\":true,\"contributorsText\":\"贡献者\",\"notFound\":[\"这里什么都没有\",\"我们怎么到这来了？\",\"这是一个 404 页面\",\"看起来我们进入了错误的链接\"],\"backToHome\":\"返回首页\",\"openInNewWindow\":\"在新窗口打开\",\"toggleDarkMode\":\"切换夜间模式\",\"toggleSidebar\":\"切换侧边栏\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"toggleColorMode\":\"toggle color mode\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
