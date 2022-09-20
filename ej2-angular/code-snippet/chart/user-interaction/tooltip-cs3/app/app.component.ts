

import { Component, OnInit } from '@angular/core';
import { toolData } from 'datasource.ts';
@Component({
    selector: 'app-container',
    template:
    `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>
        <e-series-collection>
            <e-series [dataSource]='chartData1' type='Spline' xName='x' yName='y' width=2 name='Max Temp' [marker]='marker' tooltipFormat='${point.x}'></e-series>
            <e-series [dataSource]='chartData2' type='Spline' xName='x' yName='y' width=2 name='Avg Temp' [marker]='marker' tooltipFormat='${point.y}'></e-series>
            <e-series [dataSource]='chartData3' type='Spline' xName='x' yName='y' width=2 name='Min Temp' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis: Object;
    public chartData1: Object[];
    public chartData2: Object[];
    public chartData3: Object[];
    public tooltipFormat1: string;
    public tooltipFormat2: string;
    public title: string;
    public marker: Object;
    public tooltip: Object;
    ngOnInit(): void {
        this.chartData1 = [
                { x: 'Sun', y: 15 }, { x: 'Mon', y: 22 },
                { x: 'Tue', y: 32 },
                { x: 'Wed', y: 31 },
                { x: 'Thu', y: 29 }, { x: 'Fri', y: 24 },
                { x: 'Sat', y: 18 },
            ];
        this.chartData2 = [
                { x: 'Sun', y: 10 }, { x: 'Mon', y: 18 },
                { x: 'Tue', y: 28 },
                { x: 'Wed', y: 28 },
                { x: 'Thu', y: 26 }, { x: 'Fri', y: 20 },
                { x: 'Sat', y: 15 }
            ];
        this.chartData3 = [
                { x: 'Sun', y: 2 }, { x: 'Mon', y: 12 },
                { x: 'Tue', y: 22 },
                { x: 'Wed', y: 23 },
                { x: 'Thu', y: 19 }, { x: 'Fri', y: 13 },
                { x: 'Sat', y: 8 },
            ];
        this.primaryXAxis = {
            valueType: 'Category'
        };
        this.tooltip = { enable: true, header: 'Unemployment', format: '<b>${point.x} : ${point.y}</b>' };
        this.marker = { visible: true, width: 10, height: 10 };
        this.title = 'NC Weather Report - 2016';

}


