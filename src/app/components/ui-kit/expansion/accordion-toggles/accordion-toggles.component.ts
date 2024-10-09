import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-accordion-toggles',
    standalone: true,
    imports: [MatExpansionModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule],
    templateUrl: './accordion-toggles.component.html',
    styleUrls: ['./accordion-toggles.component.scss']
})
export class AccordionTogglesComponent {

    @ViewChild(MatAccordion) accordion: MatAccordion;

}