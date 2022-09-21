


import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls:['index.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild('sliderForm') form: NgForm;
     onSubmit() {
       this.validated = true;
       console.log(this.form.valid)
  }

  ngOnInit() {
   public value =70;
 }
}



