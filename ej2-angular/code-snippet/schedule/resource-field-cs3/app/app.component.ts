

import { Component} from '@angular/core';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs, EJ2Instance} from '@syncfusion/ej2-angular-schedule';
import { eventData } from './datasource.ts';
@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings' [showQuickInfo]='showQuickInfo' (popupOpen)='onPopupOpen($event)'>
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
                        <td class="e-textlabel">Status</td>
                        <td colspan="4">
                            <input type="text" id="EventType" name="EventType" class="e-field" style="width: 100%" />
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
                        <td class="e-textlabel">Reason</td>
                        <td colspan="4">
                            <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50"
                                style="width: 100%; height: 60px !important; resize: vertical"></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
        </ng-template>
    </ejs-schedule>`
})


export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
    public showQuickInfo: Boolean = false;
    public eventSettings: EventSettingsModel = {
        dataSource: eventData
    };
    onPopupOpen(args: PopupOpenEventArgs): void {
        if (args.type === 'Editor') {
            if (!isNullOrUndefined(document.getElementById("EventType_Error"))) {
                document.getElementById("EventType_Error").style.display = "none";
                document.getElementById("EventType_Error").style.left = "351px";
            }
            let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form');
            let statusElement: HTMLInputElement = args.element.querySelector('#EventType') as HTMLInputElement;
            if (!statusElement.classList.contains('e-dropdownlist')) {
                let dropDownListObject: DropDownList = new DropDownList({
                    placeholder: 'Choose status', value: statusElement.value,
                    dataSource: ['New', 'Requested', 'Confirmed'],
                    select: function(args) {
                        if (!isNullOrUndefined(document.getElementById("EventType_Error"))) {
                            document.getElementById("EventType_Error").style.display = "none";
                        }
                    }
                });
                dropDownListObject.appendTo(statusElement);
                statusElement.setAttribute('name', 'EventType');
            }
            let validator: FormValidator = ((formElement as EJ2Instance).ej2_instances[0] as FormValidator);
            validator.addRules('EventType', { required: true });
            let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
            if (!startElement.classList.contains('e-datetimepicker')) {
                new DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
            }
            let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
            if (!endElement.classList.contains('e-datetimepicker')) {
                new DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
            }
        }
    }
}


