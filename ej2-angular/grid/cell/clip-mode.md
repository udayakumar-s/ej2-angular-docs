# Clip Mode

The clip mode provides options to display its overflow cell content and it can be defined
by the [`columns.clipMode`](../../api/grid/column/#clipmode) property.

There are three types of [`clipMode`](../../api/grid/column/#clipmode). They are:

* **Clip**: Truncates the cell content when it overflows its area.
* **Ellipsis**: Displays ellipsis when the cell content overflows its area.
* **EllipsisWithTooltip**: Displays ellipsis when the cell content overflows its area,
also it will display the tooltip while hover on ellipsis is applied.

{% tab template="grid/clipmode", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { inventoryData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' allowPaging='true'>
        <e-columns>
            <e-column field='Inventor' headerText='Name of the Inventor' clipMode='Clip' width='80'></e-column>
            <e-column field='NumberofPatentFamilies' headerText='Number of Patent Families' clipMode='Ellipsis' width='100'></e-column>
            <e-column field='Country' headerText='Country' width='80'></e-column>
            <e-column field='Number of INPADOC patents' headerText='Number of INPADOC patents' width='100'></e-column>
            <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' clipMode='EllipsisWithTooltip' width='100'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    ngOnInit(): void {
        this.data = inventoryData;
    }
}

```

{% endtab %}

>By default, [`columns.clipMode`](../../api/grid/column/#clipmode) value is **Ellipsis**.