

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, GridComponent } from '@syncfusion/ej2-angular-grids';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id="grid" [dataSource]='data' height='272px' [allowPaging]="true" [enableHover]="false" [editSettings]='editSettings' [toolbar]='toolbar'
    (created)="created($event)" (load)="load($event)">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                     isPrimaryKey='true' visible='false' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width=150></e-column>
                    <e-column field='OrderDate' headerText='Order Date' editType='datepickeredit' format='yMd' width=150></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
            this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    created = (args) => {
        this.grid.getContentTable().addEventListener('click', (args) => {
            if ((args.target as any).classList.contains('e-rowcell')) {
                this.grid.editModule.editCell(parseInt((args.target as any).getAttribute('index')),
                this.grid.getColumnByIndex(parseInt(args.target.getAttribute('data-colindex'))).field);
            }
        });
    };
    load = (args) => {
        this.grid.element.addEventListener('keydown', (e) => {
            var closesttd = (e.target as any).closest('td');
            if (e.keyCode === 39 && !isNullOrUndefined(closesttd.nextSibling)) {
                this.editACell(closesttd.nextSibling);
            }
            if (e.keyCode === 37 && !isNullOrUndefined(closesttd.previousSibling) &&
                !this.grid.getColumnByIndex(
                    parseInt(closesttd.previousSibling.getAttribute('data-colindex'))).isPrimaryKey)
            {
                this.editACell(closesttd.previousSibling);
            }
            if (e.keyCode === 40 && !isNullOrUndefined(closesttd.closest('tr').nextSibling)) {
                this.editACell(
                    closesttd.closest('tr').nextSibling.querySelectorAll('td')[
                    parseInt(closesttd.getAttribute('data-colindex'))]);
            }
            if ( e.keyCode === 38 && !isNullOrUndefined(closesttd.closest('tr').previousSibling)) {
                this.editACell(
                    closesttd.closest('tr').previousSibling.querySelectorAll('td')[
                     parseInt(closesttd.getAttribute('data-colindex'))]);
            }
        });
    };
    public editACell(args) {
        this.grid.editModule.editCell(
            parseInt(args.getAttribute('index')),
            this.grid.getColumnByIndex(parseInt(args.getAttribute('data-colindex'))).field);
    }
}



