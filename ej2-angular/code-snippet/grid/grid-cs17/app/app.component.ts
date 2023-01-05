

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' headerTextAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string' textAlign='Left' headerTextAlign='Left' width=90></e-column>
                    <e-column field='OrderDate' headerText='Order Date' type='date'  textAlign='Center' headerTextAlign='Center' format='yMd' width=140></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' type='string' textAlign='Justify' headerTextAlign="Justify" width=120></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }
}



