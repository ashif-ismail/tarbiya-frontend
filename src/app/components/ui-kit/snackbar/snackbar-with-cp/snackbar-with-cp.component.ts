import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar-with-cp',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatSelectModule, MatButtonModule],
    templateUrl: './snackbar-with-cp.component.html',
    styleUrls: ['./snackbar-with-cp.component.scss']
})
export class SnackbarWithCpComponent {

    horizontalPosition: MatSnackBarHorizontalPosition = 'start';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    constructor(private _snackBar: MatSnackBar) {}

    openSnackBar() {
        this._snackBar.open('Cannonball!!', 'Splash', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }

}