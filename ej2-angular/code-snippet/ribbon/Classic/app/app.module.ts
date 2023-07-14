import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import Syncfusion Ribbon module from ribbon package.
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, RibbonModule], // Registering EJ2 Ribbon Module.
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }