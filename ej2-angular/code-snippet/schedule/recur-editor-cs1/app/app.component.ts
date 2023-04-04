

import { Component} from '@angular/core';
import { RecurrenceEditorChangeEventArgs } from '@syncfusion/ej2-angular-schedule';
import { isNullOrUndefined } from "@syncfusion/ej2-base";

@Component({
  selector: 'app-root',
  // specifies the template string for the Schedule component
  template: `<div style="padding-bottom:15px;">
            <label id="rule-label">Rule Output</label>
            <div class="rule-output-container">
                <div id="rule-output">Select Rule</div>
            </div>
        </div>
        <div id="RecurrenceEditor">
        <ejs-recurrenceeditor (change)="onChange($event)"></ejs-recurrenceeditor>
        </div>`
})
export class AppComponent {
  onChange(args: RecurrenceEditorChangeEventArgs): void {
    if (!isNullOrUndefined(args.value)) {
        let outputElement: HTMLElement = <HTMLElement>document.querySelector('#rule-output');
        if(args.value == "") {
            outputElement.innerText = 'Select Rule';
        } else {
            outputElement.innerText = args.value;
        }
    }
  }
}


