# Checkbox Selection

Checkbox Selection provides an option to select multiple Grid records with help of checkbox in each row.

To render checkbox in each grid row, you need to use checkbox column with type as **CheckBox** using
column [`type`](../../api/grid/column/#type) property.

{% tab template="grid/selection", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                <e-columns>
                    <e-column type='checkbox' width='50'></e-column>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public selectionOptions: SelectionSettingsModel;

    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

> By default selection is allowed by clicking a grid row or checkbox in that row. To allow Selection only through checkbox, you can set
[`selectionSettings.checkboxOnly`](../../api/grid/selectionSettings/#checkboxonly) property to true.
> Selection can be persisted on all the operations
using [`selectionSettings.persistSelection`](../../api/grid/selectionSettings/#persistselection) property.
For persisting selection on the Grid, any one of the column should be defined as a primary key
using [`columns.isPrimaryKey`](../../api/grid/column/#isprimarykey) property.

## Checkbox selection mode

In checkbox selection, selection can also be done by clicking on rows. This selection provides two types of Checkbox Selection mode which can be set by using the following API,
[`selectionSettings.checkboxMode`](../../api/grid/selectionSettings/#checkboxmode). The modes are;

* **Default**: This is the default value of the checkboxMode. In this mode, user can select multiple rows by clicking rows one by one.
* **ResetOnRowClick**: In ResetOnRowClick mode, when clicking on row it will reset previously selected row. Also you can perform multiple-selection in this mode by press
and hold CTRL key and click the desired rows. To select range of rows, press and hold the SHIFT key and click the rows.

{% tab template="grid/selection", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [selectionSettings]='selectionOptions' height='315px'>
                <e-columns>
                    <e-column type='checkbox' width='50'></e-column>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public selectionOptions: SelectionSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { checkboxMode: 'ResetOnRowClick'};
    }
}

```

{% endtab %}

## Prevent specific rows from being selected in checkbox selection

You can prevent specific rows from being selected in the checkbox selection mode by hiding the checkboxes using the [rowDataBound](../../api/grid/#rowdatabound) event. You achieve this by setting the `isSelectable` argument as false in the `rowDataBound` event based on certain conditions as per the needs of the application.

In the following sample, the selection of specific rows has been prevented based on the `isSelectable` argument in the `rowDataBound` event.

{% tab template="grid/selection", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel, FilterService, FilterSettingsModel, PageSettingsModel, ToolbarService, ToolbarItems, EditService, EditSettingsModel, RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template:`<ejs-grid #grid [dataSource]='data' [allowPaging]='true' [allowFiltering]='true' [allowSelection]='true' [selectionSettings]='selectionOptions' [editSettings]='editSettings' [toolbar]='toolbar' [pageSettings]='pageOptions' [filterSettings]='filterOptions' (rowDataBound)='rowDataBound($event)'>
        <e-columns>
            <e-column type='checkbox' width=120></e-column>
            <e-column field='List' headerText='List' width=120></e-column>
            <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='Right' width=150></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
            <e-column field='EmployeeID' headerText='Employee ID' width=150></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        </e-columns>
    </ejs-grid>`
    providers: [FilterService, EditService, ToolbarService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public selectionOptions: SelectionSettingsModel;
    public editSettings: EditSettingsModel;
    public pageOptions: PageSettingsModel;
    public toolbar: ToolbarItems[] | object;
    public filterOptions: FilterSettingsModel;

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
        this.selectionOptions = { type: 'Multiple', persistSelection: true };
        this.pageOptions = { pageSize: 5 };
        this.filterOptions = { type: 'CheckBox' };
        for (let i = 0; i < data.length; i++) {
            data[i]['List'] = i + 1;
        }
    }
    public rowDataBound(args): void {
    args.isSelectable = args.data.List % 5 === 0;
    }
}

```

{% endtab %}