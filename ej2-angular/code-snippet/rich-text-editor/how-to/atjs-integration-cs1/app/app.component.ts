


import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
        selector: 'app-root',
        template: `<ejs-richtexteditor id='defaultRTE' #sample [placeholder]='placeholder' (created)='oncreate($event)'></ejs-richtexteditor>`,
        providers: [ToolbarService, LinkService, ImageService, HtmlEditorService ]
})
export class AppComponent  {
  @ViewChild('sample') public rteObj: RichTextEditorComponent;
  // Build data to be used in At.JS config.
  public employeeList: { [key: string]: Object }[] = [
      { id: 'emp01', name: 'Jacob', email: 'jacob@mail.com' },
      { id: 'emp02', name: 'Isabella', email: 'isabella@mail.com' },
      { id: 'emp03', name: 'Ethan', email: 'ethan@mail.com' },
      { id: 'emp04', name: 'Emma', email: 'emma@mail.com' },
      { id: 'emp05', name: 'Michael', email: 'michael@mail.com' },
      { id: 'emp06', name: 'Olivia', email: 'olivia@mail.com' },
      { id: 'emp07', name: 'Jeniffer', email: 'jeniffer@mail.com' }
  ];

  public config: Object = {
      at: "@",
       callbacks: {
        beforeReposition: function (offset) {
            offset.left = this.rect().left - (leftBarWdith + leftPadding);
        }
      },
      data: this.employeeList,
      displayTpl: '<li>${name} <small>${email}</small></li>',
      limit: 200
  };
public placeholder: String = "Type @ to get the e-mail list";
public leftBarWdith : number = window.parent.document.getElementById('doc-left-toc').offsetWidth;
public leftPadding : number = +getComputedStyle(window.parent.document.getElementById('md-cnt')).paddingRight.match(/\d/g).join('');

public oncreate(e: any): void {
    const textArea: HTMLElement = this.rteObj.contentModule.getEditPanel() as HTMLElement;
    $(textArea).atwho(this.config);
    $(textArea).on('keydown', function(e: any) {
    if (e.keyCode === 13 && $(textArea).atwho('isSelecting')) {
        return false;
      }
    });
    }
}



