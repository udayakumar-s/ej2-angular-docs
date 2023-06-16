---
layout: post
title: Zooming in Angular Chart component | Syncfusion
description: Learn here all about Zooming in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Zooming 
documentation: ug
domainurl: ##DomainURL##
---

# Zooming in Angular Chart component

## Enable Zooming

Chart can be zoomed in three ways.

* Selection - By setting [`enableSelectionZooming`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel/#enableselectionzooming) property to true in `zoomSettings`, you can zoom the chart by using the rubber band selection.
* Mousewheel - By setting [`enableMouseWheelZooming`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel/#enablemousewheelzooming) property to true in `zoomSettings`, you can zoomin and zoomout the chart by scrolling the mouse wheel.
* Pinch - By setting  [`enablePinchZooming`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel/#enablepinchzooming) property to true in `zoomSettings`, you can zoom the chart through pinch gesture in touch enabled devices.

>Pinch zooming is supported only in browsers that support multi-touch gestures. Currently IE11, Chrome and Opera browsers support multi-touch in desktop devices.

To known about Zooming and Panning, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=B9_gRlZ5B94" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs5" %}

>Note: To use zooming feature, we need to inject `ZoomService` into the `NgModule.providers`.

After zooming the chart, a zooming toolbar will appear with `zoom`,`zoomin`, `zoomout`, `pan` and `reset` buttons.
Selecting the Pan option will allow to pan the chart and selecting the Reset option will reset the zoomed chart.

## Modes

The [`mode`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel/#mode) property in zoomSettings specifies whether the chart is allowed to scale along the horizontal axis or vertical axis. The default value of the mode is XY (both axis).

There are three types of mode.

* X - Allows us to zoom the chart horizontally.
* Y - Allows us to zoom the chart vertically.
* XY - Allows us to zoom the chart both vertically and horizontally.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs6" %}

## Toolbar

By default, zoomin, zoomout, pan and reset buttons will be displayed for zoomed chart. You can customize to show the desired options in the toolbar using the [`toolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel/#toolbaritems) property. Also using the [`showToolbar`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel/#showtoolbar) property, you can show toolkit for zooming and panning the chart during initial rendering itself.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs7" %}

## Enable pan

Using [`enablePan`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel/#enablePan) property you can able to pan the zoomed chart without help of toolbar items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs8" %}

## Enable Scrollbar

Using `enableScrollbar` property, you can able to add scrollbar for zoomed chart. Using this scrollbar, you can pan or zoom the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/scrollbar-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/user-interaction/scrollbar-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/scrollbar-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/scrollbar-cs1" %}

## Auto interval on zooming

By using [`enableAutoIntervalOnZooming`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis/#enableAutoIntervalOnZooming) property, the axis interval will get calculated automatically with respect to the zoomed range.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs9" %}