---
layout: post
title: Aggregates in Angular Treegrid component | Syncfusion
description: Learn here all about Aggregates in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Aggregates 
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in Angular Treegrid component

Aggregate values are displayed in the TreeGrid footer and in parent row footer for child row aggregate values. It can be configured through `aggregates` property.
 [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#field) and [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type)
 are the minimum properties required to represent an aggregate column.

To use the aggregate feature, you have to inject the `Aggregate` module.

By default, the aggregate value can be displayed in the treegrid footer, and footer of child rows. To show the aggregate value in one of the cells, use the [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#footertemplate).

You can also check this video to learn about how to use Aggregates in Angular TreeGrid.

{% youtube "https://www.youtube.com/watch?v=1dwChk61zsk" %}

## Built-in aggregate types

The aggregate type should be specified in the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) property to configure an aggregate column.

The built-in aggregates are,
* Sum
* Average
* Min
* Max
* Count
* Truecount
* Falsecount

> * Multiple aggregates can be used for an aggregate column by setting the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) property
with an array of aggregate types.
> * Multiple types for a column is supported only when one of the aggregate templates is used.

## Footer aggregate

Footer aggregate value is calculated for all the rows, and it is displayed in the footer cells. Use the [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#footertemplate) property to render the aggregate value in footer cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/aggregate-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/aggregate-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/aggregate-cs1" %}

> The aggregate values must be accessed inside the template using their corresponding [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) name.

## Child aggregate

Aggregate value is calculated for child rows, and it is displayed in the parent row footer. Use the [`childSummary`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateRowModel/#showchildsummary) property to render the child rows aggregate value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/aggregate-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/aggregate-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/aggregate-cs2" %}

## How to format aggregate value

You can format the aggregate value result by using the [`format`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/aggregate-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/aggregate-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/aggregate-cs3" %}

## Custom aggregate

To calculate the aggregate value with your own aggregate functions, use the custom aggregate option. To use custom aggregation, specify the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) as `Custom`, and provide the custom aggregate function in the [`customAggregate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#customaggregate) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/aggregate-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/aggregate-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/aggregate-cs4" %}

> To access the custom aggregate value inside the template, use the key as `Custom`.
> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-ui-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.