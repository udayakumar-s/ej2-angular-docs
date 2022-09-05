---
layout: post
title: Template in Angular Treeview component | Syncfusion
description: Learn here all about Template in Syncfusion ##Platform_Name## Treeview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Template in Angular Treeview component

The TreeView component allows you to customize the look of TreeView nodes by using the [nodeTemplate](https://ej2.syncfusion.com/angular/documentation/api/treeview#nodetemplate)
property. This property accepts either template string or HTML element ID.

In the following sample, employee information such as employee photo, name, and designation have been included using the `nodeTemplate` property.

The template expression should be provided inside the `${...}` interpolation syntax.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/template-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tree-view/template-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/template-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/tree-view/template-cs1" %}

## See Also

* [How to customize the expand and collapse icons](./how-to/customize-the-expand-and-collapse-icons)
* [How to customize the tree nodes based on levels](./how-to/customize-the-tree-nodes-based-on-levels)
