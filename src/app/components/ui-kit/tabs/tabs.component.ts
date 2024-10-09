import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [MatCardModule, MatTabsModule, MatIconModule, NgFor],
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

    lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}