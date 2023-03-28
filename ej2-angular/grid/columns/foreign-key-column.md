---
layout: post
title: Foreign key column in Angular Grid component | Syncfusion
description: Learn here all about Foreign key column in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Foreign key column 
documentation: ug
domainurl: ##DomainURL##
---

# Foreign key column in Angular Grid component

Foreign key column can be enabled by using [`column.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#datasource), [`column.foreignKeyField`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyfield) and [`column.foreignKeyValue`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyvalue) properties.

* [`column.dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#datasource) - Defines the foreign data.
* [`column.foreignKeyField`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyfield) - Defines the mapping column name to the foreign data.
* [`column.foreignKeyValue`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyvalue) - Defines the display field from the foreign data.

In the following example, **Employee Name** is a foreign column which shows **FirstName** column from foreign data.

To use ForeignKeyColumn, you need to inject **ForeignKeyService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs19/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs19/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs19/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/grid-cs19" %}

> * For remote data, the sorting and grouping is done based on [`column.foreignKeyField`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyfield) instead of [`column.foreignKeyValue`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyvalue).
> * If [`column.foreignKeyField`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyfield) is not defined, then the column uses [`column.field`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field).

## Use edit template in foreignkey column

By default, foreign key column uses dropdown component for editing. You can render other than the dropdown by using the [`column.edit`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edit) property.

The following example demonstrates the way of using edit template in foreign column.

In the following example, The **Employee Name** is a foreign key column and while editing, AutoComplete component is rendered instead of DropDownList.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/foreignkey-cs1" %}

## Customize filter UI in foreignkey column

You can create your own filtering UI by using [`column.filter`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filter) property.

The following example demonstrates the way to create a custom filtering UI in the foreign column.

In the following example, The **Employee Name** is a foreign key column. DropDownList is rendered using Filter UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/foreignkey-cs2" %}

## Use filter bar template in foreignkey column

You can use the filter bar template in foreign key column by defining the [`column.filterBarTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filterbartemplate) property.

The following example demonstrates the way to use filter bar template in foreign column.

In the following example, The **Employee Name** is a foreign key column. This column header shows the custom filter bar template and you can select filter value by using the **DropDown** options.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/foreignkey-cs3" %}

## Perform aggregation in foreignkey column

Default aggregations are not supported in a foreign key column. You can achieve aggregation for the foreign key column by using custom the aggregates.

The following example demonstrates the way to achieve aggregation in foreign key column.

In the following example, The **Employee Name** is a foreign key column and the aggregation for the foreign column was calculated in customAggregateFn.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/foreignkey-cs4" %}

## Enable multiple foreign key columns

Multiple foreign key columns with editing options are enabled for the Angular Grid component.

In the following example, **Customer Name** and **Ship City** are foreign key columns that display the **ContactName** and **City** columns from foreign data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/foreignkey-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/foreignkey-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/foreignkey-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/foreignkey-cs5" %}
