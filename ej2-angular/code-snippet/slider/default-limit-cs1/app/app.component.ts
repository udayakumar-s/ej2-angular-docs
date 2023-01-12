


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls:['index.css']
})

export class AppComponent {
  public type: string ="MinRange";
  public value: number = 30;
  public tooltip: object= { isVisible: true };
  public min: number = 0;
  public max: number = 100;
  public limits: object = { enabled: true, minStart: 10, minEnd: 40 };
}



