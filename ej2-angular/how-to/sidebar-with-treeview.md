---
layout: post
title: Sidebar with treeview in Angular Sidebar component | Syncfusion
description: Learn here all about Sidebar with treeview in Syncfusion ##Platform_Name## Sidebar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sidebar with treeview 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Sidebar with treeview in Angular Sidebar component

The following example demonstrates how to render TreeView component inside the Sidebar with dock state and how to achieve expand and collapse the functionalities simultaneously in the sidebar and Treeview.

On collapse, the LI elements of TreeView show icons only to represent the short sign of the hidden text content. On expand, hidden text content will be set to be visible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sidebar/treeview-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/sidebar/treeview-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sidebar/treeview-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/sidebar/treeview-cs1" %}
