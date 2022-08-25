

import { Component, OnInit, ViewChild } from '@angular/core';
import { EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids';
import { TimePicker } from '@syncfusion/ej2-calendars';
import { enableRipple } from '@syncfusion/ej2-base';
import { purchaseData } from './datasource';
import { Column, EditSettingsModel, PageSettingsModel, ToolbarItems, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data' [allowPaging]='true' [editSettings]='editSettings' [pageSettings]='pageOptions' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' isPrimaryKey='true' [validationRules]="orderidrules" width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' type= 'number' textAlign= 'Right'
                     editType= 'numericedit' format= 'C2' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' type= 'date' format= 'hh:mm' [edit]='dpParams' width=150></e-column>
                </e-columns>
               </ejs-grid>`,
  providers: [ToolbarService, EditService, PageService],
})
export class AppComponent implements OnInit {
  public data: object[];
  @ViewChild('grid') public grid: GridComponent;
  public editSettings: EditSettingsModel;
  public pageOptions: PageSettingsModel;
  public toolbar: ToolbarItems[];
  public tpElem: HTMLElement;
  public dpParams: IEditCell;
  public timeObject: TimePicker;

  public createOrderDateFn() {
    this.tpElem = document.createElement('input');
    return this.tpElem;
  }
  public destroyOrderDateFn() {
    this.timeObject.destroy();
  }
  public readOrderDateFn() {
    return this.timeObject.value;
  }
  public writeOrderDateFn(args) {
    enableRipple(true);
    this.timeObject = new TimePicker({
      value: args.rowData[args.column.field],
      step: 60,
    });
    this.timeObject.appendTo(this.tpElem);
  }

  ngOnInit(): void {
    this.data = purchaseData;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.pageOptions = { pageSizes: true, pageSize: 8 };
    this.dpParams = {
      create: this.createOrderDateFn,
      read: this.readOrderDateFn,
      destroy: this.destroyOrderDateFn,
      write: this.writeOrderDateFn,
    };
  }
}



