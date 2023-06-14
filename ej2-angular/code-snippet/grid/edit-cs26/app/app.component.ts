

import { Component, OnInit, ViewChild } from '@angular/core';
import { productData } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell, GridComponent
} from '@syncfusion/ej2-angular-grids';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

@Component({
  selector: 'app-root',
  template: `
    <ejs-grid #grid id="grid" [dataSource]="data" [editSettings]="editSettings" [toolbar]="toolbar" height="273px">
      <e-columns>
        <e-column field="ProductID" headerText="Product ID" textAlign="Right" isPrimaryKey="true" width="100"></e-column>
        <e-column field="ProductName" headerText="Product Name" width="120"></e-column>
        <e-column field="UnitPrice" headerText="Unit Price" editType="numericedit" [edit]="priceParams" width="150" format="C2" textAlign="Right"></e-column>
        <e-column field="UnitsInStock" headerText="Units In Stock" editType="numericedit" [edit]="stockParams" width="150" textAlign="Right"></e-column>
        <e-column field="TotalCost" headerText="Total Cost" width="150" [allowEditing]= 'false' format="C2" textAlign="Right"></e-column>
      </e-columns>
    </ejs-grid>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('grid')
  public grid?: GridComponent;
  public data?: Object[];
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public priceParams?: IEditCell;
  public stockParams?: IEditCell;

  public priceElem?: HTMLElement;
  public priceObj?: NumericTextBox;

  public stockElem?: HTMLElement;
  public stockObj?: NumericTextBox;

  ngOnInit(): void {
    this.data = productData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    (this as any).priceParams = {
      create: () => {
        (this as any).priceElem = document.createElement('input');
        return (this as any).priceElem;
      },
      read: () => {
        return this.priceObj?.value;
      },
      destroy: () => {
        this.priceObj?.destroy();
      },
      write: (args: any) => {
        this.priceObj? = new NumericTextBox({
          value: (args as any).rowData[(args as any).column.field],
          change: ((args: any) => {
            var formEle = this.grid?.element.querySelector('form')
              .ej2_instances[0];
            var totalCostFieldEle = formEle.getInputElement('TotalCost');
            totalCostFieldEle.value = this.priceObj?.value * (this as any).stockObj.value;
          }).bind(this)
        });
        this.priceObj?.appendTo((this as any).priceElem);
      }
    };
    (this as any).stockParams = {
      create: () => {
        (this as any).stockElem = document.createElement('input');
        return (this as any).stockElem;
      },
      read: () => {
        return (this as any).stockObj.value;
      },
      destroy: () => {
        (this as any).stockObj.destroy();
      },
      write: (args: any) => {
        this.stockObj = new NumericTextBox({
          value: (args as any).rowData[(args as any).column.field],
          change: ((args: any) => {
            var formEle = (this.grid as any).element.querySelector('form')
              .ej2_instances[0];
            var totalCostFieldEle = formEle.getInputElement('TotalCost');
            totalCostFieldEle.value = this.priceObj?.value * (this as any).stockObj.value;
          }).bind(this)
        });
        (this as any).stockObj.appendTo((this as any).stockElem);
      }
    };
  }
}


