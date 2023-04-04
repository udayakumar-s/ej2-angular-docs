

import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import {GridComponent, RowDDService, SelectionService} from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<div class="control-section">
                <ejs-grid
                    #grid
                    [dataSource]="data"
                    height="350"
                    [allowRowDragAndDrop]="true"
                    [selectionSettings]="selectOptions"
                    [rowDropSettings]="rowDropOptions"
                    height="400"
                    id="Grid"
                    (rowDrop)="rowDrop($event)"
                >
                    <e-columns>
                        <e-column
                            field="OrderID"
                            isPrimaryKey="true"
                            headerText="Order ID"
                            width="80"
                            textAlign="Right"
                        ></e-column>
                        <e-column
                            field="CustomerID"
                            headerText="Customer Name"
                            width="120"
                        ></e-column>
                        <e-column
                            field="OrderDate"
                            headerText="Order Date"
                            width="100"
                            format="yMd"
                            textAlign="Right"
                        ></e-column>
                        <e-column
                            field="Freight"
                            headerText="Freight"
                            width="120"
                            format="C2"
                            textAlign="Right"
                        ></e-column>
                        <e-column
                            field="ShipCity"
                            headerText="Ship City"
                            width="130"
                        ></e-column>
                        <e-column
                            field="ShipCountry"
                            headerText="Ship Country"
                            width="130"
                        ></e-column>
                    </e-columns>
                </ejs-grid>
            </div>
`,
providers: [RowDDService, SelectionService],
    styleUrls: ['./app/app.style.css']
})
export class AppComponent {
    public data: Object[] = [];
    public selectOptions: Object;
    public rowDropOptions: object;
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.selectOptions = { type: 'Multiple' };
        this.rowDropOptions = { targetID: 'Grid' };
    }
    rowDrop(args) {
        args.cancel = true;
        var value = [];
        for (var r = 0; r < args.rows.length; r++) {
            value.push(args.fromIndex + r);
        }
        this.grid.reorderRows(value, args.dropIndex);
    }
}



