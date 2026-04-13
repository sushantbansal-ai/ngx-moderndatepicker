import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxModerndatepickerComponent } from '../component/ngx-moderndatepicker.component';

@NgModule({
  declarations: [NgxModerndatepickerComponent],
  imports: [CommonModule, FormsModule],
  exports: [NgxModerndatepickerComponent]
})
export class NgxModerndatepickerModule { }
