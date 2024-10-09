import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-disabled-datepicker',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
    templateUrl: './disabled-datepicker.component.html',
    styleUrls: ['./disabled-datepicker.component.scss']
})
export class DisabledDatepickerComponent {}