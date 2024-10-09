import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

@Component({
    selector: 'app-radio',
    standalone: true,
    imports: [MatCardModule, MatRadioModule, FormsModule, ReactiveFormsModule, NgFor],
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss']
})
export class RadioComponent {

    favoriteSeason: string;
    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

}