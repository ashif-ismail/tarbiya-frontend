import { Component } from '@angular/core';
import { CustomizerSettingsService } from './customizer-settings.service';
import { NgClass } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-customizer-settings',
    standalone: true,
    imports: [NgClass, NgScrollbarModule, MatDividerModule, MatButtonModule, MatIconModule],
    templateUrl: './customizer-settings.component.html',
    styleUrls: ['./customizer-settings.component.scss']
})
export class CustomizerSettingsComponent {

    isToggled = false;
    
    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleSidebarTheme() {
        this.themeService.toggleSidebarTheme();
    }

    toggleRightSidebarTheme() {
        this.themeService.toggleRightSidebarTheme();
    }

    toggleHideSidebarTheme() {
        this.themeService.toggleHideSidebarTheme();
    }

    toggleHeaderTheme() {
        this.themeService.toggleHeaderTheme();
    }

    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

    toggle() {
        this.themeService.toggle();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}