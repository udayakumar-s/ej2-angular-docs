---
layout: post
title: Show pop up after completion of export form fields in Angular Pdfviewer component | Syncfusion
description: Learn here all about Show pop up after completion of export form fields in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Show pop up after completion of export form fields 
documentation: ug
domainurl: ##DomainURL##
---

# Show pop up after completion of export form fields in Angular Pdfviewer component

The `exportSuccess` event triggers when an export annotations succeed in the PDF Viewer where you can notify the pop-up message.

Refer the following code to notify the pop-up once export annotations succeed.

```
    <!--Render PDF Viewer component-->
    <ejs-pdfviewer
      id="pdfViewer"
      [serviceUrl]="service"
      [documentPath]="document"
      (exportSuccess)="fireExportRequestSuccess()"
      style="height:640px;display:block"
    ></ejs-pdfviewer>
```

```typescript
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService,
} from '@syncfusion/ej2-angular-pdfviewer';

/**
 * Default PdfViewer Controller
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
  ],
})
export class AppComponent {
  public service: string =
    'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
  public document: string = 'FormFillingDocument.pdf';
  ngOnInit(): void {
  }
  //Method to notify popup once the form is submitted.
  public fireExportRequestSuccess() {
    var pdfViewer = (<any>document.getElementById('pdfViewer'))
      .ej2_instances[0];
    pdfViewer.viewerBase.openImportExportNotificationPopup(
      'Your form information has been saved. You can resume it at any times.Form Information Saved'
    );
  }
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Event/Export%20success).