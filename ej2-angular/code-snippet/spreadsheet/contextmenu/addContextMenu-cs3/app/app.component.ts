

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
      this.spreadsheetObj.enableContextMenuItems(['Rename'], false, false); // Contextmenu Items that needs to be enabled / disabled, Set true / false to enable / disable the menu items, Set true if the given text is a unique id.
    }
}


