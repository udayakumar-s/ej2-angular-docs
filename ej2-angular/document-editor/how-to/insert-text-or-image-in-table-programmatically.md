---
layout: post
title: Insert text or image in table programmatically in Angular Document editor component | Syncfusion
description: Learn here all about Insert text or image in table programmatically in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Insert text or image in table programmatically 
documentation: ug
domainurl: ##DomainURL##
---

# Insert text or image in table programmatically in Angular Document editor component

Using Document editor API's, you can insert [`text`](../../document-editor/how-to/insert-text-in-current-position/#insert-text-in-current-cursor-position) or [`image`](../../document-editor/image/#images) in [`table`](../../document-editor/table/#create-a-table) programmatically based on your requirement.

Use [`selection`](../../document-editor/how-to/move-selection-to-specific-position/#selects-content-based-on-start-and-end-hierarchical-index) API's to navigate between rows and cells.

The following example illustrates how to create 2*2 table and then add text and image programmatically.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
@Component({
  selector: 'app-root',
  // specifies the template string for the DocumentEditorContainer component
  template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true (created)="onCreated()"> </ejs-documenteditorcontainer>`,
  providers: [ToolbarService],
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  onCreated() {
    // To insert the table in cursor position
    this.container.documentEditor.editor.insertTable(2, 2);
    // To insert the image at table first cell
    this.container.documentEditor.editor.insertImage(
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4    //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
    );
    // To move the cursor to next cell
    this.moveCursorToNextCell();
    // To insert the image at table second cell
    this.container.documentEditor.editor.insertImage(
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4    //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
    );
    // To move the cursor to next row
    this.moveCursorToNextRow();
    // To insert text in cursor position
    this.container.documentEditor.editor.insertText('Text');
    // To move the cursor to next cell
    this.moveCursorToNextCell();
    // To insert text in cursor position
    this.container.documentEditor.editor.insertText('Text');
  }
  moveCursorToNextCell() {
    // To get current selection start offset
    var startOffset = this.container.documentEditor.selection.startOffset;
    // Increasing cell index to consider next cell
    var cellIndex = parseInt(startOffset.substring(6, 7)) + 1;
    // Changing start offset
    startOffset =
      startOffset.substring(0, 6) +
      cellIndex.toString() +
      startOffset.substring(7, startOffset.length);
    // Navigating selection using select method
    this.container.documentEditor.selection.select(startOffset, startOffset);
  }

  moveCursorToNextRow() {
    // To get current selection start offset
    var startOffset = this.container.documentEditor.selection.startOffset;
    // Increasing row index to consider next row
    var rowIndex = parseInt(startOffset.substring(4, 5)) + 1;
    var cellIndex =
      parseInt(startOffset.substring(6, 7)) != 0
        ? parseInt(startOffset.substring(6, 7)) - 1
        : 0;
    // Changing start offset
    startOffset =
      startOffset.substring(0, 4) +
      rowIndex.toString() +
      startOffset.substring(5, 6) +
      cellIndex +
      startOffset.substring(7, startOffset.length);
    // Navigating selection using select method
    this.container.documentEditor.selection.select(startOffset, startOffset);
  }
}
```

The output will be like below.
![Insert text or image in table programmatically](../images/table-image.png)
