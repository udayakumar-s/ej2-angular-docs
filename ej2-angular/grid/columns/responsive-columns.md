# Responsive Columns

You can toggle column visibility based on media queries which are defined
at the [`hideAtMedia`](../../api/grid/column/#hideatmedia).
The [`hideAtMedia`](../../api/grid/column/#hideatmedia) accepts valid
[Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ). In the below sample, for **OrderID** column, [`hideAtMedia`](../../api/grid/column/#hideatmedia) property value is set as **(min-width: 700px)** so that **OrderID** column will gets hidden when the browser screen width is lessthan 700px.

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120 hideAtMedia='(min-width: 700px)'>
                    </e-column> //  column visibility hide when browser screen width lessthan 700px;
                    <e-column field='CustomerID' headerText='Customer ID' width=140 hideAtMedia='(max-width: 700px)'>
                    </e-column> // column Visibility show when browser screen width  500px or less;
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120
                    hideAtMedia='(min-width: 500px)'>
                    </e-column> // column visibility hide when browser screen width lessthan 500px;
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=140>
                    </e-column> // it always shown
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