---
Layout: post
Title: How to Change the Font Family in the Type Signature in Angular Pdfviewer component | Syncfusion
Description: Learn how to change the font family in the type signature in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
Platform: ej2-angular
Control: Change the Font Family in the Type Signature
Documentation: ug
Domainurl: ##DomainURL##
---

# How to Change the Font Family in the Type Signature

Change the font family in the Type Signature of the Syncfusion PDF Viewer by adding a custom CSS stylesheet to the document, and then apply the desired font family to the Type Signature element. Include the Google Font link in the HTML head section to apply the Google Font.

use the `handWrittenSignatureSettings` property of the PdfViewer component and modify the fontFamily property.

```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allura" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sacramento">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inspiration">
```

```ts

 changeFontFamily() {
    var pdfviewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfviewer.handWrittenSignatureSettings.typeSignatureFonts = [
      'Allura',
      'Tangerine',
      'Sacramento',
      'Inspiration',
    ];
  }

```

Find the sample [how to Change the Font Family in the Type Signature](https://stackblitz.com/edit/angular-51hahr-5fnsc9?file=app.component.ts)