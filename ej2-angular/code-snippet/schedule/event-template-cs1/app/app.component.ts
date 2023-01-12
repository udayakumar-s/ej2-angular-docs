

import { Component, ViewChild } from '@angular/core';
import { eventsData } from './datasource';
import {
    DayService, TimelineViewsService, WorkWeekService, MonthService, EventClickArgs, EventSettingsModel, ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';
@Component({
    selector: 'app-root',
    providers: [DayService, TimelineViewsService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/index.css'],
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: eventsData
    };
    onClick() {
        document.getElementById('EventLog').innerHTML = '';
    }
    onEventClick(args: EventClickArgs): void {
        let event: Object = this.scheduleObj.getEventDetails(args.element);
        let span: HTMLElement = document.createElement('span');
        span.innerHTML = event.Subject + '<hr>';
        let log: HTMLElement = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }
}


