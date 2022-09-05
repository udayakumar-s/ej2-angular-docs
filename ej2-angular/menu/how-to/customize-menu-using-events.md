---
layout: post
title: Customize menu using events in Angular Menu component | Syncfusion
description: Learn here all about Customize menu using events in Syncfusion ##Platform_Name## Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize menu using events 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Customize menu using events in Angular Menu component

The Menu provides a set of [`events`](https://ej2.syncfusion.com/angular/documentation/api/menu#events) to enable users to customize it.

The available events are [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/menu/#beforeclose), [`beforeClose`](../..api//menu/#beforeopen), [`onClose`](https://ej2.syncfusion.com/angular/documentation/api/menu/#onclose), [`onOpen`](https://ej2.syncfusion.com/angular/documentation/api/menu/#onopen), and [`select`](../..api//menu/#select).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/handle-event-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/menu/handle-event-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/handle-event-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/menu/handle-event-cs1" %}
