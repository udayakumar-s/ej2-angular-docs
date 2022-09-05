---
layout: post
title: Column spanning in Angular Grid component | Syncfusion
description: Learn here all about Column spanning in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column spanning 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Column spanning in Angular Grid component

The grid has option to span the adjacent cells. You need to define the
[`colSpan`](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#colspan) attribute to span cells in the
[`QueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/#queryCellInfoEventArgs) event.

In the following demo, Employee **Davolio** doing analysis from 9.00 AM to 10.00 AM, so that cells have spanned.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/spanning-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/spanning-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/spanning-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/spanning-cs1" %}