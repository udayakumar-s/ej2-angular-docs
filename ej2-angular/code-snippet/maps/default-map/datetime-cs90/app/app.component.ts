


import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Maps, Zoom } from '@syncfusion/ej2-angular-maps';
import { usa_map } from 'usa.ts';
import { world_map } from 'world-map.ts';
import { california } from 'california.ts';
Maps.Inject(Zoom);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' [layers]='layers' [zoomSettings]='zoomSettings'>
     <e-layers>
    <e-layer [urlTemplate]='urlTemplate'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public urlTemplate: string;
    public zoomSettings: object;
    ngOnInit(): void {
           this.urlTemplate = "http://mt1.google.com/vt/lyrs=m@129&hl=en&x=tileX&y=tileY&z=level";
           this.zoomSettings = {
               enable: true
           }
    }
}



