

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-chart style='display:block;' [chartArea]='chartArea' align='center' id='chartcontainer' [primaryXAxis]='primaryXAxis'
    [primaryYAxis]='primaryYAxis' [title]='title'>
    <e-series-collection>
        <e-series [dataSource]='data' type='Column' xName='x' yName='y' width=2> </e-series>
        <e-series [dataSource]='data1' type='Column' xName='x' yName='y' width=2> </e-series>
        <e-series [dataSource]='data2' type='Column' xName='x' yName='y' width=2> </e-series>
    </e-series-collection>
</ejs-chart>`
})

export class AppComponent implements OnInit {
    public data: Object[] = [
        { x: 'USA', y: 46 }, { x: 'GBR', y: 27 }, { x: 'CHN', y: 26 }
    ];
    public data1: Object[] = [
        { x: 'USA', y: 37 }, { x: 'GBR', y: 23 }, { x: 'CHN', y: 18 }
    ];
    public data2: Object[] = [
        { x: 'USA', y: 38 }, { x: 'GBR', y: 17 }, { x: 'CHN', y: 26 }
    ];
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, labelRotation: 90
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 }
    };
    public title: string = 'Olympic Medal Counts - RIO';
    public chartArea: Object = {
        border: {
            width: 0
        }
    };
}


