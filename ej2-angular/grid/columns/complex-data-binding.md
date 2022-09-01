---
layout: post
title: Complex data binding in Angular Grid component | Syncfusion
description: Learn here all about Complex data binding in Syncfusion ##Platform_Name## Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Complex data binding 
publishingplatform: ##Platform_Name##
documentation: ug
---

# Complex data binding in Angular Grid component

You can achieve complex data binding in the grid by using the dot(.) operator in the [`column.field`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grid-cs18/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grid-cs18/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grid-cs18/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/samples/grid/grid-cs18" %}

 For OData and ODataV4 adaptors, you need to add [`expand`](https://ej2.syncfusion.com/documentation/api/data/query/#expand) query to the [`query`](https://ej2.syncfusion.com/angular/documentation/api/grid/#query) property (of Grid), to eager load the complex data.

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