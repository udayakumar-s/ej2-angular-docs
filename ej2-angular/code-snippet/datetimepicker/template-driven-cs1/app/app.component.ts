

import { Component,ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateTimePickerComponent } from '@syncfusion/ej2-angular-calendars';

class User {
    constructor() {
        public datetime: Date
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app/template.html'
})
export class DefaultDateTimePickerComponent {
    constructor() {}
    user: User;
    ngOnInit() {
        this.user = new User(null);
    }

    onSubmit(userForm) {
        (userForm.valid) ? alert("submitted"): alert("form is invalid");
    }

}


