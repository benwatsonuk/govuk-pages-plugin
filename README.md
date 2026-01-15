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
const pagesPlugin = require('@benwatsonuk/govuk-pages-plugin')
```

If you use multiple routes files, include the above code on the pages that you wish to use the features of the plugin on.

There are two main ways in which you might want to use the plugin.
    
    - To supply the relevant page data (in the anticepated format - see below) and have the plugin render indexes, directories and user-flows using the supplied templates
    - Create views yourself by supplying the relevant page data to the plugin and have it return a usable data object, that you can either use yourself or call components and templates from the plugin to create your own bespoke views

## Using the plugin

### 

## What data do I need to supply the plugin?

That depends on which of the plugin's features you wish to use. There are 3 types of data that you could provide the plugin:

1. **Page Data** - this is information at the page level, all pages that will be referenced or indexed will need to be included.
2. **Stage Data** - this is a type of grouping that pages can belong to (they don't have to!) e.g. 'authentication' or 'registering' etc. it can group pages based on a subset of a journey.
3. **Flow Data** - this type of data describes discrete journeys or flows. It can string pages together to visualise the journey a user might take.

### Page Data

At the most basic level, the plugin will need a list of pages to work with. This must be passed to the plugin (via the Express route) as a valid JSON object that matches the schema defined at https://github.com/benwatsonuk/govuk-pages-plugin/blob/main/src/schema.json under the 'pages' definition. 

If you are familiar with TypeScript, you could also reference https://github.com/benwatsonuk/govuk-pages-plugin/blob/main/src/types.ts (see 'Page').


## What can I use the plugin for?



