# Custom Aggregate

Sometimes you can have a scenario to calculate aggregate value using your own aggregate function,
 we can achieve this behavior using the custom aggregate option.
To use custom aggregation, specify the
[`type`](../../api/grid/aggregateColumnDirective/#type) as **Custom** and provide the custom aggregate
function in the [`customAggregate`](../../api/grid/aggregateColumnDirective/#customaggregate) property.

The custom aggregate function will be invoked with different arguments for Total and Group aggregations.
* **Total aggregation** - the custom aggregate function will be called with whole data and the current [`AggregateColumn`](../../api/grid/aggregateColumnDirective)
object.
* **Group aggregation** - it will be called with current group details and the [`AggregateColumn`](../../api/grid/aggregateColumnDirective) object.

{% tab template="grid/aggregates-custom", sourceFiles="app/app.component.ts,app/app.template.html,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ReturnType } from '@syncfusion/ej2-grids';

@Component({
    selector: 'app-root',
    templateUrl: 'app/app.template.html'
})
export class AppComponent implements OnInit {

    public data: object[];
    public ShipCountry = 'ShipCountry';
    ngOnInit(): void {
        this.data = data;
    }
    public customAggregateFn = (sdata: ReturnType) =>
        sdata.result.filter((item: object) => item[this.ShipCountry] === 'Brazil').length
}


```

{% endtab %}

> To access the custom aggregate value inside template, use the key as **Custom**