---
layout: post
title: Custom tool bar in Angular Grid component | Syncfusion
description: Learn here all about Custom tool bar in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom tool bar 
documentation: ug
domainurl: ##DomainURL##
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
  
{% previewsample "page.domainurl/code-snippet/grid/toolbar-template-cs1" %}