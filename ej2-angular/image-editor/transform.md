---
layout: post
title: Transform in Angular Image editor component | Syncfusion
description: Learn here all about Transform in Syncfusion Angular Image editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Transform 
documentation: ug
domainurl: ##DomainURL##
---

# Transform in Angular Image editor component

The Image Editor has the rotate, flip, and zoom transformation options and it transforms the image editor with annotations.

## Rotate

Rotate images with annotation to 90, 180, 270, and 360 degrees clockwise and anti-clockwise. Rotating the image can be done by either using a toolbar or [`rotate`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#rotate) method.

In the [`rotate`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#rotate) method, the image can be rotated left or right. The rotate method has the following parameters. A Positive integer value for clockwise and a negative integer value for anti-clockwise rotation.

     * degree - Specifies a degree to rotate an image.

In the toolbar, rotate the image by clicking the Transform dropdown button and picking the RotateLeft/ RotateRight option from that popup.

In the following example, the [`rotate`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#rotate) method is used to rotate the image.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs18/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs18/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs18/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs18" %}

## Flip

Flip images with annotations horizontally/vertically. Flipping the image can be done by either using a toolbar or the flip method.

In the flip method, the image can be flipped horizontally or vertically. The [`flip`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#flip) method has the following parameters:

    * direction - Specifies the direction to flip the image.

In the toolbar, flip the image by clicking the Transform dropdown button and picking the Horizontal Flip/Vertical Flip  option from that popup.

In the following example, the [`flip`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#flip) method is used to flip the image.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs19/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs19/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs19/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs19" %}

## Zoom

Magnify the image using zooming, and panning to see the hidden zones of an image. To Zoom the image can be done by either using a toolbar or the [`zoom`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#zoom) method.

In [`zoom`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#zoom)  method, the image can be zoom in and zoom out. The zoom method has the following parameters.

    * value - Specifies a value to be zoomed on the image.

### Zoom in

To perform the Zoom in the image. In toolbar, you can clicking the Zoom In button in toolbar.

### Zoom out

To perform the Zoom out the image, In toolbar, you can clicking the Zoom out button in toolbar.

### Panning

To Perform the panning. Enabled or disables the panning option. In toolbar, you can clicking the Zoom in button in toolbar, then pan button enabled

In the following example, you can using the [`zoom`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#zoom) method and [`pan`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#pan) method in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs20/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs20/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs20/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs20" %}

## Zooming event 

The [`Zooming`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#zoom) event is triggered when performing zooming the image. This event can be used to perform certain actions, such as updating the position of the image. This event is passed an object that contains information about the [`zooming`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#zoom) event, such as the amount of zooming performed. 

The parameter available in the Zooming event is, 

* ZoomEventArgs.ZoomPoint - The x and y coordinates as [`ImageEditorPoint`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#imageeditorpoint) for the zoom point. 

* ZoomEventArgs.PreviousZoomFactor - The previous zoom factor applied in the image editor. 

* ZoomEventArgs.CurrentZoomFactor - The current zoom factor to be applied in the image editor. 

* ZoomEventArgs.Cancel – Specify a boolean value to cancel the zooming action. 

* ZoomEventArgs.ZoomTrigger - The type of zooming performed in the image editor. 

## Rotating event 

The [`Rotating`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#rotating) event is triggered when performing rotating the image. This event is passed an object that contains information about the rotating event, such as the amount of rotation performed. 

The parameter available in the [`Rotating`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#rotating) event is, 

* RotateEventArgs.PreviousDegree: The degree of rotation before the recent rotation action was applied in the Image Editor. 

* RotateEventArgs.CurrentDegree: The current degree of rotation after the rotation action has been performed in the Image Editor. 

* RotateEventArgs.Cancel – Specifies a boolean value to cancel the rotating action. 

## Flipping event 

The [`Flipping`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#flipping) event is triggered when performing flipping the image. This event is passed an object that contains information about the flipping event, such as the amount of flip performed. 

The parameter available in the [`Flipping`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#flipping) event is, 

* FlipEventArgs.Direction - The flip direction as ImageEditorDirection to be applied in the image editor. 

* FlipEventArgs.Cancel - Specifies a boolean value to cancel the flip action. 