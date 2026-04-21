import { PagesArray } from '../../src/types.js';

export const validPages: PagesArray = [
  {
    id: 1,
    title: 'Title 1',
    type: 'email',
    description: 'A description about item 1',
    route: '/a/a/1',
    stage: {main: 'stage1', subStage: 1}
  },
  {
    id: 2,
    title: 'Title 2',
    type: 'email',
    description: 'A description about item 2',
    route: '/b/b/2',
    stage: {main: 'stage2', subStage: 2}
  },
  {
    id: 3,
    title: 'Title 3',
    type: 'email',
    description: 'A description about item 3',
    route: '/a/b/3'
  }
];

export const invalidPages: any = [
  {
    badValue: 1,
    anotherBadValue: 'Title 1',
    type: 'email',
    description: 'A description about item 1',
    route: '/a/a/1'
  },
  {
    badValue: 2,
    anotherBadValue: 'Title 2',
    type: 'email',
    description: 'A description about item 2',
    route: '/a/b/2'
  }
];

export const pagesWithNoStages: PagesArray = [
  {
    id: 1,
    title: 'Title 1',
    type: 'email',
    description: 'A description about item 1',
    route: '/a/a/1'
  },
  {
    id: 2,
    title: 'Title 2',
    type: 'email',
    description: 'A description about item 2',
    route: '/a/b/2'
  }
];

export const pagesWithNoStagesAndNewPages: PagesArray = [
  {
    id: 1,
    title: 'Title 1',
    type: 'email',
    description: 'A description about item 1',
    route: '/a/a/1',
    newPage: true
  },
  {
    id: 2,
    title: 'Title 2',
    type: 'email',
    description: 'A description about item 2',
    route: '/a/b/2'
  }
];

export const pagesWithNoStagesAndAlteredPages: PagesArray = [
  {
    id: 1,
    title: 'Title 1',
    type: 'email',
    description: 'A description about item 1',
    route: '/a/a/1',
    iterations: [
      {
        phase: 'phase1',
        version: 1,
        notes: 'Notes about this iteration'
      },
      {
        phase: 'phase1',
        version: 2,
        notes: 'Notes about this iteration'
      }
    ]
  },
  {
    id: 2,
    title: 'Title 2',
    type: 'email',
    description: 'A description about item 2',
    route: '/a/b/2'
  }
];
