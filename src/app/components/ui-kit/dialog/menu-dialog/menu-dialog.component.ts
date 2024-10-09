import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'app-menu-dialog',
    standalone: true,
    imports: [MatMenuModule, MatButtonModule],
    templateUrl: './menu-dialog.component.html',
    styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent {

    @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

    constructor(public dialog: MatDialog) {}

    openDialog() {
        const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, {restoreFocus: false});

        // Manually restore focus to the menu trigger since the element that
        // opens the dialog won't be in the DOM any more when the dialog closes.
        dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
    }

}

@Component({
    selector: 'dialog-from-menu-dialog',
    templateUrl: './dialog-from-menu-example-dialog.html',
})
export class DialogFromMenuExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogFromMenuExampleDialog>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}