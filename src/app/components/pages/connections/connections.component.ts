import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-connections',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, RouterLinkActive, MatDividerModule],
    templateUrl: './connections.component.html',
    styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent {

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