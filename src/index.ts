import {Router} from "express"
import { getPages } from "./functions/pages/getPages"
import { PagesArray, StagesArray } from "./types"

function pageIndex(pages: PagesArray, view: string) {
  return (req: any, res: any) => {
    res.render(view, { pages: pages })
  }
}

export = function govukPagesPlugin(pages: PagesArray, stages?: StagesArray) {

  const router = Router()
  router.get("/", pageIndex(getPages(pages), "page-index"))
  return router

} 