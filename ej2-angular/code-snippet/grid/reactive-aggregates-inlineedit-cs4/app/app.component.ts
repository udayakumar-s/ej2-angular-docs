>>>>>>> a61f632fe75e6a2b203935097fc72a57436bc6ca


import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
<<<<<<< HEAD
import { EditSettingsModel, ToolbarItems, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    templateUrl: 'app/app.template.html'
=======
import { EditSettingsModel, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='290px' [allowPaging]='true' [toolbar]='toolbar' [editSettings]='editSettings' (actionBegin)='actionBegin($event)'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='OrderDate' headerText='Order Date' format='yMd' width=120></e-column>
        <e-column field='Freight' format='C2' editType='numericedit' [edit]='numericParams' width=150></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
                <e-columns>
                    <e-column field="Freight" type="sum" format="C2">
                        <ng-template #footerTemplate let-data>Sum: {{data.sum}}</ng-template>
                    </e-column>
                </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>`
>>>>>>> a61f632fe75e6a2b203935097fc72a57436bc6ca
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
<<<<<<< HEAD
    public toolbar: ToolbarItems[];
=======
    public toolbar: string[];
>>>>>>> a61f632fe75e6a2b203935097fc72a57436bc6ca
    public selectedRecord: object = {};
    public numericParams: IEditCell;
    @ViewChild('grid') public gridObj: GridComponent;

    actionBegin(args): void {
        if (args.requestType === 'beginEdit') {
            this.selectedRecord = {};
            this.selectedRecord = args.rowData;
        }
    }
    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Delete', 'Update', 'Cancel'];
<<<<<<< HEAD
        this.numericParams = { params: { change: changeFn.bind(this) } };
    }
}

function changeFn(args): void {
    const Freight = 'Freight';
    this.selectedRecord[Freight] = args.value;
    this.gridObj.aggregateModule.refresh(this.selectedRecord);
=======
        this.numericParams = { params: { change: function(args) {
              const Freight = 'Freight';
              this.selectedRecord[Freight] = args.value;
        this.gridObj.aggregateModule.refresh(this.selectedRecord);
        }.bind(this)}
        };
    }
  
>>>>>>> a61f632fe75e6a2b203935097fc72a57436bc6ca
}



