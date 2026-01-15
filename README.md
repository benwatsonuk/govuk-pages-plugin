# govuk-pages-plugin
A plugin for GOVUK Prototype Kit that shows pages in an index (list) so that users can navigate directly to them.

For more information about the GOV.UK Prototype kit:

https://govuk-prototype-kit.herokuapp.com/docs

## Requirements

To use this plugin, first start a prototype by installing the GOV.UK Prototype Kit (version 13 or later).

### 1. Install the plugin

In the folder that contains your prototype, install the plugin by running the following terminal command:

```bash
npm install https://github.com/dwp/alternative-formats-plugin
```

### 2. Add the following code to your prototype's app/routes.js file

```js
const alternativeFormatsPlugin = require("alternative-formats-plugin");

alternativeFormatsPlugin(router);
```

### 3. Add the pattern to your prototype

Link or redirect from any page in your prototype as shown below. In this example the link is a "Continue" button.

```jinja

{# Example of a Continue button #}
{{ 
    govukButton({
        text: "Continue",
        href: "/dwp-alternative-formats-plugin/start?alternative_formats_exit_url=/your-exit-url",
        isStartButton: false
    })
}}
```
