---
layout: post
title: Style appearance in Angular Datetimepicker component | Syncfusion
description: Learn here all about Style appearance in Syncfusion Angular Datetimepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Style appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in Angular Datetimepicker component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the appearance of DateTimePicker wrapper element

Use the following CSS to customize the appearance of wrapper element.

```css
/* To specify height and font size */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input {
        font-size: 20px;
        height: 40px;
    }
```

## Customizing the DateTimePicker icons element

Use the following CSS to customize the DateTimePicker icons element

```css
/* To specify background color and font size */
.e-datetime-wrapper .e-input-group-icon.e-date-icon, .e-datetime-wrapper .e-input-group-icon.e-time-icon {
        font-size: 16px;
        background-color: blanchedalmond;
    }
```

## Customizing the time picker popup in the DateTimePicker

Use the following CSS to customize the time picker popup in the DateTimePicker

```css
/* To specify height */
.e-datetimepicker.e-popup {
        height: 100px;
}
```

## Customizing the Calendar popup of the DateTimePicker

Please check the below section, to customize the style and appearance of the Calendar component in the DateTimePicker

[Customizing Calendar's style and appearance](../calendar/style-appearance/)

## Full Screen Mode: Enhancing the DateTimePicker Component (Mobile Support Only)

We have introduced the full screen mode functionality in our DateTimePicker component, enabling users to see the DateTimePicker calendar and time popup element in full-screen mode for better visibility and an upgraded user experience. It is important to mention that this feature is exclusively available for mobile devices in both landscape and portrait orientations. To activate the full screen mode within the DateTimePicker component, simply set the `fullScreenMode` API value to `true`. This action will extend the calendar and time popup element to occupy the entire screen on mobile devices.

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!-- To Render datetimepicker -->
             <ejs-datetimepicker [fullScreenMode]="true"></ejs-datetimepicker>`
})
export class AppComponent  { }
```

![DateTimePickerFullScreen](../images/DateTimePickerFullScreen.gif)