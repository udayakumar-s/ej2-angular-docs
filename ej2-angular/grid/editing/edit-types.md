---
layout: post
title: Edit types in Angular Grid component | Syncfusion
description: Learn here all about Edit types in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
control: Edit types 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Edit types in Angular Grid component

## Customize editors using params

The [`columns.editType`](../../api/grid/column/#edittype) is used to define the editor component for any particular column.
You can set the [`columns.editType`](../../api/grid/column/#edittype) based on data type of the column.

* [`NumericTextBox`](../../numerictextbox) component for integers, double, and decimal data types.

* [`TextBox`](../../textbox) component for string data type.

* [`DropDownList`](../../drop-down-list) component to show all unique values related to that field.

* [`CheckBox`](../../check-box) component for boolean data type.

* [`DatePicker`](../../datepicker) component for date data type.

* [`DateTimePicker`](../../datetimepicker) component for date time data type.

Also, you can customize the behavior of the editor component through the [`columns.edit.params`](../../api/grid/column/#edit).

The following table describes editor component and their example edit params of the column.

Component |Example
-----|-----
[`NumericTextBox`](../../numerictextbox) | params: { decimals: 2, value: 5 }
[`DropDownList`](../../drop-down-list) | params: { value: 'Germany' }
[`Checkbox`](../../check-box) | params: { checked: true}
[`DatePicker`](../../datepicker) | params: { format:'dd.MM.yyyy' }
[`DateTimePicker`](../../datetimepicker) | params: { value: new Date() }

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/edit-cs10/app/app.component.ts" % }

> If edit type is not defined in the column, then it will be considered as the **stringedit** type (Textbox component) .

### Restrict to type decimal points in a NumericTextBox while editing the numeric column

By default, the number of decimal places will be restricted to two in the NumericTextBox while editing the numeric column. We can restrict to type the decimal points in a NumericTextBox by using the [`validateDecimalOnType`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/#validatedecimalontype) and [`decimals`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/#decimals) properties of NumericTextBox.

In the below demo, while editing the row we have restricted to type the decimal point value in the NumericTextBox of **Freight** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/prevent-decimalpoint-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/prevent-decimalpoint-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/prevent-decimalpoint-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/prevent-decimalpoint-cs1/app/app.component.ts" % }

### Provide custom data source and enabling filtering to DropDownList

You can provide data source to the DropDownList by using the [`columns.edit.params`](../../api/grid/column/#edit) property.

While setting new data source using edit params, you must specify a new [`query`](../../api/drop-down-list#query) property too for the DropDownList as follows,

```typescript
{
    this.countryParams = {
        params:   {
            allowFiltering: true,
            dataSource: this.country,
            fields: {text:'countryName',value:'countryName'},
            query: new Query(),
            actionComplete: () => false
            }
        }
}

```

You can also enable filtering for the DropDownList by passing the [`allowFiltering`](../../api/drop-down-list#allowfiltering) as **true** to the edit params.

In the below demo, DropDownList is rendered with custom Datasource for the **ShipCountry** column and enabled filtering to search DropDownList items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs11/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs11/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs11/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/edit-cs11/app/app.component.ts" % }

## Custom editors using template

The cell edit template is used to add a custom component for a particular column by invoking the following functions:

* **create** - It is used to create the element at the time of initialization.

* **write** - It is used to create custom component or assign default value at the time of editing.

* **read** - It is used to read the value from the component at the time of save.

* **destroy** - It is used to destroy the component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs12/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs12/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs12/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/edit-cs12/app/app.component.ts" % }

### Using template

The cell editor for a particular column can be specified using the content of the NgTemplate. The [`#editTemplate`](../../api/grid/column/#edittemplate-string) template variable identifies the NgTemplate content as the corresponding column editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs13/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs13/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs13/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{ % previewsample "https://ej2.syncfusion.com/code-snippet/grid/edit-cs13/app/app.component.ts" % }