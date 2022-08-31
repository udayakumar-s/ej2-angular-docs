---
layout: post
title: Cell in Angular Grid component | Syncfusion
description: Learn here all about Cell in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cell 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Cell in Angular Grid component

## Cell customization

The appearance of cells can be customized by using the
[`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event.
The [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event
triggers for every cell. In that event handler, you can get
[`QueryCellInfoEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs) that contains the details of the cell.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/custom-cell-cs1" %}

## Custom attributes

You can customize the grid cells by adding a CSS class to the [`customAttribute`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#customattributes) property of the column.

```CSS
.e-attr {
    background: #d7f0f4;
}
```

```typescript
{
    field: 'ShipCity', headerText: 'Ship City', customAttributes: {class: 'e-attr'}, width: '120'
}
```

In the below example, we have customized the cells of **OrderID** and **ShipCity** columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/custom-cell-cs2" %}

## Grid lines

The [`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/grid/#gridlines) have the option to display cell border and it can be defined by the
[`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/grid/#gridlines) property.

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
{% include code-snippet/grid/autowrap-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/autowrap-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/autowrap-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/autowrap-cs2" %}

>By default, the grid renders with **Default** mode.

## See Also

* [Is it possible to apply gradient color based on min and max value in Angular Grid?](https://www.syncfusion.com/forums/160346/is-it-possible-to-apply-gradient-color-based-on-min-and-max-value-in-angular-grid)