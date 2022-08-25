# Auto wrap

The auto wrap allows the cell content of the grid to wrap to the next line when it exceeds the boundary of the cell width. The Cell Content wrapping works based on the position of white space between words.
To enable auto wrap, set the [`allowTextWrap`](../../api/grid/#allowtextwrap) property to **true**.
You can configure the auto wrap mode by setting the [`textWrapSettings.wrapMode`](../../api/grid/textWrapSettings/#wrapmode) property.

There are three types of [`wrapMode`](../../api/grid/textWrapSettings/#wrapmode). They are

* **Both** - The **Both** value is set by default. The auto wrap will be enabled for both content and Header.
* **Header** - Auto wrap will be enabled only for the header.
* **Content** - Auto wrap will be enabled only for the content.

Note: When a column width is not specified, then auto wrap of columns will be adjusted with respect to the grid's width.

In the below example, the [`textWrapSettings.wrapMode`](../../api/grid/textWrapSettings/#wrapmode) is set as **Content**.

{% tab template="grid/autowrap", sourceFiles="app/**/*.ts"%}

```typescript
import { Component, OnInit } from '@angular/core';
import { inventoryData } from './datasource';
import { TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' allowPaging='true' allowTextWrap='true' [textWrapSettings]='wrapSettings' height='400'>
        <e-columns>
            <e-column field='Inventor' headerText='Inventor Name' width='180' textAlign="Right"></e-column>
            <e-column field='NumberofPatentFamilies' headerText="Number of Patent Families" width='180' textAlign="Right"></e-column>
            <e-column field='Country' headerText='Country' width='140'></e-column>
            <e-column field='Active' width='120'></e-column>
            <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' width='200'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public wrapSettings: TextWrapSettingsModel;
    ngOnInit(): void {
        this.data = inventoryData;
        this.wrapSettings = { wrapMode: 'Content' };
    }
}

```

{% endtab %}