# Column Resizing

Columns width can be resized by clicking and dragging at the right edge of the column header.
While dragging, the width of a respective column will be resized immediately.
Each column can be auto resized by double-clicking at the right edge of the column header.
It will fit the width of that column based on widest cell content.
To enable the column resize, set the [`allowResizing`](../../api/grid/#allowresizing) property to true.

To use the column resize, inject **ResizeService** in the provider section of **AppModule**.

{% tab template="grid/resize", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowResizing]='true' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=100></e-column>
                    <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' width=80></e-column>
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

> You can disable Resizing for a particular column,
by specifying [`columns.allowResizing`](../../api/grid/columnDirective/#allowresizing) to false.
> In RTL mode, you can click and drag the left edge of header cell to resize the column.

## Min and max width

Columns can be restricted to resize in between minimum and maximum width by defining the
[`columns.minWidth`](../../api/grid/columnDirective/#minwidth) and [`columns.maxWidth`](../../api/grid/columnDirective/#maxwidth).

In the below sample, **OrderID**, **Ship Name** and **Ship Country** columns are defined with minimum and maximum width.

{% tab template="grid/resize", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowResizing]='true' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' minWidth= 100 width=150 maxWidth=250 ></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name'  minWidth= 150 width=200 maxWidth=300></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right'  minWidth= 120 width=150 maxWidth=280></e-column>
                    <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' width=80></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];

    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

## Resize stacked column

Stacked columns can be resized by clicking and dragging the right edge of the stacked column header. While dragging, the width of the respective child columns will be resized at the same time. You can disable resize for any particular stacked column by setting [`allowResizing`](../../api/grid/columnDirective/#allowresizing) as **false** to its columns.

In this example, we have disabled resize for **Ship City** column.

{% tab template="grid/resize", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ColumnModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowResizing]='true' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='100' textAlign="Center" minWidth=10></e-column>
                    <e-column headerText='Order Details' [columns]='orderColumns'></e-column>
                    <e-column headerText='Ship Details' [columns]='shipColumns'></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public orderColumns: ColumnModel[];
    public shipColumns: ColumnModel[];


    ngOnInit(): void {
        this.data = data;
        this.orderColumns = [
            {
                field: 'OrderDate',
                headerText: 'Order Date',
                format: 'yMd',
                width: 120,
                textAlign: 'Right',
                minWidth: 10
            },
            {
                field: 'Freight',
                headerText: 'Freight ($)',
                width: 100,
                format: 'C1',
                textAlign: 'Right',
                minWidth: 10
            }
        ];

        this.shipColumns = [
            {
                field: 'ShipCity',
                headerText: 'Ship City',
                width: 100,
                minWidth: 10
            },
            {
                field: 'ShipCountry',
                headerText: 'Ship Country',
                width: 120,
                minWidth: 10
            }
        ];
    }
}

```

{% endtab %}

## Touch interaction

When you tap at the right edge of header cell, a floating handler will be visible over the right border of the column.
To resize the column, tap and drag the floating handler as much you need. You can also autoFit a column by using the Column menu of the grid.

The following screenshot represents the column resizing on the touch device.

![Touch Interaction](../images/column-resizing.jpg)

## Resizing events

During the resizing action, the grid component triggers the below three events.

1. The [`resizeStart`](../../api/grid/#resizestart) event triggers when column resize starts.
2. The [`resizing`](../../api/grid/#resizing) event triggers when column header element is dragged (moved) continuously..
3. The [`resizeStop`](../../api/grid/#resizestop) event triggers when column resize ends.

{% tab template="grid/resize", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowResizing]='true' height='315px' (resizeStart)="resizeStart()"
               (resizing)="resizing()" (resizeStop)="resizeStop()">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=100></e-column>
                    <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' width=80></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }

    resizing() {
        alert('resizing event is Triggered');
    }
    resizeStop() {
        alert('resizeStop event is Triggered');
    }
    resizeStart() {
        alert('resizeStart event is Triggered');
    }
}

```

{% endtab %}