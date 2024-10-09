import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ChipsAutocompleteComponent } from './chips-autocomplete/chips-autocomplete.component';
import { ChipsDadComponent } from './chips-dad/chips-dad.component';
import { ChipsWithFcComponent } from './chips-with-fc/chips-with-fc.component';
import { ChipsWithInputComponent } from './chips-with-input/chips-with-input.component';
import { StackedChipsComponent } from './stacked-chips/stacked-chips.component';

@Component({
    selector: 'app-chips',
    standalone: true,
    imports: [MatCardModule, MatChipsModule, ChipsAutocompleteComponent, ChipsDadComponent, ChipsWithFcComponent, ChipsWithInputComponent, StackedChipsComponent],
    templateUrl: './chips.component.html',
    styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {}