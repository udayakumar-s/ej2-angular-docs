---
layout: post
title: Data binding in Angular Treegrid component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Treegrid component

The TreeGrid uses `DataManager`, which supports both RESTful JSON data services binding and local JavaScript object array binding. The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) property can be assigned either with the instance of `DataManager` or JavaScript object array collection.
It supports two kinds of data binding method:
* Local data
* Remote data

To learn about how to bind local or remote data to Tree Grid, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=N-TS5zv_3cg" %}

## Binding with ajax

You can use TreeGrid [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) property to bind the data source to TreeGrid from external ajax request. In the below code we have fetched the data source from the server with the help of ajax request and provided that to [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) property by using `onSuccess` event of the ajax.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/data-binding-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs1" %}

> * If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.
> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-ui-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.