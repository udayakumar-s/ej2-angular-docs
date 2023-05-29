


import { Component, ViewChild, OnInit } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-root',
    template: `<button class="e-control e-btn" id="targetButton" (click)="onOpenDialog($event)">Open Alert Dialog</button>`
})

export class AppComponent implements OnInit {

    public onOpenDialog = function(event: any): void {
       DialogUtility.alert({
        title: 'Alert Dialog',
        content: "This is an Alert Dialog!",
        okButton: {  text: 'OK', click: this.okClick.bind(this) },
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' }
    });
 }
 private okClick(): void {
    alert('you clicked OK button');
 }
}



