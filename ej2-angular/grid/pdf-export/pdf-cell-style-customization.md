# PDF Cell Style Customization

## Conditional cell formatting

Grid cells in the exported PDF can be customized or formatted using [`pdfQueryCellInfo`](../../api/grid/#pdfquerycellinfo) event. In this event, we can format the grid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for **Freight** column in the exported document by **args.cell** and **backgroundColor** property.

{% tab template="grid/exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px'
            [allowPdfExport]='true' (queryCellInfo)='queryCellInfo($event)'
    (pdfQueryCellInfo)='pdfQueryCellInfo($event)' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='Freight' headerText='Freight' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            this.grid.pdfExport();
        }
    }

    pdfQueryCellInfo(args: any): void {
        if (args.column.field === 'Freight') {
            if (args.value < 30) {
                args.style = { backgroundColor: '#99ffcc' };
            } else if (args.value < 60) {
                args.style = { backgroundColor: '#ffffb3' };
            } else {
                args.style = { backgroundColor: '#ff704d' };
            }
        }
    }

    queryCellInfo(args: any): void {
        if (args.column.field === 'Freight') {
            if (args.data[args.column.field] < 30) {
                args.cell.bgColor = '#99ffcc';
            } else if (args.data[args.column.field] < 60) {
                args.cell.bgColor = '#ffffb3';
            } else {
                args.cell.bgColor = '#ff704d';
            }
        }
    }
}


```

{% endtab %}

## Theme

PDF export provides an option to include theme for exported PDF document.

To apply theme in exported PDF, define the [`theme`](../../api/grid/pdfExportProperties/#theme) in [`pdfExportProperties`](../../api/grid/pdfExportProperties/) .

{% tab template="grid/exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, PageService, PdfExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true' [toolbar]='toolbarOptions' height='220px'
     [allowPaging]='true' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
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
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const pdfExportProperties: PdfExportProperties = {
                theme: {
                    header: {
                        fontColor: '#64FA50', fontName: 'Calibri', fontSize: 17, bold: true,
                        border: { color: '#64FA50', dashStyle: 'Solid' }
                    },
                    record: {
                        fontColor: '#64FA50', fontName: 'Calibri', fontSize: 17, bold: true
                    },
                    caption: {
                        fontColor: '#64FA50', fontName: 'Calibri', fontSize: 17, bold: true
                    }
                }
            };
            this.grid.pdfExport(pdfExportProperties);
        }
    }
}

```

{% endtab %}

> By default, material theme is applied to exported PDF document.