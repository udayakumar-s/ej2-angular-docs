import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { data } from './datasource';
import * as $ from 'jquery';
@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [height]='315'>
                <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=120>
                    <ng-template #template let-data>
                      <div class="row clearfix">
                        <div class="col-md-2" style="text-align:left">
                          <div
                            data-toggle="tooltip"
                            data-container="body"
                            [title]="data.CustomerID"
                            data-placement="left"
                            data-delay='{"show":"800", "hide":"300"}'>
                            <i class="fas fa-pencil-alt"></i>{{ data.CustomerID }}
                          </div>
                        </div>
                      </div>
                    </ng-template></e-column>
                  <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                  <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
              </ejs-grid>`
})
export class AppComponent implements OnInit, AfterViewChecked {

    public data: object[];
    ngOnInit(): void {
        this.data = data;
    }
    ngAfterViewChecked(){
      $('[data-toggle="tooltip"]').tooltip();
    }
}




