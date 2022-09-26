

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (contextMenuBeforeOpen)="contextMenuBeforeOpen()">
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent;

     contextMenuBeforeOpen() {
        // To add context menu items.
      this.spreadsheetObj.removeContextMenuItems(["Insert Column"], false); //Items that needs to be removed, Set `true` if the given `text` is a unique id.
    }
}


