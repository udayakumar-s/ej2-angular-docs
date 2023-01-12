---
layout: post
title: Third party integration in Angular Rich text editor component | Syncfusion
description: Learn here all about Third party integration in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Third party integration 
documentation: ug
domainurl: ##DomainURL##
---

# Third party integration in Angular Rich text editor component

The Rich Text Editor can be integrated with third-party to suite the application scenario.

To get start quickly with Third-Party Integration for Angular Rich Text Editor component, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=F4UATDBVxXM" %}

## CodeMirror Integration

RichTextEditor comes with a basic HTML source editor through the view-source property. CodeMirror plugin can be used to highlight the syntax of HTML. CodeMirror plugin for Rich Text Editor makes editing of HTML source code with a pleasant experience.

Import necessary CSS and JS files of CodeMirror to the HTML page.

Required JS files of code mirror.

```typescript
 <script src="scripts/CodeMirror/codemirror.js" type="text/javascript"></script>
 <script src="scripts/CodeMirror/javascript.js" type="text/javascript"></script>
 <script src="scripts/CodeMirror/css.js" type="text/javascript"></script>
 <script src="scripts/CodeMirror/htmlmixed.js" type="text/javascript"></script>

```

Required CSS file of code mirror

```typescript
 <link href="scripts/CodeMirror/codemirror.min.css" rel="stylesheet" />
```

Add a custom icon for HTML source editor in the toolbar of Rich Text Editor using the template option of ToolbarSettings, define the code mirror plugins, and then pass the Rich Text Editor content as argument in the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#actioncomplete) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs29/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs29/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs29/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs29" %}

## Integrate `embedly`

This can be achieved by binding the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#actioncomplete) event to the toolbar items in the [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#toolbarsettings) property. In the event handler, create an element and add the appropriate class. The below script is have to add in the sample to embed the content,

Include `embedly` javascript.

```typescript

<script src="https://cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

```

The above script is added to the page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/embedly-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/how-to/embedly-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/embedly-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/rich-text-editor/how-to/embedly-cs1" %}

## `At.js` Integration

RichTextEditor can easily be integrated with [`At.js`](https://github.com/ichord/At.js) library. To display the autocomplete list, type ‘@’.

Include `At.JS` style.

```typescript

 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/at.js/1.4.0/css/jquery.atwho.min.css">

```

Include At.JS javascript.

```typescript

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/at.js/1.4.0/js/jquery.atwho.min.js"></script>

```

Define the `At.js` configuration

> In below configuration, email id of employees list - email id of employees from the data source.

```typescript

var config = {
    at: "@",
    data: [email id of employees list],
    displayTpl: '<li>${name} <small>${email}</small></li>',
    limit: 200
  }

```

Populate the employee’s email id from local or remote data and set the result to the data of `At.js` configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/atjs-integration-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/how-to/atjs-integration-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/atjs-integration-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/rich-text-editor/how-to/atjs-integration-cs1" %}
