

import { Component, OnInit } from '@angular/core';
import { barData } from 'datasource.ts';
@Component({
    selector: 'app-container',
    template:
    `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' columnWidth='0.5' columnSpacing='0.5' type='Bar' xName='x' yName='y' name='India' fill='red' [border]='border'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData: Object[];
    public title: string;
    public border: Object;
    ngOnInit(): void {
        this.border = {
            color: 'green',
            width: 2
        };
        this.chartData = barData;
        this.title = 'Unemployment rate (%)';
    }

}


