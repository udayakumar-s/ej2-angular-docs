import { Component, ViewChild } from '@angular/core';
import { inventoryData } from './datasource';
import { GridComponent, TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `<div style="display: flex">
              <label style="padding: 30px 17px 0 0" >Autowrap for header column :</label>
              <ejs-dropdownlist style="padding: 26px 0 0 0" index="0" width="100" 
              [dataSource]=" dropdownData" (change)="valueChange($event)">
              </ejs-dropdownlist>
            </div>
            <div class="control-section" style="padding-top:20px">
              <ejs-grid #grid [dataSource]='data' allowPaging='true' allowTextWrap='true' 
              [textWrapSettings]='wrapSettings' height='400'>
                <e-columns>
                  <e-column field='Inventor' headerText='Inventor Name' width='180' 
                  textAlign="Right">
                  </e-column>
                  <e-column field='NumberofPatentFamilies' 
                  headerText="Number of Patent Families" 
                  width='180' textAlign="Right">
                  </e-column>
                  <e-column field='Country' headerText='Country' width='140'></e-column>
                  <e-column field='Active' width='120'></e-column>
                  <e-column field='Mainfieldsofinvention' 
                  headerText='Main Fields Of Invention' 
                  width='200'>
                  </e-column>
                </e-columns>
              </ejs-grid>
            </div>`
})
export class AppComponent {

  public data?: Object[] = inventoryData;
  @ViewChild('grid')
  public grid?: GridComponent;
  public wrapSettings: TextWrapSettingsModel = { wrapMode: 'Header' };
  public dropdownData: Object[] = [
    { text: 'Header', value: 'Header' },
    { text: 'Both', value: 'Both' },
  ];

  valueChange(args: any): void {
    (this.grid as any).textWrapSettings.wrapMode = (args as any).value;
  }

}