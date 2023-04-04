

import { Component, OnInit } from '@angular/core';
import { stackData } from 'datasource.ts';
@Component({
    selector: 'app-container',
    template:
    `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingBar' xName='x' yName='y' name='Apple' fill='red' [border]='border'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar' xName='x' yName='y1' name='Orange' fill='red' [border]='border'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar' xName='x' yName='y2' name='Wastage' fill='red' [border]='border'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis: Object;
    public border: Object;
    public chartData: Object[];
    public title: string;
    ngOnInit(): void {
        this.chartData = stackData;
        this.border = {
            width: 2,
            color: 'green'
        }
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Months'
        };
        this.title = 'Sales Comparison';    
    }

}


