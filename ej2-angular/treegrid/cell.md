---
layout: post
title: Cell in Angular Treegrid component | Syncfusion
description: Learn here all about Cell in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cell 
documentation: ug
domainurl: ##DomainURL##
---

# Cell in Angular Treegrid component

## Displaying the HTML content

The HTML tags can be displayed in the TreeGrid header and content by enabling the [`disableHtmlEncode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#disablehtmlencode) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/cell-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/cell-cs1" %}

## Customize cell styles

The appearance of cells can be customized by using the [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event.
The [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) event triggers for every cell. In that event handler, you can get
`QueryCellInfoEventArgs` that contains the details of the cell.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/cell-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/cell-cs2" %}

## Auto wrap

The auto wrap allows the cell content of the treegrid to wrap to the next line when it exceeds the boundary of the cell width. The Cell Content wrapping works based on the position of white space between words.
To enable auto wrap, set the [`allowTextWrap`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowtextwrap) property to `true`.
You can configure the auto wrap mode by setting the [`textWrapSettings.wrapMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#textwrapsettings) property.

There are three types of `wrapMode`. They are:

* **`Both`**: `Both` value is set by default. Auto wrap will be enabled for both the content and the header.
* **`Header`**: Auto wrap will be enabled only for the header.
* **`Content`**: Auto wrap will be enabled only for the content.

Note: When a column width is not specified, then auto wrap of columns will be adjusted with respect to the treegrid's width.

In the following example, the `textWrapSettings.wrapMode` is set to `Content`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/cell-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/cell-cs3" %}

## Custom Attributes

You can customize the treegrid cells by adding a CSS class to the [`customAttribute`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#customattributes) property of the column.

```CSS
.e-attr {
    background: #d7f0f4;
}
```

```typescript
{
    field: 'taskID', headerText: 'Task ID', width: 90, customAttributes: {class: "e-attr"}, textAlign: 'Right'
}
```

In the below example, we have customized the cells of `TaskID` and `StartDate` columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/cell-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/cell-cs4" %}

## Grid Lines

The [`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#gridlines) have option to display cell border and it can be defined by the
[`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#gridlines) property.

The available modes of grid lines are:

| Modes | Actions |
|-------|---------|
| Both | Displays both the horizontal and vertical grid lines.|
| None | No grid lines are displayed.|
| Horizontal | Displays the horizontal grid lines only.|
| Vertical | Displays the vertical grid lines only.|
| Default | Displays grid lines based on the theme.|

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/cell-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/cell-cs5" %}

>By default, the treegrid renders with `Default` mode.

## Clip Mode

The clip mode provides options to display its overflow cell content and it can be defined by the [`columns.clipMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#clipmode) property.

There are three types of [`clipMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#clipmode). They are:

* **`Clip`**: Truncates the cell content when it overflows its area.
* **`Ellipsis`**: Displays ellipsis when the cell content overflows its area.
* **`EllipsisWithTooltip`**: Displays ellipsis when the cell content overflows its area, also it will display the tooltip while hover on ellipsis is applied.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/cell-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/cell-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/cell-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/cell-cs6" %}

>By default, [`columns.clipMode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#clipmode) value is `Ellipsis`.
> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-ui-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.