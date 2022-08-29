---
layout: post
title: Tool bar items in Angular Grid component | Syncfusion
description: Learn here all about Tool bar items in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tool bar items 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Tool bar items in Angular Grid component

## Built-in toolbar items

Built-in Toolbar Items execute standard actions of the Grid and it can be added by defining
[`toolbar`](../../api/grid/#toolbar)
as a collection of built-in items. It renders the button with icon and text.

The following table shows Built-in toolbar items and its action.

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| Add | Add a new record.|
| Edit | Edit the selected record.|
| Update | Update edited record.|
| Delete | Delete the selected record.|
| Cancel | Cancel the edit state.|
| Search | Search the records by given key.|
| Print | Print the Grid.|
| ColumnChooser | Choose the column's visibility.|
| PdfExport | Exports grid to PDF document.|
| ExcelExport | Exports grid to Excel document.|
| CsvExport | Exports grid to CSV document.|

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/toolbar-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/toolbar-cs1/app/app.component.ts" % }

> * The [`toolbar`](../../api/grid/#toolbar) has options to define both built-in and custom toolbar items.

## Custom toolbar items

Custom toolbar items can be added by defining [`toolbar`](../../api/grid/#toolbar) as a collection of
[`ItemModel`](../../api/toolbar/itemModel).
Actions for this customized toolbar items are defined in the [`toolbarClick`](../../api/grid/#toolbarclick) event.

By default, Custom toolbar items are in position **Left**. You can change the position by using the [`align`](../../api/toolbar/itemModel) property. In the below sample, we have applied position **Right** for the **Collapse All** toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-toolbar-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-toolbar-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-toolbar-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/custom-toolbar-cs1/app/app.component.ts" % }

> * The [`toolbar`](../../api/grid/#toolbar) has options to define both built-in and custom toolbar items.
> * If a toolbar item does not match with built-in items, it will be treated as custom toolbar item.

## Both built-in and custom items in toolbar

Grid have an option to use both built-in and custom toolbar items at same time.

In the below example, **Add**, **Edit**, **Delete**, **Update**, **Cancel** are built-in toolbar items and **Click** is custom toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs51/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs51/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs51/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/edit-cs51/app/app.component.ts" % }

## Custom toolbar component in a specific position

By default, Custom toolbar items are in the Left position. You can change the position by using the [align](../../api/toolbar/itemModel) property. In the following sample, we have applied the Right position for the Collapse All toolbar item, Left for the Expand All toolbar item, and Center for the Search toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-toolbar-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-toolbar-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-toolbar-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/custom-toolbar-cs2/app/app.component.ts" % }