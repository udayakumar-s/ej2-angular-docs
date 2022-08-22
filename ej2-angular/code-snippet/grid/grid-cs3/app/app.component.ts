

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data'>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = [
            { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
            { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
            { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];
    }
}



