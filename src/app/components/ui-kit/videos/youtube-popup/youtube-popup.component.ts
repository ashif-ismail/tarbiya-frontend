import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-youtube-popup',
    standalone: true,
    imports: [MatButtonModule],
    templateUrl: './youtube-popup.component.html',
    styleUrls: ['./youtube-popup.component.scss']
})
export class YoutubePopupComponent {

    constructor(
        public dialog: MatDialog
    ) {}

    openCreateVideoDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(CreateVideoDialogBox, {
            width: '600px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'video-dialog',
    templateUrl: './video-dialog.html',
})
export class CreateVideoDialogBox {

    constructor(
        public dialogRef: MatDialogRef<CreateVideoDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}