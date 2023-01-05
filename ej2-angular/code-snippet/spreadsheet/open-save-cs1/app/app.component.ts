

import { Component } from '@angular/core';
import { SpreadsheetComponent, BeforeSaveEventArgs } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
    selector: 'app-container',
    template: "<ejs-spreadsheet (beforeOpen)='beforeOpen($event)' openUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open' allowOpen='true'> </ejs-spreadsheet>"
})
export class AppComponent {
     beforeOpen (args: BeforeOpenEventArgs) {
        // your code snippets here
    }
}


