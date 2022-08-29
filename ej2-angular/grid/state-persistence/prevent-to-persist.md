---
layout: post
title: Prevent to persist in Angular Grid component | Syncfusion
description: Learn here all about Prevent to persist in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Prevent to persist 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Prevent to persist in Angular Grid component

## Prevent columns from persisting

When the [enablePersistence](../../api/grid/#enablepersistence) property is set to true, the Grid properties such as [Grouping](../../api/grid/groupSettingsModel/), [Paging](../../api/grid/pageSettingsModel/), [Filtering](../../api/grid/pageSettingsModel/), [Sorting](../../api/grid/sortSettingsModel/), and [Columns](../../api/grid/columnModel/) will persist. You can use the `addOnPersist` method to prevent these Grid properties from persisting.

The following example demonstrates how to prevent Grid columns from persisting. In the [dataBound](../../api/grid/#databound) event of the Grid, you can override the `addOnPersist` method and remove the columns from the key list given for persistence.

>**Note:** When the [enablePersistence](../../api/grid/#enablepersistence) property is set to true, the Grid properties such as column template, column formatter, header text, and value accessor will not persist.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping1-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/grouping1-cs9/app/app.component.ts" % }