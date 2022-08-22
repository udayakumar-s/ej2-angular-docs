---
layout: post
title: Context menu in Angular Grid component | Syncfusion
description: Learn here all about Context menu in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Context menu 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Context menu in Angular Grid component

The Grid has options to show the context menu when right clicked on it. To enable this feature,
you need to define either default or custom item in the
[`contextMenuItems`](../api/grid/#contextmenuitems).

To use the context menu, inject the **ContextMenuService** in the provider section of **AppModule**.

The default items are in the following table.

Items| Description
----|----
`AutoFit`|  Auto fit the current column.
`AutoFitAll` | Auto fit all columns.
`Edit`|  Edit the current record.
`Delete` | Delete the current record.
`Save` | Save the edited record.
`Cancel` | Cancel the edited state.
`Copy` | Copy the selected records.
`PdfExport` | Export the grid data as Pdf document.
`ExcelExport` | Export the grid data as Excel document.
`CsvExport` | Export the grid data as CSV document.
`Group` | Group the current column.
`Ungroup` | Ungroup the current column.
`SortAscending` | Sort the current column in ascending order.
`SortDescending` | Sort the current column in descending order.
`FirstPage` | Go to the first page.
`PrevPage` | Go to the previous page.
`LastPage` | Go to the last page.
`NextPage` | Go to the next page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/default-cs1/app/app.component.ts" % }

## Custom context menu items

The custom context menu items can be added by defining the
[`contextMenuItems`](../api/grid/#contextmenuitems) as a collection of
[`contextMenuItemModel`](../api/grid/contextMenuItemModel).
Actions for this customized items can be defined in the
[`contextMenuClick`](../api/grid/#contextmenuclick) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/default-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/default-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/default-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/default-cs2/app/app.component.ts" % }

> You can hide or show an item in context menu for specific area inside of grid by defining the
[`target`](../api/grid/contextMenuItemModel/#target) property.
