


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls:['index.css']
})

export class AppComponent {
    public tooltipData01: Object = { placement: 'Before', isVisible: true, showOn: 'Always' };
    public ticksData01: Object = { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true };
    public mintype: string = 'MinRange';

    public tooltipData02: Object = { placement: 'Before', isVisible: true, showOn: 'Always' };
    public ticksData02: Object = { placement: 'After', largeStep: 1 };

    tooltipChangeHandler(args: SliderTooltipEventArgs): void {
        // Weekdays Array
        let daysArr: string [] = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
        // Customizing each ticks text into weeksdays
        args.text = daysArr[parseFloat(args.text)];
    }

    renderingTicksHandler(args: SliderTickEventArgs): void {
        // Customizing tooltip to display the Day (in numeric) of the week
        args.text =  'Day ' + (Number(args.text) + 1).toString();
    }
}



