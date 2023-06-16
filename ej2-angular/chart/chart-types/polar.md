---
layout: post
title: Polar in Angular Chart component | Syncfusion
description: Learn here all about Polar in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Polar
documentation: ug
domainurl: ##DomainURL##
---

# Polar in Angular Chart component

## Polar

To render a polar series, use series[`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#type) as `Polar` and inject `PolarSeriesService`  into the `@NgModule.providers`.

## Draw Types

Polar drawType property is used to change the series plotting type to line, column, area, range column, spline, scatter, stacking area and stacking column. The default value of drawType is `Line`.

### Line

To render a line draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `Line` and inject `LineSeriesService` inject `LineSeriesService`  into the `@NgModule.providers`. [`isClosed`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#isclosed) property specifies whether to join start and end point of a line series used in polar chart to form a closed path. Default value of isClosed is true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs3" %}

### Spline

To render a spline line draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `Spline` and inject `SplineSeriesService` inject `SplineSeriesService`  into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs4" %}

### Area

To render a area line draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `Area` and inject `AreaSeriesService`  into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs5" %}

### Stacked Area

To render a stacked area draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `StackingArea` and inject `StackingAreaSeriesService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs6" %}

### Column

To render a column draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `Column` and inject `ColumnSeriesService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs7" %}

### Stacked Column

To render a stacked column draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `StackingColumn` and inject `StackingColumnSeriesService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs8" %}

### Range Column

To render a range column draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `RangeColumn` and inject `RangeColumnSeriesService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs9" %}

### Scatter

To render a scatter draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `Scatter` and inject `ScatterSeriesService`  into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs10" %}

## Series Customization

## Start angle

You can customize the start angle of the polar series using [`startAngle`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#startangle) property. By default, `startAngle` is 0 degree.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs" %}

## Radius

You can customize the radius of the polar series and polar series using [`coefficient`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#coefficient) property. By default, `coefficient` is 100.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs01/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs01/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs01/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs01" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)