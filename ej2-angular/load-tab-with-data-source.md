---
layout: post
title: Load tab with data source in Angular Tab component | Syncfusion
description: Learn here all about Load tab with data source in Syncfusion ##Platform_Name## Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Load tab with data source 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Load tab with data source in Angular Tab component

You can bind any data object to Tab items, by mapping it to [`header`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem#header) and
[`content`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItem#content)&nbsp; property.

In the below demo, Data is fetched from an `OData` service using `DataManager`. The result data is formatted as
a JSON object with `header` and `content` fields, which is set to [`items`](https://ej2.syncfusion.com/angular/documentation/api/accordion#items) property of Tab.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/basic-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tab/basic-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/tab/basic-cs7" %}
