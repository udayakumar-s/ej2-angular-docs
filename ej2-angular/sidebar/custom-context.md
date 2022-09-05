---
layout: post
title: Custom context in Angular Sidebar component | Syncfusion
description: Learn here all about Custom context in Syncfusion ##Platform_Name## Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom context 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Custom context in Angular Sidebar component

Sidebar has a flexible option to make it initialize, target to any HTML element alongside of the main content of a web page.

By default, it initialize target to the body element. [`target`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#target)  property allows users to set target element to initialize the Sidebar inside any HTML container element apart from the body element.

> If required , `zIndex` can be set when sidebar act as overlay type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/custom-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sidebar/custom-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/custom-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/sidebar/custom-cs1" %}

## See Also

* [Angular routing](./how-to/hide-sidebar)