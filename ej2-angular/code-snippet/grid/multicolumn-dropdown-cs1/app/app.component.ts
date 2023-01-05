

import { Component, OnInit, ViewChild } from '@angular/core';
import { EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource';
import { Query } from '@syncfusion/ej2-data';
import { Column, EditSettingsModel, PageSettingsModel, ToolbarItems, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [allowPaging]='true' [editSettings]='editSettings' [toolbar]='toolbar'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string' width=120></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=300 [edit]='params' ></e-column>
                </e-columns>
               </ejs-grid>`,
    providers: [ToolbarService, EditService, PageService],
})

export class AppComponent implements OnInit {
    public data: object[];
    @ViewChild('grid') public grid: GridComponent;
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public element: HTMLElement;
    public dropdownobj: DropDownList;
    public params: IEditCell;

    public create = () => {
        this.element = document.createElement('input');
        return this.element;
    };
    public read = () => {
        return this.dropdownobj.value;
    };
    public destroy = () => {
        this.dropdownobj.destroy();
    };
    public write = (args) => {
        this.dropdownobj = new DropDownList({
            dataSource:data,
            value: args.rowData[args.column.field],
            query: new Query().select(['EmployeeID', 'ShipCountry']).take(10),
            fields: { text: 'ShipCountry', value: 'ShipCountry' },
            placeholder: 'Select a Country',
            headerTemplate: '<table><tr><th>EmployeeID</th><th>ShipCountry</th></tr></table>',
            itemTemplate: '<div class="e-grid"><table class="e-table"><tbody><tr><td class="e-rowcell">${EmployeeID}</td><td class="e-rowcell">${ShipCountry}</td></tr> </tbody></table></div>'
        });
        this.dropdownobj.appendTo(this.element);
    };

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.params = {
            create: this.create,
            read: this.read,
            destroy: this.destroy,
            write: this.write
        };
    }
}



