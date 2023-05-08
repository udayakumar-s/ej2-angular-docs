

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ColumnDragEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template:
    `<p id='message'>{{ message }}</p><ejs-grid #grid [dataSource]='data' [allowReordering]='true' height='280px' [enableHover]='false'
         (columnDragStart)="columnDragStart($event)" (columnDrag)="columnDrag($event)" (columnDrop)="columnDrop($event)">
              <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                  <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                  <e-column field='ShipRegion' headerText='Ship Region' width=100></e-column>
                  <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data: object[];
  public message: string;
  @ViewChild('grid') public gridObj: GridComponent;

  ngOnInit(): void {
    this.data = data;
  }
  columnDrop(args: ColumnDragEventArgs) {
    this.message = `columnDrop event triggered`;
    if (args.column.allowReordering == true) {
      this.gridObj.getColumnByField(args.column.field).customAttributes = {
        class: 'customcss',
      };
    }
  }
  columnDragStart(args: ColumnDragEventArgs) {
    this.message = `columnDragStart event triggered`;
    if (args.column.field == 'OrderID') {
      this.gridObj.getColumnByField(args.column.field).allowReordering = false;
    }
  }
  columnDrag(args: ColumnDragEventArgs) {
    var index = args.target.getAttribute('data-colIndex');
    if (index) {
      this.message = `columnDrag event is triggered. ` + args.column.headerText + ` column is dragged to index ` + index;
    }
  }
}



