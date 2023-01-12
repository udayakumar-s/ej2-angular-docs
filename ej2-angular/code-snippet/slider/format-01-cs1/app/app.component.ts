


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls:['index.css']
})

export class AppComponent {
    public tooltipData: Object = { isVisible: true, format: 'C2' };
    public ticksData: Object = { placement: 'After', format: 'C2', largeStep: 20, smallStep: 10, showSmallTicks: true };
}



