---
layout: post
title: Set the nested accordion in Angular Accordion component | Syncfusion
description: Learn here all about Set the nested accordion in Syncfusion ##Platform_Name## Accordion component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Set the nested accordion 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Set the nested accordion in Angular Accordion component

You can render Accordion components inside the parent Accordion content using Angular **ng-template**. Through this, we can add content as Accordion components directly with all their functionalities to our Accordion. We need to use `ng-template` inside the each `e-accordionitem` tag with `#content` attribute, which is mandatory to render content. And now use `ng-template` tag with select attribute of id or class name for mapping required content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/accordion/accordion-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/accordion/accordion-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/accordion/accordion-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/accordion/accordion-cs6" %}