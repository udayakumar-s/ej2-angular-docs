

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right'
                         [valueAccessor]='currencyFormatter' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 [valueAccessor]='valueAccess' ></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public currencyFormatter = (field: string, data1: object, column: object) => {
        const Freight = 'Freight';
        return '€' + data1[Freight];
    }

    public valueAccess = (field: string, data1: object, column: object) => {
        const ShipRegion = 'ShipRegion';
        return data1[field] + '-' + data1[ShipRegion];
    }

    ngOnInit(): void {
        this.data = data;
    }
}



