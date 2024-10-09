import { NgFor } from '@angular/common';
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

@Component({
    selector: 'app-project-create',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, ReactiveFormsModule, NgFor],
    templateUrl: './project-create.component.html',
    styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent {

    categories = new FormControl('');
    categoriesList: string[] = [
        'Design', 'UI/UX Design', 'Development', 'App', 'Develop', 'Angular'
    ];

    members = new FormControl('');
    membersList: string[] = [
        'Alvarado Turner', 'Evangelina Mcclain', 'Candice Munoz', 'Bernard Langley', 'Kristie Hall', 'Bolton Obrien'
    ];

}