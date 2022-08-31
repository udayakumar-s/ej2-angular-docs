---
layout: post
title: Filtering in Angular Grid component | Syncfusion
description: Learn here all about Filtering in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filtering 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Filtering in Angular Grid component

Filtering allows you to view particular records based on filter criteria. To enable filtering in the Grid,
set the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) to true.
Filtering options can be configured through [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings).

To use filter, inject **FilterService** in the provider section of **AppModule**.

<!---
The Grid supports two types of filter, they are
* Filter bar
* Excel
-->

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filtering1-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filtering1-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering1-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/filtering1-cs9" %}

> * You can apply and clear filtering, by using
[`filterByColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#filterbycolumn) and [`clearFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#clearfiltering) methods.
> * To disable Filtering for a particular column, by specifying
[`columns.allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowfiltering) to false.

## Initial filter

To apply the filter at initial rendering, set the filter [`predicate`](https://ej2.syncfusion.com/angular/documentation/api/grid/predicate) object in
[`filterSettings.columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettingsModel/#columns).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filtering1-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filtering1-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering1-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/filtering1-cs10" %}

## Filter operators

The filter operator for a column can be defined in [`filterSettings.columns.operator`](https://ej2.syncfusion.com/angular/documentation/api/grid/predicateModel/#operator) property.

The available operators and its supported data types are,

Operator |Description |Supported Types
-----|-----|-----
startsWith |Checks whether a value begins with the specified value. |String
endsWith |Checks whether a value ends with specified value. |String
contains |Checks whether a value contains with specified value. |String
equal |Checks whether a value equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
notEqual |Checks whether a value not equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterThan |Checks whether a value is greater than with specified value. |Number &#124; Date
greaterThanOrEqual|Checks whether a value is greater than or equal to specified value. |Number &#124; Date
lessThan |Checks whether a value is less than with specified value. |Number &#124; Date
lessThanOrEqual |Checks whether a value is less than or equal to specified value. |Number &#124; Date

> By default, the [`filterSettings.columns.operator`](https://ej2.syncfusion.com/angular/documentation/api/grid/predicateModel/#operator) value is **equal**.

## Diacritics filter

By default, grid ignores diacritic characters while filtering. To include diacritic characters, set the
[`filterSettings.ignoreAccent`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#filterbycolumn) as **true**.

In the following sample, type **aero** in **Name** column to filter diacritic characters.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-diacritics-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-diacritics-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-diacritics-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/filter-diacritics-cs1" %}

## Filter bar

You can customize default filter bar component of a column by custom component using [`filter template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate).

The following example demonstrates the way to use filter template for a column when using filter bar. In the following example, the [`DropdownList`](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started/) component is used to filter **Name** column using filter template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-template-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-template-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-template-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/filter-template-cs2" %}

## Filter menu

You can customize default filter menu component of a column by custom component using [`filter template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate).

The following example demonstrates the way to use filter template for a column when using filter menu. In the following example, the [`DropdownList`](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started/) component is used to filter **ShipName** column using filter template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-template-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-template-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-template-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/filter-template-cs3" %}

## See Also

* [Customizing Filter Dialog by using an additional parameter](../how-to/add-params-for-filtering)
* [Hide sorting options on Excel filter dialog](../how-to/hide-sorting-in-excel-filter)
* [How to apply initial filter on custom binding in Angular Grid](https://www.syncfusion.com/forums/152157/how-to-apply-initial-filter-on-custom-binding-in-angular-grid)
* [How to custom the display value of checkbox filter option in Angular Grid](https://www.syncfusion.com/forums/154478/how-to-custom-the-display-value-of-checkbox-filter-option-in-angular-grid)