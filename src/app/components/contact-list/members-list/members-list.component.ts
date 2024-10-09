import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-members-list',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatCheckboxModule],
    templateUrl: './members-list.component.html',
    styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent {

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

    openCreateUserDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(CreateUserDialogBox, {
            width: '600px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'create-user-dialog',
    templateUrl: './create-user-dialog.html',
})
export class CreateUserDialogBox {

    constructor(
        public dialogRef: MatDialogRef<CreateUserDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}