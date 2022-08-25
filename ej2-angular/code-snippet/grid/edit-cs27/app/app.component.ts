

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel,  GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button ej-button id='edit' (click)='clickEdit()'>Edit</button>
    <button ej-button id='add' (click)='clickAdd()'>Add</button>
    <button ej-button id='delete' (click)='clickDelete()'>Delete</button>
    <button ej-button id='updaterow' (click)='clickUpdateRow()'>Update Row</button>
    <button ej-button id='updatecell' (click)='clickUpdateCell()'>Update cell</button>
               <ejs-grid #grid id="Grid" [dataSource]='data' [editSettings]='editSettings'
           height='210px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120  isPrimaryKey='true'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    public editSettings: EditSettingsModel;
    public data: object[];
    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }

    clickEdit(){
        this.grid.startEdit();
    }
    clickAdd(){
        this.grid.addRecord({ "OrderID": "10248", "CustomerID": "RTER", "ShipCity": "America", "ShipName": "Hanari"  });
    }
    clickDelete(){
        this.grid.deleteRecord();
    }
    clickUpdateRow(){
        this.grid.updateRow(0, { OrderID: 10248, CustomerID: 'RTER', ShipCity: 'America', ShipName: 'Hanari'});
    }
    clickUpdateCell(){
         this.grid.setCellValue((this.grid.currentViewData[0] as any).OrderID,'CustomerID','Value Changed');
    }
}



