import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
    selector: 'app-datepicker-inline-calendar',
    standalone: true,
    imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
    templateUrl: './datepicker-inline-calendar.component.html',
    styleUrls: ['./datepicker-inline-calendar.component.scss']
})
export class DatepickerInlineCalendarComponent {}