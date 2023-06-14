

import { Component } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs, PopupCloseEventArgs } from '@syncfusion/ej2-angular-schedule';
import { eventData } from './datasource';
@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings' [showQuickInfo]='showQuickInfo' (popupOpen)='onPopupOpen($event)' (popupClose) ='onPopupClose($event)'>
    <ng-template #editorTemplate>
        <table class="custom-event-editor" width="100%" cellpadding="5">
            <tbody>
                <tr>
                    <td class="e-textlabel">Summary</td>
                    <td colspan="4">
                        <input id="Subject" class="e-input" type="text" name="Subject" style="width: 100%" />
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">Status</td>
                    <td colspan="4">
                        <input type="text" id="EventType" name="EventType" style="width: 100%" />
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">From</td>
                    <td colspan="4">
                        <input id="StartTime" type="text" name="StartTime" />
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">To</td>
                    <td colspan="4">
                        <input id="EndTime" type="text" name="EndTime" />
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">Reason</td>
                    <td colspan="4">
                        <textarea id="Description" class="e-input" name="Description" rows="3" cols="50" style="width: 100%; height: 60px !important; resize: vertical"></textarea>
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
    onPopupOpen(args: PopupOpenEventArgs) : void {
        if (args.type === 'Editor') {
            let subjectElement: HTMLInputElement = args.element.querySelector('#Subject') as HTMLInputElement;
            if (subjectElement) {
                subjectElement.value = ((<{ [key: string]: Object; }>(args.data))['Subject'] as string) || "";
            }
            let statusElement: HTMLInputElement = args.element.querySelector('#EventType') as HTMLInputElement;
            if (!statusElement.classList.contains('e-dropdownlist')) {
                let dropDownListObject: DropDownList = new DropDownList({
                    placeholder: 'Choose status', value: ((<{ [key: string]: Object; }>(args.data))['EventType'] as string),
                    dataSource: ['New', 'Requested', 'Confirmed']
                });
                dropDownListObject.appendTo(statusElement);
            }
            let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
            if (!startElement.classList.contains('e-datetimepicker')) {
                startElement.value = (<{ [key: string]: Object; }>(args.data))['StartTime'] as string;
                new DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
            }
            let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
            if (!endElement.classList.contains('e-datetimepicker')) {
                endElement.value = (<{ [key: string]: Object; }>(args.data))['EndTime'] as string;
                new DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
            }
            let descriptionElement: HTMLInputElement = args.element.querySelector('#Description') as HTMLInputElement;
            if (descriptionElement) {
                descriptionElement.value = (<{ [key: string]: Object; }>(args.data))['Description'] as string || "";
            }
        }
    }
    onPopupClose(args: PopupCloseEventArgs) : void {
        if (args.type === 'Editor' && !isNullOrUndefined((args as any).data)) {
            let subjectElement: HTMLInputElement = args.element.querySelector('#Subject') as HTMLInputElement;
            if (subjectElement ) {
                (<{ [key: string]: Object; }>(args.data))['Subject'] = subjectElement.value;
            }
            let statusElement: HTMLInputElement = args.element.querySelector('#EventType') as HTMLInputElement;
            if (statusElement) {
                ((<{ [key: string]: Object; }>(args.data))['EventType'] as string) = statusElement.value;
            }
            let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
            if (startElement) {
                (<{ [key: string]: Object; }>(args.data))['StartTime'] = startElement.value;
            }
            let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
            if (endElement) {
                (<{ [key: string]: Object; }>(args.data))['EndTime'] = endElement.value;
            }
            let descriptionElement: HTMLInputElement = args.element.querySelector('#Description') as HTMLInputElement;
            if (descriptionElement) {
                ((<{ [key: string]: Object; }>(args.data))['Description'] as string) = descriptionElement.value;
            }
        }
    }
}


