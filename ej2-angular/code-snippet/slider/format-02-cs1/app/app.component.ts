


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls:['index.css']
})

export class AppComponent {
    public tooltipData: Object = { placement: 'Before', isVisible: true, showOn: 'Always', format: 'P0' };
    public ticksData: Object = { placement: 'After', largeStep: .2, smallStep: .1, showSmallTicks: true, format: 'P0' };

}



