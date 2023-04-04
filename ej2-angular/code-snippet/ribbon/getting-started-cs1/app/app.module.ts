import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RibbonModule, RibbonAllModule } from '@syncfusion/ej2-angular-ribbon';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, RibbonModule, RibbonAllModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }