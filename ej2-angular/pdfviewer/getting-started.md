---
layout: post
title: Getting started with Angular Pdfviewer component | Syncfusion
description:  Checkout and learn about Getting started with Angular Pdfviewer component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Pdfviewer component

This section explains the steps required to create a simple Essential JS 2 PDF Viewer and demonstrates the basic usage of the PDF Viewer control in a Angular CLI application.

## Prerequisites
To get started with Syncfusion Angular UI components, ensure the compatible version of Angular. 
* `Angular` : 6+
* `Typescript` : 2.6+
* Required node version >= `14.0.0+`(NPM Package Manager).

## Setup Angular Environment
1. Create a new Angular app [`Angular CLI`](https://github.com/angular/angular-cli) and install it using the following command.

```bash
npm install -g @angular/cli
```

N> Use the command **npm install --save @angular/cli@12.0.2** to install the latest Angular CLI version 12.0.2

2. Create an Angular Application

Start a new Angular application using the Angular CLI command as follows.

```bash
ng new my-app
cd my-app
```

3. Installing Syncfusion Pdfviewer package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

## Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-pdfviewer`](https://www.npmjs.com/package/@syncfusion/ej2-angular-pdfviewer/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-pdfviewer --save
```

## Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-pdfviewer@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-pdfviewer/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-pdfviewer@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-pdfviewer:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

4. Registering PDF Viewer Module

Import PDF Viewer module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-pdfviewer` [src/app/app.module.ts].

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the PdfViewer Module for the PDF Viewer component
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService } from '@syncfusion/ej2-angular-pdfviewer';
import { AppComponent } from './app.component';

@NgModule({
  //declaration of ej2-angular-pdfviewer module into NgModule
  imports: [ BrowserModule, PdfViewerModule ],
  declarations: [ AppComponent ],
  bootstrap: [AppComponent],
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
  ThumbnailViewService, ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService]
})
export class AppModule { }
```

5. Adding CSS reference

Add the following lines in the `index.html` file to refer the css style.

```html
<!doctype html>
<html lang="en">
<head>
  <link href="//cdn.syncfusion.com/ej2/20.3.56/material.css" rel="stylesheet" />
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

6. Adding PDF Viewer component

Modify the template in [src/app/app.component.ts] file to render the PDF Viewer component.
Add the Angular PDF Viewer by using `<ejs-pdfviewer>` selector in `template` section of the app.component.ts file.

```typescript
import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, AnnotationService, TextSearchService, TextSelectionService, PrintService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
  <ejs-pdfviewer id="pdfViewer" [serviceUrl]='service' [documentPath]='document' style="height:640px;display:block"></ejs-pdfviewer>
</div>`,
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
  ThumbnailViewService, ToolbarService, NavigationService, AnnotationService, TextSearchService, TextSelectionService, PrintService]
})
export class AppComponent implements OnInit {
    public service = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
    public document = 'PDF_Succinctly.pdf';
    ngOnInit(): void {
    }
}
```

> For PDF Viewer serviceUrl creation, follow the steps provided in the [link](https://ej2.syncfusion.com/documentation/pdfviewer/how-to/create-pdfviewer-service/)


## Follow the below steps to run the application using web service.
1. Download the sample from the [View web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) link.
2. Navigate to the `ASP.NET Core` folder and run it in the command promt.
3. Use the below command to restore the required packages.
```sh
dotnet restore
```
4. Use the below command to run the web service.
```sh
dotnet run
```
5. You can see that the service link was running on the server side and we can bind the service link to the `serviceUrl` property of pdf viewer.

> For ex:  
export class AppComponent implements OnInit {
    public service = 'https://localhost:5001/pdfviewer';
    public document = 'PDF_Succinctly.pdf';
    ngOnInit(): void {
    }
    

## Run the application

Use the following command to run the application in browser.

```javascript
ng serve --open
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/getting-started-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pdfviewer/getting-started-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/getting-started-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/pdfviewer/getting-started-cs1" %}

Find the [Angular Sample](https://www.syncfusion.com/downloads/support/directtrac/general/ze/AngularSample730820475.zip)