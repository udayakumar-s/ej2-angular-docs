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
        // To change width of single column
        this.spreadsheetObj.setColumnsWidth(100, ['F']);
        // To change width of multiple columns
        this.spreadsheetObj.setColumnsWidth(120, ['A:C', 'G:I', 'K:M']);
    }
}