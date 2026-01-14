import { PagesArray, StagesArray } from "../../types"
import { validatePagesArray, validateStagesArray } from "../../validate"

export const getStagesWithPages = (stages: StagesArray, pages: PagesArray) => {
  const validatedStages = validateStagesArray(stages)
  const validatedPages = validatePagesArray(pages)
  return { stages: validatedStages, pages: validatedPages }
}