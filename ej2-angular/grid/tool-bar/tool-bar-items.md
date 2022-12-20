---
layout: post
title: Tool bar items in Angular Grid component | Syncfusion
description: Learn here all about Tool bar items in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tool bar items 
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar items in Angular Grid component

## Built-in toolbar items

Built-in Toolbar Items execute standard actions of the Grid and it can be added by defining [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) as a collection of built-in items. It renders the button with icon and text.
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
  
{% previewsample "page.domainurl/code-snippet/grid/toolbar-cs1" %}

> * The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) has options to define both built-in and custom toolbar items.

### Show only icons in built-in toolbar items

By default, the built-in toolbar items render as buttons with an icon and text. It is possible to hide the text and show only the icon using the following CSS style.

```css
.e-toolbar .e-tbar-btn-text, .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn-text {
    display: none;
}
```

This is demonstrated in the following sample:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbaricon-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/toolbaricon-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbaricon-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/toolbaricon-cs1" %}

## Custom toolbar items

Custom toolbar items can be added by defining [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) as a collection of [`ItemModel`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel). Actions for this customized toolbar items are defined in the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.
Actions for this customized toolbar items are defined in the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

By default, Custom toolbar items are in position **Left**. You can change the position by using the [`align`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel) property. In the below sample, we have applied position **Right** for the **Collapse All** toolbar item.

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
  
{% previewsample "page.domainurl/code-snippet/grid/custom-toolbar-cs1" %}

> * The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) has options to define both built-in and custom toolbar items.
> * If a toolbar item does not match with built-in items, it will be treated as custom toolbar item.

## Both built-in and custom items in toolbar

Grid have an option to use both built-in and custom toolbar items at same time.

In the below example, **Add**, **Edit**, **Delete**, **Update**, **Cancel** are built-in toolbar items and **Click** is custom toolbar item.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs53/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs53/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs53/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/edit-cs53" %}

## Custom toolbar component in a specific position

By default, Custom toolbar items are in the Left position. You can change the position by using the [align](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel) property. In the following sample, we have applied the Right position for the Collapse All toolbar item, Left for the Expand All toolbar item, and Center for the Search toolbar item.

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
  
{% previewsample "page.domainurl/code-snippet/grid/custom-toolbar-cs2" %}