


import { Component, ViewEncapsulation, Inject } from '@angular/core';

@Component({
  selector: 'my-thing',
  templateUrl: 'app/app.component.html'
})
export class AccordionComponent {}

@Component({
  selector: 'control-content',
  templateUrl: 'app/reusable-content.html',
  styleUrls: ['app/app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyApp {}



