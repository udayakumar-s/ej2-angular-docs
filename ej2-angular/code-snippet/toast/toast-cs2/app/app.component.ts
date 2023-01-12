



import { Component, ViewChild } from '@angular/core';
import { closest} from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
        <ejs-toast id='elementToastTime' #element (created)="onCreate($event)" width='230px' height='250px' title= 'Anjolie Stokes' [buttons]='buttons'
    content= '<p><img src="./laura.png"></p>' [position] = 'position' > </ejs-toast>`
})

export class AppComponent {
    @ViewChild('element') element;
    public position = { X: "Right", Y: "Bottom" };
    public buttons = [{ model: { content: "Ignore" }, click: this.btnToastClick.bind(this)}, {model: { content: "reply" }}];

    btnToastClick(e) {
      const toastEle = closest(e.target, '.e-toast');
      this.element.hide(toastEle);
    }
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
}




