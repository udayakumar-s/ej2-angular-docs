


import { Component, OnInit, ViewChild } from '@angular/core';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { DataManager, Query, ODataAdaptor, ReturnOption } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'https://js.syncfusion.com/ejServices/Wcf/Northwind.svc/Employees';

/**
 * Load tab with DataSource
 */

@Component({
    selector: 'app-container',
    template: `<ejs-tab #tab></ejs-tab>`
})
export class AppComponent implements OnInit {
    @ViewChild('tab') tabObj: TabComponent;
    public itemsData: any = [];
    public mapping =  { header: 'FirstName', content: 'Notes' };

    public ngOnInit(): void {
        new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor})
        .executeQuery(new Query().range(1, 4)).then((e: ReturnOption) => {
            let result: any = e.result;

            for(let i: number = 0; i < result.length; i++) {
                this.itemsData.push({ header: {text: result[i][this.mapping.header]}, content: result[i][this.mapping.content] });
            }
            this.tabObj.items = this.itemsData;
            this.tabObj.dataBind();
        });
    }
}



