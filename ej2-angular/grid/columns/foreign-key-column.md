# Foreign Key Column

Foreign key column can be enabled by using [`column.dataSource`](../../api/grid/column/#datasource),
[`column.foreignKeyField`](../../api/grid/column/#foreignkeyfield) and
[`column.foreignKeyValue`](../../api/grid/column/#foreignkeyvalue) properties.

* [`column.dataSource`](../../api/grid/column/#datasource) - Defines the foreign data.
* [`column.foreignKeyField`](../../api/grid/column/#foreignkeyfield) - Defines the mapping column name to the foreign data.
* [`column.foreignKeyValue`](../../api/grid/column/#foreignkeyvalue) - Defines the display field from the foreign data.

In the following example, **Employee Name** is a foreign column which shows **FirstName** column from foreign data.

To use ForeignKeyColumn, you need to inject **ForeignKeyService** in the provider section of **AppModule**.

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { ForeignKeyService } from '@syncfusion/ej2-angular-grids';
import { data, employeeData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                        foreignKeyValue='FirstName' [dataSource]='employeeData'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
                    </e-columns>
                </ejs-grid>`,
    providers: [ForeignKeyService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public employeeData: object[];

    ngOnInit(): void {
        this.data = data;
        this.employeeData = employeeData;
    }
}

```

{% endtab %}

> * For remote data, the sorting and grouping is done based on [`column.foreignKeyField`](../../api/grid/column/#foreignkeyfield) instead of
[`column.foreignKeyValue`](../../api/grid/column/#foreignkeyvalue).
> * If [`column.foreignKeyField`](../../api/grid/column/#foreignkeyfield) is not defined, then the column uses [`column.field`](../../api/grid/column/#field).

## Use edit template in foreignkey column

By default, foreign key column uses dropdown component for editing.
You can render other than the dropdown by using the [`column.edit`](../../api/grid/column/#edit) property.
The following example demonstrates the way of using edit template in foreign column.

In the following example, The **Employee Name** is a foreign key column and while editing, AutoComplete component is rendered instead of DropDownList.

{% tab template="grid/foreignkey", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit } from '@angular/core';
import { createElement } from '@syncfusion/ej2-base';
import { ForeignKeyService, EditService, IEditCell, EditSettingsModel, ToolbarService, Column } from '@syncfusion/ej2-angular-grids';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { AutoComplete } from '@syncfusion/ej2-angular-dropdowns';
import { data, employeeData } from './datasource';


@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='270' [editSettings]='editoption' [toolbar]='toolbar'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                        foreignKeyValue='FirstName' [dataSource]='employeeData' [edit]='edit'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130></e-column>
                    </e-columns>
                </ejs-grid>`,
    providers: [ForeignKeyService, EditService, ToolbarService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public employeeData: object[];
    public editoption: EditSettingsModel = { allowEditing: true };
    public autoComplete: AutoComplete;
    toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    public edit: IEditCell = {
        create: () => { // to create input element
            return createElement('input');
        },
        read: () => { // return edited value to update data source
            const EmployeeID = 'EmployeeID';
            const value = new DataManager(employeeData).executeLocal(new Query().where('FirstName', 'equal', this.autoComplete.value));
            return value.length && value[0][EmployeeID]; // to convert foreign key value to local value.
        },
        destroy: () => { // to destroy the custom component.
            this.autoComplete.destroy();
        },
        write: (args: { rowData: object, column: Column, foreignKeyData: object,
             element: HTMLTableCellElement }) => { // to show the value for date picker
            this.autoComplete = new AutoComplete({
                dataSource: employeeData,
                fields: { value: args.column.foreignKeyValue },
                value: args.foreignKeyData[0][args.column.foreignKeyValue]
            });
            this.autoComplete.appendTo(args.element);
        }
    }

    ngOnInit(): void {
        this.data = data;
        this.employeeData = employeeData;
    }
}


```

{% endtab %}

## Customize filter UI in foreignkey column

You can create your own filtering UI by using [`column.filter`](../../api/grid/column/#filter) property.
The following example demonstrates the way to create a custom filtering UI in the foreign column.

In the following example, The **Employee Name** is a foreign key column. DropDownList is rendered using Filter UI.

{% tab template="grid/foreignkey", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { createElement } from '@syncfusion/ej2-base';
import { GridComponent, ForeignKeyService, FilterService, IFilter, FilterSettingsModel, Filter } from '@syncfusion/ej2-angular-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { data, fEmployeeData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315' [allowFiltering]='true'
        [filterSettings]='filteroption'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                        foreignKeyValue='FirstName' [dataSource]='employeeData' [filter]='filter'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
                    </e-columns>
                </ejs-grid>`,
    providers: [ForeignKeyService, FilterService]
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid') public grid: GridComponent;
    public employeeData: object[];
    public dropInstance: DropDownList;
    public filteroption: FilterSettingsModel = { type: 'Menu'};
    public filter: IFilter = {
        ui: {
            create: (args: { target: Element, column: object }) => {
                const flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                args.target.appendChild(flValInput);
                this.dropInstance = new DropDownList({
                    dataSource: new DataManager(fEmployeeData),
                    fields: { text: 'FirstName', value: 'EmployeeID' },
                    placeholder: 'Select a value',
                    popupHeight: '200px'
                });
                this.dropInstance.appendTo(flValInput);
            },
            write: (args: {
                column: object, target: Element, parent: any,
                filteredValue: number | string
            }) => {
                this.dropInstance.text = args.filteredValue as string || '';
            },
            read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.text);
            }
        }
    };
    ngOnInit(): void {
        this.data = data;
        this.employeeData = fEmployeeData;
    }
}

```

{% endtab %}

## Use filter bar template in foreignkey column

You can use the filter bar template in foreign key column by defining the
[`column.filterBarTemplate`](../../api/grid/column/#filterbartemplate) property.
The following example demonstrates the way to use filter bar template in foreign column.

In the following example, The **Employee Name** is a foreign key column.
This column header shows the custom filter bar template and you can select filter value by using the **DropDown** options.

{% tab template="grid/foreignkey", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { createElement } from '@syncfusion/ej2-base';
import { GridComponent, ForeignKeyService, FilterService, IFilterUI, Column } from '@syncfusion/ej2-angular-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { data, fEmployeeData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='260' [allowFiltering]='true'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                        foreignKeyValue='FirstName' [dataSource]='employeeData' [filterBarTemplate]='filter'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
                    </e-columns>
                </ejs-grid>`,
    providers: [ForeignKeyService, FilterService]
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid') public grid: GridComponent;
    public employeeData: object[];
    public filter: IFilterUI = {
        create: (args: { element: Element, column: Column }) => {
            return createElement('input', { className: 'flm-input' });
        },
        write: (args: { element: Element, column: Column }) => {
            fEmployeeData.splice(0, 0, {FirstName: 'All'}); // for clear filtering
            const dropInstance: DropDownList = new DropDownList({
                dataSource: new DataManager(fEmployeeData),
                fields: { text: 'FirstName' },
                placeholder: 'Select a value',
                popupHeight: '200px',
                index: 0,
                change: (e) => {
                    if (e.value !== 'All') {
                        this.grid.filterByColumn('EmployeeID', 'equal', e.value);
                    } else {
                        this.grid.removeFilteredColsByField('EmployeeID');
                    }
                }
            });
            dropInstance.appendTo(args.element as HTMLTableCellElement);
        }
    };
    ngOnInit(): void {
        this.data = data;
        this.employeeData = fEmployeeData;
    }
}

```

{% endtab %}

## Perform aggregation in foreignkey column

Default aggregations are not supported in a foreign key column.
You can achieve aggregation for the foreign key column by using custom the aggregates.
The following example demonstrates the way to achieve aggregation in foreign key column.

In the following example, The **Employee Name** is a foreign key column and the aggregation for the foreign column was calculated in customAggregateFn.

{% tab template="grid/foreignkey", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { ForeignKeyService, AggregateService, getForeignData, CustomSummaryType,
     AggregateColumnModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { data, employeeData } from './datasource';
import { getValue } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='280'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                         foreignKeyValue='FirstName' [dataSource]='employeeData'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate>
                            <e-columns>
                                <e-column field="EmployeeID" type="Custom" [customAggregate]= 'customAggregateFn'>
                                    <ng-template #footerTemplate let-data>
                                        Count of Margaret:  {{data.Custom}}
                                    </ng-template>
                                </e-column>
                            </e-columns>
                        </e-aggregate>
                    </e-aggregates>
                </ejs-grid>`,
    providers: [ForeignKeyService, AggregateService]
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid') public grid: GridComponent;
    public employeeData: object[];

    // Custom Aggregate function for foreign column
    public customAggregateFn: CustomSummaryType = (data1: any, column: AggregateColumnModel) => {
        return data1.result.filter((dObj: object) => {
            return getValue('FirstName', getForeignData(this.grid.getColumnByField(column.field), dObj)[0]) === 'Margaret';
        }).length;
    }

    ngOnInit(): void {
        this.data = data;
        this.employeeData = employeeData;
    }
}
  
```

{% endtab %}

## Enable multiple foreign key columns

Multiple foreign key columns with editing options are enabled for the Angular Grid component.

In the following example, **Customer Name** and **Ship City** are foreign key columns that display the **ContactName** and **City** columns from foreign data.

{% tab template="grid/foreignkey", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { ForeignKeyService, EditService, EditSettingsModel, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { orderDetails, customerData, employeeData } from './datasource.ts';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='orderDetails' [height]='270' [editSettings]='editoption' [toolbar]='toolbar'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer Name' width=170
                        foreignKeyValue='ContactName' [dataSource]='customerData'></e-column>
                        <e-column field='Freight' headerText='Freight' editType= 'numericedit' textAlign='Right' width=130 format= 'C2'></e-column>
                        <e-column field='EmployeeID' headerText='Ship City' width=150
                        foreignKeyValue='City' [dataSource]='employeeData'></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
                    </e-columns>
                </ejs-grid>`,
   providers: [ForeignKeyService, EditService, ToolbarService]
})
export class AppComponent implements OnInit {

    public orderDetails: object[];
    public customerData: object[];
    public employeeData: object[];
    public editoption: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
    toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    // public edit = 'dropdownedit';

    ngOnInit(): void {
        this.orderDetails = orderDetails;
        this.customerData = customerData;
        this.employeeData = employeeData;
    }
}

```

{% endtab %}
