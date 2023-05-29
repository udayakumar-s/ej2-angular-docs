import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from '@syncfusion/ej2-angular-inputs';
import { SplitButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,FormsModule
    ],
    declarations: [AppComponent, ColorPickerComponent, SplitButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }