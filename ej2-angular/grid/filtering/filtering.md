---
title: "Filtering"
component: "Grid"
description: "Learn how to filter rows in the DataGrid using the filter bar, menu, and Excel-like filtering. Also learn how to use custom filter components in the Essential JS 2 DataGrid control."
---

# Filtering

Filtering allows you to view particular records based on filter criteria. To enable filtering in the Grid,
set the [`allowFiltering`](../../api/grid/#allowfiltering) to true.
Filtering options can be configured through [`filterSettings`](../../api/grid/filterSettings).

To use filter, inject **FilterService** in the provider section of **AppModule**.

<!---
The Grid supports two types of filter, they are
* Filter bar
* Excel
-->

{% tab template="grid/filtering1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
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

> * You can apply and clear filtering, by using
[`filterByColumn`](../../api/grid/filter/#filterbycolumn) and [`clearFiltering`](../../api/grid/filter/#clearfiltering) methods.
> * To disable Filtering for a particular column, by specifying
[`columns.allowFiltering`](../../api/grid/column/#allowfiltering) to false.

## Initial filter

To apply the filter at initial rendering, set the filter [`predicate`](../../api/grid/predicate) object in
[`filterSettings.columns`](../../api/grid/filterSettingsModel/#columns).

{% tab template="grid/filtering1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public filterOptions: FilterSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = {
            columns: [{ field: 'ShipCity', matchCase: false, operator: 'startswith', predicate: 'and', value: 'reims' },
            { field: 'ShipName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Vins et alcools Chevalier' }]
        };
    }
}

```

{% endtab %}

## Filter operators

The filter operator for a column can be defined in [`filterSettings.columns.operator`](../../api/grid/predicateModel/#operator) property.

The available operators and its supported data types are,

Operator |Description |Supported Types
-----|-----|-----
startsWith |Checks whether a value begins with the specified value. |String
endsWith |Checks whether a value ends with specified value. |String
contains |Checks whether a value contains with specified value. |String
equal |Checks whether a value equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
notEqual |Checks whether a value not equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterThan |Checks whether a value is greater than with specified value. |Number &#124; Date
greaterThanOrEqual|Checks whether a value is greater than or equal to specified value. |Number &#124; Date
lessThan |Checks whether a value is less than with specified value. |Number &#124; Date
lessThanOrEqual |Checks whether a value is less than or equal to specified value. |Number &#124; Date

> By default, the [`filterSettings.columns.operator`](../../api/grid/predicateModel/#operator) value is **equal**.

## Diacritics filter

By default, grid ignores diacritic characters while filtering. To include diacritic characters, set the
[`filterSettings.ignoreAccent`](../../api/grid/filter/#filterbycolumn) as **true**.

In the following sample, type **aero** in **Name** column to filter diacritic characters.

{% tab template="grid/filter-diacritics", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' >
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=140></e-column>
                    <e-column field='Name' headerText='Name' width=140></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=170></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public filterOptions: FilterSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = {
           ignoreAccent: true
        };
    }
}

```

{% endtab %}

## Filter bar

You can customize default filter bar component of a column by custom component using [`filter template`](../../api/grid/column/#filtertemplate).

The following example demonstrates the way to use filter template for a column when using filter bar. In the following example, the [`DropdownList`](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started/) component is used to filter **Name** column using filter template.

{% tab template="grid/filter-template", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [allowFiltering]='true' [allowPaging]='true' >
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=140></e-column>
                    <e-column field='Name' headerText='Name' width=140>
                        <ng-template #filterTemplate let-data>
                            <ejs-dropdownlist id='dropdown' [(ngModel)]="data.Name" [enabled]="data.column.allowFiltering"
                            (change)=onChange($event) [dataSource]='dropdata' [fields]='fields'[popupHeight]='height' ></ejs-dropdownlist>
                       </ng-template>
                    </e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=170></e-column>
                    <e-column field='CustomerID' headerText='CustomerID' width=140></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    @ViewChild('grid') public grid: GridComponent;
    public data: object[];
    public fields: object = { text: 'Name', value: 'Name' };
    public height = '220px';
    public dropdata: string[] = DataUtil.distinct(data, 'Name') as string[];
    public onChange(args: any): void {
        this.grid.filterByColumn('Name', 'equal', args.value);
    }
    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

## Filter menu

You can customize default filter menu component of a column by custom component using [`filter template`](../../api/grid/column/#filtertemplate).

The following example demonstrates the way to use filter template for a column when using filter menu. In the following example, the [`DropdownList`](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started/) component is used to filter **ShipName** column using filter template.

{% tab template="grid/filter-template", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [allowPaging]='true' [filterSettings]='filterOption'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=140></e-column>
                    <e-column field='Name' headerText='Name' width=140></e-column>
                    <e-column field='ShipName' headerText='ShipName' width=170>
                        <ng-template #filterTemplate let-data>
                            <ejs-dropdownlist id='dropdown' [(ngModel)]="data.ShipName" [dataSource]='dropdata'
                             [fields]='fields' [popupHeight]='height' ></ejs-dropdownlist>
                       </ng-template>
                    </e-column>
                    <e-column field='CustomerID' headerText='CustomerID' width=140></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public dropdata: string[] = DataUtil.distinct(data, 'ShipName') as string[];
    public filterOption: FilterSettingsModel = { type: 'Menu' };
    public fields: object = { text: 'CustomerID', value: 'CustomerID' };
    public height = '220px';
    ngOnInit(): void {
        this.data = data;
    }
}


```

{% endtab %}

## See Also

* [Customizing Filter Dialog by using an additional parameter](../how-to/add-params-for-filtering)
* [Hide sorting options on Excel filter dialog](../how-to/hide-sorting-in-excel-filter)
* [How to apply initial filter on custom binding in Angular Grid](https://www.syncfusion.com/forums/152157/how-to-apply-initial-filter-on-custom-binding-in-angular-grid)
* [How to custom the display value of checkbox filter option in Angular Grid](https://www.syncfusion.com/forums/154478/how-to-custom-the-display-value-of-checkbox-filter-option-in-angular-grid)