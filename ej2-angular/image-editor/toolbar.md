---
layout: post
title: Toolbar in Angular Image editor component | Syncfusion
description: Learn here all about Toolbar in Syncfusion Angular Image editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in the Angular Image Editor component

The toolbars in the Image Editor are a key component for interacting with and editing images. They provide a range of tools and options that can be customized to suit the needs and preferences. Add or remove items from the toolbar to create a personalized set of tools, or they can even create their own custom toolbar from scratch. This flexibility and customization allow them to create a unique image editing experience that is tailored to their specific needs and workflow. 

In the Image Editor, the toolbar property provides the ability to customize the toolbar by adding or removing items, as well as defining a completely custom toolbar. This feature is valuable for creating a personalized image editing experience that aligns with specific requirements and workflows. 

## Built-in toolbar items

Specifies the toolbar items to perform UI interactions. Refer to the built-in toolbar items for the default value.

* Crop
* Transform
* Annotate
* ZoomIn
* ZoomOut
* Open
* Reset
* Save
* Pan

## Add a custom toolbar items

The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbar) property in the Image Editor allows to add or remove toolbar items to include only the tools they frequently use, streamlining the editing process and reducing clutter. 

Here is an example of adding custom toolbar items to rotate and flip transformation using [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbar) property. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs15/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs15/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs15/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs15" %}

## Toolbar template

Specifies template to the Image Editor Toolbar. If you want to customize the entire toolbar in your own way use this property. The property depends on the ‘toolbar’.

The toolbar of the Image Editor can be replaced with the user specific UI using the [`toolbarTemplate`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbartemplate) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs16/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs16/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs16/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs16" %}

## Customize Contextual Toolbar

The [`toolbarUpdating`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbarupdating) event is triggered when inserting or selecting annotations, which opens the contextual toolbar in the Image Editor. Within this event, the [`toolbarItems`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/toolbarEventArgs/#toolbaritems) property in the [`ToolbarEventArgs`](https://helpej2.syncfusion.com/angular/documentation/api/image-editor/toolbarEventArgs/) is utilized to add or remove contextual toolbar items.

In the following example, the contextual toolbar for rectangle will be rendered with only stroke color by excluding fill color and stroke width using toolbarUpdating event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs17/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs17/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs17/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs17" %}

## Show or hide a toolbar 

The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbar) property controls the visibility of the toolbar in the Image Editor. When the Toolbar property is set to an empty list, the toolbar is hidden. Conversely, if the Toolbar property contains a list of items, the toolbar is shown, displaying the specified items. This feature provides flexibility for users to personalize their image editing experience. 

Here is an example of hiding the toolbar of the image editor using Toolbar property. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs30/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs30/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs30/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs30" %}

## Show or hide a toolbar item

The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbar) property is utilized to control the visibility of toolbar items in the Image Editor. By default, the Toolbar property includes the default toolbar items. If you wish to hide the default toolbar items and specify your own set of required items, you need to explicitly define those items in the Toolbar property. This allows you to customize the toolbar by displaying only the specific items you require, tailoring the editing experience to your preferences. 

Here is an example of hiding the cropping and selection toolbar items using [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbar) property. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs31/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs31/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs31/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs31" %}

## Toolbar item clicked event 

The [`toolbarItemClicked`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbaritemclicked) event is triggered when a toolbar item is clicked in the Image Editor. This event is particularly useful when you have added custom options to both the main toolbar and contextual toolbar, as it allows you to capture the user's interaction with those custom options. By subscribing to the [`toolbarItemClicked`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbaritemclicked) event, you can execute specific actions or handle logic based on the toolbar item that was clicked. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs34/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs34/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs34/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs34" %}

## Toolbar created event 

The [`toolbarCreated`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbarcreate) event is triggered after the toolbar is created in the Image Editor. This event can be useful when you need to perform any actions or make modifications to the toolbar once it is fully initialized and ready for interaction. By subscribing to the [`ToolbarCreated`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbarcreate) event, you can access the toolbar object and perform tasks such as adding event handlers, customizing the appearance, or configuring additional functionality. 

## Add an additional contextual Toolbar item to text shape 

The contextual toolbar that appears when inserting annotations in the Image Editor is customizable using the [`toolbarUpdating`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#toolbarupdating) event. This event is triggered when the contextual toolbar is rendered, allowing you to modify its contents. To add additional toolbar items to the contextual toolbar, you can access the [`toolbarItems`] property of the object within the event handler. By adding or removing items from the [`toolbarItems`] property based on the Item property, you can customize the options available in the contextual toolbar according to your needs. This gives you the ability to extend the functionality of the contextual toolbar and provide additional tools and options for working with inserted annotations. 

Here is an example of adding the custom toolbar item to the contextual toolbar. 

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
  
{% previewsample "page.domainurl/samples/image-editor/default-cs12" %}

