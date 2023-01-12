

import { Component,ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';

class User {
    constructor() {
        public time: Date
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app/template.html'
})
export class DefaultTimePickerComponent {

    user: User;
    ngOnInit() {
        this.user = new User(null);
    }
    onSubmit(userForm) {
        (userForm.valid) ? alert("submitted"): alert("form is invalid");
    }
}



