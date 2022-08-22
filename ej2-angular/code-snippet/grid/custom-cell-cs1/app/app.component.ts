

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [enableHover]='false' [allowSelection]='false' [height]='315'
                (queryCellInfo)='customiseCell($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
                    </e-columns>
                </ejs-grid>`,
    styleUrls: ['./app/app.style.css']
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }

    customiseCell(args: QueryCellInfoEventArgs) {
        if (args.column.field === 'Freight') {
            if (args.data[args.column.field] < 30) {
                args.cell.classList.add('below-30');
            } else if (args.data[args.column.field] < 80) {
                args.cell.classList.add('below-80');
            } else {
                args.cell.classList.add('above-80');
            }
        }
    }
}



