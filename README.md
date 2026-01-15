# govuk-pages-plugin
A plugin for GOVUK Prototype Kit that shows selected pages in an index (list) so that users can navigate directly to them. 

For more information about the GOV.UK Prototype kit:

https://govuk-prototype-kit.herokuapp.com/docs

## Requirements

To use this plugin, first start a prototype by installing the GOV.UK Prototype Kit (version 13 or later).

### 1. Install the plugin

In the folder that contains your prototype, install the plugin by running the following terminal command:

```bash
npm install https://github.com/benwatsonuk/govuk-pages-plugin
```

### 2. Add the following code to your prototype's routes.js file(s)

```js
const { govukPagesPlugin } = require('@benwatsonuk/govuk-pages-plugin')
```

If you use multiple routes files, include the above code on the pages that you wish to use the features of the plugin on.

## Using the plugin

There are two main ways in which you might want to use the plugin.
    
1. To supply the relevant page data (in the expected format - see below) and have the plugin render indexes, directories and user-flows using the supplied templates
2. Create views yourself by supplying the relevant page data to the plugin and have it return a usable data object, that you can either use yourself or call components and templates from the plugin to create your own bespoke views

## What data do I need to supply the plugin?

That depends on which of the plugin's features you wish to use. There are 3 types of data that you could provide the plugin:

1. **Page Data** - this is information at the page level, all pages that will be referenced or indexed will need to be included.
2. **Stage Data** - this is a type of grouping that pages can belong to (they don't have to!) e.g. 'authentication' or 'registering' etc. it can group pages based on a subset of a journey.
3. **Flow Data** - this type of data describes discrete journeys or flows. It can string pages together to visualise the journey a user might take.

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

## What can I use the plugin for?

Coming Soon



