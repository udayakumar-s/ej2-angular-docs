# Row Selection

## Select row at initial rendering

To select a row at initial rendering, set the [`selectedRowIndex`](../../api/grid/#selectedrowindex) value.

{% tab template="grid/selection", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [selectedRowIndex]=1 [selectionSettings]='selectionOptions' height='315px'>
                <e-columns>
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
        this.selectionOptions = { type: 'Multiple', mode: 'Both' };
    }
}

```

{% endtab %}

## Get selected row indexes

You can get the selected row indexes by using the [`getSelectedRowIndexes`](../../api/grid/#getselectedrowindexes) method.

{% tab template="grid/selection", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='315px' (rowSelected)='rowSelected($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    rowSelected(args: RowSelectEventArgs) {
        const selectedrowindex: number[] = this.grid.getSelectedRowIndexes();  // Get the selected row indexes.
        alert(selectedrowindex); // To alert the selected row indexes.
        const selectedrecords: object[] = this.grid.getSelectedRecords();  // Get the selected records.
    }
}

```

{% endtab %}

## Simple multiple row selection

You can select multiple rows by clicking on rows one by one. This will not deselect the previously selected rows. To deselect the previously selected row, you can click on the  selected row. You can enable this behavior by using [`selectionSettings.enableSimpleMultiRowSelection`](../../api/grid/selectionSettings/#enablesimplemultirowselection) property.

{% tab template="grid/selection", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [selectionSettings]='selectionOptions' height='315px'>
                <e-columns>
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
        this.selectionOptions = { type: 'Multiple', enableSimpleMultiRowSelection: true };
    }
}

```

{% endtab %}

## Toggle selection

The Toggle selection allows to perform selection and unselection of the particular row or cell or column. To enable toggle selection, set [`enableToggle`](../../api/grid/selectionSettings/#enabletoggle) property of the selectionSettings as true. If you click on the selected row or cell or column then it will be unselected and vice versa.

{% tab template="grid/selection", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px' [selectionSettings]='selectionOptions'>
                <e-columns>
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
        this.selectionOptions = { type: 'Multiple', mode: 'Both' };
    }
}

```

{% endtab %}

> If multi selection is enabled, then first click on any selected row (without pressing Ctrl key), it will clear the multi selection and in second click on the same row, it will be unselected.

## Clear selection programmatically

You can clear the Grid selection programmatically by using the [clearSelection](./api-grid.html#clearSelection) method.

In the demo below, we initially selected the third row using [selectedRowIndex](./api-grid.html#selectedrowindex-number). You can clear this selection by calling the [clearSelection](./api-grid.html#clearSelection) method in the button click event.

{% tab template="grid/selection", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template:
    `<button ej-button class='e-flat' (click)='click()'>Clear Selection</button>
    <ejs-grid #grid [dataSource]='data' [selectedRowIndex]=2 allowPaging=true [selectionSettings]='selectionOptions' [pageSettings]='pageOptions'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=130></e-column>
            <e-column field='Freight' headerText='Freight' format= 'C2' width=100></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public selectionOptions: SelectionSettingsModel;
    public pageOptions: PageSettingsModel;

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { type: 'Multiple' };
        this.pageOptions = { pageSize: 5 };
    }

    click(): void{
        this.grid.clearSelection();
    }
}

```

{% endtab %}

## Get selected records on various pages

Enabling the [selectionSettings.persistSelection](./api-selectionSettings.html#persistselection-boolean) property will persist the selection in all Grid operations.

So the selection will be maintained on every page even after navigating to another page.

You can get the selected records using the [getSelectedRecords](./api-grid.html#getSelectedRecords) method.

{% tab template="grid/selection", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template:
    `<button ej-button class='e-flat' (click)='click()'>Selected Records</button>
    <ejs-grid #grid [dataSource]='data' allowPaging=true [selectionSettings]='selectionOptions' [pageSettings]='pageOptions'>
        <e-columns>
            <e-column type='checkbox' width=50></e-column>
            <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true'  textAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=130></e-column>
            <e-column field='Freight' headerText='Freight' format= 'C2' width=100></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public selectionOptions: SelectionSettingsModel;
    public pageOptions: PageSettingsModel;

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { type: 'Multiple', persistSelection: true };
        this.pageOptions = { pageSize: 5 };
    }

    click(): void{
        let selectedrecords: Object[] = this.grid.getSelectedRecords(); // get the selected records.
        let selectedRecordsCount: number = selectedrecords.length
        alert(selectedRecordsCount); // to alert the selected records count.
    }
}

```

{% endtab %}

> To persist the grid selection, it is necessary to define any one of the columns as a primary key using the [columns.isPrimaryKey](./api-column.html#isprimarykey-boolean) property.