# PDF Export Options

## Export current page

PDF export provides an option to export the current page into PDF. To export current page, define the [`exportType`](../../api/grid/pdfExportProperties/#exporttype) to **CurrentPage**.

{% tab template="grid/exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, PageService, PdfExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true' [toolbar]='toolbarOptions'
         height='220px' [allowPaging]='true' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [PageService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const pdfExportProperties: PdfExportProperties = {
                exportType: 'CurrentPage'
            };
            this.grid.pdfExport(pdfExportProperties);
        }
    }
}

```

{% endtab %}

## Export the selected records only

You can export the selected records data by passing it to [`exportProperties.dataSource`](../../api/grid/pdfExportProperties/#datasource) Property in the [`toolbarClick`](../../api/grid/#toolbarclick) event.

In the below exporting demo, We can get the selected records using [`getSelectedRecords`](../../api/grid/#getselectedrecords) method and pass the selected data to [`PdfExport`](../../api/grid/#pdfexport) or [`excelExport`](../../api/grid/#excelexport) property.

{% tab template="grid/exporting-filtered-data", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {
    GridComponent, ToolbarItems, ToolbarService, PdfExportService,
    PageService, FilterService, ExcelExportService, SelectionSettingsModel
} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions'
   [allowPaging]='true' [allowPdfExport]='true' [allowExcelExport]='true'
   (toolbarClick)='toolbarClick($event)' [selectionSettings]='selectionSettings'>
              <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                  <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
              </e-columns>
              </ejs-grid>`,
    providers: [ToolbarService, PdfExportService, PageService, FilterService, ExcelExportService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    public selectionSettings: SelectionSettingsModel;
    public initialPage: object;
    @ViewChild('grid') public grid: GridComponent;
    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport', 'ExcelExport'];
        this.selectionSettings = { type: 'Multiple', enableSimpleMultiRowSelection: true };
    }

    toolbarClick(args: ClickEventArgs) {
        if (args.item.id === 'Grid_pdfexport') {
            const selectedRecords = this.grid.getSelectedRecords();
            const exportProperties = {
                dataSource: selectedRecords
            };
            this.grid.pdfExport(exportProperties);
        } else if (args.item.id === 'Grid_excelexport') {
            const selectedRecords = this.grid.getSelectedRecords();
            const exportProperties = {
                dataSource: selectedRecords
            };
            this.grid.excelExport(exportProperties);
        }
    }
}

```

{% endtab %}

## Export filtered data only

You can export the filtered data by defining the resulted data in [`exportProperties.dataSource`](../../api/grid/excelExportProperties/#datasource) before export.

In the below Pdf exporting demo, We have gotten the filtered data by applying filter query to the grid data and then defines the resulted data in [`exportProperties.dataSource`](../../api/grid/excelExportProperties/#datasource) and pass it to [`pdfExport`](../../api/grid/#pdfexport) method.

{% tab template="grid/exporting-filtered-data", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ToolbarService, PdfExportService,
 PageService, FilterService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import {DataManager} from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions'
   [allowFiltering]='true' [allowPaging]='true' [pageSettings]='initialPage' [allowPdfExport]='true'
   (toolbarClick)='toolbarClick($event)'>
              <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                  <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
              </e-columns>
              </ejs-grid>`,
  providers: [ToolbarService, PdfExportService, PageService, FilterService]
})
export class AppComponent implements OnInit {

  public data: object[];
  public toolbarOptions: ToolbarItems[];
  public initialPage: object;
  @ViewChild('grid')
  public grid: GridComponent;
  ngOnInit(): void {
    this.data = data;
    this.toolbarOptions = ['PdfExport'];
    this.initialPage = { pageCount: 5, pageSize: 5 };
  }

  toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
      let pdfdata;
      const query = this.grid.renderModule.data.generateQuery(); // get grid corresponding query
      for (let i = 0; i < query.queries.length; i++) {
        if (query.queries[i].fn === 'onPage') {
          query.queries.splice(i, 1);       // remove page query to get all records
          break;
        }
      }
      const fdata = new DataManager({ json: data }).executeQuery(query).then((e: any) => {
        pdfdata = e.result as object[];  // get all filtered records
        const exportProperties = {
          dataSource: pdfdata,
        };
        this.grid.pdfExport(exportProperties);
      }).catch((e) => true);
    }
  }
}

```

{% endtab %}

## Export hidden columns

PDF export provides an option to export hidden columns of Grid by defining the [`includeHiddenColumn`](../../api/grid/pdfExportProperties/#includehiddencolumn) as **true**.

{% tab template="grid/exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, PdfExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true' [toolbar]='toolbarOptions' height='272px'
               [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' [visible]='false'  width=150></e-column>
                    <e-column field='ShipCountry' headerText='ShipCountry' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const pdfExportProperties: PdfExportProperties = {
                includeHiddenColumn: true
            };
            this.grid.pdfExport(pdfExportProperties);
        }
    }
}

```

{% endtab %}

## Show or hide columns

You can show a hidden column or hide a visible column while exporting the grid using [`toolbarClick`](../../api/grid/#toolbarclick) and [`pdfExportComplete`](../../api/grid/#pdfExportComplete) events.

In the [`toolbarClick`](../../api/grid/#toolbarclick) event, based on **args.item.id** as **Grid_pdfexport**. We can show or hide columns by setting [`column.visible`](../../api/grid/column/#visible) property to **true** or **false** respectively.

In the pdfExportComplete event, We have reversed the state back to the previous state.

In the below example, we have **CustomerID** as a hidden column in the grid. While exporting, we have changed **CustomerID** to visible column and **ShipCity** as hidden column.

{% tab template="grid/exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, Column } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true'
    [toolbar]='toolbarOptions' height='272px' [allowPdfExport]='true'
    (pdfExportComplete)='pdfExportComplete()' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [visible]='false' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipCountry' headerText='ShipCountry' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            (this.grid.columns[1] as Column).visible = true;
            (this.grid.columns[2] as Column ).visible = false;
            this.grid.pdfExport();
        }
    }

    pdfExportComplete(): void {
        (this.grid.columns[1] as Column).visible = false;
        (this.grid.columns[2] as Column).visible = true;
    }
}

```

{% endtab %}

## Change page orientation

Page orientation can be changed Landscape(Default Portrait) for the exported document using the [`pdfExportProperties`](../../api/grid/pdfExportProperties).

{% tab template="grid/exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, PdfExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true' [toolbar]='toolbarOptions'
               height='220px' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
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
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const pdfExportProperties: PdfExportProperties = {
                pageOrientation: 'Landscape',
            };
            this.grid.pdfExport(pdfExportProperties);
        }
    }
}


```

{% endtab %}

## Change page size

Page size can be customized for the exported document using the [`pdfExportProperties`](../../api/grid/pdfExportProperties).

Supported page sizes are:
* Letter
* Note
* Legal
* A0
* A1
* A2
* A3
* A5
* A6
* A7
* A8
* A9
* B0
* B1
* B2
* B3
* B4
* B5
* Archa
* Archb
* Archc
* Archd
* Arche
* Flsa
* HalfLetter
* Letter11x17
* Ledger

{% tab template="grid/exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, PdfExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true' [toolbar]='toolbarOptions'
              height='220px' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
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
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const pdfExportProperties: PdfExportProperties = {
                pageSize: 'Letter'
            };
            this.grid.pdfExport(pdfExportProperties);
        }
    }
}

```

{% endtab %}

## Define file name

You can assign the file name for the exported document by defining [fileName](../../api/grid/pdfExportProperties/#filename) property in [PdfExportProperties](../../api/grid/pdfExportProperties/).

{% tab template="grid/exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, PageService, PdfExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true' [toolbar]='toolbarOptions'
          height='220px' [allowPaging]='true' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [PageService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const pdfExportProperties: PdfExportProperties = {
                fileName: 'new.pdf'
            };
            this.grid.pdfExport(pdfExportProperties);
        }
    }
}

```

{% endtab %}

## Font customization

### Default fonts

By default, grid uses **Helvetica** font in the exported document. You can change the default font by using [`pdfExportProperties.theme`](../../api/grid/pdfExportProperties/#theme) property. The available default fonts are,

* Helvetica
* TimesRoman
* Courier
* Symbol
* ZapfDingbats

The code example for changing default font,

```typescript

    import { PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf-export';

    ...

    const pdfExportProperties: PdfExportProperties = {
        theme: {
            header: {font:  new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold),
            caption: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 9) },
            record: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10) }
        }
    };

```

### Add custom font

You can change the default font of Grid header, content and caption cells in the exported document by using [`pdfExportProperties.theme`](../../api/grid/pdfExportProperties/#theme) property.

In the following example, we have used Algeria font to export the grid.

{% tab template="grid/exporting", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts, app/datasource.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data, base64AlgeriaFont } from './datasource';
import { GridComponent, ToolbarItems, PdfExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px'
             [allowPaging]='true' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
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
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            const pdfExportProperties: PdfExportProperties = {
                theme: {
                    header: { font: new PdfTrueTypeFont(base64AlgeriaFont, 12) },
                    caption: { font: new PdfTrueTypeFont(base64AlgeriaFont, 10) },
                    record: { font: new PdfTrueTypeFont(base64AlgeriaFont, 9) }
                }
            };
            this.grid.pdfExport(pdfExportProperties);
        }
    }
}

```

{% endtab %}

> **PdfTrueTypeFont** accepts base 64 format of the Custom Font.