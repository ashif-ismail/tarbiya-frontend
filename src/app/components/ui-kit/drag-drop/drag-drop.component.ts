import { Component } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectedSortingDdComponent } from './connected-sorting-dd/connected-sorting-dd.component';

@Component({
    selector: 'app-drag-drop',
    standalone: true,
    imports: [MatCardModule, NgFor, FormsModule, ReactiveFormsModule, ConnectedSortingDdComponent, CdkDropList, CdkDrag],
    templateUrl: './drag-drop.component.html',
    styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    movies = [
        'Episode I - The Phantom Menace',
        'Episode II - Attack of the Clones',
        'Episode III - Revenge of the Sith',
        'Episode IV - A New Hope',
        'Episode V - The Empire Strikes Back',
        'Episode VI - Return of the Jedi',
        'Episode VII - The Force Awakens',
        'Episode VIII - The Last Jedi',
        'Episode IX – The Rise of Skywalker',
    ];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }

}