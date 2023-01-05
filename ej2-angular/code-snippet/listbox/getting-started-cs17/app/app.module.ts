import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListBoxComponent } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,FormsModule, ReactiveFormsModule
    ],
    declarations: [AppComponent, ListBoxComponent, ButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }