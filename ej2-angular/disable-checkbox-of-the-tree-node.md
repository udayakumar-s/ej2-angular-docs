---
layout: post
title: Disable checkbox of the tree node in Angular Treeview component | Syncfusion
description: Learn here all about Disable checkbox of the tree node in Syncfusion ##Platform_Name## Treeview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Disable checkbox of the tree node 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Disable checkbox of the tree node in Angular Treeview component

You can disable the check box alone in TreeView instead of disabling the whole node. You need to include the `e-checkbox-disabled` class into the check box element using the `drawNode` event. Please refer to the following sample to disable the check box of the tree nodes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/tree-view/disable-checkbox-cs1" %}