

import { Component, OnInit, ViewChild } from '@angular/core';
import { EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids';
import { TextBox } from '@syncfusion/ej2-inputs';
import { purchaseData } from './datasource';
import { Column, EditSettingsModel, PageSettingsModel, ToolbarItems, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='purchaseData' [allowPaging]='true' allowTextWrap='true' [editSettings]='editSettings' [pageSettings]='pageOptions' [toolbar]='toolbar' (created)="created($event)" height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' isPrimaryKey='true' [validationRules]="orderidrules" width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' type='number' textAlign= 'Right'
                     editType= 'numericedit' format= 'C2' width=120></e-column>
                    <e-column field='ShipAddress' headerText='ShipAddress' type='string' [disableHtmlEncode]= 'disableHtmlEncode' [valueAccessor]= 'valueAccessor' [edit]='ddParams' width=180></e-column>
                </e-columns>
               </ejs-grid>`,
    providers: [ToolbarService, EditService, PageService],
})

export class AppComponent implements OnInit {
    public purchaseData: object[];
    @ViewChild('grid') public grid: GridComponent;
    public editSettings: EditSettingsModel;
    public pageOptions: PageSettingsModel;
    public toolbar: ToolbarItems[];
    public tbElem: HTMLElement;
    public textEditor;
    public ddParams: IEditCell;
    public disableHtmlEncode;

    public createShipAddressFn = () => {
        this.tbElem = document.createElement('textarea');
        return this.tbElem;
    };
    public readShipAddressFn = () => {
        return this.textEditor.value;
    };
    public destroyShipAddressFn = () => {
        this.textEditor.destroy();
    };
    public writeShipAddressFn = (args) => {
        this.textEditor = new TextBox({
        multiline: true,
        value: args.rowData[args.column.field],
        floatLabelType: 'Auto'
        });
        this.textEditor.appendTo(this.tbElem);
    };

    public valueAccessor = (field: string, sdata: object, column: object) => {
        var value = sdata[field];
        if (value != undefined) {
            return value.split('\n').join('<br>');
        }
        else {
            return '';
        }
    };

    ngOnInit(): void {
        this.purchaseData = purchaseData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.pageOptions = { pageSizes: true, pageSize: 8 };
        this.disableHtmlEncode = false;
        this.ddParams = {
            create: this.createShipAddressFn,
            read: this.readShipAddressFn,
            destroy: this.destroyShipAddressFn,
            write: this.writeShipAddressFn
        };
    }
    created = (args) => {
        this.grid.keyConfigs.enter = '';
    };
}



