import { PagesArray, StagesArray, StagesWithPagesArray, Stage } from "../../types"
import { validatePagesArray, validateStagesArray } from "../../validate"

export const defaultStage = {
  id: 'unassigned',
  title: 'Unassigned',
  description: 'These pages have not been assigned a stage or sub-stage'
}

// Get and validate stages from the provided input
export const getStages = (stages: StagesArray) => {
  const validatedStages = validateStagesArray(stages)
  return validatedStages
}

// Get and validate stages and relevant pages from the provided input. Return an array of Stage objects containing relevant pages.
export const getStagesWithPages = (stages: StagesArray, pages: PagesArray): StagesWithPagesArray => {
  const validatedStages = validateStagesArray(stages)
  const validatedPages = validatePagesArray(pages)
  return mapPagesToStages(validatedStages, validatedPages)
}

export const getStageById = (stageId: string, stages: StagesArray) => {
  return stages.find(stage => stage.id === stageId)
}

// Below this point is just the helper function used internally for the above functions

// This function does the heavy lifting of mapping pages to their relevant stages
export const mapPagesToStages = (
  stages: StagesArray,
  pages: PagesArray
): StagesWithPagesArray => {
  let allPages = [...pages]; // Create a copy to avoid mutating the original

  const stagesWithPages: StagesWithPagesArray = stages.map((stage) => {
    // Filter pages that belong to this stage
    const pagesForStage = pages.filter(
      (page) => page.stage && page.stage.main === stage.id
    )

    // Only add the stage if it has pages (after all, why return empty stages?)
    if (pagesForStage.length > 0) {

      // Remove the filtered pages from allPages to get unused pages
      allPages = allPages.filter(page => !pagesForStage.some(p => p.id === page.id));

      // Map sub-stages with their relevant pages
      let subStagesWithPages
      if (stage.subStages) {
        subStagesWithPages = stage.subStages.map((subStage) => {
          // Filter pages that belong to this sub-stage
          const pagesForSubStage = pagesForStage.filter(
            (page) => page.stage && page.stage.subStage === subStage.id
          )

         if (pagesForSubStage.length > 0) {
            return {
              id: subStage.id,
              title: subStage.title,
              description: subStage.description,
              pages: pagesForSubStage
            }
          }
        }).filter(subStage => subStage !== undefined)
      } 

      let hasNewPage = false
      let hasIteration = false
      pagesForStage.forEach(page => {
        if (page.newPage) {
          hasNewPage = true
        }
        if (page.hasIteration) {
          hasIteration = true
        }
      })
    
      return {
        id: stage.id,
        title: stage.title,
        description: stage.description,
        subStages: subStagesWithPages,
        hasNewPage: hasNewPage,
        hasIteration: hasIteration,
        pages: pagesForStage
      }
    }
  }).filter(stage => stage !== undefined);
  
  // add allPages to a misc category and bolt on to stagesWithPages
  if (allPages.length > 0) {
    stagesWithPages.push({
      id: defaultStage.id,
      title: defaultStage.title,
      description: defaultStage.description,
      pages: allPages
    })
  }
  return stagesWithPages
}