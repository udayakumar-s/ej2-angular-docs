import { Component, OnInit, ViewChild } from '@angular/core';
import {
  SpreadsheetComponent,
  MenuSelectEventArgs,
} from '@syncfusion/ej2-angular-spreadsheet';
import { createElement } from '@syncfusion/ej2-base';
import { data } from './datasource';

@Component({
  selector: 'app-container',
  template:
    "<ejs-spreadsheet #spreadsheet (fileMenuItemSelect)='onFileItemSelect($event)' saveUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save' allowSave='true'> <e-sheets> <e-sheet> <e-ranges> <e-range [dataSource]='data'></e-range></e-ranges><e-columns><e-column [width]=90></e-column><e-column [width]=100></e-column><e-column [width]=96></e-column><e-column [width]=120></e-column><e-column [width]=130></e-column><e-column [width]=120></e-column></e-columns></e-sheet></e-sheets></ejs-spreadsheet>",
})
export class AppComponent implements OnInit {
  public data: object[];
  @ViewChild('spreadsheet') public spreadsheetObj: SpreadsheetComponent;
  ngOnInit(): void {
    this.data = data;
  }
  onFileItemSelect(args: MenuSelectEventArgs) {
    if (args.item.text === 'Microsoft Excel') {
      args.cancel = true;
      this.spreadsheetObj.saveAsJson().then((response) => {
        var formData = new FormData();
        formData.append(
          'JSONData',
          JSON.stringify(response.jsonObject.Workbook)
        );
        formData.append('fileName', 'Sample');
        formData.append('saveType', 'Xlsx');
        fetch(
          'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save',
          {
            method: 'POST',
            headers: { Authorization: 'YOUR TEXT' },
            body: formData,
          }
        ).then((response) => {
          response.blob().then((data) => {
            var anchor = createElement('a', {
              attrs: { download: 'Sample.xlsx' },
            });
            var url = URL.createObjectURL(data);
            anchor.href = url;
            document.body.appendChild(anchor);
            anchor.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(anchor);
          });
        });
      });
    }
  }
}