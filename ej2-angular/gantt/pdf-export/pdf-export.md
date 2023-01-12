---
layout: post
title: Pdf export in Angular Gantt component | Syncfusion
description: Learn here all about Pdf export in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pdf export 
documentation: ug
domainurl: ##DomainURL##
---

# Pdf export in Angular Gantt component

PDF export allows exporting Gantt data to PDF document. You need to use the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#pdfexport) method for exporting. To enable PDF export in the Gantt, set the [`allowPdfExport`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowpdfexport) to true.

To export data to PDF document, inject the `PdfExport` module in Gantt.

>Note: Currently, we do not have support for exporting manually scheduled tasks.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/pdf-export-cs14/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/pdf-export-cs14/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/pdf-export-cs14/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/gantt/pdf-export-cs14" %}