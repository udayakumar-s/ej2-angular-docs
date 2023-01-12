


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls:['index.css']
})

export class AppComponent {
  public minType: string = "MinRange";
  public rangeType: string = "Range";
  public minValue: number = 30;
  public rangeValue: number = [30, 70];
}



