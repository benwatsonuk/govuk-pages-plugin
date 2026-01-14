import { PagesArray } from "../../types"
import { validatePagesArray } from "../../validate"

export const getPages = (pages: PagesArray) => {
  const validatedPages = validatePagesArray(pages)
  return validatedPages
}