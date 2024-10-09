import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-ecommerce-stats',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './ecommerce-stats.component.html',
    styleUrls: ['./ecommerce-stats.component.scss']
})
export class EcommerceStatsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}