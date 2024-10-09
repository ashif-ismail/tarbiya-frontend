import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-cards',
    standalone: true,
    imports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule],
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

    longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for.`;

}