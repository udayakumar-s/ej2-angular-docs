


import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource';
import { GroupService, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button ej-button id='enable' cssClass='e-flat' (click)='enable()'>Enable</button>
                <button ej-button id='disable' cssClass='e-flat' (click)='disable()'>Disable</button>
                <ejs-grid id='Grid' #grid [dataSource]='data' height='200px' [allowGrouping]='true'
                [groupSettings]='groupOptions' [toolbar]='toolbar' (toolbarClick)='clickHandler($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [GroupService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbar: string[];
    public groupOptions: object;
    public toolbarObj;

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbar = ['Expand', 'Collapse'];
        this.groupOptions = { columns: ['CustomerID'] };
    }

    clickHandler(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_Collapse') { // Grid_Collapse is control id + '_' + toolbar value.
            this.grid.groupModule.collapseAll();
        }

        if (args.item.id === 'Grid_Expand') {
            this.grid.groupModule.expandAll();
        }
    }
    enable() {
        this.grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], true); // Enable toolbar items.
    }

    disable() {
        this.grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], false); // Disable toolbar items.
    }
}



