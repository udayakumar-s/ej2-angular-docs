---
layout: post
title: Observable in Angular Gantt component | Syncfusion
description: Learn here all about Observable in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Observable 
documentation: ug
domainurl: ##DomainURL##
---

# Observable in Angular Gantt component

An [Observable](https://angular.io/guide/observables) is used extensively by Angular since it provide significant benefits over techniques for event handling, asynchronous programming, and handling multiple values.

## Observable binding using Async pipe

Gantt data can be consumed from an [Observable](https://angular.io/guide/observables) object by piping it through an [async](https://angular.io/api/common/AsyncPipe) pipe. The [async](https://angular.io/api/common/AsyncPipe) pipe is used to subscribe the observable object and resolve with the latest value emitted by it.

## Data binding

The gantt expects an object from the [Observable](https://angular.io/guide/observables). The emitted value should be an object with properties **result** and **count**.

```ts
import { Component, OnInit, ViewChild } from "@angular/core";
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DataStateChangeEventArgs } from "@syncfusion/ej2-treegrid";
import { Observable } from "rxjs";
import { TaskStoreService } from "./task-store.service";

@Component({
  selector: 'app-root',
  template: `<ejs-gantt #gantt id="ganttContainer"
[dataSource]="tasks | async" [height]="gantHeight" [rowHeight]="25" [allowSorting]="true"
 [taskFields]="taskSettings"  [editSettings]="editSettings"
  [toolbar]="toolbar"
  >
</ejs-gantt>`,
  providers: [TaskStoreService]
})
export class AppComponent implements OnInit {
  public taskSettings: object;
  public tasks: Observable<DataStateChangeEventArgs>;
  public editSettings: any;
  public toolbar: string[];
  @ViewChild('gantt')
  public ganttChart: GanttComponent;
  constructor(private TaskService: TaskStoreService) {
    this.tasks = TaskService;
  }

  ngOnInit(): void {
    this.taskSettings = {
      id: 'id',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      parentID: 'ParentID',
      resourceInfo: 'resources',
    };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      allowTaskbarEditing: true
    };
    this.toolbar = ['Add', 'Edit', 'Delete'];
    const state: any = { skip: 0, take: 10 };
    this.TaskService.execute(state);
  }
}

```

```ts
import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TaskModel } from "./task-model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TaskStoreService extends Subject<any> {
  private apiUrl = "api/tasks";
  constructor(private http: HttpClient) {
    super();
  }

  public execute(state: any): void {
    this.getTasks(state).subscribe(x =>
      super.next(x as any)
    );
  }

  getTasks(state?: any): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(this.apiUrl).pipe(
      map(
        (response: any) =>
          <any>{
            result:
              state.take > 0
                ? response.slice(state.skip, state.take)
                : response,
            count: response.length
          }
      )
    );
  }
}

```

>Note: Currently, we do not have support to perform CRUD operations using observables in Angular Gantt Chart.