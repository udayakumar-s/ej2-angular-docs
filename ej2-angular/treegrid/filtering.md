---
layout: post
title: Filtering in Angular Treegrid component | Syncfusion
description: Learn here all about Filtering in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular Treegrid component

Filtering allows you to view specific or related records based on filter criteria. To enable filtering in the TreeGrid, set the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowfiltering) to true. Filtering options can be configured through [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#filtersettings).

To use filter, inject the [`Filter`] module in the treegrid.

You can check this video to learn about Filtering feature in Angular TreeGrid.

{% youtube "https://www.youtube.com/watch?v=3aQueqaspzQ" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs1" %}

> * You can apply and clear filtering by using [`filterByColumn`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#filterbycolumn) and [`clearFiltering`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#clearfiltering) methods.
> * To disable filtering for a particular column, set
[`columns.allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowfiltering) to false.

## Filter Hierarchy Modes

TreeGrid provides support for a set of filtering modes with [`filterSettings.filterHierarchyMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#hierarchymode) property.
The below are the type of filter mode available in TreeGrid.

* **Parent** : This is the default filter hierarchy mode in TreeGrid. The filtered records are displayed with its parent records, if the filtered records not have any parent record then the filtered records only displayed.

* **Child** : The filtered records are displayed with its child record, if the filtered records not have any child record then the filtered records only displayed.

* **Both** : The filtered records are displayed with its both parent and child record, if the filtered records not have any parent and child record then the filtered records only displayed.

* **None** : The filtered records are only displayed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs2" %}

## Initial filter

To apply the filter at initial rendering, set the filter `predicate` object in
[`filterSettings.columns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#columns).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs3" %}

## Filter operators

The filter operator for a column can be defined in the `filterSettings.columns.operator` property.

The available operators and its supported data types are:

Operator |Description |Supported Types
-----|-----|-----
startswith |Checks whether the value begins with the specified value. |String
endswith |Checks whether the value ends with the specified value. |String
contains |Checks whether the value contains the specified value. |String
equal |Checks whether the value is equal to the specified value. |String &#124; Number &#124; Boolean &#124; Date
notequal |Checks for values not equal to the specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterthan |Checks whether the value is greater than the specified value. |Number &#124; Date
greaterthanorequal|Checks whether a value is greater than or equal to the specified value. |Number &#124; Date
lessthan |Checks whether the value is less than the specified value. |Number &#124; Date
lessthanorequal |Checks whether the value is less than or equal to the specified value. |Number &#124; Date

> By default, the `filterSettings.columns.operator` value is `equal`.

## Filter bar

By setting the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowfiltering) to true, the filter bar row will render next to the header, which allows you to filter data. You can filter the records with different expressions depending upon the column type.

 **Filter bar expressions:**

 You can enter the following filter expressions (operators) manually in the filter bar.

Expression |Example |Description |Column Type
-----|-----|-----|-----
= |=value |equal |Number
!= |!=value |notequal |Number
> |>value |greaterthan |Number
< |<value |lessthan |Number
>= |>=value |greaterthanorequal |Number
<=|<=value|lessthanorequal |Number
* |*value |startswith |String
% |%value |endswith |String
N/A |N/A | `Equal` operator will always be used for date filter. |Date
N/A |N/A |`Equal` operator will always be used for Boolean filter. |Boolean

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs4" %}

### Filter bar template with custom component

The [`filterBarTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filterbartemplate) is used to add custom components to a particular column, and does the following functions:
* `create`: Creates custom components.
* `write`: Wires events for custom components.

You can check this video to learn about how to use Filter bar template with custom component in Angular TreeGrid.

{% youtube "https://www.youtube.com/watch?v=3aQueqaspzQ" %}

In the following sample, the dropdown is used as a custom component in the Duration column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs5" %}

### Change default Filter bar operator

You can change the default filter operator by extending [`filterModule.filterOperators`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettings/#operators) property in [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event. In the following sample, we have changed the default operator for string typed columns as `contains` from `startsWith`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs6" %}

## Filter menu

You can enable filter menu by setting the [`filterSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#type) as `Menu`. The filter menu UI will be rendered based on its column type, which allows you to filter data.
You can filter the records with different operators.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs7" %}

> * [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowfiltering) must be set as true to enable filter menu.
> * Setting [`columns.allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowfiltering) as false will prevent filter menu rendering for a particular column.

### Custom component in filter menu

The [`column.filter.ui`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filter) is used to add custom filter components to a particular column. To implement custom filter ui, define the following functions:

* `create`:  Creates custom component.
* `write`: Wire events for custom component.
* `read`: Read the filter value from custom component.

In the following sample, dropdown is used  as custom component in the duration column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs8" %}

### Enable different filter for a column

You can use both `Menu` and `Excel` filter in a same TreeGrid. To do so, set the
[`column.filter.type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filter) as `Menu` or `Excel`.

In the following sample menu filter is enabled by default and excel filter is enabled for the Task Name column using the
[`column.filter.type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filter).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs9" %}

## Excel like filter

You can enable Excel like filter by defining.
[`filterSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#type) as `Excel`.The excel menu contains an option such as Sorting, Clear filter, Sub menu for advanced filtering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs10" %}

### Custom component in Excel Filter

The [`columns.filterTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#filtertemplate) property is used to define custom component in excel filter for a particular column.

The following example demonstrates the way to use filter template for a column when using excel filter. In the following example, the `DropdownList` component is used to filter `taskName` column using filter template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs11" %}

### Change default Excel Filter operator

You can change the default excel-filter operator by changing the column operator as `contains` from `startsWith` in the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionBegin) event

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs12/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs12/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs12/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs12" %}

## Diacritics

By default, treegrid ignores diacritic characters while filtering. To include diacritic characters, set the
[`filterSettings.ignoreAccent`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/filterSettingsModel/#ignoreaccent) as `true`.

In the following sample, type **aero** in `Name` column to filter diacritic characters.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/filtering-cs13/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/filtering-cs13/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/filtering-cs13/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs13" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-ui-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.