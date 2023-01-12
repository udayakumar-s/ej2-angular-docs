---
layout: post
title: Adding custom item to toolbar in Angular File manager component | Syncfusion
description: Learn here all about Adding custom item to toolbar in Syncfusion Angular File manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Adding custom item to toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Adding custom item to toolbar in Angular File manager component

The toolbar items can be customized using the [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#toolbarsettings) API and [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#toolbarclick) events.

The following example shows adding a custom item in the toolbar.

The new toolbar button is added using [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#toolbarsettings). The [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#toolbarclick) event is used to add an event handler to the new toolbar button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/toolbar-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/file-manager/toolbar-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/toolbar-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/file-manager/toolbar-cs1" %}