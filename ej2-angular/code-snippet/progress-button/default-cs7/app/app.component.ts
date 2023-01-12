

import { Component, ViewChild } from '@angular/core';
import { ProgressEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `
    <div class="control-section">
    <div class="progress-btn-section">
        <button ejs-progressbutton content='Progress' [enableProgress]='true' (begin)='begin($event)' (end)='end($event)' (progress)='progress($event)' (fail)='fail($event)' cssClass='e-hide-spinner'></button>
    </div>
    <div class="property-section">
        <table id="propertyTable" title="Event trace">
            <tbody>
                <th>Event trace:-</th>
                <tr>
                <td [innerHTML]="eventTrace"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <button #clear id="clear" ejs-button cssClass='e-small' (click)='btnClick()'>Clear</button>
    </div>
    `
})

export class AppComponent {
    private eventTrace: string = '';
    @ViewChild('clear')

    private begin(args: ProgressEventArgs): void {
        this.updateEventLog(args);
    }
    private end(args: ProgressEventArgs): void {
        this.updateEventLog(args);
    }
    private progress(args: ProgressEventArgs): void {
        this.updateEventLog(args);
    }
    private fail(args: Event): void {
        this.updateEventLog(args);
    }
    private updateEventLog(args: any): void {
        this.eventTrace = this.eventTrace + args.name + ' Event triggered. <br />'
    }

    private btnClick(): void {
        this.eventTrace = '';
    }
}


