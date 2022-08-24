---
layout: post
title: Scrolling in Angular Grid component | Syncfusion
description: Learn here all about Scrolling in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Scrolling 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Scrolling in Angular Grid component

 The scrollbar will be displayed in the grid when content exceeds the element [`width`](../api/grid/#width) or
 [`height`](../api/grid/#height).
 The vertical and horizontal scrollbars will be displayed based on the following criteria:

* The vertical scrollbar appears when the total height of rows present in the grid exceeds its element height.
* The horizontal scrollbar appears when the sum of columns width exceeds the grid element width.
* The [`height`](../api/grid/#height) and [`width`](../api/grid/#width)
are used to set the grid height and width, respectively.

> The default value for [`height`](../api/grid/#height) and [`width`](../api/grid/#width) is `auto`.

## Set width and height

To specify the [`width`](../api/grid/#width) and [`height`](../api/grid/#height)
of scroller in pixel, set the pixel value as number.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/scrolling-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/scrolling-cs1/app/app.component.ts" % }

## Responsive with parent container

Specify the [`width`](../api/grid/#width) and [`height`](../api/grid/#height)
as **100%** to make the grid element fill its parent container.
Setting the [`height`](../api/grid/#height) to **100%** requires the grid parent element to have explicit height.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/scrolling-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/scrolling-cs2/app/app.component.ts" % }

## Scroll To Selected Row

You can scroll the grid content to the selected row position by using the
[`rowSelected`](../api/grid/#rowselected) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-select-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/scrolling-select-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-select-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/scrolling-select-cs1/app/app.component.ts" % }

## Hide the scrollbar when the content is not overflown

You can hide the scrollbar of Grid content by using the [`hideScroll`](../api/grid/#hidescroll) method when the content doesn't overflow its parent element.

In the following sample, we have invoked the [`hideScroll`](../api/grid/#hidescroll) method inside the [`dataBound`](../api/grid/#databound) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/scrolling-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/scrolling-cs3/app/app.component.ts" % }

## Sticky Header

You can make the Grid column headers remain fixed while scrolling by using the [`enableStickyHeader`](../api/grid/#enablestickyheader) property.

In the below demo, the Grid headers will be sticky while scrolling the Grid's parent div element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/scrolling-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/scrolling-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/scrolling-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/scrolling-cs4/app/app.component.ts" % }
