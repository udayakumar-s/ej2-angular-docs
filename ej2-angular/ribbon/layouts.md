---
layout: post
title: Layouts in Angular Ribbon component | Syncfusion
description:  Learn here all about Layouts in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---     

# Layouts in Ribbon component

The Ribbon offers to customize the layout by using the [activeLayout](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#activelayout) property. The Ribbon component supports the following layouts:

## Classic layout

In classic layout, the Ribbon component organize the items and groups in a traditional form by setting the [activeLayout](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#activelayout) property to [Classic](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonLayout/). By default, the Ribbon component renders in `Classic` layout.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Classic/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Classic/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Classic/app/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Classic/app/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/ribbon/Classic/app/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ribbon/Classic" %}

## Simplified

The simplified layout renders the ribbon tab contents in simplified or single row. In this type, you can only render items with medium and small size. When you resize the Ribbon component, the items within a group will shrink to their allowed lowest size and then it moves to the overflow popup.

When the [enableGroupOverflow](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroup/#enablegroupoverflow) property is set to true, the items will be moved to the overflow popup created for that particular group, else the items will be moved to the overall overflow popup.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Simplified/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Simplified/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Simplified/app/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Simplified/app/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/ribbon/Simplified/app/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ribbon/Simplified" %}

## Minimized state

You can hide the Ribbon contents and display only the tab headers by double-clicking on the tab header. In minimized state, the Ribbon component expands to its normal state when click on the tab header.

Also, you can render or programmatically change the Ribbon component to minimized state by setting the [isMinimized](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#isminimized) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Minimize/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Minimize/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Minimize/app/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Minimize/app/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/ribbon/Minimize/app/app.component.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ribbon/Minimize" %}