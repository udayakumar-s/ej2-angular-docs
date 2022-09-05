

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, IFilterUI, Column } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid='' [dataSource]='data' [allowFiltering]='true' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' width=120 [filterBarTemplate]='templateOptions'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public templateOptions: IFilterUI;

    @ViewChild('grid')
    public gridObj: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.templateOptions = {
            create: (args: { element: Element, column: Column }) => {
                const dd = document.createElement('select');
                dd.id = 'EmployeeID';
                const dataSource: string[] = ['All', '1', '3', '4', '5', '6', '8', '9'];
                for (const value of  dataSource) {
                    const option: HTMLOptionElement = document.createElement('option');
                    option.value = value;
                    option.innerHTML = value;
                    dd.appendChild(option);
                }
                return dd;
            },
            write: (args: { element: Element, column: Column }) => {
                args.element.addEventListener('input', (args1: Event): void => {
                    const target: HTMLInputElement = args1.currentTarget as HTMLInputElement;
                    if (target.value !== 'All') {
                        const value = + +target.value;
                        this.gridObj.filterByColumn(target.id, 'equal', value);
                    } else {
                        this.gridObj.removeFilteredColsByField(target.id);
                    }
                });
            },
        };
    }
}



