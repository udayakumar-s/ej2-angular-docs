---
layout: post
title: Selection in Angular Heatmap chart component | Syncfusion
description: Learn here all about Selection in Syncfusion Angular Heatmap chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Selection 
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Angular Heatmap chart component

In the HeatMap, the cell selection is used to select the single or multiple heat map cells at runtime and get the selected cell details using the [cellSelected](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#cellselected) event. You can enable the cell selection using the [allowSelection](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#allowselection) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/selection/cellSelection-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/selection/cellSelection-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/selection/cellSelection-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/selection/cellSelection-cs1" %}

## Enable single cell selection

In the HeatMap, the [enableMultiSelect](https://helpej2.syncfusion.com/angular/documentation/api/heatmap/#enablemultiselect) property is used to allow single cell selection. When you set the `enableMultiSelect` property to **false**, only one cell is selected. By default, `enableMultiSelect` property is set to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/selection/singleCellSelection-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/heatmap/selection/singleCellSelection-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/selection/singleCellSelection-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/selection/singleCellSelection-cs1" %}
