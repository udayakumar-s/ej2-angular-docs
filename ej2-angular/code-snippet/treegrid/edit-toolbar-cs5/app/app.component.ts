

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data'  [treeColumnIndex]='1' height='315' [editSettings]='editSettings' childMapping='subtasks' >
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' editType='stringedit' [edit]='editOptions' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right'type='date'format='yMd'editType='datepickeredit' width=180></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public editSettings: EditSettingsModel;
    public editOptions: Object;
    public elem: HTMLElement;
    public autoCompleteObj: AutoComplete;
    @ViewChild('treegrid')
    public treeGridObj: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Below', mode: 'Cell' };
        this.editOptions = {
                create: () => {
                    this.elem = document.createElement('input');
                    return this.elem;
                },
                read: () => {
                    return this.autoCompleteObj.value;
                },
                destroy: () => {
                    this.autoCompleteObj.destroy();
                },
                write: (args: { rowData: Object, column: Column }) => {
                    this.autoCompleteObj = new AutoComplete({
                        dataSource: <{key: string, value: any}[]>this.treeGridObj.grid.dataSource,
                        fields: { value: 'taskName' },
                        value: args.rowData[args.column.field]
                    });
                    this.autoCompleteObj.appendTo(this.elem);
                }
            };
    }
}



