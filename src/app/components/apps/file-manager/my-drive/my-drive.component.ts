import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { FmSidebarComponent } from '../fm-sidebar/fm-sidebar.component';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-my-drive',
    standalone: true,
    imports: [FmSidebarComponent, RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatCheckboxModule],
    templateUrl: './my-drive.component.html',
    styleUrl: './my-drive.component.scss'
})
export class MyDriveComponent {

    constructor(
        public dialog: MatDialog,
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    openCreateFolderDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(CreateFolderDialogBox, {
            width: '510px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

    openCreateDocumentDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(CreateDocumentDialogBox, {
            width: '510px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'create-folder-dialog-box',
    templateUrl: './create-folder-dialog-box.html',
})
export class CreateFolderDialogBox {

    constructor(
        public dialogRef: MatDialogRef<CreateFolderDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}

@Component({
    selector: 'create-document-dialog-box:not(1)',
    templateUrl: './create-document-dialog-box.html',
})
export class CreateDocumentDialogBox {

    constructor(
        public dialogRef: MatDialogRef<CreateDocumentDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}