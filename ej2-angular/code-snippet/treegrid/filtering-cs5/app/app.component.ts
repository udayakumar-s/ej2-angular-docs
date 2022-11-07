

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='275' [treeColumnIndex]='1' [allowFiltering]='true' [filterSettings]="filterSettings" childMapping='subtasks' >
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=150></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' [filterBarTemplate]="filterBarTemplate" textAlign='Right' width=120></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public filterSettings: Object;
    public filterBarTemplate: Object;
     @ViewChild('treegrid')
    public treeGridObj: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.filterSettings = { type: 'FilterBar', hierarchyMode: 'Parent', mode: 'Immediate' };
        this.filterBarTemplate = {
                create: (args: { element: Element, column: Column }) => {
                    let dd: HTMLInputElement = document.createElement('input');
                    dd.id = 'duration';
                    return dd;
                },
                write: (args: { element: Element, column: Column }) => {
                    let dataSource: string[] = ['All', '1', '3', '4', '5', '6', '8', '9'];
                    this.dropDownFilter = new DropDownList({
                        dataSource: dataSource,
                        value: 'All',
                        change: (e: ChangeEventArgs) => {
                            let valuenum: any = +e.value;
                            let id: any = <string>this.dropDownFilter.element.id;
                            let value: any = <string>e.value;
                            if ( value !== 'All') {
                                this.treeGridObj.filterByColumn( id, 'equal', valuenum );
                            } else {
                                this.treeGridObj.removeFilteredColsByField(id);
                            }
                        }
                    });
                    this.dropDownFilter.appendTo('#duration');
                }
            }
    }
}




