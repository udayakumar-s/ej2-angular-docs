---
title: "Row"
component: "Grid"
description: "Documentation for row templates (custom row content), detail templates, and DataGrid row styles."
---

# Row

It represents the record details that are fetched from the data source.

## Row Customization

### Using event

You can customize the appearance of the Row by using the [`rowDataBound`](../../api/grid/#rowdatabound) event.
The [`rowDataBound`](../../api/grid/#rowdatabound) event triggers for every row. In that event handler,
you can get [`RowDataBoundEventArgs`](../../api/grid/rowDataBoundEventArgs) which contain details of the row.

{% tab template="grid/custom-cell", sourceFiles="app/**/*.ts"%}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [enableHover]='false' [allowSelection]='false' [height]='315'
               (rowDataBound)='rowDataBound($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
                    </e-columns>
                </ejs-grid>`,
    styleUrls: ['./app/app.style.css']
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }

    rowDataBound(args: RowDataBoundEventArgs) {
        const Freight = 'Freight';
        if (args.data[Freight] < 30) {
            args.row.classList.add('below-30');
        } else if (args.data[Freight] < 80) {
            args.row.classList.add('below-80');
        } else {
            args.row.classList.add('above-80');
        }
    }
}


```

{% endtab %}

### Using CSS customize alternate rows

You can change the grid's alternative rows' background color by overriding the **.e-altrow** class.

```css
.e-grid .e-altrow {
    background-color: #fafafa;
}
```

Please refer the following example.

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts", isDefaultActive=true %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=140></e-column>
                </e-columns>
               </ejs-grid>`,
    styles: [`
        .e-grid .e-altrow {
            background-color: #fafafa;
        }
    `]
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data.slice(0, 8);
    }
}

```

{% endtab %}

## See Also

* [How to customize the row height in Angular Grid](https://www.syncfusion.com/forums/138140/how-to-customize-the-row-height-in-angular-grid)
* [How to set font size and padding of Angular Grid's toolbar and filter bar](https://www.syncfusion.com/forums/150181/how-to-set-font-size-and-padding-of-angular-grids-toolbar-and-filter-bar)
* [How to displaying serial number in Angular Grid](https://www.syncfusion.com/forums/166563/how-to-displaying-serial-number-in-angular-grid)
* [How to add/update a new row programmatically in Angular Grid](https://www.syncfusion.com/forums/144356/how-to-add-update-a-new-row-programmatically-in-angular-grid)