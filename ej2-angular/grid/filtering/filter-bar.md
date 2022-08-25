# Filter Bar

By defining the [`allowFiltering`](../../api/grid/#allowfiltering) to true,
then filter bar row will be rendered next to header which allows you to filter data.
 You can filter the records with different expressions depending upon the column type.

 **Filter bar Expressions:**

 You can enter the following filter expressions(operators) manually in the filter bar.

Expression |Example |Description |Column Type
-----|-----|-----|-----
= |=value |equal |Number
!= |!=value |notequal |Number
> |>value |greaterthan |Number
< |<value |lessthan |Number
>= |>=value |greaterthanorequal |Number
<=|<=value|lessthanorequal |Number
* |*value |startswith |String
% |%value |endswith |String
N/A |N/A |Always **equal** operator will be used for Date filter |Date
N/A |N/A |Always **equal** operator will be used for Boolean filter |Boolean

{% tab template="grid/filtering1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' height='273px'>
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

    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

## Filter bar template with custom component

The [`filterBarTemplate`](../../api/grid/column/#filterbartemplate) is used to add a custom component for a
particular column and this contains the following functions.
* **create** – It is used for creating custom components.
* **write** - It is used to wire events for custom components.

In the following sample dropdown is used  as custom component in EmployeeID column.

{% tab template="grid/filtering1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, IFilterUI, Column } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid='' [dataSource]='data' [allowFiltering]='true' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' width=120 [filterBarTemplate]='templateOptions'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public templateOptions: IFilterUI;

    @ViewChild('grid')
    public gridObj: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.templateOptions = {
            create: (args: { element: Element, column: Column }) => {
                const dd = document.createElement('select');
                dd.id = 'EmployeeID';
                const dataSource: string[] = ['All', '1', '3', '4', '5', '6', '8', '9'];
                for (const value of  dataSource) {
                    const option: HTMLOptionElement = document.createElement('option');
                    option.value = value;
                    option.innerHTML = value;
                    dd.appendChild(option);
                }
                return dd;
            },
            write: (args: { element: Element, column: Column }) => {
                args.element.addEventListener('input', (args1: Event): void => {
                    const target: HTMLInputElement = args1.currentTarget as HTMLInputElement;
                    if (target.value !== 'All') {
                        const value = + +target.value;
                        this.gridObj.filterByColumn(target.id, 'equal', value);
                    } else {
                        this.gridObj.removeFilteredColsByField(target.id);
                    }
                });
            },
        };
    }
}

```

{% endtab %}

## Change default filterbar operator

You can change the default filter operator by extending [`filterModule.filterOperators`](../../api/grid/filterSettings/#operators) property in [`dataBound`](../../api/grid/#databound) event. In the following sample,
we have changed the default operator for string typed columns as **contains** from **startsWith**.

{% tab template="grid/filtering1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' (dataBound)='dataBound()' [allowFiltering]='true' height='273px'>
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
    @ViewChild('grid')
    public grid: GridComponent;
    dataBound() {
        Object.assign((this.grid.filterModule as any).filterOperators, { startsWith: 'contains' });
    }

    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}