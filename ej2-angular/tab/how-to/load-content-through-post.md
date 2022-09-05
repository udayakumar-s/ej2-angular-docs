---
layout: post
title: Load content through post in Angular Tab component | Syncfusion
description: Learn here all about Load content through post in Syncfusion ##Platform_Name## Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Load content through post 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Load content through post in Angular Tab component

The Tab supports to load external contents through `AJAX` library. Refer to the following steps.

* Import the `Ajax` module from `ej2-base` and initialize with URL path.

* Get the data from Ajax `Success` event, then initialize the Tab with retrieved external path data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/ajax-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tab/ajax-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/ajax-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/tab/ajax-cs1" %}
