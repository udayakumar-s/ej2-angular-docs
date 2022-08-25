# Batch Editing

In Batch edit mode, when you double-click on the grid cell, then the target cell changed to edit state.
You can bulk save (added, changed and deleted data in the single request) to data source by click on the toolbar's **Update**
button or by externally invoking the [`batchSave`](../../api/grid/edit/#batchsave) method.
To enable Batch edit, set the [`editSettings.mode`](../../api/grid/editSettings/#mode) as **Batch**.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
}

```

{% endtab %}

## Automatically update the column based on another column edited value in batch mode

You can update the column value based on another column edited value in Batch mode by using the Cell Edit Template feature.

In the below demo, we have update the `TotalCost` column value based on the `UnitPrice` and `UnitInStock` column value while batch editing.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { productData } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell, GridComponent
} from '@syncfusion/ej2-angular-grids';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

@Component({
  selector: 'app-root',
  template: `
    <ejs-grid #grid id="grid" [dataSource]="data" [editSettings]="editSettings" [toolbar]="toolbar" height="273px" (cellEdit)="cellEdit($event)">
      <e-columns>
        <e-column field="ProductID" headerText="Product ID" textAlign="Right" isPrimaryKey="true" width="100"></e-column>
        <e-column field="ProductName" headerText="Product Name" width="120"></e-column>
        <e-column field="UnitPrice" headerText="Unit Price" editType="numericedit" [edit]="priceParams" width="150" format="C2" textAlign="Right"></e-column>
        <e-column field="UnitsInStock" headerText="Units In Stock" editType="numericedit" [edit]="stockParams" width="150" textAlign="Right"></e-column>
        <e-column field="TotalCost" headerText="Total Cost" width="150" format="C2" textAlign="Right"></e-column>
      </e-columns>
    </ejs-grid>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('grid')
  public grid: GridComponent;
  public data: Object[];
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public priceParams: IEditCell;
  public stockParams: IEditCell;

  public priceElem: HTMLElement;
  public priceObj: NumericTextBox;

  public stockElem: HTMLElement;
  public stockObj: NumericTextBox;

  ngOnInit(): void {
    this.data = productData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Batch'
    };
    this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
    this.priceParams = {
      create: () => {
        this.priceElem = document.createElement('input');
        return this.priceElem;
      },
      read: () => {
        return this.priceObj.value;
      },
      destroy: () => {
        this.priceObj.destroy();
      },
      write: args => {
        var rowData = args.rowData;
        var rowIndex = this.grid.getRowInfo(args.row).rowIndex;
        this.priceObj = new NumericTextBox({
          value: args.rowData[args.column.field],
          change: function(args) {
            var totalCostValue = args.value * rowData['UnitsInStock'];
            this.grid.updateCell(rowIndex, 'TotalCost', totalCostValue);
          }.bind(this)
        });
        this.priceObj.appendTo(this.priceElem);
      }
    };
    this.stockParams = {
      create: () => {
        this.stockElem = document.createElement('input');
        return this.stockElem;
      },
      read: () => {
        return this.stockObj.value;
      },
      destroy: () => {
        this.stockObj.destroy();
      },
      write: args => {
        var rowData = args.rowData;
        var rowIndex = this.grid.getRowInfo(args.row).rowIndex;
        this.stockObj = new NumericTextBox({
          value: args.rowData[args.column.field],
          change: function(args) {
            var totalCostValue = args.value * rowData['UnitPrice'];
            this.grid.updateCell(rowIndex, 'TotalCost', totalCostValue);
          }.bind(this)
        });
        this.stockObj.appendTo(this.stockElem);
      }
    };
  }
  cellEdit(args) {
    if (args.columnName == 'TotalCost') {
      args.cancel = true;
    }
  }
}
```

{% endtab %}

## Cancel edit based on condition in batch mode

You can prevent the CRUD operations of the Batch edit Grid by using condition in the [`cellEdit`](../../api/grid/#cellEdit), [`beforeBatchAdd`](../../api/grid/#beforeBatchAdd) and [`beforeBatchDelete`](../../api/grid/#beforeBatchDelete) events for Edit, Add and Delete actions respectively.

In the below demo, we prevent the CRUD operation based on the `Role` column value. If the Role Column is `Employee`, we are unable to edit/delete that row.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button (click)="btnClick($event)">Grid is Addable</button>
               <ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' (cellEdit)="cellEdit($event)" (beforeBatchAdd)="beforeBatchAdd($event)" (beforeBatchDelete)="beforeBatchDelete($event)" height='240px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='Role' headerText='Role' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public isAddable: boolean = true;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    cellEdit(args) {
        if (args.rowData['Role'] == 'Employee') {
            args.cancel = true;
        }
    }
    beforeBatchAdd(args) {
        if (!this.isAddable) {
            args.cancel = true;
        }
    }
    beforeBatchDelete(args) {
        if (args.rowData['Role'] == 'Employee') {
            args.cancel = true;
        }
    }
    btnClick(args) {
        args.target.innerText == 'Grid is Addable' ? (args.target.innerText = 'Grid is Not Addable') : (args.target.innerText = 'Grid is Addable');
        this.isAddable = !this.isAddable;
    }
}

```

{% endtab %}

## Confirmation dialog

By default, grid will show the confirm dialog when saving or canceling or performing any actions like filtering, sorting, etc.

{% tab template="grid/edit", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                    editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.editSettings = {
            showConfirmDialog: true, showDeleteConfirmDialog: true,
            allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch'
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
}

```

{% endtab %}

> * [`editSettings.showConfirmDialog`](../../api/grid/editSettings/#showconfirmdialog) requires the [`editSettings.mode`](../../api/grid/editSettings/#mode) to be **Batch**
> * If [`editSettings.showConfirmDialog`](../../api/grid/editSettings/#showconfirmdialog)
set to **false**, then confirmation dialog does not display in batch editing.