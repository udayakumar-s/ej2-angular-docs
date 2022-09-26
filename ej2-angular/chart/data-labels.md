---
layout: post
title: Data labels in Angular Chart component | Syncfusion
description: Learn here all about Data labels in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data labels 
documentation: ug
domainurl: ##DomainURL##
---

# Data labels in Angular Chart component

Data label can be added to a chart series by enabling the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/dataLabelSettings/#visible)
option in the dataLabel. By default, the labels will arrange smartly without overlapping.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs1" %}

>Note: To use datalabel feature, we need to inject `DataLabelService` into the `@NgModule.providers`.

## Position

Using [`position`](https://ej2.syncfusion.com/angular/documentation/api/chart/dataLabelSettings/#position) property, you can place the label either on
`Top`, `Middle`,`Bottom` or `Outer` (outer is applicable for column and bar type series).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs2" %}

>Note: The position `Outer` is applicable for column and bar type series.

## Datalabel template

Label content can be formatted by using the template option. Inside the template, you can add the placeholder text
`${point.x}` and `${point.y}` to display corresponding data points x & y value.
Using [`template`](https://ej2.syncfusion.com/angular/documentation/api/chart/dataLabelSettingsModel/#template) property, you can set data label template
in chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs3" %}

## Text Mapping

Text from the data source can be mapped using `name` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs4" %}

## Margin

`margin` for data label can be applied to using `left`, `right`, `bottom` and `top` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs5" %}

## DataLabel Rotation

Using `angle` property, you can rotate the data label by its given angle.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs6" %}

## Customization

`stroke` and `border` of data label can be customized using `fill` and `border` properties. Rounded corners
can be customized using `rx` and `ry` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs7" %}

>Note: `rx` and `ry` properties requires `border` values not to be null.

## Customizing Specific Point

You can also customize the specific marker and label using
[`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs/) and
[`textRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iTextRenderEventArgs/) event.
 `pointRender` event allows you to change the shape, color and border for a point, whereas the `textRender` event
allows you to change the text for the point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs8" %}

## Show percentage based on each series points

You can calculate the percentage value based on the sum for each series using the `seriesRender` and `textRender` events in the chart. In `seriesRender` calculate the sum of each series y values and In `textRender` calculate percentage value based on the sum value and modify the text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/datalabel-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs9" %}

## See Also

* [Show total stacking values in data label](./how-to/stacking-total/#show-the-total-value-for-stacking-series-in-data-label)
* [Prevent the data label when the data value is 0](./how-to/prevent-data-label/#prevent-the-data-label-when-the-data-value-is-0)