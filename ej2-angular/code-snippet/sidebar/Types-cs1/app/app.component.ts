


import { Component, ViewChild  } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent, RadioButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    @ViewChild('sidebar') sidebar: SidebarComponent;
    @ViewChild('togglebtn') togglebtn: ButtonComponent;

    public type: string = 'Push';
    public target: string = '.content';
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
    // change the togglebtn state
    changestate() {
        if(this.sidebar.type == 'Auto'){
            this.togglebtn.element.classList.add('e-active');
            this.togglebtn.content = 'close'
        }
        else{
            this.togglebtn.element.classList.remove('e-active');
            this.togglebtn.content = 'Open';
        }
    }
    changeHandler(args: any) : void {
        if(args.event.target.ej2_instances[0].label == 'Over') {
            this.sidebar.type = 'Over';
        } else if (args.event.target.ej2_instances[0].label == 'Push') {
             this.sidebar.type = 'Push';
        } else if (args.event.target.ej2_instances[0].label == 'Slide') {
             this.sidebar.type = 'Slide';
        } else {
             this.sidebar.type = 'Auto';
        }
        this.changestate();
        this.sidebar.dataBind();
    }
}


