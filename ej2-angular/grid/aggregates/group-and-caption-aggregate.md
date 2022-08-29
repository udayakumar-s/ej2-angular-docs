---
layout: post
title: Group and caption aggregate in Angular Grid component | Syncfusion
description: Learn here all about Group and caption aggregate in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Group and caption aggregate 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Group and caption aggregate in Angular Grid component

Group and caption aggregate values are calculated from the current group items.
If [`groupFooterTemplate`](../../api/grid/aggregateColumnDirective/#groupfootertemplate) is provided then the aggregate values can be displayed
 in the group footer cells and
if [`groupCaptionTemplate`](../../api/grid/aggregateColumnDirective/#groupcaptiontemplate)
 is provided then aggregate values can be displayed in the group caption cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/aggregates-group-cs1/app/app.component.ts" % }

> * Use the template reference variable name as **#groupFooterTemplate** to specify the group footer template
and as **#groupCaptionTemplate** to specify the group caption template.
> * The aggregate values must be accessed inside the template using their corresponding [`type`](../../api/grid/aggregateColumnDirective/#type)
name.