

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: string[];
    public selectedRecord: object = {};
    public numericParams?: IEditCell;
    public orderIDRules?: object;
    public customerIDRules?: object;
    @ViewChild('grid') public gridObj?: GridComponent;

    actionBegin(args: any): void {
        if ((args as any).requestType === 'beginEdit') {
            this.selectedRecord = (args as any).rowData;
        }
    }
    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Normal' };
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: 3 };
        this.toolbar = ['Delete', 'Update', 'Cancel'];
        this.numericParams = { params: { change: ((args: any) => {
              (this.selectedRecord as any)['Freight'] = (args as any).value;
        (this.gridObj as any).aggregateModule.refresh(this.selectedRecord);
        }).bind(this)}
        };
    }
  
}



