# Filter Menu

You can enable filter menu by setting the [`filterSettings.type`](../../api/grid/filterSettings) as **Menu**.
The filter menu UI will be rendered based on its column type, which allows you to filter data.
You can filter the records with different operators.

{% tab template="grid/filtering1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public filterOptions: FilterSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = {
           type: 'Menu'
        };
    }
}

```

{% endtab %}

> * [`allowFiltering`](../../api/grid/#allowfiltering) must be set as true to enable filter menu.
> * Setting [`columns.allowFiltering`](../../api/grid/column/#allowfiltering) as false will prevent
 filter menu rendering for a particular column.

## Custom component in filter menu

The [`column.filter.ui`](../../api/grid/column/#filter) is used to add custom filter components to a particular column.
To implement custom filter ui, define the following functions:

* **create**:  Creates custom component.
* **write**: Wire events for custom component.
* **read**: Read the filter value from custom component.

In the following sample, dropdown is used  as custom component in the OrderID column.
{% tab template="grid/filtering1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { FilterSettingsModel, IFilter, Filter } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' [filter]= 'filter' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public filterOptions: FilterSettingsModel;
    public filter: IFilter;
    public dropInstance: DropDownList;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = {
            type: 'Menu'
        };
        this.filter = {
            ui: {
                create: (args: { target: Element, column: object }) => {
                    const flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                    args.target.appendChild(flValInput);
                    this.dropInstance = new DropDownList({
                        dataSource: new DataManager(data),
                        fields: { text: 'OrderID', value: 'OrderID' },
                        placeholder: 'Select a value',
                        popupHeight: '200px'
                    });
                    this.dropInstance.appendTo(flValInput);
                },
                write: (args: {
                    column: object, target: Element, parent: any,
                    filteredValue: number | string
                }) => {
                    this.dropInstance.value = args.filteredValue;
                },
                read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                    args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.value);

                }
            }
        };
    }
}

```

{% endtab %}

## Customizing filter menu operators list

You can customize the default filter operator list by defining the
[`filterSettings.operators`](../../api/grid/filterSettings/#operators) property. The available options are:

* **stringOperator**- defines customized string operator list.
* **numberOperator** - defines customized number operator list.
* **dateOperator** - defines customized date operator list.
* **booleanOperator** - defines customized boolean operator list.

In the following sample, we have customized string filter operators.
{% tab template="grid/filtering1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public filterOptions: FilterSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = {
           type: 'Menu',
           operators: {
               stringOperator: [
                   { value: 'startsWith', text: 'starts with' },
                   { value: 'endsWith', text: 'ends with' },
                   { value: 'contains', text: 'contains' }
                ],
            }
        };
    }
}

```

{% endtab %}

## Enable different filter for a column

You can use both **Menu** and **Checkbox** filter in a same Grid. To do so, set the
[`column.filter.type`](../../api/grid/column/#filter) as **Menu** or **Checkbox**.

In the following sample menu filter is enabled by default and checkbox filter is enabled for the CustomerID column using the
[`column.filter.type`](../../api/grid/column/#filter).

{% tab template="grid/filtering1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel, IFilter } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' [filter] = 'filter' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public filterOptions: FilterSettingsModel;
    public filter: IFilter;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = {
            type: 'Menu'
        };
        this.filter = {
            type: 'CheckBox'
        };
    }
}

```

{% endtab %}

## Filter by multiple keywords using filter menu

By default, the filtering action is performed based on the single keyword filter value from the built-in component of the filter menu dialog. Now data grid has an option to perform filtering actions based on multiple keywords instead of a single keyword alone. For this, set [`filterSettings.type`](../../api/grid/filterSettings#type) as `Menu`.

In the following sample, filtering action with multiple keywords can be done by rendering the `MultiSelect` component as custom component in the OrderID column filter menu dialog.

{% tab template="grid/filtering1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { DataManager } from '@syncfusion/ej2-data';
import { MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-angular-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { FilterSettingsModel, IFilter, Filter, GridComponent } from '@syncfusion/ej2-angular-grids';

MultiSelect.Inject(CheckBoxSelection);

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' #grid [allowFiltering]='true' [filterSettings]='filterOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' [filter]= 'filter' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public filteredValue: object[];
    public filterOptions: FilterSettingsModel;
    public filter: IFilter;
    public dropInstance: MultiSelect;
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = {
            type: 'Menu'
        };
        this.filter = {
            ui: {
                create: (args: { target: Element, column: object }) => {
                    let flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                    args.target.appendChild(flValInput);
                    this.dropInstance = new MultiSelect({
                        dataSource: new DataManager(data),
                        fields: { text: 'OrderID', value: 'OrderID' },
                        placeholder: 'Select a value',
                        popupHeight: '200px',
                        allowFiltering: true,
                        mode: 'CheckBox',
                    });
                    this.dropInstance.appendTo(flValInput);
                },
                write: (args: {
                    column: object, target: Element, parent: any,
                    filteredValue: number[] | string[]
                }) => {
                    let filteredValue = [];
                    this.grid.filterSettings.columns.map((item) => {
                        if (item.field === 'OrderID' && item.value){
                            filteredValue.push((item as any).value);
                        }
                    });
                    if (filteredValue.length > 0){
                        this.dropInstance.value = filteredValue;
                    }
                },
                read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                    this.grid.removeFilteredColsByField(args.column.field);
                    args.fltrObj.filterByColumn(
                        args.column.field,
                        'contains',
                        this.dropInstance.value
                    );
                },
            },
        };
    }
}

```

{% endtab %}