import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-terms-conditions',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatInputModule, RouterLinkActive],
    templateUrl: './terms-conditions.component.html',
    styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent {

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