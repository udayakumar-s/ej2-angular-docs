---
layout: post
title: Frozen in Angular Treegrid component | Syncfusion
description: Learn here all about Frozen in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Frozen 
documentation: ug
domainurl: ##DomainURL##
---

# Frozen in Angular Treegrid component

## Frozen rows and columns

Frozen rows and columns provides an option to make rows and columns always visible in the top and left side of the tree grid while scrolling.

In this demo, the [`frozenColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#frozencolumns) is set as '2' and the [`frozenRows`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#frozenrows) is set as '3'. Hence, the left two columns and top three rows are frozen.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/frozencolumns-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/frozencolumns-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/frozencolumns-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/frozencolumns-cs1" %}

### Freeze particular columns

You can use [`isFrozen`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isfrozen) property to freeze selected columns in tree grid.

In this demo, the columns with field name `taskName` and `startDate` is frozen using
the `isFrozen` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/isfrozen-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/isfrozen-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/isfrozen-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/isfrozen-cs1" %}

### Freeze direction

You can freeze the tree grid columns on the left or right side by using the [`column.freeze`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#freeze) property and the remaining columns will be movable. The grid will automatically move the columns to the left or right position based on the [`column.freeze`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#freeze) value.

Types of the [`column.freeze`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#freeze) directions:

* **`Left`**: Allows you to freeze the columns at the left.
* **`Right`**: Allows you to freeze the columns at the right.

In this demo, the **Task Name** column is frozen at the left and the **Priority** column is frozen at the right side of the content table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/isfrozen-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/isfrozen-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/isfrozen-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/isfrozen-cs2" %}

> * Freeze Direction is not compatible with the [`isFrozen`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isfrozen) and [`frozenColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#frozencolumns) properties.

### Limitations of frozen tree grid

The following features are not supported in frozen rows and columns:

* Row Template
* Detail Template
* Cell Editing

### Limitations of freeze direction

This feature has the following limitations, along with the above mentioned frozen tree grid limitations.

* Infinite scroll cache mode.
* Freeze direction in the stacked header is not compatible with column reordering.

## Add validation rule for frozen tree grid

In a frozen column-enabled tree grid, the content will be separated into frozen and movable parts. The following code is used to dynamically add validation to input fields in the movable part. In the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete) event args, find the movableform instance as an argument. Here, add the validation rules dynamically.

```typescript
  actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.movableForm.ej2_instances[0].addRules('duration', { max: 200 }); // Here, 'duration' is the column name.
        }
    }

```

Validation rules for the 'duration' and 'taskID' columns can be added in the following sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/isfrozen-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/isfrozen-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/isfrozen-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/isfrozen-cs3" %}

> This is applicable when a frozen column is enabled and the edit mode is set as "**Row**" in the tree grid.
> You can refer to Syncfusion [`Angular Tree Grid`](https://www.syncfusion.com/angular-ui-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. Also, explore Syncfusion [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to know how to present and manipulate data.