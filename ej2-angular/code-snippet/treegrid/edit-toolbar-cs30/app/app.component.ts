

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' childMapping='subtasks' (actionComplete)='actionComplete($event)' (recordDoubleClick)='recordDoubleClick($event)' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' type='date' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public data: object[];
    public editSettings: EditSettingsModel;
    public fieldName;
    @ViewChild('treegrid')
    public treegrid: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Row"};
    }
    actionComplete(e) {
        if (e.requestType === "beginEdit") {
            // focus the column
            e.form.elements[this.treegrid.grid.element.getAttribute("id") + this.fieldName].focus();
        }
    }
    recordDoubleClick(e) {
        var clickedColumnIndex = e.cell.getAttribute("aria-colindex");
        this.fieldName = this.treegrid.columnModel[parseInt(clickedColumnIndex)].field;
    }
}



