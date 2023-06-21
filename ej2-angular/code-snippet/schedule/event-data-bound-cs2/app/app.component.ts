

import { Component, ViewChild } from '@angular/core';
import { eventsData } from './datasource';
import {
    DayService, WeekService, WorkWeekService, MonthService, AgendaService, EventSettingsModel,
    ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';
@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
    // specifies the template string for the Schedule component
    templateUrl: './app.component.html',
    styleUrls: ['./index.css'],
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: eventsData
    };
    onClick() {
        (document.getElementById('EventLog') as any).innerHTML = '';
    }
    onDataBound(): void {
        let event: Object[] = (this.scheduleObj as any).getEvents();
        this.appendElement('Events present on scheduler <b>' + event.length + '<b><hr>');
    }
    appendElement(html: string): void {
        let span: HTMLElement = document.createElement('span');
        span.innerHTML = html;
        let log: HTMLElement = document.getElementById('EventLog') as HTMLElement;
        log.insertBefore(span, log.firstChild);
    }
}


