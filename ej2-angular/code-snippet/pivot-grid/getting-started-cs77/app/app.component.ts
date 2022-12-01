

import { Component, ViewChild } from '@angular/core';
import { PivotFieldListComponent, PivotViewComponent, FieldListService, IDataOptions, IDataSet,
    EnginePopulatedEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Browser, setStyleAttribute, prepend } from '@syncfusion/ej2-base';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Pivot_Data } from './datasource.ts';

@Component({
  selector: 'app-container',
  providers: [FieldListService],
  styleUrls: ['app/app.component.css'],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotfieldlist #pivotfieldlist id='PivotFieldList' [dataSourceSettings]=dataSourceSettings renderMode="Fixed" (enginePopulated)='afterPopulate($event)' allowCalculatedField='true' (load)='onLoad()' (dataBound)='ondataBound()'></ejs-pivotfieldlist>
  <ejs-pivotview #pivotview id='PivotViewFieldList' width='99%' height='530' (enginePopulated)='afterEnginePopulate($event)' [gridSettings]='gridSettings'></ejs-pivotview>`
})

export class AppComponent {
    public dataSourceSettings: IDataOptions;
    public gridSettings: GridSettings;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj: PivotViewComponent;

    @ViewChild('pivotfieldlist')
    public fieldlistObj: PivotFieldListComponent;

    afterPopulate(arge: EnginePopulatedEventArgs): void {
        if (this.fieldlistObj && this.pivotGridObj) {
            this.fieldlistObj.updateView(this.pivotGridObj);
        }
    }
    afterEnginePopulate(args: EnginePopulatedEventArgs): void {
        if (this.fieldlistObj && this.pivotGridObj) {
            this.fieldlistObj.update(this.pivotGridObj);
        }
    }
    onLoad(): void {
        if (Browser.isDevice) {
            this.fieldlistObj.renderMode = 'Popup';
            this.fieldlistObj.target = '.control-section';
            document.getElementById('PivotFieldList').removeAttribute('style');
            setStyleAttribute(document.getElementById('PivotFieldList'), {
                'height': 0,
                'float': 'left'
            });
        }
    }

    ondataBound(): void {
        if (Browser.isDevice) {
            prepend([document.getElementById('PivotFieldList')], document.getElementById('PivotView'));
        }
    }

    ngOnInit(): void {

        this.gridSettings = {
            columnWidth: 140
        } as GridSettings;

        this.dataSourceSettings = {
            dataSource: Pivot_Data,
            expandAll: false,
            enableSorting: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
 }



