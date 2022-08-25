---
title: "ToolBar"
component: "Grid"
description: "Learn how to use the toolbar and add custom toolbar items in the Essential JS 2 DataGrid control."
---

# Toolbar

The Grid provides ToolBar support to handle grid actions. The [`toolbar`](../../api/grid/#toolbar)
property accepts either the collection of built-in toolbar items and
[`ItemModel`](../../api/toolbar/itemModel) objects for custom toolbar items or
HTML element ID for toolbar template.

To use Toolbar, you need to inject **ToolbarService** in the provider section of **AppModule**.

## Enable or disable toolbar items

You can enable/disable toolbar items by using the **enableItems** method.

{% tab template="grid/toolbar-enable", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource';
import { GroupService, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button ej-button id='enable' cssClass='e-flat' (click)='enable()'>Enable</button>
                <button ej-button id='disable' cssClass='e-flat' (click)='disable()'>Disable</button>
                <ejs-grid id='Grid' #grid [dataSource]='data' height='200px' [allowGrouping]='true'
                [groupSettings]='groupOptions' [toolbar]='toolbar' (toolbarClick)='clickHandler($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [GroupService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbar: string[];
    public groupOptions: object;
    public toolbarObj;

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbar = ['Expand', 'Collapse'];
        this.groupOptions = { columns: ['CustomerID'] };
    }

    clickHandler(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_Collapse') { // Grid_Collapse is control id + '_' + toolbar value.
            this.grid.groupModule.collapseAll();
        }

        if (args.item.id === 'Grid_Expand') {
            this.grid.groupModule.expandAll();
        }
    }
    enable() {
        this.grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], true); // Enable toolbar items.
    }

    disable() {
        this.grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], false); // Disable toolbar items.
    }
}

```

{% endtab %}

## Add toolbar at the bottom of Grid

You can add the Grid toolbar component at the bottom of Grid using the ['created'](../../api/grid/#created) event.

{% tab template="grid/toolbar-enable", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid id='Grid' #grid [dataSource]='data' [toolbar]='toolbar' (created)="created($event)" height='200px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' type='number' isPrimaryKey='true' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' type='number' format='C2' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' type='date' format='yMd' width=140></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbar: string[];

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data.slice(0, 8);
        this.toolbar = ['Print', 'Search'];
    }

    created() {
    let toolbar: HTMLElement = this.grid.element.querySelector('.e-toolbar');
    this.grid.element.appendChild(toolbar);
    }
}

```

{% endtab %}

## See Also

* [Toolbar Component](../../toolbar/getting-started)
* [How to add a router link in the toolbar in Angular Grid](https://www.syncfusion.com/forums/154693/how-to-add-a-router-link-in-the-toolbar-in-angular-grid)
* [How to show or hide the delete button in the toolbar in Angular Grid](https://www.syncfusion.com/forums/158052/how-to-show-or-hide-the-delete-button-in-the-toolbar-in-angular-grid)
* [How to display column as radio button in dialog editing in Angular Grid](https://www.syncfusion.com/forums/153052/how-to-display-column-as-radio-button-in-dialog-editing-in-angular-grid)