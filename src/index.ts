import { getPages } from "./functions/pages/getPages"
import { PagesArray, StagesArray } from "./types"
export = function govukPagesPlugin(router: any, pages: PagesArray, stages?: StagesArray) {

  router.get("/pages", (req: any, res: any) => {
    res.render("page-index", {
      pages: getPages(pages)
    })
  })
} 