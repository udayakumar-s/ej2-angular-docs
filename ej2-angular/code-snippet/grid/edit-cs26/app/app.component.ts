

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button (click)="btnClick($event)">Grid is Addable</button>
                <ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' (actionBegin)="actionBegin($event)" height='240px'>
                  <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='Role' headerText='Role' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                  </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public isAddable: boolean = true;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    actionBegin(args) {
        if (args.requestType == 'beginEdit') {
            if (args.rowData['Role'].toLowerCase() == 'employee') {
                args.cancel = true;
            }
        }
        if (args.requestType == 'delete') {
            if (args.data[0]['Role'].toLowerCase() == 'employee') {
                args.cancel = true;
            }
        }
        if (args.requestType == 'add') {
            if (!this.isAddable) {
                args.cancel = true;
            }
        }
    }
    btnClick(args) {
        args.target.innerText == 'Grid is Addable' ? (args.target.innerText = 'Grid is Not Addable') : (args.target.innerText = 'Grid is Addable');
        this.isAddable = !this.isAddable;
    }
}



