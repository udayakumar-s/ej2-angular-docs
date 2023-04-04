import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';
import { TooltipAllModule } from '@syncfusion/ej2-angular-popups';

import { FileManagerModule ,NavigationPaneService, ToolbarService, DetailsViewService } from '@syncfusion/ej2-angular-filemanager';

@NgModule({
    imports: [FileManagerModule , HttpModule, JsonpModule, BrowserModule, TooltipAllModule],
declarations: [AppComponent],
providers:[NavigationPaneService, ToolbarService, DetailsViewService],
bootstrap: [AppComponent]
})
export class AppModule { }