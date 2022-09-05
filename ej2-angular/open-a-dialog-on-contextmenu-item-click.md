---
layout: post
title: Open a dialog on contextmenu item click in Angular Context menu component | Syncfusion
description: Learn here all about Open a dialog on contextmenu item click in Syncfusion ##Platform_Name## Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Open a dialog on contextmenu item click 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Open a dialog on contextmenu item click in Angular Context menu component

This section explains about how to open a dialog on ContextMenu item click. This can be achieved by
handling dialog open in `select` event of the ContextMenu.

In the following sample, Dialog will open while clicking `Save As...` item:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/dialog-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/context-menu/dialog-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/dialog-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/context-menu/dialog-cs1" %}
