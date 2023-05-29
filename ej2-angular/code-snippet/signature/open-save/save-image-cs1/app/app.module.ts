import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,FormsModule,SplitButtonModule,ButtonModule
    ],
    declarations: [AppComponent, SignatureComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }