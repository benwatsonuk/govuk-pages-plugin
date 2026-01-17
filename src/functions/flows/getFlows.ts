import { PageFlowArray, PagesArray, StagesArray } from "../../types"
import { validatePageFlowArray, validatePagesArray, validateStagesArray } from "../../validate"

export const getFlows = (flows: PageFlowArray, pages: PagesArray, stages?: StagesArray) => {
  const validatedPageFlows = validatePageFlowArray(flows)
  const validatedPages = validatePagesArray(pages)
  if (stages) {
    const validatedStages = validateStagesArray(stages)
    return mapPagesToFlow(validatedPageFlows, validatedPages, validatedStages)
  }
  return mapPagesToFlow(validatedPageFlows, validatedPages)
}

const mapPagesToFlow = (flows: PageFlowArray, pages: PagesArray, stages?: StagesArray) => {
  const toReturn = []
  for (const flow of flows) {
    const mappedFlow = []
    for (const step of flow.steps) {
      const page = pages.find(p => p.id === step.pageId)
      if (page) {
        mappedFlow.push({...page})
      }
    }
    toReturn.push({...flow, steps: mappedFlow})
  }
  return toReturn
}