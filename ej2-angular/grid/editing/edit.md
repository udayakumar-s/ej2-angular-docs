---
layout: post
title: Edit in Angular Grid component | Syncfusion
description: Learn here all about Edit in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Edit 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Edit in Angular Grid component

The Grid component has options to dynamically insert, delete and update records.
Editing feature requires a primary key column for CRUD operations.
To define the primary key, set [`columns.isPrimaryKey`](../../api/grid/column/#isprimarykey) to **true** in particular column.

You can start the edit action either by double clicking the particular row or by selecting the required row and click on **Edit**
button in the toolbar. Similarly, you can add a new record to grid either by clicking on **Add** button in the toolbar
or on an external button which is bound to invoke the [`addRecord`](../../api/grid/edit/#addrecord) method of the grid,
**Save** and **Cancel** while in edit mode is possible using respective toolbar icon in grid.

Deletion of the record is possible by selecting the required row and click on **Delete** button in the toolbar.

To use CRUD, inject the [`EditService`](../../api/grid/edit) module into the **@NgModule.providers** section.

To learn about what are all the edit modes and edit types are available in Angular Grid, you can check on this video

{% youtube "https://www.youtube.com/watch?v=RefC_z4Nnmg" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs14/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs14/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs14/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/edit-cs14/app/app.component.ts" % }

> * If [`columns.isIdentity`](../../api/grid/column/#isidentity) is enabled,
then it will be considered as a read-only column when editing and adding a record.
> * You can disable editing for a particular column, by specifying
[`columns.allowEditing`](../../api/grid/column/#allowediting) to **false**.

## Toolbar with edit option

The grid toolbar has the [built-in items](../../toolbar/item-configuration) to execute Editing actions.
You can define this by using the [`toolbar`](../../api/grid/#toolbar) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs15/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs15/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs15/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/edit-cs15/app/app.component.ts" % }

## Disable editing for particular column

You can disable editing for particular columns by using the [`columns.allowEditing`](../../api/grid/column/#allowediting).

In the following demo, editing is disabled for the **CustomerID** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs16/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs16/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs16/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/edit-cs16/app/app.component.ts" % }

## Disable editing for a particular row or cell

You can disable the editing for a particular row by using the [`actionBegin`](../../api/grid/#actionbegin) event of Grid based on **requestType** as **beginEdit**.

In the below demo, the rows which are having the value for **ShipCountry** column as "France" is prevented from editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs17/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs17/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs17/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/edit-cs17/app/app.component.ts" % }

For batch mode of editing, you can use [`cellEdit`](../../api/grid/#celledit) event of Grid. In the below demo, the cells which are having the value as "France" is prevented from editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs18/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs18/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs18/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/edit-cs18/app/app.component.ts" % }

## Editing template column

You can edit template column value by defining [`field`](../../api/grid/column/#field) for that particular column.

In the below demo, the **ShipCountry** column is rendered with the template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs19/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs19/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs19/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/edit-cs19/app/app.component.ts" % }

## Troubleshoot editing works only for first row

The Editing functionalities can be performed based upon the primary key value of the selected row.
If **primaryKey** is not defined in the grid, then edit or delete action take places the first row.

<<<<<<< HEAD
=======
## How to make a Grid column always editable

Make the Grid column always editable using the column template feature of the Grid.

In the following example, the textbox is rendered in the Freight column using a column template. The keyup event for the Grid is bound using the [created](../../api/grid#created) event of the Grid, and the edited changes are saved in the data source using the [updateRow](../../api/grid#updaterow) method of the Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs20/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs20/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs20/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/edit-cs20/app/app.component.ts" % }

>>>>>>> a61f632fe75e6a2b203935097fc72a57436bc6ca
## See Also

* [Cascading DropDownList with Grid Editing](../how-to/cascading-drop-down-list)
* [Tab Inside the Dialog Editing](../how-to/using-tab-inside-the-dialog-editing)
* [Apply animation for Grid Edit dialog in Angular Grid](https://www.syncfusion.com/forums/154544/apply-animation-for-grid-edit-dialog-in-angular-grid)
* [CRUD operations using asp.net core web api methods in Angular Grid](https://www.syncfusion.com/forums/150090/crud-operations-using-asp-net-core-web-api-methods-in-angular-grid)
* [How to restrict ArrowUp increase and ArrowDown decrease value in Grid numeric cell in Angular Grid](https://www.syncfusion.com/forums/150611/how-to-restrict-arrowup-increase-and-arrowdown-decrease-value-in-grid-numeric-cell-in)
* [How to use DropDownList and Combo-Box in Batch-edit mode of Angular Grid](https://www.syncfusion.com/forums/151968/how-to-use-dropdownlist-and-combo-box-in-batch-edit-mode-of-angular-grid)
* [How to use CellEditArgs event in Angular Grid](https://www.syncfusion.com/forums/153617/how-to-use-celleditargs-event-in-angular-grid)
* [How to render Grid with add form always in Angular Grid](https://www.syncfusion.com/forums/161716/how-to-render-grid-with-add-form-always-in-angular-grid)
* [How to show the numeric key pad in mobile device when edit the number column in Angular Grid](https://www.syncfusion.com/forums/147184/how-to-show-the-numeric-keypad-in-mobile-device-when-edit-the-number-column-in-angular-grid)
* [How to enable inline editing in Angular 4 Data Grid/Table](https://www.syncfusion.com/kb/10851/how-to-enable-inline-editing-in-angular-4-data-grid-table)