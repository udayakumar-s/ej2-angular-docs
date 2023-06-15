---
layout: post
title: Column chooser in Angular Grid component | Syncfusion
description: Learn here all about Column chooser in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column chooser 
documentation: ug
domainurl: ##DomainURL##
---

# Column chooser in Angular Grid component

The column chooser has options to show or hide columns dynamically. It can be enabled by defining the [`showColumnChooser`](https://ej2.syncfusion.com/angular/documentation/api/grid/#showcolumnchooser) as true.

To use column chooser, inject **ColumnChooserService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/columnchooser-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/columnchooser-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/columnchooser-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/columnchooser-cs1" %}

> You can hide the column names in column chooser by defining the [`columns.showInColumnChooser`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#showincolumnchooser) as false.

## Open column chooser by external button

The Column chooser can be displayed on a page through external button by invoking the [`openColumnChooser`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnChooser/#opencolumnchooser) method with **X** and **Y** axis positions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/columnschooser-method-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/columnschooser-method-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/columnschooser-method-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/columnschooser-method-cs1" %}