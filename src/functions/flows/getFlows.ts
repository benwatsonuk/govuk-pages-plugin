import { PageFlowArray, PagesArray, StagesArray, Stage, StepGroup, StepOutput, FlowOutput, PageFlowOutput } from "../../types"
import { defaultStage, getStageById } from "../stages/getStages"
import { validatePageFlowArray, validatePagesArray, validateStagesArray } from "../../validate"

export const getFlows = (flows: PageFlowArray, pages: PagesArray, stages?: StagesArray): {hasStages: boolean, flows: PageFlowOutput[]} => {
  const validatedPageFlows = validatePageFlowArray(flows)
  const validatedPages = validatePagesArray(pages)
  if (stages) {
    const validatedStages = validateStagesArray(stages)
    return { hasStages: true, flows: mapPagesWithStagesToFlow(validatedPageFlows, validatedPages, validatedStages)}
  }
  return { hasStages: false, flows: mapPagesToFlow(validatedPageFlows, validatedPages)}
}

// Get the pages from the flow data for the 'steps' property
const mapPagesToFlow = (flows: PageFlowArray, pages: PagesArray): PageFlowOutput[] => {
  const toReturn: PageFlowOutput[] = []
  for (const flow of flows) {
    const mappedFlow: StepOutput[] = []
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

// Get the pages and stages from the flow data for the 'stepsWithSatges' property
const mapPagesWithStagesToFlow = (flows: PageFlowArray, pages: PagesArray, stages: StagesArray): PageFlowOutput[] => {
  const toReturn = []
  for (const flow of flows) {
    const mappedFlow = []
    for (const step of flow.steps) {
      const page = pages.find(p => p.id === step.pageId)
      if (page) {
        mappedFlow.push({...page})
      }
    }
    // Group pages by stage
    const stepsWithStages: StepGroup[] = []
    let currentStage: Stage | null = null
    let currentSteps: StepOutput[] = []
    for (const step of flow.steps) {
      const page = pages.find(p => p.id === step.pageId)
      if (page) {
        // Check the stage info
        let stage: Stage = defaultStage
        if (page.stage) {
            const a = getStageById(page.stage?.main, stages)
            stage = a || defaultStage
        }
        // If the current stage is the same as the previous page's stage, add to the same group
        if (currentStage && currentStage.id === stage.id) {
          currentSteps.push(page as StepOutput)
        } else {
          // If there was a previous group, push it
          if (currentStage) {
            stepsWithStages.push({
              id: stepsWithStages.length + 1,
              stage: currentStage,
              steps: currentSteps
            })
          }
          // Start a new group
          currentStage = stage
          currentSteps = [page as StepOutput]
        }
      }
    }
    // Push the last group
    if (currentStage) {
      stepsWithStages.push({
        id: stepsWithStages.length + 1,
        stage: currentStage,
        steps: currentSteps
      })
    }
    toReturn.push({...flow, steps: mappedFlow, stepsWithStages})
  }
  return toReturn
}