import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-datepicker-sv',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule, ReactiveFormsModule],
    templateUrl: './datepicker-sv.component.html',
    styleUrls: ['./datepicker-sv.component.scss']
})
export class DatepickerSvComponent {

    date = new FormControl(new Date());
    serializedDate = new FormControl(new Date().toISOString());

}