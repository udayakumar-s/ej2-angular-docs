


import { Component,ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { SliderComponent } from '@syncfusion/ej2-angular-inputs';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls:['index.css'],
    encapsulation: ViewEncapsulation.None

})
export class AppComponent {
    @ViewChild('formId') element:any;
    @ViewChild('default') sliderObj: SliderComponent;
    public formObject: FormValidator;
    public ticks: Object = {
        placement: 'Before',
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true
    };
    ngAfterViewInit() {
      let options: FormValidatorModel = {
        rules: {
          'slider': {
            validateHidden: true,
            min: [30, "You must select value greater than 30"]
          }
        }
      };

      this.formObject = new FormValidator(this.element.nativeElement, options);
    }

    public btnClick(): void {
      if (this.sliderObj.value < 5) {
        alert("Please select value greater than 30");
      } else {
        alert("Submitted");
        this.element.nativeElement.submit();
      }
    }
    public onChanged(): void {
      this.formObject.validate();
    }
}



