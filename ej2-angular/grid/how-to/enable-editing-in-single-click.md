---
layout: post
title: Enable editing in single click in Angular Grid component | Syncfusion
description: Learn here all about Enable editing in single click in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Enable editing in single click 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Enable editing in single click in Angular Grid component

## Normal Editing

You can make a row editable on a single click with **Normal** mode of editing in Grid, by using the [`startEdit`](../../api/grid/#startedit) and [`endEdit`](../../api/grid/#endedit) methods.

Bind the **mouseup** event for Grid and in the event handler call the [`startEdit`](../../api/grid/#startedit) and [`endEdit`](../../api/grid/#endedit), based on the clicked target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/single-click-batch-editing-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/single-click-batch-editing-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/single-click-batch-editing-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/single-click-batch-editing-cs1/app/app.component.ts" % }

### Open dropdown edit popup on single click

You can open the default dropdown edit popup with single click edit by focusing the dropdown element and calling the EJ2 dropdown list's [`showPopup`](../../api/drop-down-list/#showpopup) method in the Grid's [`actionComplete`](../../api/grid/#actioncomplete) event. In this demo we have used a global flag variable in the **mouseup** event to ensure if the dropdown column is the clicked edit target.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/open-dropdown-popup-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/open-dropdown-popup-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/open-dropdown-popup-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/open-dropdown-popup-cs1/app/app.component.ts" % }

## Batch Editing

You can make a cell editable on a single click with **Batch** mode of editing in Grid, by using the [`editCell`](../../api/grid/edit/#editcell) method.

Bind the **mouseup** event for Grid and in the event handler call the [`editCell`](../../api/grid/edit/#editcell) method, based on the clicked target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/single-click-inline-editing-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/single-click-inline-editing-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/single-click-inline-editing-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/single-click-inline-editing-cs1/app/app.component.ts" % }