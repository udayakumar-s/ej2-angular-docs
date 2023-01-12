---
layout: post
title: Data binding in Angular Auto complete component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Auto complete component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Auto complete component

The AutoComplete loads the data either from local data sources or remote data services using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#datasource) property. It supports the data type of array or `DataManager`.

The AutoComplete also supports different kind of data services such as OData, OData V4,
Web API and data formats such as XML, JSON, JSONP with the help of DataManager Adaptors.

| Fields | Type | Description |
|------|------|-------------|
| value |  `number or string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| groupBy |  `string` | Specifies the category under which the list item has to be grouped. |
| iconCss |  `string` | Specifies the icon class of each list item. |

>While binding complex data to AutoComplete, fields should be mapped correctly. Otherwise, the selected item remains undefined.

## Bind to local data

Local data can be represented in two ways as described below.

### Array of string

The AutoComplete has support to load array of primitive data such as strings and numbers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/getting-started-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/autocomplete/getting-started-cs2" %}

### Array of object

The AutoComplete can generate its list items through an array of complex data. For this,
the appropriate columns should be mapped to the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#fields)property.

In the following example, `Game` column from complex data have been mapped to the `value` field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/getting-started-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/autocomplete/getting-started-cs3" %}

### Array of complex object

The AutoComplete can generate its list items through an array of complex data. For this,
the appropriate columns should be mapped to the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#fields)property.

In the following example, `Country.Name` column from complex data have been mapped to the `value` field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/getting-started-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/autocomplete/getting-started-cs4" %}

## Bind to remote data

The AutoComplete supports retrieval of data from remote data services with the help of
`DataManager`component. The [`Query`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#query)
property is used to fetch data from the database and bind it to the AutoComplete.

The following sample displays the first 6 contacts from the `Customers` table of the `Northwind` data service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/getting-started-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/getting-started-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/getting-started-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/autocomplete/getting-started-cs5" %}

## Data binding using Async pipe

An `Observable` is used extensively by Angular since it provide significant benefits over techniques for event handling, asynchronous programming, and handling multiple values.

AutoComplete data can be consumed from an `Observable` object by piping it through an `async` pipe. The `async` pipe is used to subscribe the observable object and resolve with the latest value emitted by it.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/async-pipe-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/async-pipe-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/async-pipe-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/autocomplete/async-pipe-cs1" %}

## See Also

* [How to load data using template](./templates#item-template)
* [How to group the data using header](./grouping/)
* [How to filter the bound data](./filtering/)
