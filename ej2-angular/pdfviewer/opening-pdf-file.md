---
layout: post
title: Opening PDF file in Angular Pdfviewer Component | Syncfusion
description: This page helps you to learn about how to load PDF files from various locations in Syncfusion's Essential JS 2 and more.
platform: ej2-angular
control: Opening PDF files
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF files in the PDF Viewer for Angular from various storage locations

You might need to open and view the PDF files from various locations. In this section, you can find information about how to open PDF files from Azure Blob Storage, AWS S3, and Google Cloud Storage.

## Opening a PDF from Azure Blob Storage

The following steps are used to load PDF from Azure Blob Storage in the PDF Viewer.

**Step 1:** Follow the steps provided in this [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) o create a simple PDF Viewer sample in Angular.

**Step 2:** Add the following code to the controller.cs file in the web service project to load a PDF from Azure Blob Storage [Refer to this link to create web service project](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above). In the `GetDocumentfromAzure()` method, it will return a PDF document into a base64 string.

```c#
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;

[AcceptVerbs("Get")]
[HttpGet("GetDocumentfromAzure")]
Route("[controller]/GetDocumentfromAzure")]
    
public IActionResult GetDocumentfromAzure()
{
    //Connection String of Storage Account
    string _connectionString = "Here Place Your Connection string";

    // Create a BlobServiceClient object by passing the connection string.
    BlobServiceClient blobServiceClient = new BlobServiceClient(_connectionString);

    // Get a reference to the container
    string _containerName = "Here Place Your container string";

    //File Name to be loaded into Syncfusion PDF Viewer
    string fileName = "Here Place Your fileName"; 

    // Get a reference to the container
    BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_containerName);

    // Get a reference to the block blob
    BlockBlobClient blockBlobClient = containerClient.GetBlockBlobClient(fileName);

    // Create a memory stream to download the blob content
    MemoryStream memoryStream = new MemoryStream();
    blockBlobClient.DownloadTo(memoryStream);

    // Convert the stream to a byte array and base64-encode it
    string base64String = Convert.ToBase64String(memoryStream.ToArray());
    
    // Return the base64-encoded PDF content as a response
    return Content("data:application/pdf;base64," + base64String);
}
```

**Step 3:** In the following code, an XMLHttpRequest will generate the responseText from the base64 string and set that text as the `documentPath` of the PDF Viewer.

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>
<input type="submit" value="Get document from Azure" class="Button" id="button" />

  <script type="text/javascript">
    $('#button').click(function () {
      $.ajax({
            // Replace the "localhost:44309" with the actual URL of your server
        url: 'https://localhost:44309/pdfviewer/GetDocumentfromAzure',
        type: "GET",

        success: function (data) {
          viewer = document.getElementById('pdfViewer').ej2_instances[0];
                // Data parameter contains the response data, which is the base64-encoded PDF content
          viewer.documentPath = data;
        }

      });
    });
  </script>
```

N> The **Azure.Storage.Blobs** NuGet package must be installed in your application to use the previous code example.

N> Replace **Here Place Your Connection string** with the actual connection string for your Azure Blob Storage account and **Here Place Your container string** with the actual container name 

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20from%20Azure%20Blob%20Storage).

## Opening a PDF from AWS S3

The following steps are used to load a PDF from AWS S3 in the PDF Viewer.

**Step 1:** Follow the steps provided in this [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample in Angular.

**Step 2:** Add the following code to the controller.cs file in the web service project to load a PDF from Azure Blob Storage [Refer to this link to create web service project](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above). In the `GetDocumentfromAWSS3()` method, it will return a PDF document into a base64 string.

```c#
  using System.IO;
  using Amazon;
  using Amazon.S3;

  [AcceptVerbs("Get")]
  [HttpGet("GetDocumentfromAWSS3")]
  [Route("[controller]/GetDocumentfromAWSS3")]

  public async Task<IActionResult> GetDocumentfromAWSS3()
  {
    // Specify the AWS region and create an instance of the Amazon S3 client
    RegionEndpoint bucketRegion = RegionEndpoint.USEast1;

    // Configure the AWS SDK with your access credentials and other settings
    var s3Client = new AmazonS3Client("your-access-key", "your-secret-key", bucketRegion);

    //File Name to be loaded into the Syncfusion PDF Viewer
    string document = "your-document-name.pdf";

    // Specify the document name or retrieve it from a different source
    var response = await s3Client.GetObjectAsync("your-bucket-name", document);

    // Copy the response stream to a memory stream:
    Stream responseStream = response.ResponseStream;
    MemoryStream memStream = new MemoryStream();
    responseStream.CopyTo(memStream);
    memStream.Seek(0, SeekOrigin.Begin);

    // Convert the stream to a byte array and base64-encode it
    string base64String = Convert.ToBase64String(memStream.ToArray());

   // Return the base64-encoded PDF content as a response
    return Content("data:application/pdf;base64," + base64String);
  }
```

**Step 3:** In the following code, an XMLHttpRequest will generate the responseText from the base64 string and set that text as the `documentPath` of the PDF Viewer.

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>
<input type="submit" value="Get the document from AWS S3" class="Button" id="button" />

  <script type="text/javascript">
    $('#button').click(function () {
      $.ajax({
        // Replace the "localhost:44309" with the actual URL of your server
        url: 'https://localhost:44309/pdfviewer/GetDocumentfromAWSS3',
        type: "GET",

        success: function (data) {
          viewer = document.getElementById('pdfViewer').ej2_instances[0];
          // Data parameter contains the response data, which is the base64-encoded PDF content
          viewer.documentPath = data;
        }

      });
    });
  </script>
```

N> The **AWSSDK.S3** NuGet package must be installed in your application to use the previous code example.

N>  Replace **your-access-key** and **your-secret-key** with your actual AWS access key and secret key. Also, make sure to specify the correct document name.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20from%20AWS%20S3%20Storage)

## Opening a PDF from Google Cloud Storage

The following steps are used to load a PDF from Google Cloud Storage in the PDF Viewer.

**Step 1:** Follow the steps provided in this [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample in Angular.

**Step 2:** Add the following code to the controller.cs file in the web service project to load a PDF from Google Cloud Storage [Refer to this link to create web service project](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above). In the `GetDocumentfromGCS()` method, it will return a PDF document into a base64 string.

```c#

using System.IO;
using Google.Cloud.Storage.V1;
using Google.Apis.Auth.OAuth2;

public class PdfViewerController : Controller
{
 // Private readonly object _storageClient
  private readonly StorageClient _storageClient;

  public PdfViewerController(IHostingEnvironment hostingEnvironment, IMemoryCache cache)
  {

    // The key file is used to authenticate with Google Cloud Storage.
    string keyFilePath = "path/to/service-account-key.json";

    // Load the service account credentials from the key file.
    var credentials = GoogleCredential.FromFile(keyFilePath);

    // Create a storage client with Application Default Credentials
    _storageClient = StorageClient.Create(credentials);
  }
    
  [AcceptVerbs("Get")]
  [HttpGet("GetDocumentfromGCS")]
  [Route("[controller]/GetDocumentfromGCS")]
    
  public IActionResult GetDocumentfromGCS()
  {
    // Create a new MemoryStream object
    var stream = new MemoryStream();

    // Declare a string variable that stores the bucket name.
    string bucketName = "your-bucket-name";

    // Declare a string variable that stores the path to a PDF document within the Google Cloud Storage bucket.
    string objectName = "path/to/your/pdf/document.pdf";

    // Download a PDF document from Google Cloud Storage and store it in the MemoryStream object
    _storageClient.DownloadObject(bucketName, objectName, stream);

    // Set the position of the MemoryStream object to the beginning of the stream
    stream.Position = 0;

    // converts the contents of the MemoryStream object to a byte array.
    byte[] bytes = stream.ToArray();

    // Convert the byte array to a base64-encoded string
    string base64 = System.Convert.ToBase64String(bytes);

    // Return the base64-encoded PDF document as a response
    return Content("data:application/pdf;base64," + base64);
  }
}

```
N>  Replace **path/to/service-account-key.json** with the actual file path to your service account key JSON file. Make sure to provide the correct path and filename.

**Step 3:** In the following code, an XMLHttpRequest will generate the responseText from the base64 string and set that text as the `documentPath` of the PDF Viewer.

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>
<input type="submit" value="Get the document from CGS" class="Button" id="button" />

  <script type="text/javascript">
    $('#button').click(function () {
      $.ajax({
        // Replace the "localhost:44309" with the actual URL of your server
        url: 'https://localhost:44309/pdfviewer/GetDocumentfromGCS',
        type: "GET",

        success: function (data) {
          viewer = document.getElementById('pdfViewer').ej2_instances[0];
          // Data parameter contains the response data, which is the base64-encoded PDF content
          viewer.documentPath = data;
        }

      });
    });
  </script>
```

N> The **Google.Cloud.Storage.V1** NuGet package must be installed in your application to use the previous code example.

N>  Replace **your-bucket-name** with the actual name of your Google Cloud Storage bucket, and **path/to/your/pdf/document.pdf** with the actual path to your PDF document within the bucket.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20from%20Google%20Cloud%20Storage)