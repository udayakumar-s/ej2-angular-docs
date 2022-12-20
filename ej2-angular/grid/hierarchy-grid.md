---
layout: post
title: Hierarchy grid in Angular Grid component | Syncfusion
description: Learn here all about Hierarchy grid in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Hierarchy grid 
documentation: ug
domainurl: ##DomainURL##
---

# Hierarchy grid in Angular Grid component

The Grid allows display of table data in a hierarchical structure to visualize relations between parent and child records.
This feature is enabled by defining the [`childGrid`](https://ej2.syncfusion.com/angular/documentation/api/grid/#childgrid) and [`childGrid.queryString`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querystring).
The [`childGrid`](https://ej2.syncfusion.com/angular/documentation/api/grid/#childgrid) describes the options of grid and the [`childGrid.queryString`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querystring) describes the relation between parent and child grids.
To use hierarchical binding, inject the **DetailRowService** in the provider section of **AppModule**.

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
  
{% previewsample "page.domainurl/code-snippet/grid/default-cs5" %}
> * Grid supports n level of child grids.
> * Hierarchical binding is not supported when [`DetailTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/#detailtemplate) is enabled.

## ExpandAll by external button

By default, grid renders in collapsed state.
You can expand all child grid rows by invoking the [`expandAll`](https://ej2.syncfusion.com/angular/documentation/api/grid/detailRow/#expandall) method, and collapse all grid rows by invoking the [`collapseAll`](https://ej2.syncfusion.com/angular/documentation/api/grid/detailRow/#collapseall) through an external button.

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
  
{% previewsample "page.domainurl/code-snippet/grid/default-cs6" %}

## Expand child grid initially

You can expand a particular child grid at initial rendering by invoking the [`expand`](https://ej2.syncfusion.com/angular/documentation/api/grid/detailRow/#expand) method in the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event.

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
  
{% previewsample "page.domainurl/code-snippet/grid/default-cs7" %}

## Dynamically load child grid data

You can dynamically load child grid dataSource by using the [`load`](https://ej2.syncfusion.com/angular/documentation/api/grid/#load)  event.

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
  
{% previewsample "page.domainurl/code-snippet/grid/default-cs8" %}

## Bind hierarchy grid with different field

By default, Parent and child grid relation will be maintained by [`queryString`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querystring) property. We should use the same field name to map both parent and child grid. To achieve parent and child relation with different fields, we need to change the mapping value in the child grid [`load`](https://ej2.syncfusion.com/angular/documentation/api/grid/#load) event.

In the below sample, we have bound the child and parent grid with different fields. Parent grid field name as **EmployeeID** and the child grid field name as **ID**. We need to define the mapping value of **parentKeyFieldValue** from the parent row data in the child grid [`load`](https://ej2.syncfusion.com/angular/documentation/api/grid/#load) event.

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
  
{% previewsample "page.domainurl/code-snippet/grid/default-cs9" %}

## Adding Record in ChildGrid

Parent and child grid are related by [`queryString`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querystring) field value.
To maintain this relation in newly added record, You need to set value for [`queryString`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querystring) field in the added data
by the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event.

In the below demo, **EmployeeID** field relates the parent and child grids. To add a new record in child grid, We have to set the **EmployeeID** field with parent record's [`queryString`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querystring) field value in the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/default-cs10" %}

## Template column in Child Grid

The column [`template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) has options to display custom element instead of a field value in the column.

In the below sample, we have shown custom image in **Employee Image** column of child grid using column [`template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/default-cs11" %}

## Dynamically bind data to child grid based on parent row Data

By default, the [childGrid.queryString](https://ej2.syncfusion.com/angular/documentation/api/grid/#querystring) describes the relationship between parent and child grids and visualizes the data in a hierarchical structure. Instead of the `queryString` property, we can dynamically bind the datasource to the `childGrid` based on the parent row data using the [detailDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#detaildatabound) event of the grid.

While expanding the child Grid, the `detailDataBound` event will be triggered. In this event, based on the EmployeeID column value of parent row data, filter the equally matched data from the `childGrid` datasource using the `DataManager` plugin and bind the filtered data as a datasource to the `childGrid`. This can be demonstrated by the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs12/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs12/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs12/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/default-cs12" %}

## See Also

* [Multiple querystring in hierarchy child grid in Angular Grid](https://www.syncfusion.com/forums/165124/multiple-querystring-in-hierarchy-child-grid-in-angular-grid)