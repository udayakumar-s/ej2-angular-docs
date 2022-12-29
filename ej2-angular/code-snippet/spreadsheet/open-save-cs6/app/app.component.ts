import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, BeforeOpenEventArgs } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-container',
  template:
    "<ejs-spreadsheet #spreadsheet openUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open' allowOpen='true' (beforeOpen)='beforeOpen($event)'> </ejs-spreadsheet>",
})
export class AppComponent {
  @ViewChild('spreadsheet')
  public spreadsheetObj: SpreadsheetComponent;
  beforeOpen(args: BeforeOpenEventArgs) {
    args.requestData['headers'] = {
      Authorization: 'YOUR TEXT',
    };
  }
}