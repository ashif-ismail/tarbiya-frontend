import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-browser-used-traffic-reports',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule, MatProgressBarModule],
    templateUrl: './browser-used-traffic-reports.component.html',
    styleUrls: ['./browser-used-traffic-reports.component.scss']
})
export class BrowserUsedTrafficReportsComponent {

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