# Edit Types

## Customize editors using params

The [`columns.editType`](../../api/grid/column/#edittype) is used to define the editor component for any particular column.
You can set the [`columns.editType`](../../api/grid/column/#edittype) based on data type of the column.

* [`NumericTextBox`](../../numerictextbox) component for integers, double, and decimal data types.

* [`TextBox`](../../textbox) component for string data type.

* [`DropDownList`](../../drop-down-list) component to show all unique values related to that field.

* [`CheckBox`](../../check-box) component for boolean data type.

* [`DatePicker`](../../datepicker) component for date data type.

* [`DateTimePicker`](../../datetimepicker) component for date time data type.

Also, you can customize the behavior of the editor component through the [`columns.edit.params`](../../api/grid/column/#edit).

The following table describes editor component and their example edit params of the column.

Component |Example
-----|-----
[`NumericTextBox`](../../numerictextbox) | params: { decimals: 2, value: 5 }
[`DropDownList`](../../drop-down-list) | params: { value: 'Germany' }
[`Checkbox`](../../check-box) | params: { checked: true}
[`DatePicker`](../../datepicker) | params: { format:'dd.MM.yyyy' }
[`DateTimePicker`](../../datetimepicker) | params: { value: new Date() }

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' [edit]='numericParams' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' [edit]='ddParams' width=150></e-column>
                    <e-column field='OrderDate' headerText='Order Date' editType= 'datepickeredit' [edit]='dpParams' width=150></e-column>
                    <e-column field='Verified' headerText='Verified' editType= 'booleanedit' [edit]='boolParams' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public numericParams: IEditCell;
    public ddParams: IEditCell;
    public dpParams: IEditCell;
    public boolParams: IEditCell;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.numericParams = { params: { decimals: 2, value: 5 } };
        this.ddParams = { params: { value: 'Germany' } };
        this.dpParams = { params: {value: new Date() } };
        this.boolParams = { params: {checked: true } };
    }
}


```

{% endtab %}

> If edit type is not defined in the column, then it will be considered as the **stringedit** type (Textbox component) .

### Restrict to type decimal points in a NumericTextBox while editing the numeric column

By default, the number of decimal places will be restricted to two in the NumericTextBox while editing the numeric column. We can restrict to type the decimal points in a NumericTextBox by using the [`validateDecimalOnType`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/#validatedecimalontype) and [`decimals`](https://ej2.syncfusion.com/angular/documentation/api/numerictextbox/#decimals) properties of NumericTextBox.

In the below demo, while editing the row we have restricted to type the decimal point value in the NumericTextBox of **Freight** column.

{% tab template="grid/prevent-decimalpoint", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='265px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                    editType= 'numericedit' [edit]='numericParams' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' editType= 'dropdownedit' width=150>
                    </e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public numericParams: IEditCell;
    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.numericParams = { params: {
            validateDecimalOnType: true,
            decimals: 0,
            format: 'N' }
        };
    }
}


```

{% endtab %}

### Provide custom data source and enabling filtering to DropDownList

You can provide data source to the DropDownList by using the [`columns.edit.params`](../../api/grid/column/#edit) property.

While setting new data source using edit params, you must specify a new [`query`](../../api/drop-down-list#query) property too for the DropDownList as follows,

```typescript
{
    this.countryParams = {
        params:   {
            allowFiltering: true,
            dataSource: this.country,
            fields: {text:'countryName',value:'countryName'},
            query: new Query(),
            actionComplete: () => false
            }
        }
}

```

You can also enable filtering for the DropDownList by passing the [`allowFiltering`](../../api/drop-down-list#allowfiltering) as **true** to the edit params.

In the below demo, DropDownList is rendered with custom Datasource for the **ShipCountry** column and enabled filtering to search DropDownList items.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { cascadeData } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit'
                     [edit]='countryParams' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public countryParams: IEditCell;

    public country: object[] = [
        { countryName: 'United States', countryId: '1' },
        { countryName: 'Australia', countryId: '2' },
        { countryName: 'India', countryId: '3' }
    ];

    ngOnInit(): void {
        this.data = cascadeData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.countryParams = {
            params: {
                allowFiltering: true,
                dataSource: new DataManager(this.country),
                fields: { text: 'countryName', value: 'countryName' },
                query: new Query(),
                actionComplete: () => false
            }
        };
    }

}

```

{% endtab %}

## Custom editors using template

The cell edit template is used to add a custom component for a particular column by invoking the following functions:

* **create** - It is used to create the element at the time of initialization.

* **write** - It is used to create custom component or assign default value at the time of editing.

* **read** - It is used to read the value from the component at the time of save.

* **destroy** - It is used to destroy the component.

### Render TimePicker component while editing

Use the cell edit template feature of the Grid to render the TimePicker component in the Grid edit form. In the below sample, we have rendered TimePicker component in the **OrderDate** column.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids';
import { TimePicker } from '@syncfusion/ej2-calendars';
import { enableRipple } from '@syncfusion/ej2-base';
import { purchaseData } from './datasource';
import { Column, EditSettingsModel, PageSettingsModel, ToolbarItems, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data' [allowPaging]='true' [editSettings]='editSettings' [pageSettings]='pageOptions' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' isPrimaryKey='true' [validationRules]="orderidrules" width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' type= 'number' textAlign= 'Right'
                     editType= 'numericedit' format= 'C2' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' type= 'date' format= 'hh:mm' [edit]='dpParams' width=150></e-column>
                </e-columns>
               </ejs-grid>`,
  providers: [ToolbarService, EditService, PageService],
})
export class AppComponent implements OnInit {
  public data: object[];
  @ViewChild('grid') public grid: GridComponent;
  public editSettings: EditSettingsModel;
  public pageOptions: PageSettingsModel;
  public toolbar: ToolbarItems[];
  public tpElem: HTMLElement;
  public dpParams: IEditCell;
  public timeObject: TimePicker;

  public createOrderDateFn() {
    this.tpElem = document.createElement('input');
    return this.tpElem;
  }
  public destroyOrderDateFn() {
    this.timeObject.destroy();
  }
  public readOrderDateFn() {
    return this.timeObject.value;
  }
  public writeOrderDateFn(args) {
    enableRipple(true);
    this.timeObject = new TimePicker({
      value: args.rowData[args.column.field],
      step: 60,
    });
    this.timeObject.appendTo(this.tpElem);
  }

  ngOnInit(): void {
    this.data = purchaseData;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.pageOptions = { pageSizes: true, pageSize: 8 };
    this.dpParams = {
      create: this.createOrderDateFn,
      read: this.readOrderDateFn,
      destroy: this.destroyOrderDateFn,
      write: this.writeOrderDateFn,
    };
  }
}

```

{% endtab %}

### Render AutoComplete component while editing

Use the cell edit template feature of the Grid to render the AutoComplete component in the Grid edit form. In the below sample, we have rendered AutoComplete component in the **CustomerID** column.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
import { purchaseData } from './datasource';
import { Column, EditSettingsModel, PageSettingsModel, ToolbarItems, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data' [allowPaging]='true' [editSettings]='editSettings' [pageSettings]='pageOptions' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' isPrimaryKey='true' [validationRules]="orderidrules" width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type= 'string' [edit]='daParams' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' type= 'number' textAlign= 'Right' editType= 'numericedit' format= 'C2' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' type= 'date' format= 'yMd' editType= 'datepickeredit' width=150></e-column>
                </e-columns>
               </ejs-grid>`,
  providers: [ToolbarService, EditService, PageService],
})
export class AppComponent implements OnInit {
  public data: object[];
  @ViewChild('grid') public grid: GridComponent;
  public editSettings: EditSettingsModel;
  public pageOptions: PageSettingsModel;
  public toolbar: ToolbarItems[];
  public daParams: IEditCell;
  public inpuEle: HTMLElement;
  public autoCompleteIns: AutoComplete;
  public autoCompleteData: { [key: string]: Object }[] = [
    { CustomerID: 'VINET', Id: '1' },
    { CustomerID: 'TOMSP', Id: '2' },
    { CustomerID: 'HANAR', Id: '3' },
    { CustomerID: 'VICTE', Id: '4' },
    { CustomerID: 'SUPRD', Id: '5' },
  ];

  public createCustomerIDFn = () => {
    this.inpuEle = document.createElement('input');
    return this.inpuEle;
  }
  public destroyCustomerIDFn = () => {
    this.autoCompleteIns.destroy();
  }
  public readCustomerIDFn = () => {
    return this.autoCompleteIns.value;
  }
  public writeCustomerIDFn = (args) => {
    this.autoCompleteIns = new AutoComplete({
      allowCustom: true,
      value: args.rowData[args.column.field],
      dataSource: this.autoCompleteData,
      fields: { value: 'CustomerID', text: 'CustomerID' },
    });
    this.autoCompleteIns.appendTo(this.inpuEle);
  }

  ngOnInit(): void {
    this.data = purchaseData;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.pageOptions = { pageSizes: true, pageSize: 8 };
    this.daParams = {
      create: this.createCustomerIDFn,
      read: this.readCustomerIDFn,
      destroy: this.destroyCustomerIDFn,
      write: this.writeCustomerIDFn
    };
  }
}

```

{% endtab %}

### Render MultiSelect DropDown component while editing

Use the cell edit template feature of the Grid to render the MultiSelect DropDown component in the Grid edit form. In the below sample, we have rendered MultiSelect DropDown component in the **ShipCity** column.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids';
import { MultiSelect } from '@syncfusion/ej2-angular-dropdowns';
import { purchaseData } from './datasource';
import { Column, EditSettingsModel, PageSettingsModel, ToolbarItems, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [allowPaging]='true' [editSettings]='editSettings' [pageSettings]='pageOptions' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' isPrimaryKey='true' [validationRules]="orderidrules" width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' type='number' textAlign= 'Right'
                     editType= 'numericedit' format= 'C2' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' type='string' [edit]='dsParams' width=180></e-column>
                </e-columns>
               </ejs-grid>`,
    providers: [ToolbarService, EditService, PageService],
})

export class AppComponent implements OnInit {
    public data: object[];
    @ViewChild('grid') public grid: GridComponent;
    public editSettings: EditSettingsModel;
    public pageOptions: PageSettingsModel;
    public toolbar: ToolbarItems[];
    public ddElem: HTMLElement;
    public multiSelectObj: MultiSelect;
    public multiselectDatasource = [
        { ShipCity: 'Reims', Id: '1' },
        { ShipCity: 'Münster', Id: '2' },
        { ShipCity: 'Rio de Janeiro', Id: '3' },
        { ShipCity: 'Lyon', Id: '4' },
        { ShipCity: 'Charleroi', Id: '5' }
    ];
    public dsParams: IEditCell;

    public createShipCityFn = () => {
        this.ddElem = document.createElement('input');
        return this.ddElem;
    };
    public readShipCityFn = () => {
        return this.multiSelectObj.value.join(',');
    };
    public destroyShipCityFn = () => {
        this.multiSelectObj.destroy();
    };
    public writeShipCityFn = (args) => {
        let multiSelectVal = args.rowData[args.column.field]
            ? args.rowData[args.column.field].split(',')
            : [];
        this.multiSelectObj = new MultiSelect({
        value: multiSelectVal,
        dataSource: this.multiselectDatasource,
        fields: { value: 'ShipCity', text: 'ShipCity' },
        floatLabelType: 'Never',
        mode: 'Box'
        });
        this.multiSelectObj.appendTo(this.ddElem);
    };

    ngOnInit(): void {
        this.data = purchaseData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.pageOptions = { pageSizes: true, pageSize: 8 };
        this.dsParams = {
            create: this.createShipCityFn,
            read: this.readShipCityFn,
            destroy: this.destroyShipCityFn,
            write: this.writeShipCityFn
        };
    }
}

```

{% endtab %}

### Render RichTextEditor component while editing

Use the cell edit template feature of the Grid to render the RichTextEditor component in the Grid edit form. In the below sample, we have rendered RichTextEditor component in the **ShipAddress** column, so we use [allowTextWrap](../../api/grid/#allowtextwrap) property to true.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids';
import { TextBox } from '@syncfusion/ej2-inputs';
import { purchaseData } from './datasource';
import { Column, EditSettingsModel, PageSettingsModel, ToolbarItems, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='purchaseData' [allowPaging]='true' allowTextWrap='true' [editSettings]='editSettings' [pageSettings]='pageOptions' [toolbar]='toolbar' (created)="created($event)" height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' isPrimaryKey='true' [validationRules]="orderidrules" width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' type='number' textAlign= 'Right'
                     editType= 'numericedit' format= 'C2' width=120></e-column>
                    <e-column field='ShipAddress' headerText='ShipAddress' type='string' [disableHtmlEncode]= 'disableHtmlEncode' [valueAccessor]= 'valueAccessor' [edit]='ddParams' width=180></e-column>
                </e-columns>
               </ejs-grid>`,
    providers: [ToolbarService, EditService, PageService],
})

export class AppComponent implements OnInit {
    public purchaseData: object[];
    @ViewChild('grid') public grid: GridComponent;
    public editSettings: EditSettingsModel;
    public pageOptions: PageSettingsModel;
    public toolbar: ToolbarItems[];
    public tbElem: HTMLElement;
    public textEditor;
    public ddParams: IEditCell;
    public disableHtmlEncode;

    public createShipAddressFn = () => {
        this.tbElem = document.createElement('textarea');
        return this.tbElem;
    };
    public readShipAddressFn = () => {
        return this.textEditor.value;
    };
    public destroyShipAddressFn = () => {
        this.textEditor.destroy();
    };
    public writeShipAddressFn = (args) => {
        this.textEditor = new TextBox({
        multiline: true,
        value: args.rowData[args.column.field],
        floatLabelType: 'Auto'
        });
        this.textEditor.appendTo(this.tbElem);
    };

    public valueAccessor = (field: string, sdata: object, column: object) => {
        var value = sdata[field];
        if (value != undefined) {
            return value.split('\n').join('<br>');
        }
        else {
            return '';
        }
    };

    ngOnInit(): void {
        this.purchaseData = purchaseData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.pageOptions = { pageSizes: true, pageSize: 8 };
        this.disableHtmlEncode = false;
        this.ddParams = {
            create: this.createShipAddressFn,
            read: this.readShipAddressFn,
            destroy: this.destroyShipAddressFn,
            write: this.writeShipAddressFn
        };
    }
    created = (args) => {
        this.grid.keyConfigs.enter = '';
    };
}

```

{% endtab %}

### Using template

The cell editor for a particular column can be specified using the content of the NgTemplate. The [`#editTemplate`](../../api/grid/column/#edittemplate-string) template variable identifies the NgTemplate content as the corresponding column editor.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, SaveEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'
                (actionBegin)='actionBegin($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='OrderDate' headerText='Order Date' type= 'date' format= 'yMd' width=150>
                        <ng-template #editTemplate let-data>
                            <ejs-datepicker id="OrderDate" placeholder="Order Date"
                            [(ngModel)]="orderData.OrderDate" floatLabelType='Never'></ejs-datepicker>
                        </ng-template>
                    </e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public orderData: object;
    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            // cast string to integer value.
            const OrderDate = 'OrderDate';
            args.data[OrderDate] = this.orderData[OrderDate];
        }
    }
}

```

{% endtab %}