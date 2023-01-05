

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app/default-style.css'],
    templateUrl: 'app/app.template.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public cellSpacing: number[] = [20, 20];
    public columns: number = 3;
    public panels: any = [{ "row": 0, "col": 0, content:'<div class="content">1</div>' },
    { "row": 0, "col": 1, content:'<div class="content">2</div>' },
    { "row": 0, "col": 2, content:'<div class="content">3</div>' },
    { "row": 1, "col": 0, content:'<div class="content">4</div>' },
    { "row": 1, "col": 1, content:'<div class="content">5</div>' },
    { "row": 1, "col": 2, content:'<div class="content">6</div>' }
    ]
}


