---
layout: post
title: Row in Angular Grid component | Syncfusion
description: Learn here all about Row in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row 
documentation: ug
domainurl: ##DomainURL##
---

# Row in Angular Grid component

It represents the record details that are fetched from the data source.

## Row Customization

### Using event

You can customize the appearance of the Row by using the [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound) event.
The [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound) event triggers for every row. In that event handler,
you can get [`RowDataBoundEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDataBoundEventArgs) which contain details of the row.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/custom-cell-cs11" %}

### Using CSS customize alternate rows

You can change the grid's alternative rows' background color by overriding the **.e-altrow** class.

```css
.e-grid .e-altrow {
    background-color: #fafafa;
}
```

Please refer the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs22/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs22/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs22/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/grid-cs22" %}

## See Also

* [How to customize the row height in Angular Grid](https://www.syncfusion.com/forums/138140/how-to-customize-the-row-height-in-angular-grid)
* [How to set font size and padding of Angular Grid's toolbar and filter bar](https://www.syncfusion.com/forums/150181/how-to-set-font-size-and-padding-of-angular-grids-toolbar-and-filter-bar)
* [How to displaying serial number in Angular Grid](https://www.syncfusion.com/forums/166563/how-to-displaying-serial-number-in-angular-grid)
* [How to add/update a new row programmatically in Angular Grid](https://www.syncfusion.com/forums/144356/how-to-add-update-a-new-row-programmatically-in-angular-grid)