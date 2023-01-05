

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { FieldSettingsModel } from '@syncfusion/ej2-angular-navigations';

// Import an array of JSON data from datasource.ts
import { dataSource } from './datasource';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<ejs-menu [items]="data" [fields]='menuFields'></ejs-menu>`
})

export class AppComponent {
    private menuFields: FieldSettingsModel = {
        text: ['continent', 'country', 'language'],
        children: ['countries', 'languages']
    };

    private data: { [key: string]: Object }[] = dataSource;
}


