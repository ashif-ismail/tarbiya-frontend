import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-email-sidebar',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, RouterLinkActive],
    templateUrl: './email-sidebar.component.html',
    styleUrls: ['./email-sidebar.component.scss']
})
export class EmailSidebarComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}