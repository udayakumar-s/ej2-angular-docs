---
layout: post
title: Get dynamic icon in Angular Treeview component | Syncfusion
description: Learn here all about Get dynamic icon in Syncfusion ##Platform_Name## Treeview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Get dynamic icon 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Get dynamic icon in Angular Treeview component

In TreeView component, you can get the original bound data using the `getTreeData` method. For this method, if you pass the id of the tree node, it returns the corresponding node information, or otherwise the overall tree nodes information will be returned. You can use this method to get the bound iconCss class in the `nodeChecking` event. Please refer to the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/icon-css-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tree-view/icon-css-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/icon-css-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/tree-view/icon-css-cs1" %}