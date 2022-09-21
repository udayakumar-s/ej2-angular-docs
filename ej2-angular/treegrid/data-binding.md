---
layout: post
title: Data binding in Angular Treegrid component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Treegrid component

The TreeGrid uses `DataManager`, which supports both RESTful JSON data services binding and local JavaScript object array binding. The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) property can be assigned either with the instance of `DataManager` or JavaScript object array collection.
It supports two kinds of data binding method:
* Local data
* Remote data

To learn about how to bind local or remote data to Tree Grid, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=N-TS5zv_3cg" %}

## Local Data

In Local Data binding, data source for rendering the TreeGrid control is retrieved from the same application locally.

Two types of Data binding are possible with the TreeGrid control.

* Hierarchical Datasource binding
* Self-Referential Data binding (Flat Data)

To bind local data to the treegrid, you can assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#datasource) property. The local data source can also be provided as an instance of the `DataManager`.

> By default, `DataManager` uses `JsonAdaptor` for local data-binding.

### Hierarchy data source binding

The [`childMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#childMapping) property is used to map the child records in hierarchy data source.

The following code example shows you how to bind the hierarchical local data into the TreeGrid control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/data-binding-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs1" %}

### Self-Referential Data binding (Flat Data)

TreeGrid is rendered from Self-Referential data structures by providing two fields, ID field and parent ID field.

* **ID Field**: This field contains unique values used to identify nodes. Its name is assigned to the [`idMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#idmapping) property.
* **Parent ID Field**: This field contains values that indicate parent nodes. Its name is assigned to the [`parentIdMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#parentidmapping) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/data-binding-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs2" %}

> Herewith we have provided list of reserved properties and the purpose used in TreeGrid. We recommend to avoid these reserved properties for Internal purpose(To get rid of conflicts).

Reserved keywords | Purpose
-----|-----
childRecords | Specifies the childRecords of a parentData
hasChildRecords | Specifies whether the record contains child records
hasFilteredChildRecords | Specifies whether the record contains filtered child records
expanded | Specifies whether the child records are expanded
parentItem | Specifies the parentItem of childRecords
index | Specifies the index of current record
level | Specifies the hierarchy level of record
filterLevel | Specifies the hierarchy level of filtered record
parentIdMapping | Specifies the parentID
uniqueID | Specifies the unique ID of a record
parentUniqueID | Specifies the parent Unique ID of a record
checkboxState | Specifies the checkbox state of a record
isSummaryRow | Specifies the summary of a record
taskData | Specifies the main data
primaryParent | Specifies the Primary data

## Remote data

To bind remote data to TreeGrid component, assign service data as an instance of `DataManager` to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) property. To interact with remote data source,  provide the endpoint `url` and define the [`hasChildMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#haschildmapping) property of treegrid.

The [`hasChildMapping`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#haschildmapping) property maps the field name in data source, that denotes whether current record holds any child records. This is useful internally to show expand icon while binding child data on demand.

The TreeGrid provides `Load on Demand` support for rendering remote data. The Load on demand is considered in TreeGrid for the following actions.

* Expanding root nodes.
* Navigating pages, with paging enabled in TreeGrid.

When load on demand is enabled, all the root nodes are rendered in collapsed state at initial load.

When load on demand support is enabled in TreeGrid with paging, the current or active page’s root node alone will be rendered in collapsed state. On expanding the root node, the child nodes will be loaded from the remote server.

When a root node is expanded, its child nodes are rendered and are cached locally, such that on consecutive expand/collapse actions on root node, the child nodes are loaded from the cache instead from the remote server.

Similarly, if the user navigates to a new page, the root nodes of that specific page, will be rendered with request to the remote server.

>Remote Data Binding supports only Self-Referential Data and by default the `pageSizeMode` for Remote Data is `Root` mode. i.e only root node’s count will be shown in pager while using Remote Data

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/data-binding-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs3" %}

> By default, `DataManager` uses `ODataAdaptor` for remote data-binding.
> Based on the RESTful web services, set the corresponding adaptor to DataManager. Refer [`here`](https://ej2.syncfusion.com/documentation/data/adaptors/?no-cache=1) for more details.
> Filtering and searching server-side data operations are not supported in load on demand

### LoadChildOnDemand

While binding remote data to Tree Grid component, by default Tree Grid renders parent rows in collapsed state. Tree Grid provides option to load the child records also during the initial rendering itself for remote data binding by setting [`loadChildOnDemand`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#loadchildondemand) as true.

When [`loadChildOnDemand`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#loadchildondemand) is enabled parent records are rendered in expanded state.

The following code example describes the behavior of the loadChildOnDemand feature of Tree Grid.

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='270' idMapping='TaskID' parentIdMapping='parentID' loadChildOnDemand='true' allowPaging='true'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
            <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
            <e-column field='EndDate' headerText='End Date' width='130' format="yMd" textAlign='Right'></e-column>
            <e-column field='Progress' headerText='Progress' width='100' textAlign='Right'></e-column>
        </e-columns>
    </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: DataManager;

    public dataManager: DataManager = new DataManager({
        url: "Home/DataSource",
        updateUrl: "Home/Update",
        insertUrl: "Home/Insert",
        removeUrl: "Home/Delete",
        batchUrl: "Home/Remove",
        adaptor: new UrlAdaptor
    });

    ngOnInit(): void {
        this.data = this.dataManager;
    }
}

```

> Also while using **loadChildOnDemand** we need to handle the child records on server end and it is applicable to CRUD operations also.

The following code example describes handling of child records at server end.

```typescript

public ActionResult UrlDatasource(DataManagerRequest dm)
{
    if (TreeData.tree.Count == 0)
          TreeData.GetTree();
    IEnumerable DataSource = TreeData.tree;

    DataOperations operation = new DataOperations();
    if (dm.Where != null && dm.Where.Count > 0)
    {
        DataSource = operation.PerformFiltering(DataSource, dm.Where, "and");   //perform filtering
    }
    if (dm.Sorted != null && dm.Sorted.Count > 0)
    {
        DataSource = operation.PerformSorting(DataSource, dm.Sorted);    //perform  sorting
    }
    var count = DataSource.ToList<TreeData>().Count();
    if (dm.Skip != 0)
    {
        DataSource = operation.PerformSkip(DataSource, dm.Skip);   //Paging
    }
    if (dm.Take != 0)
    {
        DataSource = operation.PerformTake(DataSource, dm.Take);
    }
    if (dm.Where != null)
    {
        DataSource = CollectChildRecords(DataSource, dm);   //method to collect child records
    }

    return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);
}

 public IEnumerable CollectChildRecords(IEnumerable datasource, DataManagerRequest dm)
 {
     DataOperations operation = new DataOperations();
     IEnumerable DataSource = TreeData.tree;    //use the total DataSource here
     string IdMapping = "TaskID";     //define your IdMapping field name here
     int[] TaskIds = new int[0];
     foreach (var rec in datasource)
     {
        int taskid = (int)rec.GetType().GetProperty(IdMapping).GetValue(rec);
        TaskIds = TaskIds.Concat(new int[] { taskid }).ToArray();     //get the Parentrecord Ids based on IdMapping Field
     }
    IEnumerable ChildRecords = null;
     foreach (int id in TaskIds)
     {
        dm.Where[0].value = id;
        IEnumerable records = operation.PerformFiltering(DataSource, dm.Where, dm.Where[0].Operator);    //perform filtering to collect the childrecords based on Ids
        ChildRecords = ChildRecords == null || (ChildRecords.AsQueryable().Count() == 0) ? records : ((IEnumerable<object>)ChildRecords).Concat((IEnumerable<object>)records);   //concate the childrecords with dataSource
     }
     if (ChildRecords != null)
     {
        ChildRecords = CollectChildRecords(ChildRecords, dm);    // repeat the operation for inner level child
        if (dm.Sorted != null && dm.Sorted.Count > 0) // perform Sorting
        {
            ChildRecords = operation.PerformSorting(ChildRecords, dm.Sorted);
        }
        datasource = ((IEnumerable<object>)datasource).Concat((IEnumerable<object>)ChildRecords);  //concate the childrecords with dataSource
     }
    return datasource;
 }

```

### Offline Mode

On remote data binding, all treegrid actions such as paging, loading child on-demand, will be processed on server-side. To avoid postback, set the treegrid to load all data on initialization and make the actions process in client-side. To enable this behavior, use the `offline` property of `DataManager`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/data-binding-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs4" %}

### Custom Adaptor

You can create your own adaptor by extending the built-in adaptors. The following demonstrates custom adaptor approach and how to add a serial number for the records by overriding the built-in response processing using the `processResponse` method of the `ODataAdaptor`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/data-binding-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs5" %}

### Sending additional parameters to the server

To add a custom parameter to the data request, use the `addParams` method of `Query` class. Assign the `Query` object with additional parameters to the treegrid [`query`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#query) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/data-binding-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs6" %}

### Handling HTTP error

During server interaction from the treegrid, some server-side exceptions may occur, and you can acquire those error messages or exception details
in client-side using the [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionfailure) event.

The argument passed to the [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionfailure) event contains the error details returned from the server.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/data-binding-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs7" %}

> The [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionfailure) event will be triggered not only for the server errors, but
also when there is an exception while processing the treegrid actions.

## Binding with ajax

You can use TreeGrid [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) property to bind the data source to TreeGrid from external ajax request. In the below code we have fetched the data source from the server with the help of ajax request and provided that to [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasource) property by using `onSuccess` event of the ajax.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/data-binding-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/data-binding-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/data-binding-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs8" %}

> * If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.
> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-ui-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.