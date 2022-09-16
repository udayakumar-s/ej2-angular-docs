

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To render progress button. -->
               <button ejs-progressbutton  [content]='content' [cssClass]='cssClass' [enableProgress]='true' [duration]='4000' (begin)='begin()' (end)='end()'></button>`
})

export class AppComponent {
    private content: string = 'Upload';
    private cssClass: string = 'e-hide-spinner';

    private begin(): void {
        this.content = 'Uploading...';
        this.cssClass = 'e-hide-spinner e-info';
    }
    private end(): void {
        this.content = 'Success';
        this.cssClass = 'e-hide-spinner e-success';
        setTimeout(() => {
            this.content = 'Upload';
            this.cssClass = 'e-hide-spinner';
        }, 500)
    }
}


