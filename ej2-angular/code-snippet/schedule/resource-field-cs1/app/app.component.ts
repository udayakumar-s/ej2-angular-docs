

import { Component, ViewChild } from '@angular/core';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { isNullOrUndefined } from '@syncfusion/ej2-base'
import { ScheduleComponent, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs, GroupModel } from '@syncfusion/ej2-angular-schedule';
import { eventData } from './datasource';
@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]='selectedDate' [views]='views'[eventSettings]='eventSettings' [showQuickInfo]='showQuickInfo' [group]='group'
    (popupOpen)='onPopupOpen($event)'>
        <e-resources>
            <e-resource field="OwnerId" title="Owner" name="Owners"
            [dataSource]="ownerDataSource"
            textField="text" idField="id" colorField="color">
            </e-resource>
        </e-resources>
        <ng-template #editorTemplate>
            <table class="custom-event-editor" width="100%" cellpadding="5">
                <tbody>
                    <tr>
                        <td class="e-textlabel">Summary</td>
                        <td colspan="4">
                            <input id="Subject" class="e-field e-input" type="text" value="" name="Subject" style="width: 100%" />
                        </td>
                    </tr>
                    <tr>
                    <td class="e-textlabel">From</td>
                        <td colspan="4">
                            <input id="StartTime" class="e-field" type="text" name="StartTime" />
                        </td>
                    </tr>
                    <tr>
                        <td class="e-textlabel">To</td>
                        <td colspan="4">
                            <input id="EndTime" class="e-field" type="text" name="EndTime" />
                        </td>
                    </tr>
                    <tr>
                        <td class="e-textlabel">Owner</td>
                        <td colspan="4">
                            <input type="text" id="OwnerId" name="OwnerId" class="e-field" style="width: 100%" />
                        </td>
                    </tr>
                    <tr>
                        <td class="e-textlabel">Reason</td>
                        <td colspan="4">
                            <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50" style="width: 100%; height: 60px !important; resize: vertical"></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
        </ng-template>
    </ejs-schedule>`
})


export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
    public showQuickInfo: Boolean = false;
    public eventSettings: EventSettingsModel = {
        dataSource: eventData
    };
    public group: GroupModel = { resources: ['Owners'] };
    public ownerDataSource: Object[] = [
        { text: "Nancy", id: 1, color: "#1aaa55" },
        { text: "Smith", id: 2, color: "#7fa900" },
        { text: "Paul", id: 3, color: "#357cd2" }
    ];
    onPopupOpen(args: PopupOpenEventArgs): void {
        if (args.type === 'Editor') {
            let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
            if (!startElement.classList.contains('e-datetimepicker')) {
                new DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
            }
            let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
            if (!endElement.classList.contains('e-datetimepicker')) {
                new DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
            }
            let processElement: HTMLInputElement= args.element.querySelector('#OwnerId') as HTMLInputElement;
            if (!processElement.classList.contains('e-multiselect')) {
                let multiSelectObject: MultiSelect = new MultiSelect({
                    placeholder: 'Choose a owner',
                    fields: { text: 'text', value: 'id'},
                    dataSource: <any>this.ownerDataSource,
                    value: <string[]>((args.data!['OwnerId'] instanceof Array) ? args.data!['OwnerId'] : [args.data!['OwnerId']])
                });
                multiSelectObject.appendTo(processElement);
            }
        }
    }
}


