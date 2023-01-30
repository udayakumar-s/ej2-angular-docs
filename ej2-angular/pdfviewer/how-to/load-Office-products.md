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

  <input type="submit" value="Generate PDF" class="Button" id="LoadPDF" />
  <input type="submit" value="Generate Image" class="Button" id="LoadImage" />

<ejs-pdfviewer #pdfViewer id="pdfViewer"
    [serviceUrl]='service'
    [documentPath]='document'
    style="height:640px;display:block">
    <input type="submit" value="Generate PDF" class="Button" id="Load Pdf" />
</ejs-pdfviewer>
```

```typescript
 
  //This request will call the GetPdfStream API, which will return the PDF document as base64 stream
    $('#LoadPDF').click(function () {
      $.ajax({
        url: 'https://localhost:44327/pdfviewer/GetPdfStream',
        type: "GET",
        success: function (data) {
          viewer = document.getElementById('pdfViewer').ej2_instances[0];
          viewer.documentPath = data;
        }
      });
    });

  //This request will call the GetImageStream API, which will create the image as PDF document and return the PDF document as base64 stream
    $('#LoadImage').click(function () {
      $.ajax({
        url: 'https://localhost:44327/pdfviewer/GetImageStream',
        type: "GET",
        success: function (data) {
          viewer = document.getElementById('pdfViewer').ej2_instances[0];
          viewer.documentPath = data;
        }
      });
    });
  </script>

```

```cs

    [AcceptVerbs("Get")]
    [HttpGet("GetImageStream")]
    [Route("[controller]/GetImageStream")]
    //Post action to create a image as PDF document
    public IActionResult GetImageStream()
    {
        //Create a new PDF document
        Syncfusion.Pdf.PdfDocument doc = new Syncfusion.Pdf.PdfDocument();
        //Add a page to the document
        Syncfusion.Pdf.PdfPage page = doc.Pages.Add();
        //Create PDF graphics for the page
        PdfGraphics graphics = page.Graphics;
        //Load the image from the disk
        byte[] buff = System.IO.File.ReadAllBytes(@"wwwroot/Data/syncfusion.png");
        System.IO.MemoryStream ms = new System.IO.MemoryStream(buff);
        PdfBitmap image = new PdfBitmap(ms);
        //Draw the image
        graphics.DrawImage(image, 0, 0);
        var stream = new MemoryStream();
        doc.Save(stream);
        byte[] bytes;
        bytes = stream.ToArray();
        string base64String = Convert.ToBase64String(bytes);
        // Convert the byte array to a base 64 string
        return Content("data:application/pdf;base64," + base64String);
    }


    [AcceptVerbs("Get")]
    [HttpGet("GetPdfStream")]
    [Route("[controller]/GetPdfStream")]
    //Post action for loading the Office products
    public IActionResult GetPdfStream()
    {
        // The path to the PDF document
        string filePath = "wwwroot/Data/PDF_Succinctly.pdf";
        // Read the PDF document into a byte array
        byte[] fileBytes = System.IO.File.ReadAllBytes(filePath);
        // Convert the byte array to a base 64 string
        string base64String = Convert.ToBase64String(fileBytes);
        return Content("data:application/pdf;base64," + base64String);
    }

```

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Common/Load%20PDF%2C%20Excel%2C%20PPT%20file%20types)
