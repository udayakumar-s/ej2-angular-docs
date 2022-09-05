---
layout: post
title: Validate the text when renaming the tree node in Angular Treeview component | Syncfusion
description: Learn here all about Validate the text when renaming the tree node in Syncfusion ##Platform_Name## Treeview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Validate the text when renaming the tree node 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Validate the text when renaming the tree node in Angular Treeview component

You can validate the tree node text while editing using `nodeEdited` event of the TreeView.
Following is an example that shows how to validate and prevent empty values in tree node.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/validation-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tree-view/validation-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/validation-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/tree-view/validation-cs1" %}