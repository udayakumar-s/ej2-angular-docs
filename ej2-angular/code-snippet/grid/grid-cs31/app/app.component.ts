import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { RowDataBoundEventArgs, EditSettingsModel, GridComponent, PageSettingsModel, } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' (rowDataBound)='rowDataBound($event)' [editSettings]='editSettings' allowPaging="true" [pageSettings]="pageSettings">
                <e-columns>
                    <e-column field='S.No' textAlign='Center' width=120></e-column>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=140></e-column>
                </e-columns>
               </ejs-grid>`,
})
export class AppComponent implements OnInit {
    public data: object[];
    public editSettings: EditSettingsModel;
    public pageSettings: PageSettingsModel;
    @ViewChild('grid')
    public grid: GridComponent;
    ngOnInit(): void {
        this.data = data;
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
        };
        this.pageSettings = { pageSize: 8 };
    }
    rowDataBound(args: RowDataBoundEventArgs) {
        var rowIndex = parseInt(args.row.getAttribute('aria-rowIndex'));
        var currentPageNumber = this.grid.pageSettings.currentPage;
        var pageSize = this.grid.pageSettings.pageSize;
        var startIndex = (currentPageNumber - 1) * pageSize;
        args.row.querySelector('.e-rowcell').innerHTML = (
            startIndex + rowIndex
        ).toString();
    }
}
