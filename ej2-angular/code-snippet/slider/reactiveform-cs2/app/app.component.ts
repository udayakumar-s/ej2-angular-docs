


import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls:['index.css']
})

export class AppComponent {
  value; slidervalue; validated = false;
  sliderForm: FormGroup;
  constructor(@Inject(FormBuilder) public fb: FormBuilder) {
    this.value = 30;
    this.sliderForm = this.fb.group({
      'slider': [0, Validators.min(10)]
    });
  }
  onSubmit() {
    if (this.sliderForm.valid) {
      this.validated = true;
      console.log('form submitted');
      console.log(this.sliderForm.value.slider);
    }

  }
}



