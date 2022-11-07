


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



