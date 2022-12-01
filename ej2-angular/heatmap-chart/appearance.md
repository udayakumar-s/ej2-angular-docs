---
layout: post
title: Appearance in Angular Heatmap chart component | Syncfusion
description: Learn here all about Appearance in Syncfusion Angular Heatmap chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular Heatmap chart component

## Cell customizations

You can customize the cell by using the `cellSettings` property.

### Border

Change the width, color, and radius of the heat map cells by using the [`border`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettings/#border) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/cellborder-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/cellborder-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/cellborder-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/heatmap/appearance/cellborder-cs1" %}

### Cell highlighting

Enable or disable the cell highlighting while hover over the heat map cells by using the [`enableCellHighlighting`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettings/#enablecellhighlighting) property.

>Note: The cell highlighting only works in a SVG rendering mode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/cellhighlighting-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/cellhighlighting-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/cellhighlighting-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/heatmap/appearance/cellhighlighting-cs1" %}

### Color gradient mode

You can set the minimum and maximum value colors based on row and column using the `colorGradientMode` property. The types of colorGradientMode,

* Table: The minimum and maximum value colors calculated for overall data.
* Row: The minimum and maximum value colors calculated for each row of data.
* Column: The minimum and maximum value colors calculated for each column of data.

>Note: The default value of `colorGradientMode` is Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/colormode-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/colormode-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/colormode-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/heatmap/appearance/colormode-cs1" %}

## Margin

Set the margin for the heat map from its container by using the [`margin`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#margin) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/cellmargin-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/cellmargin-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/cellmargin-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/heatmap/appearance/cellmargin-cs1" %}

## Title

The title is used to provide a quick information about the data plotted in heat map. The [`text`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/title/#text) property is used to set the title for heat map. You can also customize text style of a title by using the [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/title/#textstyle) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/celltitle-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/celltitle-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/celltitle-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/heatmap/appearance/celltitle-cs1" %}

## Data label

You can toggle the visibility of data labels by using the [`showLabel`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettings/#showlabel) property . By default, the data label will be visible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/datalabel-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/datalabel-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/datalabel-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/heatmap/appearance/datalabel-cs1" %}

### Text style

You can customize the font family, font size, and color of the data label by using the [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettings/#textstyle) in the `cellSettings` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/textStyle-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/textStyle-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/textStyle-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/heatmap/appearance/textStyle-cs1" %}

### Format

You can change the format of the data label, such as currency, decimal, percent etc. by using [`format`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettings/#format) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/format-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/format-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/format-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/heatmap/appearance/format-cs1" %}

## Customize the cell value

In the HeatMap, you can customize the cell value using the [`cellRender`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#cellrender) client-side event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/appearance/cellrender-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/appearance/cellrender-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/appearance/cellrender-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/heatmap/appearance/cellrender-cs1" %}

## See Also

* [To customize the appearance of tool tip](./tooltip/#customize-the-appearance-of-tooltip)