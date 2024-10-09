import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-simple-autocomplete',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatAutocompleteModule, FormsModule, AsyncPipe, NgFor],
    templateUrl: './simple-autocomplete.component.html',
    styleUrls: ['./simple-autocomplete.component.scss']
})
export class SimpleAutocompleteComponent {

    myControl = new FormControl('');
    options: string[] = ['One', 'Two', 'Three'];

}