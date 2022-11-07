---
layout: post
title: Columns in Angular Treegrid component | Syncfusion
description: Learn here all about Columns in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Columns 
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Angular Treegrid component

The column definitions are used as the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#dataSource) schema in the TreeGrid. This plays a vital role in rendering column values in the required format.
The treegrid operations such as sorting, filtering and searching etc. are performed based on column definitions. The [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#field) property of the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#column)
is necessary to map the data source values in TreeGrid columns.

> 1. If the column [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#field) is not specified in the dataSource, the column values will be empty.
> 2. If the [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#field) name contains “dot” operator, it is considered as complex binding.

[`treeColumnIndex`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#treecolumnindex) property denotes the column that is used to expand and collapse child rows.

## Header Template

You can customize the header element by using the [`headerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#headerTemplate) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-header-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-header-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-header-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-header-cs1" %}

### Header Template for Stacked Header column

By using the headerTemplate template reference for the ng template, you can customize a stacked header element in the Tree Grid column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-header-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-header-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-header-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-header-cs2" %}

## Header text

By default, column header title is displayed from column [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#field) value. To override the default header title, you have to define the [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#headertext) value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs1" %}

> * If both the [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#field) and [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#headertext)
are not defined in the column, the column renders with “empty” header text.

## Format

To format cell values based on specific culture, use the [`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#format) property. The TreeGrid uses [`Internalization`](../common/internationalization/) library to format [`number`](../common/internationalization/#number-formatting) and [`date`](../common/internationalization/#manipulating-datetime)
values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs2" %}

> By default, the [`number`](../common/internationalization/#number-formatting) and [`date`](../common/internationalization/#manipulating-datetime) values are formatted in `en-US` locale.

### Number formatting

The number or integer values can be formatted using the below format strings.

Format |Description |Remarks
-----|-----
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 100. For example the cell value `0.2` is formatted as `20%`. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

Please refer to the link to know more about [`Number formatting`](../common/internationalization/#number-formatting).

### Date formatting

You can format date values either using built-in date format string or custom format string.

For built-in date format you can specify [`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#format) property as string   (Example: `yMd`). Please refer to the link to know more about [`Date formatting`](../common/internationalization/#manipulating-datetime).

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
{% include code-snippet/treegrid/columns-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs3" %}

## AutoFit specific columns

The [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#autofitcolumns) method resizes the column to fit the widest cell's content without wrapping. You can autofit a specific column at initial rendering by invoking the [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#autofitcolumns) method in [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs4" %}

> You can autofit all the columns by invoking the [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#autofitcolumns) method without column names.

## Reorder

Reordering can be done by drag and drop of a particular column header from one index to another index within the treegrid. To enable reordering, set the [`allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowreordering) to true.

To use reordering, inject the [`Reorder`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#reordermodule) module in the treegrid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs5" %}

> You can disable reordering a particular column by setting the [`columns.allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#reordermodule) to false.

### Reorder Multiple Columns

Multiple columns can be reordered at a time by using the [`reorderColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#reordercolumns) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs6" %}

## Lock Columns

You can lock columns by using `column.lockColumn` property. The locked columns will be moved to the first position. Also you can’t reorder its position.

In the below example, duration column is locked and its reordering functionality is disabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs7" %}

## Column resizing

Column width can be resized by clicking and dragging the right edge of the column header. While dragging, the width of the respective column will be resized immediately. Each column can be auto resized by double-clicking the right edge of the column header to fit the width of that column based on the widest cell content. To enable column resize, set the [`allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowresizing) property to true.

To use the column resize, inject `Resize` module in the treegrid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs8" %}

> * You can disable resizing for a particular column by setting the [`columns.allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowresizing) to false.
> * In RTL mode, you can click and drag the left edge of the header cell to resize the column.

### Min and max width

Column resize can be restricted between minimum and maximum width by defining the [`columns->minWidth`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#minwidth) and [`columns->maxWidth`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#maxwidth).

In the following sample, minimum and maximum width are defined for `Duration`, and `Task Name` columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs9" %}

### Resize Stacked Column

Stacked columns can be resized by clicking and dragging the right edge of the stacked column header. While dragging, the width of the respective child columns will be resized at the same time. You can disable resize for particular stacked column by setting `allowResizing` as `false` to its columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs10" %}

### Touch interaction

When the right edge of the header cell is tapped, a floating handler will be visible over the right border of the column. To resize the column, tap and drag the floating handler as needed.

The following screenshot represents the column resizing in touch device.

<!-- markdownlint-disable MD033 -->
<img src="https://ej2.syncfusion.com/angular/documentation/images/column-resizing.png" alt="Touch interaction image" style="width:320px;height: 620px">
<!-- markdownlint-enable MD033 -->

## Column template

The column [`template`](../api/treegrid/column/#template) has options to display custom element instead of a field value in the column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/column-template-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/column-template-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/column-template-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/column-template-cs1" %}

> TreeGrid actions such as editing, filtering and sorting etc. will depend upon the column [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field). If the [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field) is not specified in the
template column, the treegrid actions cannot be performed.

### Using condition template

You can render the template elements based on condition.

In the following code, checkbox is rendered based on `Approved` field value.

```html
   <e-column headerText='Approved' width='150' textAlign='Center'>
             <ng-template #template let-data>
                  <div *ngIf="data.approved; else elseblock">
                      <input type="checkbox" checked>
                  </div>
              </ng-template>
              <ng-template #elseblock><input type="checkbox"></ng-template>
        </e-column>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs11" %}

## Column type

Column type can be specified using the [`columns.type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#type) property. It specifies the type of data the column binds.

If the [`format`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#format)  is defined for a column, the column uses [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#type) to select the appropriate format option ([number](../common/internationalization/#number-formatting)
 or [date](../common/internationalization/#manipulating-datetime)).

TreeGrid column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#type) is not defined, it will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#datasource).

## Column menu

The column menu has options to integrate features like sorting, filtering, and autofit. It will show a menu with the integrated feature when users click on multiple icon of the column. To enable column menu, you need to define the [`showColumnMenu`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#showcolumnmenu) property as true.

To use the column menu, inject the `ColumnMenu` module in the treegrid.

The default items are displayed in following table.

| Item | Description |
|-----|-----|
| `SortAscending` | Sort the current column in ascending order. |
| `SortDescending` | Sort the current column in descending order. |
| `AutoFit` | Auto fit the current column. |
| `AutoFitAll` | Auto fit all columns. |
| `Filter` | Show the filter option as given in `filterSettings.type` |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs12/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs12/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs12/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs12" %}

> * You can disable column menu for a particular column by defining the [`columns.showColumnMenu`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#showcolumnmenu) as false.

## Checkbox Column

To render checkboxes in existing column, you need to set [`columns.showCheckbox`] property as `true`.

It is also possible to select the rows hierarchically using checkboxes in TreeGrid by enabling [`autoCheckHierarchy`] property. When we check on any parent record checkbox then the child record checkboxes will get checked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs13/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs13/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs13/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs13" %}

> Using [`selectCheckboxes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectcheckboxes) method, we can check the checkboxes by passing the desired row Indexes. When we pass the parent record index in the [`selectCheckboxes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectcheckboxes) method,
all children record checkboxes for the corresponding parent record will be selected. So, there is no need to pass the child record index along with the parent record index.

## Responsive columns

You can toggle column visibility based on media queries which are defined
at the [`hideAtMedia`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#hideatmedia).
The [`hideAtMedia`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#hideatmedia) accepts valid
[Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs14/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs14/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs14/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs14" %}

## Controlling TreeGrid actions

You can enable or disable treegrid action for a particular column by setting the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowfiltering), and [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowsorting) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs15/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs15/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs15/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs15" %}

## Show/hide columns by external button

You can show or hide treegrid columns dynamically using external buttons by invoking the [`showColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#showcolumns) or [`hideColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#hidecolumns) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs16/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs16/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs16/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs16" %}

## Complex data binding

You can achieve complex data binding in the treegrid by using the dot(.) operator in the [`column.field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#field).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs17/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs17/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs17/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs17" %}

## ValueAccessor

The [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#valueaccessor) is used to access/manipulate the value of display data. You can achieve custom value formatting by using the [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#valueaccessor).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs18/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs18/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs18/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs18" %}

### Display array type columns

You can bind an array of objects in a column by using the [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#valueaccessor) property.
In this example, the name field has an array of two objects, FirstName and LastName. These two objects are joined and bound to a column using the
[`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#valueaccessor).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs19/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs19/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs19/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs19" %}

### Expression column

You can achieve the expression column by using the [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#valueaccessor) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs20/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs20/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs20/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs20" %}

## How to render boolean values as checkbox

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#displayascheckbox) property as `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs21/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs21/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs21/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs21" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-ui-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.