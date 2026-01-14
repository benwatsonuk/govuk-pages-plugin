import { StagesArray } from '../../src/types.js';

export const validStages: StagesArray = [
  {
    id: 'stage1',
    title: 'Stage 1',
    description: 'A description about stage 1',
    route: '/a',
    subStages: [
      {
        id: 'substage1',
        title: 'Sub-stage 1-1',
        description: 'A description about sub-stage 1-1',
        route: '/a/a'
      },
    {
        id: 'substage2',
        title: 'Sub-stage 1-2',
        description: 'A description about sub-stage 1-2',
        route: '/a/b'
      }
    ]
  },
    {
    id: 'stage2',
    title: 'Stage 2',
    description: 'A description about stage 2',
    route: '/b',
    subStages: [
      {
        id: 'substage2-1',
        title: 'Sub-stage 2-1',
        description: 'A description about sub-stage 2-1',
        route: '/b/a'
      },
    {
        id: 'substage2-2',
        title: 'Sub-stage 2-2',
        description: 'A description about sub-stage 2-2',
        route: '/b/b'
      }
    ]
  }
];
export const invalidStages: any = [
  {
    badValue: 'stage1',
    anotherBadValue: 'Stage 1',
    description: 'A description about stage 1',
    route: '/a',
    subStages: [
      {
        id: 'substage1',
        title: 'Sub-stage 1-1',
        description: 'A description about sub-stage 1-1',
        route: '/a/a'
      },
    {
        id: 'substage2',
        title: 'Sub-stage 1-2',
        description: 'A description about sub-stage 1-2',
        route: '/a/b'
      }
    ]
  },
    {
    id: 'stage2',
    title: 'Stage 2',
    description: 'A description about stage 2',
    route: '/b',
    subStages: [
      {
        id: 'substage2-1',
        title: 'Sub-stage 2-1',
        description: 'A description about sub-stage 2-1',
        route: '/b/a'
      },
    {
        id: 'substage2-2',
        title: 'Sub-stage 2-2',
        description: 'A description about sub-stage 2-2',
        route: '/b/b'
      }
    ]
  }
];