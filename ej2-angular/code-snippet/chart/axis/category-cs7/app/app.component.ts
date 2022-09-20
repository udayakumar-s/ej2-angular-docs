

import { Component, OnInit } from '@angular/core';
import { inverseData } from 'datasource.ts';
@Component({
    selector: 'app-container',
    template:
     `<ejs-chart id="chart-container" [title]='title' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
         [legendSettings]='legend'>
            <e-series-collection>
                <e-series [dataSource]='data' type='Column' xName='x' yName='y' name='Years' [marker]='marker'>
                </e-series>
           </e-series-collection>
       </ejs-chart>`
       })

 export class AppComponent {
    public primaryXAxis: Object;
    public primaryYAxis: Object;
    public data: Object[];
    public title: string

    ngOnInit(): void {
    this.primaryYAxis = {
        isInversed: true
    };
    this.data= inverseData;
    this.title= 'Exchange Rate';
    }

}



