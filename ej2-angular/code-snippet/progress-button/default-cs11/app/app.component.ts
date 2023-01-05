

import { Component } from '@angular/core';
import { ProgressEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<button ejs-progressbutton [content]='content' [enableProgress]='true' [duration]='15000' (begin)='begin($event)' (progress)='progress($event)' (end)='end($event)' cssClass='e-hide-spinner'></button>`
})

export class AppComponent {
    private content: string = 'Progress';

    private begin(args: ProgressEventArgs): void {
        this.content = 'Progress ' + args.percent + '%';
    }

    private progress(args: ProgressEventArgs): void {
        this.content = 'Progress ' + args.percent + '%';
        if (args.percent === 40) {
            args.percent = 90;
        }
    }

    private end(args: ProgressEventArgs): void {
        this.content = 'Progress ' + args.percent + '%';
    }
}


