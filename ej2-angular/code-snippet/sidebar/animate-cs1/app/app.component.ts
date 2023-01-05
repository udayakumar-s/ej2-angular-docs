

import { Component, ViewChild} from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    @ViewChild('sidebar') sidebar: SidebarComponent;
    public animate: boolean = false;
    public enableRtl: boolean = true;
    public type: string = 'Push';
    public onCreated(args: any) {
         this.sidebar.element.style.visibility = '';
    }
    closeClick(): void {
        this.sidebar.hide();
    };

    toggleClick():void{
      this.sidebar.toggle();
    }
}


