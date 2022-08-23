---
layout: post
title: Hierarchy grid in Angular Grid component | Syncfusion
description: Learn here all about Hierarchy grid in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Hierarchy grid 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Hierarchy grid in Angular Grid component

The Grid allows display of table data in a hierarchical structure to visualize relations between parent and child records.
This feature is enabled by defining the [`childGrid`](../api/grid/#childgrid) and
[`childGrid.queryString`](../api/grid/#querystring).
The [`childGrid`](../api/grid/#childgrid) describes the options of grid and the
[`childGrid.queryString`](../api/grid/#querystring) describes the relation between parent and child grids.

To use hierarchical binding, inject the **DetailRowService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/default-cs3/app/app.component.ts" % }
> * Grid supports n level of child grids.
> * Hierarchical binding is not supported when [`DetailTemplate`](../api/grid/#detailtemplate) is enabled.

## ExpandAll by external button

By default, grid renders in collapsed state.
You can expand all child grid rows by invoking the [`expandAll`](../api/grid/detailRow/#expandall) method,
and collapse all grid rows by invoking the [`collapseAll`](../api/grid/detailRow/#collapseall) through an external button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/default-cs4/app/app.component.ts" % }

## Expand child grid initially

You can expand a particular child grid at initial rendering by invoking the
[`expand`](../api/grid/detailRow/#expand) method in the [`dataBound`](../api/grid/#databound) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/default-cs5/app/app.component.ts" % }

## Dynamically load child grid data

You can dynamically load child grid dataSource by using the
[`load`](../api/grid/#load)  event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/default-cs6/app/app.component.ts" % }

## Bind hierarchy grid with different field

By default, Parent and child grid relation will be maintained by [`queryString`](../api/grid/#querystring) property. We should use the same field name to map both parent and child grid. To achieve parent and child relation with different fields, we need to change the mapping value in the child grid [`load`](../api/grid/#load) event.

In the below sample, we have bound the child and parent grid with different fields. Parent grid field name as **EmployeeID** and the child grid field name as **ID**. We need to define the mapping value of **parentKeyFieldValue** from the parent row data in the child grid [`load`](../api/grid/#load) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/default-cs7/app/app.component.ts" % }

## Adding Record in ChildGrid

Parent and child grid are related by [`queryString`](../api/grid/#querystring) field value.
To maintain this relation in newly added record, You need to set value for [`queryString`](../api/grid/#querystring) field in the added data
by the [`actionBegin`](../api/grid/#actionbegin) event.

In the below demo, **EmployeeID** field relates the parent and child grids. To add a new record in child grid, We have to set the **EmployeeID** field
with parent record's [`queryString`](../api/grid/#querystring) field value in the [`actionBegin`](../api/grid/#actionbegin) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/default-cs8/app/app.component.ts" % }

## Template column in Child Grid

The column [`template`](../api/grid/column/#template) has options to display custom element instead of a field value in the column.

In the below sample, we have shown custom image in **Employee Image** column of child grid using column [`template`](../api/grid/column/#template) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/default-cs9/app/app.component.ts" % }

## See Also

* [Multiple querystring in hierarchy child grid in Angular Grid](https://www.syncfusion.com/forums/165124/multiple-querystring-in-hierarchy-child-grid-in-angular-grid)