---
layout: post
title: Pareto in Angular Chart component | Syncfusion
description: Learn here all about Pareto in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pareto
documentation: ug
domainurl: ##DomainURL##
---

# Pareto in Angular Chart component

## Pareto

Pareto charts are used to find the cumulative values of data in different categories. It is a combination of Column and Line series.
The initial values are represented by column chart and the cumulative values are represented by Line chart.
To render a pareto chart, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#type) as `Pareto` and inject `ParetoSeries` `ColumnSeries` and  `LineSeries` module.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/line-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/line-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/line-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs10" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
