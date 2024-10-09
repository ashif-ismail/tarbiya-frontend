import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-datepicker-custom-icon',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatIconModule],
    templateUrl: './datepicker-custom-icon.component.html',
    styleUrls: ['./datepicker-custom-icon.component.scss'],
    providers: [provideNativeDateAdapter()]
})
export class DatepickerCustomIconComponent {}