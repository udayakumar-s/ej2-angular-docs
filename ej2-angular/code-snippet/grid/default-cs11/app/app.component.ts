

import { Component, OnInit, ViewChild, ViewContainerRef, Inject, AfterViewInit } from '@angular/core';
import { data, employeeData } from './datasource';
import { DetailRowService, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='pData' height='315px' [childGrid]='childGrid'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='City' headerText='City' width=150></e-column>
                    </e-columns>
                </ejs-grid>
                <ng-template #childtemplate let-data>
                    <div class="image">
                            <img src="{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}"/>
                     </div>
                </ng-template>
                `,
    providers: [DetailRowService]
})
export class AppComponent implements OnInit, AfterViewInit {

    constructor(@Inject(ViewContainerRef) private viewContainerRef?: ViewContainerRef) {

    }
    public pData: object[];
    @ViewChild('childtemplate') public childtemplate: any;
    @ViewChild('grid') public grid: GridComponent;
    public childGrid: any;

    ngAfterViewInit() {
        this.childtemplate.elementRef.nativeElement._viewContainerRef = this.viewContainerRef;
        this.childtemplate.elementRef.nativeElement.propName = 'template';
    }

    ngOnInit(): void {
        this.pData = employeeData;
        this.childGrid = {
            dataSource: data,
            queryString: 'EmployeeID',
            load() {
                this.registeredTemplate = {};   // set registertemplate value as empty in load event
            },
            columns: [
                { headerText: 'Employee Image', textAlign: 'Center', template: this.childtemplate, width: 150 },
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
                { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
                { field: 'ShipCity', headerText: 'Ship City', width: 150 },
                { field: 'ShipName', headerText: 'Ship Name', width: 150 }
            ],
        };
    }
}



