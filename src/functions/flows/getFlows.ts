import { PageFlowArray, StagesArray } from "../../types"
import { validatePageFlowArray } from "../../validate"

export const getPageFlows = (pageFlows: PageFlowArray, pages: PageFlowArray, stages?: StagesArray) => {
  const validatedPageFlows = validatePageFlowArray(pageFlows)
  return validatedPageFlows
}

const mapPagesToFlow = (flow: PageFlowArray, pages: PageFlowArray, stages: StagesArray) => {
  // To be implemented later
}