---
layout: post
title: Virtualization in Angular Diagram component | Syncfusion
description: Learn here all about Virtualization in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Virtualization 
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in Angular Diagram component

## Virtualization in Diagram

Virtualization is the process of loading the diagramming objects available in the visible area of the Diagram control, that is, only the diagramming objects that lie within the ViewPort of the Scroll Viewer are loaded (remaining objects are loaded only when they come into view).

This feature gives an optimized performance while loading and dragging items to the Diagram that consists of many Nodes and Connectors.

The following code illustrates how to enable Virtualization mode in the diagram.

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramConstraints } from '@syncfusion/ej2-diagrams';
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [constraints]='diagramConstraints'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;

    public diagramConstraints: DiagramConstraints;
    ngOnInit(): void {
         //Enable virtualization in diagram
        this.diagramConstraints = DiagramConstraints.Default | DiagramConstraints.Virtualization;
    }
}
```