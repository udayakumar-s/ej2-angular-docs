---
layout: post
title: Row in Angular Treegrid component | Syncfusion
description: Learn here all about Row in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row 
documentation: ug
domainurl: ##DomainURL##
---

# Row in Angular Treegrid component

The row represents record details fetched from data source.

## Customize rows

You can customize the appearance of a row by using the [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) event.
The [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) event triggers for every row. In the event handler, you can get the
`RowDataBoundEventArgs` that contains details of the row.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/row-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/row-cs1" %}

## Styling alternate rows

 You can change the treegrid's alternative rows' background color by overriding the `.e-altrow` class.

```css
.e-treegrid .e-altrow {
    background-color: #fafafa;
}
```

> The above style customization works only when we elevate the CSS to global scope using the encapsulation: ViewEncapsulation.None
> If you need to apply style for ViewEncapsulation other than None, use ng-deep like shown in the below example code snippet,

```css
::ng-deep .e-treegrid .e-altrow  {
    background-color: #fafafa;
}
```

Please refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/alt-row-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/alt-row-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/alt-row-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/alt-row-cs1" %}

## Row height

You can customize the row height of treegrid rows through the [`rowHeight`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowheight) property. The `rowHeight` property
is used to change the row height of entire treegrid rows.

In the below example, the `rowHeight` is set as '60px'.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/row-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/row-cs2" %}

### Customize row height for particular row

Grid row height for particular row can be customized using the [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound)
event by setting the `rowHeight` in arguments for each row based on the requirement.

In the below example, the row height for the row with Task ID as '3' is set as '90px' using the `rowDataBound` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/row-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/row-cs3" %}

## Row template

The [`rowTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowtemplate) has an option to customise the look and behavior of the treegrid rows. The [`rowTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowtemplate) property accepts either the template string or HTML element ID.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/rowtemplate-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/rowtemplate-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/rowtemplate-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/rowtemplate-cs1" %}

The [`rowTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowtemplate) property accepts only the TR element.

### Row template with formatting

If the [`rowTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowtemplate) is used, the value cannot be  formatted  inside the template using the [`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#format) property. In that case, a function should be defined globally to format the value and invoke it inside the template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/rowtemplateformat-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/rowtemplateformat-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/rowtemplateformat-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/rowtemplateformat-cs1" %}

### Limitations

Row template feature is not compatible with all the features which are available in treegrid and it has limited features support. Here we have listed out the features which are not compatible with row template feature.

* Filtering
* Paging
* Sorting
* Scrolling
* Searching
* Rtl
* Context Menu
* State Persistence

## Detail template

The detail template provides additional information about a particular row. By expanding the parent row the child rows are expanded along with their detail template. The [`detailTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#detailtemplate) property accepts either the template string or HTML element ID.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/detailtemplate-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/detailtemplate-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/detailtemplate-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/detailtemplate-cs1" %}

## Drag and drop

The TreeGrid rows can be reordered, dropped to another TreeGrid or custom control by enabling the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowrowdraganddrop) to true.

To use row drag and drop, inject the `RowDDService` module in the TreeGrid.

### Drag and drop within TreeGrid

The TreeGrid row drag and drop allows you to drag and drop TreeGrid rows on the same TreeGrid using drag icon. To enable row drag and drop, set the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowrowdraganddrop) to true. It provides the way to drop the row above, below or child to the target row with respective to the target row position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/draganddrop-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/draganddrop-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/draganddrop-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/draganddrop-cs1" %}

> * Selection feature must be enabled for row drag and drop.
> * For multiple row selection, the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#type) property must be set to `multiple`.

### Drag and drop to another TreeGrid

To drag and drop between two TreeGrid, enable the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowrowdraganddrop) property and specify the target TreeGrid ID in [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings/#targetid) property of rowDropSettings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/draganddrop-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/draganddrop-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/draganddrop-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/draganddrop-cs2" %}

### Drag and drop events

The following events are triggered while drag and drop the treegrid rows.

[`rowDragStartHelper`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdragstarthelper) - Triggers when click the drag icon or treegrid row and this event is used to customize the drag element based on user criteria.<br/>
[`rowDragStart`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdragstart) -Triggers when starts to drag the treegrid row. <br/>
[`rowDrag`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdrag) - Triggers while dragging the treegrid row. <br/>
[`rowDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdrop) - Triggers when a drag element is dropped on the target element. <br/>

### Prevent reordering a row as child to another row

You can prevent the default behavior of dropping rows as children to the target by setting the `cancel` property to `true` in [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdrop) event argument. You can also change the drop position after cancelling using [reorderRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#reorderrows) method.

In the below example drop action is cancelled and dropped above to target row.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/draganddrop-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/draganddrop-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/draganddrop-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/draganddrop-cs3" %}

> Refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-ui-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to know how to present and manipulate data.
