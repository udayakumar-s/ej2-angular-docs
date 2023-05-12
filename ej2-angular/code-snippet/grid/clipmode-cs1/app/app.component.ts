import { Component, OnInit, ViewChild } from '@angular/core';
import { inventoryData } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `
    <div style="display: flex">
    <label style="padding: 10px 10px 26px 0"> Change the clip mode: </label>
    <ejs-dropdownlist
    style="margin-top:5px"
    index="0"
    width="150"
    [dataSource]="ddlData"
    (change)="valueChange($event)"></ejs-dropdownlist>
    </div>
    <ejs-grid #grid style="padding: 5px 5px" [dataSource]='data' allowPaging='true'>
        <e-columns>
            <e-column field='Inventor' headerText='Name of the Inventor' width='80'></e-column>
            <e-column field='NumberofPatentFamilies' headerText='Number of Patent Families' width='100'></e-column>
            <e-column field='Country' headerText='Country' width='80'></e-column>
            <e-column field='Number of INPADOC patents' headerText='Number of INPADOC patents' width='100'></e-column>
            <e-column field='MainFieldsofInvention' headerText='Main fields of invention' width='100'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data: object[];
  @ViewChild('grid')
  public grid: GridComponent;
  public ddlData: Object[] = [
    { text: 'Ellipsis', value: 'Ellipsis' },
    { text: 'Clip', value: 'Clip' },
    { text: 'Ellipsis with Tooltip', value: 'EllipsisWithTooltip' },
  ];
  ngOnInit(): void {
    this.data = inventoryData;
  }
  valueChange(args: any): void {
    if (args.value === 'Clip') {
      this.grid.getColumnByField('Inventor').clipMode = 'Clip';
      this.grid.refresh();
    }
    else if (args.value === 'Ellipsis') {
      this.grid.getColumnByField('NumberofPatentFamilies').clipMode = 'Ellipsis';
      this.grid.refresh();
    }
    else {
      this.grid.getColumnByField('MainFieldsofInvention').clipMode = 'EllipsisWithTooltip';
      this.grid.refresh();
    }
  }
}



