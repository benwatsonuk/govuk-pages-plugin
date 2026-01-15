export interface Page {
  id: number
  title: string
  type: string
  route: string
  description?: string
  stageId?: string
  subStageId?: number
}

type SubStage = Omit<Stage, 'id' | 'subStages'> & {
  id: number
}

type SubStageWithPages = Omit<StageWithPages, 'id' | 'subStages'> & {
  id: number
}

export interface Stage {
  id: string
  title: string
  route?: string
  description: string | null
  subStages?: SubStage[]
}

export interface StageWithPages {
  id: string
  title: string
  description: string | null
  subStages?: SubStageWithPages[]
  pages: Page[]
}


export type StagesArray = Stage[];
export type PagesArray = Page[];
export type StagesWithPagesArray = StageWithPages[] | [];