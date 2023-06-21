

import { Component, OnInit, ViewChild } from '@angular/core';
import { data, employeeData } from './datasource';
import { DetailRowService, GridModel, GridComponent} from '@syncfusion/ej2-angular-grids';


@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='pData' height='265px' [childGrid]='childGrid'>
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
    @ViewChild('grid')
    public grid?: GridComponent;
    public pData?: object[];
    public childGrid: GridModel | GridComponent = {
        queryString: 'ID',
        dataSource: data,
        columns: [
            { field: 'ID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
        load() {
            const EmployeeID = 'EmployeeID';
            (this as any).parentDetails.parentKeyFieldValue = (<{ EmployeeID?: string}>(this as any).parentDetails.parentRowData)[EmployeeID];
        }
    };

    ngOnInit(): void {
        this.pData = employeeData;
    }
}





