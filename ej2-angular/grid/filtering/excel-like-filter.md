# Excel Like Filter

You can use the [`columns.filterTemplate`](../../api/grid/column/#filtertemplate) property to define custom component in advanced filter UI from excel filter for a particular column.

The following example demonstrates the way to use filter template for a column when using excel filter. In the following example, the [`DropdownList`](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started/) component is used to filter **CustomerID** column using filter template.

{% tab template="grid/filter-template", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [allowPaging]='true'[filterSettings]='filterOption'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=140></e-column>
                    <e-column field='Name' headerText='Name' width=140></e-column>
                    <e-column field='CustomerID' headerText='CustomerID' width=170>
                        <ng-template #filterTemplate let-data>
                            <ejs-dropdownlist id='dropdown' [(ngModel)]='data.CustomerID' [dataSource]='dropdata'
                             [fields]='fields' [popupHeight]='height'></ejs-dropdownlist>
                       </ng-template>
                    </e-column>
                    <e-column field='ShipName' headerText='ShipName' width=140></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public filterOption: FilterSettingsModel = { type: 'Excel' };
    public dropdata: string[] = DataUtil.distinct(data, 'CustomerID') as string[];
    public fields: object = { text: 'CustomerID', value: 'CustomerID' };
    public height = '220px';
    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

> * By default, while opening the excel/checkbox filter in the Grid, the filter dialog will get and display the distinct data from the first 1000 records bound to the Grid to optimize performance. The remaining records will be returned as a result of the search option of the filter dialog.
> * However, we can increase the excel/checkbox filter count by modifying the `filterChoiceCount` argument value(as per our need) in the [`actionBegin`](../../api/grid/#actionBegin) event when the [`requestType`](../../api/grid/filterEventArgs/#requesttype) is `filterchoicerequest` or `filtersearchbegin`. This is demonstrated in the below code snippet,

```typescript
actionBegin(args: FilterEventArgs) {
    if (args.requestType === "filterchoicerequest" || args.requestType === "filtersearchbegin") {
        args.filterChoiceCount = 3000;
    }
}
```