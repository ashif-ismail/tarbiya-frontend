import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { FmSidebarComponent } from '../fm-sidebar/fm-sidebar.component';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-fm-recent-files',
    standalone: true,
    imports: [FmSidebarComponent, RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './fm-recent-files.component.html',
    styleUrls: ['./fm-recent-files.component.scss']
})
export class FmRecentFilesComponent {

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

    openCreateFileDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(CreateFileDialogBox, {
            width: '510px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'create-file-dialog-box',
    templateUrl: './create-file-dialog-box.html',
})
export class CreateFileDialogBox {

    constructor(
        public dialogRef: MatDialogRef<CreateFileDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}