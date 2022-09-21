

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DashboardLayoutComponent } from '@syncfusion/ej2-angular-layouts';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    styleUrls: ['app/default-style.css'],
    templateUrl: 'app/app.template.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('defaultLayout') dashboard: DashboardLayoutComponent;
    @ViewChild('toggleBtn') toggleBtn: ButtonComponent;
    public cellSpacing: any = [10, 10];
    public allowFloating: boolean = false;
    public cellAspectRatio: number = 100/75;
    public panels: any = [
    {'sizeX': 2, 'sizeY': 2, 'row': 1, 'col': 0, content:'<div class="content">0</div>'},
    {'sizeX': 2, 'sizeY': 2, 'row': 2, 'col': 2, content:'<div class="content">1</div>'},
    {'sizeX': 2, 'sizeY': 2, 'row': 3, 'col': 4, content:'<div class="content">2</div>'}
    ];

    btnClick() {
        if (this.toggleBtn.content == "Disable Floating and Reset") {
            this.toggleBtn.content = 'Enable Floating';
            this.dashboard.allowFloating = false;
            this.dashboard.panels = this.panels;
        } else {
            this.toggleBtn.content = 'Disable Floating and Reset';
            this.dashboard.allowFloating = true;
        }
    }
}


