


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls:['index.css']
})

export class AppComponent {
    public tooltipData01: Object = { isVisible: true, format: '##.## Km' };
    public ticksData01: Object = { placement: 'After', format: '##.## Km', largeStep: 20, smallStep: 10, showSmallTicks: true };

    public tooltipData02: Object = { isVisible: true, format: '##.#00' };
    public ticksData02: Object = { placement: 'After', format: '##.#00', largeStep: 0.02, smallStep: 0.01, showSmallTicks: true };

    public tooltipData03: Object = { isVisible: true, format: '00##' };
    public ticksData03: Object = { placement: 'After', format: '00##', largeStep: 20, smallStep: 10, showSmallTicks: true };

}



