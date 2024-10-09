import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-members-grid2',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './members-grid2.component.html',
    styleUrls: ['./members-grid2.component.scss']
})
export class MembersGrid2Component {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}