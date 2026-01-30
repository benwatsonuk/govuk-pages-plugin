import {Router} from "express"
import { getPages } from "./functions/pages/getPages"
import { getStagesWithPages } from "./functions/stages/getStages"
import { getFlows } from "./functions/flows/getFlows"
import { PagesArray, StagesArray, PageFlowArray, PageOutput } from "./types"

/*--- UTILITIES (used by supplied routes AND made available to plugin users) ---*/

// Omni page (all available views in tabs)
export const omniPage = (pages: PagesArray, stages?: StagesArray, flows?: PageFlowArray) => {
  if (stages && flows) {
    return (req: any, res: any) => {
      res.render("omni-page", { pages: pageIndexData(pages), stages: stageIndexData(stages, pages), ...flowIndexData(flows, pages, stages) })
    }
  } else if (stages) {
    return (req: any, res: any) => {
      res.render("omni-page", { pages: pageIndexData(pages), stages: stageIndexData(stages, pages) })
    }
  } else if (flows) {
    return (req: any, res: any) => {
      res.render("omni-page", { pages: pageIndexData(pages), ...flowIndexData(flows, pages) })
    }
  } else {
    return (req: any, res: any) => {
      res.render("omni-page", { pages: pageIndexData(pages) })
    }
  }
}

// Single Page Overview 
export const pageOverviewData = (pageId: number, pages: PagesArray): PageOutput | undefined => {
  const pagesData = getPages(pages)
  return pagesData.find(page => pageId === page.id)
}

export const pageOverview = (pageId: number, pages: PagesArray, req: any, res: any) => {
  const page = pages.find(p => p.id === pageId);
  if (!page) {
    return res.status(404).render("page-overview", {noPage: true});
  }
  res.render("page-overview", { page });
}

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
    res.render(pageType, { ...flowIndexData(flows, pages, stages) })
  }
}

// Add user flows, etc here later

/*--- THE MAIN USER ROUTES ---*/

export const govukPagesPlugin = (pages: PagesArray, stages?: StagesArray, flows?: PageFlowArray, pageType?: string) => {
  pageType = pageType || "page-index" // Options can be 'all', 'page-index', 'stage-index' - in future could be 'user-flow-index', etc
  const router = Router()
  // This is the default offering from the plugin - it is expected that must users will use this. It should be robust
  router.get("/", omniPage(pages, stages, flows))
  return router
} 