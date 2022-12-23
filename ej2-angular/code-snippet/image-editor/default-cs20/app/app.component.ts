

import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()"></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="zoomInClick()">Zoom In</button>
              <button class="e-btn e-primary" (click)="zoomOutClick()">Zoom Out</button>
              <button class="e-btn e-primary" (click)="panClick()">Pan</button>`
})

export class AppComponent {
    @ViewChild('imageEditor')
    public imageEditorObj: ImageEditorComponent;

      public created(): void {
        if (Browser.isDevice) {
            this.imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            this.imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    }
    zoomInClick(): void {
        this.imageEditorObj.zoom(.1) // zoom in
    }
    zoomOutClick(): void {
        this.imageEditorObj.zoom(-.1) // zoom out
    }
    panClick(): void {
        this.imageEditorObj.zoom(.1) // zoom in
        this.imageEditorObj.pan(true);
    }
}



