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

const mapPagesToFlow = (flow: PageFlowArray, pages: PagesArray, stages?: StagesArray) => {
  // To be implemented later
  return flow
}