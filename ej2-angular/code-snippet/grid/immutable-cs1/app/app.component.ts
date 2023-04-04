

import { Component, ViewChild } from "@angular/core";
import { ButtonComponent } from "@syncfusion/ej2-angular-buttons";
import { GridComponent } from "@syncfusion/ej2-angular-grids";
import { data } from "./datasource";

@Component({
    selector: 'app-root',
    templateUrl: 'app/app.template.html'
})
export class AppComponent implements OnInit {
  public data: Object[] = [];
  public pageSettings: Object = { pageSize: 50 };
  public immutableStart: number;
  public normalStart: number;
  public primaryKey: number = 0;
  @ViewChild("immutable")
  public immutableGrid: GridComponent;
  @ViewChild("normal")
  public normalGrid: GridComponent;
  @ViewChild("addtop")
  public addtop: ButtonComponent;
  @ViewChild("addbottom")
  public addbottom: ButtonComponent;
  @ViewChild("delete")
  public delete: ButtonComponent;
  @ViewChild("reverse")
  public reverse: ButtonComponent;
  @ViewChild("paging")
  public paging: ButtonComponent;
  public immutableInit: boolean = true;
  public init: boolean = true;

  ngOnInit(): void {
    this.data = data;
  }

  immutableBeforeDataBound(): void {
    this.immutableStart = new Date().getTime();
  }

  immutableDataBound(): void {
    let val: number | string = this.immutableInit ? '' : new Date().getTime() - this.immutableStart;
    document.getElementById("immutableDelete").innerHTML =
      "Immutable rendering Time: " + "<b>" + val + "</b>" + "<b>ms</b>";
    this.immutableStart = 0; this.immutableInit = false;
  }

  normalBeforeDataBound(): void {
    this.normalStart = new Date().getTime();
  }

  normalDataBound(): void {
    let val: number = this.init ? '' : new Date().getTime() - this.normalStart;
    document.getElementById("normalDelete").innerHTML =
      "Normal rendering Time: " + "<b>" + val + "</b>" + "<b>ms</b>";
    this.normalStart = 0; this.init = false;
  }

  addTopEvent(): void {
    let addedRecords: object[] = [
      { 'OrderID': ++this.primaryKey, 'ProductName': 'Chai', 'ProductID': 'Sasquatch Ale', 'CustomerID': 'QUEDE', 'CustomerName': 'Yoshi Tannamuri' },
      { 'OrderID': ++this.primaryKey, 'ProductName': 'Georg Pipps', 'ProductID': 'Valkoinen suklaa', 'CustomerID': 'RATTC', 'CustomerName': 'Martín Sommer' },
      { 'OrderID': ++this.primaryKey, 'ProductName': 'Yoshi Tannamuri', 'ProductID': 'Gula Malacca', 'CustomerID': 'COMMI', 'CustomerName': 'Ann Devon' },
      { 'OrderID': ++this.primaryKey, 'ProductName': 'Palle Ibsen', 'ProductID': 'Rogede sild', 'CustomerID': 'RATTC', 'CustomerName': 'Paula Wilson' },
      { 'OrderID': ++this.primaryKey, 'ProductName': 'Francisco Chang', 'ProductID': 'Mascarpone Fabioli', 'CustomerID': 'ROMEY', 'CustomerName': 'Jose Pavarotti' }
    ];
    var aData = addedRecords.concat(this.immutableGrid.dataSource as object[]);
    this.normalGrid.setProperties({ dataSource: aData });
    this.immutableGrid.setProperties({ dataSource: aData });
  }

  addBottomEvent(): void {
    let addedRecords: object[] = [
      { 'OrderID': ++this.primaryKey, 'ProductName': 'Chai', 'ProductID': 'Sasquatch Ale', 'CustomerID': 'QUEDE', 'CustomerName': 'Yoshi Tannamuri' },
      { 'OrderID': ++this.primaryKey, 'ProductName': 'Georg Pipps', 'ProductID': 'Valkoinen suklaa', 'CustomerID': 'RATTC', 'CustomerName': 'Martín Sommer' },
      { 'OrderID': ++this.primaryKey, 'ProductName': 'Yoshi Tannamuri', 'ProductID': 'Gula Malacca', 'CustomerID': 'COMMI', 'CustomerName': 'Ann Devon' },
      { 'OrderID': ++this.primaryKey, 'ProductName': 'Palle Ibsen', 'ProductID': 'Rogede sild', 'CustomerID': 'RATTC', 'CustomerName': 'Paula Wilson' },
      { 'OrderID': ++this.primaryKey, 'ProductName': 'Francisco Chang', 'ProductID': 'Mascarpone Fabioli', 'CustomerID': 'ROMEY', 'CustomerName': 'Jose Pavarotti' }
    ]
    let aData = addedRecords.concat(this.immutableGrid.dataSource as object[]);
    this.normalGrid.setProperties({ dataSource: aData });
    this.immutableGrid.setProperties({ dataSource: aData });
  }

  deleteEvent(): void {
    (this.immutableGrid.dataSource as object[]).splice(0, 5);
    this.normalGrid.setProperties({ dataSource: this.immutableGrid.dataSource });
    this.immutableGrid.setProperties({ dataSource: this.immutableGrid.dataSource });
  }

  sortEvent(): void {
    let aData: object[] = (this.immutableGrid.dataSource as object[]).reverse();
    this.normalGrid.setProperties({ dataSource: aData });
    this.immutableGrid.setProperties({ dataSource: aData });
  }

  pageEvent(): void {
    let totalPage: number = (this.immutableGrid.dataSource as object[]).length / this.immutableGrid.pageSettings.pageSize;
    let page: number = Math.floor(Math.random() * totalPage) + 1;
    this.normalGrid.setProperties({ pageSettings: { currentPage: page } });
    this.immutableGrid.setProperties({ pageSettings: { currentPage: page } });
  }
}



