

import { Component, OnInit } from '@angular/core';
import { columnData } from 'datasource.ts';
@Component({
    selector: 'app-container',
    template:
    `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' columnWidth='0.5' columnSpacing='0.5' xName='country' yName='gold' name='Gold' fill='red' [border]='border'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis: Object;
    public chartData: Object[];
    public title: string;
    public border: Object;
    ngOnInit(): void {
        this.border = {
            color: 'green',
            width: 2
        };
        this.chartData = columnData;
        this.primaryXAxis = {
           valueType: 'Category',
           title: 'Countries'
        };
        this.title = 'Olympic Medals';
    }

}


