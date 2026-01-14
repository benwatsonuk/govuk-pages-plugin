export interface Page {
  id: number
  title: string
  type: string
  route: string
  description?: string
}

export interface Stage {
  id: string
  title: string
  route?: string
  description: string | null
  subStages?: Stage[]
}
export type StagesArray = Stage[];
export type PagesArray = Page[];
