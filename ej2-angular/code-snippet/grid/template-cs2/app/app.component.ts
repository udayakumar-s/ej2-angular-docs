

import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { closest } from '@syncfusion/ej2-base';
import { RecordClickEventArgs, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='315px' (recordClick)="recordClick($event)">
                    <e-columns>
                        <e-column headerText='Employee Data' width='150' textAlign='Right' isPrimaryKey='true'>
                            <ng-template #template let-data>
                               <button class="empData">Employee Data</button>
                            </ng-template>
                        </e-column>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=130></e-column>
                        <e-column field='FirstName' headerText='Name' width=120></e-column>
                        <e-column field='Title' headerText='Title' width=170></e-column>
                    </e-columns>
                </ejs-grid>`,
    styleUrls: ['./app/app.style.css']
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = employeeData;
    }
    recordClick(args: RecordClickEventArgs) {
        if (args.target.classList.contains('empData')) {
            var rowObj = this.grid.getRowObjectFromUID(closest(args.target, '.e-row').getAttribute('data-uid')
            );
            console.log(rowObj);
        }
    }
}




