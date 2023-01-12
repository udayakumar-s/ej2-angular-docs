import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { ColorPickerComponent } from '@syncfusion/ej2-angular-inputs';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,FormsModule, DropDownListModule, SplitButtonModule, ToolbarModule, ButtonModule
    ],
    declarations: [AppComponent, SignatureComponent, ColorPickerComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }