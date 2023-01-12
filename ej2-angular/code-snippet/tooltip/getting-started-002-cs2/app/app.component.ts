import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div id='container'>
        <ejs-tooltip target='.e-info' position='RightCenter'>
        <form id="details" role="form">
            <table>
                <tr>
                    <td class="info">User Name</td>
                    <td>
                        <input type="text" class="e-info" name="firstname" title="Please enter your name"> </td>
                </tr>
                <tr>
                    <td class="info">Email Address</td>
                    <td>
                        <input type="text" class="e-info" name="email" title="Enter a valid email address">
                    </td>
                </tr>
                <tr>
                    <td class="info">Password</td>
                    <td>
                        <input type="password" class="e-info" name="password" title="Be at least 8 characters length">
                    </td>
                </tr>
                <tr>
                    <td class="info">Confirm Password</td>
                    <td>
                        <input type="password" class="e-info" name="Cpwd" title="Re-enter your password">
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="sample" ejs-button class="center" type="submit" value="Submit">
                    </td>
                    <td>
                        <input id="clear" ejs-button type="reset" class="center" value="Reset" style="align-content:  center;">
                    </td>
                </tr>
            </table>
        </form>
        </ejs-tooltip>
    </div>
`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }


import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div id='container' >
        <ejs-tooltip style="display: inline-block; position: relative; left: 50%;top: 100px;transform: translateX(-50%); padding: 60px 40px 40px 0" id='tooltip' width= '180px' height= '40px' content= 'This tooltip has 180px width and 40px height' target="#target">
            <button ejs-button id="target">Show Tooltip</button>
        </ejs-tooltip>
    </div>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }


