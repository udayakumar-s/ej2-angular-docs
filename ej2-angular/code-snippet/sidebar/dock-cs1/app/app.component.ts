


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    @ViewChild('dockBar') dockBar: SidebarComponent;
    public enableDock: boolean = true;
    public width: string = '220px';
    public dockSize: string = '72px';
    toggleClick() {
        this.dockBar.toggle();
    }
}



