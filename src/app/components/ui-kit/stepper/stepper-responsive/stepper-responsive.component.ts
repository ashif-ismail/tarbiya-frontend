import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatStepperModule, StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-stepper-responsive',
    standalone: true,
    imports: [NgIf, NgFor, MatStepperModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, AsyncPipe],
    templateUrl: './stepper-responsive.component.html',
    styleUrls: ['./stepper-responsive.component.scss']
})
export class StepperResponsiveComponent {

    firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
    });
    thirdFormGroup = this._formBuilder.group({
        thirdCtrl: ['', Validators.required],
    });
    stepperOrientation: Observable<StepperOrientation>;

    constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
        this.stepperOrientation = breakpointObserver
        .observe('(min-width: 800px)')
        .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
    }

}