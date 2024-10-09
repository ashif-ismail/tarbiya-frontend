import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-hd-stats',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './hd-stats.component.html',
    styleUrls: ['./hd-stats.component.scss']
})
export class HdStatsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}