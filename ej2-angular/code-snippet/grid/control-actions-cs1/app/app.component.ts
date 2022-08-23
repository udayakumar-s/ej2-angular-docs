

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell, ReorderService, EditService } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowReordering]="true" [editSettings]='editSettings'
               [allowSorting]="true" [allowFiltering]="true" [allowGrouping]="true" height="220px">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 [allowGrouping]="false"></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right'
                     format='C2' width=90 [allowFiltering]="false"></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right'
                     format='yMd' width=120 [allowSorting]="false"></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }
}



