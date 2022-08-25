# Column Template

## Render image in a column

The column [`template`](../../api/grid/column/#template) has options to display custom element instead of a field value in the column.

{% tab template="grid/template", sourceFiles="app/app.component.ts,app/app.module.ts, app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                    <e-columns>
                        <e-column headerText='Employee Image' width='150' textAlign='Center'>
                            <ng-template #template let-data>
                                <div class="image">
                             <img src="https://ej2.syncfusion.com/angular/demos/src/grid/images/{{data.EmployeeID}}.png" alt="{{data.EmployeeID}}"/>
                                </div>
                            </ng-template>
                        </e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='City' headerText='City' width=150></e-column>
                    </e-columns>
                </ejs-grid>`,
    styleUrls: ['./app/app.style.css']
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
}


```

{% endtab %}

## Render other components in a column

You can render any component in a grid column using the [`template`](../../api/grid/column/#template) property.

Initialize the column template for your custom component. The [`template`](../../api/grid/column/#template) property
renders the custom component.

```html
    <div>
        <ejs-dropdownlist value='Order Placed' [dataSource]='dropData' [popupHeight]='150' [popupWidth]='150' ></ejs-dropdownlist>
    </div>

```

{% tab template="grid/column-sync-comp", sourceFiles="app/**/*.ts"%}

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='300'>
                    <e-columns>
                        <e-column headerText='Order Status'width='200'>
                            <ng-template #template let-data>
                                <div>
                                    <ejs-dropdownlist value='Order Placed' [dataSource]='dropData' [popupHeight]='150' [popupWidth]='150' >
                                    </ejs-dropdownlist>
                                </div>
                            </ng-template>
                        </e-column>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public dropData: string[];

    ngOnInit(): void {
        this.data = data;
        this.dropData = ['Order Placed', 'Processing', 'Delivered'];
    }
}

```

{% endtab %}

## Using condition template

You can render the template elements based on condition.

In the following code, checkbox is rendered based on **Discontinued** field value.

```html
  <e-column headerText='Discontinued' width='150' textAlign='Center'>
             <ng-template #template let-data>
                  <div *ngIf="data.Discontinued; else elseblock">
                      <input type="checkbox" checked>
                  </div>
              </ng-template>
              <ng-template #elseblock><input type="checkbox"></ng-template>
        </e-column>
```

{% tab template="grid/condition-template", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit } from '@angular/core';
import { categoryData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='315px'>
                    <e-columns>
                        <e-column headerText='Discontinued' width='150' textAlign='Center'>
                          <ng-template #template let-data>
                            <div *ngIf="data.Discontinued; else elseblock">
                                 <input type="checkbox" checked>
                            </div>
                          </ng-template>
                          <ng-template #elseblock><input type="checkbox"></ng-template>
                       </e-column>
                        <e-column field='ProductID' headerText='Product ID' width=150></e-column>
                        <e-column field='CategoryName' headerText='Category Name' width=150></e-column>
                        <e-column field='ProductName' headerText='Product Name' width=150></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = categoryData;
    }
}

```

{% endtab %}

## How to get the row object by clicking on the template element

You can get the row object without selecting the row and achieve it using the column template feature and the `getRowObjectFromUID` method of the Grid.

In the following sample, the button element is rendered in the Employee Data column. By clicking the button, you can get the row object using the `getRowObjectFromUID` method of the Grid and display it in the console.

{% tab template="grid/template", sourceFiles="app/app.component.ts,app/app.module.ts, app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { closest } from '@syncfusion/ej2-base';
import { RecordClickEventArgs, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='315px' (recordClick)="recordClick($event)">
                    <e-columns>
                        <e-column headerText='Employee Data' width='150' textAlign='Right' isPrimaryKey='true'>
                            <ng-template #template let-data>
                               <button class="empData">Employee Data</button>
                            </ng-template>
                        </e-column>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=130></e-column>
                        <e-column field='FirstName' headerText='Name' width=120></e-column>
                        <e-column field='Title' headerText='Title' width=170></e-column>
                    </e-columns>
                </ejs-grid>`,
    styleUrls: ['./app/app.style.css']
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = employeeData;
    }
    recordClick(args: RecordClickEventArgs) {
        if (args.target.classList.contains('empData')) {
            var rowObj = this.grid.getRowObjectFromUID(closest(args.target, '.e-row').getAttribute('data-uid')
            );
            console.log(rowObj);
        }
    }
}


```

{% endtab %}