import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { EmailSidebarComponent } from '../email-sidebar/email-sidebar.component';

@Component({
    selector: 'app-read-email',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule, EmailSidebarComponent],
    templateUrl: './read-email.component.html',
    styleUrls: ['./read-email.component.scss']
})
export class ReadEmailComponent {

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