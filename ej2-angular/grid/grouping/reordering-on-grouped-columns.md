---
layout: post
title: Reordering on grouped columns in Angular Grid component | Syncfusion
description: Learn here all about Reordering on grouped columns in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Reordering on grouped columns 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Reordering on grouped columns in Angular Grid component

Grid provides an option to interchange the position of the Grouped Columns by dragging and dropping the grouped headercells in the droparea. So, any new column entering into the droparea can also be dropped in any position.

To enable this feature, you have to set the [`groupSettings.allowReordering`](../../api/grid/groupSettings/#allowReordering) property as **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping-anim-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping-anim-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping-anim-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/grouping-anim-cs1/app/app.component.ts" % }