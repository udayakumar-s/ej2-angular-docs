

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, HyperlinkModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
             <e-node id='node1' [height]=80 [width]=180 [offsetX]=300 [offsetY]=100 >
                       <e-node-annotations>
                            <e-node-annotation [hyperlink]="hyperlink">
                            </e-node-annotation>
                        </e-node-annotations>
                    </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public hyperlink: HyperlinkModel = {
      content: 'Syncfusion', link: 'https://hr.syncfusion.com/home',
      //Set the link to open in the current tab
      hyperlinkOpenState:'CurrentTab'
    }
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        node.style.fill = "#6BA5D7";
        node.style.strokeColor = "White";
        return node;
    }
}


