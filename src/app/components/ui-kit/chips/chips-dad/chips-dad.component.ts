import { Component, signal } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

export interface Vegetable {
    name: string;
}

@Component({
    selector: 'app-chips-dad',
    standalone: true,
    imports: [MatChipsModule, FormsModule, ReactiveFormsModule, CdkDropList, CdkDrag, NgFor],
    templateUrl: './chips-dad.component.html',
    styleUrls: ['./chips-dad.component.scss']
})
export class ChipsDadComponent {

    readonly vegetables = signal<Vegetable[]>([
        {name: 'apple'},
        {name: 'banana'},
        {name: 'strawberry'},
        {name: 'orange'},
        {name: 'kiwi'},
        {name: 'cherry'},
    ]);

    drop(event: CdkDragDrop<Vegetable[]>) {
        this.vegetables.update(vegetables => {
            moveItemInArray(vegetables, event.previousIndex, event.currentIndex);
            return [...vegetables];
        });
    }

}