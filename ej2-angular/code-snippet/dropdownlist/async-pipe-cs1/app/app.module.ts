import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropDownListModule, AutoCompleteModule} from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {DialogModule} from '@syncfusion/ej2-angular-popups';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule }   from '@angular/forms';
@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    DropDownListModule,
    AutoCompleteModule,
    DialogModule,
    HttpClientModule,
    ReactiveFormsModule, HttpModule, JsonpModule
    ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
