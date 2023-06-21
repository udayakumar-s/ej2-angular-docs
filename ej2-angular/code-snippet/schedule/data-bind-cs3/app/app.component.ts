

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

class CustomAdaptor extends ODataV4Adaptor {
    override processResponse(): Object {
        let i: number = 0;
        // calling base class processResponse function
        let original: any = super.processResponse.apply(this, arguments as any);
        // adding employee id
        original.forEach((item: any) => item['EventID'] = ++i);
        return  original;
    }
}

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [readonly]="readonly" [selectedDate]="selectedDate" [eventSettings]="eventSettings"></ejs-schedule>`
})

export class AppComponent {
    public readonly: boolean = true;
    public selectedDate: Date = new Date(2020, 9, 20);
    private dataManager: DataManager = new DataManager({
       url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
       adaptor: new CustomAdaptor
    });
    public eventSettings: EventSettingsModel = { dataSource: this.dataManager};
}


