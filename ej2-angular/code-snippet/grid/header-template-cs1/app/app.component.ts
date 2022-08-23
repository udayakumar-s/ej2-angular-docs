

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140>
                        <ng-template #headerTemplate let-data>
                            <div>
                            <span class="e-icon-userlogin e-icons employee"></span> Customer ID
                            </div>
                        </ng-template>
                    </e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=140>
                        <ng-template #headerTemplate let-data>
                            <div>
                                <span class="e-icon-calender e-icons headericon"></span> Order Date
                            </div>
                        </ng-template>
                    </e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }
}



