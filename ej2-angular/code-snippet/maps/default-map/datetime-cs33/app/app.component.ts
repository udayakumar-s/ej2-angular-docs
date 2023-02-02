


import { Component, OnInit } from '@angular/core';
import { Maps, DataLabel } from '@syncfusion/ej2-angular-maps';
import { usa_map } from 'usa.ts';

Maps.Inject(DataLabel);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [dataSource]='dataSource' [shapePropertyPath]='shapePropertyPath' [shapeDataPath]='shapeDataPath' [shapeSettings] = 'shapeSettings' [dataLabelSettings] = 'dataLabelSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData: object;
    public shapeSettings: object;
    public dataLabelSettings: object;
    public shapePropertyPath: string;
    public shapeDataPath: string;
    public dataSource: object;
    ngOnInit(): void {
        this.shapeData = usa_map;
        this.shapePropertyPath = 'name';
        this.shapeDataPath = 'Name';
        this.dataSource = [
            { "Name": "Iowa", "Population": "29863010" },
            { "Name": "Utah", "Population": "1263010" },
            { "Name": "Texas"," Population": "963010" }
        ];
        this.shapeSettings = {
            autofill: true
        };
        this.dataLabelSettings = {
            visible: true,
            labelPath: 'Name',
            template: '<div><div><img src="https://ej2.syncfusion.com/demos/src/maps/images/weather-clear.png" style="width:22px;height:22px"> </div> ${Name}</img></div>'
        };
    }
}



