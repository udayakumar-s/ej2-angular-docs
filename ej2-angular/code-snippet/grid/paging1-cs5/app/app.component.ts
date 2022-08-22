

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='PagingGrid' [dataSource]='data' (load)='load()' [allowPaging]='true' height=325>
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
    @ViewChild('grid') public Grid: GridComponent;
    ngOnInit(): void {
        this.data = data;
    }
    load() {
        const rowHeight: number = this.Grid.getRowHeight();  // height of the each row
        const gridHeight: any = this.Grid.height;  // grid height
        const pageSize: number = this.Grid.pageSettings.pageSize;   // initial page size
        const pageResize: any = (gridHeight - (pageSize * rowHeight)) / rowHeight; // new page size is obtained here
        this.Grid.pageSettings.pageSize = pageSize + Math.round(pageResize);
    }
}



