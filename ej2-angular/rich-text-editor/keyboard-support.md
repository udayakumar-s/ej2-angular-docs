---
layout: post
title: Keyboard support in Angular Rich text editor component | Syncfusion
description: Learn here all about Keyboard support in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Keyboard support 
documentation: ug
domainurl: ##DomainURL##
---

# Keyboard support in Angular Rich text editor component

The Rich Text Editor has full keyboard accessibility that includes shortcuts to open and other actions with toolbar items, drop-down lists and dialogs.

## HTML formation shortcut key

You can use the following key shortcuts when the Rich Text Editor renders with HTML edit mode.

| Actions | Keyboard shortcuts |
|----------------|---------|
| Toolbar focus | <kbd>alt</kbd> + <kbd>f10</kbd> |
| Insert link | <kbd>ctrl</kbd> + <kbd>k</kbd> |
| Insert image | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>i</kbd> |
| Insert table | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>e</kbd> |
| Undo | <kbd>ctrl</kbd> + <kbd>z</kbd> |
| Redo | <kbd>ctrl</kbd> + <kbd>y</kbd> |
| Copy | <kbd>ctrl</kbd> + <kbd>c</kbd> |
| Cut | <kbd>ctrl</kbd> + <kbd>x</kbd> |
| Paste| <kbd>ctrl</kbd> + <kbd>v</kbd> |
| Bold| <kbd>ctrl</kbd> + <kbd>b</kbd> |
| Italic| <kbd>ctrl</kbd> + <kbd>i</kbd> |
| Underline| <kbd>ctrl</kbd> + <kbd>u</kbd> |
| Strikethrough| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>s</kbd> |
| Uppercase| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>u</kbd> |
| Lowercase| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>l</kbd> |
| Superscript| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>=</kbd> |
| Subscript| <kbd>ctrl</kbd> + <kbd>=</kbd> |
| Indents| <kbd>ctrl</kbd> + <kbd>]</kbd> |
| Outdents| <kbd>ctrl</kbd> + <kbd>[</kbd> |
| HTML source | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>h</kbd> |
| Fullscreen| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>f</kbd> |
| Exit Fullscreen| <kbd>Esc</kbd> |
| Justify center| <kbd>ctrl</kbd> + <kbd>e</kbd> |
| Justify full | <kbd>ctrl</kbd> + <kbd>j</kbd> |
| Justify left | <kbd>ctrl</kbd> + <kbd>l</kbd> |
| Justify right | <kbd>ctrl</kbd> + <kbd>r</kbd> |
| Clear format | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>r</kbd> |
| Ordered list | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>o</kbd> |
| Unordered list | <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>o</kbd> |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs13/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs13/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs13/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs13" %}

## Markdown formation shortcut key

You can use the following key shortcuts when the Rich Text Editor renders with Markdown edit mode

| Actions | Keyboard shortcuts |
|----------------|---------|
| Toolbar focus| <kbd>alt</kbd> + <kbd>f10</kbd> |
| Insert link| <kbd>ctrl</kbd> + <kbd>k</kbd> |
| Insert image| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>i</kbd> |
| Insert table| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>e</kbd> |
| Undo| <kbd>ctrl</kbd> + <kbd>z</kbd> |
| Redo| <kbd>ctrl</kbd> + <kbd>y</kbd> |
| Copy| <kbd>ctrl</kbd> + <kbd>c</kbd> |
| Cut| <kbd>ctrl</kbd> + <kbd>x</kbd> |
| Paste| <kbd>ctrl</kbd> + <kbd>v</kbd> |
| Bold| <kbd>ctrl</kbd> + <kbd>b</kbd> |
| Italic| <kbd>ctrl</kbd> + <kbd>i</kbd> |
| Strikethrough| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>s</kbd> |
| Uppercase| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>u</kbd> |
| Lowercase| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>l</kbd> |
| Superscript| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>=</kbd> |
| Subscript| <kbd>ctrl</kbd> + <kbd>=</kbd> |
| Fullscreen| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>f</kbd> |
| Ordered list| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>o</kbd> |
| Unordered list| <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>o</kbd> |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs14/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs14/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs14/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs14" %}

## Custom key config

You can able to customize the key config for the keyboard interaction of Rich Text Editor, using [`keyConfig`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#keyconfig) property.

In the below sample, you have customize the bold, italic, underline toolbar action with ctrl+alt+b, ctrl+alt+i and ctrl+alt+u respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs15/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs15/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs15/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs15" %}
