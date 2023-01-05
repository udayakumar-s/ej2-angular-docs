


import { Component, OnInit, ViewChild } from '@angular/core';
import { datasrc } from 'datasource.ts';
import { IChangedEventArgs }  from "@syncfusion/ej2-charts";

@Component({
    selector: 'app-container',
    template:
    `<ejs-rangenavigator id="rn-container" valueType='DateTime' [value]='value' [tooltip]='tooltip' [enableDeferredUpdate]='enableDeferredUpdate' (changed)='changed($event)'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]='chartData' type='Area' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
          <ejs-chart #chart style='display:block;' id='chart' height='350' [primaryXAxis]='primaryXAxis' [tooltip]= 'tooltip'>
                <e-series-collection>
                    <e-series [dataSource]='chartData' type='Area' xName='x' yName='y' width=2>
                    </e-series>
                </e-series-collection>`
})
export class AppComponent implements OnInit {
     @ViewChild('chart')
    public chart: Chart;
    public periodsValue: Object[];
    public chartData: Object[];
    public value: Object[];
    public tooltip: Object;
    public enableDeferredUpdate: booloean;
    public changed: IChangedEventArgs;
    public primaryXAxis: object;
    public legendSettings: object;
    ngOnInit(): void {
        this.primaryXAxis = {
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift'
        };
        this.legendSettings= { visible: false };
        this.chartData = datasrc;
        this.value=[new Date('2017-09-01'), new Date('2018-02-01')];
        this.tooltip={ enable: true };
        this.enableDeferredUpdate = true;
        this.changed = function(args) {
            this.chart.primaryXAxis.zoomFactor = args.zoomFactor;
            this.chart.primaryXAxis.zoomPosition = args.zoomPosition;
            this.chart.dataBind();

        }
    }
}



