---
layout: post
title: Filter in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Open save in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Filter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filter in ##Platform_Name## Image editor control

Filters are pre-defined effects that can be applied to an image to alter its appearance or mood. Image filters can be used to add visual interest or to enhance certain features of the image. Some common types of image filters include cold, warm, chrome, sepia, and invert. This can be done by either using the toolbar or the [`ApplyImageFilter`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#applyimagefilter) method which takes a single parameter: the filter applied to an image. 

## Apply filter effect 

The [`ApplyImageFilter`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#applyimagefilter) method is used to perform filtering by specifying the type of filter as [`ImageFilterOption`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#imagefilteroption) and send it a first parameter of the method. 

* filterOption - Specifies the filter options to the image.

In the toolbar, the default filter can be applied by clicking the Filter option in the toolbar and picking the Default filter.

In the following example, you can using the [`ApplyImageFilter`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#applyimagefilter) method in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs23/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs23/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-c23/app/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/filter-cs23" %}

## Image filtering event 

The [`ImageFiltering`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#imagefiltering) event is triggered when applying filtering on the image. This event is passed an object that contains information about the filtering event, such as the type of filtering. 

The parameter available in the [`ImageFilterEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#imagefiltering) event is, 

ImageFilterEventArgs.Filter - The type of filtering as ImageFilterOption to be applied in the image editor. 

ImageFilterEventArgs.Cancel – Specifies to cancel the filtering action. 