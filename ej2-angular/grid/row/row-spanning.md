---
layout: post
title: Row spanning in Angular Grid component | Syncfusion
description: Learn here all about Row spanning in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Row spanning 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Row spanning in Angular Grid component

The grid has option to span row cells. To achieve this, You need to define the [`rowSpan`](../../api/grid/queryCellInfoEventArgs/#rowspan) attribute to span cells in the [`QueryCellInfo`](../../api/grid/queryCellInfoEventArgs) event.

In the following demo, **Davolio** cell is spanned to two rows in the **EmployeeName** column.

Also Grid supports the spanning of rows and columns for same cells. **Lunch Break** cell is spanned to two rows and three columns in the **1:00** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/spanning-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/spanning-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/spanning-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/spanning-cs2/app/app.component.ts" % }

> To disable the spanning for particular grid page, we need to use **requestType** from [`QueryCellInfo`](../../api/grid/queryCellInfoEventArgs) event argument.