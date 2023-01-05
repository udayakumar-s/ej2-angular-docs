---
layout: post
title: Sorting in Angular Grid component | Syncfusion
description: Learn here all about Sorting in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sorting 
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in Angular Grid component

The Grid component has support to sort data bound columns in **ascending** or **descending** order.
This can be achieved by setting [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowsorting) property as true.

To dynamically sort a particular column, click on its column header.
The order switch between **Ascending** and **Descending** each time you click a column header for sorting.

To use Sorting, you need to inject **SortService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/sorting1-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/sorting1-cs1" %}

> * Grid column sorted in **Ascending** order. If you click on an already sorted column, then toggles the sort direction.
> * You can apply and clear sorting by invoking [`sortColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/#sortcolumn) and [`clearSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#clearsorting) methods.
> * To disable Sorting for a particular column, by specifying [`columns.allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowsorting) to false.

## Initial Sort

By default, the Grid records are not sorted at initial rendering.
To apply sort at initial rendering, set the [`field`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel/#field) and [`direction`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel/#direction) in [`sortSettings.columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortSettings/#columns).
[`direction`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel/#direction) in [`sortSettings.columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortSettings/#columns).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/sorting1-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/sorting1-cs2" %}

## Multi-column sorting

You can sort more than one column in a Grid. To sort multiple columns, press and hold the **CTRL** key and click the column header. The sorting order will be displayed in the header while performing multi-column sorting.

To clear sorting for a particular column, press the "Shift + mouse left click".

> The [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowsorting) must be true while enabling multi-column sort.
> Set [`allowMultiSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowmultisorting) property as **false** to disable multi-column sorting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/sorting1-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/sorting1-cs3" %}

## Sort order

By default, the sorting order will be as **ascending -> descending -> none**.

When first click a column header it sorts the column in ascending. Again click the same column header, it will sort the column in descending. A repetitive third click on the same column header will clear the sorting.

## Sort foreign key column based on Text

For local data in Grid, sorting will be performed based on the [`foreignKeyValue`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyvalue).

For remote data in Grid, sorting will be performed based on the [`foreignKeyField`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#foreignkeyfield), we need to handle the sorting operation at the server side.

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { ForeignKeyService } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120 foreignKeyValue='FirstName'
                         [dataSource]='employeeData'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
                    </e-columns>
                </ejs-grid>`,
    providers: [ForeignKeyService]
})
export class AppComponent implements OnInit {

    public data: DataManager;
    public employeeData: DataManager;

    ngOnInit(): void {
        this.data = new DataManager({
            url: '/OData/Items',
            adaptor: new ODataV4Adaptor()
        });
        this.employeeData = new DataManager({
            url: '/OData/Brands',
            adaptor: new ODataV4Adaptor()
        });
    }
}

```

The following code example describes the handling of sorting operation at the server side.

```cs
    public class ItemsController : ODataController
    {
        [EnableQuery]
        public IQueryable<Item> Get()
        {
            List<Item> GridData = JsonConvert.DeserializeObject<Item[]>(Properties.Resources.ItemsJson).AsQueryable().ToList();
            List<Brand> empData = JsonConvert.DeserializeObject<Brand[]>(Properties.Resources.BrandsJson).AsQueryable().ToList();
            var queryString = HttpContext.Current.Request.QueryString;
            var allUrlKeyValues = ControllerContext.Request.GetQueryNameValuePairs();
            string key = allUrlKeyValues.LastOrDefault(x => x.Key == "$orderby").Value;
            if (key != null)
            {
                if (key == "EmployeeID") {
                    GridData = SortFor(key); //Only for foreignKey Column ascending
                }
                else if(key == "EmployeeID desc") {
                    GridData = SortFor(key); //Only for foreignKey Column descending
                }
            }
            var count = GridData.Count();
            var data = GridData.AsQueryable();
            return data;
        }

        public List<Item> SortFor(String Sorted)
        {
            List<Item> GridData = JsonConvert.DeserializeObject<Item[]>(Properties.Resources.ItemsJson).AsQueryable().ToList();
            List<Brand> empData = JsonConvert.DeserializeObject<Brand[]>(Properties.Resources.BrandsJson).AsQueryable().ToList();
            if (Sorted == "EmployeeID") //check whether ascending or descending
                empData = empData.OrderBy(e => e.FirstName).ToList();
            else if(Sorted == "EmployeeID desc")
                empData = empData.OrderByDescending(e => e.FirstName).ToList();
            List<Item> or = new List<Item>();
            for (int i = 0; i < empData.Count(); i++) {
                //Select the Field matching records
                IEnumerable<Item> list = GridData.Where(pred => pred.EmployeeID == empData[i].EmployeeID).ToList();
                or.AddRange(list);
            }
            return or;
        }
    }
```

## Sorting Events

During the sort action, the Grid component triggers two events.
[`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event triggers before the sort action start and [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event triggers after the sort action complete. Using these events you can perform any actions.
triggers before the sort action start and
[`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event
triggers after the sort action complete. Using these events you can perform any actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/sorting1-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/sorting1-cs4" %}

> [`args.requestType`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs/#requesttype) is current action name.
For example in sorting, the [`args.requestType`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs/#requesttype) value is **sorting**.

## Sort Comparer

You can customize the default sort action for a column by defining [`column.sortComparer`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#sortcomparer) property.
The sort comparer function has the same functionality like [`Array.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) sort comparer.

In the following example, custom sort comparer function was defined in **Customer ID** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sorting1-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/sorting1-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sorting1-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/sorting1-cs5" %}

## Touch Interaction

When you tap Grid header on touchscreen devices, then the selected column header is sorted.
Also, it will show a popup ![Sorting](images/sorting.jpg)  for multi-column sorting.
To sort multiple columns, tap the popup![Multi Sorting](images/msorting.jpg) and then tap the desired Grid headers.

> The [`allowMultiSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowmultisorting) and [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowsorting) should be **true** then only the popup will be shown.

The following screenshot represents a Grid touch sorting in the device.

![Touch Interaction](images/touch-sorting.jpg)

## See Also

* [How to remove the Sorting indicator from the column headers in Angular Grid](https://www.syncfusion.com/forums/150597/how-to-remove-the-sorting-indicator-from-the-column-headers-in-angular-grid)