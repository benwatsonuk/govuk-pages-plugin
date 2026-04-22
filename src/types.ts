// Start Pages 

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
  newPage?: boolean
  hasIteration?: boolean
  iterations?: {
    phase: string
    version: number
    notes?: string
  }[]
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
  description?: string
  subStages?: SubStage[]
}

export interface StageWithPages {
  id: string
  title: string
  description?: string
  subStages?: SubStageWithPages[]
  pages: Page[]
  hasNewPage?: boolean
  hasIteration?: boolean
}

// End Pages

// Start Page Flows

export interface PageFlowStep {
  pageId: number
}

export interface PageFlow {
  id: number
  title: string
  description?: string
  user?: string
  steps: PageFlowStep[]
  hasNewPage?: boolean
  hasIteration?: boolean
}

// End Page Flows

// Start Outputs
export interface FlowOutput {
  hasStages: boolean,
  flows: PageFlowOutput[]
}

export interface StepOutput extends Page {
  
}

export interface PageOutput extends Page {
 
}

export interface StepGroup {
  id: number,
  stage: Stage,
  steps: StepOutput[]
}

export interface PageFlowOutput {
  id: number,
  title: string,
  description?: string,
  user?: string,
  steps: StepOutput[]
  stepsWithStages?: StepGroup[]
}
// End Outputs

export type StagesArray = Stage[];
export type PagesArray = Page[];
export type StagesWithPagesArray = StageWithPages[] | [];
export type PageFlowArray = PageFlow[] | [];