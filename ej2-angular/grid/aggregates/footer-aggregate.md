# Footer Aggregate

Footer aggregate value is calculated from all the rows and it can be displayed in footer cells. Use
[`footerTemplate`](../../api/grid/aggregateColumnDirective/#footertemplate) to render the aggregate value in footer cells.

{% tab template="grid/aggregates-footer", sourceFiles="app/app.component.ts,app/app.template.html,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    templateUrl: 'app/app.template.html'
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

> * Use the template reference variable name as **#footerTemplate** to specify the footer template.
> * The aggregate values must be accessed inside the template using their corresponding
[`type`](../../api/grid/aggregateColumnDirective/#type) name.

## How to format aggregate value

You can format the aggregate value result by using the
[`format`](../../api/grid/aggregateColumn/#format) property.

{% tab template="grid/aggregates-footer", sourceFiles="app/app.component.ts,app/app.template.html,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    templateUrl: 'app/app.template.html'
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}