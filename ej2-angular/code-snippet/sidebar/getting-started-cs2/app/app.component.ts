

import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app/app.component.css'],
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
    @ViewChild('sidebar') sidebar: SidebarComponent;
    public onCreated(args: any) {
         this.sidebar.element.style.visibility = '';
    }
}



