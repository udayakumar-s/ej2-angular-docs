import { NgModule,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService  } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import { SparklineAllModule } from '@syncfusion/ej2-angular-charts';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TreeGridModule,
        SparklineAllModule,
        ButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService,
                SortService,
                FilterService,
                SparklineAllModule ]
})
export class AppModule { }