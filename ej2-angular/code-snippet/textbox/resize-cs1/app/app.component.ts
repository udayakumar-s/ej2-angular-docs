


import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-container',
    styleUrls: ['index.css'],
    template: `<div class="multiline">
                <ejs-textbox #default [multiline]='true' value= 'Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center' floatLabelType='Auto' placeholder='Enter your address' (created)="createHandler($event)" (input)='inputHandler($event)' ></ejs-textbox>
               </div>
              `
})
export class AppComponent {
    @ViewChild('default')
    public textareaObj: TextBoxComponent;
    public createHandler(): void {
        this.textareaObj.addAttributes({rows: 1});
        this.textareaObj.element.style.height = "auto";
        this.textareaObj.element.style.height = (this.textareaObj.element.scrollHeight)+"px";
    },
    public inputHandler(): void {
    this.textareaObj.element.style.height = "auto";
    this.textareaObj.element.style.height = (this.textareaObj.element.scrollHeight)+"px";
}
  }



