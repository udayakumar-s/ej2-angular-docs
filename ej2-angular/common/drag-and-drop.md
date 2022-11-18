---
layout: post
title: Drag and drop in Angular Common control | Syncfusion
description: Learn here all about Drag and drop in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop

Drag and Drop is supported through two libraries of Syncfusion Angular UI Components. Those are [`Draggable`](https://ej2.syncfusion.com/documentation/api/base/draggable) and [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/droppable). Draggable makes DOM to be dragged using mouse or touch gestures and Droppable mark required DOM as droppable zone.

## Initializing Draggable

You can make any element draggable by passing the element to Draggable constructor. Refer the following code snippet to enable draggable for DOM element

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/draggable-default-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/draggable-default-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/draggable-default-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/common/draggable-default-cs1" %}

## Creating Droppable Zone

You can convert any DOM element as a droppable zone, which accepts the draggable elements. Refer the following code snippet to enable droppable zone.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/droppable-default-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/droppable-default-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/droppable-default-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/common/droppable-default-cs1" %}

## Defining Drop Action

To define drop action set [`drop`](https://ej2.syncfusion.com/documentation/api/base/droppable#drop) callback function during droppable object creation. You can get details of dropped element through dropped element property in event argument.
Refer the following  code snippet to use basic drag and drop action

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/drag-drop-action-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/drag-drop-action-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/drag-drop-action-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/common/drag-drop-action-cs1" %}