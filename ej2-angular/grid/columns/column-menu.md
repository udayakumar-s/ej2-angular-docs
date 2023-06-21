---
layout: post
title: Column menu in Angular Grid component | Syncfusion
description: Learn here all about Column menu in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column menu 
documentation: ug
domainurl: ##DomainURL##
---

# Column menu in Angular Grid component

The column menu has options to integrate features like sorting, grouping, filtering, column chooser, and autofit. It will show a menu with the integrated feature when users click on multiple icon of the column. To enable column menu, you need to define the [`showColumnMenu`](https://ej2.syncfusion.com/angular/documentation/api/grid/#showcolumnmenu) property as true.

To use the column menu, inject the **ColumnMenuService** in the provider section of **AppModule**.

The default items are displayed in following table.

| Item | Description |
|-----|-----|
| **SortAscending** | Sort the current column in ascending order. |
| **SortDescending** | Sort the current column in descending order. |
| **Group** | Group the current column. |
| **Ungroup** | Ungroup the current column. |
| **AutoFit** | Auto fit the current column. |
| **AutoFitAll** | Auto fit all columns. |
| **ColumnChooser** | Choose the column visibility. |
| **Filter** | Show the filter option as given in [`filterSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#type) |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs6" %}

> You can disable column menu for a particular column by defining the [`columns.showColumnMenu`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#showcolumnmenu) as false.

> You can customize the default items by defining the [`columnMenuItems`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuitems) with required items.

## Column menu events

During the resizing action, the grid component triggers the below two events.

1.The [`columnMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuopen) event triggers before the column menu opens.

2.The [`columnMenuClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuclick) event triggers when the user clicks the column menu of the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs7" %}

## Custom column menu item

Custom column menu items can be added by defining the [`columnMenuItems`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuitems) as collection of the [`columnMenuItemModel`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuItemModel/). Actions for this customized items can be defined in the [`columnMenuClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuclick) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs8" %}

## Customize menu items for particular columns

Sometimes, you have a scenario that to hide an item from column menu for particular columns. In that case, you need to define the [`columnMenuOpenEventArgs.hide`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuOpenEventArgs) as true in the [`columnMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuopen) event.

The following sample, **Filter** item was hidden in column menu when opens for the **OrderID** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grid-cs9" %}

## Customize the icon of column menu

You can customize the column menu icon by overriding the default grid class **.e-icons.e-columnmenu** with a custom property **content** as mentioned below.

```css
.e-grid .e-columnheader .e-icons.e-columnmenu::before {
              content: "\e941";
      }
```

In the below sample, grid is rendered with a customized column menu icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-column-menu-icon-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-column-menu-icon-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-column-menu-icon-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/custom-column-menu-icon-cs1" %}