---
layout: post
title: Selection cropping in Angular Image editor component | Syncfusion
description: Learn here all about Selection cropping in Syncfusion Angular Image editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Selection cropping 
documentation: ug
domainurl: ##DomainURL##
---

# Selection cropping in Angular Image editor component

The Image Editor control has multiple selection options including custom, square, circle, and customized to various aspects ratios. The selection region can be dragged and resized for cropping an image. The selection can be made by either using a toolbar or the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) method.  

In the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) method, the selection type needs to be specified as a custom, square, circle, and aspect ratios such as 3:2, 4:3, 5:4, 7:5, 16:9.

In the toolbar, the selection can be made by clicking the crop dropdown button and picking the selection option such as custom, square, circle, and aspect ratios.

## Custom

The selection region can be customized by dragging and resizing an image.

In the toolbar, the custom selection can be done by clicking the crop dropdown button and picking the `Custom` option from that popup.

In the following example, the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) method is used in the button click to the custom selection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs10" %}

## Square

The selection region can be customized as a square. That square can be dragged and resized. In the toolbar, the square selection can be done by clicking the crop dropdown button and picking the `Square` option from that popup.

In the following example, the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) method is used in the button click to the square selection.  

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs11" %}

## Circle

The selection region can be customized as a circle. That circle can be moved and resized. In the toolbar, the circle selection can be done by clicking the crop dropdown button and picking the `Circle` option from that popup.

In the following example, the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) method is used in the button click to the circle selection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs12/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs12/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs12/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs12" %}

## Ratio

The selection region can be customized according to the predefined ratios including 4:3, 7:5, 16:9, and more. In the toolbar, the Ratio selection can be done by clicking the crop dropdown button and picking the 4:3, 7:5, or 16:9 option from that popup.

In the following example, the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) method is used in the button click to the ratio selection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs13/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs13/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs13/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs13" %}

## Cropping

The Image Editor control crops the image based on the selection. The cropping can be made by either using a toolbar or the crop method.

In the toolbar, cropping can be made by clicking the OK button which is enabled only after performing the selection.

In the following example, the [`select`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#select) and [`crop`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#crop) method is used in the button click event to perform selection and cropping.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs14/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs14/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs14/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs14" %}
