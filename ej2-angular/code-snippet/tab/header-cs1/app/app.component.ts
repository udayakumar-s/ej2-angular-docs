


import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
/**
 * Adaptive Tab Component
 */

@Component({
    selector: 'app-container',
    // specifies the template url path
    templateUrl: './header.html'
    })
export class AppComponent {
    @ViewChild('headerStyles');
    @ViewChild('element') tabObj: TabComponent;
    @ViewChild('headerStyles') listObj: TabComponent;
    public headerData: Object[] = [
        { Id: 'header1', headerStyle: 'default', text: 'Default' },
        { Id: 'header2', headerStyle: 'fill', text: 'Fill'},
        { Id: 'header3', headerStyle: 'background',text: 'Background' },
        { Id: 'header4', headerStyle: 'accent', text: 'Accent' }
    ];
    public fields: Object = { text: 'text', value: 'headerStyle' };
    public height: string = '220px';
    public value: string = 'default';
    public onChange(ChangeEventArgs: any): void {
        this.removeStyleClass();
        if (this.listObj.value === 'fill') {
            this.tabObj.element.classList.add('e-fill');
        } else if (this.listObj.value === 'background') {
            this.tabObj.element.classList.add('e-background');
        } else if (this.listObj.value === 'accent') {
            this.tabObj.element.classList.add('e-background');
            this.tabObj.element.classList.add('e-accent');
        }
    }
    public removeStyleClass(args: any): void {
        this.tabObj.element.classList.remove('e-fill');
        this.tabObj.element.classList.remove('e-background');
        this.tabObj.element.classList.remove('e-accent');
    }
    @ViewChild('adaptiveTab');
    public headerText: Object = [{ 'text': 'Twitter' }, { 'text': 'Facebook' },{ 'text': 'WhatsApp' }];

}



