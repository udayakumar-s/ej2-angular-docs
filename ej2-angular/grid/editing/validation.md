# Validation

## Column validation

Column validation allows you to validate the edited or added row data and it display errors for invalid fields before saving data.
Grid uses **Form Validator** component for column validation.
You can set validation rules by defining the [`columns.validationRules`](../../api/grid/column/#validationrules).

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                     isPrimaryKey='true' [validationRules]='orderIDRules' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [validationRules]='customerIDRules' width=120></e-column>
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
    public orderIDRules: object;
    public customerIDRules: object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: 3 };
    }
}

```

{% endtab %}

## Custom validation

You can define your own custom validation rules for the specific columns by using **Form Validator custom rules**.

In the below demo, custom validation applied for **CustomerID** column.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                     isPrimaryKey='true' [validationRules]='orderIDRules' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [validationRules]='customerIDRules' width=120></e-column>
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
    public orderIDRules: object;
    public customerIDRules: object;
    public value = 'value';

    public customFn: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
        return args[this.value].length >= 5;
    }


    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: [this.customFn, 'Need atleast 5 letters'] };
    }
}

```

{% endtab %}

### Custom validation based on dropdown change

You can apply validation rules and messages to a column based on another column value in edit mode. You can achieve this requirement by using the custom validation feature of Grid.

In the following sample, dropdownlist edit type is used for the **Role** and **Salary** columns. Here, you can apply the custom validation in the **Salary** column based on the value selected in the **Role** column.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
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

```

{% endtab %}