

import { Component } from '@angular/core';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { RecurrenceEditorChangeEventArgs } from '@syncfusion/ej2-angular-schedule';

@Component({
    selector: 'app-root',
    // specifies the template string for the Schedule component
    template: `<div class="content-wrapper recurrence-editor-wrap">
  <div style="padding-bottom:15px;">
      <label>Rule Output</label>
      <div class="rule-output-container">
          <div id="rule-output">FREQ=DAILY;INTERVAL=2;COUNT=8</div>
      </div>
  </div>
  <ejs-recurrenceeditor (change)="onChange($event)" value="FREQ=DAILY;INTERVAL=2;COUNT=8"></ejs-recurrenceeditor>
</div>`
})
export class AppComponent {
    public onChange(args: RecurrenceEditorChangeEventArgs): void {
        let outputElement: HTMLElement = document.querySelector('#rule-output') as HTMLElement;
        if (!isNullOrUndefined(args.value)) {
            outputElement.innerText = args.value;
        }
    }
}


