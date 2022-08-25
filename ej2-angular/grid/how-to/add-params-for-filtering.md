---
layout: post
title: Add params for filtering in Angular Grid component | Syncfusion
description: Learn here all about Add params for filtering in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Add params for filtering 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Add params for filtering in Angular Grid component

You can customize the default settings of the components which are used in Menu filter by using params of filter property in column definition.
In the below sample, OrderID and Freight Columns are numeric columns, while open the filter dialog then you can see that NumericTextBox with spin button is displayed to change/set the filter value. Now using the params option we hide the spin button in NumericTextBox for OrderID Column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filtering1-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filtering1-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filtering1-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/filtering1-cs11/app/app.component.ts" % }