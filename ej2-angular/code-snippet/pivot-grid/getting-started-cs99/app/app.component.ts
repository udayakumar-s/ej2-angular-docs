

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, memberEditorOpenEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource.ts';

@Component({
  selector: 'app-container',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings (memberEditorOpen)='memberEditorOpen($event)' showGroupingBar='true' width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public width: string;
    public dataSourceSettings: IDataOptions;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj: PivotView;

    memberEditorOpen(args: memberEditorOpenEventArgs): void {
       if (args.fieldName == 'Country') {
            args.fieldMembers = args.fieldMembers.filter((key) => {
                return (key.id == 'France' || key.id == 'Germany')
            });
       }
    }

    ngOnInit(): void {

        this.width = '100%';

        this.dataSourceSettings = {
            dataSource: Pivot_Data,
            expandAll: false,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };

    }
}



