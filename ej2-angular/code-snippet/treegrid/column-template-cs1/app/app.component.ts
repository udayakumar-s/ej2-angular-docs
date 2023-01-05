

import { Component, OnInit,ViewChild,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { textdata, getSparkData } from './datasource';;
import { TreeGridComponent,ResizeService} from '@syncfusion/ej2-angular-treegrid';
import { EmitType } from '@syncfusion/ej2-base';
import { Sparkline, ISparklineLoadEventArgs, SparklineTheme } from '@syncfusion/ej2-charts';
import { RowDataBoundEventArgs, getObject } from '@syncfusion/ej2-grids';
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' width='auto' childMapping='Children' [treeColumnIndex]='1' >
        <e-columns>
            <e-column field='EmpID' headerText='Employee ID' width='85' ></e-column>
            <e-column field='Name' headerText='Name' width='95'></e-column>
            <e-column field='DOB' headerText='DOB' width='85' format="yMd" textAlign='Right'></e-column>
            <e-column  headerText='Tax per annum' width='90' textAlign='Center'>
                <ng-template #template let-data>
                    <ejs-sparkline id='treegridline{{data.EmployeeID}}' [dataSource]='getSparkLine(data.EmployeeID)' height='50px' width='150px' lineWidth='2' valueType='Numeric' fill='#3C78EF' (load)="sparkload($event)"></ejs-sparkline>
                </ng-template>
            </e-column>
        </e-columns>
    </ejs-treegrid>`,
    providers: [ResizeService ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
    public data: Object[] = [];
    public sparkData: Object[] = [];

    @ViewChild('treegrid')
    public treegrid: TreeGridComponent;

    ngOnInit(): void {
        this.data = textdata;
        this.sparkData = getSparkData('line' + getObject('EmployeeID',textdata[0]));
    }
    getSparkLine (val: number) {
        return getSparkData('line', val);
    }

     sparkload: EmitType<ISparklineLoadEventArgs> = (args: ISparklineLoadEventArgs) => {
        let theme: string = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.sparkline.theme = <SparklineTheme>(theme.charAt(0).toUpperCase() + theme.slice(1));
    }
}



