

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' [filterSettings]="filterSettings" childMapping='subtasks' >
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=150></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' [filter]='filterui' textAlign='Right' width=120></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public filterSettings: Object;
    public filterui: Object;

    ngOnInit(): void {
        this.data = sampleData;
        this.filterSettings = {type: 'Menu'};
        this.filterui = {
                ui: {
                    create: (args: { target: Element, column: Object }) => {
                        let flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                        args.target.appendChild(flValInput);
                        let dataSource: string[] = ['All', '1', '3', '4', '5', '6', '8', '9'];
                        this.dropDownFilter = new DropDownList({
                            dataSource: dataSource,
                            value: 'All', popupHeight: '200px'
                        });
                        this.dropDownFilter.appendTo(flValInput);
                    },
                    write: (args: {
                        column: Object, target: Element, parent: any,
                        filteredValue: number | string
                    }) => {
                        this.dropDownFilter.value = args.filteredValue;
                    },
                    read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                        args.fltrObj.filterByColumn(args.column.field, args.operator, parseInt(this.dropDownFilter.value));

                    }
                }}
    }
}


