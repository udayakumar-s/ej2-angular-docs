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

In the HeatMap, the cell selection is used to select the single or multiple heat map cells at runtime and get the selected cell details using the [`cellSelected`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#cellselected) client-side event. You can enable this cell selection using the [`allowSelection`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#allowselection) property.

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
  
{% previewsample "page.domainurl/code-snippet/heatmap/selection/cellSelection-cs1" %}
