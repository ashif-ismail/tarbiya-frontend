import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-slide-toggle',
    standalone: true,
    imports: [MatCardModule, MatSlideToggleModule, FormsModule, ReactiveFormsModule, MatButtonModule],
    templateUrl: './slide-toggle.component.html',
    styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent {

    isChecked = true;
    formGroup = this._formBuilder.group({
        enableWifi: '',
        acceptTerms: ['', Validators.requiredTrue],
    });

    constructor(private _formBuilder: FormBuilder) {}

    alertFormValues(formGroup: FormGroup) {
        alert(JSON.stringify(formGroup.value, null, 2));
    }

}