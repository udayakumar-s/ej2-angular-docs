


import { Component } from '@angular/core';
import { MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';
@Component({
    selector: 'app-root',
    templateUrl: './app/format.html',
    providers: [MaskedDateTimeService],
})
export class AppComponent {
constructor( ) {
    }
    public format: string = "hh:mm:ss";
    public enableMaskSupport: boolean = true;
}


