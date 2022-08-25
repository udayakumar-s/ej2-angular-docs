---
title: "Editing"
component: "Grid"
description: "Learn how to perform CRUD operations in various edit modes, use different cell editors, and persist data on the server side in the Essential JS 2 DataGrid control."
---

# Editing

The Grid component has options to dynamically insert, delete and update records.
Editing feature requires a primary key column for CRUD operations.
To define the primary key, set [`columns.isPrimaryKey`](../../api/grid/column/#isprimarykey) to **true** in particular column.

You can start the edit action either by double clicking the particular row or by selecting the required row and click on **Edit**
button in the toolbar. Similarly, you can add a new record to grid either by clicking on **Add** button in the toolbar
or on an external button which is bound to invoke the [`addRecord`](../../api/grid/edit/#addrecord) method of the grid,
**Save** and **Cancel** while in edit mode is possible using respective toolbar icon in grid.

Deletion of the record is possible by selecting the required row and click on **Delete** button in the toolbar.

To use CRUD, inject the [`EditService`](../../api/grid/edit) module into the **@NgModule.providers** section.

To learn about what are all the edit modes and edit types are available in Angular Grid, you can check on this video

`youtube:RefC_z4Nnmg`

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
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

> * If [`columns.isIdentity`](../../api/grid/column/#isidentity) is enabled,
then it will be considered as a read-only column when editing and adding a record.
> * You can disable editing for a particular column, by specifying
[`columns.allowEditing`](../../api/grid/column/#allowediting) to **false**.

## Toolbar with edit option

The grid toolbar has the [built-in items](../../toolbar/item-configuration) to execute Editing actions.
You can define this by using the [`toolbar`](../../api/grid/#toolbar) property.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
}

```

{% endtab %}

## Disable editing for particular column

You can disable editing for particular columns by using the [`columns.allowEditing`](../../api/grid/column/#allowediting).

In the following demo, editing is disabled for the **CustomerID** column.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                     isPrimaryKey='true' [validationRules]='orderIDRules' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [allowEditing]= 'false'
                     [validationRules]='customerIDRules' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit'
                     width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public orderIDRules: object;
    public customerIDRules: object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: 3 };
    }
}

```

{% endtab %}

## Disable editing for a particular row or cell

You can disable the editing for a particular row by using the [`actionBegin`](../../api/grid/#actionbegin) event of Grid based on **requestType** as **beginEdit**.

In the below demo, the rows which are having the value for **ShipCountry** column as "France" is prevented from editing.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar'
               (actionBegin)="actionBegin($event)" height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit'
                     width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true };
        this.toolbar = ['Edit', 'Update', 'Cancel'];
    }

    actionBegin(args) {
        if (args.requestType === 'beginEdit') {
            if (args.rowData.ShipCountry === 'France') {
                args.cancel = true;
            }
        }
    }
}

```

{% endtab %}

For batch mode of editing, you can use [`cellEdit`](../../api/grid/#celledit) event of Grid. In the below demo, the cells which are having the value as "France" is prevented from editing.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, CellEditArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' (cellEdit)="cellEdit($event)" height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, mode: 'Batch' };
        this.toolbar = ['Edit', 'Update', 'Cancel'];
    }

    cellEdit(args: CellEditArgs) {
        if (args.value === 'France') {
            args.cancel = true;
        }
    }
}

```

{% endtab %}

## Editing template column

You can edit template column value by defining [`field`](../../api/grid/column/#field) for that particular column.

In the below demo, the **ShipCountry** column is rendered with the template.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                    editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150>
                        <ng-template #template let-data>
                            <a href="#">{{data.ShipCountry}}</a>
                        </ng-template>
                    </e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
}

```

{% endtab %}

## Troubleshoot editing works only for first row

The Editing functionalities can be performed based upon the primary key value of the selected row.
If **primaryKey** is not defined in the grid, then edit or delete action take places the first row.

## How to make a Grid column always editable

Make the Grid column always editable using the column template feature of the Grid.

In the following example, the textbox is rendered in the Freight column using a column template. The keyup event for the Grid is bound using the [created](../../api/grid#created) event of the Grid, and the edited changes are saved in the data source using the [updateRow](../../api/grid#updaterow) method of the Grid.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { closest } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `<ejs-grid  #grid [dataSource]='data' [editSettings]='editSettings' height='315px' (created)="created($event)">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width=130 textAlign='Right' format='yMd'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=140></e-column>
                    <e-column field='Freight' headerText='Receipt Amount' textAlign= 'Right' width=150>
                        <ng-template #template let-data>
                            <input id='{{data.OrderID}}' value='{{data.Freight}}' class='custemp' type='text' style='width: 100%'>
                        </ng-template>
                </e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    created(args) {
        this.grid.element.addEventListener('keyup', function (e) { // Bind the keyup event for the grid.
            if ((e.target as any).classList.contains('custemp')) { // Based on this condition, you can find whether the target is an input element or not.
                var row = parentsUntil(e.target as any, 'e-row');
                var rowIndex = (row as any).rowIndex; // Get the row index.
                var uid = row.getAttribute('data-uid');
                var rowData = grid.getRowObjectFromUID(uid).data; // Get the row data.
                (rowData as any).Freight = (e.target as any).value; // Update the new value for the corresponding column.
                grid.updateRow(rowIndex, rowData); // Update the modified value in the row data.
            }
        });
    }
}

```

{% endtab %}

## See Also

* [Cascading DropDownList with Grid Editing](../how-to/cascading-drop-down-list)
* [Tab Inside the Dialog Editing](../how-to/using-tab-inside-the-dialog-editing)
* [Apply animation for Grid Edit dialog in Angular Grid](https://www.syncfusion.com/forums/154544/apply-animation-for-grid-edit-dialog-in-angular-grid)
* [CRUD operations using asp.net core web api methods in Angular Grid](https://www.syncfusion.com/forums/150090/crud-operations-using-asp-net-core-web-api-methods-in-angular-grid)
* [How to restrict ArrowUp increase and ArrowDown decrease value in Grid numeric cell in Angular Grid](https://www.syncfusion.com/forums/150611/how-to-restrict-arrowup-increase-and-arrowdown-decrease-value-in-grid-numeric-cell-in)
* [How to use DropDownList and Combo-Box in Batch-edit mode of Angular Grid](https://www.syncfusion.com/forums/151968/how-to-use-dropdownlist-and-combo-box-in-batch-edit-mode-of-angular-grid)
* [How to use CellEditArgs event in Angular Grid](https://www.syncfusion.com/forums/153617/how-to-use-celleditargs-event-in-angular-grid)
* [How to render Grid with add form always in Angular Grid](https://www.syncfusion.com/forums/161716/how-to-render-grid-with-add-form-always-in-angular-grid)
* [How to show the numeric key pad in mobile device when edit the number column in Angular Grid](https://www.syncfusion.com/forums/147184/how-to-show-the-numeric-keypad-in-mobile-device-when-edit-the-number-column-in-angular-grid)
* [How to enable inline editing in Angular 4 Data Grid/Table](https://www.syncfusion.com/kb/10851/how-to-enable-inline-editing-in-angular-4-data-grid-table)