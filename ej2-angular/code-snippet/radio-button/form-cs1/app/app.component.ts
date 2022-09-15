


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // Name and Value attribute in form submit.
    template: `<form>
                <ul>
                    <li><ejs-radiobutton name="payment" value="credit/debit" label="Credit / Debit card" checked="true"></ejs-radiobutton></li>

                    <li><ejs-radiobutton name="payment" value="netbanking" label="Net Banking"></ejs-radiobutton></li>

                    <li><ejs-radiobutton name="payment" value="cashondelivery" label="Cask On Delivery"></ejs-radiobutton></li>

                    <li><ejs-radiobutton name="payment" value="others" label="Others"></ejs-radiobutton></li>

                    <li><button ejs-button [isPrimary]="true">Submit</button></li>
                </ul>
               </form>`
})

export class AppComponent { }



