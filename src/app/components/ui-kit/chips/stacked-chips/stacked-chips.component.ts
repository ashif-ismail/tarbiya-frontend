import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';

export interface ChipColor {
    name: string;
    color: ThemePalette;
}

@Component({
    selector: 'app-stacked-chips',
    standalone: true,
    imports: [MatChipsModule],
    templateUrl: './stacked-chips.component.html',
    styleUrls: ['./stacked-chips.component.scss']
})
export class StackedChipsComponent {

    availableColors: ChipColor[] = [
        {name: 'none', color: undefined},
        {name: 'Primary', color: 'primary'},
        {name: 'Accent', color: 'accent'},
        {name: 'Warn', color: 'warn'},
    ];

}