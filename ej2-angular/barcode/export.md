---
layout: post
title: Export in Angular Barcode component | Syncfusion
description: Learn here all about Export in Syncfusion Angular Barcode component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Export 
documentation: ug
domainurl: ##DomainURL##
---

# Export in Angular Barcode component

Export barcode as an image and base64 string is common for barcode,QRcode and datamatrix. The following code samples explain how to export the barcode as an image and base64 string.

## Export

Barcode provides the support to export its content as an image in the specified image type and downloads it in the browser.
The following code example shows how to export the barcode as an image

```typescript

    let filename = 'Export';
    this.barcode.exportImage(filename,'JPG');

```

The filename specifies the name of the file to be downloaded.

### Export As Base64String

Barcode provides the support to export its content as an image in the specified image type and returns it as base64 string.
The following code example shows how to export the barcode as a base64 string

```typescript

async function () {
    await this.barcode.exportAsBase64Image('JPG');
};

```

>**Note:**
>Format is to specify the type or format of the exported file. You can export the barcode to the following formats:
>* JPG.
>* PNG.