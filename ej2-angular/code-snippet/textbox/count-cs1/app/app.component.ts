


import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-container',
    styleUrls: ['index.css'],
    template: `<div class="multiline">
                <ejs-textbox #default [multiline]='true' maxlength='25' floatLabelType='Auto' placeholder='Enter your address' (input)='inputHandler($event)' ></ejs-textbox>
               <span id='numbercount'></span>
               </div>
              `
})
export class AppComponent {
     @ViewChild('default')
    public textareaObj: TextBoxComponent;

    public inputHandler(): void {
    let word, addresscountRem, addressCount;
    word = this.textareaObj.element.value;
    addressCount = word.length;
    addresscountRem = document.getElementById('numbercount');
    addresscountRem.textContent = addressCount+"/25";
    }
}



