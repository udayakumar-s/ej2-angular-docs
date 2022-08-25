# Reorder

Reordering can be done by drag and drop of a particular column header from one index to another index within the grid.
To enable reordering, set the [`allowReordering`](../../api/grid/#allowreordering) to true.

To use Reordering, you need to inject **ReorderService** in the provider section of **AppModule**.

{% tab template="grid/reorder", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowReordering]='true' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
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

> You can disable reordering a particular column by setting the [`columns.allowReordering`](../../api/grid/column/#allowreordering) to false.

## Reorder single columns

Grid have option to reorder Columns either by Interaction or by using the [`reorderColumns`](../../api/grid/#reordercolumns) method. In the below sample, **ShipCity** column is reordered to last column position by using the method.

{% tab template="grid/reorder", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    template:
    `<button ej-button id='reorderSingleCol' (click)='reorderSingleCol()'>Reorder Ship City to Last</button>
    <ejs-grid #grid='' [dataSource]='data' [allowReordering]='true' height='280px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipRegion' headerText='Ship Region' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    @ViewChild('grid')
    public gridObj: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    reorderSingleCol(): void {
        this.gridObj.reorderColumns('ShipCity','ShipName');
    }
}
```

{% endtab %}

## Reorder multiple columns

User can reorder a single column at a time by Interaction. Sometimes we need to have reorder multiple columns at the same time, It can be achieved through programmatically by using [`reorderColumns`](../../api/grid/#reordercolumns) method.

In the below sample, **Ship City** and **Ship Region** column is reordered to last column position.

{% tab template="grid/reorder", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template:
    `<button ej-button id='reorderMultipleCols' (click)='reorderMultipleCols()'>Reorder Ship City and Ship Region to Last</button>
    <ejs-grid #grid='' [dataSource]='data' [allowReordering]='true' height='280px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipRegion' headerText='Ship Region' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid') public gridObj: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    reorderMultipleCols(): void {
        this.gridObj.reorderColumns(['ShipCity', 'ShipRegion'], 'ShipName');
    }
}

```

{% endtab %}

## Reorder events

During the reorder action, the grid component triggers the below three events.

1. The [`columnDragStart`](../../api/grid/#columndragstart) event triggers when column header element drag (move) starts.
2. The [`columnDrag`](../../api/grid/#columndrag) event triggers when column header element is dragged (moved) continuously.
3. The [`columnDrop`](../../api/grid/#columndrop) event triggers when a column header element is dropped on the target column.

{% tab template="grid/reorder", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template:
        `<ejs-grid #grid [dataSource]='data' [allowReordering]='true' height='280px'
         (columnDragStart)="columnDragStart()" (columnDrag)="columnDrag()" (columnDrop)="columnDrop()">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipRegion' headerText='Ship Region' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid') public gridObj: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    columnDrop() {
        alert('columnDrop event is Triggered');
    }
    columnDragStart() {
        alert('columnDragStart event is Triggered');
    }
    columnDrag() {
        alert('columnDrag event is Triggered');
    }
}

```

{% endtab %}