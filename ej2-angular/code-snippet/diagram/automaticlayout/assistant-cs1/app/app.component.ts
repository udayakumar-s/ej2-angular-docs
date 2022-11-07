

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, SnapSettingsModel, LayoutModel, DataSourceModel } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults" [getConnectorDefaults]="getConnectorDefaults" [snapSettings]="snapSettings" [layout]="layout" [dataSourceSettings]="dataSourceSettings">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public snapSettings: SnapSettingsModel;
    public items: DataManager;
    public layout: LayoutModel;
    public dataSourceSettings: DataSourceModel;
    //Initializes data source
    public data: object[] = [{
            Id: 1,
            Role: "General Manager"
        },
        {
            Id: 2,
            Role: "Assistant Manager",
            Team: 1
        },
        {
            Id: 3,
            Role: "Human Resource Manager",
            Team: 1
        },
        {
            Id: 4,
            Role: "Design Manager",
            Team: 1
        },
        {
            Id: 5,
            Role: "Operation Manager",
            Team: 1
        },
        {
            Id: 6,
            Role: "Marketing Manager",
            Team: 1
        }
    ];
    //Sets the default properties for all the Nodes
    public getNodeDefaults(obj: NodeModel, diagram: Diagram): NodeModel {
        obj.width = 150;
        obj.height = 50;
        obj.borderColor = 'white';
        obj.style.fill = '#6BA5D7';
        obj.borderWidth = 1;
        obj.annotations = [{
            content: obj.data['Role'],
            style: {
                color: 'white'
            }
        }];
        return obj;
    }
    //Sets the default properties for all the connectors
    public getConnectorDefaults(connector: ConnectorModel, diagram: Diagram): ConnectorModel {
        connector.style = {
            strokeColor: '#6BA5D7',
            strokeWidth: 2
        };
        connector.targetDecorator.style.fill  =  '#6BA5D7';
        connector.targetDecorator.style.strokeColor  =  '#6BA5D7';
        connector.targetDecorator.shape = 'None';
        connector.type = 'Orthogonal';
        return connector;
    }
    ngOnInit(): void {
        this.snapSettings = {
            constraints: 0
        }
        this.items = new DataManager(this.data as JSON[], new Query().take(7));
        //Uses layout to auto-arrange nodes on the Diagram page
        this.layout = {
            //Sets layout type
            type: 'OrganizationalChart',
            // define the getLayoutInfo
            getLayoutInfo: (node: Node, options: TreeInfo) => {
                if (node.data['Role'] === 'General Manager') {
                    options.assistants.push(options.children[0]);
                    options.children.splice(0, 1);
                }
                if (!options.hasSubTree) {
                    options.type = 'Center';
                    options.orientation = 'Horizontal';
                }
            }
        }
        //Configures data source for Diagram
        this.dataSourceSettings = {
            id: 'Id',
            parentId: 'Team',
            dataSource: this.items
        }
    }
}


