# govuk-pages-plugin
A plugin for GOVUK Prototype Kit that shows selected pages in various indexes (lists) and visualises user flows and journeys so that users can navigate directly to them. 

The idea is that by providing elevated perspectives of journeys and pages, designers and UCD teams can discuss them without the high fidelity detail of the page, affording them the option of choosing when it is appropriate to 'zoom in' to this detail. 

The plugin also gives the option of an 'overview' page which allows UCD teams to give some additional context to pages with a 'semi zoomed-in' view, this can be useful to showcase variants, iterations or states of a given page.

## Requirements

To use this plugin, first start a prototype by installing the GOV.UK Prototype Kit (version 13 or later).

### 1. Install the plugin

In the folder that contains your prototype, install the plugin by running the following terminal command:

```bash
npm install https://github.com/benwatsonuk/govuk-pages-plugin
```

### 2. Add the following code to your prototype's routes.js file(s)

#### Basic Setup

```js
const { govukPagesPlugin, pageOverview } = require('@benwatsonuk/govuk-pages-plugin')
```

If you use multiple routes files, include the above code on the pages that you wish to use the features of the plugin on.

Then for the most basic implementation declare the route that you wish to use and call the function to generate all available flows and indexes from the data that you provide:

```js
router.use(`/path-of-your-choice/pages`, govukPagesPlugin(pages, stages, flows))

router.get(`/path-of-your-choice/page/:pageId`, (req, res) => {
  pageOverview(Number(req.params.pageId), pages, req, res)
})
```

For all functions, you MUST provide a valid `pages` property (see below), `stages` and `flows` are always optional but provide some useful functionality. See below about how to use these optionally.

#### Advanced Setup

Call and use any of the exported functions available in dist/index.js file - this can be useful if you wish to use the plugin's data to create your own views or you wish to set up custom paths/routes.

See the examples below for more details.

## Using the plugin

There are two main ways in which you might want to use the plugin.
    
1. To supply the relevant page data (in the expected format - see below) and have the plugin render indexes, directories and user-flows using the supplied templates
2. Create views yourself by supplying the relevant page data to the plugin and have it return a usable data object, that you can either use yourself or call components and templates from the plugin to create your own bespoke views

## What data do I need to supply the plugin?

That depends on which of the plugin's features you wish to use. There are 3 types of data that you could provide the plugin:

1. **Page Data** - REQUIRED - this is information at the page level, all pages that will be referenced or indexed will need to be included.
2. **Stage Data** - OPTIONAL -this is a type of grouping that pages can belong to (they don't have to!) e.g. 'authentication' or 'registering' etc. it can group pages based on a subset of a journey.
3. **Flow Data** - OPTIONAL - this type of data describes discrete journeys or flows. It can string pages together to visualise the journey a user might take.

### Page Data (required)

At the most basic level, the plugin will need a list of pages to work with. This ***must*** be passed to the plugin (via the Express route) as a valid JSON object that matches the schema defined at https://github.com/benwatsonuk/govuk-pages-plugin/blob/main/src/schema.json under the 'pages' definition. 

If you are familiar with TypeScript, you could also reference https://github.com/benwatsonuk/govuk-pages-plugin/blob/main/src/types.ts (see 'Page').

In future, hopefully this can be automated but for now, you will need to create this array in order to use the plugin.

### Stage Data (optional)

Stages aren't required but they can add useful groupings to series of pages that are useful when visualising or listing a large number of pages at once. For example, a series of 'stages' that might exist when accessing your 'Personal Tax Account' from HMRC might be:

- GOV.UK Guidance
- Authentication
- Personal Account Dashboard

There is also the concept of 'sub-stages' which allows you to break these down even further, for example:

- Authentication
    - Select Method
    - Government Gateway
    - One Login
- Personal Tax Account 
    - PAYE
    - Account Management
    - Messages

If stages are provided and the page data refers to the relevant ID in the pages object, the ability to visualise by stages, group indexes by stages etc. will be possible.

Make sure the 'stages' array matches the schema defined at https://github.com/benwatsonuk/govuk-pages-plugin/blob/main/src/schema.json under the 'stages' definition. 

If you are familiar with TypeScript, you could also reference https://github.com/benwatsonuk/govuk-pages-plugin/blob/main/src/types.ts (see 'Stage').

### Flow Data (optional)

If this is passed to the plugin, we can visualise user journeys from end to end and the prototype will allow navigaton directly to the relevant pages. This can be useful when giving an overview of a flow that a user might go through, or to give context as to a page's position in a longer journey.

## Examples

Most basic example:

```js
const { govukPagesPlugin } = require('@benwatsonuk/govuk-pages-plugin')

// If you have all objects
router.use(`/path-of-your-choice/pages`, govukPagesPlugin(pages, stages, flows))

// If you have ONLY pages
router.use(`/path-of-your-choice/pages`, govukPagesPlugin(pages))

// If you have PAGES and STAGES objects
router.use(`/path-of-your-choice/pages`, govukPagesPlugin(pages, stages))

// If you have PAGES and FLOWS objects
router.use(`/path-of-your-choice/pages`, govukPagesPlugin(pages, null, flows))
```

Here are some recipes for adding data to your routes:

```js
const { govukPagesPlugin, pageIndex, stageIndex, stageIndexData, pageIndexData } = require('@benwatsonuk/govuk-pages-plugin')

router.use(`/path-of-your-choice/pages`, govukPagesPlugin(pages, stages, flows))
router.use(`/path-of-your-choice/page-index`, pageIndex(pages))
router.use(`/path-of-your-choice/stage-index`, stageIndex(stages, pages))
router.use(`/path-of-your-choice/flow-index`, flowIndex(flows, pages, stages))

router.get(`/path-of-your-choice/stage-index-test`, (req, res) => {
  res.render(`path-of-your-choice/stage-index-test`, {
    stages: stageIndexData(stages, pages)
  })
})

router.get(`/path-of-your-choice/page-index-test`, (req, res) => {
  res.render(`path-of-your-choice/page-index-test`, {
    pages: pageIndexData(pages)
  })
})

router.get(`/path-of-your-choice/flow-index-test`, (req, res) => {
  res.render(`path-of-your-choice/flow-index-test`, {
    pages: flowIndexData(flows, pages, stages)
  })
})
```

Here are some examples of 'stage' and 'page' data arrays:

### Pages

```js
const pages = [
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
```

### Stages

``` js
const stages = [
  {
    id: 'stage1',
    title: 'Stage 1',
    description: 'A description about stage 1',
    route: '/a',
    subStages: [
      {
        id: 1,
        title: 'Sub-stage 1-1',
        description: 'A description about sub-stage 1-1',
        route: '/a/a'
      },
    {
        id: 2,
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
        id: 1,
        title: 'Sub-stage 2-1',
        description: 'A description about sub-stage 2-1',
        route: '/b/a'
      },
    {
        id: 2,
        title: 'Sub-stage 2-2',
        description: 'A description about sub-stage 2-2',
        route: '/b/b'
      }
    ]
  }
]
```
### Flows

```js
const flows = [
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
```



