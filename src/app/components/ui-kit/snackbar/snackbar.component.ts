import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarWithCcComponent } from './snackbar-with-cc/snackbar-with-cc.component';
import { SnackbarWithCpComponent } from './snackbar-with-cp/snackbar-with-cp.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-snackbar',
    standalone: true,
    imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, SnackbarWithCcComponent, SnackbarWithCpComponent],
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

    constructor(private _snackBar: MatSnackBar) {}

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action);
    }

}