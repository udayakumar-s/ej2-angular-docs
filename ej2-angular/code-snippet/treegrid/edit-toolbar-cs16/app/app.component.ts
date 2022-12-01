

import { Component, OnInit, ViewChild } from '@angular/core';
import { TextBox } from '@syncfusion/ej2-inputs';
import { sampleData } from './datasource';
import { TreeGridComponent, Column, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='315' [editSettings]='editSettings' childMapping='subtasks' (created)="created($event)">
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName'  [valueAccessor]= 'valueAccessor' [edit]="editOptions" headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right'type='date'format='yMd'editType='datepickeredit' width=180></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})

export class AppComponent implements OnInit {
    public data: Object[];
    public editSettings: EditSettingsModel;
    public editOptions: Object;
    public toolbarOptions: ToolbarItems[];
    public elem: HTMLElement;
    public textEditor;
    @ViewChild('treegrid')
    public treeGridObj: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.editSettings = {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        newRowPosition: 'Below',
        mode: 'Cell',
        };
        this.editOptions = {
        create: () => {
            this.elem = document.createElement('textarea');
            return this.elem;
        },
        read: () => {
            return this.textEditor.value;
        },
        destroy: () => {
            this.textEditor.destroy();
        },
        write: (args: { rowData: Object; column: Column }) => {
            this.textEditor = new TextBox({
            multiline: true,
            value: args.rowData[args.column.field],
            floatLabelType: 'Auto'
            });
            this.textEditor.appendTo(this.elem);
        };
    }

    public valueAccessor = (field: string, sdata: object, column: object) => {
        var value = sdata[field];
        if (value != undefined) {
            return value.split('\n').join('<br>');
        }
        else {
            return '';
        }
    };

    created = (args) => {
        this.treegrid.keyConfigs.enter = '';
    };
}



