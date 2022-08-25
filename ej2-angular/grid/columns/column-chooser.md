# Column Chooser

The column chooser has options to show or hide columns dynamically. It can be enabled by defining the
[`showColumnChooser`](../../api/grid/#showcolumnchooser) as true.

To use column chooser, inject **ColumnChooserService** in the provider section of **AppModule**.

{% tab template="grid/columnchooser", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [toolbar]='toolbarOptions' height='272px' [showColumnChooser]= 'true'>
               <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right"></e-column>
                    <e-column field='CustomerName' headerText='Customer Name' width='150' [showInColumnChooser]='false'></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign="Right"></e-column>
                    <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="Right"></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' [visible]='false' width='150'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' [visible]='false' width='150'></e-column>
               </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['ColumnChooser'];
    }
}


```

{% endtab %}

> You can hide the column names in column chooser by defining the
[`columns.showInColumnChooser`](../../api/grid/column/#showincolumnchooser) as false.

## Open column chooser by external button

The Column chooser can be displayed on a page through external button by invoking
the [`openColumnChooser`](../../api/grid/columnChooser/#opencolumnchooser) method with **X** and **Y** axis positions.

{% tab template="grid/columnschooser-method", sourceFiles="app/**/*.ts"%}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: ` <button id='show' ej-button class='e-flat' (click)='show()'> open Column Chooser </button>
                <ejs-grid #grid [dataSource]='data' [height]='280' [showColumnChooser]= 'true'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right"></e-column>
                        <e-column field='CustomerName' headerText='Customer Name' width='150' [showInColumnChooser]='false'></e-column>
                        <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign="right"></e-column>
                        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="Right"></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' [visible]='false' width='150'></e-column>
                        <e-column field='ShipCity' headerText='Ship City' [visible]='false' width='150'></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    show() {
        this.grid.columnChooserModule.openColumnChooser(200, 50); // give X and Y axis
    }
}

```

{% endtab %}