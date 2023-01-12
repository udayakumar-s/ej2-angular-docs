

import { Component, ViewChild} from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    @ViewChild('sidebar') sidebar: SidebarComponent;
    public isOpen: boolean = true;
    public closeOnDocumentClick: boolean = true;
    public type: string = 'Push';
    public onCreated(args: any) {
         this.sidebar.element.style.visibility = '';
    }

    toggleClick():void{
      this.sidebar.show();
    }
}


