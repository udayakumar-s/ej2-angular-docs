

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    templateUrl: 'app/app.template.html'
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public selectedRecord: object = {};
    public numericParams: IEditCell;
    @ViewChild('grid') public gridObj: GridComponent;

    actionBegin(args): void {
        if (args.requestType === 'beginEdit') {
            this.selectedRecord = {};
            this.selectedRecord = args.rowData;
        }
    }
    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Delete', 'Update', 'Cancel'];
        this.numericParams = { params: { change: changeFn.bind(this) } };
    }
}

function changeFn(args): void {
    const Freight = 'Freight';
    this.selectedRecord[Freight] = args.value;
    this.gridObj.aggregateModule.refresh(this.selectedRecord);
}



