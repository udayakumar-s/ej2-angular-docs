---
layout: post
title: How to load the Office products | Syncfusion
description: Learn here all about how to load the Office products in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: How to load the Office products
documentation: ug
domainurl: ##DomainURL##
---

# How to load the Office products

To load Office products in the Syncfusion PDF viewer component through an AJAX request, you can use the ajaxRequest method provided by the PDF viewer. This method allows you to make an AJAX call to a server and load the Office document in the PDF viewer.

You need to adjust the URL and data properties of the ajaxRequest object to match the endpoint of your server that will handle the document conversion and the name of the document you want to load.

N> The server endpoint should return the PDF file from the office file, and the file should be in the same format as the input file.

Here is an example of how you can use the ajaxRequest method to load an Office document in the PDF viewer.

```html
<ejs-pdfviewer #pdfViewer id="pdfViewer"
    [serviceUrl]='service'
    [documentPath]='document'
    style="height:640px;display:block">
    <input type="submit" value="Generate PDF" class="Button" id="Load Pdf" />
</ejs-pdfviewer>
```

```typescript
$('#Load Pdf').click(function () {
    $.ajax({
        url: 'https://localhost:44327/pdfviewer/GetPdfStream',
        type: "GET",
        success: function (data) {
            viewer = document.getElementById('pdfViewer').ej2_instances[0];
            viewer.documentPath = data;
        }
    });
}); 

```

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Common/Load%20PDF%2C%20Excel%2C%20PPT%20file%20types)