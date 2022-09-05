

import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';
import { NumericTextBox} from '@syncfusion/ej2-inputs';
import { DropDownList} from '@syncfusion/ej2-dropdowns';
import { CheckBox, RadioButton  } from '@syncfusion/ej2-buttons';

@Component({
    selector: 'app-container',
    template: `
        <ejs-toolbar (created)="onCreate($event)">
          <e-items>
             <e-item text='Cut'></e-item>
             <e-item text='Copy'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Undo'></e-item>
             <e-item text='Redo'></e-item>
             <e-item template=' <input id="numeric" type="text" />' type = 'Input'></e-item>
             <e-item template='<input type="text" tabindex="1" id="ddlelement" />' type = 'Input'></e-item>
             <e-item template='<input id="chkelement" type="checkbox"/>' type = 'Input'></e-item>
             <e-item template='<input id="rdelement" type="radio"/>' type = 'Input'></e-item>
          </e-items>
        </ejs-toolbar>
        `
})

export class AppComponent {
    @ViewChild('element') element;
    public data: string[] = ['Badminton', 'Basketball', 'Cricket', 'Golf', 'Hockey', 'Rugby'];
    public templateEle: any = new NumericTextBox({ format: 'c2', value: 1, width: 150 });
    public templateDropdown: any = new DropDownList({ dataSource: this.data, width: 120, index: 2 });
    public templateCheckbox: any = new CheckBox({ label: 'Checkbox', checked: true });
    public templateRadiobutton: any = new RadioButton({ label: 'Radio', name: 'default', checked: true });
    public onCreate (e: any) {
      this.templateCheckbox.appendTo('#chkelement');
      this.templateDropdown.appendTo('#ddlelement');
      this.templateEle.appendTo('#numeric');
      this.templateRadiobutton.appendTo('#rdelement');
    }
}


