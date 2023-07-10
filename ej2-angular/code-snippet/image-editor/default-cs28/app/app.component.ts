

import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent, ImageFinetuneOption, } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar" ></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="btn1Click()">Brightness</button>
              <button class="e-btn e-primary" (click)="btn2Click()">Contrast</button>`
})

export class AppComponent {
    @ViewChild('imageEditor')
    public imageEditorObj?: ImageEditorComponent;
    public toolbar: string[] = [];
      public created(): void {
        if (Browser.isDevice) {
            this.imageEditorObj?.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            this.imageEditorObj?.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
        
    }
    btn1Click(): void {
        this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Brightness,10);    
    }
    btn2Click(): void {
        this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Contrast,10);    
    }
   
}



