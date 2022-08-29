---
layout: post
title: Column reorder in Angular Grid component | Syncfusion
description: Learn here all about Column reorder in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column reorder 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Column reorder in Angular Grid component

Reordering can be done by drag and drop of a particular column header from one index to another index within the grid.
To enable reordering, set the [`allowReordering`](../../api/grid/#allowreordering) to true.

To use Reordering, you need to inject **ReorderService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reorder-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/reorder-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reorder-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/reorder-cs1/app/app.component.ts" % }

> You can disable reordering a particular column by setting the [`columns.allowReordering`](../../api/grid/column/#allowreordering) to false.

## Reorder single columns

Grid have option to reorder Columns either by Interaction or by using the [`reorderColumns`](../../api/grid/#reordercolumns) method. In the below sample, **ShipCity** column is reordered to last column position by using the method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reorder-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/reorder-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reorder-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/reorder-cs2/app/app.component.ts" % }

## Reorder multiple columns

User can reorder a single column at a time by Interaction. Sometimes we need to have reorder multiple columns at the same time, It can be achieved through programmatically by using [`reorderColumns`](../../api/grid/#reordercolumns) method.

In the below sample, **Ship City** and **Ship Region** column is reordered to last column position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reorder-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/reorder-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reorder-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/reorder-cs3/app/app.component.ts" % }

## Reorder events

During the reorder action, the grid component triggers the below three events.

1. The [`columnDragStart`](../../api/grid/#columndragstart) event triggers when column header element drag (move) starts.
2. The [`columnDrag`](../../api/grid/#columndrag) event triggers when column header element is dragged (moved) continuously.
3. The [`columnDrop`](../../api/grid/#columndrop) event triggers when a column header element is dropped on the target column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reorder-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/reorder-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reorder-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/reorder-cs4/app/app.component.ts" % }