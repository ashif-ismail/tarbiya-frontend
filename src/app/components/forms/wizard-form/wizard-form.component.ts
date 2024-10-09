import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-wizard-form',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
    templateUrl: './wizard-form.component.html',
    styleUrls: ['./wizard-form.component.scss']
})
export class WizardFormComponent {}