---
layout: post
title: Auto fit columns in Angular Grid component | Syncfusion
description: Learn here all about Auto fit columns in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Auto fit columns 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Auto fit columns in Angular Grid component

The [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns) method resizes the column to fit the widest
cell's content without wrapping. You can autofit specific columns at initial rendering by invoking
the [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns) method in [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event.

To use autofit feature, you need to inject **ResizeService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/resize-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/resize-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/resize-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/resize-cs1" %}

> You can autofit all columns, by invoking the [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns)
method without column name.