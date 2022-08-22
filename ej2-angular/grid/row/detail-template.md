---
layout: post
title: Detail template in Angular Grid component | Syncfusion
description: Learn here all about Detail template in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Detail template 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Detail template in Angular Grid component

The detail template provides additional information about a particular row by expanding or collapsing detail content. The [detailTemplate](../../api/grid/#detailtemplate) property accepts the template for the detail row.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/custom-cell-cs4/app/app.component.ts" % }

## Rendering custom component

To render the custom component inside the detail row, define the template in the [detailTemplate](../../api/grid/#detailtemplate) and render the
component in the [detailDataBound](../../api/grid/#detaildatabound-emittypedetaildataboundeventargs) event.

For example, to render grid inside the detail row, place an HTML div element as the [detailTemplate](../../api/grid/#detailtemplate) and render the DIV element as grid component in the [detailDataBound](../../api/grid/#detaildatabound-emittypedetaildataboundeventargs) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/custom-cell-cs5/app/app.component.ts" % }

## Expand by external button

By default, detail rows render in collapsed state. You can expand a detail row by invoking the [expand](../../api/grid/detailRow/#expand) method using the external button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/custom-cell-cs6/app/app.component.ts" % }