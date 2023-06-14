

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid id='Grid' #grid [dataSource]='data' [toolbar]='toolbar' (created)="created()" height='200px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' type='number' isPrimaryKey='true' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' type='number' format='C2' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' type='date' format='yMd' width=140></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbar?: string[];

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data.slice(0, 8);
        this.toolbar = ['Print', 'Search'];
    }

    created() {
        let toolbar: HTMLElement = (this.grid as any).element.querySelector('.e-toolbar');
        (this.grid as any).element.appendChild(toolbar);
    }
}



