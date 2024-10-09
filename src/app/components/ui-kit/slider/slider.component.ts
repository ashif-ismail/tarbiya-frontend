import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';

@Component({
    selector: 'app-slider',
    standalone: true,
    imports: [MatCardModule, MatSliderModule],
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

    formatLabel(value: number): string {
        if (value >= 1000) {
        return Math.round(value / 1000) + 'k';
        }
        return `${value}`;
    }

}