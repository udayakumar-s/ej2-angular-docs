

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, NodeModel, PointPortModel, PortVisibility, ShapeStyleModel,PortConstraints } from '@syncfusion/ej2-angular-diagrams';


@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [ports]='ports'></e-node>
        </e-nodes>
    </ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public ports: PointPortModel[] = [{
        // Sets the position for the port
        offset: {
            x: 0.5,
            y: 0
        },
        visibility: PortVisibility.Visible,
        tooltip:{
            content:'Port Tooltip',
        },
        constraints: PortConstraints.Default | PortConstraints.Tooltip
    }]
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }
}


