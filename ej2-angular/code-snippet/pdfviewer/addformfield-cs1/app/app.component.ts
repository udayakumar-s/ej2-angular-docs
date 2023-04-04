
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  PdfViewerComponent, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService, FormDesignerService, FormFieldsService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-container',
  // Specifies the template string for the PDF Viewer component.
  template: `<div class="content-wrapper">
  <ejs-pdfviewer id="pdfViewer" #pdfviewer [serviceUrl]='service'   (documentLoad)='documentLoaded($event)' style="height:640px;display:block"></ejs-pdfviewer>
  </div>`,
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService,
NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService, FormDesignerService, FormFieldsService]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfviewer')
  public pdfviewerControl: PdfViewerComponent;
  public service: string = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
  public document: string = 'formfield.pdf';

  documentLoaded(e: LoadEventArgs): void {
    let customOptions : ItemModel[] = [{itemName:'item1',itemValue:'item1'}, {itemName:'item2',itemValue:'item2'}, {itemName:'item3',itemValue:'item3'}]
    this.pdfviewerControl.formDesignerModule.addFormField("Textbox", {name: 'First Name', bounds: { X: 280, Y: 180, Width: 200, Height: 24 },isReadOnly: false,visibility: 'visible',isRequired: false,isPrint: true,tooltip: 'Textbox',thickness: 2,fontFamily: 'Courier',fontSize: 10,fontStyle: 'None',color: 'black',borderColor: 'black',alignment: 'Left',maxLength: 0,isMultiline: false,});
    this.pdfviewerControl.formDesignerModule.addFormField("Password", {name: 'Password', bounds: { X: 280, Y: 280, Width: 200, Height: 24 },isReadOnly: false,visibility: 'visible',isRequired: false,isPrint: true,tooltip: 'Password',thickness: 2,fontFamily: 'Courier',fontSize: 10,fontStyle: 'None',color: 'black',borderColor: 'black',alignment: 'Left',maxLength: 0,});
    this.pdfviewerControl.formDesignerModule.addFormField('CheckBox', {name: 'CheckBox1',bounds: { X: 280, Y: 380, Width: 20, Height: 20 },isChecked: false,thickness: 2,});
    this.pdfviewerControl.formDesignerModule.addFormField('CheckBox', {name: 'CheckBox2',bounds: { X: 450, Y: 380, Width: 20, Height: 20 },isChecked: false,thickness: 2,});
    this.pdfviewerControl.formDesignerModule.addFormField('RadioButton', {bounds: { X: 280, Y: 480, Width: 18, Height: 18 },name: 'RadioButton',isSelected: false,thickness: 2,});
    this.pdfviewerControl.formDesignerModule.addFormField('RadioButton', {bounds: { X: 450, Y: 480, Width: 18, Height: 18 },name: 'RadioButton',isSelected: false,thickness: 2,});
    this.pdfviewerControl.formDesignerModule.addFormField('ListBox', {bounds: { X: 280, Y: 560, Width: 210, Height: 67 },name: 'ListBox',thickness: 2,options: customOptions,});
    this.pdfviewerControl.formDesignerModule.addFormField('DropDown', {bounds: { X: 280, Y: 680, Width: 210, Height: 24 },name: 'DropDown',thickness: 2,options: customOptions,});
    this.pdfviewerControl.formDesignerModule.addFormField('SignatureField', {name: 'Sign',bounds: { X: 280, Y: 770, Width: 205, Height: 65 },thickness: 2,});
    this.pdfviewerControl.formDesignerModule.addFormField('InitialField', {name: 'Initial',bounds:  { X: 280, Y: 880, Width: 205, Height:65 },thickness: 2},);
  }
  ngOnInit(): void {

  }
}

