---
layout: post
title: Footer aggregate in Angular Grid component | Syncfusion
description: Learn here all about Footer aggregate in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Footer aggregate 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Footer aggregate in Angular Grid component

Footer aggregate value is calculated from all the rows and it can be displayed in footer cells. Use
[`footerTemplate`](../../api/grid/aggregateColumnDirective/#footertemplate) to render the aggregate value in footer cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-footer-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-footer-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-footer-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/aggregates-footer-cs3/app/app.component.ts" % }

> * Use the template reference variable name as **#footerTemplate** to specify the footer template.
> * The aggregate values must be accessed inside the template using their corresponding
[`type`](../../api/grid/aggregateColumnDirective/#type) name.

## How to format aggregate value

You can format the aggregate value result by using the
[`format`](../../api/grid/aggregateColumn/#format) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-footer-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-footer-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-footer-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/aggregates-footer-cs4/app/app.component.ts" % }