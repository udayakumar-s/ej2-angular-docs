---
layout: post
title: Excel like filter in Angular Grid component | Syncfusion
description: Learn here all about Excel like filter in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Excel like filter 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Excel like filter in Angular Grid component

You can use the [`columns.filterTemplate`](../../api/grid/column/#filtertemplate) property to define custom component in advanced filter UI from excel filter for a particular column.

The following example demonstrates the way to use filter template for a column when using excel filter. In the following example, the [`DropdownList`](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started/) component is used to filter **CustomerID** column using filter template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-template-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-template-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-template-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/filter-template-cs1/app/app.component.ts" % }

> * By default, while opening the excel/checkbox filter in the Grid, the filter dialog will get and display the distinct data from the first 1000 records bound to the Grid to optimize performance. The remaining records will be returned as a result of the search option of the filter dialog.
> * However, we can increase the excel/checkbox filter count by modifying the `filterChoiceCount` argument value(as per our need) in the [`actionBegin`](../../api/grid/#actionBegin) event when the [`requestType`](../../api/grid/filterEventArgs/#requesttype) is `filterchoicerequest` or `filtersearchbegin`. This is demonstrated in the below code snippet,

```typescript
actionBegin(args: FilterEventArgs) {
    if (args.requestType === "filterchoicerequest" || args.requestType === "filtersearchbegin") {
        args.filterChoiceCount = 3000;
    }
}
```