


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    @ViewChild('sidebar') sidebar: SidebarComponent;
    public open() {
       console.log("Sidebar Opened");
    }
    public close() {
        console.log("Sidebar Closed");
    }
    toggleClick() {
        this.sidebar.toggle();
    }
    closeClick() {
        this.sidebar.hide();
    }
}



