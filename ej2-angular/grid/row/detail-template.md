---
layout: post
title: Detail template in Angular Grid component | Syncfusion
description: Learn here all about Detail template in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Detail template 
documentation: ug
domainurl: ##DomainURL##
---

# Detail template in Angular Grid component

The detail template provides additional information about a particular row by expanding or collapsing detail content. The [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#detailtemplate) property accepts the template for the detail row.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/custom-cell-cs4" %}

## Rendering custom component

To render the custom component inside the detail row, define the template in the [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#detailtemplate) and render the component in the [detailDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#detaildatabound-emittypedetaildataboundeventargs) event.

For example, to render grid inside the detail row, place an HTML div element as the [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#detailtemplate) and render the DIV element as grid component in the [detailDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#detaildatabound-emittypedetaildataboundeventargs) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/custom-cell-cs5" %}

## Expand by external button

By default, detail rows render in collapsed state. You can expand a detail row by invoking the [expand](https://ej2.syncfusion.com/angular/documentation/api/grid/detailRow/#expand) method using the external button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/custom-cell-cs6" %}

## Limitations for detail template

Detail template is not supported with the following features:

* Frozen rows and columns
* Immutable mode
* Infinite scrolling
* Virtual scrolling
* Pdf export
* Excel export
* Print
* Row template
* Row spanning
* Column spanning
* Lazy load grouping
* State persistence
* Hierarchy Grid