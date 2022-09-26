

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app/default-style.css'],
    templateUrl: 'app/app.template.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    public cellSpacing: number[] = [10, 10];
}


