---
layout: post
title: Footer aggregate in Angular Grid component | Syncfusion
description: Learn here all about Footer aggregate in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Footer aggregate 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Footer aggregate in Angular Grid component

Footer aggregate value is calculated from all the rows and it can be displayed in footer cells. Use
[`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#footertemplate) to render the aggregate value in footer cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-footer-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-footer-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-footer-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/aggregates-footer-cs1" %}

> * Use the template reference variable name as **#footerTemplate** to specify the footer template.
> * The aggregate values must be accessed inside the template using their corresponding
[`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) name.

## How to format aggregate value

You can format the aggregate value result by using the
[`format`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#format) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-footer-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-footer-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-footer-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/aggregates-footer-cs2" %}