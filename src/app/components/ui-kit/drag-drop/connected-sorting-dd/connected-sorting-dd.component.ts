import { Component } from '@angular/core';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-connected-sorting-dd',
    standalone: true,
    imports: [CdkDropList, NgFor, CdkDrag],
    templateUrl: './connected-sorting-dd.component.html',
    styleUrls: ['./connected-sorting-dd.component.scss']
})
export class ConnectedSortingDdComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

    done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }

}