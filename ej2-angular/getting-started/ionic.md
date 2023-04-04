---
layout: post
title: Ionic with Angular Getting started component | Syncfusion
description:  Checkout and learn about Ionic with Angular Getting started component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Ionic 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Ionic and Angular

This document helps you to create a simple Angular application with the `Ionic Framework` and including `Syncfusion Angular UI components` can be a great way to add functionality and a polished look to your app.

## Prerequisites

Before getting started with Syncfusion Angular Components in Ionic with Angular project, check whether the following have been installed in the developer's machine.

* Angular Versions supported - 6+ or later
* Typescript Versions supported - 2.6+ or later
* ionic CLI 3.9.0+ or later

>Note: If the `ionic CLI` is not installed, refer to the [`Getting Started with ionic`](https://ionicframework.com/getting-started/#cli) document to install it.

## Create an Application

Create a new project with the following command using the command prompt.

```bash
npm install -g ionic
```

>Note: Here, we are using ionic version 4.6.0 to support Angular 6.

Once your development environment is set up, you can start by creating a new project using the Ionic CLI. To do this, run the following command in your command prompt,

```bash
ionic start ej2-ionic blank --type=angular 
```
This command will create a new Ionic template application in a folder called "ej2-ionic" and will also install the default npm packages needed for the application.

>Note: Refer to this [getting started](https://ionicframework.com/getting-started/#cli) document to install ionic framework.

## Installing Syncfusion Button package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular syncfusion package from [npm]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Add the `@syncfusion/ej2-angular-buttons` package to the application.

```bash
npm install @syncfusion/ej2-angular-buttons@ngcc --save
(or)
npm i @syncfusion/ej2-angular-buttons@ngcc --save
```

## Adding Button Module

After installing the package, the component modules are available to configure your application from Syncfusion installed package.

Refer to the following code snippet to import the button module in `app/src/home/home.module.ts` from the `@syncfusion/ej2-angular-buttons`.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ButtonModule 
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

```

## Adding Syncfusion component

After importing the package, you can start using the Syncfusion UI components. In this example, we're adding a button component to the `src/home/home.page.ts` file.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<button ejs-button cssClass="”e-primary”">Button</button>`,
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}

```

## Adding CSS Reference

Add button component styles as given in the `angular-cli.json` file within the app > styles section.

Finally, you'll need to add the button component styles to your angular-cli.json file.

```typescript

{
"apps": [
    {
         "styles": [
              {
                "input": "./node_modules/@syncfusion/ej2-angular-buttons/styles/material.css"
              },
              {
                "input": "src/global.scss"
              }
            ]
     }
   ]
}

```

## Running the Application

Finally, run the following command line to start the application. The Syncfusion Angular button component will be rendered in the ionic framework. 

 ```bash
ionic serve 
```

>Note: For your convenience, we have prepared an [Angular sample with ionic framework](https://github.com/SyncfusionExamples/ej2-angular-ionic).

