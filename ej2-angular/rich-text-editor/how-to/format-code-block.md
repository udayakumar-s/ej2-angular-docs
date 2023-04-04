---
layout: post
title: Format code block in Angular Rich text editor component | Syncfusion
description: Learn here all about Format code block in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Format code block 
documentation: ug
domainurl: ##DomainURL##
---

# Format code block in Angular Rich text editor component

You can configure code block formatting as a separate toolbar button by adding the **InsertCode** keyword within the [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#toolbarsettings) items property.

The InsertCode button has a toggle state to apply code block formatting to the editor and remove code block formatting from the editor.

The following sample demonstrates how to config the InsertCode button in toolbar and set the background color to “pre” tag for highlighting the code block.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/how-to/format-code-block-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/how-to/format-code-block-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/how-to/format-code-block-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/rich-text-editor/how-to/format-code-block-cs1" %}
