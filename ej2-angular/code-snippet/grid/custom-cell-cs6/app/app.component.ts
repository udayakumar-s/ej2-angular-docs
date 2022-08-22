

import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `<div class="e-float-input" style="width: 200px; display: inline-block;">
                   <input type="text" class="rowindex" value="0" />
                   <span class="e-float-line"></span>
                   <label class="e-float-text">Row Index</label>
                </div>
    <button ejs-button (click)="btnClick()">Expand</button>
    <ejs-grid #grid [dataSource]='data' height='315' width='auto'>
        <e-columns>
            <e-column field="FirstName" headerText='First Name' width='140'></e-column>
            <e-column field="LastName" headerText='Last Name' width='140'></e-column>
            <e-column field="Title" headerText='Title' width='150'></e-column>
            <e-column field="Country" headerText='Country' width='150'></e-column>
        </e-columns>
        <ng-template #detailTemplate let-data>
                    <table class="CardTable" cellpadding="3" cellspacing="2">
                        <colgroup>
                            <col width="35%">
                            <col width="35%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="rowphoto" rowSpan="4" style="text-align : center">
                                    <img src="{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}" />
                                </td>
                                <td>
                                    <span style="font-weight: 500">First Name:</span>
                                    {{data.FirstName}}
                                </td>
                                <td>
                                     <span style="font-weight: 500"> Postal Code:</span>
                                     {{data.PostalCode}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="font-weight: 500">Last Name:</span>
                                    {{data.LastName}}
                                </td>
                                <td>
                                     <span style="font-weight: 500"> City:</span>
                                     {{data.City}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="font-weight: 500">Title:</span>
                                    {{data.Title}}
                                </td>
                                <td>
                                     <span style="font-weight: 500"> Phone:</span>
                                     {{data.Phone}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="font-weight: 500">City:</span>
                                    {{data.City}}
                                </td>
                                <td>
                                     <span style="font-weight: 500"> Country:</span>
                                     {{data.Country}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
        </ng-template>
    </ejs-grid>`,
    styleUrls: ['./app/app.style.css']
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = employeeData;
    }
    public btnClick(): void {
        let inputElem: HTMLInputElement = (document.getElementsByClassName('rowindex')[0] as HTMLInputElement);
        let rowIndex: number = parseInt(inputElem.value, 10);
        this.grid.detailRowModule.expand(rowIndex);
    }
}



