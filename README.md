# ngx-moderndatepicker

Angular 13+ simple and interactive calendar datepicker component

![ngx-moderndatepicker](https://github.com/bansalss001/ngx-moderndatepicker/blob/master/src/assets/Screenshot.png)

## Installation

1. Install package from `npm`.

```sh
npm install ngx-moderndatepicker --save
```

2. Include NgModernDatepickerModule into your application.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxModerndatepickerModule } from 'ngx-moderndatepicker';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgModernDatepickerModule
  ],
  declarations: [ AppComponent ],
  exports: [ AppComponent ]
})
export class AppModule {}
```

## Example
```html
  <ngx-moderndatepicker [(ngModel)]="date" />
```

## Additional attributes
|Name|Type|Default|Description|
| --- | --- | --- | --- |
|`headless`|boolean|`false`|Disable datepicker's input|
|`isOpened`|boolean|`false`|Show or hide datepicker|
|`position`|string|`bottom-right`|Dropdown position (`bottom-left`, `bottom-right`, `top-left`, `top-right`)|

## Options
```ts
import { ModernDatePickerOptions } from 'ngx-moderndatepicker';
import * as enLocale from 'date-fns/locale/en';

options: ModernDatePickerOptions = {
  minYear: 1970,
  maxYear: 2030,
  displayFormat: 'MMM D[,] YYYY',
  dayNamesFormat: 'dd',
  monthNamesFormat: 'MMM',
  firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
  locale: enLocale,
  minDate: new Date(Date.now()), // Minimal selectable date
  maxDate: new Date(Date.now()),  // Maximal selectable date
  placeholder: 'Select A Date', // HTML input placeholder attribute (default: '')
  addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
  addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
  fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
   weekendsDay: [0,6],
   /** Sunday is 0 , Highlights the weekends with gray background**/
  holidayList: [new Date('12/25/2000'), new Date('01/01/2001')]
  /** List of Holidays **/
};
```

## Licence

MIT
