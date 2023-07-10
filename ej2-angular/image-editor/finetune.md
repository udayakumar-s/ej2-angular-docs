---
layout: post
title: Finetune in ##Platform_Name## Image editor control | Syncfusion
description: Learn here all about Finetune in Syncfusion ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javaScript
control: Finetune 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Finetune in ##Platform_Name## Image editor control

Fine-tuning involves making precise adjustments to the settings of an image filter in order to achieve a specific desired effect. It provides control over the intensity and specific aspects of the filter's impact on the image. For example, fine-tuning allows you to modify parameters like brightness, saturation, or other relevant properties to fine-tune the level or quality of the filter's effect. This level of control enables you to achieve the exact look or outcome you want for your image. 

The [`FinetuneImage`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#finetuneimage) method which takes two parameters: the filter, and the value that adjusts the color of the image. The filter parameter specifies the type of filter as [`ImageFinetuneOption`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#imagefinetuneoption), such as brightness, saturation, or blur and the value parameter specifies the amount or intensity of the filter to be applied to an image. 

## Adjust the brightness, contrast, or sharpness 

The [`FinetuneImage`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#finetuneimage) method is used to perform brightness, contrast, or sharpness finetuning by specifying this type as a first parameter and specifying the finetuning value as the second parameter of the method. 

* finetuneOption - Specifies the finetune options to be performed in the image.

* value - Specifies the value for finetuning the image.

In the following example, you can using the finetuneImage method in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs28/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs28/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-c28/app/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs28" %}

## Adjust the hue, exposure, blur, or opacity 

The [`FinetuneImage`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#finetuneimage) method is used to perform hue, exposure, or blur finetuning by specifying this type as a first parameter and specifying the finetuning value as the second parameter of the method. 

* finetuneOption - Specifies the finetune options to be performed in the image.

* value - Specifies the value for finetuning the image.

In the following example, you can using the finetuneImage method in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs29/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs29/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-c29/app/main.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs29" %}

## Finetune value changing event 

The [`FinetuneValueChanging`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#finetunevaluechanging) event is triggered when performing finetuning on the image. This event is passed an object that contains information about the finetuning event, such as the type of fine-tuning and the value of fine-tuning performed. 

The parameter available in the [`FinetuneValueChanging`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#finetuneimage) event is, 

* FinetuneEventArgs.finetune - The type of finetuning as [`ImageFinetuneOption`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#imagefinetuneoption) to be applied in the image editor. 

* FinetuneEventArgs.value - The finetuning value to be applied in the image editor. 

* FinetuneEventArgs.cancel – Specifies a boolean value to cancel the finetuning action. 
