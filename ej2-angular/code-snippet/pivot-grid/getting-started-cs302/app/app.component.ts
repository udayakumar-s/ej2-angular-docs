

import { Component, ViewChild } from '@angular/core';
import { PivotFieldListComponent, PivotViewComponent, FieldListService, IDataOptions, IDataSet,
    EnginePopulatedEventArgs, VirtualScrollService } from '@syncfusion/ej2-angular-pivotview';
import { Browser, setStyleAttribute, prepend } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-container',
  providers: [FieldListService, VirtualScrollService],
  styleUrls: ['app/app.component.css'],
  template: `<ejs-pivotfieldlist #pivotfieldlist id='PivotFieldList' [dataSourceSettings]=dataSourceSettings renderMode="Fixed" (enginePopulated)='afterPopulate($event)' allowCalculatedField='true' (load)='onLoad()' (dataBound)='ondataBound()'></ejs-pivotfieldlist>
  <ejs-pivotview #pivotview id='PivotViewFieldList' width='99%' height='530' enableVirtualization='true '(enginePopulated)='afterEnginePopulate($event)'></ejs-pivotview>`
})

export class AppComponent {
    public dataSourceSettings: IDataOptions;
    data(count: number) {
      let result: Object[] = [];
      let dt: number = 0;
      for (let i: number = 1; i < count + 1; i++) {
        dt++;
        let round: string;
        let toString: string = i.toString();
        if (toString.length === 1) {
          round = "0000" + i;
        } else if (toString.length === 2) {
          round = "000" + i;
        } else if (toString.length === 3) {
          round = "00" + i;
        } else if (toString.length === 4) {
          round = "0" + i;
        } else {
          round = toString;
        }
        result.push({
          ProductID: "PRO-" + round,
          Year: "FY " + (dt + 2013),
          Price: Math.round(Math.random() * 5000) + 5000,
          Sold: Math.round(Math.random() * 80) + 10
        });
        if (dt / 4 == 1) {
          dt = 0;
        }
      }
      return result;
    }

    @ViewChild('pivotview', {static: false})
    public pivotObj: PivotViewComponent;

    @ViewChild('pivotfieldlist')
    public fieldListObj: PivotFieldListComponent;

    afterPopulate(arge: EnginePopulatedEventArgs): void {
      if (this.fieldListObj && this.pivotObj) {
          this.fieldListObj.updateView(this.pivotObj);
      }
    }
    afterEnginePopulate(args: EnginePopulatedEventArgs): void {
      if (this.fieldListObj && this.pivotObj) {
          this.fieldListObj.update(this.pivotObj);
      }
    }
    onLoad(): void {
      if (Browser.isDevice) {
          this.fieldListObj.renderMode = 'Popup';
          this.fieldListObj.target = '.control-section';
          document.getElementById('PivotFieldList').removeAttribute('style');
          setStyleAttribute(document.getElementById('PivotFieldList'), {
              'height': 0,
              'float': 'left'
          });
      }
      this.pivotGridMdule = this.pivotObj;
      //Assigning report to pivot table component
      this.pivotObj.dataSourceSettings = this.fieldListObj.dataSourceSettings;
      //Generating page settings based on pivot table component’s size.
      this.pivotObj.updatePageSettings(true);
      //Assigning page settings to field list component.
      fieldListObj.pageSettings = pivotObj.pageSettings;
    }

    ondataBound(): void {
      if (Browser.isDevice) {
          prepend([document.getElementById('PivotFieldList')], document.getElementById('PivotView'));
      }
    }

    ngOnInit(): void {
      this.dataSourceSettings = {
          dataSource: this.data(1000) as IDataSet[],
          enableSorting: false,
          expandAll: true,
          formatSettings: [{ name: 'Price', format: 'C0' }],
          rows: [{ name: 'ProductID' }],
          columns: [{ name: 'Year' }],
          values: [{ name: 'Price', caption: 'Unit Price' }, { name: 'Sold', caption: 'Unit Sold' }]
      };
    }
 }



