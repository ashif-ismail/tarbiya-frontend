import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FmSidebarComponent } from '../fm-sidebar/fm-sidebar.component';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-fm-documents',
    standalone: true,
    imports: [FmSidebarComponent, RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './fm-documents.component.html',
    styleUrls: ['./fm-documents.component.scss']
})
export class FmDocumentsComponent {

    constructor(
        public dialog: MatDialog
    ) {}

    openCreateDocumentDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(CreateDocumentDialogBox, {
            width: '510px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'create-document-dialog-box',
    templateUrl: '../my-drive/create-document-dialog-box.html',
})
export class CreateDocumentDialogBox {

    constructor(
        public dialogRef: MatDialogRef<CreateDocumentDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}