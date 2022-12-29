import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()">
                <e-sheets>
                  <e-sheet>
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent;

    data: object[] = dataSource;

    created() {
        // To change height for single row
        this.spreadsheetObj.setRowsHeight(40, ['2']);
        // To change height for multiple rows
        this.spreadsheetObj.setRowsHeight(40, ['4:8', '10:12']);
    }
}