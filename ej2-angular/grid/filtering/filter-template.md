---
layout: post
title: Filter template in Angular Grid component | Syncfusion
description: Learn here all about Filter template in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter template 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Filter template in Angular Grid component

Filter template provides an option to use the custom filter UI for a particular column by using the [columns.filterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate) can be used by the filter bar, menu, and advanced filter from an excel filter.

> The [columns.filterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate) property value should be a Angular functional component.

## Template context

When using the filter template, you can access the column information inside the NgTemplate and bind the attributes, values, or elements based on this column information.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|--------|
| <kbd>column</kbd> |An object property that defines whether the current column is enabled or not. |

In the following code example, the filter in the **Name** textbox is disabled by using the [columns.allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) property.

```html
// The disabled attributes will be added based on the column property.
<DropDownListComponent id='dropdown' enabled={data.column.allowFiltering} popupHeight="250px" fields={this.fields} dataSource={data} />

```
