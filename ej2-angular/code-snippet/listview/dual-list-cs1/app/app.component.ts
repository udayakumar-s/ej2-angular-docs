

import { Component, ViewChild } from "@angular/core";
import { enableRipple } from "@syncfusion/ej2-base";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";
import { ListViewComponent } from '@syncfusion/ej2-angular-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
enableRipple(true);

@Component({
    selector: 'my-app',
    template: `<div id="text1">
            <input #textbox class="e-input" type="text" id="firstInput" placeholder="Filter" title="Type in a name" (keyup)="onFirstKeyUp($event)" />
              </div>
            <ejs-listview #list1 id='list-1' [dataSource]='firstListData' [fields]='fields' [sortOrder]='Ascending'  (select)="onFirstListSelect()"></ejs-listview>
             <div id="btn">
             <button ejs-button #btn1 id="firstBtn" (click)="firstbtnclick()"> >> </button>
             <button ejs-button #btn2 id="secondBtn" [disabled]=true (click)="secondbtnclick()"> > </button>
             <button ejs-button #btn3 id="thirdBtn" [disabled]=true (click)="thirdbtnclick()"> < </button>
             <button ejs-button #btn4 id="fourthBtn" (click)="fourthbtnclick()"> << </button>
             </div>

            <div id="text2">
            <input #text class="e-input" type="text" id="secondInput" placeholder="Filter" title="Type in a name" (keyup)="onSecondKeyUp($event)" />
            </div>
            <ejs-listview #list2 id='list-2' [dataSource]='secondListData' [fields]='fields' [sortOrder]='Ascending' (select)="onSecondListSelect()"></ejs-listview>
        `,
})

export class AppComponent {
  public fields: Object;
  public firstListData: any; secondListData: any;
  constructor(){
   this.firstListData  = [
  { text: "Hennessey Venom", id: "list-01" },
  { text: "Bugatti Chiron", id: "list-02" },
  { text: "Bugatti Veyron Super Sport", id: "list-03" },
  { text: "SSC Ultimate Aero", id: "list-04" },
  { text: "Koenigsegg CCR", id: "list-05" },
  { text: "McLaren F1", id: "list-06" }
];

   this.secondListData = [
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
  ];

 this.fields = { text: "text", id: "id" };
  }
    @ViewChild('list1')firstListObj: ListViewComponent;
    @ViewChild('list2')secondListObj: ListViewComponent;
    @ViewChild('btn1')firstBtnObj: ButtonComponent;
    @ViewChild('btn2')secondBtnObj: ButtonComponent;
    @ViewChild('btn3')thirdBtnObj: ButtonComponent;
    @ViewChild('btn4')fourthBtnObj: ButtonComponent;
    @ViewChild('textbox')textboxEle: any;
    @ViewChild('text')textEle: any;
    ngAfterViewInit(){
        this.firstListData = (this.firstListObj.dataSource as { [key: string]: Object; }[]).slice();
        this.secondListData = (this.secondListObj.dataSource as { [key: string]: Object; }[]).slice();
    }
       //Here, all list items are moved to the second list on clicking move all button
    firstbtnclick() {
        let e = this.firstListObj.getSelectedItems();
        this.secondListObj.dataSource = Array.prototype.concat.call(this.firstListObj.dataSource, this.secondListObj.dataSource);
        this.updateFirstListData();
        this.firstListObj.removeMultipleItems((this.firstListObj as any).liCollection);
        this.firstListData = this.firstListData.concat(this.firstListObj.dataSource);
        this.secondListData = (this.secondListObj.dataSource as { [key: string]: Object; }[]).slice();
        this.firstBtnObj.disabled = true;
        this.onFirstKeyUp(e);
        this.setButtonState();
    }

    //Here, the selected list items are moved to the second list on clicking move button
  secondbtnclick() {
        let e = this.firstListObj.getSelectedItems();
        this.secondListObj.dataSource = Array.prototype.concat.call(this.secondListObj.dataSource, e.data);
        (this.firstListObj as any).removeItem(e.item);
        this.firstListData = this.firstListObj.dataSource;
        (this.secondListData = this.secondListObj.dataSource as { [key: string]: Object; }[]).slice();
        this.onFirstKeyUp(e);
        this.secondBtnObj.disabled = true;
        this.setButtonState();
    }

    //Here, the selected list items are moved to the first list on clicking move button
   thirdbtnclick () {
        let e = this.secondListObj.getSelectedItems();
        this.firstListObj.dataSource = Array.prototype.concat.call(this.firstListObj.dataSource, e.data);
        (this.secondListObj as any).removeItem(e.item);
        this.secondListData = this.secondListObj.dataSource;
        this.firstListData = (this.firstListObj.dataSource as { [key: string]: Object; }[]).slice();
        this.onSecondKeyUp(e);
        this.thirdBtnObj.disabled = true;
        this.setButtonState();

    }

    //Here, all list items are moved to the first list on clicking move all button
   fourthbtnclick() {
        let e = this.secondListObj.getSelectedItems();
        this.firstListObj.dataSource = Array.prototype.concat.call(this.firstListObj.dataSource, this.secondListObj.dataSource);
        this.updateSecondListData();
        this.secondListObj.removeMultipleItems((this.secondListObj as any).liCollection);
        this.secondListData = this.secondListData.concat(this.secondListObj.dataSource);
        this.firstListData = (this.firstListObj.dataSource as { [key: string]: Object; }[]).slice();
        this.onSecondKeyUp(e);
        this.setButtonState();

    }

    //Here, the ListView data source is updated to the first list
    updateFirstListData() {
        Array.prototype.forEach.call((this.firstListObj as any).liCollection, (list: any) => {
            this.firstListData.forEach((data: any, index: any) => {
                if (list.innerText.trim() === data.text) {
                    delete this.firstListData[index];
                }
            });
        });
        this.textboxEle.nativeElement.value= '';
        let ds: any = [];
        this.firstListData.forEach((data: any) => {
            ds.push(data);
        })
        this.firstListData = ds;

    }

    //Here, the ListView dataSource is updated for the second list
    updateSecondListData() {
        Array.prototype.forEach.call((this.secondListObj as any).liCollection, (list: any) => {
            this.secondListData.forEach((data: any, index: any) => {
                if (list.innerText.trim() === data.text) {
                    delete this.secondListData[index];
                }
            });

        });
        this.textEle.nativeElement.value = '';
        let ds: any = [];
        this.secondListData.forEach((data: any) => {
            ds.push(data);
        })
        this.secondListData = ds;

    }
    onFirstListSelect() {
        this.secondBtnObj.disabled = false;
    }
    onSecondListSelect() {
        this.thirdBtnObj.disabled = false;
    }

    //Here, filtering is handled using the dataManager for the first list
    onFirstKeyUp(e: any) {
        let value = this.textboxEle.nativeElement.value;
        let data = new DataManager(this.firstListData).executeLocal(new Query().where('text', 'startswith', value, true));
        if (!value) {
            this.firstListObj.dataSource = this.firstListData.slice();
        } else {
            (this.firstListObj.dataSource as any) = data;
        }
    }
    //Here, filtering is handled using the dataManager for the second list
     onSecondKeyUp(e:any) {
        let value =this.textEle.nativeElement.value;
        let data = new DataManager(this.secondListData).executeLocal(new Query().where('text', 'startswith', value, true));
        if (!value) {
            this.secondListObj.dataSource = this.secondListData.slice();
        } else {
            this.secondListObj.dataSource = data as { [key: string]: Object }[];
        }
    }

    //Here, the state of the button is changed
    setButtonState() {
        if ((this.firstListObj.dataSource as any).length) {
            this.firstBtnObj.disabled = false;
        } else {
            this.firstBtnObj.disabled = true;
            this.secondBtnObj.disabled = true;
        }

        if ((this.secondListObj.dataSource as any).length) {
            this.fourthBtnObj.disabled = false;
        } else {
            this.fourthBtnObj.disabled = true;
            this.thirdBtnObj.disabled = true;
        }

    }
}


