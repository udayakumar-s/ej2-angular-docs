---
layout: post
title: Lock annotation in a document in Angular Pdfviewer component | Syncfusion
description: Learn here all about Lock annotation in a document in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Lock annotation in a document 
documentation: ug
domainurl: ##DomainURL##
---

# Lock annotation in a document in Angular Pdfviewer component

The PDF Viewer provides a support to enable or disable lock option for the annotation in a pdf document. When an annotation is locked, it cannot be moved, resized, and removed.

## Lock an annotation from code behind

The annotation can be locked either by default settings or by an event using the `IsLocked` API.

The following code sample illustrates how to lock custom stamp in a PDF document.

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
    'https://localhost:5001/pdfviewer';
  public document: string = 'PDF_Succinctly_CustomStamp.pdf';
  ngOnInit(): void {
  }
  //Method to lock the custom stamp annotation.
  public fireAjaxRequestSuccess(event:any, data:any) {
    debugger;
    if (event.action == 'RenderAnnotationComments') {
      for (var i = data.startPageIndex; i < data.endPageIndex; i++) {
        for (
          var j = 0;
          j < data.annotationDetails[i].stampAnnotations.length;
          j++
        ) {
          //Subject becomes null only for custom stamps.
          if (data.annotationDetails[i].stampAnnotations[j].Subject == null) {
            //Iterate the annotations, check if the subject is null, then set the islocked as true.
            data.annotationDetails[i].stampAnnotations[j].IsLocked = true;
          }
        }
      }
    }
  }
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/Lock%20custom%20stamp%20in%20a%20PDF%20document)
