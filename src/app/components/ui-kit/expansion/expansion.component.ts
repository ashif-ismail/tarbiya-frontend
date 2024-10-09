import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AccordionTogglesComponent } from './accordion-toggles/accordion-toggles.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-expansion',
    standalone: true,
    imports: [MatCardModule, MatExpansionModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, AccordionTogglesComponent, MatButtonModule],
    templateUrl: './expansion.component.html',
    styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent {

    panelOpenState = false;

    step = 0;

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

}