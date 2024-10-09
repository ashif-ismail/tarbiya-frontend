import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-form-dialog',
    standalone: true,
    imports: [MatButtonModule],
    templateUrl: './form-dialog.component.html',
    styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent {

    constructor(
        public dialog: MatDialog
    ) {}


    openAddEventDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(AddEventDialogBox, {
            width: '600px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'add-event-dialog',
    templateUrl: './add-event-dialog.html',
})
export class AddEventDialogBox {

    constructor(
        public dialogRef: MatDialogRef<AddEventDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}