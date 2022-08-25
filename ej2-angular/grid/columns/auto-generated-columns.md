# Auto Generation

The [`columns`](../../api/grid/column) are automatically generated when
[`columns`](../../api/grid/column)
declaration is empty or undefined while initializing the grid. All the columns in the **dataSource** are bound as grid columns.

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data'>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = [
            { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
            { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
            { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];
    }
}

```

{% endtab %}

> When the columns are auto-generated then the column [`type`](../../api/grid/column/#type)
will be determined from the first record of the
[`dataSource`](../../api/grid/#datasource).

## Set Primary key column for auto generated columns when editing is enabled

Primary key can be defined in the declaration of column object of the grid. When we didn't declare the columns, the grid will generate the columns automatically. For these auto generated columns, you can set [`isPrimaryKey`](../../api/grid/column/#isprimarykey) column property as true by using the following ways,

If Primary key "column index" is known then refer the following code example

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, EditSettingsModel, EditService } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' (dataBound)="dataBound($event)">
               </ejs-grid>`,
    providers: [EditService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = [
            { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
            { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
            { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }

    dataBound(args: any) {
        (this.grid.columns[0] as any).isPrimaryKey = 'true';
    }
}

```

{% endtab %}

If Primary key **column** and its **field** is known then primary key for the respective [`column`](https://ej2.syncfusion.com/documentation/api/grid/column/) can be defined as follows.

```typescript

  const column: ColumnModel = this.grid.getColumnByField('OrderID');
  column.isPrimaryKey = true;

```

## Set column options to auto generated columns

You can set column options such as [`format`](../../api/grid/column/#format), [`width`](../../api/grid/column/#width) to the auto generated columns by using [`dataBound`](../../api/grid/#databound) event of the grid.

In the below example, [`width`](../api/grid/column/#width) is set for **OrderID** column, **date** type is set for **OrderDate** column and [`format`](../api/grid/column/#format) is set for **Freight** and **OrderDate** column.

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' (dataBound)="dataBound($event)">
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data: object[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = [
            { OrderID: 10248, CustomerID: 'VINET', Freight: 32.3800, OrderDate: '1996-07-02T00:00:00.000Z' },
            { OrderID: 10249, CustomerID: 'TOMSP', Freight: 32.3800, OrderDate: '1996-07-19T00:00:00.000Z' },
            { OrderID: 10250, CustomerID: 'HANAR', Freight: 32.3800, OrderDate: '1996-07-22T00:00:00.000Z' }];
    }

    dataBound(args: any) {
        for (const cols of this.grid.columns) {
            if ((cols as any).field === 'OrderID') {
                (cols as any).width = 120;
            }
            if ((cols as any).field === 'OrderDate') {
                (cols as any).type = 'date';
                (cols as any).format = 'yMd';
            }
            if ((cols as any).field === 'Freight') {
                (cols as any).format = 'P2';
            }
        }
        this.grid.refreshColumns();
    }
}

```

{% endtab %}