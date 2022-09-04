---
layout: post
title: Columns in Angular Grid component | Syncfusion
description: Learn here all about Columns in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Columns 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Columns in Angular Grid component

The column definitions are used as the **dataSource** schema in the Grid.
This plays a vital role in rendering column values in the required format.
The grid operations such as sorting, filtering and grouping etc. are performed based on column definitions.
The [`field`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) property of the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/column)
is necessary to map the data source values in Grid columns.

> 1. If the column with [`field`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) is not in the dataSource, then the column values will be displayed as empty.
> 2. If the [`field`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) name contains “dot” operator then it is considered as complex binding.

## Column types

Column type can be specified using the [`columns.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#type) property. It specifies the type of data the column binds.

If the [`format`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format)  is defined for a column,
the column uses [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#type) to select the appropriate format option ([number](../../common/internationalization/#number-formatting)
 or [date](../../common/internationalization/#manipulating-datetime)).

Grid column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#type) is not defined, then it will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource).
> Incase if the first record of the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) is null/blank value for a column then it is necessary to define the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#type) for that column.

## ValueAccessor

The [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#valueaccessor) is used to access/manipulate the value of display data.
You can achieve custom value formatting by using [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#valueaccessor).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/grid-cs10" %}

### Display array type columns

You can bind an Array of Objects in a column by using [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#valueaccessor) property.
In this example, The Name field has an array of two objects FirstName and LastName. These two objects are joined and bind to a column using
[`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#valueaccessor).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/grid-cs11" %}

### Expression column

You can achieve the expression column by using [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#valueaccessor) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/expression-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/expression-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/expression-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/expression-cs1" %}

## Format

To format cell values based on specific culture, use the [`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format)
property. The grid uses [`Internalization`](../../common/internationalization/) library to format [`number`](../../common/internationalization/#number-formatting) and
[`date`](../../common/internationalization/#manipulating-datetime)
values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs12/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs12/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs12/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/grid-cs12" %}

> By default, the [`number`](../../common/internationalization/#number-formatting) and [`date`](../../common/internationalization/#manipulating-datetime) values are formatted in **en-US** locale. You can localize the currency and date in different locale as explained ['here'](../../common/internationalization/)

### Number formatting

The number or integer values can be formatted using the below format strings.

Format |Description |Remarks
-----|-----|-----
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 1. For example the cell value **0.2** is formatted as **20%**. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

Please refer to the link to know more about [`number`](../../common/internationalization/#number-formatting) format.

### Date formatting

You can format date values either using built-in date format string or custom format string.

For built-in date format you can specify [`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) as string   (Example: **yMd**). Please refer to the link to know more about [`Date formatting`](../../common/internationalization/#manipulating-datetime)

You can also use custom format string to format the date values. Some of the custom formats and the formatted date values are given in the below table.

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/1996
{ type:'date', format:'dd.MM.yyyy' } | 04.07.1996
{ type:'date', skeleton:'short' } | 7/4/96
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/1996 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs13/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs13/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs13/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/grid-cs13" %}

## Render boolean value as checkbox

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#displayascheckbox) property as **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs14/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs14/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs14/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/grid-cs14" %}

## Visibility

You can hide any particular column in Grid before rendering by defining [`visible`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property as false. In the below sample **ShipCity** column is defined as visible false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs15/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs15/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs15/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/grid-cs15" %}

## Lock columns

You can lock columns by using [`column.lockColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#lockcolumn) property. The locked columns will be moved to the first position. Also you can’t reorder its position.

In the below example, Ship City column is locked and its reordering functionality is disabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reorder-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/reorder-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reorder-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/reorder-cs5" %}

## Controlling Grid actions

You can enable or disable grid action for a particular column by setting the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowfiltering),
[`allowGrouping`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowgrouping), [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowsorting), [`allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowreordering) and [`allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowediting) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/control-actions-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/control-actions-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/control-actions-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/control-actions-cs1" %}

## Show or hide columns by external button

You can show or hide the grid columns dynamically through external buttons by invoking the [`showColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#showcolumns)/[`hideColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#hidecolumns)
methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs16/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs16/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs16/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/grid-cs16" %}

## Customize column styles

You can customise the appearance of header and content of the particular column using the
[`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#customattributes) property.

To customize the grid column, follow the given steps:

**Step 1**:

Create a css class with custom style to override the default style for rowcell and headercell.

```css
.e-grid .e-rowcell.customcss{
    background-color: #ecedee;
    color: 'red';
    font-family: 'Bell MT';
    font-size: 20px;
}

.e-grid .e-headercell.customcss{
    background-color: #2382c3;
    color: white;
    font-family: 'Bell MT';
    font-size: 20px;
}

```

**Step 2**:

Add the custom css class to particular column by using [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#customattributes) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-column-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-column-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-column-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/custom-column-cs1" %}

## Display custom tooltip for columns

You can achieve the custom tooltip([`EJ2 Tooltip`](../../../tooltip/getting-started)) for Grid by using the
[`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event.

Render the ToolTip component for the grid cells by using the following code in the
[`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event.

```typescript
tooltip (args: QueryCellInfoEventArgs) {
    let tooltip: Tooltip = new Tooltip({
        content: args.data[args.column.field].toString();
    }, args.cell);
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-tooltip-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-tooltip-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-tooltip-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/custom-tooltip-cs1" %}

## Align the text of Grid content and header

For aligning the text of Grid content and header part, kindly use [textAlign](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#textalign) and [headerTextAlign](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#headertextalign) properties.

Grid column supports the following alignments:
* Left
* Right
* Center
* Justify

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs17/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs17/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs17/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/grid-cs17" %}

## See Also

* [Group Column by Format](../grouping#group-by-format)
* [How to set complex column as Foreignkey column](../how-to/complex-column-as-foreign-key-column)
* [Complex Data Binding with list of Array Of Objects](../how-to/list-of-array-of-objects)
* [Format grid with auto generation columns in Angular Grid](https://www.syncfusion.com/forums/141181/format-grid-with-auto-generation-columns-in-angular-grid)
* [Background color change for stacked headers and calculated columns in Angular Grid](https://www.syncfusion.com/forums/139804/background-color-change-for-stacked-headers-and-calculated-columns-in-angular-grid)
* [Drag and Drop Between two grids in Angular Grid](https://www.syncfusion.com/forums/150058/drag-and-drop-between-two-grids-in-angular-grid)