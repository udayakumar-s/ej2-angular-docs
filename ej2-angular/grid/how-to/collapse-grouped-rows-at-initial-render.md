---
layout: post
title: Collapse grouped rows at initial render in Angular Grid component | Syncfusion
description: Learn here all about Collapse grouped rows at initial render in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Collapse grouped rows at initial render 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Collapse grouped rows at initial render in Angular Grid component

You can collapse all the grouped rows at initial rendering by using [`dataBound`](../../api/grid/#databound) event with  [`collapseAll`](../../api/grid/group/#collapseall) method of the grid.

In the below demo, all the grouped rows are collapsed at initial rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/collapse-all-initial-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/collapse-all-initial-cs1/app/app.component.ts" % }