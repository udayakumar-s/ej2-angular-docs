---
layout: post
title: Headers in Angular Grid component | Syncfusion
description: Learn here all about Headers in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Headers 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Headers in Angular Grid component

## Header text

By default, column header title is displayed from column [`field`](../../api/grid/column/#field) value.
To override the default header title by defining [`headerText`](../../api/grid/column/#headertext) value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs20/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs20/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs20/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/grid-cs20/app/app.component.ts" % }

> If both the [`field`](../../api/grid/column/#field) and [`headerText`](../../api/grid/column/#headertext)
are not defined in the column, the column renders with “empty” header text.

## Header template

You can customize the header element by using the [`headerTemplate`](../../api/grid/column/#headertemplate) property. In this demo, the custom element is rendered for both CustomerID and OrderDate column headers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/header-template-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/header-template-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/header-template-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/header-template-cs1/app/app.component.ts" % }

## Change header text dynamically

You can change the column [`headerText`](../../api/grid/column/#headertext) dynamically through an external button.

Follow the given steps to change the header text dynamically:

**Step 1**:

Get the column object corresponding to the field name by using the [`getColumnByField`](../../api/grid/#getcolumnbyfield) method.
Then change the header Text value.

```typescript
let column = this.grid.getColumnByField('ShipCity'); // Get column object.
column.headerText = 'Changed Text';

```

**Step 2**:

To reflect the changes in the grid header, invoke the [`refreshHeader`](../../api/grid/#refreshheader) method.

```typescript
this.grid.refreshHeader();

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/change-headertext-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/change-headertext-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/change-headertext-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/change-headertext-cs1/app/app.component.ts" % }

## Change the orientation of header text

You can change the orientation of the header text by using the [`customAttributes`](../../api/grid/column/#customattributes) property.

To change the Orientation of Header Text, Ensure the following steps:

**Step 1**:

Create a css class with orientation style for grid header cell.

```css
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}

```

**Step 2**:

Add the custom css class to particular column by using [`customAttributes`](../../api/grid/column/#customattributes) property.

```typescript
    <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' [customAttributes]='customAttributes' width=80></e-column>

```

**Step 3**:

Resize the header cell height by using the following code.

```typescript
setHeaderHeight(args) {
    let textWidth: number = document.querySelector('.orientationcss > div').scrollWidth;//Obtain the width of the headerText content.
    let headerCell: NodeList = document.querySelectorAll('.e-headercell');
    for(let i: number = 0; i < headerCell.length; i++) {
        (<HTMLElement>headerCell.item(i)).style.height = textWidth + 'px'; //Assign the obtained textWidth as the height of the headerCell.
    }
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/header-orientation-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/header-orientation-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/header-orientation-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/header-orientation-cs1/app/app.component.ts" % }