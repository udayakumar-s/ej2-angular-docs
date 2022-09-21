import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from '@syncfusion/ej2-angular-inputs';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,FormsModule
    ],
    declarations: [AppComponent, ColorPickerComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }