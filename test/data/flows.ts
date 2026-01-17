import { PageFlowArray } from '../../src/types.js';

export const validFlow: PageFlowArray = [
  {
    id: 1,
    title: 'Flow 1',
    description: 'A description of Flow 1',
    user: 'User A',
    steps: [
      {
        pageId: 1
      },
      {
        pageId: 2
      }
    ]
  },
  {
    id: 2,
    title: 'Flow 2',
    description: 'A description of Flow 2',
    user: 'User B',
    steps: [
      {
        pageId: 2
      },
      {
        pageId: 3
      }
    ]
  }
];

export const invalidFlow: any = [
  {
    badKey: 1,
    title: 'Flow 1',
    description: 'A description of Flow 1',
    user: 'User A',
    steps: [
      {
        pageId: 1
      },
      {
        pageId: 2
      }
    ]
  },
    {
    id: 2,
    badKey: 'Flow 2',
    description: 'A description of Flow 2',
    user: 'User B',
    steps: [
      {
        pageId: 2
      },
      {
        pageId: 3
      }
    ]
  }
];