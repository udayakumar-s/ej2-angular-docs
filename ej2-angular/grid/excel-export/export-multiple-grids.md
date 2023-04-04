---
layout: post
title: Export multiple grids in Angular Grid component | Syncfusion
description: Learn here all about Export multiple grids in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Export multiple grids 
documentation: ug
domainurl: ##DomainURL##
---

# Export multiple grids in Angular Grid component

The excel export provides an option to export multiple grid data in the same excel file.

## Same sheet

The excel export provides support to export multiple grids in same sheet. To export in same sheet, define [`multipleExport.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#multipleexport) as **AppendToSheet** in [`excelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/). It have an option to provide blank rows between grids. These blank rows count can be defined by using the **multipleExport.blankRows**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs12/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-exporting-cs12/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs12/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/excel-exporting-cs12" %}

>By default, **multipleExport.blankRows** value is 5.

## New sheet

Excel exporting provides support to export multiple grids in new sheet. To export in new sheet, define  **multipleExport.type** as **NewSheet** in [`excelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs13/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-exporting-cs13/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs13/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/excel-exporting-cs13" %}