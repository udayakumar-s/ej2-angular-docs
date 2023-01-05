import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';

import { FileManagerModule, NavigationPaneService, ToolbarService, DetailsViewService  } from '@syncfusion/ej2-angular-filemanager';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
imports: [FileManagerModule , HttpModule, JsonpModule, BrowserModule, ButtonModule],
declarations: [AppComponent],
providers:[ NavigationPaneService, ToolbarService, DetailsViewService],
bootstrap: [AppComponent]
})
export class AppModule { }