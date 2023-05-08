

import { Component, OnInit } from '@angular/core';
import { inventoryData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' allowPaging='true'>
        <e-columns>
            <e-column field='Inventor' headerText='Name of the Inventor' clipMode='Clip' width='80'></e-column>
            <e-column field='NumberofPatentFamilies' headerText='Number of Patent Families' clipMode='Ellipsis' width='100'></e-column>
            <e-column field='Country' headerText='Country' width='80'></e-column>
            <e-column field='Number of INPADOC patents' headerText='Number of INPADOC patents' width='100'></e-column>
            <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' clipMode='EllipsisWithTooltip' width='100'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    ngOnInit(): void {
        this.data = inventoryData;
    }
}



