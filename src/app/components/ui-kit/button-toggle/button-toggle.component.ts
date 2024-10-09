import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-button-toggle',
    standalone: true,
    imports: [MatCardModule, MatButtonToggleModule, MatIconModule, ReactiveFormsModule, FormsModule],
    templateUrl: './button-toggle.component.html',
    styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent {

    fontStyleControl = new FormControl('');
    fontStyle?: string;

}