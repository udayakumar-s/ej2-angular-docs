

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowResizing]='true' height='315px' (resizeStart)="resizeStart()"
               (resizing)="resizing()" (resizeStop)="resizeStop()">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=100></e-column>
                    <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' width=80></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }

    resizing() {
        alert('resizing event is Triggered');
    }
    resizeStop() {
        alert('resizeStop event is Triggered');
    }
    resizeStart() {
        alert('resizeStart event is Triggered');
    }
}



