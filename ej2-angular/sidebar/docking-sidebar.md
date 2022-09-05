---
layout: post
title: Docking sidebar in Angular Sidebar component | Syncfusion
description: Learn here all about Docking sidebar in Syncfusion ##Platform_Name## Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Docking sidebar 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Docking sidebar in Angular Sidebar component

Dock state of the Sidebar reserves some space on the page that always remains in a visible, when the Sidebar is in collapsed state. It is used to show the short form of a content like icons alone instead of lengthy text. To achieve this , set [`enableDock`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#enabledock) as true along with required [`dockSize`](https://ej2.syncfusion.com/angular/documentation/api/sidebar/#docksize).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/dock-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sidebar/dock-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/dock-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/sidebar/dock-cs1" %}

## See Also

* [How to add sidebar navigation](./how-to/sidebar-with-treeview)