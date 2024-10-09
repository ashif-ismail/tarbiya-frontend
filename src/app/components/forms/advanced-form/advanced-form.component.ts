import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

interface Food {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-advanced-form',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatSelectModule, NgIf, MatDatepickerModule, MatNativeDateModule, NgFor, ReactiveFormsModule, NgxMaterialTimepickerModule],
    templateUrl: './advanced-form.component.html',
    styleUrls: ['./advanced-form.component.scss']
})
export class AdvancedFormComponent {

    foods: Food[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
    ];

    toppings = new FormControl('');
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}