


import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataUtil } from '@syncfusion/ej2-data';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, GridComponent, DialogEditEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    templateUrl: `./app/tablikeedit.html`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public shipCountryDistinctData: object;
    @ViewChild('grid')
    grid: GridComponent;
    @ViewChild('orderForm')
    orderForm: FormGroup
    @ViewChild('tab')
    tabObj: any;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete'];
        this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true );
    }

    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable deafault valdation.
            args.form.ej2_instances[0].rules = {};
            // Set initail Focus
            if (args.requestType === 'beginEdit') {
                (args.form.elements.namedItem('CustomerID')as HTMLInputElement).focus();
            }
        }
    }

    nextBtn() {
        this.moveNext();
    }

    selecting(e) {
     if(e.isSwiped){
       e.cancel = true;
     }
     if(e.selectingIndex === 1) {
       e.cancel = !this.orderForm.valid;
     }
    }

    moveNext() {
        if (this.orderForm.valid)) {
            this.tabObj.select(1);
        }
    }
    submitBtn() {
        if (this.orderForm.valid) {
            this.grid.endEdit();
        }
    }
}



