

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, ConnectorModel, DiagramTools } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public drawingshape: BasicShapeModel;
    public connector: ConnectorModel;
    public created(args: Object): void {
        //JSON to create a rectangle
        this.connector = { id: 'connector1', type: 'Polyline' };
        this.diagram.drawingObject = this.connector;
        //To draw an object once, activate draw once
        this.diagram.tool = DiagramTools.DrawOnce;
        this.diagram.dataBind();
    }
}


