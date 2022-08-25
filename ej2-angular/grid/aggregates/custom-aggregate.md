---
layout: post
title: Custom aggregate in Angular Grid component | Syncfusion
description: Learn here all about Custom aggregate in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Custom aggregate 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Custom aggregate in Angular Grid component

Sometimes you can have a scenario to calculate aggregate value using your own aggregate function,
 we can achieve this behavior using the custom aggregate option.
To use custom aggregation, specify the
[`type`](../../api/grid/aggregateColumnDirective/#type) as **Custom** and provide the custom aggregate
function in the [`customAggregate`](../../api/grid/aggregateColumnDirective/#customaggregate) property.

The custom aggregate function will be invoked with different arguments for Total and Group aggregations.
* **Total aggregation** - the custom aggregate function will be called with whole data and the current [`AggregateColumn`](../../api/grid/aggregateColumnDirective)
object.
* **Group aggregation** - it will be called with current group details and the [`AggregateColumn`](../../api/grid/aggregateColumnDirective) object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-custom-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-custom-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-custom-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/aggregates-custom-cs2/app/app.component.ts" % }

> To access the custom aggregate value inside template, use the key as **Custom**