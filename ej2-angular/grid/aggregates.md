---
layout: post
title: Aggregates in Angular Grid component | Syncfusion
description: Learn here all about Aggregates in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Aggregates 
publishingplatform: ##Platform_Name##
documentation: ug
---

<<<<<<< HEAD
<<<<<<< HEAD
---
title: "Aggregates"
component: "Grid"
description: "Learn how to aggregate rows, apply custom aggregates, and format the aggregate values in the Essential JS 2 DataGrid control."
---

# Aggregates in Angular Grid component

Aggregate values are displayed in the footer, group footer and group caption of Grid. It can be configured through **e-aggregates** directive.
The [`field`](../api/grid/aggregateColumnDirective/#field) and [`type`](../api/grid/aggregateColumnDirective/#type)
 are the minimum properties required to represent an aggregate column.

To use aggregate feature, you need to inject the **AggregateService** module into the **@NgModule.providers** section.

By default, the aggregate value can be displayed in footer, group and caption cells, to
show the aggregate value in any of these cells, use the [`footerTemplate`](../api/grid/aggregateColumn/#footertemplate),
[`groupFooterTemplate`](../api/grid/aggregateColumn/#groupfootertemplate) and
[`groupCaptionTemplate`](../api/grid/aggregateColumn/#groupcaptiontemplate) properties.

## Built-in aggregate types

Aggregate type must be specified in [`type`](../api/grid/aggregateColumnDirective/#type) property to configure an aggregate column.

The built-in aggregates are,
* Sum
* Average
* Min
* Max
* Count
* TrueCount
* FalseCount

> * Multiple aggregates can be used for an aggregate column by setting the [`type`](../api/grid/aggregateColumnDirective/#type)
 property
with an array of aggregate type.
> * Multiple types for a column is supported only when one of the aggregate templates is used.

## Footer Aggregate

Footer aggregate value is calculated from all the rows and it can be displayed in footer cells. Use
[`footerTemplate`](../api/grid/aggregateColumnDirective/#footertemplate) to render the aggregate value in footer cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-footer-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-footer-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-footer-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/aggregates-footer-cs1/app/app.component.ts" % }

> * Use the template reference variable name as **#footerTemplate** to specify the footer template.
> * The aggregate values must be accessed inside the template using their corresponding
[`type`](../api/grid/aggregateColumnDirective/#type) name.

## Format the Aggregate Value

You can format the aggregate value result by using the
[`format`](../api/grid/aggregateColumn/#format) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-footer-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-footer-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-footer-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/aggregates-footer-cs2/app/app.component.ts" % }

## Group and Caption Aggregate

Group and caption aggregate values are calculated from the current group items.
If [`groupFooterTemplate`](../api/grid/aggregateColumnDirective/#groupfootertemplate) is provided then the aggregate values can be displayed
 in the group footer cells and
if [`groupCaptionTemplate`](../api/grid/aggregateColumnDirective/#groupcaptiontemplate)
 is provided then aggregate values can be displayed in the group caption cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/aggregates-group-cs1/app/app.component.ts" % }

> * Use the template reference variable name as **#groupFooterTemplate** to specify the group footer template
and as **#groupCaptionTemplate** to specify the group caption template.
> * The aggregate values must be accessed inside the template using their corresponding [`type`](../api/grid/aggregateColumnDirective/#type)
name.

## Custom Aggregate

Sometimes you can have a scenario to calculate aggregate value using your own aggregate function,
 we can achieve this behavior using the custom aggregate option.
To use custom aggregation, specify the
[`type`](../api/grid/aggregateColumnDirective/#type) as **Custom** and provide the custom aggregate
function in the [`customAggregate`](../api/grid/aggregateColumnDirective/#customaggregate) property.

The custom aggregate function will be invoked with different arguments for Total and Group aggregations.
* **Total aggregation** - the custom aggregate function will be called with whole data and the current [`AggregateColumn`](../api/grid/aggregateColumnDirective)
object.
* **Group aggregation** - it will be called with current group details and the [`AggregateColumn`](../api/grid/aggregateColumnDirective) object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-custom-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-custom-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-custom-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/aggregates-custom-cs1/app/app.component.ts" % }

> To access the custom aggregate value inside template, use the key as **Custom**

## Reactive aggregate update

When using batch editing, the aggregate values will be refreshed on every cell save. The footer, group footer, and group caption aggregate values will be refreshed.

> Adding a new record to the grouped grid will not refresh the aggregate values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reactive-aggregates-inlineedit-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/reactive-aggregates-inlineedit-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reactive-aggregates-inlineedit-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/reactive-aggregates-inlineedit-cs1/app/app.component.ts" % }

### Refresh aggregates in inline edit mode

By default, reactive aggregate update is not supported by inline and dialog edit modes as it is not feasible to anticipate the value change event for every editor. But, you can refresh the aggregates manually in the inline edit mode using the refresh method of aggregate module.

In the following code, the input event for the Freight column editor has been registered and the aggregate value has been refreshed manually.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reactive-aggregates-inlineedit-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/reactive-aggregates-inlineedit-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reactive-aggregates-inlineedit-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/reactive-aggregates-inlineedit-cs2/app/app.component.ts" % }

## See Also

* [Tooltip for aggregate footer in Angular Grid](https://www.syncfusion.com/forums/154190/tooltip-for-aggregate-footer-in-angular-grid)
* [How to export aggregate footer and apply outer border on excel data in Angular Grid](https://www.syncfusion.com/forums/151023/how-to-export-aggregate-footer-and-apply-outer-border-on-excel-data-in-angular-grid)
=======
/js/jsj/djdh
This file can contain any content.
>>>>>>> a7576e9c044226ac8d30a3d5ded8fdbcee79ec95
=======
/js/jsj/djdh
This file can contain any content.
>>>>>>> a61f632fe75e6a2b203935097fc72a57436bc6ca
