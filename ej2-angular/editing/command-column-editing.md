---
layout: post
title: Command column editing in Angular Grid component | Syncfusion
description: Learn here all about Command column editing in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Command column editing 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Command column editing in Angular Grid component

The command column provides an option to add CRUD action buttons in a column. This can be defined by the
[`column.commands`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#commands) property.

To use CRUD, inject the **CommandColumnService** module into the **@NgModule.providers** section.

The available built-in command buttons are:

| Command Button | Actions |
|----------------|---------|
| Edit | Edit the current row.|
| Delete | Delete the current row.|
| Save | Update the edited row.|
| Cancel | Cancel the edited state. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/command-column-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/command-column-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/command-column-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/command-column-cs1" %}

## Custom command column

 The custom command buttons can be added in a column by using the [`column.commands`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#commands) property and
the action for the custom buttons can be defined using [`commandClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#commandClick) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/command-column-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/command-column-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/command-column-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/grid/command-column-cs2" %}