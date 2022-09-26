


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls:['index.css']
})

export class AppComponent {
  public type: string ="Range";
  public value: number[] = [30, 70];
  public tooltip: object= { isVisible: true };
  public min: number = 0;
  public max: number = 100;
  public limits: object = { enabled: true, startHandleFixed: true, endHandleFixed: true };
}



