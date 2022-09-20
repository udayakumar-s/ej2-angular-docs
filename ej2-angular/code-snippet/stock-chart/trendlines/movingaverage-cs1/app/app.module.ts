import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import {  ScatterSeriesService, LineSeriesService, DateTimeService, TrendlinesService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule, StockChartAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [  ScatterSeriesService, LineSeriesService, DateTimeService, TrendlinesService]
})
export class AppModule { }