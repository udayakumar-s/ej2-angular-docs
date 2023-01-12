


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { Ajax } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template:
       `<button ejs-button id='binddata' (click)='bind'>Bind Data</button>
       <br><br>
       <ejs-gantt id="ganttDefault" height="430px" [taskFields]="taskSettings" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public taskSettings: object;
    public projectStartDate: Date;
    public projectEndDate: Date;
    @ViewChild('gantt', {static: true})
    public ganttObj: GanttComponent;
    public ngOnInit(): void {
        this.data = new DataManager({
            url: '/Home/UrlDatasource',
            adaptor: new UrlAdaptor
        });
        this.taskSettings = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'SubTasks'
        };
        this.projectStartDate = new Date('02/24/2019');
        this.projectEndDate = new Date('07/20/2019');
    }
    bind(): void {
    let ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/GanttData","GET");
    gantt.showSpinner();
    ajax.send();
    ajax.onSuccess = function (data: string) {
        this.ganttObj.hideSpinner();
        this.ganttObj.dataSource = (JSON.parse(data)).Items;
        this.ganttObj.refresh();
    };
   };
}



