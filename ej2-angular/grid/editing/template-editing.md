# Forms

## Reactive Forms

[`Reactive`](https://angular.io/guide/reactive-forms) Forms is a model-driven approach to create and manipulate the form controls. You can use reactive form to add and update grid records. To use reactive forms for editing operation, you can take leverage of the template support of dialog or inline edit mode. Setting the [`editSettings.mode`](../../api/grid/editSettings/#mode) as **Normal/Dialog** and **editSettingsTemplate** as template variable of NgTemplate to define the grid editors.

In the below sample, We have created the **FormGroup** with **FormControls** for each columns, in the [`actionBegin`](../../api/grid/#actionbegin)  event. While saving, we have validated the formgroup and updated the grid with the edited data from the FormGroup object.

{% tab template="grid/reactive-form", sourceFiles="app/app.component.ts,app/reactive-form.html,app/app.module.ts,app/main.ts" %}

```typescript
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

```

{% endtab %}

## Template-driven forms

[`Template-driven`](https://angular.io/guide/forms#template-driven-forms) forms is a template-driven approach to create and manipulate the form controls. You can use template-driven form to add and update grid records. To use template-driven forms for editing operation, you can take leverage of the template support of dialog or inline edit mode. Setting the [`editSettings.mode`](../../api/grid/editSettings/#mode) as **Normal/Dialog** and **editSettingsTemplate** as template variable of NgTemplate to define the grid editors.

In some cases, you want to add new field editors in the dialog which are not present in the column model. In that situation the dialog template will help us to customize the default edit dialog.

In the below sample, We have created the **FormGroup** by using **ngForm** directive. While saving, we have validated the formgroup and updated the grid with the edited model data.

{% tab template="grid/dialogTemplate", sourceFiles="app/app.component.ts,app/template-driven.html,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { DialogEditEventArgs, SaveEventArgs, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DataUtil } from '@syncfusion/ej2-data';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: `app/template-driven.html`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public orderData: object;
    @ViewChild('orderForm') public orderForm: FormGroup;
    public shipCityDistinctData: object[];
    public shipCountryDistinctData: object[];

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete'];
        this.shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
        this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true );
    }

    actionBegin(args: SaveEventArgs): void {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.orderData = Object.assign({}, args.rowData);;
        }
        if (args.requestType === 'save') {
            if (this.orderForm.valid) {
                args.data = this.orderData;
            } else {
                args.cancel = true;
            }
        }
    }

    actionComplete(args: DialogEditEventArgs): void {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            args.form.ej2_instances[0].rules = {};
            // Set initail Focus
            if (args.requestType === 'beginEdit') {
                (args.form.elements.namedItem('CustomerID') as HTMLInputElement).focus();
            }
        }
    }
}

export interface IOrderModel {
    OrderID?: number;
    CustomerID?: string;
    ShipCity?: string;
    OrderDate?: Date;
    Freight?: number;
    ShipCountry?: string;
    ShipAddress?: string;
}

```

{% endtab %}

> The form editors should have **name** attribute.

## Template context

While using the edit template, you can access the row information inside the NgTemplate and you can bind the attributes or values or elements based on this row information.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|-------|
| <kbd>isAdd</kbd> | A Boolean property; it defines whether the current row should be a new record or not. |

In the following code example, the **OrderID** textbox has been disabled by using the **isAdd** property.

```html
// The disabled attributes will be added based on the isAdd property.
<input formControlName="OrderID" id="OrderID" name="OrderID" type="text" [attr.disabled]="!data.isAdd ? '' : null">

```

The following code example illustrates rendering the **OrderID** textbox, when a new record is added.

```html

<div class="form-group col-md-6" *ngIf='data.isAdd'>
    <div class="e-float-input e-control-wrapper">
        <input formControlName="OrderID" id="OrderID" name="OrderID" type="text" [attr.disabled]="!data.isAdd ? '' : null">
        <span class="e-float-line"></span>
        <label class="e-float-text e-label-top" for="OrderID"> Order ID</label>
    </div>
</div>

```

## Set focus to editor

By default, the first input element in the dialog will be focused while opening the dialog.
If the first input element is in disabled or hidden state then you need to focused the valid input element in the
[`actionComplete`](../../api/grid/#actioncomplete)
event based on **requestType** as **beginEdit**.

```typescript

    actionComplete(args: DialogEditEventArgs) {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('CustomerID')as HTMLInputElement).focus();
        }
    }

```

## Disable form validation

If you have interested to use [`angular form validation`](https://angular.io/guide/form-validation) then you need to disable the default validation rules in  the [`actionComplete`](../../api/grid/#actioncomplete) event.

```typescript

    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable the Validation Rules
            args.form.ej2_instances[0].rules = {};
        }
    }

```

## Adding validation rules for custom editors

If you have interested to use our default form validation, the validation rules for the fields which are not present in the column model need to be add in  the [`actionComplete`](../../api/grid/#actioncomplete) event.

```typescript

    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('Freight', {max: 500});
        }
    }

```

## Render tab component inside the dialog template

You can use [`Tab`](../../../tab/index.html) component inside dialog edit UI using dialog template feature. The dialog template feature can be enabled by defining  [`editSettings.mode`](../../../api/grid/editSettings/#mode) as `Dialog` and [`editSettingsTemplate`](../../../api/grid/editSettings/#template) as template variable to define the editors.

To include tab components in the Dialog, please ensure the following steps:

**Step 1**:

To render the Tab component, use the [`editSettingsTemplate`](../../../api/grid/editSettings/#template) of the Grid. Inside the content template of the tab items define
the input elements.

```html

    <ejs-tab #tab id="tab_wizard" showCloseButton=false (selecting)='selecting($event)'>
        <e-tabitems>
            <e-tabitem [header]="{ 'text': 'Details' }" >
            <ng-template #content>
            <div id="tab1">
        <div class="form-row">
            <div class="form-group col-md-6">
                <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': OrderID.invalid && (OrderID.dirty || OrderID.touched)}">
                    <input [(ngModel)]="data.OrderID" required id="OrderID" name="OrderID" type="text" [attr.disabled]="!data.isAdd ? '' : null" #OrderID="ngModel">
                    <span class="e-float-line"></span>
                    <label class="e-float-text e-label-top" for="OrderID"> Order ID</label>
                </div>
                <div id="OrderIDError" *ngIf='OrderID.invalid && (OrderID.dirty || OrderID.touched)'>
                    <label class="e-error" for="OrderID" id="OrderID-info" style="display: block;">*Order ID is required</label>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': CustomerID.invalid && (CustomerID.dirty || CustomerID.touched)}">
                    <input [(ngModel)]="data.CustomerID" required id="CustomerID" name="CustomerID" type="text" #CustomerID="ngModel">
                    <span class="e-float-line"></span>
                    <label class="e-float-text e-label-top" for="CustomerID">Customer Name</label>
                </div>
                <div id="CustomerIDError" *ngIf='CustomerID.invalid && (CustomerID.dirty || CustomerID.touched)'>
                    <label class="e-error" for="CustomerID" id="CustomerID-info" style="display: block;">*Customer Name is required</label>
                </div>
            </div>
        </div>
        <button ejs-button type="button" cssClass="e-info e-btn" style="float: right" (click)="nextBtn($event)" >next</button>
    </div>
            </ng-template></e-tabitem>
            <e-tabitem [header]="{ 'text': 'Verify' }">
            <ng-template #content>
               <div id="tab2" style='display: none'>
        <div class="form-row" >
            <div class="form-group col-md-6">
                <ejs-dropdownlist id="ShipCountry" name="ShipCountry" [(ngModel)]="data.ShipCountry" [dataSource]='shipCountryDistinctData' [fields]="{text: 'ShipCountry', value: 'ShipCountry' }" placeholder="Ship Country" popupHeight='300px' floatLabelType='Always'></ejs-dropdownlist>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <ejs-checkbox #Verified name="Verified" id="Verified" label="Verified" [checked]="data.Verified" ></ejs-checkbox>
            </div>
        </div>
        <button ejs-button type="button" cssClass="e-info e-btn" style="float: right" (click)='submitBtn($event)'>submit</button>
    </div>
            </ng-template>
            </e-tabitem>
        </e-tabitems>
    </ejs-tab>

```

The following example, we have rendered tab control inside the edit dialog. The tab control has two tabs and once you fill the first tab and navigate to second one. The validation for first tab was done before navigate to second.

{% tab template="grid/tablikeedit", sourceFiles="app/app.component.ts,app/tablikeedit.html,app/app.module.ts,app/main.ts" %}

```typescript

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

    public data: Object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public shipCountryDistinctData: Object;
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

```

{% endtab %}