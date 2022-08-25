# Row Height

You can customize the row height of grid rows through the [`rowHeight`](../../api/grid/#rowheight) property. The [`rowHeight`](../../api/grid/#rowheight) property
is used to change the row height of entire grid rows.

In the below example, the [`rowHeight`](../../api/grid/#rowheight) is set as '60px'.

{% tab template="grid/custom-cell", sourceFiles="app/**/*.ts"%}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [enableHover]='false' [allowSelection]='false' [height]='315' [rowHeight]='60'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
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

## Customize row height for particular row

Grid row height for particular row can be customized using the [`rowDataBound`](../../api/grid/#rowdatabound)
event by setting the [`rowHeight`](../../api/grid/#rowheight) in arguments for each row based on the requirement.

In the below example, the row height for the row with OrderID as '10249' is set as '90px' using the [`rowDataBound`](../../api/grid/#rowdatabound) event.

{% tab template="grid/custom-cell", sourceFiles="app/**/*.ts"%}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315' (rowDataBound)='rowDataBound($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data: object[];

    ngOnInit(): void {
        this.data = new DataManager(data as JSON[]).executeLocal(new Query().take(8));
    }

    public rowDataBound(args: RowDataBoundEventArgs) {
        const OrderID = 'OrderID';
        if (args.data[OrderID] === 10249) {
            args.rowHeight = 90;
        }
    }
}

```

{% endtab %}

> In virtual scrolling mode, it is not applicable to set the [`rowHeight`](../../api/grid/#rowheight) using the [`rowDataBound`](../../api/grid/#rowdatabound) event.