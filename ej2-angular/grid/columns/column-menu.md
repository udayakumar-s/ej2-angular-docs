# Column Menu

The column menu has options to integrate features like sorting, grouping, filtering, column chooser, and autofit.
It will show a menu with the integrated feature when users click on multiple icon of the column.
To enable column menu, you need to define the [`showColumnMenu`](../../api/grid/#showcolumnmenu) property as true.

To use the column menu, inject the **ColumnMenuService** in the provider section of **AppModule**.

The default items are displayed in following table.

| Item | Description |
|-----|-----|
| **SortAscending** | Sort the current column in ascending order. |
| **SortDescending** | Sort the current column in descending order. |
| **Group** | Group the current column. |
| **Ungroup** | Ungroup the current column. |
| **AutoFit** | Auto fit the current column. |
| **AutoFitAll** | Auto fit all columns. |
| **ColumnChooser** | Choose the column visibility. |
| **Filter** | Show the filter option as given in [`filterSettings.type`](../../api/grid/filterSettings/#type) |

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript


import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SortService, GroupService, ColumnMenuService, PageService, FilterService } from '@syncfusion/ej2-angular-grids';
import {  GroupSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' id="gridcomp" allowPaging='true' allowGrouping='true' allowSorting='true' showColumnMenu='true'
        [groupSettings]='groupOptions' allowFiltering='true' [filterSettings]='filterSettings'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='140' textAlign="Right"></e-column>
            <e-column field='CustomerID' headerText='Customer Name'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right"></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' [visible]='false' width='150'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        </e-columns>
    </ejs-grid>
                `,
    providers: [SortService, GroupService, ColumnMenuService, PageService, FilterService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public groupOptions: GroupSettingsModel;
    public filterSettings: FilterSettingsModel;
    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showGroupedColumn: true };
        this.filterSettings = { type: 'CheckBox' };
    }
}

```

{% endtab %}

> You can disable column menu for a particular column by defining the
[`columns.showColumnMenu`](../../api/grid/column/#showcolumnmenu) as false.
> You can customize the default items by defining the
[`columnMenuItems`](../../api/grid/#columnmenuitems) with required items.

## Column menu events

During the resizing action, the grid component triggers the below two events.

1. The [`columnMenuOpen`](../../api/grid/#columnmenuopen) event triggers before the column menu opens.
2. The [`columnMenuClick`](../../api/grid/#columnmenuclick) event triggers when the user clicks the column menu of the grid.

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SortService, GroupService, ColumnMenuService, PageService, FilterService } from '@syncfusion/ej2-angular-grids';
import { GroupSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' id="gridcomp" allowPaging='true' allowGrouping='true' allowSorting='true' showColumnMenu='true'
               [groupSettings]='groupOptions' allowFiltering='true' [filterSettings]='filterSettings'
         (columnMenuOpen)="columnMenuOpen()" (columnMenuClick)="columnMenuClick()">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='140' textAlign="Right"></e-column>
            <e-column field='CustomerID' headerText='Customer Name'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right"></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' [visible]='false' width='150'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        </e-columns>
    </ejs-grid>
                `,
    providers: [SortService, GroupService, ColumnMenuService, PageService, FilterService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public groupOptions: GroupSettingsModel;
    public filterSettings: FilterSettingsModel;
    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showGroupedColumn: true };
        this.filterSettings = { type: 'CheckBox' };
    }
    columnMenuOpen() {
        alert('columnMenuOpen event is Triggered');
    }
    columnMenuClick() {
        alert('columnMenuClick event is Triggered');
    }
}

```

{% endtab %}

## Custom column menu item

Custom column menu items can be added by defining the
[`columnMenuItems`](../../api/grid/#columnmenuitems) as collection of
the [`columnMenuItemModel`](../../api/grid/columnMenuItemModel/).
Actions for this customized items can be defined in the
[`columnMenuClick`](../../api/grid/#columnmenuclick) event.

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SortService, ColumnMenuService, PageService } from '@syncfusion/ej2-angular-grids';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { SortSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' id="gridcomp" allowPaging='true' allowSorting='true'
     showColumnMenu='true' [sortSettings]='sortSettings' [columnMenuItems]='columnMenuItems' (columnMenuClick)='columnMenuClick($event)'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='140' textAlign="Right"></e-column>
            <e-column field='CustomerID' headerText='Customer Name' showInColumnChooser='false'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right"></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' [visible]='false' width='150'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        </e-columns>
    </ejs-grid>
                `,
    providers: [SortService, ColumnMenuService, PageService]
})
export class AppComponent implements OnInit {

    @ViewChild('grid')
    public grid: GridComponent;
    public data: object[];
    public columnMenuItems: any = [{ text: 'Clear Sorting', id: 'gridclearsorting' }];
    public sortSettings: SortSettingsModel =  {columns: [{direction: 'Ascending', field: 'OrderID'}]};
    public columnMenuClick(args: MenuEventArgs) {
        if (args.item.id === 'gridclearsorting') {
            this.grid.clearSorting();
        }
    }
    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

## Customize menu items for particular columns

Sometimes, you have a scenario that to hide an item from column menu for particular columns. In that case, you need to define the
[`columnMenuOpenEventArgs.hide`](../../api/grid/columnMenuOpenEventArgs) as true in the
[`columnMenuOpen`](../../api/grid/#columnmenuopen) event.

The following sample, **Filter** item was hidden in column menu when opens for the **OrderID** column.

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SortService, GroupService, ColumnMenuService, PageService, FilterService } from '@syncfusion/ej2-angular-grids';
import { ColumnMenuItemModel, ColumnMenuOpenEventArgs, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' id="gridcomp" allowPaging='true' allowSorting='true' showColumnMenu='true'
     [filterSettings]='filterSettings' (columnMenuOpen)='columnMenuOpen($event)' [allowFiltering]='true' [allowGrouping]='true'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='140' textAlign="Right"></e-column>
            <e-column field='CustomerID' headerText='Customer Name' showInColumnChooser='false'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right"></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' [visible]='false' width='150'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        </e-columns>
    </ejs-grid>
                `,
    providers: [SortService, ColumnMenuService, PageService, GroupService, ColumnMenuService, FilterService]
})
export class AppComponent implements OnInit {

    @ViewChild('grid')
    public grid: GridComponent;
    public data: object[];
    public filterSettings: FilterSettingsModel = { type: 'Menu' };
    public columnMenuOpen(args: ColumnMenuOpenEventArgs) {
        for (const item of args.items) {
            if (item.text === 'Filter' && args.column.field === 'OrderID') {
                (item as ColumnMenuItemModel).hide = true;
            } else {
                (item as ColumnMenuItemModel).hide = false;
            }
        }
    }

    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

## Customize the icon of column menu

You can customize the column menu icon by overriding the default grid class **.e-icons.e-columnmenu** with a custom property **content** as mentioned below.

```css
.e-grid .e-columnheader .e-icons.e-columnmenu::before {
              content: "\e941";
      }
```

In the below sample, grid is rendered with a customized column menu icon.

{% tab template="grid/custom-column-menu-icon", sourceFiles="app/**/*.ts"%}

```typescript
import { Component, OnInit } from '@angular/core';
import { ColumnMenuService } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315' showColumnMenu='true' >
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' format='C2' width=90></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                    </e-columns>
                </ejs-grid>`,
   providers: [ColumnMenuService]
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }
}


```

{% endtab %}