import { PagesArray, StagesArray, StagesWithPagesArray } from "../../types"
import { validatePagesArray, validateStagesArray } from "../../validate"

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
      (page) => page.stageId === stage.id
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
            (page) => page.subStageId === String(subStage.id)
          )
          return {
            id: subStage.id,
            title: subStage.title,
            description: subStage.description,
            pages: pagesForSubStage
          }
        })
      }

      return {
        id: stage.id,
        title: stage.title,
        description: stage.description,
        subStages: subStagesWithPages,
        pages: pagesForStage
      }
    }
  }).filter(stage => stage !== undefined);
  
  // add allPages to a misc category and bolt on to stagesWithPages
  if (allPages.length > 0) {
    stagesWithPages.push({
      id: "unassigned",
      title: "Unassigned",
      description: "Pages not assigned to any stage or sub-stage",
      pages: allPages
    })
  }
  return stagesWithPages
}