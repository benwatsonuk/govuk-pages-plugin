import { PagesArray } from '../../src/types.js';

export const validPages: PagesArray = [
  {
    id: 1,
    title: 'Title 1',
    type: 'email',
    description: 'A description about item 1',
    route: '/a/a/1',
    stageId: 'stage1',
    subStageId: 1
  },
  {
    id: 2,
    title: 'Title 2',
    type: 'email',
    description: 'A description about item 2',
    route: '/b/b/2',
    stageId: 'stage2',
    subStageId: 2
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
