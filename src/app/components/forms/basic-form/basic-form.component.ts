import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-basic-form',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatIconModule],
    templateUrl: './basic-form.component.html',
    styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent {

    hide = true;

}