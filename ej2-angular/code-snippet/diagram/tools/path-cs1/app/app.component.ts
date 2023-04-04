

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, PathModel, DiagramTools } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults" (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public node: NodeModel;
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        node.style.fill = "#6BA5D7";
        node.style.strokeColor = "White";
        return node;
    }
    public created(args: Object): void {
        //JSON to create a path
        this.node = {
            id: "Path",
            style: { fill: "#fbe172" },
            annotations: [{
                content: "Path"
            }],
            shape: {
                type:'Path',
                data: 'M13.560 67.524 L 21.941 41.731 L 0.000 25.790 L 27.120 25.790 L 35.501 0.000 L 43.882 25.790 L 71.000 25.790 L 49.061 41.731 L 57.441 67.524 L 35.501 51.583 z'
            } as PathModel
        };
        this.diagram.drawingObject = this.node;
        //To draw an object once, activate draw once
        this.diagram.tool = DiagramTools.DrawOnce;
        this.diagram.dataBind();
    }
}


