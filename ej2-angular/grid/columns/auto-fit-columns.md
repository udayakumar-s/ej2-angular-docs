# AutoFit specific columns

The [`autoFitColumns`](../../api/grid/#autofitcolumns) method resizes the column to fit the widest
cell's content without wrapping. You can autofit specific columns at initial rendering by invoking
the [`autoFitColumns`](../../api/grid/#autofitcolumns) method in [`dataBound`](../../api/grid/#databound) event.

To use autofit feature, you need to inject **ResizeService** in the provider section of **AppModule**.

{% tab template="grid/resize", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
selector: 'app-root',
template: `<ejs-grid #grid [dataSource]='data' height='315px' (dataBound)='dataBound()' >
<e-columns>
<e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
<e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
<e-column field='ShipName' headerText='Ship Name' width=80></e-column>
<e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
<e-column field='ShipCity' headerText='Ship City' width=100></e-column>
</e-columns>
</ejs-grid>`
})
export class AppComponent implements OnInit {

public data: object[];
@ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    dataBound() {
        this.grid.autoFitColumns(['ShipAddress', 'ShipName']);
    }
}

```

{% endtab %}

> You can autofit all columns, by invoking the [`autoFitColumns`](../../api/grid/#autofitcolumns)
method without column name.