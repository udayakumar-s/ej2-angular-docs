---
layout: post
title: Annotation in Angular Image editor component | Syncfusion
description: Learn here all about Annotation in Syncfusion Angular Image editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Annotation 
documentation: ug
domainurl: ##DomainURL##
---

# Annotation in Angular Image editor component

The Image Editor has multiple annotations support including text, freehand drawings, and shapes such as rectangles, ellipses, and lines.

## Text

The Text annotation can be inserted and customized by changing its color, font family, font size, and font styles such as bold and italic. The text annotation can be made by either using a toolbar or [`drawText`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawtext) method.

In [`drawText`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawtext) method, the text annotation can be inserted by specifying the text, font family, font size, and font styles. The [`drawText`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawtext) method has the following parameters.

* x - Specifies x-coordinate of the text

* y - Specifies y-coordinate of the text

* text - Specifies the text to add to an image

* fontFamily - Specifies the font family of the text.

* fontSize - Specifies the font size of the text.

* bold - Specifies whether the text is bold or not.

* italic - Specifies whether the text is italic or not.

* color - Specifies font color of the text.

In the toolbar, the text annotation can be inserted by clicking the Annotation dropdown button and picking the Add Text option from that popup. Once the text is inserted, the contextual toolbar will be enabled for customizing its color, font family, font size, and font styles such as bold and italic.

In the following example, you can using the drawText method in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs1" %}

### Multiline Text

The [`drawText`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawtext) method in the Image Editor component is commonly used to insert text annotations into an image. If the provided text parameter contains a newline character (\n), the text will be automatically split into multiple lines, with each line appearing on a separate line in the annotation.

In the following example, you can using the drawText method in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs26/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs26/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs26/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs26" %}

### Delete Text

The [`deleteShape`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#deleteshape) method allows you to remove a text annotation from the image editor.To use this method, you need to pass the [`shapeId`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapeid) of the annotation as a parameter.

The [`shapeId`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapeid) is a unique identifier assigned to each text annotation within the image editor. It serves as a reference to a specific annotation, enabling targeted deletion of the desired text element. By specifying the shapeId associated with the text annotation you want to remove, you can effectively delete it from the image editor. 

In the following example, the [`deleteShape`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#deleteshape) method is used in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs25/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs25/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs25/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs25" %}

### Shape Changing

The [`ShapeChanging`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapechangeeventargs) event in the Image Editor component is triggered when a text annotation is being modified or changed through the toolbar interaction. This event provides an opportunity to make alterations to the text's color and font family by adjusting the relevant properties. 

By leveraging the [`ShapeChanging`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapechangeeventargs) event, you can enhance the customization options for text annotations and provide a more tailored and interactive experience within the Image Editor component. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs32/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs32/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs32/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs32" %}

## Freehand Draw

This annotation can be customized by changing the pen color and stroke width and it can be made by either using a toolbar or the [`freeHandDraw`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#freehanddraw) method.

The [`freeHandDraw`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#freehanddraw) method is used to enable or disable a freehand drawing option in an Image Editor.

In the toolbar, the freehand draw annotation can be inserted by clicking the Annotation dropdown button and picking the Pen option from that popup. Once the freehand draw is enabled, the contextual toolbar will be enabled.

In the following example, the [`freeHandDraw`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#freehanddraw) method is used to toggle the freehand drawings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs2" %}

### Delete Freehand drawing 

The [`deleteShape`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#deleteshape) method allows you to remove a freehand annotation from the image editor. To use this method, you need to pass the shapeId of the annotation as a parameter.

The [`shapeId`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapeid) is a unique identifier assigned to each freehand annotation within the image editor. It serves as a reference to a specific annotation, enabling targeted deletion of the desired annotation. By specifying the [`shapeId`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#shapeid) associated with the freehand annotation you want to remove, you can effectively delete it from the image editor. 

In the following example, the [`deleteShape`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#deleteshape) method is used in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs26/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs26/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs26/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs26" %}

## Shapes

The shape annotations include rectangles, ellipses, and lines. The border color, fill color, and border width of the shapes can be customized.

### Rectangle

The Rectangle shape can be inserted and customized by changing its border color, fill color, and border width. The Rectangle shape can be made by either using a toolbar or the [`drawRectangle`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawrectangle) method.

In the [`drawRectangle`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawrectangle) method, the rectangle shape can be inserted by specifying fillcolor, stroke color and stroke width. The [`drawRectangle`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawrectangle) method has the following parameters.

     *  x - Specifies the x-coordinate of the rectangle.

     *  y - Specifies the y-coordinate of the rectangle.

     *  width - Specifies the width of the rectangle.

     *  height - Specifies the height of the rectangle.

     *  strokeWidth - Specifies the stroke width of the rectangle.

     *  strokeColor - Specifies the stroke color of the rectangle.

     *  fillColor - the fill color of the rectangle.

In the toolbar, the Rectangle shape can be inserted by clicking the Annotation dropdown button and picking the Rectangle option from that popup. Once the shape is inserted, the contextual toolbar will be enabled for customizing its fill color, stroke color, and stroke width.

In the following example, the [`drawRectangle`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawrectangle) method is used to draw the rectangle.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs3" %}

### Ellipse

The Ellipse shape can be inserted and customized by changing its border color, fill color, and border width. The Ellipse shape can be made by either using a toolbar or the [`drawEllipse`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawellipse) method.

In the [`drawEllipse`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawellipse) method, the ellipse shape can be inserted by specifying fillcolor, stroke color and stroke width. The [`drawEllipse`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawellipse) method has the following parameters.

     * x - Specifies the x-coordinate of the ellipse.

     * y - Specifies the y-coordinate of the ellipse.

     * radiusX - the radius x point for the ellipse.

     * radiusY - the radius y point for the ellipse.

     * strokeWidth - the stroke width of the ellipse.

     * strokeColor - the stroke color of the ellipse.

     * fillColor - the fill color of the ellipse.

In the toolbar, the Ellipse shape can be inserted by clicking the Annotation dropdown button and picking the Ellipse option from that popup. Once the shape is inserted, the contextual toolbar will be enabled for customizing its fill color, stroke color, and stroke width.

In the following example, the [`drawEllipse`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawellipse) method is used to draw the ellipse.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs4" %}

### Line

The line shape can be inserted and customized by changing its border color, and border width. The Line shape can be made by either using a toolbar or the [`drawLine`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawline) method.

In the [`drawLine`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawline) method, the line shape can be inserted by specifying, stroke color and stroke width. The [`drawLine`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawline) method has the following parameters:

     *  startX – Specifies start point x-coordinate of line.

     *  startY – Specifies start point y-coordinate of line.

     *  endX - Specifies endpoint x-coordinates of line.

     *  endY - Specifies end point y-coordinates of the line.

     *  strokeWidth - Specifies the stroke width of the line.

     *  strokeColor - Specifies the stroke color of the line.

In the toolbar, the Line shape can be inserted by clicking the Annotation dropdown button and picking the Line option from that popup. Once the line shape is inserted, the contextual toolbar will be enabled for customizing its stroke color, and stroke width.

In the following example, the [`drawLine`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawline) method is used to draw the line.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs5" %}

### Arrow

The arrow shape can be inserted and customized by changing its border color, and border width. The Arrow shape can be made by either using a toolbar or the ['drawArrow'](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawaarow) method.

In the following example, the [`drawArrow`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawarrow) method has the following parameters.

     *  startX – Specifies start point x-coordinate of line.

     *  startY – Specifies start point y-coordinate of line.

     *  endX - Specifies endpoint x-coordinates of line.

     *  endY - Specifies end point y-coordinates of the line.

     *  strokeWidth - Specifies the stroke width of the line.

     *  strokeColor - Specifies the stroke color of the line.

In the toolbar,the arrow shape can be inserted by clicking the Annotation dropdown button and picking the Arrow option from that popup. Once that arrow shape is inserted, the contextual toolbar will be enabled for customizing its stroke color, and stroke width.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs21/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs21/app/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/image-editor/default-cs21" %}

### Path

The path shape can be inserted and customized by changing its border color, and border width. The Path shape can be made by either using a toolbar or the ['drawPath'](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawpath) method.

In the [`drawPath`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawpath) method, the path shape can be inserted by specifying, stroke color and stroke width. The ['drawPath'](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawpath) method has the following parameters.

     *  pointColl - specifies collection of start and end x, y-coordinates of path.

     *  strokeWidth - Specifies the stroke width of the line.

     *  strokeColor - Specifies the stroke color of the line.  

In the toolbar,the path can be inserted by clicking the Annotation dropdown button and picking the Path option from that popup. Once that path shape is inserted, the contextual toolbar will be enabled for customizing its stroke color, and stroke width.

In the following example, the [`drawPath`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#drawpath) method has the following parameters.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs22/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs22/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs22/app/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/image-editor/default-cs22" %}


