# Group and Caption Aggregate

Group and caption aggregate values are calculated from the current group items.
If [`groupFooterTemplate`](../../api/grid/aggregateColumnDirective/#groupfootertemplate) is provided then the aggregate values can be displayed
 in the group footer cells and
if [`groupCaptionTemplate`](../../api/grid/aggregateColumnDirective/#groupcaptiontemplate)
 is provided then aggregate values can be displayed in the group caption cells.

{% tab template="grid/aggregates-group", sourceFiles="app/app.component.ts,app/app.template.html,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    templateUrl: 'app/app.template.html'
})
export class AppComponent implements OnInit {

    public data: Object[];
    public groupOptions: GroupSettingsModel = { showDropArea: false, columns: ['ShipCountry'] };

    ngOnInit(): void {
        this.data = data;
    }
}
```

{% endtab %}

> * Use the template reference variable name as **#groupFooterTemplate** to specify the group footer template
and as **#groupCaptionTemplate** to specify the group caption template.
> * The aggregate values must be accessed inside the template using their corresponding [`type`](../../api/grid/aggregateColumnDirective/#type)
name.