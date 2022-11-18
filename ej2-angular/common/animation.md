---
layout: post
title: Animation in Angular Common control | Syncfusion
description: Learn here all about Animation in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Animation

The **Animation** library is used to perform animation effects on HTML elements by running sequence of frames.

## Animate HTML Element

The [`animate`](https://ej2.syncfusion.com/documentation/api/base/animation#animate) method of `Animation` library can be used to animate the HTML elements. This method can also take additional [`AnimationModel`](https://ej2.syncfusion.com/documentation/api/base/animationModel). Refer the following code snippet to animate a multiple DOM element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/animation-multiple-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/animation-multiple-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/animation-multiple-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/common/animation-multiple-cs1" %}