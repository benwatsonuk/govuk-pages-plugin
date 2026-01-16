import {Router} from "express"
import { getPages } from "./functions/pages/getPages"
import { getStagesWithPages } from "./functions/stages/getStages"
import { getFlows } from "./functions/flows/getFlows"
import { PagesArray, StagesArray, PageFlowArray } from "./types"

/*--- UTILITIES (used by supplied routes AND made available to plugin users) ---*/

// Pages
export const pageIndexData = (pages: PagesArray) => {
  return getPages(pages)
}

export const pageIndex = (pages: PagesArray, pageType: string) => {
  pageType = pageType || "page-index"
  return (req: any, res: any) => {
    res.render(pageType, { pages: pages })
  }
}

// Stages
export const stageIndexData = (stages: StagesArray, pages: PagesArray) => {
  return getStagesWithPages(stages, pages)
}

export const stageIndex = (stages: StagesArray, pages: PagesArray, pageType?: string) => {
  pageType = pageType || "stage-index"
  return (req: any, res: any) => {
    res.render(pageType, { stages: stageIndexData(stages, pages) })
  }
}

// Flows 
export const flowIndexData = (flows: PageFlowArray, pages: PagesArray, stages?: StagesArray) => {
  return stages ? getFlows(flows, pages, stages) :  getFlows(flows, pages)
}

export const flowIndex = (flows: PageFlowArray, pages: PagesArray, stages?: StagesArray, pageType?: string) => {
  pageType = pageType || "flow-index"
  return (req: any, res: any) => {
    res.render(pageType, { flows: flowIndexData(flows, pages, stages) })
  }
}

// Add user flows, etc here later

/*--- THE MAIN USER ROUTES ---*/

export const govukPagesPlugin = (pages: PagesArray, stages?: StagesArray, pageType?: string) => {
  pageType = pageType || "page-index" // Options can be 'all', 'page-index', 'stage-index' - in future could be 'user-flow-index', etc
  const router = Router()
  // This is the default offering from the plugin - it is expected that must users will use this. It should be robust
  router.get("/", pageIndex(pageIndexData(pages), pageType))
  return router
} 