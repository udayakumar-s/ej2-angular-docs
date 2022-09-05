


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    @ViewChild('leftSidebar') leftSidebar: SidebarComponent;
    @ViewChild('rightSidebar') rightSidebar: SidebarComponent;

    public width:string='250px';
    public position:string='Right';
    public type:string='Push';

    leftToggle() {
        this.leftSidebar.toggle();
    }
    rightToggle() {
        this.rightSidebar.toggle();
    }
}




