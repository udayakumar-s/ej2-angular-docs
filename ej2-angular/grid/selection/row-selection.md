---
layout: post
title: Row selection in Angular Grid component | Syncfusion
description: Learn here all about Row selection in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Row selection 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Row selection in Angular Grid component

## Select row at initial rendering

To select a row at initial rendering, set the [`selectedRowIndex`](../../api/grid/#selectedrowindex) value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/selection-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/selection-cs7/app/app.component.ts" % }

## Get selected row indexes

You can get the selected row indexes by using the [`getSelectedRowIndexes`](../../api/grid/#getselectedrowindexes) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/selection-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/selection-cs8/app/app.component.ts" % }

## Simple multiple row selection

You can select multiple rows by clicking on rows one by one. This will not deselect the previously selected rows. To deselect the previously selected row, you can click on the  selected row. You can enable this behavior by using [`selectionSettings.enableSimpleMultiRowSelection`](../../api/grid/selectionSettings/#enablesimplemultirowselection) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/selection-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/selection-cs9/app/app.component.ts" % }

## Toggle selection

The Toggle selection allows to perform selection and unselection of the particular row or cell or column. To enable toggle selection, set [`enableToggle`](../../api/grid/selectionSettings/#enabletoggle) property of the selectionSettings as true. If you click on the selected row or cell or column then it will be unselected and vice versa.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/selection-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/selection-cs10/app/app.component.ts" % }

> If multi selection is enabled, then first click on any selected row (without pressing Ctrl key), it will clear the multi selection and in second click on the same row, it will be unselected.

## Clear selection programmatically

You can clear the Grid selection programmatically by using the [clearSelection](./api-grid.html#clearSelection) method.

In the demo below, we initially selected the third row using [selectedRowIndex](./api-grid.html#selectedrowindex-number). You can clear this selection by calling the [clearSelection](./api-grid.html#clearSelection) method in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/selection-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/selection-cs11/app/app.component.ts" % }

## Get selected records on various pages

Enabling the [selectionSettings.persistSelection](./api-selectionSettings.html#persistselection-boolean) property will persist the selection in all Grid operations.

So the selection will be maintained on every page even after navigating to another page.

You can get the selected records using the [getSelectedRecords](./api-grid.html#getSelectedRecords) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs12/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/selection-cs12/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs12/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/selection-cs12/app/app.component.ts" % }

> To persist the grid selection, it is necessary to define any one of the columns as a primary key using the [columns.isPrimaryKey](./api-column.html#isprimarykey-boolean) property.