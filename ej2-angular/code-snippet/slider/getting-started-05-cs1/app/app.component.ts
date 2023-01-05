


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls:['index.css']
})

export class AppComponent {
  public type: string ="Range";
  public value: number[] =[30, 70];
}



