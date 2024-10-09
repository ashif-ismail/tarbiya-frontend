import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
    selector: 'app-date-range-pcr',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule, ReactiveFormsModule],
    templateUrl: './date-range-pcr.component.html',
    styleUrls: ['./date-range-pcr.component.scss']
})
export class DateRangePcrComponent {

    campaignOne = new FormGroup({
        start: new FormControl(new Date(year, month, 13)),
        end: new FormControl(new Date(year, month, 16)),
    });
    campaignTwo = new FormGroup({
        start: new FormControl(new Date(year, month, 15)),
        end: new FormControl(new Date(year, month, 19)),
    });

}