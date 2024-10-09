import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-mp-stats',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './mp-stats.component.html',
    styleUrls: ['./mp-stats.component.scss']
})
export class MpStatsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }
    
}