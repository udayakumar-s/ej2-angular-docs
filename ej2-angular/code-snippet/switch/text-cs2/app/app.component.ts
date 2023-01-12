

import { Component, ViewChild } from '@angular/core';
import { SwitchComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    template: `<!-- To Render Switch. -->
               <ejs-switch #switch onLabel="ON" offLabel="OFF" (created)='created($event)'></ejs-switch>`
})

export class AppComponent {
    @ViewChild('switch')
    public switch: SwitchComponent;
    public created() {
        this.switch.toggle();
    }
}


