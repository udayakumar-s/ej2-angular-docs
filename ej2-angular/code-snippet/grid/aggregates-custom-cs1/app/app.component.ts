

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ReturnType, AggregateColumnModel } from '@syncfusion/ej2-grids';

@Component({
    selector: 'app-root',
    templateUrl: 'app/app.template.html'
})
export class AppComponent implements OnInit {

    public data: object[];
    ngOnInit(): void {
        this.data = data;
    }
    public customAggregateFn = (sdata: ReturnType, aggColumn: AggregateColumnModel) =>
        sdata.result.filter((item: object) => item[aggColumn.columnName] === 'Brazil').length
}




