import { Component, ViewChild,OnInit } from '@angular/core';
import { sampleGridData } from './datasource';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: ` <ejs-grid #grid id='Grid' [dataSource]='sourceData' [allowPaging]="true"
              [pageSettings]="true" [allowSelection]="true" [allowRowDragAndDrop]="true" 
              [selectionSettings]="selectionOptions" [rowDropSettings]="srcDropOptions" 
              (rowDrop)='onRowDrop($event)' [editSettings]="gridEditSettings">
                <e-columns> 
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' 
                        width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' 
                        width=180></e-column>
                        <e-column field='description' headerText='Description' 
                        textAlign='Left' width=180></e-column>
                        <e-column field='category' headerText='Category' 
                        textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' 
                        format='yMd' width=120></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' 
                        width=80></e-column>
                </e-columns>
              </ejs-grid>
              <ejs-treegrid #treegrid id='TreeGrid'  
              childMapping='subtasks' [editSettings]='treeGridEditSettings'>
                  <e-columns>
                      <e-column field='taskID' headerText='Task ID'  textAlign='Right' 
                      width=90></e-column>
                      <e-column field='taskName' headerText='Task Name' textAlign='Left' 
                      width=180></e-column>
                      <e-column field='startDate' headerText='Start Date' textAlign='Right' 
                      format='yMd' width=90></e-column>
                      <e-column field='duration' headerText='Duration' textAlign='Right' 
                      width=80></e-column>
                </e-columns>
              </ejs-treegrid>`
})
export class AppComponent implements OnInit {

  @ViewChild('grid')
  gridObject!: GridComponent;
  @ViewChild('treegrid')
  treeGridObject!: TreeGridComponent;
  public sourceData: Object[] = [];
  public selectionOptions?: Object;
  public srcDropOptions?: Object;
  public treegridData: object[] = [];
  public gridEditSettings:any;
  public treeGridEditSettings:any;

  ngOnInit(): void {

    this.sourceData = sampleGridData;
    this.selectionOptions = { type: 'Multiple' };
    this.srcDropOptions = { targetID: 'TreeGrid' };
    this.gridEditSettings = { allowDeleting: true };
    this.treeGridEditSettings = { allowAdding: true, allowEditing: true };
  }
  onRowDrop(args:any) {
    if (args.target.closest('.e-treegrid')) {
      args.cancel = true;
      var rowIndex = !isNullOrUndefined(args.target.closest('.e-row'))
        ? args.target.closest('.e-row').rowIndex
        : 0;
      for (var i = 0; i < args.data.length; i++) {
        this.treeGridObject.addRecord(args.data[i], rowIndex);
        this.gridObject.deleteRecord('taskID', args.data[i]);
      }
    }
  }
}
