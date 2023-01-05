import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteModule} from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
@NgModule({
  imports: [ 
    BrowserModule, 
    AutoCompleteModule,
    HttpClientModule, HttpModule, JsonpModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
