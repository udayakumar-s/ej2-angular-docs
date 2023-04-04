

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <div class="e-input-group">
                <input class="e-input" name='input' type="text" (focus)="focusIn($event.target)"
                placeholder = "Enter Date" (blur)="focusOut($event.target)"/>
                <span class="e-input-group-icon e-input-popup-date" (mouseup)="onMouseUp($event.target)" (mousedown)="onMouseDown($event.target)"></span>
                </div>
              </div>`
})

export class AppComponent {
    public focusIn(target: HTMLElement): void {
        target.parentElement.classList.add('e-input-focus');
    }

    public focusOut(target: HTMLElement): void {
        target.parentElement.classList.remove('e-input-focus');
    }

    public onMouseDown(target: HTMLElement): void {
        target.classList.add('e-input-btn-ripple');
    }

    public onMouseUp(target: HTMLElement): void {
        let ele: HTMLElement = target;
        setTimeout(
                () => {ele.classList.remove('e-input-btn-ripple'); },
                500);
    }
}


