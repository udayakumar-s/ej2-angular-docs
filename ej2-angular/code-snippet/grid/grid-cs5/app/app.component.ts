

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' (dataBound)="dataBound($event)">
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data: object[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = [
            { OrderID: 10248, CustomerID: 'VINET', Freight: 32.3800, OrderDate: '1996-07-02T00:00:00.000Z' },
            { OrderID: 10249, CustomerID: 'TOMSP', Freight: 32.3800, OrderDate: '1996-07-19T00:00:00.000Z' },
            { OrderID: 10250, CustomerID: 'HANAR', Freight: 32.3800, OrderDate: '1996-07-22T00:00:00.000Z' }];
    }

    dataBound(args: any) {
        for (const cols of this.grid.columns) {
            if ((cols as any).field === 'OrderID') {
                (cols as any).width = 120;
            }
            if ((cols as any).field === 'OrderDate') {
                (cols as any).type = 'date';
                (cols as any).format = 'yMd';
            }
            if ((cols as any).field === 'Freight') {
                (cols as any).format = 'P2';
            }
        }
        this.grid.refreshColumns();
    }
}



