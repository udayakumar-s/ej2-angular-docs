---
title: "Grouping"
component: "Grid"
description: "Learn how to group rows, apply initial groups, customize caption templates, and group by format in the Essential JS 2 DataGrid control."
---

# Grouping

The Grid has options to group records by dragging and dropping the column header to the group drop area. When grouping is applied,
grid records are organized into a hierarchical structure to facilitate easier expansion and collapse of records.

To enable Grouping in the grid, set the [`allowGrouping`](../../api/grid/#allowgrouping) to true.
Grouping options can be configured in [`groupSettings`](../../api/grid/groupSettings).

To use Grouping, you need to inject **GroupService** in the provider section of **AppModule**.

{% tab template="grid/grouping1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowGrouping]='true' height='267px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

> * You can group and ungroup columns by using the [`groupColumn`](../../api/grid/group/#groupcolumn) and
[`ungroupColumn`](../../api/grid/group/#ungroupcolumn) methods.
> * To disable grouping for a particular column, set the
[`columns.allowGrouping`](../../api/grid/column/#allowgrouping) to false.

## Initial group

To apply group at initial rendering, set the column field name in the `groupSettings.columns`.

{% tab template="grid/grouping1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupOptions' height='267px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public groupOptions: GroupSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { columns: ['CustomerID', 'ShipCity'] };
    }
}
```

{% endtab %}

## Hide drop area

To avoid ungrouping or further grouping of a column after initial column
grouping, define the [`groupSettings.showDropArea`](../../api/grid/groupSettings#showdroparea) as false.

{% tab template="grid/grouping1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupOptions' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public groupOptions: GroupSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showDropArea: false, columns: ['CustomerID', 'ShipCity'] };
    }
}
```

{% endtab %}

## Group with paging

On grouping columns with paging feature, the aggregated information and total items are displayed based on the current page.
The grid does not consider aggregated information and total items from other pages.
To get additional details (aggregated information and total items) from other pages,
set the [`groupSettings.disablePageWiseAggregates`](../../api/grid/groupSettings#disablePageWiseAggregates) to false.

> If remote data is bound to grid dataSource, two requests will be sent when performing grouping action;
one for getting the grouped data and another for getting aggregate details and total items count.

## Group by format

By default, columns will be grouped by the data or value present for the particular row. To group numeric
or datetime column based on the mentioned format, you have to enable the
[`enableGroupByFormat`](../../api/grid/column/#enablegroupbyformat) property of the corresponding
grid columns.

{% tab template="grid/grouping1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupOptions' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='OrderDate' headerText='Order Date' format='yMMM' [enableGroupByFormat]='true' width=150></e-column>
                    <e-column field='Freight' headerText='Freight' format='C2' [enableGroupByFormat]='true' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public groupOptions: GroupSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showDropArea: false, columns: ['OrderDate', 'Freight'] };
    }
}
```

{% endtab %}

## Grouping Events

During the group action, the grid component triggers two events. The
[`actionBegin`](../../api/grid/#actionbegin) event
triggers before the group action starts and the
[`actionComplete`](../../api/grid/#actioncomplete)
event triggers after the group action is completed. Using these events you can perform any action.

{% tab template="grid/grouping1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ActionEventArgs, GridComponent, GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupSettings'
     (actionComplete)='actionHandler($event)' (actionBegin)='actionHandler($event)' height='260px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public groupSettings: GroupSettingsModel;
    @ViewChild('grid') public grid: GridComponent;
    ngOnInit(): void {
        this.data = data;
    }

    actionHandler(args: ActionEventArgs) {
        alert(args.requestType + ' ' + args.type); // custom Action
    }
}


```

{% endtab %}

> [`args.requestType`](../../api/grid/sortEventArgs/#requesttype) is current action name.
For example in grouping, the [`args.requestType`](../../api/grid/sortEventArgs/#requesttype) value is 'grouping'.

## Collapse by external button

To collapse the selected grouped row from an external button by using the [`expandCollapse`](../../api/grid/group/#expandcollapserows) method.

{% tab template="grid/grouping1", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button ej-button id='collapse' cssClass='e-flat' (click)='collapse()'>Collapse</button>
            <ejs-grid #grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupSettings' height='240px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public groupSettings: GroupSettingsModel;
    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.groupSettings = { columns: ['CustomerID'] };
    }

    collapse() {
        if (this.grid.getSelectedRowIndexes().length) {
            let currentTr: Element = this.grid.getRows()[this.grid.getSelectedRowIndexes()[0]];
            while (currentTr.classList && currentTr.classList.length) {
                currentTr = currentTr.previousSibling as Element;
            }
            const collapseElement = currentTr.querySelector('.e-recordplusexpand');
            this.grid.groupModule.expandCollapseRows(collapseElement); // pass the collapse row element.
        }
    }
}

```

{% endtab %}

## See Also

* [Exporting grouped records](../excel-exporting/#exporting-grouped-records)
* [How to enable lazy load grouping in Grid](https://www.syncfusion.com/blogs/post/how-to-enable-lazy-load-grouping-in-syncfusion-angular-data-grid.aspx)
* [How can I do client side grouping by async pipe in Angular Grid](https://www.syncfusion.com/forums/148079/how-can-i-do-client-side-grouping-by-async-pipe-in-angular-grid)
* [How to perform initial grouping by using the async pipe in Angular Grid](https://www.syncfusion.com/forums/160032/how-to-perform-initial-grouping-by-using-the-async-pipe-in-angular-grid)