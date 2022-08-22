---
layout: post
title: Local data in Angular Grid component | Syncfusion
description: Learn here all about Local data in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Local data 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Local data in Angular Grid component

To bind local data to the grid, you can assign a JavaScript object array to the
[`dataSource`](../../api/grid/#datasource) property. The local data source can also be provided as an instance of the
**DataManager**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/databinding-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/databinding-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/databinding-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/databinding-cs1/app/app.component.ts" % }

> By default, **DataManager** uses **JsonAdaptor** for local data-binding.

## Refresh the data source

You can add/delete the datasource records through an external button. To reflect the datasource changes in grid,
you need to invoke the [`refresh`](../../api/grid/#refresh) method.

Please follow the below steps to refresh the grid after datasource change.

**Step 1**:

Add/delete the datasource record by using the following code.

```typescript
    this.grid.dataSource.unshift(data); // Add a new record.

    this.grid.dataSource.splice(selectedRow, 1); // Delete a record.

```

**Step 2**:

Refresh the grid after the datasource change by using the [`refresh`](../../api/grid/#refresh) method.

```typescript
    this.grid.refresh(); // Refresh the Grid.

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/change-headertext-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/change-headertext-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/change-headertext-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
{% endif %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/change-headertext-cs2/app/app.component.ts" % }