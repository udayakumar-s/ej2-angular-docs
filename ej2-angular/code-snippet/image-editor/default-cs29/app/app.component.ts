

import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent, ImageFinetuneOption, } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar" ></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="btn1Click()">Hue</button>
              <button class="e-btn e-primary" (click)="btn2Click()">Exposure</button>
              <button class="e-btn e-primary" (click)="btn3Click()">Blur</button>`
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
        this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Hue,10);    
    }
    btn2Click(): void {
        this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Exposure,10);    
    }
    btn3Click(): void {
        this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Blur,10);    
    }
   
}



