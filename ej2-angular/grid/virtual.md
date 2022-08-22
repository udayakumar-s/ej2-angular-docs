---
layout: post
title: Virtual in Angular Grid component | Syncfusion
description: Learn here all about Virtual in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Virtual 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Virtual in Angular Grid component

Grid allows you to load large amount of data without performance degradation.

To use virtualization, you need to inject **VirtualScrollService** in Grid.

## Row Virtualization

Row virtualization allows you to load and render rows only in content viewport. It is an alternative way of
paging in which the data will load while scrolling vertically.
To setup the row virtualization, you need to define
[`enableVirtualization`](../api/grid/#enablevirtualization) as true and
content height by [`height`](../api/grid/#height) property.

The number of records displayed in the Grid is determined implicitly by height of content area. Also you have an option to define visible
number of records by
[`pageSettings.pageSize`](../api/grid/pageSettingsModel/#pagesize) property.
The loaded data will be cached and reused when it is needed for next time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/paging1-cs8/app/app.component.ts" % }

## Column Virtualization

Column virtualization allows you to virtualize columns. It will render columns which are in viewport.
You can scroll horizontally to view more columns.

To setup the column virtualization, set the
[`enableVirtualization`](../api/grid/#enablevirtualization) and
[`enableColumnVirtualization`](../api/grid/#enablecolumnvirtualization) properties as `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/paging1-cs9/app/app.component.ts" % }

> Column's [`width`](../api/grid/column/#width) is required for column virtualization.
If column's width is not defined then Grid will consider its value as **200px**.

## Virtualization with Grouping

Both the row and column virtualization can be used along with grouping. At initial rendering, the virtual height of scrollbar will be set based on the total number of records and after grouping, it will be refreshed based on the grouped state(expand/collapse). While collapse the group caption row in current viewport then the next view page grouped records are shown.

> The collapsed/expanded state will persist only for local dataSource while scrolling.

## Limitations for virtual scrolling

* While using column virtual scrolling, column width should be in pixel. Percentage values are not accepted.
* Due to the element height limitation in browsers, the maximum number of records loaded by the Grid is limited by the browser capability.
* Cell selection will not be persisted in both row and column virtual scrolling.
* Virtual scrolling is not compatible with batch editing, detail template and hierarchy features.
* Group expand and collapse state will not be persisted for remote data.
* Since data is virtualized in grid, the aggregated information and total group items are displayed based on the current view items.
To get these information regardless of the view items, refer to the
[`Group with Page`](./grouping#group-with-paging) topic.
* The page size provided must be two times larger than the number of visible rows in the grid.
If the page size is failed to meet this condition then the size will be determined by grid.
* The height of the grid content is calculated using the row height and total number of records
in the data source and hence features which changes row height such as text wrapping are not supported.
If you want to increase the row height to accommodate the content then you can specify the
 row height as below to ensure all the table rows are in same height.

```css
.e-grid .e-row {
    height: 2em;
}
```

* Programmatic selection using [`selectRows`](../api/grid/#selectrows) method is not supported in virtual scrolling.

## See also

* [How to load a million records in less than a second Grid](https://www.syncfusion.com/blogs/post/how-to-load-a-million-records-in-less-than-a-second-in-syncfusion-angular-data-grid.aspx)