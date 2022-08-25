# Excel Export Options

The excel export provides an option to customize mapping of the grid to excel document.

## Export current page

The excel export provides an option to export the current page into excel. To export current page, define [`exportType`](../../api/grid/excelExportProperties/#exporttype) to **CurrentPage**.

{% tab template="grid/excel-exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, PageService, ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='220px'
              [allowPaging]='true' [allowExcelExport]='true' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [PageService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['ExcelExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            const excelExportProperties: ExcelExportProperties = {
                exportType: 'CurrentPage'
            };
            this.grid.excelExport(excelExportProperties);
        }
    }
}

```

{% endtab %}

## Export the selected records only

You can export the selected records data by passing it to [`exportProperties.dataSource`](../../api/grid/pdfExportProperties/#datasource) Property in the [`toolbarClick`](../../api/grid/#toolbarclick) event.

In the below exporting demo, We can get the selected records using [`getSelectedRecords`](../../api/grid/#getselectedrecords) method and pass the selected data to [`PdfExport`](../../api/grid/#pdfexport) or [`excelExport`](../../api/grid/#excelexport) property.

{% tab template="grid/exporting-filtered-data", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {
    GridComponent, ToolbarItems, ToolbarService, PdfExportService,
    PageService, FilterService, ExcelExportService, SelectionSettingsModel
} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions'
   [allowPaging]='true' [allowPdfExport]='true' [allowExcelExport]='true'
   (toolbarClick)='toolbarClick($event)' [selectionSettings]='selectionSettings'>
              <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                  <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
              </e-columns>
              </ejs-grid>`,
    providers: [ToolbarService, PdfExportService, PageService, FilterService, ExcelExportService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    public selectionSettings: SelectionSettingsModel;
    public initialPage: object;
    @ViewChild('grid') public grid: GridComponent;
    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport', 'ExcelExport'];
        this.selectionSettings = { type: 'Multiple', enableSimpleMultiRowSelection: true };
    }

    toolbarClick(args: ClickEventArgs) {
        if (args.item.id === 'Grid_pdfexport') {
            const selectedRecords = this.grid.getSelectedRecords();
            const exportProperties = {
                dataSource: selectedRecords
            };
            this.grid.pdfExport(exportProperties);
        } else if (args.item.id === 'Grid_excelexport') {
            const selectedRecords = this.grid.getSelectedRecords();
            const exportProperties = {
                dataSource: selectedRecords
            };
            this.grid.excelExport(exportProperties);
        }
    }
}

```

{% endtab %}

## Export hidden columns

The excel export provides an option to export hidden columns of grid by defining [`includeHiddenColumn`](../../api/grid/excelExportProperties/#includehiddencolumn) as **true**.

{% tab template="grid/excel-exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px'
               [allowExcelExport]='true' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150 [visible]='false'></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['ExcelExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            const excelExportProperties: ExcelExportProperties = {
                includeHiddenColumn: true
            };
            this.grid.excelExport(excelExportProperties);
        }
    }
}

```

{% endtab %}

## Show or hide columns

You can show a hidden column or hide a visible column while printing the grid using [`toolbarClick`](../../api/grid/#toolbarclick) and [`excelExportComplete`](../../api/grid/#excelexportcomplete) events.

In the [`toolbarClick`](../../api/grid/#toolbarclick) event, based on **args.item.id** as **Grid_excelexport**. We can show or hide columns by setting [`column.visible`](../../api/grid/column/#visible) property to **true** or **false** respectively.

In the excelExportComplete event, We have reversed the state back to the previous state.

In the below example, we have **CustomerID** as a hidden column in the grid. While exporting, we have changed **CustomerID** to visible column and **ShipCity** as hidden column.

{% tab template="grid/excel-exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ToolbarService, ExcelExportService, Column } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px' [allowExcelExport]='true'
    (excelExportComplete)='excelExportComplete()' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [visible]='false' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['ExcelExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            (this.grid.columns[1] as Column).visible = true;
            (this.grid.columns[3] as Column).visible = false;
            this.grid.excelExport();
        }
    }

    excelExportComplete(): void {
        (this.grid.columns[1] as Column).visible = false;
        (this.grid.columns[3] as Column).visible = true;
    }
}

```

{% endtab %}

## Export with filter options

The excel export provides an option to export with filter option in excel by defining `enableFilter` as **true** .
It requires the [`allowFiltering`](../../api/grid/#allowfiltering) to be true.
{% tab template="grid/excel-exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [allowFiltering]='true' [toolbar]='toolbarOptions' height='272px'
               [allowExcelExport]='true' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150 [visible]='false'></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['ExcelExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            const excelExportProperties: ExcelExportProperties = {
                enableFilter: true
            };
            this.grid.excelExport(excelExportProperties);
        }
    }
}

```

{% endtab %}

## Exporting grouped records

The excel export provides outline option for grouped records which hides the detailed data for better viewing.
In grid, we have provided the outline option for the exported document when the data's are grouped.

{% tab template="grid/excel-exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, GroupService, PageService, GroupSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='220px' [allowGrouping]='true'
     [groupSettings]='groupOptions' [allowPaging]='true' [allowExcelExport]='true' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [PageService, GroupService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid') public grid: GridComponent;
    public groupOptions: GroupSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['ExcelExport'];
        this.groupOptions = { columns: ['CustomerID', 'ShipCity'] };
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            this.grid.excelExport();
        }
    }
}

```

{% endtab %}

## Define file name

You can assign the file name for the exported document by defining [`fileName`](../../api/grid/excelExportProperties/#filename) property in [`excelExportProperties`](../../api/grid/excelExportProperties).

{% tab template="grid/excel-exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px'
               [allowExcelExport]='true' (toolbarClick)='toolbarClick($event)'>
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
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['ExcelExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            const excelExportProperties: ExcelExportProperties = {
                fileName: 'new.xlsx'
            };
            this.grid.excelExport(excelExportProperties);
        }
    }
}

```

{% endtab %}