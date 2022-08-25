---
title: "Columns"
component: "Grid"
description: "Documentation on column reordering, resizing, header templates (custom header content), and column templates (custom cell content) in the Essential JS 2 DataGrid control."
---

# Columns

The column definitions are used as the **dataSource** schema in the Grid.
This plays a vital role in rendering column values in the required format.
The grid operations such as sorting, filtering and grouping etc. are performed based on column definitions.
The [`field`](../../api/grid/column/#field) property of the [`columns`](../../api/grid/column)
is necessary to map the data source values in Grid columns.

> 1. If the column with [`field`](../../api/grid/column/#field) is not in the dataSource, then the column values will be displayed as empty.
> 2. If the [`field`](../../api/grid/column/#field) name contains “dot” operator then it is considered as complex binding.

## Column types

Column type can be specified using the [`columns.type`](../../api/grid/column/#type) property. It specifies the type of data the column binds.

If the [`format`](../../api/grid/column/#format)  is defined for a column,
the column uses [`type`](../../api/grid/column/#type) to select the appropriate format option ([number](../../common/internationalization/#number-formatting)
 or [date](../../common/internationalization/#manipulating-datetime)).

Grid column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the [`type`](../../api/grid/column/#type) is not defined, then it will be determined from the first record of the [`dataSource`](../../api/grid/#datasource).
> Incase if the first record of the [`dataSource`](../../api/grid/#datasource) is null/blank value for a column then it is necessary to define the [`type`](../../api/grid/column/#type) for that column.

## ValueAccessor

The [`valueAccessor`](../../api/grid/column/#valueaccessor) is used to access/manipulate the value of display data.
You can achieve custom value formatting by using [`valueAccessor`](../../api/grid/column/#valueaccessor).

{% tab template="grid/grid", sourceFiles="app/**/*.ts"%}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right'
                         [valueAccessor]='currencyFormatter' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 [valueAccessor]='valueAccess' ></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public currencyFormatter = (field: string, data1: object, column: object) => {
        const Freight = 'Freight';
        return '€' + data1[Freight];
    }

    public valueAccess = (field: string, data1: object, column: object) => {
        const ShipRegion = 'ShipRegion';
        return data1[field] + '-' + data1[ShipRegion];
    }

    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

### Display array type columns

You can bind an Array of Objects in a column by using [`valueAccessor`](../../api/grid/column/#valueaccessor) property.
In this example, The Name field has an array of two objects FirstName and LastName. These two objects are joined and bind to a column using
[`valueAccessor`](../../api/grid/column/#valueaccessor).

{% tab template="grid/grid", sourceFiles="app/**/*.ts"%}

```typescript
import { Component, OnInit } from '@angular/core';
import { stringData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=90></e-column>
                        <e-column field='Name' headerText='Full Name' [valueAccessor]= 'valueAccess' width=120></e-column>
                        <e-column field='Title' headerText='Title' width=150></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public valueAccess = (field: string, data: object, column: object) => {
        return data[field].map((s: { FirstName: string, LastName: string }) => {
            return s.LastName || s.FirstName;
         }).join(' ');
    }

    ngOnInit(): void {
        this.data = stringData;
    }
}

```

{% endtab %}

### Expression column

You can achieve the expression column by using [`valueAccessor`](../../api/grid/column/#valueaccessor) property.

{% tab template="grid/expression", sourceFiles="app/**/*.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { foodInformation } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='FoodName' headerText='Food Name' width=150></e-column>
                        <e-column field='Protein' headerText='Protein' textAlign='Right' width=120></e-column>
                        <e-column field='Fat' headerText='Fat' textAlign='Right' width=80></e-column>
                        <e-column field='Carbohydrate' headerText='Carbohydrate' textAlign='Right' width=120></e-column>
                        <e-column headerText='Calories Intake' textAlign='Right' [valueAccessor]='totalCalories' width=150></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    public totalCalories = (field: string, data: { Protein: number, Fat: number, Carbohydrate: number }, column: Object): number => {
        return data.Protein * 4 + data.Fat * 9 + data.Carbohydrate * 4;
    }

    ngOnInit(): void {
        this.data = foodInformation;
    }
}


```

{% endtab %}

## Format

To format cell values based on specific culture, use the [`columns.format`](../../api/grid/column/#format)
property. The grid uses [`Internalization`](../../common/internationalization/) library to format [`number`](../../common/internationalization/#number-formatting) and
[`date`](../../common/internationalization/#manipulating-datetime)
values.

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height="315px">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }
}
```

{% endtab %}

> By default, the [`number`](../../common/internationalization/#number-formatting) and [`date`](../../common/internationalization/#manipulating-datetime) values are formatted in **en-US** locale. You can localize the currency and date in different locale as explained ['here'](../../common/internationalization/)

### Number formatting

The number or integer values can be formatted using the below format strings.

Format |Description |Remarks
-----|-----|-----
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 1. For example the cell value **0.2** is formatted as **20%**. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

Please refer to the link to know more about [`number`](../../common/internationalization/#number-formatting) format.

### Date formatting

You can format date values either using built-in date format string or custom format string.

For built-in date format you can specify [`columns.format`](../../api/grid/column/#format) as string   (Example: **yMd**). Please refer to the link to know more about [`Date formatting`](../../common/internationalization/#manipulating-datetime)

You can also use custom format string to format the date values. Some of the custom formats and the formatted date values are given in the below table.

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/1996
{ type:'date', format:'dd.MM.yyyy' } | 04.07.1996
{ type:'date', skeleton:'short' } | 7/4/96
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/1996 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height="315px">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='OrderDate' [format]='formatOptions' headerText='Order Date' textAlign='Right' width=120></e-column>
                    <e-column field='OrderDate' [format]='shipFormat' headerText='Ship Date' textAlign='Right' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public formatOptions: object;
    public shipFormat: object;

    ngOnInit(): void {
        this.data = data;
        this.formatOptions = {type: 'date', format: 'dd/MM/yyyy'};
        this.shipFormat = { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' };
    }
}

```

{% endtab %}

## Render boolean value as checkbox

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](../../api/grid/column/#displayascheckbox) property as **true**.

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [height]='315'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
                    <e-column field='Verified' headerText='Verified' [displayAsCheckBox]="true" width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

## Visibility

You can hide any particular column in Grid before rendering by defining [`visible`](../../api/grid/column/#visible) property as false. In the below sample **ShipCity** column is defined as visible false.

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=140></e-column>
                    <e-column field='ShipCity' headerText='Ship City' [visible]='false' width=100></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

## Lock columns

You can lock columns by using [`column.lockColumn`](../../api/grid/column/#lockcolumn) property. The locked columns will be moved to the first position. Also you can’t reorder its position.

In the below example, Ship City column is locked and its reordering functionality is disabled.

{% tab template="grid/reorder", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowReordering]='true' [allowSelection]='false' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' width=100 [lockColumn]='true' [customAttributes]='customAttributes'></e-column>
                    <e-column field='ShipName'width=100></e-column>
                    <e-column field='ShipPostalCode'width=80></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public customAttributes: object;

    ngOnInit(): void {
        this.data = data;
        this.customAttributes = {class: 'customcss'};
    }
}

```

{% endtab %}

## Controlling Grid actions

You can enable or disable grid action for a particular column by setting the [`allowFiltering`](../../api/grid/columnModel/#allowfiltering),
[`allowGrouping`](../../api/grid/columnModel/#allowgrouping), [`allowSorting`](../../api/grid/columnModel/#allowsorting), [`allowReordering`](../../api/grid/columnModel/#allowreordering) and [`allowEditing`](../../api/grid/columnModel/#allowediting) properties.

{% tab template="grid/control-actions", sourceFiles="app/**/*.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell, ReorderService, EditService } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowReordering]="true" [editSettings]='editSettings'
               [allowSorting]="true" [allowFiltering]="true" [allowGrouping]="true" height="220px">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 [allowGrouping]="false"></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right'
                     format='C2' width=90 [allowFiltering]="false"></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right'
                     format='yMd' width=120 [allowSorting]="false"></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }
}

```

{% endtab %}

## Show or hide columns by external button

You can show or hide the grid columns dynamically through external buttons by invoking the [`showColumns`](../../api/grid/#showcolumns)/[`hideColumns`](../../api/grid/#hidecolumns)
methods.

{% tab template="grid/grid", sourceFiles="app/**/*.ts"%}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
@Component({
    selector: 'app-root',
    template: ` <button id='show' ej-button class='e-flat' (click)='show()'> Show </button>
                <button id='hide' ej-button class='e-flat' (click)='hide()'> Hide </button>
                <ejs-grid #grid [dataSource]='data' [height]='280'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data: object[];
    @ViewChild('grid') public grid: GridComponent;
    ngOnInit(): void {
        this.data = data;
    }
    show() {
        this.grid.showColumns(['Customer ID', 'Ship Name']); // show by HeaderText
    }
    hide() {
        this.grid.hideColumns(['Customer ID', 'Ship Name']); // hide by HeaderText
    }
}
```

{% endtab %}

## Customize column styles

You can customise the appearance of header and content of the particular column using the
[`customAttributes`](../../api/grid/column/#customattributes) property.

To customize the grid column, follow the given steps:

**Step 1**:

Create a css class with custom style to override the default style for rowcell and headercell.

```css
.e-grid .e-rowcell.customcss{
    background-color: #ecedee;
    color: 'red';
    font-family: 'Bell MT';
    font-size: 20px;
}

.e-grid .e-headercell.customcss{
    background-color: #2382c3;
    color: white;
    font-family: 'Bell MT';
    font-size: 20px;
}

```

**Step 2**:

Add the custom css class to particular column by using [`customAttributes`](../../api/grid/column/#customattributes) property.

{% tab template="grid/custom-column", sourceFiles="app/**/*.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' [customAttributes]='customAttributes' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit{

    public data: Object[];
    public customAttributes: Object;

    ngOnInit(): void{
        this.data = data;
        this.customAttributes = {class: 'customcss'};
    }
}

```

{% endtab %}

## Display custom tooltip for columns

You can achieve the custom tooltip([`EJ2 Tooltip`](../../../tooltip/getting-started)) for Grid by using the
[`queryCellInfo`](../../api/grid/#querycellinfo) event.

Render the ToolTip component for the grid cells by using the following code in the
[`queryCellInfo`](../../api/grid/#querycellinfo) event.

```typescript
tooltip (args: QueryCellInfoEventArgs) {
    let tooltip: Tooltip = new Tooltip({
        content: args.data[args.column.field].toString();
    }, args.cell);
}

```

{% tab template="grid/custom-tooltip", sourceFiles="app/**/*.ts"%}

```typescript
import { Component, OnInit } from '@angular/core';
import { QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { Tooltip } from '@syncfusion/ej2-popups';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315' (queryCellInfo)='tooltip($event)' >
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }
    tooltip(args: QueryCellInfoEventArgs) {
        const tooltip: Tooltip = new Tooltip({
            content: args.data[args.column.field].toString()
        }, args.cell as HTMLTableCellElement);
    }
}


```

{% endtab %}

## Align the text of Grid content and header

For aligning the text of Grid content and header part, kindly use [textAlign](../../api/grid/column/#textalign) and [headerTextAlign](../../api/grid/column/#headertextalign) properties.

Grid column supports the following alignments:
* Left
* Right
* Center
* Justify

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' headerTextAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string' textAlign='Left' headerTextAlign='Left' width=90></e-column>
                    <e-column field='OrderDate' headerText='Order Date' type='date'  textAlign='Center' headerTextAlign='Center' format='yMd' width=140></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' type='string' textAlign='Justify' headerTextAlign="Justify" width=120></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

## See Also

* [Group Column by Format](../grouping#group-by-format)
* [How to set complex column as Foreignkey column](../how-to/complex-column-as-foreign-key-column)
* [Complex Data Binding with list of Array Of Objects](../how-to/list-of-array-of-objects)
* [Format grid with auto generation columns in Angular Grid](https://www.syncfusion.com/forums/141181/format-grid-with-auto-generation-columns-in-angular-grid)
* [Background color change for stacked headers and calculated columns in Angular Grid](https://www.syncfusion.com/forums/139804/background-color-change-for-stacked-headers-and-calculated-columns-in-angular-grid)
* [Drag and Drop Between two grids in Angular Grid](https://www.syncfusion.com/forums/150058/drag-and-drop-between-two-grids-in-angular-grid)