export const data = JSON.parse("{\"key\":\"v-d18f380a\",\"path\":\"/notes/JavaScript/\",\"title\":\"Hello JS\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":null},\"filePathRelative\":\"notes/JavaScript/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}