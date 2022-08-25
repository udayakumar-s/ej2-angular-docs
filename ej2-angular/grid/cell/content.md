# Displaying HTML content

The HTML tags can be displayed in the Grid header and content by enabling the
[`disableHtmlEncode`](../../api/grid/column/#disablehtmlencode) property.

{% tab template="grid/custom-cell", sourceFiles="app/**/*.ts"%}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='<span> Order ID </span>'
                         [disableHtmlEncode]='true' textAlign='Right' width=140></e-column>
                        <e-column field='CustomerID' headerText='<span> Customer ID </span>' [disableHtmlEncode]='false'
                         width=120></e-column>
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