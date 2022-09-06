---
layout: post
title: Responsive columns in Angular Grid component | Syncfusion
description: Learn here all about Responsive columns in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Responsive columns 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Responsive columns in Angular Grid component

You can toggle column visibility based on media queries which are defined
at the [`hideAtMedia`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#hideatmedia).
The [`hideAtMedia`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#hideatmedia) accepts valid
[Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ). In the below sample, for **OrderID** column, [`hideAtMedia`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#hideatmedia) property value is set as **(min-width: 700px)** so that **OrderID** column will gets hidden when the browser screen width is lessthan 700px.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs21/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs21/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs21/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/grid-cs21" %}