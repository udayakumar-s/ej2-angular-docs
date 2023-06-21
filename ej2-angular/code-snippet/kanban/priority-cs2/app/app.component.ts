

import { Kanban } from '@syncfusion/ej2-kanban';
import { kanbanData } from './datasource';
import { CardSettingsModel, ColumnsModel, SortSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { OnInit } from '@angular/core';

let kanbanObj: Kanban = new Kanban({
    dataSource: kanbanData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ] as ColumnsModel[],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id',
    } as CardSettingsModel,
    sortSettings: {
      sortBy: 'Index',
      field: 'RankId'
    } as SortSettingsModel
});
kanbanObj.appendTo('#Kanban');


