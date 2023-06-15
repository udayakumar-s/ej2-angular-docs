---
layout: post
title: Tool bar in Angular Grid component | Syncfusion
description: Learn here all about Tool bar in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tool bar 
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar in Angular Grid component

The Grid provides ToolBar support to handle grid actions. The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) property accepts either the collection of built-in toolbar items and [`ItemModel`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel) objects for custom toolbar items or HTML element ID for toolbar template. To use Toolbar, you need to inject **ToolbarService** in the provider section of **AppModule**.

## Enable or disable toolbar items

You can enable/disable toolbar items by using the **enableItems** method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-enable-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/toolbar-enable-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-enable-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-enable-cs1" %}

## Add toolbar at the bottom of Grid

You can add the Grid toolbar component at the bottom of Grid using the ['created'](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/toolbar-enable-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/toolbar-enable-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/toolbar-enable-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/toolbar-enable-cs2" %}

## See Also

* [Toolbar Component](../../toolbar/getting-started)
* [How to add a router link in the toolbar in Angular Grid](https://www.syncfusion.com/forums/154693/how-to-add-a-router-link-in-the-toolbar-in-angular-grid)
* [How to show or hide the delete button in the toolbar in Angular Grid](https://www.syncfusion.com/forums/158052/how-to-show-or-hide-the-delete-button-in-the-toolbar-in-angular-grid)
* [How to display column as radio button in dialog editing in Angular Grid](https://www.syncfusion.com/forums/153052/how-to-display-column-as-radio-button-in-dialog-editing-in-angular-grid)