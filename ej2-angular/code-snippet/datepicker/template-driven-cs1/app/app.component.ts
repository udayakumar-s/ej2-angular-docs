

import { Component,ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';

class User {
    constructor() {
        public date: Date
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app/template.html'
})
export class DefaultDatePickerComponent {

    user: User;
    ngOnInit() {
        this.user = new User(null);
    }

    onSubmit(userForm) {
        (userForm.valid) ? alert("submitted"): alert("form is invalid");
    }

}


