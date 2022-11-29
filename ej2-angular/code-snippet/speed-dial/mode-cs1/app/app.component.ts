

import { Component } from '@angular/core';
import { SpeedDialItemModel } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
               <!-- To Render SpeedDial component in Radial mode. -->
               <button ejs-speeddial id="radialspeeddial" target='#targetElement' openIconCss='e-icons e-edit' mode='Radial' [items]='items' position='BottomLeft' ></button>
               <button ejs-speeddial id="linearspeeddial" target='#targetElement' openIconCss='e-icons e-edit' mode='Linear' [items]='items' position='BottomRight' ></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { text: 'Cut', iconCss:'e-icons e-cut'},
    { text: 'Copy', iconCss:'e-icons e-copy'},
    { text: 'Paste', iconCss:'e-icons e-paste'}
  ];
}


