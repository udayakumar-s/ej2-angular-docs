---
layout: post
title: Data markers in Angular Chart component | Syncfusion
description: Learn here all about Data markers in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data markers 
documentation: ug
domainurl: ##DomainURL##
---

# Data markers in Angular Chart component

Data markers are used to provide information about the data points in the series. You can add a shape to adorn
each data point.

<!-- markdownlint-disable MD036 -->

## Marker

<!-- markdownlint-disable MD036 -->

Markers can be added to the points by enabling the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel/#visible)
option of the marker property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/marker-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs1" %}

## Shape

Markers can be assigned with different shapes such as Rectangle, Circle, Diamond etc using the `shape`property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/marker-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs2" %}

>Note : To know more about the marker shape type refer the [`shape`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettings/#shape).

## Images

Apart from the shapes, you can also add custom images to mark the data point using the
[`imageUrl`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel/#imageurl) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/marker-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs3" %}

## Customization

Marker's color and border can be customized using `fill` and `border` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/marker-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs4" %}

## Customizing Specific Point

You can also customize the specific marker and label using
[`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs/) event.
`pointRender` event allows you to change the shape, color and border for a point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/marker-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs5" %}

## See Also

* [Customize the marker with different shape](./how-to/marker-customization/#customize-the-marker-with-different-shape)