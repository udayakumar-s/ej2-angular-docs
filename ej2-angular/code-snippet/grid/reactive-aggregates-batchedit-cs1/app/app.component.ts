

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel, EditSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: string[];
    public groupOptions?: GroupSettingsModel;
    public orderIDRules?: object;
    public customerIDRules?: object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Batch' };
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: 3 };
        this.toolbar = ['Delete', 'Update', 'Cancel'];
        this.groupOptions = { showDropArea: false, columns: ['ShipCountry'] };
    }
}



