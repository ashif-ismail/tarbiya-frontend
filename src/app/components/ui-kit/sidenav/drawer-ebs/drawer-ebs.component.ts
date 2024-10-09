import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-drawer-ebs',
    standalone: true,
    imports: [MatSidenavModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatSelectModule, MatButtonModule],
    templateUrl: './drawer-ebs.component.html',
    styleUrls: ['./drawer-ebs.component.scss']
})
export class DrawerEbsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}