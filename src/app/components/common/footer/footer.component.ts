import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

}