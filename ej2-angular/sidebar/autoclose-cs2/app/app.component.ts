


import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    public width: string = '280px';
    public mediaQuery: object = window.matchMedia('(max-width: 400px)');
}



