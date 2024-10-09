import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { NgFor } from '@angular/common';
import { Component, computed, inject, model, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-chips-autocomplete',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatChipsModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatIconModule, NgFor],
    templateUrl: './chips-autocomplete.component.html',
    styleUrls: ['./chips-autocomplete.component.scss']
})
export class ChipsAutocompleteComponent {

    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    readonly currentFruit = model('');
    readonly fruits = signal(['Lemon']);
    readonly allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
    readonly filteredFruits = computed(() => {
        const currentFruit = this.currentFruit().toLowerCase();
        return currentFruit
        ? this.allFruits.filter(fruit => fruit.toLowerCase().includes(currentFruit))
        : this.allFruits.slice();
    });

    readonly announcer = inject(LiveAnnouncer);

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        // Add our fruit
        if (value) {
        this.fruits.update(fruits => [...fruits, value]);
        }

        // Clear the input value
        this.currentFruit.set('');
    }

    remove(fruit: string): void {
        this.fruits.update(fruits => {
        const index = fruits.indexOf(fruit);
        if (index < 0) {
            return fruits;
        }

        fruits.splice(index, 1);
        this.announcer.announce(`Removed ${fruit}`);
        return [...fruits];
        });
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.fruits.update(fruits => [...fruits, event.option.viewValue]);
        this.currentFruit.set('');
        event.option.deselect();
    }

}