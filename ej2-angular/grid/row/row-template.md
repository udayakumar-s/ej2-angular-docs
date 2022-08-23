---
layout: post
title: Row template in Angular Grid component | Syncfusion
description: Learn here all about Row template in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Row template 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Row template in Angular Grid component

<<<<<<< HEAD
The Grid provides a way to use a custom layout for its rows using template feature. The rowTemplate property accepts the template for the row.

In the below example, we have presented Employee Information with Employee Photo in the first column and employee details like Name, Address etc. in the second column.
=======
The Grid provides a way to use a custom layout for its rows using template feature. The [rowTemplate](../../api/grid/#rowtemplate) property accepts the template for the row.

In the following example, Employee Information with Employee Photo is presented in the first column and employee details like Name, Address, etc., are presented in the second column.
>>>>>>> a61f632fe75e6a2b203935097fc72a57436bc6ca

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/custom-cell-cs9/app/app.component.ts" % }

## Row template with formatting

If the [rowTemplate](../../api/grid/#rowtemplate) is used, the value cannot be formatted inside the template using the [columns.format](../../api/grid/column/#format) property. In that case, a function should be defined globally to format the value and invoke it inside the template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/custom-cell-cs10/app/app.component.ts" % }
=======
{% endtab %}

## Limitations

Row template feature is not compatible with all the features which are available in the grid, and it has limited features support. The features that are incompatible with the row template feature are listed below.

* Filtering
* Paging
* Sorting
* Searching
* Rtl
* Export
* Context Menu
* State Persistence
* Selection
* Grouping
* Editing
* Frozen rows & columns
* Virtual & Infinite scrolling
* Column chooser
* Column menu
* Detail Row
* Foreignkey column
* Resizing
* Reordering
* Aggregates
* Clipboard
* Adaptive view
>>>>>>> a61f632fe75e6a2b203935097fc72a57436bc6ca
