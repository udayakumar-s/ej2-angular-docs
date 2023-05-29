---
layout: post
title: Import export annotation in Angular Pdfviewer component | Syncfusion
description: Learn here all about Import export annotation in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Import export annotation 
documentation: ug
domainurl: ##DomainURL##
---

# Import and Export annotation as object

The PDF Viewer library allows you to import annotations from objects or streams instead of loading it as a file. To import such annotation objects, the PDF Viewer control must export the PDF annotations as objects by using the [**ExportAnnotationsAsObject()**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#exportannotationsasobject) method. Only the annotation objects that are exported from the PDF Viewer can be imported.

The following steps are used to import and export annotations as objects.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to perform import and export annotation.

```html
<button (click)="export()">Export Annotation</button>
<button (click)="import()">Import Annotation</button>
```

```ts
//export annotation as object.
export (): void {
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.exportAnnotationsAsObject().then(function (value) {
    exportObject = value;
  });
}

//import annotation that are exported as object.
import(): void {
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.importAnnotation(JSON.parse(exportObject));
}
```

Find the Sample, [how to import and export annotation as object](https://stackblitz.com/edit/angular-yzgy7n?file=app.component.html)