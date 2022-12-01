


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div class="control-section">
    <div style="width: 200px">
        <ejs-skeleton style="margin-right: 30px" shape="Circle" width="48px"></ejs-skeleton>
        <ejs-skeleton shape="Square" width="48px"></ejs-skeleton>
        <br /><br />
        <ejs-skeleton height="15px"></ejs-skeleton>
        <br /><br />
        <ejs-skeleton shape="Rectangle" height='50px'></ejs-skeleton>
    </div>
</div>`
    })

export class AppComponent {}


