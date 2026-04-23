import { PagesArray } from "../../types"
import { validatePagesArray } from "../../validate"

// export const getPages = (pages: PagesArray) => {
//   const validatedPages = validatePagesArray(pages)
//   return validatedPages
// }

export const getPages = (pages: PagesArray, phase?: string, version?: number) => {
  const validatedPages = validatePagesArray(pages)
  validatedPages.map(p => {
    if (p.iterations) {
      if (phase && version) {
        const iteration = p.iterations.find(i => i.phase === phase && i.version === version)
        if (iteration) {
          p.hasIteration = true
        } else {  
          p.hasIteration = false
        }
      } 
      return p
    }
  })
  return validatedPages
}

export const getPage = (pageId: number, pages: PagesArray) => {
  const validatedPages = validatePagesArray(pages)
  const page = validatedPages.find(p => p.id === pageId)
  if (page) {
    return page
  } 
  throw new Error(
    `Page ID ${pageId} does not exist`
  )
}