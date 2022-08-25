# Add to Persist

## Persist the column template, header template and header Text

By default, the Grid properties such as column template, header text, header template, column formatter, and value accessor will not persist when [enablePersistence](../../api/grid/#enablepersistence) is set to true. Because the column template and header text can be customized at the application level.

If you wish to restore all these column properties, then you can achieve it by cloning the grid’s columns property using JavaScript Object’s assign method and storing this along with the persist data manually. While restoring the settings, this column object must be assigned to the grid’s columns property to restore the column settings as demonstrated in the following sample.

{% tab template="grid/grouping1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { FilterService, PageService, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button ej-button id='restore' (click)='clickHandler()'>Restore</button>
               <ejs-grid #grid id="Grid" [dataSource]='data' [enablePersistence]='true' [allowPaging]='true' [allowFiltering]='true'
           height='210px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120>
                    </e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150 headerTemplate='#customertemplate'>
                    </e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150  template='#template'>
                    </e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [FilterService, PageService]
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid')
    public grid: GridComponent;
    ngOnInit(): void {
        this.data = data;
    }

    clickHandler() {
        var savedProperties = JSON.parse(this.grid.getPersistData());
        var gridColumnsState = Object.assign([], this.grid.getColumns());
        savedProperties.columns.forEach(function (col) {
            var headerText = gridColumnsState.find(function (colColumnsState) { return colColumnsState.field === col.field; })['headerText'];
            var colTemplate = gridColumnsState.find(function (colColumnsState) { return colColumnsState.field === col.field; })['template'];
            var headerTemplate = gridColumnsState.find(function (colColumnsState) { return colColumnsState.field === col.field; })['headerTemplate'];
            col.headerText = 'Text Changed';
            col.template = colTemplate;
            col.headerTemplate = headerTemplate;
        });
        console.log(savedProperties);
        this.grid.setProperties(savedProperties);
   }
}

```

{% endtab %}