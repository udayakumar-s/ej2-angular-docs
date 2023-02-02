


import { Component, OnInit} from '@angular/core';
import { Maps, DataLabel, MapsTooltip } from '@syncfusion/ej2-angular-maps';
import { usa_map } from 'usa.ts';

Maps.Inject(DataLabel, MapsTooltip);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [shapeSettings] = 'shapeSettings' [dataLabelSettings] = 'dataLabelSettings' [tooltipSettings] = 'tooltipSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData: object;
    public shapeSettings: object;
    public dataLabelSettings: object;
    ngOnInit(): void {
        this.shapeData = usa_map;
        this.shapeSettings = {
                autofill: true
            };
        this.dataLabelSettings = {
            visible: true,
            labelPath: 'name',
            smartLabelMode: 'Hide',
            intersectionAction: 'Trim',
            border: {
                color: 'green',
                width: 2
            },
            fill: 'transparent',
            opacity: 0.9,
            textStyle: {
                size: '17px',
                fontStyle: 'Sans-serif',
                fontWeight: 'normal'
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name'
            }
        };
    }
}



