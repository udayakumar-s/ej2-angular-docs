# Excel Cell Style Customization

## Conditional cell formatting

Grid cells in the exported Excel can be customized or formatted using [`excelQueryCellInfo`](../../api/grid/excelQueryCellInfoEventArgs) event. In this event, we can format the grid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for **Freight** column in the exported excel by **args.cell** and **backColor** property.

{% tab template="grid/excel-exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px' [allowExcelExport]='true'
     (queryCellInfo)='queryCellInfo($event)' (excelQueryCellInfo)='excelQueryCellInfo($event)' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='Freight' headerText='Freight' width=150></e-column>
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
            this.grid.excelExport();
        }
    }

    excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs): void {
        if (args.column.field === 'Freight') {
            if (args.value < 30) {
                args.style = { backColor: '#99ffcc' };
            } else if (args.value < 60) {
                args.style = { backColor: '#ffffb3' };
            } else {
                args.style = { backColor: '#ff704d' };
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

The excel export provides an option to include theme for exported excel document.

To apply theme in exported Excel, define the [`theme`](../../api/grid/excelExportProperties/#theme) in [`excelExportProperties`](../../api/grid/excelExportProperties/) .

{% tab template="grid/excel-exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px' [allowExcelExport]='true'
     (toolbarClick)='toolbarClick($event)'>
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
                theme:
                    {
                        header: { fontName: 'Segoe UI', fontColor: '#666666' },
                        record: { fontName: 'Segoe UI', fontColor: '#666666' },
                        caption: { fontName: 'Segoe UI', fontColor: '#666666' }
                    }
            };
            this.grid.excelExport(excelExportProperties);
        }
    }
}

```

{% endtab %}

>By default, material theme is applied to exported excel document.

## Rotate a header text to a certain degree in the exported grid

The DataGrid has support to customize the column header styles such as changing text orientation, the font color, and so on in the exported Excel file. To achieve this requirement, use the [excelHeaderQueryCellInfo](../../api/grid#excelheaderquerycellinfo) event of the Grid.

The `excelHeaderQueryCellInfo` will be triggered when creating a column header for the excel document to be exported. Customize the column header in this event.

In the following demo, using the `rotation` property of the style argument in the `excelHeaderQueryCellInfo` event, you can rotate the header text of the column header in the excel exported document.

{% tab template="grid/grouping", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-root',
    template: `
              <ejs-dropdownlist id='ddlelement' #ddlelement placeholder='Select a degree' [dataSource]='degree'>
                </ejs-dropdownlist>
                <ejs-grid #grid id="Grid" [dataSource]='data' [height]='240' (created)='setHeaderHeight($event)' (excelQueryCellInfo)='excelQueryCellInfo($event)' (excelHeaderQueryCellInfo)='excelHeaderQueryCellInfo($event)' (toolbarClick)='toolbarClick($event)' [toolbar]='toolbarOptions' [allowExcelExport]='true'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' [customAttributes]='customAttributes' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Center'
                         format='C2' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100 ></e-column>
                    </e-columns>
                </ejs-grid>
               `
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    public degree: number[];
    public customAttributes: object;
    @ViewChild('grid') public grid: GridComponent;
    @ViewChild('ddlelement') public dropDownListObject: DropDownListComponent;

    ngOnInit(): void {
        this.data = data;
        this.customAttributes = { class: 'orientationcss' };
        this.toolbarOptions = ['ExcelExport'];
        this.degree = [90, 180, 45, 135];
    }
    setHeaderHeight(args) {
        const textWidth = document.querySelector('.orientationcss > div').scrollWidth;
        const headerCell: NodeList = document.querySelectorAll('.e-headercell');
        for (let i = 0; i < headerCell.length; i++) {
            (headerCell.item(i) as HTMLElement).style.height = textWidth + 'px';
        }
    }
    excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs): void {
        if (args.column.field == 'Freight') {
            if (args.value < 30) {
                args.style = { backColor: '#99ffcc' };
            }
            else if (args.value < 60) {
                args.style = { backColor: '#ffffb3' };
            }
            else {
                args.style = { backColor: '#ff704d' };
            }
        }
    }

    excelHeaderQueryCellInfo(args): void {
        let textWidth = document.querySelector(".orientationcss > div").scrollWidth;
        if (args.gridCell.column.field == 'Freight') {
            args.style = { backColor: '#99ffcc', vAlign: 'Bottom' };
        }
        else {
            args.style = { vAlign: 'Center', rotation: this.dropDownListObject.value };
        }
        args.cell.cellHeight = textWidth;
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') {
            this.grid.excelExport();
        }
    }
}

```

{% endtab %}
