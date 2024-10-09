import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-mp-personal-info',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './mp-personal-info.component.html',
    styleUrls: ['./mp-personal-info.component.scss']
})
export class MpPersonalInfoComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }


}