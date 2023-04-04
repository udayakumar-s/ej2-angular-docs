import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ListViewModule
    ],
    declarations: [AppComponent,DialogComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }