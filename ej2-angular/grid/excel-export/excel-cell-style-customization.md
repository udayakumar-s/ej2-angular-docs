---
layout: post
title: Excel cell style customization in Angular Grid component | Syncfusion
description: Learn here all about Excel cell style customization in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Excel cell style customization 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Excel cell style customization in Angular Grid component

## Conditional cell formatting

Grid cells in the exported Excel can be customized or formatted using [`excelQueryCellInfo`](../../api/grid/excelQueryCellInfoEventArgs) event. In this event, we can format the grid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for **Freight** column in the exported excel by **args.cell** and **backColor** property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-exporting-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/excel-exporting-cs2/app/app.component.ts" % }

## Theme

The excel export provides an option to include theme for exported excel document.

To apply theme in exported Excel, define the [`theme`](../../api/grid/excelExportProperties/#theme) in [`excelExportProperties`](../../api/grid/excelExportProperties/) .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-exporting-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/excel-exporting-cs3/app/app.component.ts" % }

>By default, material theme is applied to exported excel document.