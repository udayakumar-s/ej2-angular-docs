---
layout: post
title: Retrieve the bookmark content as text in Angular Document editor component | Syncfusion
description: Learn here all about Retrieve the bookmark content as text in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Retrieve the bookmark content as text 
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve the bookmark content as text in Angular Document editor component

You can get the bookmark or whole document content from the Angular Document Editor component as plain text and SFDT (rich text).

## Get the bookmark content as plain text

You can [`selectBookmark`](../../document-editor/bookmark#select-bookmark) API to navigate to the bookmark and use [`text`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the bookmark content as plain text from Angular Document Editor component.

The following example code illustrates how to get the bookmark content as plain text.

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
    // To insert text in cursor position
    this.container.documentEditor.editor.insertText('Document editor');
    // To select all the content in document
    this.container.documentEditor.selection.selectAll();
    // Insert bookmark to selected content
    this.container.documentEditor.editor.insertBookmark('Bookmark1');

    // Provide your bookmark name to navigate to specific bookmark
    this.container.documentEditor.selection.selectBookmark('Bookmark1');

    // To get the selected content as text
    let selectedContent = this.container.documentEditor.selection.text;
  }
}
```

To get the bookmark content as SFDT (rich text), please check this [`link`](../../document-editor/how-to/get-the-selected-content/#get-the-selected-content-as-sfdt-rich-text)

## Get the whole document content as text

You can use [`text`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the whole document content as plain text from Angular Document Editor component.

The following example code illustrates how to get the whole document content as plain text.

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
    // To insert text in cursor position
    this.container.documentEditor.editor.insertText('Document editor');
    // To select all the content in document
    this.container.documentEditor.selection.selectAll();

    // To get the content as text
    let selectedContent: string = this.container.documentEditor.selection.text;
  }
}
```

## Get the whole document content as SFDT(rich text)

You can use [`serialize`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#serialize) API to get the whole document content as SFDT string from Angular Document Editor component.

The following example code illustrates how to get the whole document content as SFDT.

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
    // To insert text in cursor position
    this.container.documentEditor.editor.insertText('Document editor');

    // To get the content as SFDT
    let selectedContent: string = this.container.documentEditor.serialize();
  }
}
```

## Get the header content as text

You can use [`goToHeader`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#gotoheader) API to navigate the selection to the header and then use [`text`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the content as plain text.

The following example code illustrates how to get the header content as plain text.

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
    // To navigate the selection to header
    this.container.documentEditor.selection.goToHeader();
    // To insert text in cursor position
    this.container.documentEditor.editor.insertText('Document editor');
    // To select all the content in document
    this.container.documentEditor.selection.selectAll();

    // To get the selected content as text
    let selectedContent: string = this.container.documentEditor.selection.text;
  }
}
```

Similarly, you can use [`goToFooter`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#gotofooter) API to navigate the selection to the footer and then use [`text`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the content as plain text.