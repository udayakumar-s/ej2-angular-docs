

import { Component } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, GroupingBarService, AggregateEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource.ts';

@Component({
  selector: 'app-container',
  providers: [GroupingBarService],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width showGroupingBar='true' (aggregateCellInfo)='aggregateCell($event)'></ejs-pivotview>`
})

export class AppComponent {
    public dataSourceSettings: IDataOptions;
    public width: string;
    conditionalFormatting(args: AggregateEventArgs) {
        args.skipFormatting = true;
    }

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data,
            expandAll: false,
            enableSorting: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
            showAggregationOnValueField: false
        };
        this.width = "100%";
    }
 }


