import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StepperResponsiveComponent } from './stepper-responsive/stepper-responsive.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-stepper',
    standalone: true,
    imports: [MatCardModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, StepperResponsiveComponent, MatButtonModule],
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
    providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: {showError: true},
        },
    ]
})
export class StepperComponent {

    firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
    });

    constructor(private _formBuilder: FormBuilder) {}

}