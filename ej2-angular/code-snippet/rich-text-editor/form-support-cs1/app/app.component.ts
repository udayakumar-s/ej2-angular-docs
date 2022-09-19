


import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';
  @Component({
      selector: 'app-root',
      template: `<form #rteForm="ngForm">
              <div class="form-group">
                  <ejs-richtexteditor #templateRTE id="name" #name='ngModel' [(value)]='value' required name="name" [(ngModel)]="value" (created)="rteCreated()"></ejs-richtexteditor>
                  <div *ngIf="(name.invalid && (name.dirty || name.touched))" class="alert alert-danger">
                      <div *ngIf="name.errors.required">
                          Value is required.
                      </div>
                  </div>
              </div>
              <div>
                  <button type="submit" ejs-button [disabled]="!rteForm.valid">Submit</button>
                  <button type="reset" ejs-button style="margin-left: 20px">Reset</button>
              </div>
          </form>`,
      providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
  })
  export class AppComponent  {
    public value: any = null;
  @ViewChild('templateRTE') rteEle: RichTextEditorComponent;

  rteCreated(): void {
      this.rteEle.element.focus();
  }

 onCreate(): void {
    document.querySelector().style.display='inline';
  }
  }



