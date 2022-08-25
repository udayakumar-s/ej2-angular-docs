# Complex Data Binding

You can achieve complex data binding in the grid by using the dot(.) operator in the [`column.field`](../../api/grid/column/#field).

{% tab template="grid/grid", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts"%}

```typescript
import { Component, OnInit } from '@angular/core';
import { complexData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                        <e-column field='Name.FirstName' headerText='First Name' width=120></e-column>
                        <e-column field='Name.LastName' headerText='Last Name' width=120></e-column>
                        <e-column field='Title' headerText='Title' width=150></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = complexData;
    }
}

```

{% endtab %}

 For OData and ODataV4 adaptors, you need to add [`expand`](https://ej2.syncfusion.com/documentation/api/data/query/#expand) query to the [`query`](../../api/grid/#query) property (of Grid), to eager load the complex data.

 ```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';
import { employeeData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' allowPaging='true' [query]='query' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
                        <e-column field='Employee.City' headerText='City' width=130  ></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    public employeeData: object[];
    public data: DataManager = new DataManager({
        adaptor: new ODataAdaptor(),
        crossDomain: true,
        url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders'
      });
      public query = new Query().expand('Employee');

    ngOnInit(): void {
        this.employeeData = employeeData;
    }
}

```