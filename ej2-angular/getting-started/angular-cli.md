---
layout: post
title: Angular cli with Angular Getting started component | Syncfusion
description:  Checkout and learn about Angular cli with Angular Getting started component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Angular cli 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular CLI

Refer to the following steps to create Angular project with Syncfusion Angular UI Components (Essential JS 2).

## Prerequisites

* `Angular` : 6+
* `Typescript` : 2.6+

## Setting up an Angular Project

Using [Angular CLI](https://github.com/angular/angular-cli), you can easily setup angular projects. Install the Angular CLI tool globally in your machine.

```bash
npm install -g @angular/cli
```

## Create a New Application

```bash
ng new syncfusion-angular-app
```

By default, it creates the CSS style base application. To setup with SCSS, pass --style=SCSS argument on create project.

Example code snippet.

```bash
ng new syncfusion-angular-app --style=scss
```

Navigate to the created project folder.

```bash
cd syncfusion-angular-app
```

## Installing Syncfusion Grid package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from [npm]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components, 
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

By default, Syncfusion Angular packages(`>=20.2.36`) supports [Angular Ivy distribution](https://docs.angular.lat/guide/ivy). The package are compatible with Angular version 12 and above. To install the package use the below command,

Add [`@syncfusion/ej2-angular-grids`](https://www.npmjs.com/package/@syncfusion/ej2-angular-grids/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-grids --save
```

### Angular compatibility compiled package (ngcc)

For Angular version below 12, you can use the `ngcc` tagged packages of the Syncfusion Angular components. To install the package use the below command,

Add [`@syncfusion/ej2-angular-grids@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-grids/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-grids@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-grids:"20.2.38-ngcc"
```

> If the ngcc tag is not specified while installing the package for Angular versions below 12, the Ivy package will be installed with warning.

## Installing Syncfusion Grid Package with Custom Tag name

You can also change the tag name of Syncfusion Angular UI Controls. 

Run the below command to add `@syncfusion/ej2-angular-grids` package to the application with the desired tag name `custom`.

```bash
SET tagName=custom && npm install @syncfusion/ej2-angular-grids
```
After executing the above command, the Syncfusion Angular UI component selector will be changed. For example, the tag name of `<ejs-grid>` will be changed into `<custom-grid>`.

## Adding Grid Module

After installing the package, the component modules are available to configure into your application from the installed syncfusion package. Syncfusion Angular package provides two different types of `ngModules`.

Refer to [`Ng-Module`](../common/ng-module.html) to learn about `ngModules`.

Refer to the following snippet to import the grid module in `app.module.ts` from the `@syncfusion/ej2-angular-grids`.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Imported syncfusion Grid module from grids package
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    // Registering EJ2 Grid Module
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Adding Syncfusion Component

Add the Grid component snippet in `app.component.ts` as follows.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    Syncfusion Angular UI Grid!
  </h1>

  <ejs-grid [dataSource]='data'>
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
      <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
      <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
    </e-columns>
  </ejs-grid>
 `
 })
export class AppComponent {
  public data: Object[] = [
    {
      OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
      ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
      ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
    },
    {
      OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
      ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
      ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
    },
    {
      OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
      ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
      ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
    }
  ];
}
```

## Adding CSS Reference

Add button component styles in the `src/style.css` file as below.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.css';
```
## Adding SCSS Reference

To avoid SCSS compilation issues and to map the SCSS file path, add the stylePreprocessorOptions to the .angular-cli.json file.

Add the `stylePreprocessorOptions` option under apps in the `angular.json` file.

The following paths can be used globally in Angular app.

```typescript
"stylePreprocessorOptions": {
         "includePaths": [
         "node_modules/@syncfusion"
        ]
  },
```
Add button component styles in the `src/style.scss` file as below.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.scss';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.scss';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.scss';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.scss';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.scss';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.scss';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.scss';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.scss';  
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.scss';
```

## Running the Application

Run the `ng serve` command in the console, it will serve your application and you can open the browser window. The Output will appear as follows.

![output](images/ang-cli.PNG)

Refer the below sample for more information.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/quickstart-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/quickstart-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/quickstart-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/common/quickstart-cs1" %}


## See Also

* [Upgradation Guide](https://ej2.syncfusion.com/angular/documentation/upgrade/upgrading-syncfusion/)