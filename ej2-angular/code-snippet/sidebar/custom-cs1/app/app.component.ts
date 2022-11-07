


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent } from "@syncfusion/ej2-angular-buttons";
@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    @ViewChild('sidebar') sidebar: SidebarComponent;
    public type: string = 'Push';
    public target: string = '.content';
    @ViewChild('togglebtn')
    public togglebtn: ButtonComponent;
    public onCreated(args: any) {
         this.sidebar.element.style.visibility = '';
    }
    btnClick(){
        if(this.togglebtn.element.classList.contains('e-active')){
            this.togglebtn.content = 'Open';
            this.sidebar.hide();
        }
        else{
            this.togglebtn.content = 'Close';
            this.sidebar.show();
        }
    }
    closeClick() {
         this.sidebar.hide();
         this.togglebtn.element.classList.remove('e-active');
         this.togglebtn.content = 'Open'
    }
}



