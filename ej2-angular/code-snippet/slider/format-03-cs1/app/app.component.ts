


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls:['index.css']
})

export class AppComponent {
    public tooltipData: Object = { placement: 'Before', isVisible: true };
    public ticksData: Object = { placement: 'After', largeStep: 1 };

    tooltipChangeHandler(args: SliderTooltipEventArgs): void {
        // Weekdays Array
        let daysArr: string [] = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
        // Customizing each ticks text into weeksdays
        args.text = daysArr[parseFloat(args.value)];
    }

    renderingTicksHandler(args: SliderTickEventArgs): void {
        // Customizing tooltip to display the Day (in numeric) of the week
        args.text =  'Day ' + (Number(args.value) + 1).toString();
    }
}



