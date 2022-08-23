

import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { data } from './datasource';
import { Column, EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='OrderDate' headerText='Order Date' type= 'date' format= 'yMd' [edit]='dpParams' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public elem: HTMLElement;
    public datePickerObj: DatePicker;
    public dpParams: IEditCell;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.dpParams = {
            create: () => {
                this.elem = document.createElement('input');
                return this.elem;
            },
            read: () => {
                return this.datePickerObj.value;
            },
            destroy: () => {
                this.datePickerObj.destroy();
            },
            write: (args: { rowData: object, column: Column }) => {
                this.datePickerObj = new DatePicker({
                    value: new Date(args.rowData[args.column.field]),
                    floatLabelType: 'Never'
                });
                this.datePickerObj.appendTo(this.elem);
            }
        };
    }
}



