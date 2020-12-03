# Style Dictionary Example Component SCSS

This gives one possible solution to: https://github.com/amzn/style-dictionary/issues/492

Run this example by installing dependencies (`yarn install` or `npm ci`) then running the build command (`yarn run build` or `npm run build`). You should get a button.scss and picker.scss file in **build/scss* folder. 

## How it works

It uses a custom action to build component SCSS files. The action grabs parts of the dictionary under the `component` namespace and passes the entire component object to a formatter to generate the SCSS file. This way you can add more components without needing to add more files to the configuration. 

## What to look at

* [sd.config.js](sd.config.js) has the style dictionary configuration
* [componentSCSS.js](componentSCSS.js) has the code to generate the SCSS code
* [tokens/](tokens) has the token files. The component token files also have 'modifier' and 'child' attributes to denote if that block of tokens is a modifier on the component or a child component. 