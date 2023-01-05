

import { Component, OnInit } from '@angular/core';
import { IDataOptions, GroupingBarService } from '@syncfusion/ej2-angular-pivotview';
import { alphanumeric_data } from './datasource.ts';

@Component({
  selector: 'app-container',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings showGroupingBar='true' width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public width: string;
    public dataSourceSettings: IDataOptions;

    ngOnInit(): void {

        this.width = "100%";
        this.dataSourceSettings = {
            dataSource: alphanumeric_data,
            rows: [{ name: 'ProductID', dataType: 'number' }],
            columns: [{ name: 'Country' }],
            values: [{ name: 'Sold', caption:'Units Sold' }, { name: 'Amount', caption:'Sold Amount' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }]
        };
    }
}



