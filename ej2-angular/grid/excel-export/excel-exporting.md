---
title: "Excel Export"
component: "Grid"
description: "Documentation on exporting DataGrid content to Excel and customizing the exported document with multi-export, headers and footers, and file name changes."
---

# Excel Export

The excel export allows exporting Grid data to Excel document. You need to use the
 [`excelExport`](../../api/grid/#excelexport) method for exporting. To enable Excel export in the grid, set the
 [`allowExcelExport`](../../api/grid/#allowexcelexport) as true.

To use excel export, inject **ExcelExportService** in the provider section of **AppModule**.

{% tab template="grid/excel-exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';
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
            this.grid.excelExport();
        }
    }
}

```

{% endtab %}

## Show spinner while exporting

You can show/ hide spinner component while exporting the grid using **showSpinner**/ **hideSpinner** methods. You can use [`toolbarClick`](../../api/grid/#toolbarclick) event to show spinner before exporting and hide a spinner in the [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) event after the exporting.

In the [`toolbarClick`](../../api/grid/#toolbarclick) event, based on the parameter **args.item.id** as **Grid_pdfexport** or **Grid_excelexport** we can call the **showSpinner** method from grid instance.

In the [`pdfExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) event, We can call the **hideSpinner** method.

In the below demo, we have rendered the default spinner component when exporting the grid.

{% tab template="grid/exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ExcelExportService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true'
    [toolbar]='toolbarOptions' height='272px' [allowPdfExport]='true' [allowExcelExport]='true'
    (excelExportComplete)='excelExportComplete()' (pdfExportComplete)='pdfExportComplete()'
    (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [visible]='false' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipCountry' headerText='ShipCountry' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [ExcelExportService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid')  public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport', 'ExcelExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            this.grid.showSpinner();
            this.grid.pdfExport();
        } else if (args.item.id === 'Grid_excelexport') {
            this.grid.showSpinner();
            this.grid.excelExport();
        }
    }

    pdfExportComplete(): void {
        this.grid.hideSpinner();
    }
    excelExportComplete(): void {
        this.grid.hideSpinner();
    }
}


```

{% endtab %}

## Custom data source

The excel export provides an option to define datasource dynamically before exporting.
To export data dynamically, define the [`dataSource`](../../api/grid/excelExportProperties/#datasource) in [`excelExportProperties`](../../api/grid/excelExportProperties/).

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
                dataSource: data
            };
            this.grid.excelExport(excelExportProperties);
        }
    }
}

```

{% endtab %}

## Passing additional parameters to the server when exporting

You can pass the additional parameter in the [`query`](../../api/grid/#query) property by invoking **addParams** method. In the [`toolbarClick`](../../api/grid/#toolbarclick) event, you can define params as key and value pair so it will receive at the server side when exporting.

In the below example, we have passed **recordcount** as **12** using **addParams** method

{% tab template="grid/exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ToolbarService, PdfExportService, ExcelExportService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { Query } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true'
    [toolbar]='toolbarOptions' height='272px' [allowPdfExport]='true' [allowExcelExport]='true'
    (excelExportComplete)='excelExportComplete()' (pdfExportComplete)='pdfExportComplete()'
    (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [visible]='false' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipCountry' headerText='ShipCountry' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [ToolbarService, PdfExportService, ExcelExportService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid') public grid: GridComponent;
    public queryClone: any;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport', 'ExcelExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            this.queryClone = this.grid.query;
            this.grid.query = new Query().addParams('recordcount', '12');
            this.grid.pdfExport();
        } else if (args.item.id === 'Grid_excelexport') {
            this.queryClone = this.grid.query;
            this.grid.query = new Query().addParams('recordcount', '12');
            this.grid.excelExport();
        }
    }

    pdfExportComplete(): void {
        this.grid.query = this.queryClone;
    }
    excelExportComplete(): void {
        this.grid.query = this.queryClone;
    }
}

```

{% endtab %}

## See Also

* [Exporting Grid in Cordova application](../how-to/exporting-grid-in-cordova-application)
* [How to get grid display numbers without grouping and same format to be exported to excel in Angular Grid](https://www.syncfusion.com/forums/151524/how-to-get-grid-display-numbers-without-grouping-and-same-format-to-be-exported-to-excel-in)