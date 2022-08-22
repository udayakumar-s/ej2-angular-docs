

import { Component, OnInit } from '@angular/core';
import { stringData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=90></e-column>
                        <e-column field='Name' headerText='Full Name' [valueAccessor]= 'valueAccess' width=120></e-column>
                        <e-column field='Title' headerText='Title' width=150></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public valueAccess = (field: string, data: object, column: object) => {
        return data[field].map((s: { FirstName: string, LastName: string }) => {
            return s.LastName || s.FirstName;
         }).join(' ');
    }

    ngOnInit(): void {
        this.data = stringData;
    }
}



