


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls:['index.css']
})

export class AppComponent {
  public type: string ="MinRange";
  public tooltip: Object ={ placement: 'After', isVisible: true, showOn: 'Always' };
}



