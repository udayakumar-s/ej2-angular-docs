import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  template: `<div class="control-section" >
              <ejs-grid [dataSource]="data" allowPaging="true" 
              (headerCellInfo)="onHeaderCellInfo($event)" >
                <e-columns>
                  <e-column field="OrderID" headerText="Order ID" width="120" 
                  textAlign="Center"></e-column>
                  <e-column field="CustomerID" headerText="Customer ID" width="150">
                  </e-column>
                  <e-column field="OrderDate" headerText="Order Date" width="130" 
                  format="yMd" textAlign="Center" >
                  </e-column>
                  <e-column field="Freight" headerText="Freight" width="120" format="C2" 
                  textAlign="Center"></e-column>
                  <e-column field="ShippedDate" headerText="Shipped Date" width="130"
                  format="yMd" textAlign="Center">
                  </e-column>
                </e-columns>
              </ejs-grid>
            </div>`,
  styleUrls: ['./app/app.component.css'],
})
export class AppComponent implements OnInit {

  public data: object[];

  ngOnInit() {
    this.data = data;
  }
  public onHeaderCellInfo(args: any) {
    if (args.cell.column.field == 'OrderDate') {
      args.node.classList.add('customcss');
    }
  }

}
