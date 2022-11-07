---
layout: post
title: Frozen in Angular Grid component | Syncfusion
description: Learn here all about Frozen in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Frozen 
documentation: ug
domainurl: ##DomainURL##
---

# Frozen in Angular Grid component

Frozen rows and columns provides an option to make rows and columns always visible in the top and left side of the grid while scrolling.

To use frozen rows and columns support, inject the **FreezeService** in the provider section of **AppModule**.

In this demo, the [`frozenColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozencolumns) is set as **2** and the [`frozenRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozenrows)
is set as **3**. Hence, the left two columns and top three rows are frozen.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozenrows-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/frozenrows-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozenrows-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/frozenrows-cs1" %}

> * Frozen rows and columns should not be set outside the grid view port.
> * Frozen Grid will support row and column virtualization feature, which helps to improve the Grid performance while loading a large dataset.

## Limitations of Frozen Grid

The following features are not supported in frozen rows and columns:

* Grouping
* Row Template
* Detail Template
* Hierarchy Grid

## Freeze Direction

You can freeze the Grid columns on the left or right side by using the [`column.freeze`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#freeze) property and the remaining columns will be movable. The grid will automatically move the columns to the left or right position based on the [`column.freeze`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#freeze) value.

Types of the [`column.freeze`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#freeze) directions:

* **`Left`**: Allows you to freeze the columns at the left.
* **`Right`**: Allows you to freeze the columns at the right.

In this demo, the **ShipCountry** column is frozen at the left and the **CustomerID** column is frozen at the right side of the content table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozenrows-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/frozenrows-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozenrows-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/frozenrows-cs2" %}

> * Freeze Direction is not compatible with the [`isFrozen`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isfrozen) and [`frozenColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozencolumns) properties.

## Limitations of Freeze Direction

This feature has the below limitations, along with the above mentioned Frozen Grid limitations.

* Column virtualization
* Infinite scroll cache mode
* Freeze direction in the stacked header is not compatible with column reordering.

## Add validation rule for frozen Grid

In a frozen column enabled Grid, Grid content will be separated into frozen and movable parts. The following code can be used to dynamically add validation to input fields that are placed in the movable part. In the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event args, you can find the movableform instance as an argument. Here, you can add validation rules dynamically.

```typescript
  actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.movableForm.ej2_instances[0].addRules('Freight', { max: 200 }); // Here, 'Freight' is the column name.
        }
    }

```

Validation rules for the 'EmployeeID' and 'Freight' columns can be added in the sample below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozenrows-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/frozenrows-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozenrows-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/frozenrows-cs3" %}

> This is applicable when a frozen column is enabled and the edit mode is set as "**Normal**" in the Grid.