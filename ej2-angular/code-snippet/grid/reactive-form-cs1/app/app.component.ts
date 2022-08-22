

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { DialogEditEventArgs, SaveEventArgs, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DataUtil } from '@syncfusion/ej2-data';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: `app/reactive-form.html`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public shipCountryDistinctData: object[];
    public orderForm: FormGroup;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true );
    }

    createFormGroup(data1: IOrderModel): FormGroup {
        return new FormGroup({
            OrderID: new FormControl(data1.OrderID, Validators.required),
            OrderDate: new FormControl(data1.OrderDate, Validators.required),
            CustomerID: new FormControl(data1.CustomerID, Validators.required),
            Freight: new FormControl(data1.Freight),
            ShipCountry: new FormControl(data1.ShipCountry)
        });
    }


    actionBegin(args: SaveEventArgs): void {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.orderForm = this.createFormGroup(args.rowData);
        }
        if (args.requestType === 'save') {
            if (this.orderForm.valid) {
                args.data = this.orderForm.value;
            } else {
                args.cancel = true;
            }
        }
    }

    actionComplete(args: DialogEditEventArgs): void {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            // Set initail Focus
            if (args.requestType === 'beginEdit') {
                (args.form.elements.namedItem('CustomerID') as HTMLInputElement).focus();
            } else if (args.requestType === 'add') {
                (args.form.elements.namedItem('OrderID') as HTMLInputElement).focus();
            }
        }
    }

    public focusIn(target: HTMLElement): void {
        target.parentElement.classList.add('e-input-focus');
    }

    public focusOut(target: HTMLElement): void {
        target.parentElement.classList.remove('e-input-focus');
    }

    get OrderID(): AbstractControl  { return this.orderForm.get('OrderID'); }

    get CustomerID(): AbstractControl { return this.orderForm.get('CustomerID'); }

}

export interface IOrderModel {
    OrderID?: number;
    CustomerID?: string;
    OrderDate?: Date;
    Freight?: number;
    ShipCountry?: string;
}



