

import { Component, OnInit } from '@angular/core';
import { RecurrenceEditor } from '@syncfusion/ej2-angular-schedule';
import { createElement } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    // specifies the template string for the Schedule component
    template: `<div style="padding-bottom:15px;">
            <label id="rule-label">Date Collections</label>
            <div class="rule-output-container">
                <div id="rule-output"></div>
            </div>
        </div>`
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        let outputElement: HTMLElement = <HTMLElement>document.querySelector('#rule-output');
        let labelElement: HTMLElement = <HTMLElement>document.querySelector('#rule-label');
        let recObject: RecurrenceEditor = new RecurrenceEditor();
        let dates: number[] = recObject.getRecurrenceDates(new Date(2018, 0, 7, 10, 0), 'FREQ=DAILY;INTERVAL=1; COUNT=30', '20180108T114224Z,20180110T114224Z', 10, new Date(2018, 0, 7));
        for (let i: number = 0; i < dates.length; i++) {
            outputElement.appendChild(createElement('div', { innerHTML: new Date(dates[i]).toString() }));
        }
    }
}


