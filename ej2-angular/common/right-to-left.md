---
layout: post
title: Right to left in Angular Common control | Syncfusion
description: Learn here all about Right to left in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Right-To-Left

Right To Left (RTL) can be enabled for Syncfusion Angular UI components by calling `enableRtl` with `true`.This will render all the Syncfusion Angular UI components in right to left direction. We can enable the feature by setting the property `enableRtl` value as true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/right-to-left-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/right-to-left-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/right-to-left-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/common/right-to-left-cs1" %}

## Enable RTL to Individual Component

To control a component’s direction individually you can directly set the component’s `enableRtl` property as true. For illustration, we have enabled RTL for ListView component in following code snippet.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/individual-rtl-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/individual-rtl-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/individual-rtl-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/common/individual-rtl-cs1" %}