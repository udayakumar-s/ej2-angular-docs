

import { Component, OnInit, ViewChild } from '@angular/core';
import { data, employeeData } from './datasource';
import { DataManager, Query} from '@syncfusion/ej2-data';
import { DetailRowService, GridModel, GridComponent, DetailDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='pData' height='265px' [childGrid]='childGrid' (detailDataBound)='detailDataBound($event)'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='City' headerText='City' width=150></e-column>
                    </e-columns>
                </ejs-grid>
                `,
    providers: [DetailRowService]
})
export class AppComponent implements OnInit {

    public pData: object[];
    public childGrid: GridModel = {
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
    };
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.pData = employeeData;
    }

    detailDataBound(args:DetailDataBoundEventArgs) {
        var orderData = data;
        var empIdValue = args.childGrid.parentDetails.parentRowData.EmployeeID;
        var matchedData = new DataManager(orderData).executeLocal(
            new Query().where('EmployeeID', 'equal', empIdValue, true)
        );
        args.childGrid.query = new Query();
        args.childGrid.dataSource = matchedData;
}



