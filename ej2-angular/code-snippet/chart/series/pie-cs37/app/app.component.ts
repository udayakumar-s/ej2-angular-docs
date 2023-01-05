

import { Component, OnInit } from '@angular/core';
import { pieData } from 'datasource.ts';
import { IAccTextRenderEventArgs, IAccTooltipRenderEventArgs } from '@syncfusion/ej2-charts';
@Component({
    selector: 'app-container',
    template:
    `<ejs-accumulationchart id="chart-container" [tooltip]='tooltip' (tooltipRender)="ontooltipRender($event)">
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata: Object[];
    public tooltip: Object;
    public ontooltipRender: Function;
    ngOnInit(): void {
        this.piedata = pieData;
         this.tooltip = {
              enable: true
                }
        this.ontooltipRender = (args: IAccTooltipRenderEventArgs): void {
              if (args.point.index === 3) {
              args.text = args.point.x + '' + ':' + args.point.y + '' + ' ' +'customtext';
              args.textStyle.color = '#f48042';
        }
        }
        };
    }


