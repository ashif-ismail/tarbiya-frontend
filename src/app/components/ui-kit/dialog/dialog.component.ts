import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BigFormDialogComponent } from './big-form-dialog/big-form-dialog.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-dialog',
    standalone: true,
    imports: [MatCardModule, BigFormDialogComponent, FormDialogComponent, MenuDialogComponent, MatButtonModule],
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

    constructor(public dialog: MatDialog) {}

    openDialog() {
        this.dialog.open(DialogElementsExampleDialog);
    }
    
}

@Component({
    selector: 'dialog-elements-example-dialog',
    templateUrl: './dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogElementsExampleDialog>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}