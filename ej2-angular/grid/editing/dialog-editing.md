# Dialog

In Dialog edit mode, when you start editing the currently selected row data will be shown on a dialog.
You can change the cell values and save edited data to the data source.
To enable Dialog edit, set the [`editSettings.mode`](../../api/grid/editSettings/#mode) as **Dialog**.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
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

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
}

```

{% endtab %}

## Customize edit dialog

You can customize the appearance of the edit dialog in the [`actionComplete`](../../api/grid/#actioncomplete) event based on **requestType** as **beginEdit** or **add**.

In the following example, the dialog's properties like header text, showCloseIcon, height have been changed while editing and adding the records.

Also the locale text for the **Save** and **Cancel** buttons has been changed by overriding the default locale strings.

You can refer the Grid [`Default text`](../global-local/) list for more localization.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { L10n } from '@syncfusion/ej2-base';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

L10n.load({
    'en-US': {
        grid: {
            'SaveButton': 'Submit',
            'CancelButton': 'Discard'
        }
    }
});

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar'
     (actionComplete)="actionComplete($event)" height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
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

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    actionComplete(args) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            const dialog = args.dialog;
            const CustomerID = 'CustomerID';
            dialog.showCloseIcon = false;
            dialog.height = 400;
            // change the header of the dialog
            dialog.header = args.requestType === 'beginEdit' ? 'Edit Record of ' + args.rowData['CustomerID'] : 'New Customer';
        }
    }
}


```

{% endtab %}

## Show or hide columns in dialog editing

You can show hidden columns or hide visible column's editor in the dialog while editing the grid record using [`actionBegin`](../../api/grid/#actionbegin) and [`actionComplete`](../../api/grid/#actioncomplete) events.

In the [`actionBegin`](../../api/grid/#actionbegin) event, based on **requestType** as **beginEdit** or  **add**. We can show or hide the editor by using [`column.visible`](../../api/grid/column/#visible) property.

In the [`actionComplete`](../../api/grid/#actioncomplete) event, based on **requestType** as **save**. We can reset the properties back to the column state.

In the below example, we have rendered the grid columns **CustomerID** as hidden column and **ShipCountry** as visible column. In the edit mode, we have changed the **CustomerID** column to visible state and **ShipCountry** column to hidden state.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, GridComponent, Column, SaveEventArgs, EditEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' (actionBegin)="actionBegin($event)"
     (actionComplete)="actionComplete($event)" height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [visible]='false' width=120></e-column>
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
    @ViewChild('grid') grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    actionBegin(args: EditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            for (const cols of this.grid.columns) {
                if ((cols as Column).field === 'CustomerID') {
                    (cols as Column).visible = true;
                } else if ((cols as Column).field === 'ShipCountry') {
                    (cols as Column).visible = false;
                }
            }
        }
    }

    actionComplete(args: SaveEventArgs) {
        if (args.requestType === 'save') {
            for (const cols of this.grid.columns) {
                if ((cols as Column).field === 'CustomerID') {
                    (cols as Column).visible = false;
                } else if ((cols as Column).field === 'ShipCountry') {
                    (cols as Column).visible = true;
                }
            }
        }
    }
}

```

{% endtab %}

## Use wizard like dialog editing

Wizard helps you create intuitive step-by-step forms to fill. You can achieve the wizard like editing by using the dialog template feature. It support your own editing template by defining [`editSettings.mode`](../../api/grid/editSettings/#mode) as **Dialog** and [`editSettingsTemplate`](../../api/grid/editSettings/#template) as template variable to define the editors.

The following example demonstrate the wizard like editing in the grid with the unobtrusive Validation.

{% tab template="grid/wizardtemplate", sourceFiles="app/app.component.ts,app/wizardtemplate.html,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { data } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { EditSettingsModel, ToolbarItems, GridComponent, DialogEditEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    templateUrl: `app/wizardtemplate.html`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public shipCountryDistinctData: object;
    public next = 'Next';
    public currentTab = 0;
    public hidden = true;
    @ViewChild('grid') grid: GridComponent;
    @ViewChild('orderForm') orderForm: FormGroup;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete'];
        this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true);
    }

    actionComplete(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            args.form.ej2_instances[0].rules = {}; // Disable deafault valdation.
            // Set initail Focus
            if (args.requestType === 'beginEdit') {
                (args.form.elements.namedItem('CustomerID') as HTMLInputElement).focus();
            }
            this.currentTab = 0;
            this.hidden = true;
            this.next = 'Next';
        }
    }

    nextBtn(args) {
        if (this.orderForm.valid) {
            if (this.next !== 'SUBMIT') {
                this.currentTab++;
                this.nextpre(this.currentTab);
            } else {
                this.grid.endEdit();
            }
        }
    }

    previousBtn(args) {
        if (this.orderForm.valid) {
            this.currentTab--;
            this.nextpre(this.currentTab);
        }
    }

    nextpre(current) {
        if (current) {
            this.hidden = false;
            this.next = 'SUBMIT';
        } else {
            this.hidden = true;
            this.next = 'NEXT';
        }
    }
}

```

{% endtab %}