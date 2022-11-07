---
layout: post
title: Polar radar in Angular Chart component | Syncfusion
description: Learn here all about Polar radar in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Polar radar 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Polar radar in Angular Chart component

## Polar Chart

To render a polar series, use series[`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#type) as `Polar` and
inject `PolarSeriesService`  into the `@NgModule.providers`.

### Draw Types

Polar drawType property is used to change the series plotting type to line, column, area, range column, spline,
scatter, stacking area and stacking column. The default value of drawType is `Line`.

**Line**

To render a line draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `Line` and inject
`LineSeriesService` inject `LineSeriesService`  into the `@NgModule.providers`.
[`isClosed`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#isclosed) property specifies whether to join start and end point of
 a line series used in polar chart to form a closed path. Default value of isClosed is true.

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
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs3" %}

**Spline**

To render a spline line draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `Spline`
and inject `SplineSeriesService` inject `SplineSeriesService`  into the `@NgModule.providers`.

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
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs4" %}

**Area**

To render a area line draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `Area` and
inject `AreaSeriesService`  into the `@NgModule.providers`.

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
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs5" %}

**Stacked Area**

To render a stacked area draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `StackingArea` and inject `StackingAreaSeriesService`
into the `@NgModule.providers`.

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
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs6" %}

**Column**

To render a column draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `Column` and inject `ColumnSeriesService`
into the `@NgModule.providers`.

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
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs7" %}

**Stacked Column**

To render a stacked column draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `StackingColumn` and inject `StackingColumnSeriesService`
into the `@NgModule.providers`.

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
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs8" %}

**Range Column**

To render a range column draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `RangeColumn` and inject `RangeColumnSeriesService`
into the `@NgModule.providers`.

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
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs9" %}

**Scatter**

To render a scatter draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `Scatter` and
inject `ScatterSeriesService`  into the `@NgModule.providers`.

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
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs10" %}

## Radar Chart

To render a radar series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#type) as `Radar` and
inject `RadarSeriesService` into the `@NgModule.providers`.

### Draw Type

**Line**

To render a line draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `Line` and inject
`LineSeriesService` inject `LineSeriesService`  into the `@NgModule.providers`.
[`isClosed`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#isclosed) property specifies whether to join start and end point of
a line series used in polar chart to form a closed path. Default value of isClosed is true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs11" %}

### Customization

**Start Angle**

You can customize the start angle of the polar series using
[`startAngle`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#startangle) property. By default, `startAngle` is 0 degree.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs12/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs12/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs12/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs12" %}

**Coefficient in axis**

You can customize the radius of the polar series and radar series using
[`coefficient`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#coefficient) property. By default, `coefficient` is 100.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs13/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs13/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs13/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs13" %}

**DashArray**

You can customize the DashArray of the polar series and radar series using
[`dashArray`](https://ej2.syncfusion.com/angular/documentation/api/chart) property. By default, `dashArray` is 0.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs14/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs14/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs14/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs14" %}

**Marker and Customization**

Markers can be added to the points by enabling the visible option of the
[`marker`](https://ej2.syncfusion.com/angular/documentation/api/chart) property. Markers can be assigned with different shapes such as Rectangle, Circle, Diamond, Pentagon etc using the `shape` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs15/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs15/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs15/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs15" %}

**Datalabel and customization**

You can customize the dataLabel of the polar series and radar series using
[`dataLabel`](https://ej2.syncfusion.com/angular/documentation/api/chart) property. By setting `dataLabel` visible true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs16/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs16/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs16/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs16" %}

**Axis label and customization**

You can customize the Axis label of the polar series and radar series using `labelStyle`,
`labelPlacement`, `labelRotation`, `labelIntersectAction` properties in the `primaryXAxis` and
`primaryYAxis`.
In the below sample `labelPlacement` and `labelStyle` properties is used in `primaryXAxis`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs17/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs17/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs17/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs17" %}

**Annotation**

Annotations are used to mark the specific area of interest in the chart area with texts, shapes or images.
You can add annotations to the chart by using the annotations option.
By using the `content` option of annotation object, you can specify either the id of the element or directly specify the element in the content that needs to be displayed in the chart area.
Specified the `coordinateUnits` of the annotation either `Pixel` or `Point`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs18/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs18/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs18/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs18" %}

**Point customization**

You can customize the series points with patterns by using the `pointColorMapping` property.
To customize the series point colors, define the patterns and map the pattern URL to the series point using `pointColorMapping` property in series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs19/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs19/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs19/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs19" %}

To known about polar and radar charts, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=i-fo4QnEQZI" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
