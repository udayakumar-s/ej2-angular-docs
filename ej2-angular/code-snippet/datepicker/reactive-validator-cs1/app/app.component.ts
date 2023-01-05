

import { Component, ViewChild, OnInit, ElementRef, Inject } from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '@syncfusion/ej2-ng-buttons';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: './app/template.html'
})
export class AppComponent implements OnInit {
    @ViewChild('ejDatePicker') ejDatePicker: DatePickerComponent;
    public targetElement: HTMLElement;
    public placeholder: String = 'Date of Birth';
    skillForm: FormGroup;
    build: FormBuilder;
    constructor(@Inject(FormBuilder) private builder: FormBuilder) {
        this.build = builder;
        this.createForm();
    }
    createForm() {
        this.skillForm = this.build.group({
            datepicker: ['', Validators.required],
            username: ['', Validators.required],
            usermail: ['', Validators.email],
        });
    }
    get username() {
        return this.skillForm.get('username');
    }
    get datepicker() {
        return this.skillForm.get('datepicker');
    }
    get usermail() {
        return this.skillForm.get('usermail');
    }

    onSubmit() {
        alert("Form Submitted!");
    }
}


