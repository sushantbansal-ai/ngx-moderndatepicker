import { Component } from '@angular/core';
import {ModernDatePickerOptions} from '../ngx-moderndatepicker/component/ngx-moderndatepicker.component';
import * as enLocale from 'date-fns/locale/en';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date!: Date;
  options: ModernDatePickerOptions = {
    locale: enLocale,
    minDate: new Date('11/11/2018'),
    maxDate: new Date('11/11/2030'),
    placeholder: 'Choose Date',
    weekendsDay: [0, 6],
    holidayList: [new Date('07/05/2026'), new Date('07/21/2026')]
  };
  constructor() {
  }
}
