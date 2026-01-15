// Satrt Pages 

export interface Page {
  id: number
  title: string
  type: string
  route: string
  description?: string
  stage?: {
    main: string,
    subStage?: number | string
  }
}

// End Pages

// Start Stages

type SubStage = Omit<Stage, 'id' | 'subStages'> & {
  id: number
}

type SubStageWithPages = Omit<StageWithPages, 'id' | 'subStages'> & {
  id: number | string
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

// End Pages

// Start Page Flows

export interface PageFlowStep {
  pageId: number
}

export interface PageFlow {
  id: number
  title: string
  description?: string | null
  user?: string | null
  steps: PageFlowStep[]
}

// End Page Flows

export type StagesArray = Stage[];
export type PagesArray = Page[];
export type StagesWithPagesArray = StageWithPages[] | [];
export type PageFlowArray = PageFlow[] | [];