import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { FmSidebarComponent } from '../fm-sidebar/fm-sidebar.component';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-fm-templates',
    standalone: true,
    imports: [FmSidebarComponent, RouterLink, MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './fm-templates.component.html',
    styleUrls: ['./fm-templates.component.scss']
})
export class FmTemplatesComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}