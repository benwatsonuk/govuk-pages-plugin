import { PageFlowArray, PagesArray, StagesArray } from "../../types"
import { validatePageFlowArray, validatePagesArray } from "../../validate"

export const getFlows = (flows: PageFlowArray, pages: PagesArray, stages?: StagesArray) => {
  const validatedPageFlows = validatePageFlowArray(flows)
  validatePagesArray(pages)
  return validatedPageFlows
}

const mapPagesToFlow = (flow: PageFlowArray, pages: PageFlowArray, stages: StagesArray) => {
  // To be implemented later
}