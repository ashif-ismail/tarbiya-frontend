import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BasicDateRangeComponent } from './basic-date-range/basic-date-range.component';
import { DateRangePcrComponent } from './date-range-pcr/date-range-pcr.component';
import { DateRangePfiComponent } from './date-range-pfi/date-range-pfi.component';
import { DatepickerCustomIconComponent } from './datepicker-custom-icon/datepicker-custom-icon.component';
import { DatepickerInlineCalendarComponent } from './datepicker-inline-calendar/datepicker-inline-calendar.component';
import { DatepickerPcComponent } from './datepicker-pc/datepicker-pc.component';
import { DatepickerSvComponent } from './datepicker-sv/datepicker-sv.component';
import { DatepickerYmPickerComponent } from './datepicker-ym-picker/datepicker-ym-picker.component';
import { DisabledDatepickerComponent } from './disabled-datepicker/disabled-datepicker.component';
import { DpActionButtonComponent } from './dp-action-button/dp-action-button.component';
import { DpOpenMethodComponent } from './dp-open-method/dp-open-method.component';

@Component({
    selector: 'app-datepicker',
    standalone: true,
    imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, BasicDateRangeComponent, DateRangePcrComponent, DateRangePfiComponent, DatepickerCustomIconComponent, DatepickerInlineCalendarComponent, DatepickerPcComponent, DatepickerSvComponent, DatepickerYmPickerComponent, DisabledDatepickerComponent, DpActionButtonComponent, DpOpenMethodComponent],
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

    startDate = new Date(1990, 0, 1);

}