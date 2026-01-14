import Ajv from "ajv"
import schema from "./schema.json"
import { PagesArray } from "./types"

const ajv = new Ajv({ allErrors: true })

const validate = ajv.compile(schema)

export function validatePagesArray(pages: unknown): PagesArray {
  if (!validate(pages)) {
    const message = validate.errors
      ?.map(err => `${err.instancePath || "Pages"} ${err.message}`)
      .join("\n")

    throw new Error(
      `Invalid array of pages passed to govuk-pages-plugin:\n${message}`
    )
  }

  return pages as PagesArray
}
