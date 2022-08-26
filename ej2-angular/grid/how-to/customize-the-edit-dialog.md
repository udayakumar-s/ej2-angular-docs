---
layout: post
title: Customize the edit dialog in Angular Grid component | Syncfusion
description: Learn here all about Customize the edit dialog in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Customize the edit dialog 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Customize the edit dialog in Angular Grid component

You can customize the appearance of the edit dialog in the [`actionComplete`](../../api/grid/#actioncomplete) event based on **requestType** as **beginEdit** or **add**.

In the following example, the dialog's properties like header text, showCloseIcon, height have been changed while editing and adding the records.

Also the locale text for the **Save** and **Cancel** buttons has been changed by overriding the default locale strings.

You can refer the Grid [`Default text`](../global-local/) list for more localization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs47/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs47/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs47/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/edit-cs47/app/app.component.ts" % }
