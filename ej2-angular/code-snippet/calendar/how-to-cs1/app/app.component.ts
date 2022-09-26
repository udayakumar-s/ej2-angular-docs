


import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
    selector: 'app-root',
    styleUrls: ['styles.css'],
    template: `
        <!-- Bind created event to add the clear button --->
        <ejs-calendar #ejCalendar (created)='onCreate()'></ejs-calendar>
        `
})
export class AppComponent {
    @ViewChild('ejCalendar') ejCalendar: CalendarComponent;
    onCreate() {
        let clearBtn: HTMLElement = document.createElement('button');
        let footerElement: HTMLElement = document.getElementsByClassName('e-footer-container')[0];
        //creates the custom element for clear button
        clearBtn.className = 'e-btn e-clear e-flat';
        clearBtn.textContent = 'Clear';
        footerElement.prepend(clearBtn);
        this.ejCalendar.element.appendChild(footerElement);
        let proxy = this;
        // custom click handler to update the value property with null values.
        document.querySelector('.e-footer-container .e-clear').addEventListener('click', function() {
            proxy.ejCalendar.value = null;
        })
    });
}


