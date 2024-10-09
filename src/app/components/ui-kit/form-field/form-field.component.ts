import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FfWithLabelComponent } from './ff-with-label/ff-with-label.component';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-form-field',
    standalone: true,
    imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatIconModule, FfWithLabelComponent, MatButtonModule, NgIf],
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

    email = new FormControl('', [Validators.required, Validators.email]);

    getErrorMessage() {
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    colorControl = new FormControl('primary' as ThemePalette);

    hide = true;

}