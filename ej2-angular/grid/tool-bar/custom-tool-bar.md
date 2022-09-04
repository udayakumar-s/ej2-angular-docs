---
layout: post
title: Custom tool bar in Angular Grid component | Syncfusion
description: Learn here all about Custom tool bar in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom tool bar 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Custom tool bar in Angular Grid component

Custom Toolbar is used to customize the whole toolbar. It can be added by defining
**toolbarTemplate**. Actions for this toolbar template items are defined in the
**clicked** event in toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-template-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/toolbar-template-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-template-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/toolbar-template-cs1" %}