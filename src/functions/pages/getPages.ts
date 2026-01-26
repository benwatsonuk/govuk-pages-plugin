import { PagesArray } from "../../types"
import { validatePagesArray } from "../../validate"

export const getPages = (pages: PagesArray) => {
  const validatedPages = validatePagesArray(pages)
  return validatedPages
}

export const getPage = (pageId: number, pages: PagesArray) => {
  const validatedPages = validatePagesArray(pages)
  return validatedPages
}