

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' (created)='created($event)'>
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100>
            </e-node>
            <e-node id='node2' [offsetX]=240 [offsetY]=100>
            </e-node>
            <e-node id='node3' [offsetX]=240 [offsetY]=100>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public selArray: (NodeModel | ConnectorModel)[] = [];
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        node.style.fill = "#6BA5D7";
        node.style.strokeColor = "White";
        return node;
    }
    public created(args: Object): void {
        this.selArray = [];
        //this.diagram.appendTo('#element');
        this.selArray.push(this.diagram.nodes[2]);
        //Selects the nodes
        this.diagram.select(this.selArray);
        //Moves forward
        this.diagram.moveForward();
    }
}


