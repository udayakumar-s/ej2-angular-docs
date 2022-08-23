

import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';
<<<<<<< HEAD
import { Internationalization } from '@syncfusion/ej2-base';

const instance: Internationalization = new Internationalization();
=======
>>>>>>> a61f632fe75e6a2b203935097fc72a57436bc6ca

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height=335 width='auto'>
        <e-columns>
            <e-column headerText='Employee Image' width='150' textAlign='Center'></e-column>
            <e-column headerText='Employee Details' width='300' textAlign='Left'></e-column>
        </e-columns>
        <ng-template #rowTemplate let-data>
            <tr>
                <td class="rowphoto">
<<<<<<< HEAD
                    <img src="https://ej2.syncfusion.com/angular/demos/src/grid/images/{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}" />
=======
                  <img src="{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}" />
>>>>>>> a61f632fe75e6a2b203935097fc72a57436bc6ca
                </td>
                <td class="details">
                    <table class="CardTable" cellpadding="3" cellspacing="2">
                        <colgroup>
                            <col width="50%">
                            <col width="50%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="CardHeader">First Name </td>
                                <td>{{data.FirstName}} </td>
                            </tr>
                            <tr>
                                <td class="CardHeader">Last Name</td>
                                <td>{{data.LastName}} </td>
                            </tr>
                            <tr>
                                <td class="CardHeader">Title</td>

                                <td>{{data.Title}}</td>
                            </tr>
<<<<<<< HEAD
                            <tr>
                                <td class="CardHeader">Birth Date</td>
                                <td>{{format(data.BirthDate)}}</td>
                            </tr>
                            <tr>
                                <td class="CardHeader">Hire Date</td>
=======
                        </tbody>
                    </table>
                </td>
            </tr>
        </ng-template>
    </ejs-grid>`,
    styleUrls: ['./app/app.style.css']
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
}



