

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' #treegrid height='220' [allowPaging]='true' pageSettings='pager'
    [contextMenuItems]='contextMenuItems' [treeColumnIndex]='1'
    (contextMenuClick)='contextMenuClick($event)' (contextMenuOpen)='contextMenuOpen($event)'  childMapping='subtasks'>
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public pager: Object;
    public editSettings: Object;
    public contextMenuItems: Object[];
    @ViewChild('treegrid')
    public treeGridObj: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = {allowEditing: true, allowAdding: true, allowDeleting: true, mode:"Row"};
        this.contextMenuItems =  [
                {text: 'Collapse the Row', target: '.e-content', id: 'collapserow'},
                {text: 'Expand the Row', target: '.e-content', id: 'expandrow'}
            ];
        this.pager = { pageSize: 8 }
    }
    contextMenuClick(args?: MenuEventArgs): void {
        treeGridObj.getColumnByField('taskID');
        if (args.item.id === 'collapserow') {
            this.treeGridObj.collapseRow(<HTMLTableRowElement>(this.treeGridObj.getSelectedRows()[0]));
        } else {
            this.treeGridObj.expandRow(<HTMLTableRowElement>(this.treeGridObj.getSelectedRows()[0]));
            }
    },
    contextMenuOpen(arg?: BeforeOpenCloseEventArgs) : void {
        let elem: Element = arg.event.target as Element;
        let uid: string = elem.closest('.e-row').getAttribute('data-uid');
        if (isNullOrUndefined(getValue('hasChildRecords', this.treeGridObj.grid.getRowObjectFromUID(uid).data))) {
            arg.cancel = true;
        } else {
            let flag: boolean = getValue('expanded', this.treeGridObj.grid.getRowObjectFromUID(uid).data);
            let val: string = flag ? 'none' : 'block';
            document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + val + ';');
            val = !flag ? 'none' : 'block';
            document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + val + ';');
        }
    }
}



