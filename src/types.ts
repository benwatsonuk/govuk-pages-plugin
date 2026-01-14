export interface Page {
  id: number
  title: string
  type: string
  route: string
  description?: string
}

type SubStage = Omit<Stage, 'id' | 'subStages'> & {
  id: number
}

export interface Stage {
  id: string
  title: string
  route?: string
  description: string | null
  subStages?: SubStage[]
}

export type StagesArray = Stage[];
export type PagesArray = Page[];
