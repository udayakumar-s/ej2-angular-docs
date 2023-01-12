


import { Component, ViewChild } from '@angular/core';
import { AccordionComponent } from '@syncfusion/ej2-angular-navigations';
import { Accordion, ExpandEventArgs, TreeView } from '@syncfusion/ej2-navigations';
import { DocDB, DownloadDB, PicDB } from './datasource.ts';

@Component({
    selector: 'app-container',
    template: `
    <ejs-accordion #element (expanding)="expanded($event)">
        <e-accordionitems>
          <e-accordionitem expanded='true'>
            <ng-template #header>
              <div>Documents</div>
            </ng-template>
            <ng-template #content>
              <div id="treeDoc"></div>
            </ng-template>
          </e-accordionitem>
          <e-accordionitem>
            <ng-template #header>
              <div>Downloads</div>
            </ng-template>
            <ng-template #content>
              <div id="treeDownload"></div>
            </ng-template>
          </e-accordionitem>
          <e-accordionitem>
            <ng-template #header>
              <div>Pictures</div>
            </ng-template>
            <ng-template #content>
             <div id="treePic"></div>
            </ng-template>
          </e-accordionitem>
        </e-accordionitems>
    </ejs-accordion>
        `
})

export class AppComponent {
    @ViewChild('element') acrdnInstance: AccordionComponent;
    public expanded(e: ExpandEventArgs) {
  if (e.isExpanded && [].indexOf.call(this.acrdnInstance.items, e.item) === 0 && e.element.querySelector('#treeDoc').childElementCount === 0) {
    //Initialize TreeView component
        let treeObj: TreeView = new TreeView({
        fields: { dataSource: DocDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        sortOrder: 'Ascending'
    });
    //Render initialized TreeView component
    treeObj.appendTo('#treeDoc');
  }
    if (e.isExpanded && [].indexOf.call(this.acrdnInstance.items, e.item) === 1 && e.element.querySelector('#treeDownload').childElementCount === 0) {
        let treeObj: TreeView = new TreeView({
        fields: { dataSource: DownloadDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        sortOrder: 'Ascending'
    });
    treeObj.appendTo('#treeDownload');
  }
      if (e.isExpanded && [].indexOf.call(this.acrdnInstance.items, e.item) === 2 && e.element.querySelector('#treePic').childElementCount === 0) {
        let treeObj: TreeView = new TreeView({
        fields: { dataSource: PicDB, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'icon', imageUrl: 'image' },
        sortOrder: 'Ascending'
    });
    treeObj.appendTo('#treePic');
  }

    }
    ngAfterViewInit() {
    }
}



