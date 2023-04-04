


import { Component, ViewEncapsulation, Inject, ViewChild } from "@angular/core";
import {
  ExpandEventArgs,
  Accordion,
  AccordionClickArgs
} from "@syncfusion/ej2-navigations";
import { closest } from "@syncfusion/ej2-base";
import { AccordionComponent } from "@syncfusion/ej2-angular-navigations";
import { CheckBoxComponent } from "@syncfusion/ej2-angular-buttons";

@Component({
  selector: "app-container",
  templateUrl: "app/app.component.html"
})
export class AppComponent {
  @ViewChild("element") acrdnInstance: AccordionComponent;
  @ViewChild("checkbox1") chk1Instance: CheckBoxComponent;
  @ViewChild("checkbox2") chk2Instance: CheckBoxComponent;
  @ViewChild("checkbox3") chk3Instance: CheckBoxComponent;
  public clickEventArgs: Event;
  public expanding(e: ExpandEventArgs) {
    if (this.clickEventArgs) {
      let header = closest(
        this.clickEventArgs.target as Element,
        ".e-acrdn-header"
      );
      let checkboxEle = closest(
        this.clickEventArgs.target as Element,
        ".e-checkbox-wrapper"
      );
      if (header && !checkboxEle) {
        e.cancel = true;
        return;
      }
    }
    let index = this.acrdnInstance.items.indexOf(e.item);
    if (index == 0 && !this.chk1Instance.checked) {
      e.cancel = true;
      return;
    }
    if (index == 1 && !this.chk2Instance.checked) {
      e.cancel = true;
      return;
    }
    if (index == 2 && !this.chk3Instance.checked) {
      e.cancel = true;
      return;
    }
  }
  public onClick(e) {
    this.clickEventArgs = e.originalEvent;
  }
  public changeHandler1() {
    this.clickEventArgs = null;
    this.acrdnInstance.expandItem(true, 0);
  }
  public changeHandler2() {
    this.clickEventArgs = null;
    this.acrdnInstance.expandItem(true, 1);
  }
  public changeHandler3() {
    this.clickEventArgs = null;
    this.acrdnInstance.expandItem(true, 2);
  }
}


