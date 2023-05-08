import { Component, OnInit,ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315' (dataBound)="dataBound($event)">
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
                        <e-column field='ShipName' headerText='Ship Name' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {
    @ViewChild('grid', { static: true })
    public grid: GridComponent;
    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }
    dataBound() {
        alert(this.grid.getCellFromIndex(1, 2).outerHTML);
        this.grid.getCellFromIndex(1, 2).style.background = '#f9920b';
    }
}



