---
title: "Frozen"
component: "Grid"
description: "Learn how to freeze the grid columns at left or right side and how to freeze the grid rows at top."
---

# Frozen rows and columns

Frozen rows and columns provides an option to make rows and columns always visible in the top and left side of the grid while scrolling.

To use frozen rows and columns support, inject the **FreezeService** in the provider section of **AppModule**.

In this demo, the [`frozenColumns`](../api/grid/#frozencolumns) is set as **2** and the [`frozenRows`](../api/grid/#frozenrows)
is set as **3**. Hence, the left two columns and top three rows are frozen.

{% tab template="grid/frozenrows", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height=315 [frozenColumns]='2' [frozenRows]='3' [allowSelection]='false' [enableHover]='false'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width=130 format='yMd' textAlign='Right'></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                    <e-column field='ShipAddress' headerText='Ship Address' width=170></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
                    <e-column field='ShipRegion' headerText='Ship Region' width=150></e-column>
                    <e-column field='ShipPostalCode' headerText='Ship Postal Code' width=150></e-column>
                    <e-column field='Freight' headerText='Freight' width=120></e-column>
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

> * Frozen rows and columns should not be set outside the grid view port.
> * Frozen Grid will support row and column virtualization feature, which helps to improve the Grid performance while loading a large dataset.

## Limitations of Frozen Grid

The following features are not supported in frozen rows and columns:

* Grouping
* Row Template
* Detail Template
* Hierarchy Grid

## Freeze Direction

You can freeze the Grid columns on the left or right side by using the [`column.freeze`](../api/grid/column/#freeze) property and the remaining columns will be movable. The grid will automatically move the columns to the left or right position based on the [`column.freeze`](../api/grid/column/#freeze) value.

Types of the [`column.freeze`](../api/grid/column/#freeze) directions:

* **`Left`**: Allows you to freeze the columns at the left.
* **`Right`**: Allows you to freeze the columns at the right.

In this demo, the **ShipCountry** column is frozen at the left and the **CustomerID** column is frozen at the right side of the content table.

{% tab template="grid/frozenrows", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='315' [frozenRows]='2' [enableHover]='false'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width='150' freeze='Right'></e-column>
                        <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right'></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width='150'></e-column>
                        <e-column field='ShipAddress' headerText='Ship Address' width='170'></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' width='150' freeze='Left'></e-column>
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

> * Freeze Direction is not compatible with the [`isFrozen`](../api/grid/column/#isfrozen) and [`frozenColumns`](../api/grid/#frozencolumns) properties.

## Limitations of Freeze Direction

This feature has the below limitations, along with the above mentioned Frozen Grid limitations.

* Column virtualization
* Infinite scroll cache mode
* Freeze direction in the stacked header is not compatible with column reordering.

## Add validation rule for frozen Grid

In a frozen column enabled Grid, Grid content will be separated into frozen and movable parts. The following code can be used to dynamically add validation to input fields that are placed in the movable part. In the [actionComplete](../api/grid/#actioncomplete) event args, you can find the movableform instance as an argument. Here, you can add validation rules dynamically.

```typescript
  actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.movableForm.ej2_instances[0].addRules('Freight', { max: 200 }); // Here, 'Freight' is the column name.
        }
    }

```

Validation rules for the 'EmployeeID' and 'Freight' columns can be added in the sample below.

{% tab template="grid/frozenrows", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Grid, Freeze, Selection, Edit, Toolbar, DialogEditEventArgs, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='315' [toolbar]='toolbar' [editSettings]='editSettings' allowSelection='false' enableHover='false' (actionComplete)="actionComplete($event)">
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true'></e-column>
                        <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right' [validationRules]='validationrules'></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width='150'></e-column>
                        <e-column field='ShipAddress' headerText='Ship Address' width='170'></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' width='150' isFrozen='true'></e-column>
                        <e-column field='Freight' headerText='Freight' width='120' [validationRules]='validationrules' textAlign='Right'></e-column>
                    </e-columns>
            </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbar: string[];
    public editSettings: EditSettingsModel;
    public validationrules: Object;

    ngOnInit(): void {
        this.data = data;
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.validationrules = { required: true };
    }

    actionComplete(args) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            // Add Validation Rules
            args.movableForm.ej2_instances[0].addRules('Freight', { max: 200 });
            args.movableForm.ej2_instances[0].addRules('EmployeeID', { max: 20 });
        }
    }
}

```

{% endtab %}

> This is applicable when a frozen column is enabled and the edit mode is set as "**Normal**" in the Grid.