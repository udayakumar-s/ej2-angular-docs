---
layout: post
title: Row height in Angular Grid component | Syncfusion
description: Learn here all about Row height in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Row height 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Row height in Angular Grid component

You can customize the row height of grid rows through the [`rowHeight`](../../api/grid/#rowheight) property. The [`rowHeight`](../../api/grid/#rowheight) property
is used to change the row height of entire grid rows.

In the below example, the [`rowHeight`](../../api/grid/#rowheight) is set as '60px'.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/custom-cell-cs7/app/app.component.ts" % }

## Customize row height for particular row

Grid row height for particular row can be customized using the [`rowDataBound`](../../api/grid/#rowdatabound)
event by setting the [`rowHeight`](../../api/grid/#rowheight) in arguments for each row based on the requirement.

In the below example, the row height for the row with OrderID as '10249' is set as '90px' using the [`rowDataBound`](../../api/grid/#rowdatabound) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/custom-cell-cs8/app/app.component.ts" % }

> In virtual scrolling mode, it is not applicable to set the [`rowHeight`](../../api/grid/#rowheight) using the [`rowDataBound`](../../api/grid/#rowdatabound) event.