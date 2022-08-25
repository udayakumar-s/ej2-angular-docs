

import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeDetails } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';
import { Query } from '@syncfusion/ej2-data';

let jobRole: { [key: string]: Object }[] = [
  { role: 'TeamLead', destId: '0' },
  { role: 'Manager', destId: '1' },
  { role: 'Engineer', destId: '2' },
  { role: 'Sales', destId: '3' },
  { role: 'Support', destId: '4' },
];

let salaryDetails: { [key: string]: Object }[] = [
  { salary: '11000', destId: '1' },
  { salary: '13500', destId: '2' },
  { salary: '16500', destId: '2' },
  { salary: '18500', destId: '1' },
  { salary: '21500', destId: '2' },
  { salary: '23000', destId: '2' },
];


@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar'(load)="load($event)">
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right'
                     isPrimaryKey='true' width=120></e-column>
                    <e-column field='Role' headerText='Role' width=120 editType= 'dropdownedit' [edit]='roleParams'></e-column>
                    <e-column field='Salary' headerText='Salary' textAlign= 'Right'
                     editType= 'dropdownedit' width=160 [edit]='salaryParams'></e-column>
                    <e-column field='Address' headerText='Address' width=160></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data: object[];
    public rules: object;
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public roleParams: IEditCell;
    public salaryParams: IEditCell;
    public valChange(args) {
        window['role'] = args.value;
    }
    @ViewChild('grid')
    public grid: GridComponent;

    public ngOnInit(): void {
        (window as any).role = '';
        this.data = employeeDetails;
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.roleParams = {
            params: {
                query: new Query(),
                dataSource: jobRole,
                fields: { value: 'role', text: 'role' },
                allowFiltering: true,
                change: this.valChange
            }
        };
        this.salaryParams = {
            params: {
                query: new Query(),
                dataSource: salaryDetails,
                fields: { value: 'salary', text: 'salary' },
                allowFiltering: true
            }
        };
  }

public customFn(args) {
    switch (window['role']) {
        case 'Engineer':
            if (args.value > 10000 && args.value < 15000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary';
            }
        break;

        case 'TeamLead':
            if (args.value > 15000 && args.value < 20000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary';
            }
        break;

        case 'Manager':
            if (args.value > 20000 && args.value < 25000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid Manager Salary';
            }
        break;

        case 'Sales':
            if (args.value > 5000 && args.value < 25000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid Manager Salary';
            }
        break;

        case 'Support':
            if (args.value > 10000 && args.value < 19000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid Manager Salary';
        }
        break;
    }
    return false;
  }

    load(): void {
        var column = this.grid.getColumnByField('Salary');
        column.validationRules = {
            required: [this.customFn, window['Please enter valid salary']],
       };
    }
}



