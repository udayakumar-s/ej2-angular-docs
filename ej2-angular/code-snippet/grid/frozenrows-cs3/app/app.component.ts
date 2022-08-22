

import { Grid, Freeze, Selection, Edit, Toolbar, DialogEditEventArgs, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='315' [toolbar]='toolbar' [editSettings]='editSettings' allowSelection='false' enableHover='false' (actionComplete)="actionComplete($event)">
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true'></e-column>
                        <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right' [validationRules]='validationrules'></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width='150'></e-column>
                        <e-column field='ShipAddress' headerText='Ship Address' width='170'></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' width='150' isFrozen='true'></e-column>
                        <e-column field='Freight' headerText='Freight' width='120' [validationRules]='validationrules' textAlign='Right'></e-column>
                    </e-columns>
            </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbar: string[];
    public editSettings: EditSettingsModel;
    public validationrules: Object;

    ngOnInit(): void {
        this.data = data;
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.validationrules = { required: true };
    }

    actionComplete(args) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            // Add Validation Rules
            args.movableForm.ej2_instances[0].addRules('Freight', { max: 200 });
            args.movableForm.ej2_instances[0].addRules('EmployeeID', { max: 20 });
        }
    }
}



