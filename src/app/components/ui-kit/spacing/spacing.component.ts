import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-spacing',
    standalone: true,
    imports: [MatCardModule, MatTabsModule],
    templateUrl: './spacing.component.html',
    styleUrls: ['./spacing.component.scss']
})
export class SpacingComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}