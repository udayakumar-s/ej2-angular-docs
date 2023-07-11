

import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent, ZoomSettingsModel } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar"></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="panClick()">Pan</button>`
})

export class AppComponent {
    @ViewChild('imageEditor')
    public imageEditorObj?: ImageEditorComponent;
    public toolbar: string[] = [];
    public zoomLevel: number = 1;
      public created(): void {
        if (Browser.isDevice) {
            this.imageEditorObj?.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            this.imageEditorObj?.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    }
    panClick(): void {
        this.imageEditorObj?.zoom(this.zoomLevel) // zoom in
        this.imageEditorObj?.pan(true);
    }
}



