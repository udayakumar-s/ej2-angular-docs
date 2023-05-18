import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { orderDetails } from './datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls:['./app/app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  public data: Object[];

  @ViewChild('grid')
  public grid: GridComponent;
  public toolbar: Object[];
  public heightRow: Object;

  ngOnInit(): void {
    this.data = orderDetails;
    this.heightRow = { small: 20, medium: 40, big: 60 };
  }
  clickHandler(args: any): void {
    this.grid.rowHeight = this.heightRow[args.target.id];
  }
}
