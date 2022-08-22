

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, EditSettingsModel, EditService } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' (dataBound)="dataBound($event)">
               </ejs-grid>`,
    providers: [EditService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = [
            { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
            { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
            { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }

    dataBound(args: any) {
        (this.grid.columns[0] as any).isPrimaryKey = 'true';
    }
}



