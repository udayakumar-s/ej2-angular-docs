


import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
        <ejs-toast #toastObj (created)="onCreate($event)" (beforeClose)="onBeforeClose($event)" [position] = 'position' >
            <ng-template #title>
                <div>Matt sent you a friend request</div>
            </ng-template>
            <ng-template #content>
                <div>Hey, wanna dress up as wizards and ride our hoverboards?</div>
            </ng-template>
        </ejs-toast>`
})

export class AppComponent {
    @ViewChild('toastObj') element;
    public position = { X: 'Right' };

    onCreate() {
      this.toastShow();
    }
    btnClick() {
      this.toastShow();
    }
    toastShow() {
          setTimeout(
        () => {
            this.element.show();
        }, 700);
    }
    onBeforeClose(e){
        if (e.type === "swipe") {
            e.cancel = true;
        }
    }
}


