

import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { extend } from "@syncfusion/ej2-base";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { DateTimePicker } from "@syncfusion/ej2-calendars";
import { FormValidators, FormValidator, TextBox } from "@syncfusion/ej2-angular-inputs";
import { PopupOpenEventArgs, EventRenderedArgs, ScheduleComponent, MonthService, DayService, WeekService,
  WorkWeekService, EventSettingsModel, ResizeService, DragAndDropService, EJ2Instance
} from "@syncfusion/ej2-angular-schedule";
import { eventData } from './datasource';
@Component({
    selector: 'app-root',
    providers: [ MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
    encapsulation: ViewEncapsulation.None,
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings' [showQuickInfo]='showQuickInfo' (popupOpen)='onPopupOpen($event)' >
    <ng-template #editorTemplate>
        <table class="custom-event-editor" width="100%" cellpadding="5">
            <tbody>
                <tr>
                    <td class="e-textlabel">Summary</td>
                    <td colspan="4">
                        <input id="Subject" class=" e-field e-input" type="text" name="Subject" value="" style="width: 100%" (keyup)="onChange($event)" />
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">Status</td>
                    <td colspan="4">
                        <input type="text" id="EventType" class="e-field" name="EventType" style="width: 100%" (change)="onChange($event)" />
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
                        <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50" style="width: 100%; height: 60px !important; resize: vertical" (keyup)="onChange($event)"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
    </ng-template>
    </ejs-schedule>`
})

export class AppComponent {
  @ViewChild("scheduleObj") scheduleObj: ScheduleComponent | undefined;
  public selectedDate: Date = new Date(2018, 1, 15);
  public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
  public showQuickInfo: Boolean = false;
  public eventSettings: EventSettingsModel = {
    dataSource: eventData,
    fields: {
      subject: { name: "Subject", validation: { required: true } },
      description: {
        name: "Description",
        validation: { required: true }
      }
    }
  };
  public validator?: FormValidator;
  public statusFields: Object = { text: "StatusText", value: "StatusText" };
  public StatusData: Object[] = [
    { StatusText: "New", Id: 1 },
    { StatusText: "Requested", Id: 2 },
    { StatusText: "Confirmed", Id: 3 }
  ];

  public onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === "Editor") {

     let subjectElement: HTMLInputElement = args.element.querySelector('#Subject') as HTMLInputElement;
        if (subjectElement) {
            subjectElement.value = ((<{ [key: string]: Object; }>(args.data))["Subject"] as string) || "";
         }
        let statusElement: HTMLInputElement = args.element.querySelector('#EventType') as HTMLInputElement;
        if (!statusElement.classList.contains('e-dropdownlist')) {
            let dropDownListObject: DropDownList = new DropDownList({
                placeholder: 'Choose status', value: ((<{ [key: string]: Object; }>(args.data))["EventType"] as string),
                    dataSource: ['New', 'Requested', 'Confirmed']
            });
            dropDownListObject.appendTo(statusElement);
        }
        let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
        if (!startElement.classList.contains('e-datetimepicker')) {
            startElement.value = (<{ [key: string]: Object; }>(args.data))["StartTime"] as string;
            new DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
        }
        let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
        if (!endElement.classList.contains('e-datetimepicker')) {
            endElement.value = (<{ [key: string]: Object; }>(args.data))["EndTime"] as string;
            new DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
        }
        let descriptionElement: HTMLInputElement = args.element.querySelector('#Description') as HTMLInputElement;
        if (descriptionElement) {
            descriptionElement.value = (<{ [key: string]: Object; }>(args.data))["Description"] as string || "";
        }
      const formElement: HTMLElement = args.element.querySelector(".e-schedule-form") as HTMLElement;
      this.validator = (formElement as EJ2Instance).ej2_instances[0] as FormValidator;
      this.validator.addRules("EventType", { required: [true, "This field is required."]});
      if (args.target!.classList.contains("e-work-cells")) {
        args.element.querySelector(".e-event-save")!.classList.add("e-custom-disable");
      }
    }
  }

  public onChange(args : any) {
    let form = (document.querySelector(".e-schedule-form") as any).ej2_instances[0];
    if (args.element && !args.e) {
      return;
    }
    let names = ["Subject", "Description", "EventType"];
    names.forEach(e => {
      form.validateRules(e);
    });
    let isValidated = false;
    let errorElements = document.querySelector(".e-dlg-content")!.querySelectorAll(".e-schedule-error");
    for (let i = 0; i < errorElements.length; i++) {
      isValidated =(errorElements[i] as any).style.display === "none" ? true : false;
      if (isValidated === false) {
        break;
      }
    }
    let saveBtn = document.querySelector(".e-custom-disable");
    if (isValidated && saveBtn) {
      saveBtn.classList.remove("e-custom-disable");
    } else if (!isValidated && !saveBtn) {
      document.querySelector(".e-event-save")!.classList.add("e-custom-disable");
    }
  }
}


