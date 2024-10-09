import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-security',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, RouterLinkActive, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule],
    templateUrl: './security.component.html',
    styleUrls: ['./security.component.scss']
})
export class SecurityComponent {

    hide = true;

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