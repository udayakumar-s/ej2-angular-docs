---
layout: post
title: Auto generated columns in Angular Grid component | Syncfusion
description: Learn here all about Auto generated columns in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Auto generated columns 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Auto generated columns in Angular Grid component

The [`columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/column) are automatically generated when
[`columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/column)
declaration is empty or undefined while initializing the grid. All the columns in the **dataSource** are bound as grid columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/grid-cs3" %}

> When the columns are auto-generated then the column [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#type)
will be determined from the first record of the
[`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource).

## Set Primary key column for auto generated columns when editing is enabled

Primary key can be defined in the declaration of column object of the grid. When we didn't declare the columns, the grid will generate the columns automatically. For these auto generated columns, you can set [`isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isprimarykey) column property as true by using the following ways,

If Primary key "column index" is known then refer the following code example

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/grid-cs4" %}

If Primary key **column** and its **field** is known then primary key for the respective [`column`](https://ej2.syncfusion.com/documentation/api/grid/column/) can be defined as follows.

```typescript

  const column: ColumnModel = this.grid.getColumnByField('OrderID');
  column.isPrimaryKey = true;

```

## Set column options to auto generated columns

You can set column options such as [`format`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format), [`width`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#width) to the auto generated columns by using [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event of the grid.

In the below example, [`width`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#width) is set for **OrderID** column, **date** type is set for **OrderDate** column and [`format`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) is set for **Freight** and **OrderDate** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/grid-cs5" %}