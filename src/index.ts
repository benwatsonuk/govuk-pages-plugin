// const getPages = require('./functions/common/getPages')

// // const getPages = require('./functions/common/getPages')
// // const renderPageIndex = require('./functions/pages/renderPageIndex')
// // const renderUserFlow = require('./functions/renderUserFlow')
// // const renderUserFlowPage = require('./functions/singlePage/renderPage')
// // const common = require('./functions/common')

// module.exports.getPages = getPages
// // module.exports.renderPageIndex = renderPageIndex
// // module.exports.getUserFlow = common.pageFlowFromUserFlow
// // module.exports.getUserFlowPage = common.getPageInfoForUserFlow
// // module.exports.renderUserFlow = renderUserFlow
// // module.exports.renderUserFlowPage = renderUserFlowPage

import { validatePageArray } from "./validate"
import { PluginConfig } from "./types"

export = function govukPagesPlugin(router: any, userConfig: unknown) {

  router.get("/my-plugin", (req, res) => {
    res.render("myPlugin/page", {
      steps: config.steps
    })
  })
}
