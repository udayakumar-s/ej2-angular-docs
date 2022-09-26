

import { Component, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, FieldListService } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource.ts';

@Component({
  selector: 'app-container',
  providers: [FieldListService],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings showFieldList='true' width=width  (enginePopulated)='afterPopulate($event)'></ejs-pivotview></div>`
})

export class AppComponent {

    public width: string;
    public dataSourceSettings: IDataOptions;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj: PivotViewComponent;

    afterPopulate(arge: EnginePopulatedEventArgs): void {
        Object.keys(this.pivotGridObj.engineModule.fieldList).forEach((key, index) => {
                if (key === 'Quarter') {
                    this.pivotGridObj.engineModule.fieldList[key].caption = 'Production Quarter Year';
                }
                else if (key === 'Year') {
                    this.pivotGridObj.engineModule.fieldList[key].caption = 'Production Year';
                }
        });  
    }

    ngOnInit(): void {

        this.width = '100%';
        this.dataSourceSettings = {
            dataSource: Pivot_Data,
            columns: [{ name: 'Products' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
 }



