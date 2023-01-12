---
layout: post
title: Sass in Angular Common control | Syncfusion
description: Learn here all about Sass in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# How to use SCSS File in Angular-CLI

## SASS Variables Location

The SASS variables for Essential JS 2 components are available in the following mentioned location.

`node_modules/@syncfusion/package-name/styles/themename.scss`

For example, refer to the following location for navigation component’s SASS variable.

`node_modules/@syncfusion/ej2-angular-grids/styles/material.scss`

## Initialization of SCSS Variables

Refer to the styles of the required component in the src/styles.scss file.

```typescript
@import “ej2-grids/styles/material.scss”
```

## Configuring node SCSS in .angular-cli.json

To avoid SCSS compilation issues and to map the SCSS file path, add the stylePreprocessorOptions to the .angular-cli.json file.

Add the `stylePreprocessorOptions` option in two places under apps in the `.angular-cli.json` file.

1. angular-cli.json -> {}build -> {}options
2. angular-cli.json -> {}test -> {}options

The following paths can be used globally in Angular app.

```typescript
"stylePreprocessorOptions": {
         "includePaths": [
         "node_modules/@syncfusion"
        ]
  },
```

An angular sample with SCSS compilation to render the Essential JS 2 Grid component can be downloaded from the following [GitHub link](https://github.com/SyncfusionExamples/ej2-angular-scss).

## How To Override Styles

In syncfusion Angular components, you can override control styles by replacing `sass` variable values like below:

```

// SASS Variable override
$accent: black;
$primary: rgb(0, 255, 157);

// syncfusion styles
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.scss';

```

## Angular-CLI Version 8 With SASS

In version 8, Angular Team moved away from `node-sass` in favour of `sass`.Nonetheless we have the option to use `node-sass` manually. Use the below command to install `node-sass`:

```bash
npm install node-sass --save-dev
```
