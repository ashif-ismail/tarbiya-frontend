import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-ar-browser-used-traffic-reports',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatProgressBarModule],
    templateUrl: './ar-browser-used-traffic-reports.component.html',
    styleUrls: ['./ar-browser-used-traffic-reports.component.scss']
})
export class ArBrowserUsedTrafficReportsComponent {

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