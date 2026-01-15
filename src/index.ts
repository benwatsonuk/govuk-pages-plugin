import {Router} from "express"
import { getPages } from "./functions/pages/getPages"
import { getStagesWithPages } from "./functions/stages/getStages"
import { PagesArray, StagesArray } from "./types"

/*--- UTILITIES (used by supplied routes AND made available to plugin users) ---*/

export const pageIndexData = (pages: PagesArray) => {
  return getPages(pages)
}

export const pageIndex = (pages: PagesArray, view: string) => {
  return (req: any, res: any) => {
    res.render(view, { pages: pages })
  }
}

export const stageIndexData = (stages: StagesArray, pages: PagesArray) => {
  return getStagesWithPages(stages, pages)
}

export const stageIndex = (pages: PagesArray, stages: StagesArray, pageType?: string) => {
  pageType = pageType || "stage-index"
  return (req: any, res: any) => {
    res.render(pageType, { stages: stageIndexData(stages, pages) })
  }
}

// Add user flows, etc here later

/*--- THE MAIN USER ROUTES ---*/

export const govukPagesPlugin = (pages: PagesArray, stages?: StagesArray, pageType?: string) => {
  pageType = pageType || "page-index"
  const router = Router()
  // This is the default offering from the plugin - it is expected that must users will use this. It should be robust
  router.get("/", pageIndex(pageIndexData(pages), pageType))
  return router

} 