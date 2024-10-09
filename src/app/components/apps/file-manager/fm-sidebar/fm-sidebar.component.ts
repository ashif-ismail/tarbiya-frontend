import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-fm-sidebar',
    standalone: true,
    imports: [RouterLink, MatCardModule, RouterLinkActive, MatButtonModule, MatMenuModule, MatProgressBarModule],
    templateUrl: './fm-sidebar.component.html',
    styleUrls: ['./fm-sidebar.component.scss']
})
export class FmSidebarComponent {

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