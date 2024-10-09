import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-chips-with-fc',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatChipsModule, FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule, NgFor],
    templateUrl: './chips-with-fc.component.html',
    styleUrls: ['./chips-with-fc.component.scss']
})
export class ChipsWithFcComponent {

    keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
    formControl = new FormControl(['angular']);

    removeKeyword(keyword: string) {
        const index = this.keywords.indexOf(keyword);
        if (index >= 0) {
            this.keywords.splice(index, 1);
        }
    }

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        // Add our keyword
        if (value) {
            this.keywords.push(value);
        }

        // Clear the input value
        event.chipInput!.clear();
    }

}