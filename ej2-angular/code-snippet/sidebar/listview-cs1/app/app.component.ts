


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    @ViewChild('sidebar') sidebar: SidebarComponent;
    public width: string = '100%';
    public type: string = 'Over';
    public data: Object[] = [
        { text: 'Home', id: 'list-02' },
        { text: 'Offers', id: 'list-03' },
        { text: 'Support', id: 'list-04' },
        { text: 'Logout', id: 'list-06' }
    ];

    toggleClick() {
        this.sidebar.toggle();
    }
    closeClick() {
        this.sidebar.hide();
    }
}



