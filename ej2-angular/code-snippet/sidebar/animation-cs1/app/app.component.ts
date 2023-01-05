


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
  @ViewChild('sidebar') sidebar: SidebarComponent;
  public showBackdrop: boolean = true;
  public closeOnDocumentClick: boolean = true;

  public onCreated(args: any) {
         this.sidebar.element.style.visibility = '';
    }
  // Close Button
  closeClick_btn(): void {
    this.sidebar.element.classList.remove("sidebar");
    this.sidebar.element.classList.remove("rotate");
    this.sidebar.element.classList.remove("w3-animate-zoom");
    this.sidebar.element.classList.remove("w3-animate-bottom");
    this.sidebar.element.classList.remove("rotate_3d");
    this.sidebar.element.classList.remove("reverse_slide_out");
    this.sidebar.hide();
  };
  // Zoom Effect
  zoom():void{
    this.sidebar.show();
    this.sidebar.element.classList.add("w3-animate-zoom");
  };
  // Open Door
  open_door():void{
    this.sidebar.show();
    let sidebar_element: Element =document.getElementsByClassName("e-sidebar-overlay")[0];
    sidebar_element.classList.add("move");
    document.getElementsByClassName("move")[0].style.transform ="rotateX(-20deg)";
  };
  // Bottom To Top
  bottom_top():void{
    this.sidebar.show();
    this.sidebar.element.classList.add("w3-animate-bottom");
  };
  // Rotate
  rotate():void{
    this.sidebar.show();
    this.sidebar.element.classList.add("rotate");
  };
  // Rotate 3D
  rotate_3d():void{
    this.sidebar.show();
    this.sidebar.element.classList.add("rotate_3d");
  };
  // Reverse Slide Out
  reverse():void{
    this.sidebar.show();
    this.sidebar.element.classList.add("reverse_slide_out");
  };
}




