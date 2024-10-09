import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule, NgIf, MatButtonModule],
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {

    value = 'Clear me';

    emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}