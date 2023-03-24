

import { Component, OnInit } from '@angular/core';
import { centerLabelData } from 'datasource.ts';
@Component({
    selector: 'app-container',
    template:
    `<ejs-accumulationchart id="chart-container" [legendSettings]='legendSettings'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' innerRadius='65%' [centerLabel]='centerLabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata: Object[];
    public legendSettings: Object;
    public centerLabel: Object;
    ngOnInit(): void {
        this.piedata = centerLabelData;
        this.legendSettings = { 
            visible: false
        };
        this.centerLabel = {
            text : 'Mobile<br>Browsers<br>Statistics',
            hoverTextFormat: '${point.x} <br> Browser Share <br> ${point.y}%'
        }

    }

}


